import { ParallaxBackground } from "@/components/parallax";
import { Reveal } from "@/components/reveal";
import { ContactSection } from "@/sections/contact";
import { ExperienceSection } from "@/sections/experience";
import { HeroSection } from "@/sections/hero";
import { HeroIntroSection } from "@/sections/hero-intro";
import { ProjectsSection } from "@/sections/projects";
import { SkillsSection } from "@/sections/skills";

export default function Home() {
  return (
    <div className="site-shell min-h-screen text-zinc-900">
      <ParallaxBackground />
      <HeroSection />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-7 px-4 py-10 sm:px-6 sm:py-14">
        <Reveal delayMs={30}>
          <HeroIntroSection />
        </Reveal>
        <Reveal delayMs={40}>
          <SkillsSection />
        </Reveal>
        <Reveal delayMs={60}>
          <ProjectsSection />
        </Reveal>
        <Reveal delayMs={70}>
          <ExperienceSection />
        </Reveal>
        <Reveal delayMs={80}>
          <ContactSection />
        </Reveal>
      </main>
    </div>
  );
}
