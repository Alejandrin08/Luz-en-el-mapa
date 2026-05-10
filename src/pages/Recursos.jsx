import { Search, Phone, ShieldCheck, AlertTriangle, Heart, Brain } from "lucide-react";
import SiteLayout from "../components/SiteLayout.jsx";

const lines = [
  { tag: "EMERGENCIA", title: "Emergencias 911", desc: "Línea nacional disponible 24/7 para reportar situaciones de riesgo inmediato.", phone: "911" },
  { tag: "AYUDA", title: "Línea de la Vida", desc: "Apoyo emocional gratuito y confidencial las 24 horas del día.", phone: "800 290 0024" },
  { tag: "PROTECCIÓN", title: "PRODENNAyA", desc: "Procuraduría Federal de Protección de Niñas, Niños y Adolescentes.", phone: "55 3003 2200" },
  { tag: "ESCUELA", title: "Tejiendo Redes Infancia", desc: "Red de organizaciones civiles enfocadas en derechos de la infancia.", phone: "55 5615 0000" },
  { tag: "DIGITAL", title: "Pantallas Amigas", desc: "Asesoría sobre violencia digital, ciberacoso y protección en línea.", phone: "" },
  { tag: "FISCALÍA", title: "Fiscalía General (FGR)", desc: "Para denunciar delitos federales contra niñas, niños y adolescentes.", phone: "800 008 5400" },
];

const signs = [
  { icon: AlertTriangle, title: "Señales Físicas", desc: "Lesiones inexplicables, cambios bruscos de peso, dificultad para caminar o sentarse." },
  { icon: Brain, title: "Señales Conductuales", desc: "Aislamiento, regresiones, miedo a personas o lugares específicos, bajo rendimiento escolar." },
  { icon: Heart, title: "Señales Emocionales", desc: "Ansiedad, tristeza persistente, pesadillas, baja autoestima o conducta autodestructiva." },
];

export default function Recursos() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-12 text-center">
        <span className="text-xs font-semibold tracking-wider text-primary">CENTRO DE RECURSOS</span>
        <h1 className="mt-3 text-4xl font-bold">Recursos y Apoyo</h1>
        <p className="mt-3 text-muted-foreground">
          Reúne aquí para acompañarte. Encuentra líneas de ayuda, centros de atención y guías prácticas para actuar con seguridad y empatía.
        </p>
        <div className="mt-6 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            className="w-full rounded-md border border-input bg-card pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="Buscar recursos por estado, tema..."
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6">
        <div className="flex items-center gap-2 text-primary">
          <ShieldCheck className="h-5 w-5" />
          <h2 className="text-xl font-bold">Líneas de Denuncia y Ayuda</h2>
        </div>
        <div className="mt-5 grid md:grid-cols-3 gap-4">
          {lines.map((l) => (
            <div key={l.title} className="rounded-xl border bg-card p-5 flex flex-col">
              <span className="text-[10px] font-bold tracking-wider text-primary bg-primary-soft self-start px-2 py-0.5 rounded">{l.tag}</span>
              <h3 className="mt-3 font-semibold">{l.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground flex-1">{l.desc}</p>
              {l.phone && (
                <a href={`tel:${l.phone.replace(/\s/g, "")}`} className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                  <Phone className="h-4 w-4" /> {l.phone}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 mt-12">
        <div className="rounded-xl border bg-primary-soft/60 p-6 md:p-8 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-primary">Red Nacional de Refugios (RNR)</h3>
            <p className="mt-2 text-sm text-foreground/80">
              Si tú o alguien que conoces está en riesgo, los refugios de la RNR ofrecen atención integral, segura y gratuita a mujeres, niñas y niños en situación de violencia.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="tel:8008224460" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                <Phone className="h-4 w-4" /> Contactar Ahora (800 822 4460)
              </a>
              <button className="rounded-md border border-input bg-card px-4 py-2 text-sm font-medium hover:bg-accent">
                Más Información
              </button>
            </div>
          </div>
          <div className="rounded-lg bg-card border p-4 text-sm">
            <p className="font-semibold text-primary">Atención inmediata</p>
            <p className="mt-1 text-xs text-muted-foreground">Respuesta confidencial 24/7 con personal especializado en protección a la infancia.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 mt-14">
        <h2 className="text-2xl font-bold text-center">Señales de Alerta</h2>
        <p className="mt-2 text-center text-muted-foreground text-sm">
          Las siguientes son señales que pueden indicar que un niño, niña o adolescente está viviendo una situación de violencia.
        </p>
        <div className="mt-6 space-y-3">
          {signs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-lg border bg-card p-4 flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
