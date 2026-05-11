import { createContext, useContext, useState, useCallback, useRef } from "react";
import { stories } from "../data/storyContent.js";

const StoryContext = createContext(null);

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_MODEL = "llama-3.3-70b-versatile";
const RESOURCE_ID = "cc86a62f-6581-40b1-a5f3-d81e5ca5745a";


const NOMBRES = {
  Femenino: ["Sofía", "Valentina", "Camila", "Lucía", "Isabella"],
  Masculino: ["Pedro", "Mateo", "Diego", "Emilio", "Sebastián"],
  "No binario / Otro": ["Alex", "Sam", "Nico", "Jordan", "Remy"],
};

const ENTORNO_LABELS = {
  escolar: "school classroom",
  hogar: "home interior",
  digital: "digital environment with screens",
  publico: "public urban space in Mexico",
};
const EDAD_LABELS = {
  "0-5": "a toddler around 4 years old",
  "6-12": "a child around 9 years old",
  "13-17": "a teenager around 15 years old",
};
const GENERO_LABELS = {
  Femenino: "girl",
  Masculino: "boy",
  "No binario / Otro": "child",
};

function elegirNombre(genero) {
  const lista = NOMBRES[genero] || NOMBRES["No binario / Otro"];
  return lista[Math.floor(Math.random() * lista.length)];
}

function buildSQL(estado, delitos, limit = 30) {
  const delitosArray = Array.isArray(delitos) ? delitos : [delitos];

  const list = delitosArray
    .map((d) => `'${d.replace(/'/g, "''")}'`)
    .join(", ");

  return (
    `SELECT "Tipo de delito", "Sexo", "Rango de edad", SUM("Cantidad"::numeric) as total ` +
    `FROM "${RESOURCE_ID}" ` +
    `WHERE "Entidad" ILIKE '${estado.replace(/'/g, "''")}' ` +
    `AND "Tipo de delito" IN (${list}) ` +
    `GROUP BY "Tipo de delito", "Sexo", "Rango de edad" ` +
    `ORDER BY total DESC LIMIT ${limit}`
  );
}

async function groqChat(prompt) {
  if (!GROQ_API_KEY) return null;
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
  if (!res.ok) throw new Error(`Groq ${res.status}`);
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
    const data = await res.json();
    const raw = data.choices?.[0]?.message?.content?.trim() || "{}";
    const parsed = JSON.parse(raw);
    return {
      contextoEn: parsed.context || "a tense situation",
      opcionesEn: parsed.options || opcionesDescs.map(() => "a thoughtful response"),
    };
  } catch {
    return {
      contextoEn: "a tense situation in a school environment",
      opcionesEn: opcionesDescs.map(() => "a thoughtful response to the situation"),
    };
  }
}

function buildImagePrompt(config, opcionDescEn, contextoEn) {
  const entorno = ENTORNO_LABELS[config.contexto] || "school classroom";
  const edad = EDAD_LABELS[config.edad] || "a child";
  const genero = GENERO_LABELS[config.genero] || "child";
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
  const seed = Math.floor(Math.random() * 999999);
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(promptCorto)}?width=640&height=360&seed=${seed}&nologo=true&model=turbo`;
}

async function generarURLsParaCapitulo({
  capKeyPrefix, opciones, descripcion, config, version,
  generandoKeys, imageCacheRef, setImageCache,
}) {
  const lockKey = `v${version}_${capKeyPrefix}`;
  if (generandoKeys.has(lockKey)) return;

  const faltantes = opciones.filter(
    (o) => !imageCacheRef[`v${version}_${capKeyPrefix}_${o.id}`]
  );
  if (faltantes.length === 0) return;

  generandoKeys.add(lockKey);

  const textoDesc = descripcion
    .filter((p) => typeof p === "string")
    .join(" ");

  const descsOriginales = faltantes.map((o) => o.desc || o.titulo);
  const { contextoEn, opcionesEn } = await sanitizarTextos(textoDesc, descsOriginales);

  const nuevas = {};
  faltantes.forEach((opcion, idx) => {
    const cacheKey = `v${version}_${capKeyPrefix}_${opcion.id}`;
    const opcionDescEn = opcionesEn[idx] || "a thoughtful response";
    const prompt = buildImagePrompt(config, opcionDescEn, contextoEn);
    const url = buildPollinationsUrl(prompt);
    imageCacheRef[cacheKey] = { src: url };
    nuevas[cacheKey] = { src: url };
  });

  setImageCache((prev) => ({ ...prev, ...nuevas }));
}

async function generarDatoInline({ estado, delito, sublabel, groqKey }) {
  if (!groqKey) return null;

  const delitos = Array.isArray(delito) ? delito : [delito];

  try {
    const sql = buildSQL(estado, delitos, 10);

    const sqlUrl =
      `https://datamx.io/api/3/action/datastore_search_sql?sql=${encodeURIComponent(sql)}`;

    const res = await fetch(sqlUrl);
    const json = await res.json();

    if (!json.success || !json.result?.records?.length) return "sin datos";

    const records = json.result.records;

    const total = records.reduce(
      (s, r) => s + (parseFloat(r.total) || 0),
      0
    );

    if (!total) {
      return "sin datos";
    }

    const resumen = records
      .slice(0, 5)
      .map(
        (r) =>
          `${r["Sexo"]} | ${r["Rango de edad"]}: ${Math.round(r.total)} casos`
      )
      .join("\n");

    const prompt =
      `Eres redactor para una plataforma de concientización sobre violencia contra la infancia en México.\n` +
      `Datos reales en ${estado} (fuente SESNSP):\n` +
      `Delito(s): ${delitos.join(", ")} | Total: ${Math.round(total)} casos registrados\n` +
      `Desglose:\n${resumen}\n\n` +
      `Escribe UNA oración (máx 35 palabras) en español que mencione una cifra concreta sobre ${delitos.join(", ")} en ${estado}. ` +
      `Tono empático, sin tecnicismos. Solo la oración, sin comillas ni explicaciones.`;

    return await groqChat(prompt);

  } catch (err) {
    console.warn("generarDatoInline error:", err.message);
    return null;
  }
}

export function StoryProvider({ children }) {
  const [config, setConfig] = useState({
    estado: "Ciudad de México",
    edad: "6-12",
    rango: "infancia",
    genero: "Femenino",
    contexto: "escolar",
    nombre: "Sofía",
  });
  const [decisiones, setDecisiones] = useState({ cap1: "a", cap2: "a" });
  const [imageCache, setImageCache] = useState({});
  const [datosInline, setDatosInline] = useState({});     // { "indice_cap_X": texto }
  const [loadingDato, setLoadingDato] = useState(false);

  const configVersionRef = useRef(0);
  const generandoKeys = useRef(new Set());
  const imageCacheRef = useRef({});
  const datosInlineRef = useRef({});

  const iniciarHistoria = useCallback(async (configUsuario) => {
    configVersionRef.current += 1;
    generandoKeys.current.clear();
    imageCacheRef.current = {};

    const nombre = elegirNombre(configUsuario.genero);
    const rango = (configUsuario.edad === "6-12") ? "infancia" : "adolescencia";
    const config = { ...configUsuario, nombre, rango };

    setConfig(config);
    setDecisiones({ cap1: "a", cap2: "a" });
    setImageCache({});

    setDatosInline({});
    setLoadingDato(true);

    const version = configVersionRef.current;
    const contexto = config.contexto;
    const historia = stories[contexto]?.[rango];
    if (!historia) { setLoadingDato(false); return; }

    // Imágenes cap1
    generarURLsParaCapitulo({
      capKeyPrefix: `${historia}_cap1`,
      opciones: historia.capitulo1.opciones,
      descripcion: historia.capitulo1.descripcion,
      config,
      version,
      generandoKeys: generandoKeys.current,
      imageCacheRef: imageCacheRef.current,
      setImageCache,
    });

    // Datos inline (bloques { tipo:"dato", delito:"..." })
    const bloques = historia.capitulo1.descripcion.filter(
      (p) => p && typeof p === "object" && p.tipo === "dato"
    );

    bloques.forEach(async (bloque, i) => {
      +
        setDatosInline((prev) => ({
          ...prev,
          [`cap1_${i}`]: null
        }));

      const texto = await generarDatoInline({
        estado: config.estado,
        delito: bloque.delito,
        sublabel: bloque.sublabel,
        groqKey: GROQ_API_KEY,
      });
      setDatosInline((prev) => ({
        ...prev,
        [`cap1_${i}`]: texto ?? "sin datos"
      }));
    });


  }, []);

  const generarDatosInlineCap = useCallback(async (capKey, descripcion) => {
    const bloques = descripcion.filter(
      (p) => p && typeof p === "object" && p.tipo === "dato"
    );

    bloques.forEach(async (bloque, i) => {
      const clave = `${capKey}_${i}`;
      datosInlineRef.current[clave] = null;

      setDatosInline((prev) => ({
        ...prev,
        [clave]: null,
      }));

      const texto = await generarDatoInline({
        estado: config.estado,
        delito: bloque.delito,
        sublabel: bloque.sublabel,
        groqKey: GROQ_API_KEY,
      });

      const resultado = texto ?? "sin datos";

      datosInlineRef.current[clave] = resultado;

      setDatosInline((prev) => ({
        ...prev,
        [clave]: resultado,
      }));
    });

  }, [config.estado]);

  const preGenerarImagenes = useCallback((capKeyPrefix, opciones, descripcion) => {
    generarURLsParaCapitulo({
      capKeyPrefix,
      opciones,
      descripcion,
      config,
      version: configVersionRef.current,
      generandoKeys: generandoKeys.current,
      imageCacheRef: imageCacheRef.current,
      setImageCache,
    });
  }, [config]);

  const tomarDecision = useCallback((capitulo, opcionId) => {
    setDecisiones((prev) => ({ ...prev, [capitulo]: opcionId }));
  }, []);

  const interpolar = useCallback((texto, nombre) => {
    return typeof texto === "string" ? texto.replace(/\{nombre\}/g, nombre) : texto;
  }, []);

  return (
    <StoryContext.Provider value={{
      config,
      decisiones,
      imageCache,
      datosInline,
      loadingDato,
      iniciarHistoria,
      tomarDecision,
      preGenerarImagenes,
      interpolar,
      configVersion: configVersionRef.current,
      generarDatosInlineCap,
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