'use client';

import { Box, Typography, Container } from '@mui/material';
import ToolGrid from '@/components/ToolGrid';

export default function TinyToolsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" fontWeight={700}>
          Tiny Dev Tools 🧰
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Small developer tools to make your work easier.
        </Typography>
      </Box>

      <ToolGrid />
    </Container>
  );
}
