import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';

export default function TinyToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopMenu />
      <main style={{ minHeight: 'calc(100vh - 120px)' }}>{children}</main>
      <Footer />
    </>
  );
}
