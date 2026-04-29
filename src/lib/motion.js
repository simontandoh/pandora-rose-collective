import { useEffect, useState } from "react";

export const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mediaQuery.matches);
    update();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", update);
    } else {
      mediaQuery.addListener(update);
    }
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", update);
      } else {
        mediaQuery.removeListener(update);
      }
    };
  }, []);

  return reduced;
};

export const getAdaptiveDpr = () => {
  if (typeof window === "undefined") return [1, 1.5];
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return isMobile ? [1, 1.25] : [1, 1.75];
};
