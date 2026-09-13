import { useEffect, useState } from 'react';
import profileImage from '../../me.png';
import resumeUrl from '../../My CV (Maryam Mahmoudi).pdf?url';

const Hero = () => {
            const [displayText, setDisplayText] = useState('');
            const [currentIndex, setCurrentIndex] = useState(0);
            const titles = ['AI-Powered Backend Developer', 'Data Scientist', 'Machine Learning Engineer', 'Python Developer'];
            const [titleIndex, setTitleIndex] = useState(0);

            useEffect(() => {
                const currentTitle = titles[titleIndex];
                if (currentIndex < currentTitle.length) {
                    const timeout = setTimeout(() => {
                        setDisplayText(currentTitle.slice(0, currentIndex + 1));
                        setCurrentIndex(currentIndex + 1);
                    }, 100);
                    return () => clearTimeout(timeout);
                } else {
                    const timeout = setTimeout(() => {
                        setCurrentIndex(0);
                        setDisplayText('');
                        setTitleIndex((titleIndex + 1) % titles.length);
                    }, 2000);
                    return () => clearTimeout(timeout);
                }
            }, [currentIndex, titleIndex]);

            return (
                <section id="hero" className="min-h-screen flex items-center justify-center gradient-bg pt-20 md:pt-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="fade-in">
                            <div className="mb-8">
                                <img 
                                    src={profileImage}
                                    alt="Maryam Mahmoudi"
                                    className="w-48 h-48 mx-auto rounded-full border-4 border-white shadow-2xl object-cover"
                                />
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                                Maryam Mahmoudi
                            </h1>
                            <div className="text-2xl md:text-3xl text-blue-100 mb-4 h-12">
                                <span className="typing-animation">{displayText}</span>
                            </div>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Transforming data into intelligent solutions with cutting-edge AI and robust backend systems
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button 
                                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 bg-white text-primary-light font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                                >
                                    <i className="fas fa-code mr-2"></i>View Projects
                                </button>
                                <button 
                                    onClick={() => {
                                        const link = document.createElement('a');
                                        link.href = resumeUrl;
                                        link.download = 'My CV (Maryam Mahmoudi).pdf';
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-light transition-colors"
                                >
                                    <i className="fas fa-download mr-2"></i>Download Resume
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            );
        };

export default Hero;
