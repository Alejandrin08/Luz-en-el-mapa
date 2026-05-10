import { useEffect } from "react";
import { useStory } from "../context/StoryContext.jsx";

export function usePuterImage(capKeyPrefix, opciones, opcionSeleccionadaId, descripcionHistoria = []) {
  const { imageCache, preGenerarImagenes, configVersion } = useStory();

  const versionedPrefix = `v${configVersion}_${capKeyPrefix}`;

  useEffect(() => {
    if (opciones?.length && capKeyPrefix) {
      preGenerarImagenes(capKeyPrefix, opciones, descripcionHistoria);
    }
  }, [versionedPrefix]);

  const key    = `v${configVersion}_${capKeyPrefix}_${opcionSeleccionadaId}`;
  const cached = imageCache[key];

  const hayFaltantes = opciones?.some(
    (o) => !imageCache[`v${configVersion}_${capKeyPrefix}_${o.id}`]
  );

  return {
    imgSrc:  cached ? cached.src : null,
    loading: hayFaltantes,
    error:   null,
  };
}