import { createContext, useContext, useState, useCallback } from "react";
import { escolar } from "../data/storyContent.js";

const StoryContext = createContext(null);

const TIPOS = Object.keys(escolar); 

function elegirTipoAleatorio() {
  return TIPOS[Math.floor(Math.random() * TIPOS.length)];
}

export function StoryProvider({ children }) {
  const [config, setConfig] = useState({
    estado: "",
    edad: "6-12",
    genero: "Femenino",
    contexto: "escuela",
  });

  const [tipoHistoria, setTipoHistoria] = useState(null);

  const [decisiones, setDecisiones] = useState({ cap1: "a", cap2: "a" });

  const [imageCache, setImageCache] = useState({});

  const iniciarHistoria = useCallback((configUsuario) => {
    setConfig(configUsuario);
    setTipoHistoria(elegirTipoAleatorio());
    setDecisiones({ cap1: "a", cap2: "a" });
    setImageCache({});
  }, []);

  const tomarDecision = useCallback((capitulo, opcionId) => {
    setDecisiones((prev) => ({ ...prev, [capitulo]: opcionId }));
  }, []);

  const cacheImage = useCallback((cacheKey, imgElement) => {
    setImageCache((prev) => ({ ...prev, [cacheKey]: imgElement }));
  }, []);

  return (
    <StoryContext.Provider
      value={{
        config,
        tipoHistoria,
        decisiones,
        imageCache,
        iniciarHistoria,
        tomarDecision,
        cacheImage,
      }}
    >
      {children}
    </StoryContext.Provider>
  );
}

export function useStory() {
  const ctx = useContext(StoryContext);
  if (!ctx) throw new Error("useStory debe usarse dentro de <StoryProvider>");
  return ctx;
}