import { skills } from "@/data/profile";

export function SkillsSection() {
  return (
    <section className="section-card rounded-3xl p-8 sm:p-10">
      <p className="muted-label text-xs">Capability Matrix</p>
      <h2 className="section-title mt-2 text-2xl text-zinc-900">核心能力</h2>
      <p className="mt-2 text-zinc-600">面试官可快速评估的关键能力模块。</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {skills.map((skill) => (
          <article key={skill.name} className="soft-pill section-card-hover rounded-2xl p-5">
            <h3 className="font-medium text-zinc-900">{skill.name}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-700">{skill.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
