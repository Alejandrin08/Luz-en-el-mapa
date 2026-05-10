import { useState, useEffect } from "react";
import { usePuterImage } from "../hooks/usePuterImage.js";

const loadingMessages = [
  "Generando ilustración…",
  "Construyendo el entorno visual…",
  "Dando vida a la escena…",
  "Casi lista…",
];

export default function StoryImage({ capKey, accionDesc, contextoNarrativo }) {
  const { imgSrc, loading, error } = usePuterImage(capKey, accionDesc, contextoNarrativo);
  if (loading) {
    return (
      <div className="mt-8 relative overflow-hidden rounded-xl border bg-secondary/40 h-[320px] flex flex-col items-center justify-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
          <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        </div>
        <LoadingText />
        <p className="text-xs text-muted-foreground px-8 text-center">
          Creando una ilustración basada en tu configuración…
        </p>
      </div>
    );
  }

  if (error || !imgSrc) {
    return (
      <div className="mt-8 relative overflow-hidden rounded-xl border bg-secondary/20 h-[320px] flex items-center justify-center">
        <div className="text-center space-y-2 px-6">
          <div className="mx-auto h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-2xl">
          </div>
          <p className="text-sm text-muted-foreground">
            {error || "Ilustración no disponible"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <figure className="mt-8 relative overflow-hidden rounded-xl border">
      <img
        src={imgSrc}
        alt="Representación visual de la historia"
        className="w-full h-[320px] object-cover"
      />
      <figcaption className="absolute bottom-3 left-3 rounded-md bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1.5 tracking-wider">
        REPRESENTACIÓN VISUAL DE LA REALIDAD
      </figcaption>
    </figure>
  );
}

function LoadingText() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((i) => (i + 1) % loadingMessages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-sm font-medium text-primary transition-all duration-500">
      {loadingMessages[idx]}
    </p>
  );
}