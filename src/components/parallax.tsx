"use client";

import { useEffect } from "react";

type ParallaxProps = {
  strength?: number;
};

export function ParallaxBackground({ strength = 18 }: ParallaxProps) {
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const shift = Math.min(1, y / 900) * strength;
      document.documentElement.style.setProperty("--parallax-shift", `${shift}px`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [strength]);

  return null;
}

