'use client';

import { ThemeProviderContext, useThemeContext } from '@/context/ThemeContext';
import { darkTheme, lightTheme } from '@/themes/theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProviderContext>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        autoHideDuration={2000}
      >
        <InnerTheme>{children}</InnerTheme>
      </SnackbarProvider>
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
