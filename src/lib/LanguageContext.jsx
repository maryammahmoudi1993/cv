import { createContext, useContext, useEffect, useState } from 'react';

// Lightweight bilingual (EN / Traditional Chinese) context.
// Preference resolution order: localStorage > browser language > 'en'.

const STORAGE_KEY = 'site-lang';
const LanguageContext = createContext({ lang: 'en', setLang: () => {} });

function detectInitialLang() {
  if (typeof window === 'undefined') return 'en';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'zh') return stored;
  } catch {
    // localStorage unavailable (private mode, SSR, etc.) — fall through to browser detection.
  }
  const browserLang = window.navigator?.language || '';
  return browserLang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  }, [lang]);

  const setLang = (next) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore write failures (private mode / storage disabled)
    }
  };

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
