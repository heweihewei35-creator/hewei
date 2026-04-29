import { SITE_X_GUTTER } from "@/lib/site-layout";
import { ParallaxBackground } from "@/components/parallax";
import { Reveal } from "@/components/reveal";
import { ScrollLayerBridge } from "@/components/scroll-layer-bridge";
import { SmoothScroll } from "@/components/smooth-scroll";
import { BenefitsSection } from "@/sections/benefits";
import { ContactSection } from "@/sections/contact";
import { ExperienceSection } from "@/sections/experience";
import { HeroSection } from "@/sections/hero";
import { HeroIntroSection } from "@/sections/hero-intro";
import { JourneySection } from "@/sections/journey";
import { PathwaySection } from "@/sections/pathway";
import { ProjectsSection } from "@/sections/projects";
import { PortraitSection } from "@/sections/portrait";
import { SkillsSection } from "@/sections/skills";
import { TraitsSection } from "@/sections/traits";

export default function Home() {
  return (
    <div className="site-shell min-h-screen text-zinc-900">
      <SmoothScroll />
      <ScrollLayerBridge />
      <ParallaxBackground />
      <HeroSection />
      <main
        className={`mx-auto flex w-full max-w-none flex-col gap-10 pt-5 pb-12 sm:pt-6 sm:pb-14 ${SITE_X_GUTTER}`}
      >
        <Reveal
          id="site-teachings"
          delayMs={30}
          className="section--teachings scroll-handoff-panel rounded-[1.75rem] px-3 pt-9 pb-9 sm:rounded-[2rem] sm:px-4 sm:pt-11 sm:pb-11 md:px-5"
        >
          <HeroIntroSection />
          <div className="mt-7 sm:mt-9">
            <PortraitSection />
          </div>
        </Reveal>
        <Reveal delayMs={35} className="section--journey rounded-[2rem] p-2">
          <JourneySection />
        </Reveal>
        <Reveal delayMs={38} className="section--benefits rounded-[2rem] p-2">
          <BenefitsSection />
        </Reveal>
        <Reveal delayMs={39} className="section--traits rounded-[2rem] p-2">
          <TraitsSection />
        </Reveal>
        <Reveal delayMs={39} className="section--pathway rounded-[2rem] p-2">
          <PathwaySection />
        </Reveal>
        <Reveal delayMs={40} className="section--skills rounded-3xl p-2">
          <SkillsSection />
        </Reveal>
        <Reveal delayMs={60} className="section--projects rounded-3xl p-2">
          <ProjectsSection />
        </Reveal>
        <Reveal delayMs={70} className="section--experience rounded-3xl p-2">
          <ExperienceSection />
        </Reveal>
        <Reveal delayMs={80} className="section--contact rounded-3xl p-2">
          <ContactSection />
        </Reveal>
      </main>
    </div>
  );
}
