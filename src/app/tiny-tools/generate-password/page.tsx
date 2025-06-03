'use client';

import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  MenuItem,
  Select,
  Typography,
  LinearProgress,
  Divider,
  Grid,
  OutlinedInput,
} from '@mui/material';
import { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton, InputAdornment } from '@mui/material';
import { useSnackbar } from 'notistack';
import CopyableTextField from '@/components/CopyableTextField';

export default function GeneratePasswordPage() {
  const [length, setLength] = useState(16);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(true);
  const [includeOtherSymbol, setIncludeOtherSymbol] = useState(false);
  const [excludeSimilar, setExcludeSimilar] = useState(false);
  const [excludeDuplicate, setExcludeDuplicate] = useState(false);
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

  const generate = () => {
    let charset = '';
    const similarChars = /[iIl1oO0]/g;

    if (includeNumber) charset += '0123456789';
    if (includeUpper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLower) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeSymbol) charset += '!@#$%^&*()+';
    if (excludeSimilar) charset = charset.replace(similarChars, '');
    // if (includeOtherSymbol) charset += '~`[];?,/';

    let result = '';
    const used = new Set();

    for (let i = 0; i < length; i++) {
      let ch;
      let attempts = 0;
      do {
        ch = charset.charAt(Math.floor(Math.random() * charset.length));
        attempts++;
      } while (excludeDuplicate && used.has(ch) && attempts < 10);

      result += ch;
      used.add(ch);
    }
    setPassword(result);
    updateStrength(result);
  };

  const updateStrength = (pwd: string) => {
    let score = 0;
    if (/[a-z]/.test(pwd)) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^a-zA-Z0-9]/.test(pwd)) score += 1;
    setScore(score * 25);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={2}>
        🔐 Strong Password Generator
      </Typography>

      <CopyableTextField label="Generated Password" value={password} />

      <LinearProgress
        variant="determinate"
        value={score}
        color={
          score === 0
            ? 'inherit'
            : score < 50
            ? 'error'
            : score < 75
            ? 'warning'
            : 'success'
        }
        sx={{ height: 8, borderRadius: 5, mb: 1 }}
      />

      <Typography
        textAlign="right"
        fontSize="0.85rem"
        mb={2}
        color={
          score === 0
            ? 'text.disabled'
            : score < 50
            ? 'error.main'
            : score < 75
            ? 'warning.main'
            : 'success.main'
        }
      >
        Strength:{' '}
        {score === 0
          ? '-'
          : score < 50
          ? 'Weak'
          : score < 75
          ? 'Medium'
          : 'Strong'}
      </Typography>

      <Divider sx={{ my: 2 }} />
      <Button variant="contained" fullWidth onClick={generate}>
        Generate Password
      </Button>
      <Divider sx={{ my: 2 }} />

      <Typography fontWeight="bold" gutterBottom>
        Password Length
      </Typography>
      <Select
        fullWidth
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        sx={{ mb: 2 }}
      >
        {[8, 12, 16, 20, 24, 30].map((val) => (
          <MenuItem key={val} value={val}>
            {val} characters
          </MenuItem>
        ))}
      </Select>

      <Typography fontWeight="bold" gutterBottom align="center">
        Character Options
      </Typography>

      <Grid
        container
        spacing={2}
        display="flex"
        justifyContent={'space-between'}
        mb={2}
      >
        <Grid display="grid" gap={1}>
          <FormControlLabel
            control={
              <Checkbox
                checked={includeUpper}
                onChange={(e) => setIncludeUpper(e.target.checked)}
              />
            }
            label="Include Uppercase (A-Z)"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={includeLower}
                onChange={(e) => setIncludeLower(e.target.checked)}
              />
            }
            label="Include Lowercase (a-z)"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={includeNumber}
                onChange={(e) => setIncludeNumber(e.target.checked)}
              />
            }
            label="Include Numbers (0-9)"
          />
        </Grid>

        <Grid display="grid" gap={1}>
          <FormControlLabel
            control={
              <Checkbox
                checked={includeSymbol}
                onChange={(e) => setIncludeSymbol(e.target.checked)}
              />
            }
            label="Include Basic Symbols (!@#$%^)"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={excludeSimilar}
                onChange={(e) => setExcludeSimilar(e.target.checked)}
              />
            }
            label="Exclude Similar Characters (iIl1oO0)"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={excludeDuplicate}
                onChange={(e) => setExcludeDuplicate(e.target.checked)}
              />
            }
            label="Exclude Duplicate Characters"
          />
          {/* <FormControlLabel
            control={
              <Checkbox
                checked={includeOtherSymbol}
                onChange={(e) => setIncludeOtherSymbol(e.target.checked)}
              />
            }
            label="Include Extra Symbols (~`[];,?)"
          /> */}
        </Grid>
      </Grid>
    </Container>
  );
}
