import Eyebrow from './ui/Eyebrow.jsx';
import { useLanguage } from '../lib/LanguageContext.jsx';

const education = [
  {
    id: 'phd',
    degree: { en: 'PhD in Data Science and AI Applications', zh: '資料科學與人工智慧應用博士學位' },
    university: { en: 'National Yunlin University of Science and Technology (YunTech)', zh: '國立雲林科技大學（YunTech）' },
    period: { en: 'Starting September 2026', zh: '2026 年 9 月起' },
    tinted: true,
  },
  {
    id: 'msc',
    degree: { en: 'Master of Science in Electrical Engineering — Telecommunications', zh: '電機工程碩士——電信領域' },
    university: { en: 'Ferdowsi University of Mashhad', zh: '費爾多西大學（馬什哈德）' },
    period: { en: 'September 2016 – September 2021 | GPA: 17.17 / 20', zh: '2016 年 9 月 – 2021 年 9 月 | GPA：17.17 / 20' },
    thesis: {
      en: 'Osteoporosis Assessment Using Ultrasound Waves with Deep Learning',
      zh: '利用超音波波形與深度學習進行骨質疏鬆症評估',
    },
  },
  {
    id: 'bsc',
    degree: { en: 'Bachelor of Science in Biomedical Engineering — Bioelectric', zh: '生醫工程學士——生物電子領域' },
    university: { en: 'Sajad University of Technology', zh: '薩賈德科技大學' },
    period: { en: 'September 2011 – September 2015 | GPA: 16 / 20', zh: '2011 年 9 月 – 2015 年 9 月 | GPA：16 / 20' },
    thesis: {
      en: 'Epileptic Seizure Prediction with Neural Networks',
      zh: '以神經網路預測癲癇發作',
    },
  },
];

const certificates = [
  {
    en: 'Scientific Poster Presentation Certificate — University of Isfahan & Iranian ICT Association (May 2025)',
    zh: '科學海報發表證書——伊斯法罕大學暨伊朗資通訊協會（2025 年 5 月）',
  },
  {
    en: 'Appreciation for Reviewing — 14th ICCKE Conference, Ferdowsi University of Mashhad (March 2025)',
    zh: '審稿感謝狀——第 14 屆 ICCKE 研討會，費爾多西大學（2025 年 3 月）',
  },
  {
    en: 'Deep Learning with TensorFlow 2 — 365 Data Science (2022)',
    zh: 'TensorFlow 2 深度學習課程——365 Data Science（2022 年）',
  },
  {
    en: 'Time Series Analysis with Python — 365 Data Science (2022)',
    zh: 'Python 時間序列分析課程——365 Data Science（2022 年）',
  },
  {
    en: 'TOEFL iBT: 100 (February 2026)',
    zh: '托福 iBT：100 分（2026 年 2 月）',
  },
  {
    en: 'GRE: Top 7 / 1,000+ participants (2023)',
    zh: 'GRE：1,000+ 名考生中排名前 7（2023 年）',
  },
];

const strings = {
  en: {
    eyebrow: 'Education & Achievements',
    heading: 'Education & Achievements',
    academic: 'Academic Background',
    certs: 'Certificates & Activities',
    thesisLabel: 'Thesis',
  },
  zh: {
    eyebrow: '學歷與成就',
    heading: '學歷與成就',
    academic: '學術背景',
    certs: '證書與活動',
    thesisLabel: '論文題目',
  },
};

const Education = () => {
  const { lang } = useLanguage();
  const t = strings[lang];

  return (
    <section id="education" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <h2 className="m-0 mb-8 nav:mb-11 font-display font-semibold text-[clamp(26px,3.2vw,40px)] tracking-tight text-white">
        {t.heading}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5 items-start">
        <div>
          <h3 className="m-0 mb-[18px] font-display font-semibold text-[19px] text-white">{t.academic}</h3>
          <div className="flex flex-col gap-3.5">
            {education.map((item) => (
              <article
                key={item.id}
                className={`p-6 rounded-[20px] border border-white/[0.09] ${item.tinted ? 'card-tint' : 'card-surface'}`}
              >
                <h4 className="m-0 mb-2 font-display font-semibold text-[17px] leading-snug text-white">{item.degree[lang]}</h4>
                <p className="m-0 mb-1.5 text-sm text-ink-secondary">{item.university[lang]}</p>
                <p className="m-0 font-mono text-xs text-[#f3a2a6]">{item.period[lang]}</p>
                {item.thesis && (
                  <p className="mt-2.5 mb-0 text-sm leading-relaxed text-[#c3a1a4]">
                    <strong className="text-white font-semibold">{t.thesisLabel}:</strong> {item.thesis[lang]}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
        <div>
          <h3 className="m-0 mb-[18px] font-display font-semibold text-[19px] text-white">{t.certs}</h3>
          <ul className="m-0 p-0 flex flex-col gap-3">
            {certificates.map((certificate) => (
              <li
                key={certificate.en}
                className="px-[22px] py-5 rounded-[18px] border border-white/[0.09] bg-white/[0.035] text-[15px] leading-relaxed text-[#e2c9cb] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.22]"
              >
                {certificate[lang]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
