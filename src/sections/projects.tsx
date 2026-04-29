import { projects } from "@/data/profile";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-card rounded-3xl p-8 sm:p-10">
      <p className="muted-label text-xs">Selected Projects</p>
      <h2 className="section-title mt-2 text-2xl text-zinc-900">项目经历</h2>
      <p className="mt-2 text-zinc-600">每个项目均采用“问题 - 动作 - 结果”结构展示。</p>
      <div className="mt-6 space-y-5">
        {projects.map((project) => (
          <article key={project.name} className="soft-pill section-card-hover rounded-2xl p-5">
            <h3 className="text-lg font-semibold text-zinc-900">{project.name}</h3>
            <p className="mt-1 text-sm text-zinc-600">{project.role}</p>
            <p className="mt-3 text-sm leading-6 text-zinc-700">{project.summary}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              {project.actions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl bg-amber-100/60 px-3 py-2 text-sm text-zinc-800">
              项目结果：{project.result}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs text-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
