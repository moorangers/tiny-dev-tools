import { Container, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        🧰 Welcome to Tiny Dev Tools
      </Typography>
      <Typography>เลือก tool จากเมนูเพื่อเริ่มใช้งาน</Typography>
    </Container>
  );
}
