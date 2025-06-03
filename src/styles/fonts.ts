import { Noto_Sans } from "next/font/google";

export const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // กำหนดน้ำหนักที่ใช้
  display: 'swap',
  variable: '--font-noto-sans', // ตัวแปรสำหรับ CSS
});
