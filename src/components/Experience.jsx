const Experience = () => {
            const experiences = [
                {
                    company: 'Inboxino',
                    role: 'Python Developer',
                    location: 'Mashhad, Iran',
                    period: 'August 2024 - July 2025',
                    achievements: [
                        'Developed automation tools and custom bots using Python',
                        'Built and maintained backend services in PHP for scalable systems',
                        'Contributed to business intelligence dashboards and reporting pipelines',
                        'Collaborated across data and backend teams for system integration'
                    ]
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
                        'Successfully deployed ML models in 3 commercial company projects'
                    ]
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
                        'Contributed to building scalable pipelines for image analysis and deployment'
                    ]
                }
            ];
            

            return (
                <section id="experience" className="py-20 bg-white dark:bg-slate-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                                Professional Experience
                            </h2>
                            <div className="w-24 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
                        </div>
                        
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <div key={index} className="bg-light-bg dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark">
                                                {exp.role}
                                            </h3>
                                            <h4 className="text-lg text-primary-light dark:text-primary-dark font-medium">
                                                {exp.company}
                                            </h4>
                                            <p className="text-text-secondary-light dark:text-text-secondary-dark">
                                                <i className="fas fa-map-marker-alt mr-2"></i>{exp.location}
                                            </p>
                                        </div>
                                        <div className="mt-2 md:mt-0">
                                            <span className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/20 text-accent-light dark:text-accent-dark rounded-full text-sm font-medium">
                                                {exp.period}
                                            </span>
                                        </div>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <li key={achIndex} className="flex items-start text-text-secondary-light dark:text-text-secondary-dark">
                                                <i className="fas fa-check-circle text-accent-light dark:text-accent-dark mr-3 mt-1 flex-shrink-0"></i>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        };

export default Experience;

