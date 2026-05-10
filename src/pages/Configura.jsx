import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, User, Users, Baby, Home, School, Globe, MapPin, Info, ArrowRight, X } from "lucide-react";
import SiteLayout from "../components/SiteLayout.jsx";
import { useStory } from "../context/StoryContext.jsx";

const ESTADOS = [
  "Aguascalientes", "Baja California", "Baja California Sur", "Campeche",
  "Chiapas", "Chihuahua", "Ciudad de México", "Coahuila", "Colima",
  "Durango", "Estado de México", "Guanajuato", "Guerrero", "Hidalgo",
  "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca",
  "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa",
  "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz",
  "Yucatán", "Zacatecas",
];

const ages = [
  { id: "0-5",   label: "0 - 5 años",   sub: "Primera infancia", icon: Baby },
  { id: "6-12",  label: "6 - 12 años",  sub: "Infancia",         icon: User },
  { id: "13-17", label: "13 - 17 años", sub: "Adolescencia",     icon: Users },
];

const contexts = [
  { id: "hogar",   label: "Hogar",          icon: Home   },
  { id: "escuela", label: "Escuela",         icon: School },
  { id: "digital", label: "Digital",         icon: Globe  },
  { id: "publico", label: "Espacio Público", icon: MapPin },
];

export default function Configura() {
  const { iniciarHistoria } = useStory();
  const navigate = useNavigate();

  const [estado, setEstado] = useState("Ciudad de México");
  const [age, setAge] = useState("6-12");
  const [gender, setGender] = useState("Femenino");
  const [context, setContext] = useState("escuela");

  function handleIniciar() {
    iniciarHistoria({ estado, edad: age, genero: gender, contexto: context });
    navigate("/historiaUno");
  }

  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="flex justify-between text-xs font-semibold tracking-wider text-muted-foreground">
          <span className="text-primary">PROGRESO DE LA HISTORIA</span>
          <span>PASO 1 DE 5</span>
        </div>
        <div className="mt-2 h-1 rounded-full bg-secondary overflow-hidden">
          <div className="h-full w-1/5 bg-primary" />
        </div>

        <div className="mt-10 text-center">
          <h1 className="text-3xl font-bold">Configura tu historia</h1>
          <p className="mt-3 text-muted-foreground">
            Selecciona las variables para contextualizar la narrativa. Esta información ayuda a reflejar las realidades específicas de cada entorno en México.
          </p>
        </div>

        <div className="mt-8 rounded-xl border bg-card p-6 md:p-8 space-y-8">

          <div>
            <p className="text-xs font-semibold tracking-wider text-muted-foreground">UBICACIÓN</p>
            <label className="mt-2 block text-sm font-medium">Estado de la República</label>
            <div className="mt-2 relative">
              <select
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                className="w-full appearance-none rounded-md border border-input bg-background pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
              >
                {ESTADOS.map((e) => (
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Los datos estadísticos se adaptarán según la entidad federativa elegida.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider text-muted-foreground">RANGO DE EDAD DE LA VÍCTIMA</p>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {ages.map((a) => {
                const active = age === a.id;
                const Icon = a.icon;
                return (
                  <button
                    key={a.id}
                    onClick={() => setAge(a.id)}
                    className={`relative rounded-lg border p-4 text-left transition ${active ? "border-primary bg-primary-soft" : "bg-card hover:border-primary/40"}`}
                  >
                    <span className={`grid h-9 w-9 place-items-center rounded-full ${active ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="mt-3 font-semibold text-sm">{a.label}</div>
                    <div className="text-xs text-muted-foreground">{a.sub}</div>
                    {active && <X className="absolute top-2 right-2 h-3 w-3 text-primary" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider text-muted-foreground">IDENTIDAD DE GÉNERO</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Femenino", "Masculino", "No binario / Otro"].map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`rounded-full px-4 py-2 text-sm font-medium border transition ${gender === g ? "bg-primary text-primary-foreground border-primary" : "bg-card hover:border-primary/40"}`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider text-muted-foreground">CONTEXTO O ENTORNO</p>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
              {contexts.map((c) => {
                const active = context === c.id;
                const Icon = c.icon;
                return (
                  <button
                    key={c.id}
                    onClick={() => setContext(c.id)}
                    className={`relative rounded-lg border p-4 text-center transition ${active ? "border-primary bg-primary-soft" : "bg-card hover:border-primary/40"}`}
                  >
                    <span className={`mx-auto grid h-9 w-9 place-items-center rounded-full ${active ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="mt-3 text-sm font-medium">{c.label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg bg-primary-soft border border-primary/20 p-4 flex gap-3 text-sm">
            <Info className="h-5 w-5 text-primary shrink-0" />
            <p className="text-foreground/80">
              <span className="font-semibold text-primary">Contenido Sensible. </span>
              La historia que estás por iniciar contiene descripciones sobre violencia. Puedes detenerte en cualquier momento si te sientes incómodo/a.
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              Volver al inicio
            </Link>
            <button
              onClick={handleIniciar}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-primary-foreground font-medium hover:bg-primary/90 transition"
            >
              Iniciar Historia <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}