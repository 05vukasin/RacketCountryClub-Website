import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'sr' | 'en';

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'sr',
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('sr');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'sr' ? 'en' : 'sr'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
