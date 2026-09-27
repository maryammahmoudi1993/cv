import Eyebrow from './ui/Eyebrow.jsx';
import { useLanguage } from '../lib/LanguageContext.jsx';

const strings = {
  en: {
    eyebrow: 'Research',
    statement: 'My research sits at the intersection of Explainable AI (XAI) and trustworthy systems — with a current focus on biomedical signal processing and physics-informed machine learning. I believe AI systems in high-stakes domains must be interpretable by design, not as an afterthought.',
    phdBadge: 'Starting September 2026',
    phdTitle: 'PhD in Data Science and AI Applications',
    phdUniversity: 'National Yunlin University of Science and Technology (YunTech)',
    phdBody: 'Research internship at YunTech under Prof. Arun Kumar Sangaiah, combining AI research with implementation-focused software engineering.',
    reviewBadge: 'Review paper · Submitted to RSER · Under review',
    reviewTitle: 'Hybrid Digital Twins for Microbial Fuel Cell Systems in Microgravity: Combining Physical Models and Artificial Intelligence for Predictive Autonomous Control',
    entry1Badge: 'In Progress · Target: IEEE Transactions',
    entry1Title: 'Prototype-Guided Multimodal Transformer for Seizure Detection (SeizeIT2 Dataset)',
    entry1Body: 'Combining EEG/ECG wearable signals with prototype-guided explainability to produce clinician-interpretable seizure detection. Targeting IEEE Transactions on Biomedical Engineering.',
    entry2Badge: 'In Progress',
    entry2Title: 'Physics-Informed Synthetic Pretraining for MFC Energy Forecasting (PIE-MFC)',
    entry2Body: 'Hybrid framework combining PINNs, Temporal Fusion Transformers, and SHAP-based XAI for interpretable energy prediction in bioelectrochemical systems.',
  },
  zh: {
    eyebrow: '研究',
    statement: '我的研究位於可解釋 AI（XAI）與可信賴系統的交叉點——目前聚焦於生物醫學訊號處理與物理資訊機器學習。我相信高風險領域的 AI 系統必須在設計之初就具備可解釋性，而非事後補救。',
    phdBadge: '2026 年 9 月起',
    phdTitle: '資料科學與人工智慧應用博士學位',
    phdUniversity: '國立雲林科技大學（YunTech）',
    phdBody: '於雲林科技大學擔任研究實習生，在 Arun Kumar Sangaiah 教授指導下，結合 AI 研究與注重實作的軟體工程。',
    reviewBadge: '綜述論文 · 已投稿至 RSER · 審稿中',
    reviewTitle: '微重力環境下微生物燃料電池系統的混合數位分身：結合物理模型與人工智慧實現預測性自主控制',
    entry1Badge: '進行中 · 目標期刊：IEEE Transactions',
    entry1Title: '基於原型引導的多模態 Transformer 癲癇偵測系統（SeizeIT2 資料集）',
    entry1Body: '結合可穿戴式 EEG/ECG 訊號與原型引導可解釋性，產生臨床醫師可解讀的癲癇偵測結果，目標投稿至 IEEE 生物醫學工程學報。',
    entry2Badge: '進行中',
    entry2Title: '微生物燃料電池能量預測的物理資訊合成預訓練（PIE-MFC）',
    entry2Body: '結合 PINNs、時間融合 Transformer 與 SHAP 可解釋 AI 的混合框架，用於生物電化學系統的可解釋能量預測。',
  },
};

const Research = () => {
  const { lang } = useLanguage();
  const t = strings[lang];

  return (
    <section id="research" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <p className="m-0 mb-8 nav:mb-10 max-w-[80ch] text-[clamp(15px,1.15vw,17px)] leading-relaxed text-ink-secondary text-pretty">
        {t.statement}
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-5">
        <article className="p-6 nav:p-[34px] rounded-[22px] border border-white/10 card-tint">
          <p className="inline-flex mb-4 px-3 py-1.5 rounded-full border border-white/[0.16] font-mono text-[11px] tracking-[0.1em] uppercase text-[#f3c3c5]">
            {t.phdBadge}
          </p>
          <h3 className="m-0 mb-2.5 font-display font-semibold text-[clamp(20px,2vw,26px)] leading-tight text-white">
            {t.phdTitle}
          </h3>
          <p className="m-0 mb-3.5 text-[15px] text-ink-secondary">{t.phdUniversity}</p>
          <p className="m-0 text-[15px] leading-relaxed text-ink-muted">
            {t.phdBody}
          </p>
        </article>
        <article className="p-6 nav:p-[34px] rounded-[22px] border border-white/10 card-surface">
          <p className="inline-flex mb-4 px-3 py-1.5 rounded-full border border-white/[0.16] font-mono text-[11px] tracking-[0.1em] uppercase text-[#f3c3c5]">
            {t.reviewBadge}
          </p>
          <h3 className="m-0 font-display font-semibold text-[clamp(18px,1.7vw,23px)] leading-snug text-white text-pretty">
            {t.reviewTitle}
          </h3>
        </article>
        <article className="p-6 nav:p-[34px] rounded-[22px] border border-white/10 card-surface">
          <p className="inline-flex mb-4 px-3 py-1.5 rounded-full border border-white/[0.16] font-mono text-[11px] tracking-[0.1em] uppercase text-[#f3c3c5]">
            {t.entry1Badge}
          </p>
          <h3 className="m-0 mb-2.5 font-display font-semibold text-[clamp(18px,1.7vw,23px)] leading-snug text-white text-pretty">
            {t.entry1Title}
          </h3>
          <p className="m-0 text-[15px] leading-relaxed text-ink-muted">{t.entry1Body}</p>
        </article>
        <article className="p-6 nav:p-[34px] rounded-[22px] border border-white/10 card-surface">
          <p className="inline-flex mb-4 px-3 py-1.5 rounded-full border border-white/[0.16] font-mono text-[11px] tracking-[0.1em] uppercase text-[#f3c3c5]">
            {t.entry2Badge}
          </p>
          <h3 className="m-0 mb-2.5 font-display font-semibold text-[clamp(18px,1.7vw,23px)] leading-snug text-white text-pretty">
            {t.entry2Title}
          </h3>
          <p className="m-0 text-[15px] leading-relaxed text-ink-muted">{t.entry2Body}</p>
        </article>
      </div>
    </section>
  );
};

export default Research;
