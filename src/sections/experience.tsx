import { experiences } from "@/data/profile";

export function ExperienceSection() {
  return (
    <section className="section-plain rounded-3xl p-7 sm:p-8">
      <p className="muted-label text-xs">Experience Stories</p>
      <h2 className="section-title mt-2 text-2xl text-zinc-900">经历与协作能力</h2>
      <div className="mt-6 space-y-4">
        {experiences.map((exp, idx) => (
          <article
            key={`${exp.organization}-${exp.period}`}
            className="content-card section-card-hover rounded-2xl p-5"
          >
            <p className="content-kicker">Phase 0{idx + 1}</p>
            <p className="text-xs text-zinc-500">{exp.period}</p>
            <h3 className="mt-1 text-base font-semibold text-zinc-900">
              {exp.title} · {exp.organization}
            </h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              {exp.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
