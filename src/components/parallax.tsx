"use client";

import { useEffect } from "react";

type ParallaxProps = {
  strength?: number;
};

export function ParallaxBackground({ strength = 26 }: ParallaxProps) {
  useEffect(() => {
    let latestY = 0;
    let rafId: number | null = null;

    const apply = () => {
      rafId = null;
      const y = latestY || 0;
      const shift = Math.min(1, y / 700) * strength;
      document.documentElement.style.setProperty("--parallax-shift", `${shift}px`);
    };

    const onScroll = () => {
      latestY = window.scrollY || 0;
      if (rafId != null) return;
      rafId = window.requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId != null) window.cancelAnimationFrame(rafId);
    };
  }, [strength]);

  return null;
}

