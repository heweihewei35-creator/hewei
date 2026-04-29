export type Skill = {
  name: string;
  detail: string;
};

export type Project = {
  name: string;
  summary: string;
  role: string;
  actions: string[];
  result: string;
  stack: string[];
};

export type Experience = {
  period: string;
  title: string;
  organization: string;
  highlights: string[];
};

export const profile = {
  name: "你的姓名",
  title: "AI 训练师",
  tagline: "把业务需求转成可执行的数据与模型优化方案",
  intro:
    "我专注于数据标注规范、提示词优化、模型评测与训练流程协作，能够快速定位问题并推动效果迭代。",
  jobTarget: "目标岗位：AI 训练师 / AI 数据与评测方向",
  location: "工作地点：可远程 / 可到岗",
  email: "your.email@example.com",
  github: "https://github.com/yourname",
  resumeUrl: "#",
};

export const skills: Skill[] = [
  { name: "数据标注规范", detail: "设计标注规则，建立质检流程，提升数据一致性。" },
  { name: "Prompt 设计与优化", detail: "面向业务场景迭代提示词，提升回答稳定性与准确率。" },
  { name: "模型评测", detail: "构建评测维度和样本集，输出可追踪的评测报告。" },
  { name: "流程协作", detail: "与产品、运营、工程协同推进训练任务闭环。" },
];

export const projects: Project[] = [
  {
    name: "客服问答模型优化项目",
    summary: "针对客服常见问题场景，优化回答准确率与一致性。",
    role: "AI 训练师（规则+评测+迭代）",
    actions: [
      "整理高频问答语料并制定标注规范。",
      "设计多轮 Prompt 模板并做 A/B 测试。",
      "建立错误分类体系，按周跟踪问题收敛。",
    ],
    result: "回答准确率由 78% 提升至 90%+，重复问题处理效率显著提升。",
    stack: ["Prompt", "评测表", "数据清洗", "标注质检"],
  },
  {
    name: "内容审核辅助模型评测项目",
    summary: "为审核团队建立可解释、可复盘的评测体系。",
    role: "AI 训练师（评测设计与报告）",
    actions: [
      "搭建风险标签体系和样本分层策略。",
      "对误判案例进行根因分析并反馈修正。",
      "形成每周评测看板，推动策略优化。",
    ],
    result: "误判率下降，审核团队对模型输出的可用性和信任度提升。",
    stack: ["分类体系", "误判分析", "周报机制"],
  },
];

export const experiences: Experience[] = [
  {
    period: "2025.08 - 至今",
    title: "AI 训练师",
    organization: "某 AI 团队",
    highlights: [
      "负责训练数据流程与质量控制。",
      "参与提示词体系建设与模型评测。",
      "沉淀可复用的训练文档与规范。",
    ],
  },
  {
    period: "2024.03 - 2025.07",
    title: "数据标注与运营协作",
    organization: "某互联网项目组",
    highlights: [
      "参与数据清洗和标签体系维护。",
      "与业务团队协作落地场景需求。",
    ],
  },
];
