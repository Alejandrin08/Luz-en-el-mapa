import { Link } from "react-router-dom";
import { ShieldCheck, Map, BarChart3, Users } from "lucide-react";
import SiteLayout from "../components/SiteLayout.jsx";

const states = [
  { d: "M40 80 L120 60 L160 100 L130 160 L60 150 Z", fill: "var(--color-chart-3)" },
  { d: "M160 100 L240 90 L260 160 L200 180 L130 160 Z", fill: "var(--color-chart-1)" },
  { d: "M240 90 L320 110 L340 180 L260 160 Z", fill: "var(--color-chart-2)" },
  { d: "M130 160 L200 180 L220 240 L150 250 Z", fill: "var(--color-chart-4)" },
  { d: "M200 180 L260 160 L340 180 L300 260 L220 240 Z", fill: "var(--color-chart-5)" },
];

export default function Nacional() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary px-3 py-1 text-xs font-medium">
          <ShieldCheck className="h-3.5 w-3.5" /> CONCLUSIÓN DE LA EXPERIENCIA
        </span>
        <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
          La responsabilidad <em className="not-italic text-primary">nunca</em> es de la niñez.
        </h1>
        <p className="mt-4 text-muted-foreground">
          A través de datos reales, hemos visto cómo decisiones individuales se entretejen con la falta de apoyo, la ausencia de política y la revictimización del sistema.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/recursos" className="rounded-md bg-primary px-5 py-2.5 text-primary-foreground font-medium hover:bg-primary/90">
            Solicitar Asistencia
          </Link>
          <Link to="/" className="rounded-md border border-input bg-card px-5 py-2.5 font-medium hover:bg-accent">
            Ver Recursos y Apoyo
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-2xl font-bold text-center">Realidad Nacional</h2>
        <p className="mt-2 text-center text-muted-foreground text-sm">
          Cada punto en este mapa representa una historia que no debió suceder. Visualiza la magnitud sistémica de la violencia contra la infancia en cada entidad federativa.
        </p>

        <div className="mt-8 rounded-xl border bg-card p-6">
          <p className="text-sm font-semibold">Mapa Nacional de Incidencia</p>
          <p className="text-xs text-muted-foreground">Reportes registrados por entidad federativa</p>
          <div className="mt-6 grid place-items-center">
            <svg viewBox="0 0 400 300" className="w-full max-w-xl">
              {states.map((s, i) => (
                <path key={i} d={s.d} fill={s.fill} opacity={0.6} stroke="var(--color-background)" strokeWidth={2} />
              ))}
              <circle cx="200" cy="170" r="8" fill="var(--color-primary)" />
              <text x="212" y="174" fontSize="10" fill="var(--color-foreground)">CDMX</text>
            </svg>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center border-t pt-6">
            <div>
              <p className="text-2xl font-bold text-primary">7,240+</p>
              <p className="text-xs text-muted-foreground mt-1">Casos reportados en 2024</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">32</p>
              <p className="text-xs text-muted-foreground mt-1">Entidades con datos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">15%</p>
              <p className="text-xs text-muted-foreground mt-1">Casos resueltos</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-2xl font-bold text-center">Convierte la indignación en acción</h2>
        <p className="mt-2 text-center text-muted-foreground text-sm">
          Las acciones colectivas dependen de personas informadas. Usa estas herramientas para amplificar la denuncia y exigir mejores sistemas de protección.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            { icon: Map, title: "Comparte Mapa", desc: "Difunde los datos en tu comunidad." },
            { icon: BarChart3, title: "Descarga Reporte", desc: "Accede al informe completo en PDF." },
            { icon: Users, title: "Únete a Organización", desc: "Conecta con redes de protección activas." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border bg-card p-5 text-center">
              <span className="mx-auto grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
