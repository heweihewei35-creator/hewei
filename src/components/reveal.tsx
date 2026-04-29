"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  id?: string;
};

export function Reveal({ children, className, delayMs = 0, id }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { root: null, threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number | null = null;

    const applyProgress = () => {
      rafId = null;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // Use a wider reveal window so bottom-most sections still reach visible progress.
      const start = vh * 1.18;
      const end = vh * 0.2;
      const raw = (start - rect.top) / (start - end);
      let progress = Math.max(0, Math.min(1, raw));

      // If user is near page bottom, force complete reveal to avoid faded last section.
      const doc = document.documentElement;
      const nearBottom = window.scrollY + vh >= doc.scrollHeight - 8;
      if (nearBottom) progress = 1;
      el.style.setProperty("--reveal-progress", progress.toFixed(3));
    };

    const onScroll = () => {
      if (rafId != null) return;
      rafId = window.requestAnimationFrame(applyProgress);
    };

    applyProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId != null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      id={id}
      ref={ref}
      className={[
        "reveal",
        shown ? "reveal--shown" : "",
        className ?? "",
      ].join(" ")}
      style={{ ["--reveal-delay" as never]: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}

