import { skills } from "@/data/profile";

export function SkillsSection() {
  return (
    <section className="section-plain rounded-3xl p-7 sm:p-8">
      <p className="muted-label text-xs">News of Capability</p>
      <h2 className="section-title mt-2 text-2xl text-zinc-900">核心能力矩阵</h2>
      <p className="mt-2 text-zinc-600">以“场景可落地”为标准组织我的训练能力栈。</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {skills.map((skill, idx) => (
          <article key={skill.name} className="content-card section-card-hover rounded-2xl p-5">
            <p className="content-kicker">0{idx + 1}</p>
            <h3 className="mt-1 font-semibold text-zinc-900">{skill.name}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-700">{skill.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
