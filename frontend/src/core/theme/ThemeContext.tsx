'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const THEME_STORAGE_KEY = 'nguyenkhang_portfolio_theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const applyThemeToDOM = (t: Theme) => {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', t);
  document.documentElement.classList.remove('dark', 'light');
  document.documentElement.classList.add(t);
  document.documentElement.style.colorScheme = t;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      applyThemeToDOM(saved);
    } else {
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      const initial = prefersLight ? 'light' : 'dark';
      setTheme(initial);
      applyThemeToDOM(initial);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyThemeToDOM(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
