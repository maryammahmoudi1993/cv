const Research = () => (
  <section id="research" className="py-20 bg-white dark:bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">Research</h2>
        <div className="w-24 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
      </div>
      <div className="grid lg:grid-cols-5 gap-8">
        <article className="lg:col-span-2 bg-light-bg dark:bg-slate-800 p-8 rounded-lg shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-light dark:text-accent-dark mb-3">Starting September 2026</p>
          <h3 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">PhD in Data Science and AI Applications</h3>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-5">National Yunlin University of Science and Technology (YunTech)</p>
          <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
            Research internship at YunTech under Prof. Arun Kumar Sangaiah, combining AI research with implementation-focused software engineering.
          </p>
        </article>
        <article className="lg:col-span-3 bg-light-bg dark:bg-slate-800 p-8 rounded-lg shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-light dark:text-accent-dark mb-3">
            Review paper · Submitted · Under review
          </p>
          <h3 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
            Hybrid Digital Twins for Microbial Fuel Cell Systems in Microgravity: Combining Physical Models and Artificial Intelligence for Predictive Autonomous Control
          </h3>
        </article>
      </div>
    </div>
  </section>
);

export default Research;
