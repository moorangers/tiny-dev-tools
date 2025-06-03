'use client';

import { ThemeProviderContext, useThemeContext } from '@/context/ThemeContext';
import { darkTheme, lightTheme } from '@/themes/theme';
import { ThemeProvider, CssBaseline } from '@mui/material';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProviderContext>
      <InnerTheme>{children}</InnerTheme>
    </ThemeProviderContext>
  );
}

function InnerTheme({ children }: { children: React.ReactNode }) {
  const { mode } = useThemeContext();

  return (
    <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
