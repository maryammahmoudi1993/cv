import Eyebrow from './ui/Eyebrow.jsx';

const education = [
  {
    degree: 'PhD in Data Science and AI Applications',
    university: 'National Yunlin University of Science and Technology (YunTech)',
    period: 'Starting September 2026',
    tinted: true,
  },
  {
    degree: 'Master of Science in Electrical Engineering — Telecommunications',
    university: 'Ferdowsi University of Mashhad',
    period: 'September 2016 – September 2021 | GPA: 17.17 / 20',
    thesis: 'Osteoporosis Assessment Using Ultrasound Waves with Deep Learning',
  },
  {
    degree: 'Bachelor of Science in Biomedical Engineering — Bioelectric',
    university: 'Sajad University of Technology',
    period: 'September 2011 – September 2015 | GPA: 16 / 20',
    thesis: 'Epileptic Seizure Prediction with Neural Networks',
  },
];

const certificates = [
  'Scientific Poster Presentation Certificate — University of Isfahan & Iranian ICT Association (May 2025)',
  'Appreciation for Reviewing — 14th ICCKE Conference, Ferdowsi University of Mashhad (March 2025)',
  'Deep Learning with TensorFlow 2 — 365 Data Science (2022)',
  'Time Series Analysis with Python — 365 Data Science (2022)',
];

const Education = () => (
  <section id="education" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
    <Eyebrow>Education &amp; Achievements</Eyebrow>
    <h2 className="m-0 mb-8 nav:mb-11 font-display font-semibold text-[clamp(26px,3.2vw,40px)] tracking-tight text-white">
      Education &amp; Achievements
    </h2>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5 items-start">
      <div>
        <h3 className="m-0 mb-[18px] font-display font-semibold text-[19px] text-white">Academic Background</h3>
        <div className="flex flex-col gap-3.5">
          {education.map((item) => (
            <article
              key={item.degree}
              className={`p-6 rounded-[20px] border border-white/[0.09] ${item.tinted ? 'card-tint' : 'card-surface'}`}
            >
              <h4 className="m-0 mb-2 font-display font-semibold text-[17px] leading-snug text-white">{item.degree}</h4>
              <p className="m-0 mb-1.5 text-sm text-ink-secondary">{item.university}</p>
              <p className="m-0 font-mono text-xs text-[#f3a2a6]">{item.period}</p>
              {item.thesis && (
                <p className="mt-2.5 mb-0 text-sm leading-relaxed text-[#c3a1a4]">
                  <strong className="text-white font-semibold">Thesis:</strong> {item.thesis}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
      <div>
        <h3 className="m-0 mb-[18px] font-display font-semibold text-[19px] text-white">Certificates &amp; Activities</h3>
        <ul className="m-0 p-0 flex flex-col gap-3">
          {certificates.map((certificate) => (
            <li
              key={certificate}
              className="px-[22px] py-5 rounded-[18px] border border-white/[0.09] bg-white/[0.035] text-[15px] leading-relaxed text-[#e2c9cb] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.22]"
            >
              {certificate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Education;
