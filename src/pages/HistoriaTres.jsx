import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import SiteLayout from "../components/SiteLayout.jsx";
import StoryImage from "../components/StoryImage.jsx";
import DatoDinamico from "../components/DatoDinamico.jsx";
import { useStory } from "../context/StoryContext.jsx";
import { escolar, getCap3Key } from "../data/storyContent.js";

export default function HistoriaTres() {
  const { tipoHistoria, decisiones } = useStory();
  const [choice, setChoice] = useState("a");

  const tipo         = tipoHistoria || "abuso_sexual";
  const decisionCap1 = decisiones.cap1 || "a";
  const decisionCap2 = decisiones.cap2 || "a";

  const cap3Key      = getCap3Key(decisionCap1, decisionCap2);
  const data         = escolar[tipo].capitulo3[cap3Key];
  const capKeyPrefix = `${tipo}_cap3_${cap3Key}`;

  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="flex justify-between text-xs font-semibold tracking-wider text-muted-foreground">
          <span className="text-primary">PROGRESO DE LA HISTORIA</span>
          <span>PASO 4 DE 5</span>
        </div>
        <div className="mt-2 h-1 rounded-full bg-secondary overflow-hidden">
          <div className="h-full w-4/5 bg-primary" />
        </div>

        <article className="mt-8 rounded-xl border bg-card p-6 md:p-8">
          <h1 className="text-2xl font-bold">{data.titulo}</h1>
          <div className="mt-4 space-y-4 text-foreground/90 leading-relaxed">
            {data.descripcion.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </article>

        <DatoDinamico />

        <p className="mt-10 text-center text-xs font-semibold tracking-wider text-muted-foreground">
          {data.pregunta}
        </p>
        <div className="mt-4 grid md:grid-cols-3 gap-3">
          {data.opciones.map((c) => {
            const active = choice === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setChoice(c.id)}
                className={`relative text-left rounded-lg border p-4 transition ${active ? "border-primary bg-primary-soft" : "bg-card hover:border-primary/40"}`}
              >
                <h3 className="font-semibold text-sm">{c.titulo}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{c.desc}</p>
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