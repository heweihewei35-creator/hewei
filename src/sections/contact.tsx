import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section id="contact" className="section-card rounded-3xl p-8 sm:p-10">
      <p className="muted-label text-xs">Contact</p>
      <h2 className="section-title mt-2 text-2xl text-zinc-900">联系我</h2>
      <p className="mt-2 text-zinc-600">
        如果你正在招聘 AI 训练师，欢迎联系我安排进一步沟通。我可以补充更完整的项目细节和作品材料。
      </p>
      <div className="mt-6 grid gap-3 text-sm text-zinc-700 sm:grid-cols-2">
        <p className="soft-pill section-card-hover rounded-xl px-4 py-3">
          邮箱：{" "}
          <a className="text-blue-700 hover:underline" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </p>
        <p className="soft-pill section-card-hover rounded-xl px-4 py-3">
          GitHub：{" "}
          <a className="text-blue-700 hover:underline" href={profile.github} target="_blank" rel="noreferrer">
            {profile.github}
          </a>
        </p>
      </div>
    </section>
  );
}
