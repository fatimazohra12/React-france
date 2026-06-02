import { useEffect } from "react";

const themeScripts = [
  "/builtup/js/jquery-3.7.1.min.js",
  "/builtup/js/bootstrap.min.js",
  "/builtup/js/validator.min.js",
  "/builtup/js/jquery.slicknav.js",
  "/builtup/js/swiper-bundle.min.js",
  "/builtup/js/jquery.waypoints.min.js",
  "/builtup/js/jquery.counterup.min.js",
  "/builtup/js/jquery.magnific-popup.min.js",
  "/builtup/js/SmoothScroll.js",
  "/builtup/js/parallaxie.js",
  "/builtup/js/gsap.min.js",
  "/builtup/js/magiccursor.js",
  "/builtup/js/SplitText.js",
  "/builtup/js/ScrollTrigger.min.js",
  "/builtup/js/wow.js",
  "/builtup/js/function.js",
];

export function useBuiltupTheme() {
  useEffect(() => {
    let cancelled = false;
    const loadedScripts = [];

    const loadScript = (src) =>
      new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.onload = resolve;
        script.onerror = resolve;
        document.body.appendChild(script);
        loadedScripts.push(script);
      });

    const loadTheme = async () => {
      for (const src of themeScripts) {
        if (cancelled) return;
        await loadScript(src);
      }
    };

    loadTheme();

    return () => {
      cancelled = true;
      loadedScripts.forEach((script) => script.remove());
    };
  }, []);
}
