'use client';
import Header from '@/components/header';
import { usePathname } from 'next/navigation';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const shouldShowHeader =
    pathname !== '/login' && pathname !== '/signup' && pathname !== '/';

  return (
    <html lang="en">
      <body>
        {shouldShowHeader && <Header />}
        {children}
      </body>
    </html>
  );
}
