const Skills = () => {
            const skillCategories = [
                {
                    title: 'Languages',
                    icon: 'fas fa-code',
                    skills: ['Python', 'PHP', 'SQL', 'HTML/CSS']
                },
                {
                    title: 'Frameworks',
                    icon: 'fas fa-layer-group',
                    skills: ['Django', 'Flask', 'FastAPI', 'Selenium', 'Jinja2']
                },
                {
                    title: 'AI/ML Libraries',
                    icon: 'fas fa-brain',
                    skills: ['TensorFlow', 'PyTorch', 'HuggingFace', 'Transformers', 'LangChain', 'OpenAI API']
                },
                {
                    title: 'DevOps & Tools',
                    icon: 'fas fa-tools',
                    skills: ['Docker', 'Git', 'Redis', 'Linux', 'Agile', 'Testing']
                },
                {
                    title: 'Databases',
                    icon: 'fas fa-database',
                    skills: ['PostgreSQL', 'MySQL', 'SQLAlchemy', 'Redis']
                },
                {
                    title: 'APIs & Integration',
                    icon: 'fas fa-plug',
                    skills: ['RESTful API', 'FastAPI', 'OpenAI API', 'Third-party Integrations']
                }
            ];

            return (
                <section id="skills" className="py-20 bg-white dark:bg-slate-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                                Technical Skills
                            </h2>
                            <div className="w-24 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {skillCategories.map((category, index) => (
                                <div key={index} className="skill-card bg-light-bg dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <i className={`${category.icon} text-2xl text-primary-light dark:text-primary-dark mr-3`}></i>
                                        <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark">
                                            {category.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <span 
                                                key={skillIndex}
                                                className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark rounded-full text-sm font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        };

export default Skills;

