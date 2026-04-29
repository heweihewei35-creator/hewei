import { profile } from "@/data/profile";

export function HeroIntroSection() {
  return (
    <section className="section-card rounded-3xl p-6 sm:p-8">
      <p className="max-w-4xl text-[clamp(1.02rem,1.7vw,1.2rem)] leading-8 text-zinc-800">
        {profile.intro}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={profile.resumeUrl} className="cta-primary rounded-full px-5 py-2.5 text-sm font-medium">
          下载简历
        </a>
        <a
          href="#projects"
          className="rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
        >
          查看项目经历
        </a>
        <a
          href="#contact"
          className="rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
        >
          联系我安排面试
        </a>
      </div>

      <div className="mt-6 grid max-w-3xl gap-2 text-sm text-zinc-700 sm:grid-cols-2">
        <p className="rounded-xl border border-zinc-300 bg-white px-3 py-2">{profile.jobTarget}</p>
        <p className="rounded-xl border border-zinc-300 bg-white px-3 py-2">{profile.location}</p>
      </div>
    </section>
  );
}
