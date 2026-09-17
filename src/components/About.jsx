import { useId, useState } from 'react';
import behzadImage from '../../behzadazizan.webp';
import fatemeImage from '../../fatemenikdelfaz.webp';
import kamranImage from '../../kamranmiadi.webp';
import mahdieImage from '../../mahdienikookar.webp';
import resumeUrl from '../../My CV (Maryam Mahmoudi).pdf?url';
import Eyebrow from './ui/Eyebrow.jsx';

const INITIAL_VISIBLE_COUNT = 2;

const recommendations = [
  {
    img: behzadImage,
    alt: 'Behzad Azizan',
    name: 'Behzad Azizan',
    role: 'CTO and Senior Backend Developer at Inboxino',
    context: 'Behzad managed Maryam directly · May 2025',
    link: 'https://www.linkedin.com/in/behzadazizan/',
    short: '“Maryam is highly skilled in Python development and exceptionally professional in handling challenges and collaborating with teams.”',
    full: 'I’ve had the pleasure of working with Maryam for about a year now, and I can confidently say she’s not only highly skilled in development with Python, but also exceptionally professional in how she handles challenges and collaborates with both internal teams and users. Maryam consistently writes clean, well-documented, and maintainable code. What I truly value is that alongside her strong technical abilities, she also brings a thoughtful, respectful attitude, effective cross-team communication, and genuine care for user needs. Her sense of organization and responsibility is outstanding. I always feel confident assigning her important tasks, knowing she’ll handle them with precision and follow through if any issues arise.',
  },
  {
    img: fatemeImage,
    alt: 'Fateme Nikdelfaz',
    name: 'Fateme Nikdelfaz',
    role: 'Machine Learning Engineer | Computer Vision & MLOps',
    context: 'Fatemeh and Maryam studied together · July 2024',
    short: '“Maryam’s expertise, dedication, and teamwork have consistently elevated our AI projects. She is a brilliant and creative programmer.”',
    full: 'I recommend Maryam for her outstanding contributions to the field of AI. Her expertise, dedication, and remarkable teamwork skills have consistently elevated our projects to new heights. Maryam is not only a brilliant AI professional but also an exceptionally creative and proficient programmer. She is known for her work ethic, and her hardworking nature greatly contributes to our team’s success. I have no doubt that she will continue to excel in any AI-related role or endeavor she pursues as a dedicated and highly skilled coworker.',
  },
  {
    img: kamranImage,
    alt: 'Kamran Miadi',
    name: 'Kamran Miadi',
    role: 'DevOps Engineer, NodeJS Developer',
    context: 'Kamran worked with Maryam on the same team · August 2025',
    short: '“I am thrilled to recommend Maryam, an outstanding Python backend developer and data scientist, with whom I’ve collaborated closely as a DevOps engineer.”',
    full: 'I am thrilled to recommend Maryam, an outstanding Python backend developer and data scientist, with whom I’ve collaborated closely as a DevOps engineer. She is exceptionally smart, dedicated, and possesses a deep understanding of her craft. Maryam’s extensive experience in backend development, combined with her strong expertise in AI and data science, enables her to deliver robust, innovative, and data-driven solutions. Her commitment to excellence and ability to tackle complex challenges make her an invaluable team member. I highly recommend Maryam for her technical expertise, professionalism, and collaborative approach.',
  },
  {
    img: mahdieImage,
    alt: 'Mahdie Nikookar',
    name: 'Mahdie Nikookar',
    role: 'Web Developer (Vue.js & React & Node.js) | Product Manager | MBA Candidate',
    context: 'Mahdie worked with Maryam on the same team · August 2025',
    short: '“Collaborating with Maryam at Inboxino was both enjoyable and professionally enriching.”',
    full: 'Collaborating with Maryam at Inboxino was both enjoyable and professionally enriching. She brings solid expertise in Python development and a strong command of data science, which allowed her to contribute meaningful insights and effective solutions throughout our time working together. Maryam is a sharp thinker and a reliable teammate who approaches challenges with calm focus and creativity. Her respectful communication style, dedication to quality, and willingness to support others…',
  },
];

const RecommendationCard = ({ recommendation }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <figure className="m-0 mb-3.5 last:mb-0 p-6 rounded-[20px] border border-white/[0.09] card-surface">
      <blockquote className="m-0 mb-[18px] text-base leading-relaxed text-[#eed9da]">
        {expanded ? recommendation.full : recommendation.short}
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
              <span className="block text-xs leading-tight text-ink-muted truncate">{recommendation.role}</span>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-label={expanded ? 'Collapse recommendation' : 'Expand recommendation'}
          className="shrink-0 text-ink-secondary hover:text-white"
        >
          <i className={`fas ${expanded ? 'fa-chevron-up' : 'fa-chevron-down'}`} aria-hidden="true"></i>
        </button>
      </figcaption>
      {recommendation.context && (
        <p className="m-0 mt-3 pt-3 border-t border-white/[0.08] font-mono text-[11px] tracking-[0.04em] text-ink-muted">
          {recommendation.context}
        </p>
      )}
    </figure>
  );
};

const RecommendationsList = () => {
  const [showAll, setShowAll] = useState(false);
  const panelId = useId();
  const hiddenCount = recommendations.length - INITIAL_VISIBLE_COUNT;

  return (
    <div>
      <h3 className="m-0 mb-[18px] font-display font-semibold text-lg text-white">What coworkers say</h3>
      {recommendations.slice(0, INITIAL_VISIBLE_COUNT).map((recommendation) => (
        <RecommendationCard key={recommendation.name} recommendation={recommendation} />
      ))}
      {hiddenCount > 0 && (
        <div
          id={panelId}
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${showAll ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            {recommendations.slice(INITIAL_VISIBLE_COUNT).map((recommendation) => (
              <RecommendationCard key={recommendation.name} recommendation={recommendation} />
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
          {showAll ? 'Show less' : `See ${hiddenCount} more recommendation${hiddenCount > 1 ? 's' : ''}`}
          <i className={`fas ${showAll ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs`} aria-hidden="true"></i>
        </button>
      )}
    </div>
  );
};

const About = () => (
  <section id="about" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
    <Eyebrow>About Me</Eyebrow>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-8 nav:gap-14 items-start">
      <div>
        <h2 className="m-0 mb-5 font-display font-semibold text-[clamp(26px,3.2vw,40px)] leading-[1.15] tracking-tight text-white text-balance">
          AI research, engineered for real systems
        </h2>
        <p className="m-0 mb-4 text-[clamp(15px,1.15vw,17px)] leading-relaxed text-ink-secondary">
          I am an AI researcher with a software engineering and backend foundation. My work connects data science and machine learning with the architecture, APIs, security controls, testing, and operational discipline required to ship dependable systems.
        </p>
        <p className="m-0 mb-4 text-[clamp(15px,1.15vw,17px)] leading-relaxed text-ink-secondary">
          I build primarily with Python and Django, treating AI as a carefully bounded component within a well-engineered product—not as a substitute for deterministic business logic, observability, or human oversight.
        </p>
        <p className="m-0 mb-[26px] text-[clamp(15px,1.15vw,17px)] leading-relaxed text-ink-secondary">
          From September 2026, I will pursue a PhD in Data Science and AI Applications at National Yunlin University of Science and Technology while continuing my research internship there under Prof. Arun Kumar Sangaiah.
        </p>
        <a
          href={resumeUrl}
          download="My CV (Maryam Mahmoudi).pdf"
          className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full border border-white/[0.16] bg-white/[0.04] text-white font-semibold text-sm transition-colors duration-200 hover:bg-white/10 hover:border-white/30"
        >
          Download Full CV <span aria-hidden="true">&#8595;</span>
        </a>
      </div>
      <div>
        <RecommendationsList />
      </div>
    </div>
  </section>
);

export default About;
