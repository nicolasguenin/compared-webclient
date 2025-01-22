import { AuthProvider } from '@cpd/features/lib/auth/contexts/AuthProvider';
import clsx from 'clsx';
import type { Metadata } from 'next';
import '@cpd/style/lib/scss/app.scss';
import { Hero } from '@cpd/ui';
import { Open_Sans } from 'next/font/google';
import { cookies } from 'next/headers';
import styles from './layout.module.scss';
import Logo from '../components/logo/Logo';
import AuthMenu from '../components/navigation/AuthMenu';

const fontFamily = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Compared',
  description: 'Créez des comparatifs selon vos expériences',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const isLoggedIn = !!cookieStore.get('authToken')?.value;

  const bodyClasses = clsx(fontFamily.className, styles.body);

  return (
    <html
      lang='fr'
      suppressHydrationWarning
    >
      <body className={bodyClasses}>
        <AuthProvider loggedInValue={isLoggedIn}>
          <Hero
            left={<Logo />}
            right={<AuthMenu />}
          ></Hero>
          <main className='py-2'>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
