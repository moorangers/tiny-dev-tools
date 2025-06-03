'use client';

import { Box, Container, Typography, useTheme } from '@mui/material';

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        py: 2,
        mt: 'auto',
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${
          theme.palette.mode === 'dark' ? '#2e3748' : '#e5e7eb'
        }`,
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          align="center"
          fontWeight="bold"
          color="text.secondary"
        >
          Powered by Rangers Crew
        </Typography>
      </Container>
    </Box>
  );
}
