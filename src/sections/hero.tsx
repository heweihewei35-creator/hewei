"use client";

import { SITE_X_GUTTER } from "@/lib/site-layout";
import { profile } from "@/data/profile";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const topTitleRef = useRef<HTMLSpanElement | null>(null);
  const bottomTitleRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let rafId: number | null = null;
    let latestY = window.scrollY || 0;

    const applyScroll = () => {
      rafId = null;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = Math.max(0, Math.min(1, (0 - rect.top) / vh));
      const depth = Math.max(0, Math.min(1, latestY / (vh * 1.25)));
      const baseScale = 1.03 + depth * 0.055;
      const titleShift = progress * 42;
      const overlayOpacity = 0.32 + depth * 0.24;
      const glowA = 0.56 + depth * 0.24;
      const glowB = 0.52 + depth * 0.2;

      el.style.setProperty("--hero-scroll", progress.toFixed(3));
      el.style.setProperty("--hero-scale", baseScale.toFixed(3));
      el.style.setProperty("--hero-title-shift", `${titleShift.toFixed(2)}px`);
      el.style.setProperty("--hero-overlay", overlayOpacity.toFixed(3));
      el.style.setProperty("--hero-glow-a", glowA.toFixed(3));
      el.style.setProperty("--hero-glow-b", glowB.toFixed(3));
    };

    const onScroll = () => {
      latestY = window.scrollY || 0;
      if (rafId != null) return;
      rafId = window.requestAnimationFrame(applyScroll);
    };

    applyScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId != null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const syncTitleWidth = () => {
      const top = topTitleRef.current;
      const bottom = bottomTitleRef.current;
      if (!top || !bottom) return;

      bottom.style.transform = "scaleX(1)";
      const topWidth = top.getBoundingClientRect().width;
      const bottomWidth = bottom.getBoundingClientRect().width || 1;
      const scale = Math.max(0.7, Math.min(1.2, topWidth / bottomWidth));
      bottom.style.transform = `scaleX(${scale.toFixed(4)})`;
    };

    const frameId = window.requestAnimationFrame(syncTitleWidth);
    window.addEventListener("resize", syncTitleWidth);

    const fontSet = (document as Document & { fonts?: FontFaceSet }).fonts;
    fontSet?.ready.then(syncTitleWidth).catch(() => undefined);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", syncTitleWidth);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const moveX = (x - 0.5) * 20;
    const moveY = (y - 0.5) * 14;

    el.style.setProperty("--hero-mx", `${moveX.toFixed(2)}px`);
    el.style.setProperty("--hero-my", `${moveY.toFixed(2)}px`);
  };

  const handleMouseLeave = () => {
    const el = sectionRef.current;
    if (!el) return;
    el.style.setProperty("--hero-mx", "0px");
    el.style.setProperty("--hero-my", "0px");
  };

  return (
    <section
      id="site-hero"
      ref={sectionRef}
      className="hero-bleed relative min-h-screen overflow-hidden fade-in-up"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="hero-bg-motion hero-video-fill object-cover"
          poster="https://cdn.prod.website-files.com/6471ddcb5282041b072c6552/64ad618dd69a6ac3148cdefa_ffa98231-3087-49de-b843-4dbd6da8982f-poster-00001.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/6471ddcb5282041b072c6552/64ad618dd69a6ac3148cdefa_ffa98231-3087-49de-b843-4dbd6da8982f-transcode.mp4"
            type="video/mp4"
          />
        </video>
        <Image
          src="/hero-002.jpg"
          alt="Hero background"
          fill
          priority
          className="hero-bg-motion object-cover opacity-20"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
        <div className="hero-overlay absolute inset-0 bg-black/35" />
        <div className="hero-flicker-layer absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
        <div className="hero-flicker-layer-2 absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />
      </div>

      <div
        className={`relative mx-auto flex min-h-screen w-full max-w-none flex-col py-6 sm:py-8 ${SITE_X_GUTTER}`}
      >
        <header className="flex items-center justify-between text-[18px] font-bold tracking-[0.18em] text-[#f4dfc8] uppercase">
          <nav className="hidden items-center gap-6 sm:flex">
            <a href="#projects" className="text-[21px] font-extrabold hover:text-[#fff3e3]">
              Projects
            </a>
            <a href="#contact" className="text-[21px] font-extrabold hover:text-[#fff3e3]">
              About
            </a>
            <a href="#contact" className="text-[21px] font-extrabold hover:text-[#fff3e3]">
              Contact
            </a>
          </nav>
          <p className="text-[19px] tracking-[0.36em]">AI TRAINER PORTFOLIO</p>
          <div className="hidden items-center gap-6 sm:flex">
            <a href={profile.github} className="text-[18px] hover:text-[#fff3e3]">
              Github
            </a>
            <a href={profile.resumeUrl} className="text-[18px] hover:text-[#fff3e3]">
              Resume
            </a>
          </div>
          <div className="sm:hidden text-[16px] tracking-[0.2em]">MENU</div>
        </header>

        <div className="hero-title-wrap pointer-events-none absolute bottom-0 left-0 z-10 w-full text-white">
          <p className="absolute bottom-[54vh] left-[1.2vw] max-w-[360px] text-[clamp(1rem,1.55vw,1.45rem)] font-black uppercase leading-[0.9] tracking-[-0.015em] text-[#f4dfc8] drop-shadow-[0_8px_22px_rgba(0,0,0,0.35)]">
            AI TRAINER
            <br />
            PORTFOLIO FOR HIRING
          </p>
          <h1
            className="relative w-full px-[1.2vw] pb-[0.6vh] text-left font-black uppercase text-[#f4dfc8] drop-shadow-[0_15px_35px_rgba(0,0,0,0.45)]"
            style={{
              fontFamily: "var(--font-geist-sans), Arial, sans-serif",
              fontWeight: 900,
              letterSpacing: "-0.045em",
              lineHeight: 0.81,
            }}
          >
            <div className="relative block w-full whitespace-nowrap">
              <span
                ref={topTitleRef}
                className="block"
                style={{ fontSize: "clamp(4rem, 13.8vw, 17.2rem)" }}
              >
                WANG HAO
              </span>
            </div>
            <span
              ref={bottomTitleRef}
              className="block -mt-[0.04em] whitespace-nowrap"
              style={{
                fontSize: "clamp(4.2rem, 14.05vw, 17.8rem)",
                display: "inline-block",
                transformOrigin: "left center",
              }}
            >
              PORTFOLIO
            </span>
          </h1>
        </div>

      </div>
    </section>
  );
}
