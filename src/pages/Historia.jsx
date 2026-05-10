import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import SiteLayout from "../components/SiteLayout.jsx";
import classroom from "../assets/classroom.jpg";

const choices = [
  { id: "a", title: "Notificar en la escuela", desc: "La maestra nota cambios en el comportamiento y decide hablar con la directiva escolar." },
  { id: "b", title: "Confiar en el círculo cercano", desc: "Se intenta buscar apoyo dentro de la familia extendida, esperando una red de protección natural." },
  { id: "c", title: "El peso del silencio", desc: "El entorno decide esperar por miedo a las represalias o a la falta de pruebas claras." },
];

export default function Historia() {
  const [choice, setChoice] = useState("a");

  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="flex justify-between text-xs font-semibold tracking-wider text-muted-foreground">
          <span className="text-primary">PROGRESO DE LA HISTORIA</span>
          <span>PASO 2 DE 5</span>
        </div>
        <div className="mt-2 h-1 rounded-full bg-secondary overflow-hidden">
          <div className="h-full w-2/5 bg-primary" />
        </div>

        <article className="mt-8 rounded-xl border bg-card p-6 md:p-8">
          <h1 className="text-2xl font-bold">Capítulo 1: Las grietas en el entorno</h1>
          <div className="mt-4 space-y-4 text-foreground/90 leading-relaxed">
            <p>
              En una colonia trabajadora del Estado de México, Ana, de 9 años, ha comenzado a mostrarse retraída.
              Sus notas han bajado drásticamente y evita participar en las actividades que antes amaba. Lo que parece
              un cambio común de la infancia es, en realidad, el primer síntoma de una fractura sistémica.
            </p>
            <p>
              Su entorno más cercano —la escuela y su familia— empieza a notar que algo no está bien. Sin embargo,
              las herramientas para identificar la violencia sexual infantil son escasas y el miedo a señalar sin
              "pruebas absolutas" paraliza a quienes deberían protegerla.
            </p>
            <p className="font-medium text-primary">
              ¿Cuál es la primera reacción que toma el sistema ante esta situación?
            </p>
          </div>
        </article>

        <p className="mt-10 text-center text-xs font-semibold tracking-wider text-muted-foreground">
          SELECCIONA UN CAMINO PARA EXPLORAR LA NARRATIVA
        </p>
        <div className="mt-4 grid md:grid-cols-3 gap-3">
          {choices.map((c) => {
            const active = choice === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setChoice(c.id)}
                className={`relative text-left rounded-lg border p-4 transition ${active ? "border-primary bg-primary-soft" : "bg-card hover:border-primary/40"}`}
              >
                <h3 className="font-semibold text-sm">{c.title}</h3>
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

        <figure className="mt-8 relative overflow-hidden rounded-xl border">
          <img src={classroom} alt="Aula vacía" className="w-full h-[320px] object-cover" />
          <figcaption className="absolute bottom-3 left-3 rounded-md bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1.5 tracking-wider">
            REPRESENTACIÓN VISUAL DE LA REALIDAD
          </figcaption>
        </figure>

        <div className="mt-10 border-t pt-6 flex items-center justify-between">
          <Link to="/configura" className="inline-flex items-center gap-2 rounded-md border border-input bg-card px-4 py-2.5 text-sm font-medium hover:bg-accent">
            <ChevronLeft className="h-4 w-4" /> Regresar a Configuración
          </Link>
          <div className="text-right">
            <p className="text-xs text-muted-foreground mb-2">Tu elección determinará el curso del episodio</p>
            <Link to="/nacional" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-primary-foreground font-medium hover:bg-primary/90">
              Continuar a Escena 2 <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
