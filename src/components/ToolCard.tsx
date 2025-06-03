import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
};

export default function ToolCard({
  title,
  description,
  href,
  icon,
}: ToolCardProps) {
  const theme = useTheme();

  return (
    <Card elevation={1} sx={{ height: '100%' }}>
      <CardActionArea
        component={Link}
        href={href}
        sx={{
          p: 2,
          height: '100%',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            {icon}
            <Typography variant="subtitle1" fontWeight={600}>
              {title}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
