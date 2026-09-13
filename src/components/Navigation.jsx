import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeProvider.jsx';

const Navigation = () => {
            const { isDark, setIsDark } = useContext(ThemeContext);
            const [isMenuOpen, setIsMenuOpen] = useState(false);
            const [activeSection, setActiveSection] = useState('hero');

            useEffect(() => {
                const handleScroll = () => {
                    const sections = ['hero', 'about', 'research', 'projects', 'skills', 'experience', 'education', 'blog', 'contact'];
                    const current = sections.find(section => {
                        const element = document.getElementById(section);
                        if (element) {
                            const rect = element.getBoundingClientRect();
                            return rect.top <= 100 && rect.bottom >= 100;
                        }
                        return false;
                    });
                    if (current) setActiveSection(current);
                };

                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
            }, []);

            const navItems = [
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'research', label: 'Research' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'experience', label: 'Experience' },
                { id: 'education', label: 'Education' },
                { id: 'blog', label: 'Blog' },
                { id: 'contact', label: 'Contact' }
            ];

            return (
                <nav aria-label="Primary navigation" className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <a href="#hero" className="text-2xl font-bold text-primary-light dark:text-primary-dark">
                                Maryam Mahmoudi
                            </a>
                            
                            {/* Desktop Navigation */}
                            <div className="hidden md:flex space-x-8">
                                {navItems.map(item => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                            activeSection === item.id
                                                ? 'text-primary-light dark:text-primary-dark bg-blue-50 dark:bg-blue-900/20'
                                                : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark'
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>

                            <div className="flex items-center space-x-4">
                                {/* Theme Toggle */}
                                <button
                                    type="button"
                                    onClick={() => setIsDark(!isDark)}
                                    aria-label={isDark ? 'Use light theme' : 'Use dark theme'}
                                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                >
                                    {isDark ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                                </button>

                                {/* Mobile Menu Button */}
                                <button
                                    type="button"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    aria-expanded={isMenuOpen}
                                    aria-controls="mobile-navigation"
                                    aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                                    className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                                >
                                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                                </button>
                            </div>
                        </div>

                        {/* Mobile Navigation */}
                        {isMenuOpen && (
                            <div id="mobile-navigation" className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
                                {navItems.map(item => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block w-full text-left px-3 py-2 text-base font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </nav>
            );
        };

export default Navigation;
