'use client';

import Footer from '@/components/Footer';
import TopMenu from '@/components/TopMenu';
import { Box, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <TopMenu />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - 120px)" // กัน footer บัง
        textAlign="center"
        flexDirection="column"
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            Welcome to Tiny Dev Tools
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            gutterBottom
            sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}
          >
            Small developer tools to make your work easier.
          </Typography>

          <Button
            component={Link}
            href="/tiny-tools"
            variant="contained"
            size="large"
          >
            Explore Tools
          </Button>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
