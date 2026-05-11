import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Map, BarChart3, Users, Loader2, AlertCircle, X, ChevronDown } from "lucide-react";
import SiteLayout from "../components/SiteLayout.jsx";

const RESOURCE_ID = "cc86a62f-6581-40b1-a5f3-d81e5ca5745a";
const API_BASE = "https://datamx.io/api/3/action/datastore_search_sql";

// Lista completa de delitos disponibles
const DELITOS_DISPONIBLES = [
  "Aborto", "Abuso de confianza", "Abuso sexual", "Acoso sexual",
  "Allanamiento de morada", "Amenazas", "Contra el medio ambiente",
  "Corrupción de menores", "Daño a la propiedad",
  "Delitos cometidos por servidores públicos",
  "Delitos contra la administración de justicia", "Despojo",
  "Discriminación", "Electorales", "Evasión de presos", "Extorsión",
  "Falsedad", "Falsificación", "Feminicidio", "Fraude", "Homicidio",
  "Hostigamiento sexual", "Incesto",
  "Incumplimiento de obligaciones de asistencia familiar", "Lesiones",
  "Narcomenudeo", "Otros delitos contra el patrimonio",
  "Otros delitos contra la familia",
  "Otros delitos contra la sociedad",
  "Otros delitos del Fuero Común",
  "Otros delitos que atentan contra la libertad personal",
  "Otros delitos que atentan contra la libertad y la seguridad sexual",
  "Otros delitos que atentan contra la vida y la integridad corporal",
  "Pornografía infantil", "Privación ilegal de la libertad", "Rapto",
  "Retención o sustracción de menores e incapaces", "Robo",
  "Secuestro", "Suplantación y usurpación de identidad", "Tortura",
  "Tráfico de menores", "Trata de personas", "Violación",
  "Violación a la intimidad sexual",
  "Violencia de género en todas sus modalidades distinta a la violencia familiar",
  "Violencia familiar"
];

const COLORS = {
  none: "#e2e8f0",
  low: "#fde68a",
  mid: "#f97316",
  high: "#dc2626",
  top3: "#7c3aed",
  selected: "#0ea5e9",
};

function buildSQL(delito) {
  return `SELECT "Entidad", "Municipio", "Tipo de delito", "Modalidad", "Sexo", "Rango de edad", SUM("Cantidad"::numeric) as total FROM "${RESOURCE_ID}" WHERE "Tipo de delito" = '${delito.replace(/'/g, "''")}' GROUP BY "Entidad", "Municipio", "Tipo de delito", "Modalidad", "Sexo", "Rango de edad" ORDER BY "Entidad"`;
}

function buildSQLEstatal(delito) {
  return `SELECT "Entidad", "Tipo de delito", SUM("Cantidad"::numeric) as total FROM "${RESOURCE_ID}" WHERE "Tipo de delito" = '${delito.replace(/'/g, "''")}' GROUP BY "Entidad", "Tipo de delito" ORDER BY total DESC`;
}

function getColor(valor, max) {
  if (!valor || valor === 0) return COLORS.none;
  const pct = valor / max;
  if (pct < 0.25) return COLORS.low;
  if (pct < 0.6) return COLORS.mid;
  return COLORS.high;
}

export default function Nacional() {
  const mapRef = useRef(null);
  const leafletRef = useRef(null);
  const layerRef = useRef(null);

  const [delito, setDelito] = useState("Abuso sexual");
  const [datos, setDatos] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null); 
  const [top3, setTop3] = useState([]);
  const [stats, setStats] = useState({ total: 0, estados: 0 });

  useEffect(() => {
    setLoading(true);
    setError(null);
    setSelected(null);

    const sql = buildSQLEstatal(delito);
    const url = `${API_BASE}?sql=${encodeURIComponent(sql)}`;

    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        if (!json.success) throw new Error("API error");

        const records = json.result.records;

        const porEstado = {};
        records.forEach(({ Entidad, "Tipo de delito": subtipo, total }) => {
          const t = parseFloat(total) || 0;
          if (!porEstado[Entidad]) porEstado[Entidad] = { total: 0, desglose: {} };
          porEstado[Entidad].total += t;
          porEstado[Entidad].desglose[subtipo] = (porEstado[Entidad].desglose[subtipo] || 0) + t;
        });

        Object.keys(porEstado).forEach((e) => {
          porEstado[e].desglose = Object.entries(porEstado[e].desglose)
            .map(([subtipo, total]) => ({ subtipo, total }))
            .sort((a, b) => b.total - a.total);
        });

        const sorted = Object.entries(porEstado).sort((a, b) => b[1].total - a[1].total);
        const top3Names = sorted.slice(0, 3).map(([e]) => e);
        const totalGeneral = sorted.reduce((s, [, v]) => s + v.total, 0);

        setDatos(porEstado);
        setTop3(top3Names);
        setStats({ total: Math.round(totalGeneral), estados: sorted.length });
      })
      .catch((err) => {
        console.error(err);
        setError("No se pudieron cargar los datos. Verifica la conexión a la API.");
      })
      .finally(() => setLoading(false));
  }, [delito]);

  useEffect(() => {
    if (leafletRef.current || !mapRef.current) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => {
      const L = window.L;
      const map = L.map(mapRef.current, {
        center: [23.6345, -102.5528],
        zoom: 5,
        zoomControl: true,
        scrollWheelZoom: true,
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
        maxZoom: 12,
      }).addTo(map);

      leafletRef.current = map;
    };
    document.head.appendChild(script);

    return () => {
      if (leafletRef.current) {
        leafletRef.current.remove();
        leafletRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!leafletRef.current || !datos) return;

    const L = window.L;
    if (!L) return;

    if (layerRef.current) {
      leafletRef.current.removeLayer(layerRef.current);
    }

    const max = Math.max(...Object.values(datos).map((d) => d.total), 1);

    fetch("https://raw.githubusercontent.com/angelnmara/geojson/master/mexicoHigh.json")
      .then((r) => r.json())
      .then((geojson) => {
        const layer = L.geoJSON(geojson, {
          style: (feature) => {
            const nombre = feature.properties.name || feature.properties.NAME || feature.properties.NOM_ENT;
            const estadoData = matchEstado(nombre, datos);
            const isTop3 = top3.some((t) => normalizeEstado(t) === normalizeEstado(nombre));
            const isSelected = selected && normalizeEstado(selected.nombre) === normalizeEstado(nombre);

            return {
              fillColor: isSelected
                ? COLORS.selected
                : isTop3
                ? COLORS.top3
                : estadoData
                ? getColor(estadoData.total, max)
                : COLORS.none,
              weight: isSelected ? 3 : isTop3 ? 2 : 1,
              opacity: 1,
              color: isSelected ? "#0284c7" : isTop3 ? "#5b21b6" : "#94a3b8",
              fillOpacity: isSelected ? 0.85 : isTop3 ? 0.75 : 0.65,
            };
          },
          onEachFeature: (feature, layer) => {
            const nombre = feature.properties.name || feature.properties.NAME || feature.properties.NOM_ENT;
            const estadoData = matchEstado(nombre, datos);

            layer.on({
              click: () => {
                if (estadoData) {
                  setSelected({ nombre: nombre, ...estadoData });
                } else {
                  setSelected({ nombre, total: 0, desglose: [] });
                }
              },
              mouseover: (e) => {
                e.target.setStyle({ weight: 2.5, fillOpacity: 0.9 });
              },
              mouseout: (e) => {
                layer.resetStyle(e.target);
              },
            });
          },
        }).addTo(leafletRef.current);

        layerRef.current = layer;
      })
      .catch(console.error);
  }, [datos, top3, selected]);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary px-3 py-1 text-xs font-medium">
          <ShieldCheck className="h-3.5 w-3.5" /> DATOS POR TIPO DE DELITO
        </span>
        <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
          Visualizando la violencia <em className="not-italic text-primary">por tipo de delito</em>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Explora la incidencia de cada delito a nivel nacional por entidad federativa.
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

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold">Mapa Nacional de Incidencia</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Casos de {delito} por entidad federativa · Haz clic en un estado para ver el detalle
            </p>
          </div>

          <div className="relative">
            <label className="text-xs font-semibold text-muted-foreground tracking-wider block mb-1">FILTRAR POR TIPO DE DELITO</label>
            <div className="relative">
              <select
                value={delito}
                onChange={(e) => setDelito(e.target.value)}
                className="appearance-none rounded-lg border border-input bg-card pl-4 pr-10 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer min-w-[200px]"
              >
                {DELITOS_DISPONIBLES.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card overflow-hidden">
          <div className="grid grid-cols-3 divide-x border-b">
            <div className="p-4 text-center">
              {loading ? (
                <div className="h-7 w-20 mx-auto bg-secondary animate-pulse rounded" />
              ) : (
                <p className="text-2xl font-bold text-primary">{stats.total.toLocaleString("es-MX")}</p>
              )}
              <p className="text-xs text-muted-foreground mt-1">Casos de {delito}</p>
            </div>
            <div className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">{stats.estados}</p>
              <p className="text-xs text-muted-foreground mt-1">Entidades con datos</p>
            </div>
            <div className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">1</p>
              <p className="text-xs text-muted-foreground mt-1">Tipo de delito seleccionado</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="relative flex-1 min-h-[480px]">
              <div ref={mapRef} className="w-full h-[480px]" />

              {loading && (
                <div className="absolute inset-0 bg-card/80 backdrop-blur-sm flex items-center justify-center z-[1000]">
                  <div className="flex flex-col items-center gap-3">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <p className="text-sm font-medium">Cargando datos de {delito}…</p>
                  </div>
                </div>
              )}

              {error && !loading && (
                <div className="absolute inset-0 bg-card/90 flex items-center justify-center z-[1000]">
                  <div className="text-center space-y-2 px-6">
                    <AlertCircle className="h-8 w-8 text-destructive mx-auto" />
                    <p className="text-sm font-medium">{error}</p>
                  </div>
                </div>
              )}

              <div className="absolute bottom-4 left-4 z-[1000] rounded-lg bg-card/90 backdrop-blur border p-3 text-xs space-y-1.5">
                <p className="font-semibold text-muted-foreground tracking-wider">LEYENDA</p>
                {[
                  { color: COLORS.top3, label: "Top 3 estados" },
                  { color: COLORS.high, label: "Alta incidencia" },
                  { color: COLORS.mid, label: "Media incidencia" },
                  { color: COLORS.low, label: "Baja incidencia" },
                  { color: COLORS.none, label: "Sin datos" },
                ].map(({ color, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-sm flex-shrink-0" style={{ backgroundColor: color }} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-72 border-t lg:border-t-0 lg:border-l">
              {selected ? (
                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground tracking-wider">ESTADO SELECCIONADO</p>
                      <h3 className="mt-1 text-lg font-bold">{selected.nombre}</h3>
                    </div>
                    <button
                      onClick={() => setSelected(null)}
                      className="text-muted-foreground hover:text-foreground mt-1"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-4 rounded-lg bg-primary/10 border border-primary/20 p-3 text-center">
                    <p className="text-2xl font-bold text-primary">{Math.round(selected.total).toLocaleString("es-MX")}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">casos de {delito}</p>
                  </div>

                  {selected.desglose && selected.desglose.length > 0 ? (
                    <div className="mt-4 space-y-2">
                      <p className="text-xs font-semibold text-muted-foreground tracking-wider">DESGLOSE POR DELITO</p>
                      {selected.desglose.slice(0, 5).map(({ subtipo, total }) => {
                        const pct = selected.total > 0 ? (total / selected.total) * 100 : 0;
                        return (
                          <div key={subtipo} className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span className="text-foreground/80 truncate pr-2">{subtipo}</span>
                              <span className="font-semibold flex-shrink-0">{Math.round(total).toLocaleString("es-MX")}</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                              <div
                                className="h-full bg-primary rounded-full transition-all duration-500"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="mt-4 text-sm text-muted-foreground text-center">Sin datos para el delito seleccionado.</p>
                  )}

                  {top3.includes(selected.nombre) && (
                    <div className="mt-4 rounded-lg bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800 p-3">
                      <p className="text-xs font-semibold text-violet-700 dark:text-violet-400">⚠ Alta incidencia</p>
                      <p className="text-xs text-violet-600 dark:text-violet-300 mt-1">
                        Este estado está entre los 3 con mayor número de casos de {delito}.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-5 flex flex-col items-center justify-center h-full min-h-[200px] text-center">
                  <Map className="h-8 w-8 text-muted-foreground/40 mb-3" />
                  <p className="text-sm font-medium text-muted-foreground">Selecciona un estado en el mapa</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">Haz clic en cualquier entidad federativa para ver el detalle de incidencias de {delito}.</p>

                  {top3.length > 0 && !loading && (
                    <div className="mt-6 w-full text-left">
                      <p className="text-xs font-semibold text-muted-foreground tracking-wider mb-2">TOP 3 CON MAYOR INCIDENCIA DE {delito.toUpperCase()}</p>
                      {top3.map((nombre, i) => (
                        <button
                          key={nombre}
                          onClick={() => setSelected({ nombre, ...datos[nombre] })}
                          className="w-full flex items-center gap-3 rounded-lg p-2 hover:bg-secondary/60 transition text-left"
                        >
                          <span className="h-6 w-6 rounded-full bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {i + 1}
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-medium truncate">{nombre}</p>
                            <p className="text-xs text-muted-foreground">{Math.round(datos[nombre]?.total || 0).toLocaleString("es-MX")} casos</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="border-t px-5 py-3 bg-secondary/20">
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold">Visualizando actualmente:</span> Incidencia del delito <span className="font-semibold text-primary">"{delito}"</span> a nivel nacional por entidad federativa.
            </p>
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

function normalizeEstado(nombre) {
  if (!nombre) return "";
  return nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^estado de /i, "")
    .replace(/^ciudad de /i, "");
}

function matchEstado(geoNombre, datos) {
  if (!geoNombre || !datos) return null;
  const norm = normalizeEstado(geoNombre);

  for (const [key, val] of Object.entries(datos)) {
    const normKey = normalizeEstado(key);
    if (normKey === norm || normKey.includes(norm) || norm.includes(normKey)) {
      return val;
    }
  }

  const aliases = {
    "mexico city": "ciudad de mexico",
    "mexico": "estado de mexico",
    "baja california norte": "baja california",
  };

  const aliased = aliases[norm];
  if (aliased) {
    for (const [key, val] of Object.entries(datos)) {
      if (normalizeEstado(key) === aliased) return val;
    }
  }

  return null;
}