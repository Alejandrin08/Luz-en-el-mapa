import { useState, useEffect } from "react";
import { usePuterImage } from "../hooks/usePuterImage.js";

const loadingMessages = [
  "Ilustrando las escenas...",
  "Generando los entornos visuales...",
  "Dando vida a la historia...",
  "Casi lista la imagen...",
];

export default function StoryImage({ capKeyPrefix, opciones, opcionSeleccionadaId, descripcionHistoria }) {
  const { imgSrc, loading } = usePuterImage(
    capKeyPrefix,
    opciones,
    opcionSeleccionadaId,
    descripcionHistoria
  );

  const [imgCargada, setImgCargada] = useState(false);

  useEffect(() => {
    setImgCargada(false);
  }, [imgSrc]);

  if (loading && !imgSrc) {
    return (
      <div className="mt-8 relative overflow-hidden rounded-xl border bg-secondary/40 h-[320px] flex flex-col items-center justify-center gap-4">
        <Spinner />
        <LoadingText />
        <p className="text-xs text-muted-foreground px-8 text-center">
          Generando ilustración para esta escena...
        </p>
      </div>
    );
  }

  if (!imgSrc) {
    return (
      <div className="mt-8 relative overflow-hidden rounded-xl border bg-secondary/20 h-[320px] flex items-center justify-center">
        <div className="text-center space-y-2 px-6">
          <div className="mx-auto h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-2xl">🏫</div>
          <p className="text-sm text-muted-foreground">Preparando ilustración...</p>
        </div>
      </div>
    );
  }

  return (
    <figure className="mt-8 relative overflow-hidden rounded-xl border h-[320px]">
      {!imgCargada && (
        <div className="absolute inset-0 bg-secondary/40 flex flex-col items-center justify-center gap-4 z-10">
          <Spinner />
          <LoadingText />
        </div>
      )}

      <img
        key={imgSrc}
        src={imgSrc}
        alt="Representación visual de la historia"
        referrerPolicy="no-referrer"
        className={`w-full h-[320px] object-cover transition-opacity duration-500 ${imgCargada ? "opacity-100" : "opacity-0"}`}
        onLoad={() => {
          console.log("✓ Imagen cargada:", imgSrc);
          setImgCargada(true);
        }}
        onError={(e) => {
          console.error("✗ Error cargando imagen:", e.target.src);
          const url = new URL(e.target.src);
          const yaReintento = url.searchParams.get("retry");
          if (!yaReintento) {
            url.searchParams.set("seed", Math.floor(Math.random() * 999999));
            url.searchParams.set("retry", "1");
            console.log("↻ Reintentando con nueva seed...");
            e.target.src = url.toString();
          } else {
            console.error("✗ Reintento también falló, mostrando placeholder");
            setImgCargada(true);
            e.target.style.display = "none";
          }
        }}
      />

      {loading && imgCargada && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur px-2.5 py-1">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-white/80">Generando otras opciones...</span>
        </div>
      )}

      <figcaption className="absolute bottom-3 left-3 rounded-md bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1.5 tracking-wider">
        REPRESENTACIÓN VISUAL DE LA REALIDAD
      </figcaption>
    </figure>
  );
}

function Spinner() {
  return (
    <div className="relative h-12 w-12">
      <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
      <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
    </div>
  );
}

function LoadingText() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % loadingMessages.length), 2200);
    return () => clearInterval(t);
  }, []);
  return <p className="text-sm font-medium text-primary">{loadingMessages[idx]}</p>;
}