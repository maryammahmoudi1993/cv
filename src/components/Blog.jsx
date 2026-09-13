import blogImage from '../../blog-llm-langchain.webp';

const Blog = () => {
            const blogPosts = [
                {
                    title: "How I Used LLMs and LangChain to Understand Customer Emotions and Behaviors in Real-Time",
                    description: "A comprehensive guide on implementing real-time customer sentiment analysis using Large Language Models and LangChain framework.",
                    url: "https://medium.com/@mahmoodi.maryam1993/how-i-used-llms-and-langchain-to-understand-customer-emotions-and-behaviors-in-real-time-89c64bedd3d4",
                    date: "2025",
                    readTime: "5 min read",
                    tags: ["LLM", "LangChain", "Sentiment Analysis", "Customer Analytics"],
                    image: blogImage
                }
            ];

            return (
                <section id="blog" className="py-20 bg-white dark:bg-slate-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                                Latest Blog Posts
                            </h2>
                            <div className="w-24 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
                            <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto mt-6">
                                Sharing insights and experiences from my journey in AI and data science
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post, index) => (
                                <article key={index} className="bg-light-bg dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className="aspect-video overflow-hidden">
                                        <img 
                                            src={post.image} 
                                            alt={post.title}
                                            width="960"
                                            height="540"
                                            loading="lazy"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                                {post.date}
                                            </span>
                                            <span className="text-sm text-accent-light dark:text-accent-dark font-medium">
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3 line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4 line-clamp-3">
                                            {post.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.map((tag, tagIndex) => (
                                                <span 
                                                    key={tagIndex}
                                                    className="px-2 py-1 bg-primary-light/10 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark rounded text-xs font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <a 
                                            href={post.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-accent-light dark:text-accent-dark hover:text-accent-dark dark:hover:text-accent-light font-medium transition-colors"
                                        >
                                            Read on Medium
                                            <i className="fas fa-external-link-alt ml-2"></i>
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                        
                        <div className="text-center mt-12">
                            <a 
                                href="https://medium.com/@mahmoodi.maryam1993"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-primary-light dark:bg-primary-dark text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors"
                            >
                                <i className="fab fa-medium mr-2"></i>
                                View All Posts
                            </a>
                        </div>
                    </div>
                </section>
            );
        };

export default Blog;
