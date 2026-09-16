import Eyebrow from './ui/Eyebrow.jsx';

const Research = () => (
  <section id="research" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
    <Eyebrow>Research</Eyebrow>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-5">
      <article className="p-6 nav:p-[34px] rounded-[22px] border border-white/10 card-tint">
        <p className="inline-flex mb-4 px-3 py-1.5 rounded-full border border-white/[0.16] font-mono text-[11px] tracking-[0.1em] uppercase text-[#f3c3c5]">
          Starting September 2026
        </p>
        <h3 className="m-0 mb-2.5 font-display font-semibold text-[clamp(20px,2vw,26px)] leading-tight text-white">
          PhD in Data Science and AI Applications
        </h3>
        <p className="m-0 mb-3.5 text-[15px] text-ink-secondary">National Yunlin University of Science and Technology (YunTech)</p>
        <p className="m-0 text-[15px] leading-relaxed text-ink-muted">
          Research internship at YunTech under Prof. Arun Kumar Sangaiah, combining AI research with implementation-focused software engineering.
        </p>
      </article>
      <article className="p-6 nav:p-[34px] rounded-[22px] border border-white/10 card-surface">
        <p className="inline-flex mb-4 px-3 py-1.5 rounded-full border border-white/[0.16] font-mono text-[11px] tracking-[0.1em] uppercase text-[#f3c3c5]">
          Review paper &middot; Submitted to RSER &middot; Under review
        </p>
        <h3 className="m-0 font-display font-semibold text-[clamp(18px,1.7vw,23px)] leading-snug text-white text-pretty">
          Hybrid Digital Twins for Microbial Fuel Cell Systems in Microgravity: Combining Physical Models and Artificial Intelligence for Predictive Autonomous Control
        </h3>
      </article>
    </div>
  </section>
);

export default Research;
