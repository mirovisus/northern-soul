import { useEffect, useRef } from "react";

export const useScrollProgress = (mode = "enter") => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let rafId;

    const update = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress;
      if (mode === "through") {
        // 0 when section top enters bottom of viewport,
        // 1 when section bottom exits top of viewport
        progress =
          (windowHeight - rect.top) / (windowHeight + rect.height);
      } else {
        // "enter" (default): 0 at first appearance,
        // 1 when section top hits top of viewport
        progress = 1 - rect.top / windowHeight;
      }

      progress = Math.max(0, Math.min(1, progress));
      element.style.setProperty("--progress", progress);
      rafId = requestAnimationFrame(update);
    };

    update();

    return () => cancelAnimationFrame(rafId);
  }, [mode]);

  return ref;
};
