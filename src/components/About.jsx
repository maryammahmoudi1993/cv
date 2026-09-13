import { useState } from 'react';
import behzadImage from '../../behzadazizan.png';
import fatemeImage from '../../fatemenikdelfaz.png';
import resumeUrl from '../../My CV (Maryam Mahmoudi).pdf?url';

const recommendations = [
  {
    img: behzadImage,
    alt: 'Behzad Azizan',
    name: 'Behzad Azizan — CTO and Senior Backend Developer at Inboxino',
    link: 'https://www.linkedin.com/in/behzadazizan/',
    short: '“Maryam is highly skilled in Python development and exceptionally professional in handling challenges and collaborating with teams.”',
    full: 'I’ve had the pleasure of working with Maryam for about a year now, and I can confidently say she’s not only highly skilled in development with Python, but also exceptionally professional in how she handles challenges and collaborates with both internal teams and users. Maryam consistently writes clean, well-documented, and maintainable code. What I truly value is that alongside her strong technical abilities, she also brings a thoughtful, respectful attitude, effective cross-team communication, and genuine care for user needs. Her sense of organization and responsibility is outstanding. I always feel confident assigning her important tasks, knowing she’ll handle them with precision and follow through if any issues arise.',
  },
  {
    img: fatemeImage,
    alt: 'Fateme Nikdelfaz',
    name: 'Fateme Nikdelfaz — Data Scientist and Machine Learning Engineer',
    short: '“Maryam’s expertise, dedication, and teamwork have consistently elevated our AI projects. She is a brilliant and creative programmer.”',
    full: 'I recommend Maryam for her outstanding contributions to the field of AI. Her expertise, dedication, and remarkable teamwork skills have consistently elevated our projects to new heights. Maryam is not only a brilliant AI professional but also an exceptionally creative and proficient programmer. She is known for her work ethic, and her hardworking nature greatly contributes to our team’s success.',
  },
];

const RecommendationCard = ({ recommendation }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg flex items-start gap-4">
      <img src={recommendation.img} alt={recommendation.alt} className="w-16 h-16 rounded-full object-cover border-2 border-primary-light dark:border-primary-dark" />
      <div className="flex-1">
        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-3 italic">
          {expanded ? recommendation.full : recommendation.short}
        </p>
        <div className="flex items-center justify-between gap-4">
          {recommendation.link ? (
            <a href={recommendation.link} target="_blank" rel="noreferrer" className="text-primary-light dark:text-primary-dark font-medium">
              {recommendation.name}
            </a>
          ) : (
            <span className="text-primary-light dark:text-primary-dark font-medium">{recommendation.name}</span>
          )}
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="text-primary-light dark:text-primary-dark"
            aria-label={expanded ? 'Collapse recommendation' : 'Expand recommendation'}
          >
            <i className={`fas ${expanded ? 'fa-chevron-up' : 'fa-chevron-down'}`} aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </article>
  );
};

const About = () => (
  <section id="about" className="py-20 bg-light-bg dark:bg-dark-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">About Me</h2>
        <div className="w-24 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-6">
            AI research, engineered for real systems
          </h3>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6 leading-relaxed">
            I am an AI researcher with a software engineering and backend foundation. My work connects data science and machine learning with the architecture, APIs, security controls, testing, and operational discipline required to ship dependable systems.
          </p>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6 leading-relaxed">
            I build primarily with Python and Django, treating AI as a carefully bounded component within a well-engineered product—not as a substitute for deterministic business logic, observability, or human oversight.
          </p>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8 leading-relaxed">
            From September 2026, I will pursue a PhD in Data Science and AI Applications at National Yunlin University of Science and Technology while continuing my research internship there under Prof. Arun Kumar Sangaiah.
          </p>
          <a href={resumeUrl} download="My CV (Maryam Mahmoudi).pdf" className="inline-block px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors">
            <i className="fas fa-file-pdf mr-2" aria-hidden="true"></i>Download Full CV
          </a>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-6">What coworkers say</h3>
          <div className="space-y-6">
            {recommendations.map((recommendation) => <RecommendationCard key={recommendation.name} recommendation={recommendation} />)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
