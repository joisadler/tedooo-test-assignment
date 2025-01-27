'use client';
import Header from '@/components/header';
import { usePathname } from 'next/navigation';
import { DM_Sans, Poppins } from 'next/font/google';
import cn from 'classnames';

const dmSans = DM_Sans({ subsets: ['latin-ext'] });
const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

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
      <body className={cn(dmSans, poppins)}>
        {shouldShowHeader && <Header />}
        {children}
      </body>
    </html>
  );
}
