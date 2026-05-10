import { Link } from "react-router-dom";
import { FileText, ArrowRight, BarChart3, ShieldCheck } from "lucide-react";
import SiteLayout from "../components/SiteLayout.jsx";

export default function Index() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary px-3 py-1 text-xs font-medium">
          <ShieldCheck className="h-3.5 w-3.5" /> INICIATIVA DE VISIBILIZACIÓN NACIONAL
        </span>
        <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">
          La luz que revela <span className="text-primary">lo invisible</span>
        </h1>
        <p className="mt-6 text-muted-foreground text-lg">
          Una experiencia narrativa interactiva basada en datos reales sobre la violencia contra la infancia en México.
          Tu camino ayudará a entender las fallas del sistema y cómo podemos exigir protección.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/configura" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-primary-foreground font-medium shadow hover:bg-primary/90 transition">
            Crear historia <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/mapa" className="inline-flex items-center gap-2 rounded-md border border-input bg-card px-5 py-3 font-medium hover:bg-accent transition">
            Explorar el mapa
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">¿Cómo funciona esta guía?</h2>
          <p className="mt-2 text-muted-foreground">Tu participación es fundamental para visibilizar las fallas del sistema.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { icon: FileText, title: "Configura", desc: "Define variables demográficas y geográficas para contextualizar la narrativa que estás por presenciar." },
            { icon: ArrowRight, title: "Interactúa", desc: "Toma decisiones críticas que ramifican la historia y revelan cómo el sistema responde en diferentes contextos." },
            { icon: BarChart3, title: "Entiende", desc: "Visualiza datos estadísticos reales vinculados a tus decisiones para comprender la magnitud sistémica." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border bg-card p-6">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
