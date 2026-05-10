import { useState, useEffect, useRef } from "react";
import { useStory } from "../context/StoryContext.jsx";

const ENTORNO_LABELS = {
  escuela: "school",
  hogar: "home interior",
  digital: "digital environment with screens",
  publico: "public urban space",
};

const EDAD_LABELS = {
  "0-5": "toddler",
  "6-12": "child around 9 years old",
  "13-17": "teenager",
};

const GENERO_LABELS = {
  Femenino: "girl",
  Masculino: "boy",
  "No binario / Otro": "child",
};

function buildPrompt(config, accionDesc = null, descripcionHistoria = []) {
  const entorno = ENTORNO_LABELS[config.contexto] || "school";
  const edad = EDAD_LABELS[config.edad] || "child";
  const genero = GENERO_LABELS[config.genero] || "child";

  const contextoNarrativo = descripcionHistoria && descripcionHistoria.length > 0 
    ? descripcionHistoria[0] 
    : "";

  let basePrompt = `Wide-angle environmental illustration, Studio Ghibli inspired digital art. The setting is a ${entorno} in Mexico. `;
  
  if (accionDesc) {
    basePrompt += `The scene visually represents this narrative context: "${contextoNarrativo}". ` + 
                  `Specifically, the composition, lighting, and mood MUST reflect this action/decision: "${accionDesc}". ` +
                  `Use visual metaphors in the environment based on the event. ` +
                  `A ${edad} ${genero} is visible in the frame, but the main focus is the storytelling and the atmosphere of the room. `;
  } else {
    basePrompt += `The scene visually represents this narrative context: "${contextoNarrativo}". ` +
                  `The environment feels vast. A ${edad} ${genero} is seen small in the frame, surrounded by shadows symbolizing vulnerability. `;
  }

  basePrompt += `Soft warm colors, highly detailed background. No text, no violence, no explicit content, strictly child-safe symbolic imagery.`;
  
  return basePrompt;
}

export function usePuterImage(capKey, accionDesc = null, descripcionHistoria = []) {
  const { config, imageCache, cacheImage } = useStory();
  const [imgSrc, setImgSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const generatingRef = useRef(false);

  useEffect(() => {
    if (imageCache[capKey]) {
      setImgSrc(imageCache[capKey].src);
      return;
    }

    if (generatingRef.current) return;
    generatingRef.current = true;

    if (typeof window === "undefined" || !window.puter) {
      setError("Puter AI no disponible");
      generatingRef.current = false;
      return;
    }

    const prompt = buildPrompt(config, accionDesc, descripcionHistoria);
    
    setLoading(true);
    setError(null);

    window.puter.ai
      .txt2img(prompt, {
        model: "gpt-image-1-mini",
        quality: "low",
      })
      .then((imgElement) => {
        cacheImage(capKey, imgElement);
        setImgSrc(imgElement.src);
      })
      .catch((err) => {
        console.error("Puter AI error:", err);
        setError("No se pudo generar la imagen");
      })
      .finally(() => {
        setLoading(false);
        generatingRef.current = false;
      });
  }, [capKey, accionDesc]); 

  return { imgSrc, loading, error };
}