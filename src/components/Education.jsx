const Education = () => {
            const education = [
                {
                    degree: 'Master of Science in Electrical Engineering – Telecommunications',
                    university: 'Ferdowsi University of Mashhad',
                    period: 'September 2016 – September 2021',
                    thesis: 'Osteoporosis Assessment Using Ultrasound Waves with Deep Learning',
                    gpa: '17.17 / 20'
                },
                {
                    degree: 'Bachelor of Science in Biomedical Engineering – Bioelectric',
                    university: 'Sajad University of Technology',
                    period: 'September 2011 – September 2015',
                    thesis: 'Epileptic Seizure Prediction with Neural Networks',
                    gpa: '16 / 20'
                }
            ];

            const certificates = [
                'Scientific Poster Presentation Certificate – University of Isfahan & Iranian ICT Association (May 2025)',
                'Appreciation for Reviewing – 14th ICCKE Conference, Ferdowsi University of Mashhad (March 2025)',
                'Deep Learning with TensorFlow 2 – 365 Data Science (2022)',
                'Time Series Analysis with Python – 365 Data Science (2022)'
            ];
            
            

            const publications = [
                {
                    title: 'Energy-aware Workflow Scheduling in Cloud Computing: DVFS-enabled under Deadline Constraint',
                    conference: '29th International Conference on Power Distribution Networks (EPDC), IEEE',
                    year: '2025',
                    doi: '#'
                },
                {
                    title: 'A Demand Response Schema in Industry: Smart Scheduling Approach for Industrial Processes',
                    conference: '15th International Conference on Information and Knowledge Technology (IKT), IEEE',
                    year: '2024',
                    doi: 'https://ieeexplore.ieee.org/abstract/document/10892614'
                },
                {
                    title: 'Controlling Energy Consumption and Intelligent Manufacturing through an Energy-Aware Scheduling Algorithm in Industrial Sector',
                    conference: '32nd International Conference on Electrical Engineering (ICEE)',
                    year: '2024',
                    doi: 'https://iceeconf.ir/home/Article/d35375f3-00ba-4b58-8fe3-77d0c01c59f2'
                },
                {
                    title: 'Understanding Charging and Power Dynamics in Electric Bus Fleets: A six-Month Case Study of Utah Transit Authority',
                    conference: '27th IEEE International Conference on Intelligent Transportation Systems (ITSC), Submitted',
                    year: '2024',
                    doi: '#'
                }
            ];
            

            return (
                <section id="education" className="py-20 bg-light-bg dark:bg-dark-bg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                                Education & Achievements
                            </h2>
                            <div className="w-24 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
                        </div>
                        
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Education */}
                            <div className="lg:col-span-2">
                                <h3 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-6">
                                    Academic Background
                                </h3>
                                <div className="space-y-6">
                                    {education.map((edu, index) => (
                                        <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                                            <h4 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
                                                {edu.degree}
                                            </h4>
                                            <p className="text-primary-light dark:text-primary-dark font-medium mb-2">
                                                {edu.university}
                                            </p>
                                            <p className="text-text-secondary-light dark:text-text-secondary-dark mb-2">
                                                {edu.period} | GPA: {edu.gpa}
                                            </p>
                                            <p className="text-text-secondary-light dark:text-text-secondary-dark">
                                                <strong>Thesis:</strong> {edu.thesis}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Publications */}
                                <h3 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-6 mt-12">
                                    Publications
                                </h3>
                                <div className="space-y-4">
                                    {publications.map((pub, index) => (
                                        <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg">
                                            <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
                                                {pub.title}
                                            </h4>
                                            <p className="text-text-secondary-light dark:text-text-secondary-dark">
                                                {pub.conference} ({pub.year})
                                                <a href={pub.doi} className="text-primary-light dark:text-primary-dark ml-2 hover:underline">
                                                    <i className="fas fa-external-link-alt"></i>
                                                </a>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Certificates */}
                            <div>
                                <h3 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-6">
                                    Certificates & Awards
                                </h3>
                                <div className="space-y-4">
                                    {certificates.map((cert, index) => (
                                        <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg">
                                            <div className="flex items-center">
                                                <i className="fas fa-certificate text-accent-light dark:text-accent-dark mr-3"></i>
                                                <span className="text-text-primary-light dark:text-text-primary-dark">
                                                    {cert}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                                    <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
                                        Conference Activities
                                    </h4>
                                    <ul className="space-y-2 text-text-secondary-light dark:text-text-secondary-dark">
                                        <li><i className="fas fa-user-check text-accent-light dark:text-accent-dark mr-2"></i>Peer Reviewer - IEEE Conferences</li>
                                        <li><i className="fas fa-presentation text-accent-light dark:text-accent-dark mr-2"></i>Poster Presenter - ICEE 2020</li>
                                        <li><i className="fas fa-gavel text-accent-light dark:text-accent-dark mr-2"></i>Technical Committee Member</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        };

export default Education;

