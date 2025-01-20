import type { Metadata } from 'next';
import '@cpd/style/lib/scss/app.scss';
import { Hero } from '@cpd/ui';
import { Open_Sans } from 'next/font/google';
import Logo from '../components/logo/Logo';

const fontFamily = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Compared',
  description: 'Créez des comparatifs selon vos expériences',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
      <body className={fontFamily.className}>
        <Hero left={<Logo />}></Hero>
        <main>{children}</main>
      </body>
    </html>
  );
}
