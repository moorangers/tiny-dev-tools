'use client';

import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import { useThemeContext } from '@/context/ThemeContext';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import Brightness5Icon from '@mui/icons-material/Brightness5';

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Box
      onClick={toggleTheme}
      sx={{
        width: 60,
        height: 30,
        borderRadius: 999,
        backgroundColor: mode === 'dark' ? '#333' : '#ddd',
        display: 'flex',
        alignItems: 'center',
        padding: '4px',
        cursor: 'pointer',
        justifyContent: mode === 'dark' ? 'flex-end' : 'flex-start',
        transition: 'background-color 0.3s ease',
      }}
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        style={{
          width: 22,
          height: 22,
          borderRadius: '50%',
          backgroundColor: mode === 'dark' ? '#333' : '#ddd',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.9rem',
        }}
      >
        {mode === 'dark' ? (
          <BedtimeIcon fontSize='small' />
        ) : (
          <Brightness5Icon fontSize='small' />
        )}
      </motion.div>
    </Box>
  );
}
