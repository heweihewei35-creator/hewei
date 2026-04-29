import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section id="contact" className="section-plain rounded-3xl p-7 sm:p-8">
      <p className="muted-label text-xs">Contact Channel</p>
      <h2 className="section-title mt-2 text-2xl text-zinc-900">联系我</h2>
      <p className="mt-2 text-zinc-600">
        如果你正在招聘 AI 训练师，欢迎联系我安排进一步沟通。我可以补充更完整的项目细节和作品材料。
      </p>
      <div className="mt-6 grid gap-3 text-sm text-zinc-700 sm:grid-cols-2">
        <p className="content-card section-card-hover rounded-xl px-4 py-3">
          <span className="content-kicker block">Channel 01</span>
          邮箱：{" "}
          <a className="contact-link hover:underline" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </p>
        <p className="content-card section-card-hover rounded-xl px-4 py-3">
          <span className="content-kicker block">Channel 02</span>
          GitHub：{" "}
          <a className="contact-link hover:underline" href={profile.github} target="_blank" rel="noreferrer">
            {profile.github}
          </a>
        </p>
      </div>
    </section>
  );
}
