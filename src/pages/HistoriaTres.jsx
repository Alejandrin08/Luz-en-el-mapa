import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, Info } from "lucide-react";
import SiteLayout from "../components/SiteLayout.jsx";
import StoryImage from "../components/StoryImage.jsx";
import DatoDinamico from "../components/DatoDinamico.jsx";
import { useStory } from "../context/StoryContext.jsx";
import { stories, getCap3Key } from "../data/storyContent.js";
import { useEffect } from "react";

export default function HistoriaTres() {
  const { config, tipoHistoria, decisiones, interpolar } = useStory();
  const [choice, setChoice] = useState("a");

  const decisionCap1 = decisiones.cap1 || "a";
  const decisionCap2 = decisiones.cap2 || "a";
  const nombre = config.nombre;
  const cap3Key = getCap3Key(decisionCap1, decisionCap2);
  const contexto = config.contexto || "escolar";
  const edad = config.rango || "infancia";
  const data = stories[contexto][edad]?.capitulo3[cap3Key];
  const capKeyPrefix = `${contexto}_cap3_${cap3Key}`;

  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="flex justify-between text-xs font-semibold tracking-wider text-muted-foreground">
          <span className="text-primary">PROGRESO DE LA HISTORIA</span>
          <span>PASO 4 DE 5 </span>
        </div>
        <div className="mt-2 h-1 rounded-full bg-secondary overflow-hidden">
          <div className="h-full w-4/5 bg-primary" />
        </div>

        <article className="mt-8 rounded-xl border bg-card p-6 md:p-8">
          <h1 className="text-2xl font-bold">{interpolar(data.titulo)}</h1>
          <div className="mt-4 space-y-4 text-foreground/90 leading-relaxed">
            {data.descripcion.map((bloque, i) => {
              if (typeof bloque === "string") {
                return <p key={i}>{interpolar(bloque, nombre)}</p>;
              }
              if (bloque?.tipo === "dato") {
                const idx = datoIdx++;
                const clave = `cap2_${decisionCap1}_${idx}`;
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
            </div>
          </div>
        )}

        <p className="mt-10 text-center text-2xl font-bold tracking-wider ">
          {interpolar(data.pregunta, config.nombre)}
        </p>


        <StoryImage
          capKeyPrefix={capKeyPrefix}
          opciones={data.opciones}
          opcionSeleccionadaId={choice}
          descripcionHistoria={data.descripcion}
        />

        <div className="mt-10 border-t pt-6 flex items-center justify-between">
          <Link to="/historiaDos" className="inline-flex items-center gap-2 rounded-md border border-input bg-card px-4 py-2.5 text-sm font-medium hover:bg-accent">
            <ChevronLeft className="h-4 w-4" /> Regresar
          </Link>
          <Link to="/mapa" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-primary-foreground font-medium hover:bg-primary/90">
            Ver Conclusión <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}