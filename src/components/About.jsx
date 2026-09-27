import { useId, useState } from 'react';
import behzadImage from '../../behzadazizan.webp';
import fatemeImage from '../../fatemenikdelfaz.webp';
import kamranImage from '../../kamranmiadi.webp';
import mahdieImage from '../../mahdienikookar.webp';
import resumeUrl from '../../My CV (Maryam Mahmoudi).pdf?url';
import Eyebrow from './ui/Eyebrow.jsx';
import { useLanguage } from '../lib/LanguageContext.jsx';

const INITIAL_VISIBLE_COUNT = 2;

const recommendations = [
  {
    img: behzadImage,
    alt: 'Behzad Azizan',
    name: 'Behzad Azizan',
    role: { en: 'CTO and Senior Backend Developer at Inboxino', zh: 'Inboxino 技術長暨資深後端開發工程師' },
    context: { en: 'Behzad managed Maryam directly · May 2025', zh: 'Behzad 為 Maryam 的直屬主管 · 2025 年 5 月' },
    link: 'https://www.linkedin.com/in/behzadazizan/',
    short: {
      en: '"Maryam is highly skilled in Python development and exceptionally professional in handling challenges and collaborating with teams."',
      zh: '「Maryam 精通 Python 開發，在處理挑戰與團隊協作方面表現得非常專業。」',
    },
    full: {
      en: 'I’ve had the pleasure of working with Maryam for about a year now, and I can confidently say she’s not only highly skilled in development with Python, but also exceptionally professional in how she handles challenges and collaborates with both internal teams and users. Maryam consistently writes clean, well-documented, and maintainable code. What I truly value is that alongside her strong technical abilities, she also brings a thoughtful, respectful attitude, effective cross-team communication, and genuine care for user needs. Her sense of organization and responsibility is outstanding. I always feel confident assigning her important tasks, knowing she’ll handle them with precision and follow through if any issues arise.',
      zh: '我很榮幸能與 Maryam 共事約一年，可以肯定地說，她不僅精通 Python 開發，在處理挑戰與跨部門及使用者協作時也展現出極高的專業度。Maryam 撰寫的程式碼始終乾淨、文件完整且易於維護。我特別欣賞的是，除了扎實的技術能力之外，她也具備體貼周到的態度、有效的跨團隊溝通能力，以及對使用者需求的真誠關心。她的組織能力與責任感非常出色，我總是能放心地將重要任務交付給她，相信她會以精準的方式完成，並在出現問題時持續跟進解決。',
    },
  },
  {
    img: fatemeImage,
    alt: 'Fateme Nikdelfaz',
    name: 'Fateme Nikdelfaz',
    role: { en: 'Machine Learning Engineer | Computer Vision & MLOps', zh: '機器學習工程師 | 電腦視覺與 MLOps' },
    context: { en: 'Fatemeh and Maryam studied together · July 2024', zh: 'Fatemeh 與 Maryam 曾一同求學 · 2024 年 7 月' },
    short: {
      en: '"Maryam’s expertise, dedication, and teamwork have consistently elevated our AI projects. She is a brilliant and creative programmer."',
      zh: '「Maryam 的專業、投入與團隊合作精神，持續提升了我們的 AI 專案品質。她是一位優秀且富有創意的程式設計師。」',
    },
    full: {
      en: 'I recommend Maryam for her outstanding contributions to the field of AI. Her expertise, dedication, and remarkable teamwork skills have consistently elevated our projects to new heights. Maryam is not only a brilliant AI professional but also an exceptionally creative and proficient programmer. She is known for her work ethic, and her hardworking nature greatly contributes to our team’s success. I have no doubt that she will continue to excel in any AI-related role or endeavor she pursues as a dedicated and highly skilled coworker.',
      zh: '我推薦 Maryam，因為她在 AI 領域做出了卓越貢獻。她的專業能力、投入程度與出色的團隊合作技巧，持續將我們的專案提升至新的高度。Maryam 不僅是一位優秀的 AI 專業人才，更是一位極具創意且技術精湛的程式設計師。她以敬業精神聞名，勤奮的特質對團隊的成功貢獻良多。我相信無論她未來投入哪個 AI 相關職位或任務，都能以認真且高度熟練的態度持續表現出色。',
    },
  },
  {
    img: kamranImage,
    alt: 'Kamran Miadi',
    name: 'Kamran Miadi',
    role: { en: 'DevOps Engineer, NodeJS Developer', zh: 'DevOps 工程師、NodeJS 開發工程師' },
    context: { en: 'Kamran worked with Maryam on the same team · August 2025', zh: 'Kamran 與 Maryam 曾在同一團隊共事 · 2025 年 8 月' },
    short: {
      en: '"I am thrilled to recommend Maryam, an outstanding Python backend developer and data scientist, with whom I’ve collaborated closely as a DevOps engineer."',
      zh: '「我很樂意推薦 Maryam，她是一位傑出的 Python 後端開發工程師與資料科學家，我以 DevOps 工程師的身分與她密切合作過。」',
    },
    full: {
      en: 'I am thrilled to recommend Maryam, an outstanding Python backend developer and data scientist, with whom I’ve collaborated closely as a DevOps engineer. She is exceptionally smart, dedicated, and possesses a deep understanding of her craft. Maryam’s extensive experience in backend development, combined with her strong expertise in AI and data science, enables her to deliver robust, innovative, and data-driven solutions. Her commitment to excellence and ability to tackle complex challenges make her an invaluable team member. I highly recommend Maryam for her technical expertise, professionalism, and collaborative approach.',
      zh: '我很樂意推薦 Maryam，她是一位傑出的 Python 後端開發工程師與資料科學家，我以 DevOps 工程師的身分與她密切合作過。她非常聰明、投入，並對自己的專業有深刻的理解。Maryam 在後端開發方面經驗豐富，加上在 AI 與資料科學領域的深厚專業知識，使她能夠交付穩健、創新且以資料為導向的解決方案。她對卓越的堅持與應對複雜挑戰的能力，使她成為團隊中不可或缺的成員。我極力推薦 Maryam，肯定她的技術專業、敬業態度與協作精神。',
    },
  },
  {
    img: mahdieImage,
    alt: 'Mahdie Nikookar',
    name: 'Mahdie Nikookar',
    role: { en: 'Web Developer (Vue.js & React & Node.js) | Product Manager | MBA Candidate', zh: '網頁開發工程師（Vue.js、React、Node.js）| 產品經理 | MBA 候選人' },
    context: { en: 'Mahdie worked with Maryam on the same team · August 2025', zh: 'Mahdie 與 Maryam 曾在同一團隊共事 · 2025 年 8 月' },
    short: {
      en: '"Collaborating with Maryam at Inboxino was both enjoyable and professionally enriching."',
      zh: '「在 Inboxino 與 Maryam 合作，是一段愉快且能豐富專業能力的經歷。」',
    },
    full: {
      en: 'Collaborating with Maryam at Inboxino was both enjoyable and professionally enriching. She brings solid expertise in Python development and a strong command of data science, which allowed her to contribute meaningful insights and effective solutions throughout our time working together. Maryam is a sharp thinker and a reliable teammate who approaches challenges with calm focus and creativity. Her respectful communication style, dedication to quality, and willingness to support others…',
      zh: '在 Inboxino 與 Maryam 合作，是一段愉快且能豐富專業能力的經歷。她在 Python 開發方面擁有扎實的專業能力，並精通資料科學，使她在合作期間能持續提供有價值的見解與有效的解決方案。Maryam 思路敏銳、值得信賴，面對挑戰時總能保持冷靜並發揮創意。她尊重他人的溝通方式、對品質的堅持，以及樂於協助他人的態度……',
    },
  },
];

const strings = {
  en: {
    coworkers: 'What coworkers say',
    linkedinNote: 'Additional recommendations from YunTech research collaborators available on LinkedIn.',
    showLess: 'Show less',
    seeMore: (n) => `See ${n} more recommendation${n > 1 ? 's' : ''}`,
    collapseAria: 'Collapse recommendation',
    expandAria: 'Expand recommendation',
    eyebrow: 'About Me',
    heading: 'AI research, engineered for real systems',
    p1: 'My research focuses on making AI systems interpretable and trustworthy — particularly in medical and high-stakes domains where black-box decisions are unacceptable. I build production backend systems not as a separate track, but because research that can’t be deployed doesn’t reach the people who need it.',
    p2: 'I’m starting a PhD in Data Science and AI Applications at National Yunlin University of Science and Technology (YunTech) in September 2026, continuing research I began there under Prof. Arun Kumar Sangaiah.',
    p3: 'Taiwan’s research environment — and YunTech’s applied AI program in particular — aligns with my goal of bridging rigorous ML research and deployable production systems.',
    cv: 'Download Full CV',
  },
  zh: {
    coworkers: '同事怎麼說',
    linkedinNote: '雲林科技大學研究合作者的更多推薦信請參閱 LinkedIn 個人頁面。',
    showLess: '收合',
    seeMore: (n) => `查看更多 ${n} 則推薦`,
    collapseAria: '收合推薦信',
    expandAria: '展開推薦信',
    eyebrow: '關於我',
    heading: '以研究為核心，為真實系統打造的 AI',
    p1: '我的研究致力於讓 AI 系統具備可解釋性與可信賴性——特別是在無法接受黑箱決策的醫療與高風險領域。我打造生產級後端系統，並非另一條獨立的路線，而是因為無法部署的研究成果，永遠無法觸及真正需要它的人。',
    p2: '我將於 2026 年 9 月前往國立雲林科技大學（YunTech）攻讀資料科學與人工智慧應用博士學位，延續我在該校於 Arun Kumar Sangaiah 教授指導下展開的研究。',
    p3: '台灣的研究環境——尤其是雲林科技大學的應用 AI 研究所——與我將嚴謹的機器學習研究和可部署生產系統相結合的目標高度契合。',
    cv: '下載完整履歷',
  },
};

const RecommendationCard = ({ recommendation, lang, t }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <figure className="m-0 mb-3.5 last:mb-0 p-6 rounded-[20px] border border-white/[0.09] card-surface">
      <blockquote className="m-0 mb-[18px] text-base leading-relaxed text-[#eed9da]">
        {expanded ? recommendation.full[lang] : recommendation.short[lang]}
      </blockquote>
      <figcaption className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={recommendation.img}
            alt={recommendation.alt}
            width="128"
            height="128"
            loading="lazy"
            decoding="async"
            className="w-11 h-11 rounded-full object-cover shrink-0"
          />
          <div className="min-w-0">
            {recommendation.link ? (
              <a href={recommendation.link} target="_blank" rel="noreferrer" className="block text-sm leading-tight text-[#c3a1a4] font-semibold hover:text-white truncate">
                {recommendation.name}
              </a>
            ) : (
              <span className="block text-sm leading-tight text-[#c3a1a4] font-semibold truncate">{recommendation.name}</span>
            )}
            {recommendation.role && (
              <span className="block text-xs leading-tight text-ink-muted truncate">{recommendation.role[lang]}</span>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-label={expanded ? t.collapseAria : t.expandAria}
          className="shrink-0 text-ink-secondary hover:text-white"
        >
          <i className={`fas ${expanded ? 'fa-chevron-up' : 'fa-chevron-down'}`} aria-hidden="true"></i>
        </button>
      </figcaption>
      {recommendation.context && (
        <p className="m-0 mt-3 pt-3 border-t border-white/[0.08] font-mono text-[11px] tracking-[0.04em] text-ink-muted">
          {recommendation.context[lang]}
        </p>
      )}
    </figure>
  );
};

const RecommendationsList = () => {
  const { lang } = useLanguage();
  const t = strings[lang];
  const [showAll, setShowAll] = useState(false);
  const panelId = useId();
  const hiddenCount = recommendations.length - INITIAL_VISIBLE_COUNT;

  return (
    <div>
      <h3 className="m-0 mb-2 font-display font-semibold text-lg text-white">{t.coworkers}</h3>
      <p className="m-0 mb-[18px] text-sm leading-relaxed text-ink-muted">{t.linkedinNote}</p>
      {recommendations.slice(0, INITIAL_VISIBLE_COUNT).map((recommendation) => (
        <RecommendationCard key={recommendation.name} recommendation={recommendation} lang={lang} t={t} />
      ))}
      {hiddenCount > 0 && (
        <div
          id={panelId}
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${showAll ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            {recommendations.slice(INITIAL_VISIBLE_COUNT).map((recommendation) => (
              <RecommendationCard key={recommendation.name} recommendation={recommendation} lang={lang} t={t} />
            ))}
          </div>
        </div>
      )}
      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
          aria-controls={panelId}
          className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-ink-eyebrow transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light rounded"
        >
          {showAll ? t.showLess : t.seeMore(hiddenCount)}
          <i className={`fas ${showAll ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs`} aria-hidden="true"></i>
        </button>
      )}
    </div>
  );
};

const About = () => {
  const { lang } = useLanguage();
  const t = strings[lang];

  return (
    <section id="about" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-8 nav:gap-14 items-start">
        <div>
          <h2 className="m-0 mb-5 font-display font-semibold text-[clamp(26px,3.2vw,40px)] leading-[1.15] tracking-tight text-white text-balance">
            {t.heading}
          </h2>
          <p className="m-0 mb-4 text-[clamp(15px,1.15vw,17px)] leading-relaxed text-ink-secondary">
            {t.p1}
          </p>
          <p className="m-0 mb-4 text-[clamp(15px,1.15vw,17px)] leading-relaxed text-ink-secondary">
            {t.p2}
          </p>
          <p className="m-0 mb-[26px] text-[clamp(15px,1.15vw,17px)] leading-relaxed text-ink-secondary">
            {t.p3}
          </p>
          <a
            href={resumeUrl}
            download="My CV (Maryam Mahmoudi).pdf"
            className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full border border-white/[0.16] bg-white/[0.04] text-white font-semibold text-sm transition-colors duration-200 hover:bg-white/10 hover:border-white/30"
          >
            {t.cv} <span aria-hidden="true">&#8595;</span>
          </a>
        </div>
        <div>
          <RecommendationsList />
        </div>
      </div>
    </section>
  );
};

export default About;
