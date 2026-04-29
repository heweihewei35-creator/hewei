export function TraitsSection() {
  const first = ["C", "O", "U", "R", "A", "G", "E"];
  const second = ["H", "U", "M", "I", "L", "I", "T", "Y"];

  return (
    <section className="traits-shell rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14">
      <p className="muted-label text-xs text-center">On this journey, you will need...</p>
      <div className="traits-grid mt-8">
        <article className="trait-block rounded-2xl p-6 sm:p-8">
          <div className="trait-vertical">
            {first.map((char) => (
              <span key={char} className="trait-letter">
                {char}
              </span>
            ))}
          </div>
          <h3 className="trait-title mt-4">审美判断力</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            我会把视觉表达和信息层级意识带入 AI 训练任务，让输出结果在准确之外更具可读性和体验感。
          </p>
        </article>
        <article className="trait-block rounded-2xl p-6 sm:p-8">
          <div className="trait-vertical">
            {second.map((char) => (
              <span key={char} className="trait-letter">
                {char}
              </span>
            ))}
          </div>
          <h3 className="trait-title mt-4">细节执行力</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            从标注规范、评测口径到复盘文档，我坚持可追踪和可复用，确保每次迭代都能沉淀为团队资产。
          </p>
        </article>
      </div>
    </section>
  );
}

