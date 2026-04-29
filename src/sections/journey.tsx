import { skills } from "@/data/profile";

export function JourneySection() {
  return (
    <section className="journey-shell rounded-[2rem] p-6 sm:p-10">
      <div className="journey-grid">
        <div className="journey-left">
          <p className="muted-label text-xs">On this journey, you will need...</p>
          <h2 className="journey-title mt-3">你的优势</h2>
          <p className="mt-3 text-zinc-700">
            我把设计背景里的审美与体验思维，结合 AI 训练工作里的结构化方法，
            让模型不仅可用，而且更贴近真实用户语境。
          </p>
        </div>
        <div className="journey-right">
          {skills.map((item, idx) => (
            <article key={item.name} className="journey-card scroll-soft rounded-2xl p-5">
              <p className="journey-index">0{idx + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-zinc-900">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

