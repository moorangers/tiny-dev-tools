'use client';

import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Link as MuiLink,
  Stack,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';

export default function TopMenu() {
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      elevation={3}
      color="default"
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${
          theme.palette.mode === 'dark' ? '#2e3748' : '#e5e7eb'
        }`,
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box
            component={Link}
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              cursor: 'pointer',
              color: theme.palette.text.primary,
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            <TerminalRoundedIcon sx={{ fontSize: 60, mr: 1 }} />
            <Typography
              variant="h6"
              component="div"
              fontWeight="bold"
              sx={{ color: 'text.primary' }}
            >
              Tiny Dev Tools
            </Typography>
          </Box>

          {/* Center menu */}
          <Stack direction="row" spacing={4} alignItems="center">
            {[
              { label: 'Home', href: '/' },
              { label: 'Tools', href: '/tiny-tools' },
              // { label: 'About', href: '/about' },
            ].map((item) => (
              <MuiLink
                key={item.href}
                component={Link}
                href={item.href}
                underline="none"
                sx={{
                  position: 'relative',
                  color: theme.palette.text.secondary,
                  fontWeight: 500,
                  px: 1,
                  py: 0.5,
                  transition: 'color 0.3s ease',

                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    left: 0,
                    bottom: -2,
                    backgroundColor: theme.palette.primary.main,
                    transition: 'width 0.3s ease',
                  },

                  '&:hover': {
                    color: theme.palette.primary.main,

                    '&::after': {
                      width: '100%',
                    },
                  },
                }}
              >
                {item.label}
              </MuiLink>
            ))}
            <ThemeToggle />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
