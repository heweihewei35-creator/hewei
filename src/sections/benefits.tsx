import { projects } from "@/data/profile";

export function BenefitsSection() {
  return (
    <section className="benefits-shell rounded-[2rem] p-6 sm:p-10">
      <div className="benefits-grid">
        <div className="benefits-left">
          <p className="muted-label text-xs">The Benefits</p>
          <h2 className="benefits-title mt-3">结果价值</h2>
          <p className="mt-3 text-zinc-700">
            通过结构化训练流程和持续评测迭代，把 AI 能力从「可演示」推进到「可落地、可复用、可扩展」。
          </p>
        </div>
        <div className="benefits-right">
          {projects.map((project, idx) => (
            <article key={project.name} className="benefit-item rounded-2xl p-5">
              <p className="journey-index">0{idx + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-zinc-900">{project.name}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700">{project.summary}</p>
              <p className="mt-3 rounded-xl bg-[#f3dfcf]/55 px-3 py-2 text-sm text-zinc-800">{project.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

