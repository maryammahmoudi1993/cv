import Eyebrow from './ui/Eyebrow.jsx';
import Tag from './ui/Tag.jsx';
import { useLanguage } from '../lib/LanguageContext.jsx';

const skillCategories = [
  { en: 'Languages', zh: '程式語言', skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'PHP'] },
  { en: 'Frameworks', zh: '框架', skills: ['Django', 'Django REST Framework', 'React', 'FastAPI', 'Celery'] },
  { en: 'AI/ML Libraries', zh: 'AI／機器學習函式庫', skills: ['TensorFlow', 'PyTorch', 'Transformers', 'LangChain', 'Gemini', 'XGBoost', 'SHAP'] },
  {
    en: 'Research & XAI',
    zh: '研究與可解釋 AI',
    skills: [
      'SHAP',
      'LIME',
      'Integrated Gradients',
      'Attention Visualization',
      'Explainability Evaluation',
      'Physics-Informed Neural Networks',
      'Temporal Fusion Transformer',
      'Prototype-Guided Learning',
    ],
  },
  { en: 'DevOps & Tools', zh: 'DevOps 與工具', skills: ['Docker', 'GitHub Actions', 'Linux', 'pytest', 'CI/CD', 'Observability'] },
  { en: 'Databases', zh: '資料庫', skills: ['PostgreSQL', 'pgvector', 'MySQL', 'Redis', 'MinIO'] },
  { en: 'APIs & Integration', zh: 'API 與系統整合', skills: ['REST APIs', 'OpenAPI', 'JWT & RBAC', 'Webhooks', 'RAG', 'Tool Calling'] },
];

const strings = {
  en: { eyebrow: 'Technical Skills', heading: 'Technical Skills' },
  zh: { eyebrow: '技術能力', heading: '技術能力' },
};

const Skills = () => {
  const { lang } = useLanguage();
  const t = strings[lang];

  return (
    <section id="skills" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <h2 className="m-0 mb-8 nav:mb-11 font-display font-semibold text-[clamp(26px,3.2vw,40px)] tracking-tight text-white">
        {t.heading}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4">
        {skillCategories.map((category) => (
          <article key={category.en} className="p-[26px] rounded-[20px] border border-white/[0.09] card-surface">
            <h3 className="m-0 mb-4 font-display font-semibold text-[17px] text-white">{lang === 'zh' ? category.zh : category.en}</h3>
            <ul className="m-0 p-0 flex flex-wrap gap-2">
              {category.skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
