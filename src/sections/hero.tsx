"use client";

import { profile } from "@/data/profile";
import Image from "next/image";
import { useRef } from "react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const moveX = (x - 0.5) * 34;
    const moveY = (y - 0.5) * 26;

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
      ref={sectionRef}
      className="hero-bleed relative min-h-screen overflow-hidden fade-in-up"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0">
        <Image
          src="/hero-002.jpg"
          alt="Hero background"
          fill
          priority
          className="hero-bg-motion object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="hero-flicker-layer absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
        <div className="hero-flicker-layer-2 absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-4 py-6 sm:px-6 sm:py-8">
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

        <div className="mt-auto pb-0 text-white">
          <div className="relative mt-2 -ml-4 sm:-ml-6">
            <h1 className="hero-massive text-[#f4dfc8] drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <span className="block leading-[0.84]">求职作品集</span>
              <span className="block mt-[0.18em] text-[0.9em] tracking-[0.02em] leading-[0.9]">
                王昊AI训练师
              </span>
            </h1>
          </div>
        </div>

      </div>
    </section>
  );
}
