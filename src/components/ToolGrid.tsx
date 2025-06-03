'use client';

import ToolCard from './ToolCard';
import { Box } from '@mui/material';
import PasswordIcon from '@mui/icons-material/Password';

type Tool = {
  id: number;
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
};

const tools: Tool[] = [
  // {
  //   id: 1,
  //   title: 'RegEx Tester',
  //   description: 'Test pattern validation',
  //   href: 'tiny-tools/regex-tester',
  //   icon: <Code fontSize="small" />,
  // },
  {
    id: 2,
    title: 'Strong Password',
    description: 'Generate password online',
    href: 'tiny-tools/generate-password',
    icon: <PasswordIcon fontSize="small" />,
  },
  // {
  //   id: 3,
  //   title: 'URL Encode',
  //   description: 'Encode text to URL',
  //   href: '/tools/url-encode',
  //   icon: <LinkIcon fontSize="small" />,
  // },
  // {
  //   id: 4,
  //   title: 'JS Formatter',
  //   description: 'Format/Beautify JavaScript',
  //   href: '/tools/js-formatter',
  //   icon: <FormatAlignLeft fontSize="small" />,
  // },
  // {
  //   id: 5,
  //   title: 'JS Formatter',
  //   description: 'Format/Beautify JavaScript',
  //   href: '/tools/js-formatter',
  //   icon: <FormatAlignLeft fontSize="small" />,
  // },
  // {
  //   id: 6,
  //   title: 'JS Formatter',
  //   description: 'Format/Beautify JavaScript',
  //   href: '/tools/js-formatter',
  //   icon: <FormatAlignLeft fontSize="small" />,
  // },
  // {
  //   id: 7,
  //   title: 'JS Formatter',
  //   description: 'Format/Beautify JavaScript',
  //   href: '/tools/js-formatter',
  //   icon: <FormatAlignLeft fontSize="small" />,
  // },
  // 👉 เพิ่ม tools ได้ที่นี่
];

export default function ToolGrid() {
  return (
    <Box
      display="grid"
      gap={3}
      sx={{
        gridTemplateColumns: {
          xs: '1fr', // mobile
          sm: 'repeat(2, 1fr)', // tablet
          lg: 'repeat(4, 1fr)', // desktop
        },
      }}
    >
      {tools.map((tool) => (
        <Box key={tool.href}>
          <ToolCard {...tool} />
        </Box>
      ))}
    </Box>
  );
}
