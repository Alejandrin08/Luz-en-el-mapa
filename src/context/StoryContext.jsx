import { createContext, useContext, useState, useCallback, useRef } from "react";
import { escolar } from "../data/storyContent.js";

const StoryContext = createContext(null);

const TIPOS = Object.keys(escolar);
const RESOURCE_ID = "cc86a62f-6581-40b1-a5f3-d81e5ca5745a";
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_MODEL   = "llama-3.3-70b-versatile";

const DELITOS_POR_TIPO = {
  abuso_sexual:         ["Abuso sexual"],
  acoso_sexual:         ["Acoso sexual"],
  hostigamiento_sexual: ["Hostigamiento sexual"],
  corrupcion_menores:   ["Corrupción de menores"],
};

const ENTORNO_LABELS = {
  escuela: "school classroom",
  hogar:   "home interior",
  digital: "digital environment with screens",
  publico: "public urban space in Mexico",
};
const EDAD_LABELS = {
  "0-5":   "a toddler around 4 years old",
  "6-12":  "a child around 9 years old",
  "13-17": "a teenager around 15 years old",
};
const GENERO_LABELS = {
  Femenino:            "girl",
  Masculino:           "boy",
  "No binario / Otro": "child",
};

function elegirTipoAleatorio() {
  return TIPOS[Math.floor(Math.random() * TIPOS.length)];
}

function buildSQL(estado, delitos) {
  const list = delitos.map((d) => `'${d.replace(/'/g, "''")}'`).join(", ");
  return (
    `SELECT "Subtipo de delito", "Sexo", "Rango de edad", SUM("Cantidad"::numeric) as total ` +
    `FROM "${RESOURCE_ID}" ` +
    `WHERE "Entidad" ILIKE '${estado.replace(/'/g, "''")}' ` +
    `AND "Subtipo de delito" IN (${list}) ` +
    `GROUP BY "Subtipo de delito", "Sexo", "Rango de edad" ORDER BY total DESC LIMIT 30`
  );
}

async function groqChat(prompt) {
  if (!GROQ_API_KEY) {
    console.warn("VITE_GROQ_API_KEY no definida en .env");
    return null;
  }
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150,
      temperature: 0.7,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Groq ${res.status}: ${err}`);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim() || null;
}

async function sanitizarTextos(contextoEs, opcionesDescs) {
  if (!GROQ_API_KEY) {
    return {
      contextoEn: "a tense situation in a school environment",
      opcionesEn: opcionesDescs.map(() => "a thoughtful response to the situation"),
    };
  }

  const listaOpciones = opcionesDescs.map((d, i) => `${i + 1}. ${d}`).join("\n");

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [{
          role: "user",
          content:
            `Translate the following Spanish texts into SHORT English descriptions for illustration prompts. ` +
            `Use only neutral, visual, non-sensitive terms. Focus on setting, mood, and body language. ` +
            `Avoid words related to harassment, abuse, body parts, or violence. ` +
            `Respond ONLY with a JSON object, no markdown, no explanation:\n` +
            `{\n  "context": "<max 15 words>",\n  "options": ["<max 10 words>", "<max 10 words>", "<max 10 words>"]\n}\n\n` +
            `Context: "${contextoEs}"\n\nOptions:\n${listaOpciones}`,
        }],
        max_tokens: 120,
        temperature: 0.3,
      }),
    });
    const data   = await res.json();
    const raw    = data.choices?.[0]?.message?.content?.trim() || "{}";
    const parsed = JSON.parse(raw);
    return {
      contextoEn: parsed.context || "a tense situation in a school environment",
      opcionesEn: parsed.options || opcionesDescs.map(() => "a thoughtful response"),
    };
  } catch (err) {
    console.warn("sanitizarTextos falló:", err.message);
    return {
      contextoEn: "a tense situation in a school environment",
      opcionesEn: opcionesDescs.map(() => "a thoughtful response to the situation"),
    };
  }
}

function buildImagePrompt(config, opcionDescEn, contextoEn) {
  const entorno = ENTORNO_LABELS[config.contexto] || "school classroom";
  const edad    = EDAD_LABELS[config.edad]         || "a child";
  const genero  = GENERO_LABELS[config.genero]     || "child";
  return (
    `Wide-angle environmental illustration, Studio Ghibli inspired digital art. ` +
    `Setting: a ${entorno} in Mexico. Narrative context: "${contextoEn}". ` +
    `The scene mood and lighting MUST reflect this action: "${opcionDescEn}". ` +
    `A ${edad} ${genero} is visible but small in the frame; the atmosphere tells the story. ` +
    `Soft warm colors, highly detailed background. No text, no violence, child-safe symbolic imagery only.`
  );
}

function buildPollinationsUrl(prompt) {
  const promptCorto = prompt.slice(0, 350);
  const seed        = Math.floor(Math.random() * 999999);
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(promptCorto)}?width=640&height=360&seed=${seed}&nologo=true&model=turbo`;
}

async function generarURLsParaCapitulo({
  capKeyPrefix,
  opciones,
  descripcion,
  config,
  version,
  generandoKeys,
  imageCacheRef,
  setImageCache,
}) {
  const lockKey   = `v${version}_${capKeyPrefix}`;
  if (generandoKeys.has(lockKey)) return;

  const faltantes = opciones.filter(
    (o) => !imageCacheRef[`v${version}_${capKeyPrefix}_${o.id}`]
  );
  if (faltantes.length === 0) return;

  generandoKeys.add(lockKey);

  console.log(`[Imágenes] Generando ${faltantes.length} para ${lockKey}`);

  const descsOriginales            = faltantes.map((o) => o.desc || o.titulo);
  const { contextoEn, opcionesEn } = await sanitizarTextos(descripcion[0] || "", descsOriginales);

  console.log(`[Contexto sanitizado]: ${contextoEn}`);

  const nuevas = {};
  faltantes.forEach((opcion, idx) => {
    const cacheKey     = `v${version}_${capKeyPrefix}_${opcion.id}`;
    const opcionDescEn = opcionesEn[idx] || "a thoughtful response";
    const prompt       = buildImagePrompt(config, opcionDescEn, contextoEn);
    const url          = buildPollinationsUrl(prompt);
    const img          = { src: url };

    imageCacheRef[cacheKey] = img;
    nuevas[cacheKey]        = img;
    console.log(`✓ URL lista: ${cacheKey}`);
  });

  setImageCache((prev) => ({ ...prev, ...nuevas }));
}

export function StoryProvider({ children }) {
  const [config, setConfig]           = useState({
    estado: "Ciudad de México",
    edad: "6-12",
    genero: "Femenino",
    contexto: "escuela",
  });
  const [tipoHistoria, setTipoHistoria] = useState(null);
  const [decisiones, setDecisiones]     = useState({ cap1: "a", cap2: "a" });
  const [imageCache, setImageCache]     = useState({});
  const [datoDinamico, setDatoDinamico] = useState(null);
  const [loadingDato, setLoadingDato]   = useState(false);

  const configVersionRef = useRef(0);
  const generandoKeys    = useRef(new Set());
  const imageCacheRef    = useRef({});

  const iniciarHistoria = useCallback(async (configUsuario) => {
    configVersionRef.current += 1;
    generandoKeys.current.clear();
    imageCacheRef.current = {};

    setConfig(configUsuario);
    const tipo = elegirTipoAleatorio();
    setTipoHistoria(tipo);
    setDecisiones({ cap1: "a", cap2: "a" });
    setImageCache({});
    setDatoDinamico(null);
    setLoadingDato(true);

    const version = configVersionRef.current;

    generarURLsParaCapitulo({
      capKeyPrefix:  `${tipo}_cap1`,
      opciones:       escolar[tipo].capitulo1.opciones,
      descripcion:    escolar[tipo].capitulo1.descripcion,
      config:         configUsuario,
      version,
      generandoKeys:  generandoKeys.current,
      imageCacheRef:  imageCacheRef.current,
      setImageCache,
    });

    try {
      const delitos = DELITOS_POR_TIPO[tipo] || ["Abuso sexual"];
      const sqlUrl  = `https://datamx.io/api/3/action/datastore_search_sql?sql=${encodeURIComponent(buildSQL(configUsuario.estado, delitos))}`;
      const res     = await fetch(sqlUrl);
      const json    = await res.json();

      if (!json.success || !json.result?.records?.length) {
        console.warn("Sin datos en API para", configUsuario.estado);
        setDatoDinamico(null);
        return;
      }

      const records      = json.result.records;
      const totalGeneral = records.reduce((s, r) => s + (parseFloat(r.total) || 0), 0);
      const resumen      = records
        .slice(0, 10)
        .map((r) => `${r["Subtipo de delito"]} | ${r["Sexo"]} | ${r["Rango de edad"]}: ${Math.round(r.total)} casos`)
        .join("\n");

      const promptTexto =
        `Eres redactor para una plataforma de concientización sobre violencia contra la infancia en México.\n` +
        `Datos reales en ${configUsuario.estado} (fuente SESNSP):\n` +
        `Delito: ${escolar[tipo].label} | Total: ${Math.round(totalGeneral)} casos registrados\n` +
        `Desglose:\n${resumen}\n\n` +
        `Escribe UN párrafo breve (2-3 oraciones, máx 60 palabras) en español, tono humano, ` +
        `con cifras concretas, generando empatía. Sin listas ni tecnicismos. Solo el párrafo, sin comillas.`;

      const texto = await groqChat(promptTexto);
      console.log("✓ Groq texto:", texto?.slice(0, 60));
      setDatoDinamico(texto);
    } catch (err) {
      console.error("Error dato dinámico:", err);
      setDatoDinamico(null);
    } finally {
      setLoadingDato(false);
    }
  }, []);

  const preGenerarImagenes = useCallback((capKeyPrefix, opciones, descripcion) => {
    generarURLsParaCapitulo({
      capKeyPrefix,
      opciones,
      descripcion,
      config,
      version:       configVersionRef.current,
      generandoKeys: generandoKeys.current,
      imageCacheRef: imageCacheRef.current,
      setImageCache,
    });
  }, [config]);

  const tomarDecision = useCallback((capitulo, opcionId) => {
    setDecisiones((prev) => ({ ...prev, [capitulo]: opcionId }));
  }, []);

  return (
    <StoryContext.Provider value={{
      config,
      tipoHistoria,
      decisiones,
      imageCache,
      datoDinamico,
      loadingDato,
      iniciarHistoria,
      tomarDecision,
      preGenerarImagenes,
      configVersion: configVersionRef.current,
    }}>
      {children}
    </StoryContext.Provider>
  );
}

export function useStory() {
  const ctx = useContext(StoryContext);
  if (!ctx) throw new Error("useStory debe usarse dentro de <StoryProvider>");
  return ctx;
}