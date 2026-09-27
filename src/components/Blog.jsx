import Eyebrow from './ui/Eyebrow.jsx';
import Tag from './ui/Tag.jsx';
import { useLanguage } from '../lib/LanguageContext.jsx';

const posts = [
  {
    id: 'shap-medical-ai',
    title: { en: "Why SHAP Alone Isn't Enough for Medical AI", zh: '為什麼 SHAP 不足以應對醫療 AI' },
    tag: { en: 'Explainable AI', zh: '可解釋 AI' },
  },
  {
    id: 'human-in-the-loop-django',
    title: { en: 'Building Human-in-the-Loop Review Into Django APIs', zh: '在 Django API 中打造人工審核機制' },
    tag: { en: 'Backend Engineering', zh: '後端工程' },
  },
  {
    id: 'msc-to-phd-seizure-prediction',
    title: {
      en: 'From MSc Thesis to PhD: What Seizure Prediction Taught Me About Trustworthy AI',
      zh: '從碩士論文到博士研究：癲癇預測教會我的可信賴 AI 課題',
    },
    tag: { en: 'Trustworthy AI', zh: '可信賴 AI' },
  },
];

const strings = {
  en: {
    eyebrow: 'Latest Blog Posts',
    heading: 'Latest Blog Posts',
    lede: 'Sharing insights and experiences from my journey in AI and data science',
    comingSoon: 'Coming Soon',
  },
  zh: {
    eyebrow: '最新部落格文章',
    heading: '最新部落格文章',
    lede: '分享我在 AI 與資料科學旅程中的見解與經驗',
    comingSoon: '即將推出',
  },
};

const Blog = () => {
  const { lang } = useLanguage();
  const t = strings[lang];

  return (
    <section id="blog" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <h2 className="m-0 mb-3 font-display font-semibold text-[clamp(26px,3.2vw,40px)] tracking-tight text-white">
        {t.heading}
      </h2>
      <p className="m-0 mb-8 nav:mb-10 text-[clamp(15px,1.1vw,17px)] leading-relaxed text-ink-secondary">
        {t.lede}
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-5">
        {posts.map((post) => (
          <article key={post.id} className="p-6 nav:p-7 rounded-3xl border border-white/10 card-surface flex flex-col gap-4">
            <div className="flex items-center justify-between gap-2">
              <Tag>{post.tag[lang]}</Tag>
              <span className="inline-flex px-2.5 py-1 rounded-full border border-white/[0.16] font-mono text-[10px] tracking-[0.1em] uppercase text-[#f3c3c5]">
                {t.comingSoon}
              </span>
            </div>
            <h3 className="m-0 font-display font-semibold text-[clamp(18px,1.8vw,22px)] leading-snug text-white text-pretty">
              {post.title[lang]}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
