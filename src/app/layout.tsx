import ThemeRegistry from '@/providers/ThemeRegistry';
import { notoSans } from '@/styles/fonts';

export const metadata = {
  title: 'Tiny Dev Tools',
  description: 'Small dev utilities',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoSans.className}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
