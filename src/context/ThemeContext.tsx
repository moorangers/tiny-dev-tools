'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import type { PaletteMode } from '@mui/material';

type ThemeContextType = {
  mode: PaletteMode;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export function ThemeProviderContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<PaletteMode | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('theme-mode') as PaletteMode | null;
    if (stored) {
      setMode(stored);
    } else {
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    setMode((prev) => {
      const newMode = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme-mode', newMode);
      return newMode;
    });
  };

  // 🛑 ป้องกัน render จนกว่าจะรู้ mode (null)
  if (!mode) return null;

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
