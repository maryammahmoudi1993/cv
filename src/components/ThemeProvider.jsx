import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
            const [isDark, setIsDark] = useState(false);

            useEffect(() => {
                const saved = localStorage.getItem('theme');
                setIsDark(saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
            }, []);

            useEffect(() => {
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                if (isDark) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            }, [isDark]);

            return (
                <ThemeContext.Provider value={{ isDark, setIsDark }}>
                    {children}
                </ThemeContext.Provider>
            );
        };

export default ThemeProvider;
