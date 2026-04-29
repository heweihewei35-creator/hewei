"use client";

import { useEffect } from "react";

/**
 * Syncs subtle scale on hero media and the first “second-level” panel while scrolling
 * (reference-style handoff: background breathes, panel eases from slightly smaller to 1).
 */
export function ScrollLayerBridge() {
  useEffect(() => {
    const hero = document.getElementById("site-hero");
    const teachings = document.getElementById("site-teachings");
    if (!hero || !teachings) return;

    let rafId: number | null = null;

    const apply = () => {
      rafId = null;
      const vh = window.innerHeight || 1;
      const heroRect = hero.getBoundingClientRect();
      const teachRect = teachings.getBoundingClientRect();

      // Extra zoom on hero layers while leaving first screen (subtle Ken‑Burns / scrub).
      const heroLeave = Math.max(0, Math.min(1, (-heroRect.top / (vh * 0.92)) * 1.05));
      const heroExtraZoom = heroLeave * 0.052;

      // Panel scale: starts slightly inset, settles to 1 as it covers hero.
      const bridge = Math.max(
        0,
        Math.min(1, (vh * 0.94 - teachRect.top) / (vh * 0.58)),
      );
      const handoffScale = 0.984 + bridge * 0.016;

      hero.style.setProperty("--hero-extra-zoom", heroExtraZoom.toFixed(4));
      teachings.style.setProperty("--handoff-scale", handoffScale.toFixed(4));
      teachings.style.setProperty("--handoff-bridge", bridge.toFixed(4));
    };

    const onScroll = () => {
      if (rafId != null) return;
      rafId = window.requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId != null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
