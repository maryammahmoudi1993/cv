const Projects = () => {
            const projects = [
                {
                    title: 'AI-Powered Customer Chat Analyzer',
                    description: 'A modular and production-ready AI system for analyzing, summarizing, and classifying customer conversations using LangChain, HuggingFace Transformers, and Redis. It enables session-based summarization, sentiment analysis, and topic categorization with a simple web UI.',
                    tech: ['Python', 'LangChain', 'OpenAI GPT', 'HuggingFace Transformers', 'FastAPI', 'Redis', 'HTML/CSS', 'Jinja2'],
                    features: [
                        "Summarizes customer chats using LangChain and OpenAI models",
                        "Stores and manages chat sessions in Redis",
                        "Performs sentiment analysis using fine-tuned HuggingFace models (positive, negative, neutral)",
                        "Implements automatic topic classification (e.g., complaint, inquiry, purchase intent)",
                        "RESTful API developed with FastAPI for integration and automation",
                        "Minimal web UI with HTML/CSS and Jinja2 templates",
                        "Modular architecture for easy maintenance and production deployment"
                      ],
                    github: 'https://github.com/maryammahmoudi1993/ChatSummerizer',
                    demo: '#',
                    tags: ["AI", "LangChain", "NLP", "FastAPI", "Chat Analysis", "Redis", "Transformers", "Summarization"]
                },
                {
                    title: 'Neural Machine Translation (English ↔ Spanish)',
                    "description": "A sequence-to-sequence (Seq2Seq) machine translation system built with an encoder-decoder architecture for English to Spanish and vice versa translation.",
                    tech: ["Python", "TensorFlow", "Seq2Seq", "LSTM", "Attention"],
                    "features": [
                        "Bi-directional translation (English ↔ Spanish)",
                        "Encoder-Decoder architecture with attention mechanism",
                        "Tokenization and preprocessing pipeline",
                        "BLEU score evaluation for model performance",
                        "Custom vocabulary and padding strategy"
                    ],
                    "github": "https://github.com/maryammahmoudi1993/Translation-spanish-english",
                    "demo": "",
                    "tags": ["NLP", "Seq2Seq", "Machine Translation", "Deep Learning", "TensorFlow"]
                },
                {
                    "title": "Object Detection Using Vision Transformers (ViT)",
                    "description": "Developed an object detection model using Vision Transformer (ViT) architecture for accurate recognition and localization in images.",
                    "tech": ["Python", "TensorFlow", "Vision Transformer (ViT)", "OpenCV"],
                    "features": [
                      "Image classification and object detection using ViT",
                      "Pretrained model fine-tuning with custom datasets",
                      "Visualization of bounding boxes and detection confidence",
                      "TensorFlow-based training and evaluation pipeline"
                    ],
                    "github": "",
                    "demo": "",
                    "tags": ["Computer Vision", "ViT", "Object Detection", "Transformers", "TensorFlow"]
                  },
                // {
                //     title: 'Intelligent Document Processing',
                //     description: 'Developed an AI-powered system for extracting and processing information from various document formats using OCR and NLP.',
                //     tech: ['Python', 'OpenAI API', 'LangChain', 'Django', 'Celery'],
                //     features: ['Multi-format support', 'Automated extraction', 'High accuracy'],
                //     github: '#',
                //     demo: '#',
                //     tags: ['NLP', 'OCR', 'Automation']
                // }
            ];

            return (
                <section id="projects" className="py-20 bg-light-bg dark:bg-dark-bg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                                Featured Projects
                            </h2>
                            <div className="w-24 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="project-card bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark">
                                                {project.title}
                                            </h3>
                                            <div className="flex space-x-2">
                                                <a 
                                                    href={project.github}
                                                    className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                                                >
                                                    <i className="fab fa-github text-xl"></i>
                                                </a>
                                                <a 
                                                    href={project.demo}
                                                    className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                                                >
                                                    <i className="fas fa-external-link-alt text-xl"></i>
                                                </a>
                                            </div>
                                        </div>
                                        
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                                            {project.description}
                                        </p>
                                        
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">Key Features:</h4>
                                            <ul className="list-disc list-inside text-text-secondary-light dark:text-text-secondary-dark">
                                                {project.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((tech, techIndex) => (
                                                    <span 
                                                        key={techIndex}
                                                        className="px-2 py-1 bg-accent-light/10 dark:bg-accent-dark/20 text-accent-light dark:text-accent-dark rounded text-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span 
                                                    key={tagIndex}
                                                    className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark rounded-full text-sm font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        };

export default Projects;

