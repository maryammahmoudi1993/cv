import { useState } from 'react';
import behzadImage from '../../behzadazizan.png';
import fatemeImage from '../../fatemenikdelfaz.png';
import resumeUrl from '../../My CV (Maryam Mahmoudi).pdf?url';

const About = () => {
            return (
                <section id="about" className="py-20 bg-light-bg dark:bg-dark-bg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                                About Me
                            </h2>
                            <div className="w-24 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h3 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-6">
                    Passionate About AI & Backend Excellence
                </h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6 leading-relaxed">
                    I'm a dedicated Data Scientist and Backend Developer with extensive expertise in AI and Machine Learning. 
                    My passion lies in creating intelligent systems that solve real-world problems through innovative technology.
                </p>
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6 leading-relaxed">
                    With a strong foundation in Python, Django, and cutting-edge ML frameworks, I specialize in building 
                    scalable backend solutions and implementing AI-driven features that enhance user experiences and business outcomes.
                </p>
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8 leading-relaxed">
                    I thrive in international and remote team environments, bringing cross-cultural collaboration skills 
                    and a global perspective to every project I undertake.
                </p>
                <button 
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = resumeUrl;
                        link.download = 'My CV (Maryam Mahmoudi).pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }}
                    className="px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors"
                >
                    <i className="fas fa-file-pdf mr-2"></i>Download Full CV
                </button>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-6">What my coworkers think about me</h3>
                <div className="space-y-6">
                    {/* Recommendation Cards */}
                    {[
                        {
                            img: behzadImage,
                            alt: 'CTO Inboxino',
                            name: 'Behzad Azizan - CTO and Senior backend developer at Inboxino',
                            link: 'https://www.linkedin.com/in/behzadazizan/',
                            short: '"Maryam is highly skilled in Python development and exceptionally professional in handling challenges and collaborating with teams."',
                            full: 'I\'ve had the pleasure of working with Maryam for about a year now, and I can confidently say she\'s not only highly skilled in development with Python, but also exceptionally professional in how she handles challenges and collaborates with both internal teams and users.\n\nMaryam consistently writes clean, well-documented, and maintainable code. What I truly value is that alongside her strong technical abilities, she also brings a thoughtful, respectful attitude, effective cross-team communication, and genuine care for user needs.\n\nHer sense of organization and responsibility is outstanding. I always feel confident assigning her important tasks, knowing she\'ll handle them with precision and follow through if any issues arise.\n\nWorking with Maryam has been a great experience, and I’m sure she would be a valuable asset to any team.'
                        },
                        {
                            img: fatemeImage,
                            alt: 'Data Scientist Hamta Rayaneh',
                            name: 'Fateme Nikdelfaz – Data Scientist | Machine Learning Engineer',
                            link: '',
                            short: '"Maryam\'s expertise, dedication, and teamwork have consistently elevated our AI projects. She is a brilliant and creative programmer."',
                            full: 'I recommend Maryam for her outstanding contributions to the field of AI. Her expertise, dedication, and remarkable teamwork skills have consistently elevated our projects to new heights. Maryam is not only a brilliant AI professional but also an exceptionally creative and proficient programmer. She is known for her work ethic, and her hardworking nature greatly contributes to our team\'s success. I have no doubt that she will continue to excel in any AI-related role or endeavor she pursues as a dedicated and highly skilled coworker.'
                        }
                    ].map((rec, idx) => {
                        const [expanded, setExpanded] = useState(false);
                        return (
                            <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg flex items-start gap-4">
                                <img src={rec.img} alt={rec.alt} className="w-16 h-16 rounded-full object-cover border-2 border-primary-light dark:border-primary-dark" />
                                <div className="flex-1">
                                    <p className="text-text-secondary-light dark:text-text-secondary-dark mb-2 italic">
                                        {expanded ? rec.full : rec.short}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        {rec.link ? (
                                            <a href={rec.link} target="_blank" rel="noopener noreferrer" className="text-primary-light dark:text-primary-dark font-medium">
                                                {rec.name}
                                            </a>
                                        ) : (
                                            <span className="text-primary-light dark:text-primary-dark font-medium">{rec.name}</span>
                                        )}
                                        <a
                                            href="#"
                                            onClick={e => {
                                                e.preventDefault();
                                                setExpanded(!expanded);
                                            }}
                                            className="ml-4 text-xl text-primary-light dark:text-primary-dark cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 flex items-center"
                                            aria-label={expanded ? 'Collapse recommendation' : 'Expand recommendation'}
                                        >
                                            <i className={`fas ${expanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
                        </div>
                    </div>
                </section>
            );
        };

export default About;
