'use client';

import { Container, Typography, useTheme, Divider } from '@mui/material';

export default function AboutPage() {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ color: theme.palette.text.primary }}
      >
        เกี่ยวกับ Tiny Dev Tools
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography
        variant="body1"
        sx={{ color: theme.palette.text.secondary, mb: 3 }}
      >
        Tiny Dev Tools คือชุดเครื่องมือเล็ก ๆ ที่ออกแบบมาเพื่อช่วยเหลือ
        Developer และทีมงานในการพัฒนา ตรวจสอบ และแปลงข้อมูลต่าง ๆ
        ในชีวิตประจำวัน ไม่ว่าจะเป็นการนับตัวอักษร, การเข้ารหัสข้อความ,
        หรือเครื่องมือช่วยเปรียบเทียบไฟล์
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: theme.palette.text.secondary, mb: 3 }}
      >
        จุดเด่นของ Tiny Dev Tools คือความเรียบง่าย ความเร็ว
        และการรองรับธีมสว่าง/มืด เพื่อให้เข้ากับทุกการใช้งาน ทั้งบน Desktop และ
        Mobile
      </Typography>

      <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
        โครงการนี้ถูกพัฒนาโดย Rangers Crew ด้วยความตั้งใจให้เป็น Open Utility
        สำหรับนักพัฒนาในองค์กร และสามารถต่อยอดเป็น Web Platform ที่รวบรวม Dev
        Tools ครบวงจรในอนาคตได้
      </Typography>
    </Container>
  );
}
