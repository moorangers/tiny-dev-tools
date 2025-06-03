import { Metadata } from 'next';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import ThemeRegistry from '../providers/providers';
import { notoSans } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'Tiny Dev Tools',
  description: 'A collection of small developer tools',
  creator: 'MooRanger',
  icons: '',
  manifest: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoSans.variable}>
      <body>
        <ThemeRegistry>
          <TopMenu />
          <main style={{ minHeight: 'calc(100vh - 120px)' }}>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
