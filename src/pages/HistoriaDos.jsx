import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Check, Info } from "lucide-react";
import SiteLayout from "../components/SiteLayout.jsx";
import StoryImage from "../components/StoryImage.jsx";
import DatoDinamico from "../components/DatoDinamico.jsx";
import { useStory } from "../context/StoryContext.jsx";
import { stories } from "../data/storyContent.js";
import { useEffect } from "react";



export default function HistoriaDos() {
  const { config, decisiones, interpolar, tomarDecision, datosInline, loadingDato, generarDatosInlineCap } = useStory();

  const contexto = config.contexto || "escolar";
  const edad = config.rango || "infancia";
  const nombre = config.nombre;
  const decisionCap1 = decisiones.cap1 || "a";
  const choice = decisiones.cap2;
  const data = stories[contexto]?.[edad]?.capitulo2?.[decisionCap1];
  const capKeyPrefix = `${contexto}_cap2_${decisionCap1}`;

  if (!data) return null;

  useEffect(() => {
    if (!data?.descripcion?.length) return;

    generarDatosInlineCap("cap1", data.descripcion);
  }, [data, generarDatosInlineCap]);

  let datoIdx = 0;

  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="flex justify-between text-xs font-semibold tracking-wider text-muted-foreground">
          <span className="text-primary">PROGRESO DE LA HISTORIA</span>
          <span>PASO 3 DE 5</span>
        </div>
        <div className="mt-2 h-1 rounded-full bg-secondary overflow-hidden">
          <div className="h-full w-3/5 bg-primary" />
        </div>

        <article className="mt-8 rounded-xl border bg-card p-6 md:p-8">
          <h1 className="text-2xl font-bold">{interpolar(data.titulo, nombre)}</h1>

          <div className="mt-4 space-y-4 text-foreground/90 leading-relaxed">
            {data.descripcion.map((bloque, i) => {
              if (typeof bloque === "string") {
                return <p key={i}>{interpolar(bloque, nombre)}</p>;
              }
              if (bloque?.tipo === "dato") {
                const idx = datoIdx++;
                const clave = `cap1_${idx}`;
                const valor = datosInline[clave] || bloque.texto;

                // Sigue cargando solo si todavía no hay entrada en datosInline
                const cargando = !datosInline[clave];

                // Si ya terminó y no hay datos, no renderizar nada
                if (!cargando && (!valor || valor === "sin datos")) return null;
                return (
                  <DatoDinamico
                    key={i}
                    texto={datosInline[clave] || bloque.texto}
                    label={bloque.sublabel}
                    loading={loadingDato && !datosInline[clave]}
                  />
                );
              }
              return null;
            })}
          </div>
        </article>

        {data?.dato && (
          <div className="mt-6 flex gap-3 rounded-xl border border-yellow-200 bg-yellow-50 p-4">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-yellow-700" />

            <div>
              <p className="text-xs font-semibold text-yellow-800">
                {data.sublabelDato}
              </p>

              <p className="mt-1 text-xs text-foreground/80 leading-relaxed">
                {data.dato}
              </p>

              {data?.fuenteDato && (
                <p className="mt-2 text-[10px] text-foreground/40 leading-relaxed">
                  {data.fuenteDato}
                </p>
              )}
            </div>
          </div>
        )}

        <p className="mt-10 text-center text-2xl font-bold tracking-wider">
          {interpolar(data.pregunta, nombre)}
        </p>
        <div className="mt-4 grid md:grid-cols-3 gap-3">
          {data.opciones.map((c) => {
            const active = choice === c.id;
            return (
              <button
                key={c.id}
                onClick={() => tomarDecision("cap2", c.id)}
                className={`relative text-left rounded-lg border p-4 transition ${active ? "border-primary bg-primary-soft" : "bg-card hover:border-primary/40"
                  }`}
              >
                <h3 className="font-semibold text-sm">{interpolar(c.titulo, nombre)}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{interpolar(c.desc, nombre)}</p>
                {active && (
                  <span className="absolute top-2 right-2 grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3 w-3" />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <StoryImage
          capKeyPrefix={capKeyPrefix}
          opciones={data.opciones}
          opcionSeleccionadaId={choice}
          descripcionHistoria={data.descripcion}
        />

        <div className="mt-10 border-t pt-6 flex items-center justify-between">
          <Link
            to="/historiaUno"
            className="inline-flex items-center gap-2 rounded-md border border-input bg-card px-4 py-2.5 text-sm font-medium hover:bg-accent"
          >
            <ChevronLeft className="h-4 w-4" /> Atrás
          </Link>
          <Link
            to="/historiaTres"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-primary-foreground font-medium hover:bg-primary/90"
          >
            Continuar a Capítulo 3 <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}