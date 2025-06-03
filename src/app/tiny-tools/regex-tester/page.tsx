'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Typography,
  Paper,
  Stack,
  Divider,
} from '@mui/material';

export default function RegexTesterPage() {
  const [pattern, setPattern] = useState('');
  const [text, setText] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  const [matches, setMatches] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const regex = new RegExp(pattern, 'g');
      const result = text.replace(regex, (match) => `<mark>${match}</mark>`);
      setHighlightedText(result);

      const matchList = [...text.matchAll(regex)].map((m) => m[0]);
      setMatches(matchList);

      setError(null);
    } catch (err: any) {
      setError(err.message);
      setHighlightedText('');
      setMatches([]);
    }
  }, [pattern, text]);

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', py: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Regex Tester
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Enter a regular expression and a text below. Matching patterns will be
        highlighted and listed.
      </Typography>

      <Stack spacing={3} mt={3}>
        <TextField
          label="Regular Expression"
          variant="outlined"
          fullWidth
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          placeholder="e.g. (\\w+)"
        />
        <TextField
          label="Test Text"
          variant="outlined"
          fullWidth
          multiline
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Divider />
        <Typography variant="subtitle1" fontWeight="bold">
          Highlighted Result:
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            p: 2,
            minHeight: 120,
            whiteSpace: 'pre-wrap',
            fontFamily: 'monospace',
          }}
        >
          <span
            dangerouslySetInnerHTML={{
              __html: highlightedText || '(No matches)',
            }}
          />
        </Paper>

        {matches.length > 0 && (
          <>
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle1" fontWeight="bold">
              Matched List ({matches.length}):
            </Typography>
            <Stack spacing={1}>
              {matches.map((m, idx) => (
                <Paper
                  key={idx}
                  variant="outlined"
                  sx={{
                    p: 1.2,
                    fontFamily: 'monospace',
                    bgcolor: 'background.paper',
                  }}
                >
                  #{idx + 1}: <strong>{m}</strong>
                </Paper>
              ))}
            </Stack>
          </>
        )}

        {error && (
          <Typography color="error" variant="body2">
            Regex Error: {error}
          </Typography>
        )}
      </Stack>
    </Box>
  );
}
