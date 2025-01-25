import type { Metadata } from 'next';
import '../styles/globals.scss';
import Layout from '@/components/layout';

export const metadata: Metadata = {
  title: 'Tedooo | Yossi Adler',
  description: 'Test assignment for Tedooo by Yossi Adler',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}
