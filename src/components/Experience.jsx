import Eyebrow from './ui/Eyebrow.jsx';

const experiences = [
  {
    company: 'National Yunlin University of Science and Technology (YunTech)',
    role: 'Research Intern',
    location: 'Yunlin, Taiwan',
    period: 'April 2026 – Sep 2026',
    achievements: [
      'Conducting AI research under Prof. Arun Kumar Sangaiah',
      'Combining research work with implementation-focused software engineering',
    ],
  },
  {
    company: 'Inboxino',
    role: 'Python Developer',
    location: 'Mashhad, Iran',
    period: 'August 2024 - July 2025',
    achievements: [
      'Developed automation tools and custom bots using Python',
      'Built and maintained backend services in PHP for scalable systems',
      'Contributed to business intelligence dashboards and reporting pipelines',
      'Collaborated across data and backend teams for system integration',
    ],
  },
  {
    company: 'Hamta Rayaneh Research and Information Company',
    role: 'Data Scientist & BI Developer',
    location: 'Mashhad, Iran',
    period: 'September 2021 - August 2024',
    achievements: [
      'Implemented deep learning models with TensorFlow to handle large datasets (50K+ records)',
      'Reduced data processing time significantly through optimized pipelines',
      'Improved prediction model accuracy by 18% in internal forecasting projects',
      'Successfully deployed ML models in 3 commercial company projects',
    ],
  },
  {
    company: 'Toos-Tech GmbH',
    role: 'AI Engineer (Computer Vision)',
    location: 'Cologne, Germany (Remote)',
    period: 'March 2020 - February 2022',
    achievements: [
      'Developed object detection models achieving 90% accuracy on a 1,000-image test set',
      'Used Transformer-based models (ViT) for enhanced real-time performance',
      'Reduced image processing runtime by 30% for real-time object recognition',
      'Contributed to building scalable pipelines for image analysis and deployment',
    ],
  },
];

const Experience = () => (
  <section id="experience" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
    <Eyebrow>Professional Experience</Eyebrow>
    <h2 className="m-0 mb-8 nav:mb-11 font-display font-semibold text-[clamp(26px,3.2vw,40px)] tracking-tight text-white">
      Professional Experience
    </h2>
    <ol className="m-0 p-0 flex flex-col gap-4">
      {experiences.map((exp) => (
        <li key={exp.company + exp.role} className="p-6 nav:p-8 rounded-[22px] border border-white/[0.09] card-surface">
          <div className="flex flex-wrap justify-between gap-2.5 mb-3.5">
            <div>
              <h3 className="m-0 mb-1.5 font-display font-bold text-[clamp(19px,1.9vw,24px)] text-white">{exp.role}</h3>
              <p className="m-0 text-[15px] text-[#e5c6c8] font-semibold">{exp.company}</p>
              <p className="mt-1 mb-0 text-sm text-[#c3a1a4]">{exp.location}</p>
            </div>
            <p className="m-0 self-start px-3.5 py-1.5 rounded-full border border-white/[0.14] font-mono text-xs text-[#f3c3c5] whitespace-nowrap">
              {exp.period}
            </p>
          </div>
          <ul className="m-0 p-0 flex flex-col gap-2.5">
            {exp.achievements.map((achievement) => (
              <li key={achievement} className="flex gap-3 text-[15px] leading-relaxed text-ink-secondary">
                <span aria-hidden="true" className="shrink-0 mt-2 w-[5px] h-[5px] rounded-full bg-brand-light" />
                {achievement}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </section>
);

export default Experience;
