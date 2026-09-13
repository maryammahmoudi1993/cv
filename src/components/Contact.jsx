import { useState } from 'react';

const Contact = () => {
            const [formData, setFormData] = useState({
                name: '',
                email: '',
                message: ''
            });

            const handleSubmit = (e) => {
                e.preventDefault();
                // Demo functionality - in real implementation, this would send the email
                alert('Thank you for your message! This is a demo form. In a real implementation, your message would be sent.');
                setFormData({ name: '', email: '', message: '' });
            };

            const handleChange = (e) => {
                setFormData({
                    ...formData,
                    [e.target.name]: e.target.value
                });
            };

            return (
                <section id="contact" className="py-20 bg-white dark:bg-slate-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                                Get In Touch
                            </h2>
                            <div className="w-24 h-1 bg-primary-light dark:bg-primary-dark mx-auto mb-6"></div>
                            <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                                I'm always interested in new opportunities and collaborations. 
                                Let's discuss how we can work together to create something amazing!
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-text-primary-light dark:text-text-primary-dark font-medium mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent bg-white dark:bg-slate-800 text-text-primary-light dark:text-text-primary-dark"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-text-primary-light dark:text-text-primary-dark font-medium mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent bg-white dark:bg-slate-800 text-text-primary-light dark:text-text-primary-dark"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-text-primary-light dark:text-text-primary-dark font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="6"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent bg-white dark:bg-slate-800 text-text-primary-light dark:text-text-primary-dark"
                                            placeholder="Tell me about your project or opportunity..."
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-3 bg-primary-light dark:bg-primary-dark text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors"
                                    >
                                        <i className="fas fa-paper-plane mr-2"></i>Send Message
                                    </button>
                                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark text-center">
                                        <i className="fas fa-info-circle mr-1"></i>
                                        This is a demo form. In production, messages would be sent via email.
                                    </p>
                                </form>
                            </div>

                            {/* Contact Information */}
                            <div>
                                <div className="bg-light-bg dark:bg-slate-800 p-8 rounded-lg shadow-lg">
                                    <h3 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-6">
                                        Let's Connect
                                    </h3>
                                    
                                    <div className="space-y-6">
                                        <div className="flex items-center">
                                            <i className="fas fa-envelope text-2xl text-primary-light dark:text-primary-dark mr-4"></i>
                                            <div>
                                                <p className="font-medium text-text-primary-light dark:text-text-primary-dark">Email</p>
                                                <a href="mailto:mahmoodi.maryam1993@gmail.com" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark">
                                                mahmoodi.maryam1993@gmail.com
                                                </a>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center">
                                            <i className="fab fa-linkedin text-2xl text-primary-light dark:text-primary-dark mr-4"></i>
                                            <div>
                                                <p className="font-medium text-text-primary-light dark:text-text-primary-dark">LinkedIn</p>
                                                <a href="#" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark">
                                                https://www.linkedin.com/in/maryam-mahmoudi-8882857b/
                                                </a>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center">
                                            <i className="fab fa-github text-2xl text-primary-light dark:text-primary-dark mr-4"></i>
                                            <div>
                                                <p className="font-medium text-text-primary-light dark:text-text-primary-dark">GitHub</p>
                                                <a href="#" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark">
                                                https://github.com/maryammahmoudi1993
                                                </a>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center">
                                            <i className="fas fa-map-marker-alt text-2xl text-primary-light dark:text-primary-dark mr-4"></i>
                                            <div>
                                                <p className="font-medium text-text-primary-light dark:text-text-primary-dark">Location</p>
                                                <p className="text-text-secondary-light dark:text-text-secondary-dark">
                                                    Available for Remote Work Worldwide
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                                            Follow me on social media for updates on my latest projects and insights:
                                        </p>
                                        <div className="flex space-x-4">
                                            <a href="#" className="text-2xl text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="#" className="text-2xl text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                                                <i className="fab fa-medium"></i>
                                            </a>
                                            <a href="#" className="text-2xl text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                                                <i className="fab fa-dev"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        };

export default Contact;
