import Eyebrow from './ui/Eyebrow.jsx';
import Tag from './ui/Tag.jsx';

const skillCategories = [
  { title: 'Languages', skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'PHP'] },
  { title: 'Frameworks', skills: ['Django', 'Django REST Framework', 'React', 'FastAPI', 'Celery'] },
  { title: 'AI/ML Libraries', skills: ['TensorFlow', 'PyTorch', 'Transformers', 'LangChain', 'Gemini', 'XGBoost', 'SHAP'] },
  { title: 'DevOps & Tools', skills: ['Docker', 'GitHub Actions', 'Linux', 'pytest', 'CI/CD', 'Observability'] },
  { title: 'Databases', skills: ['PostgreSQL', 'pgvector', 'MySQL', 'Redis', 'MinIO'] },
  { title: 'APIs & Integration', skills: ['REST APIs', 'OpenAPI', 'JWT & RBAC', 'Webhooks', 'RAG', 'Tool Calling'] },
];

const Skills = () => (
  <section id="skills" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
    <Eyebrow>Technical Skills</Eyebrow>
    <h2 className="m-0 mb-8 nav:mb-11 font-display font-semibold text-[clamp(26px,3.2vw,40px)] tracking-tight text-white">
      Technical Skills
    </h2>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4">
      {skillCategories.map((category) => (
        <article key={category.title} className="p-[26px] rounded-[20px] border border-white/[0.09] card-surface">
          <h3 className="m-0 mb-4 font-display font-semibold text-[17px] text-white">{category.title}</h3>
          <ul className="m-0 p-0 flex flex-wrap gap-2">
            {category.skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
