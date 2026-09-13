const education = [
  {
    degree: 'PhD in Data Science and AI Applications',
    university: 'National Yunlin University of Science and Technology (YunTech)',
    period: 'Starting September 2026',
  },
  {
    degree: 'Master of Science in Electrical Engineering — Telecommunications',
    university: 'Ferdowsi University of Mashhad',
    period: 'September 2016 – September 2021',
    thesis: 'Osteoporosis Assessment Using Ultrasound Waves with Deep Learning',
    gpa: '17.17 / 20',
  },
  {
    degree: 'Bachelor of Science in Biomedical Engineering — Bioelectric',
    university: 'Sajad University of Technology',
    period: 'September 2011 – September 2015',
    thesis: 'Epileptic Seizure Prediction with Neural Networks',
    gpa: '16 / 20',
  },
];

const certificates = [
  'Scientific Poster Presentation Certificate — University of Isfahan & Iranian ICT Association (May 2025)',
  'Appreciation for Reviewing — 14th ICCKE Conference, Ferdowsi University of Mashhad (March 2025)',
  'Deep Learning with TensorFlow 2 — 365 Data Science (2022)',
  'Time Series Analysis with Python — 365 Data Science (2022)',
];

const Education = () => (
  <section id="education" className="py-20 bg-light-bg dark:bg-dark-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">Education & Achievements</h2>
        <div className="w-24 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-6">Academic Background</h3>
          <div className="space-y-6">
            {education.map((item) => (
              <article key={item.degree} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">{item.degree}</h4>
                <p className="text-primary-light dark:text-primary-dark font-medium mb-2">{item.university}</p>
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-2">
                  {item.period}{item.gpa && ` | GPA: ${item.gpa}`}
                </p>
                {item.thesis && <p className="text-text-secondary-light dark:text-text-secondary-dark"><strong>Thesis:</strong> {item.thesis}</p>}
              </article>
            ))}
          </div>
        </div>
        <aside>
          <h3 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-6">Certificates & Activities</h3>
          <div className="space-y-4">
            {certificates.map((certificate) => (
              <div key={certificate} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg flex items-start">
                <i className="fas fa-certificate text-accent-light dark:text-accent-dark mr-3 mt-1" aria-hidden="true"></i>
                <span className="text-text-primary-light dark:text-text-primary-dark">{certificate}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  </section>
);

export default Education;
