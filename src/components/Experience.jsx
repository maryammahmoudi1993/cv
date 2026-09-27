import Eyebrow from './ui/Eyebrow.jsx';
import { useLanguage } from '../lib/LanguageContext.jsx';

const experiences = [
  {
    id: 'yuntech',
    company: { en: 'National Yunlin University of Science and Technology (YunTech)', zh: '國立雲林科技大學（YunTech）' },
    role: { en: 'Research Intern', zh: '研究實習生' },
    location: { en: 'Yunlin, Taiwan', zh: '台灣雲林' },
    period: { en: 'April 2026 – Sep 2026', zh: '2026 年 4 月 – 2026 年 9 月' },
    achievements: [
      {
        en: 'Conducting AI research under Prof. Arun Kumar Sangaiah; contributing to review paper submitted to Renewable and Sustainable Energy Reviews (RSER)',
        zh: '在 Arun Kumar Sangaiah 教授指導下進行 AI 研究，為投稿至 RSER 的綜述論文做出貢獻',
      },
      {
        en: 'Designing hybrid ML architectures that combine physics-informed models with explainability components for bioelectrochemical systems',
        zh: '設計結合物理資訊模型與可解釋性元件的混合機器學習架構，應用於生物電化學系統',
      },
    ],
  },
  {
    id: 'inboxino',
    company: { en: 'Inboxino', zh: 'Inboxino' },
    role: { en: 'Python Developer', zh: 'Python 開發工程師' },
    location: { en: 'Mashhad, Iran', zh: '伊朗馬什哈德' },
    period: { en: 'August 2024 - July 2025', zh: '2024 年 8 月 – 2025 年 7 月' },
    achievements: [
      { en: 'Developed automation tools and custom bots using Python', zh: '使用 Python 開發自動化工具與客製化機器人' },
      { en: 'Built and maintained backend services in PHP for scalable systems', zh: '以 PHP 建置並維護可擴充系統的後端服務' },
      { en: 'Contributed to business intelligence dashboards and reporting pipelines', zh: '參與商業智慧儀表板與報表管線開發' },
      { en: 'Collaborated across data and backend teams for system integration', zh: '與資料團隊及後端團隊協作進行系統整合' },
    ],
  },
  {
    id: 'hamta',
    company: { en: 'Hamta Rayaneh Research and Information Company', zh: 'Hamta Rayaneh 研究資訊公司' },
    role: { en: 'Data Scientist & BI Developer', zh: '資料科學家暨商業智慧開發工程師' },
    location: { en: 'Mashhad, Iran', zh: '伊朗馬什哈德' },
    period: { en: 'September 2021 - August 2024', zh: '2021 年 9 月 – 2024 年 8 月' },
    achievements: [
      { en: 'Implemented deep learning models with TensorFlow to handle large datasets (50K+ records)', zh: '以 TensorFlow 實作深度學習模型，處理超過 5 萬筆紀錄的大型資料集' },
      {
        en: 'Reduced data processing time by over 35% through pipeline optimisation and batch processing refactors',
        zh: '透過管線優化與批次處理重構，將資料處理時間縮短逾 35%',
      },
      { en: 'Improved prediction model accuracy by 18% in internal forecasting projects', zh: '在內部預測專案中將模型準確率提升 18%' },
      { en: 'Successfully deployed ML models in 3 commercial company projects', zh: '成功將機器學習模型部署於 3 個商業專案' },
    ],
  },
  {
    id: 'toos-tech',
    company: { en: 'Toos-Tech GmbH', zh: 'Toos-Tech GmbH' },
    role: { en: 'AI Engineer (Computer Vision)', zh: 'AI 工程師（電腦視覺）' },
    location: { en: 'Cologne, Germany (Remote)', zh: '德國科隆（遠端）' },
    period: { en: 'March 2020 - February 2022', zh: '2020 年 3 月 – 2022 年 2 月' },
    achievements: [
      {
        en: 'Developed object detection models achieving 90% accuracy on a controlled industrial defect dataset (1,000-image benchmark)',
        zh: '在受控工業瑕疵資料集（1,000 張圖像基準）上開發達到 90% 準確率的物件偵測模型',
      },
      { en: 'Used Transformer-based models (ViT) for enhanced real-time performance', zh: '使用基於 Transformer 的模型（ViT）提升即時運算效能' },
      { en: 'Reduced image processing runtime by 30% for real-time object recognition', zh: '將即時物體辨識的影像處理時間縮短 30%' },
      { en: 'Contributed to building scalable pipelines for image analysis and deployment', zh: '參與建置可擴充的影像分析與部署管線' },
    ],
  },
];

const strings = {
  en: { eyebrow: 'Professional Experience', heading: 'Professional Experience' },
  zh: { eyebrow: '專業經歷', heading: '專業經歷' },
};

const Experience = () => {
  const { lang } = useLanguage();
  const t = strings[lang];

  return (
    <section id="experience" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <h2 className="m-0 mb-8 nav:mb-11 font-display font-semibold text-[clamp(26px,3.2vw,40px)] tracking-tight text-white">
        {t.heading}
      </h2>
      <ol className="m-0 p-0 flex flex-col gap-4">
        {experiences.map((exp) => (
          <li key={exp.id} className="p-6 nav:p-8 rounded-[22px] border border-white/[0.09] card-surface">
            <div className="flex flex-wrap justify-between gap-2.5 mb-3.5">
              <div>
                <h3 className="m-0 mb-1.5 font-display font-bold text-[clamp(19px,1.9vw,24px)] text-white">{exp.role[lang]}</h3>
                <p className="m-0 text-[15px] text-[#e5c6c8] font-semibold">{exp.company[lang]}</p>
                <p className="mt-1 mb-0 text-sm text-[#c3a1a4]">{exp.location[lang]}</p>
              </div>
              <p className="m-0 self-start px-3.5 py-1.5 rounded-full border border-white/[0.14] font-mono text-xs text-[#f3c3c5] whitespace-nowrap">
                {exp.period[lang]}
              </p>
            </div>
            <ul className="m-0 p-0 flex flex-col gap-2.5">
              {exp.achievements.map((achievement) => (
                <li key={achievement.en} className="flex gap-3 text-[15px] leading-relaxed text-ink-secondary">
                  <span aria-hidden="true" className="shrink-0 mt-2 w-[5px] h-[5px] rounded-full bg-brand-light" />
                  {achievement[lang]}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
