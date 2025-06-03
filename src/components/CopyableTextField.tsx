'use client';

import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Tooltip,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';

type Props = {
  label: string;
  value: string;
  onCopy?: () => void;
};

export default function CopyableTextField({ label, value, onCopy }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    onCopy?.();

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        label={label}
        value={value}
        readOnly
        endAdornment={
          <InputAdornment position="end">
            <Tooltip title={copied ? 'Copied!' : 'Copy'} placement="left">
              <IconButton onClick={handleCopy} edge="end" disabled={!value}>
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
          </InputAdornment>
        }
        sx={{ mb: 2 }}
      />
    </FormControl>
  );
}
