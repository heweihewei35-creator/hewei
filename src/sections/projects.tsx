import { projects } from "@/data/profile";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-plain rounded-3xl p-7 sm:p-8">
      <p className="muted-label text-xs">Selected Stories</p>
      <h2 className="section-title mt-2 text-2xl text-zinc-900">项目经历</h2>
      <p className="mt-2 text-zinc-600">每个项目按照叙事卡片节奏呈现：背景、动作与结果。</p>
      <div className="mt-6 space-y-6">
        {projects.map((project, idx) => (
          <article key={project.name} className="project-entry px-3 py-2 sm:px-4">
            <p className="content-kicker">Case 0{idx + 1}</p>
            <h3 className="text-lg font-semibold text-zinc-900">{project.name}</h3>
            <p className="mt-1 text-sm text-zinc-600">{project.role}</p>
            <p className="mt-3 text-sm leading-6 text-zinc-700">{project.summary}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              {project.actions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="project-tag-box mt-4 rounded-xl px-3 py-2.5">
              <p className="text-sm text-zinc-800">项目结果：{project.result}</p>
              <div className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="project-tag rounded-full px-3 py-1 text-xs text-zinc-700"
                >
                  {tag}
                </span>
              ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
