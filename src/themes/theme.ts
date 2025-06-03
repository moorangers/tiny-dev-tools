import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb', // Blue-600
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f59e0b', // Amber-500
    },
    background: {
      default: '#f9fafb', // Very light gray
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b', // Slate-800
      secondary: '#475569', // Slate-600
    },
    error: {
      main: '#ef4444', // Red-500
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: `'Inter', 'Noto Sans Thai', sans-serif`,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6', // Blue-500
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#facc15', // Yellow-400
    },
    background: {
      default: '#0f172a', // Slate-900
      paper: '#1e293b', // Slate-800
    },
    text: {
      primary: '#f1f5f9', // Slate-100
      secondary: '#cbd5e1', // Slate-300
    },
    error: {
      main: '#f87171', // Red-400
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: `'Inter', 'Noto Sans Thai', sans-serif`,
  },
});
