'use client';

import { Box, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        textAlign="center"
        flexDirection="column"
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Welcome to Tiny Dev Tools
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Small developer tools to make your work easier.
        </Typography>
        <Button
          component={Link}
          href="/tiny-tools"
          variant="contained"
          size="large"
          sx={{ mt: 4 }}
        >
          Explore Tools
        </Button>
      </Box>
    </Container>
  );
}
