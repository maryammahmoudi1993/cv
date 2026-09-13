const Footer = () => {
            const scrollToTop = () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };

            return (
                <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Maryam Mahmoudi</h3>
                                <p className="text-gray-300 mb-4">
                                    AI-Powered Backend Developer & Data Scientist passionate about creating 
                                    intelligent solutions that make a difference.
                                </p>
                                <div className="flex space-x-4">
                                    <a href="https://www.linkedin.com/in/maryam-mahmoudi-8882857b/" className="text-gray-300 hover:text-white transition-colors">
                                        <i className="fab fa-linkedin text-xl"></i>
                                    </a>
                                    <a href="https://github.com/maryammahmoudi1993" className="text-gray-300 hover:text-white transition-colors">
                                        <i className="fab fa-github text-xl"></i>
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                        <i className="fab fa-twitter text-xl"></i>
                                    </a>
                                    <a href="mailto:mahmoodi.maryam1993@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                                        <i className="fas fa-envelope text-xl"></i>
                                    </a>
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                                <ul className="space-y-2">
                                    <li><button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition-colors">About</button></li>
                                    <li><button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition-colors">Skills</button></li>
                                    <li><button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition-colors">Projects</button></li>
                                    <li><button onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition-colors">Experience</button></li>
                                    <li><button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Specializations</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Machine Learning & AI</li>
                                    <li>• Backend Development</li>
                                    <li>• Data Science & Analytics</li>
                                    <li>• Natural Language Processing</li>
                                    <li>• API Development</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-300 text-sm">
                                © 2024 Maryam Mahmoudi. All rights reserved.
                            </p>
                            <button 
                                onClick={scrollToTop}
                                className="mt-4 md:mt-0 px-4 py-2 bg-primary-light hover:bg-blue-700 rounded-lg transition-colors"
                            >
                                <i className="fas fa-arrow-up mr-2"></i>Back to Top
                            </button>
                        </div>
                    </div>
                </footer>
            );
        };

export default Footer;

