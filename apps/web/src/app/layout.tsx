import { AuthProvider } from '@cpd/shared';
import clsx from 'clsx';
import type { Metadata } from 'next';
import '@cpd/style/src/scss/app.scss';
import { Hero } from '@cpd/ui';
import { Open_Sans } from 'next/font/google';
import { cookies } from 'next/headers';
import TanstackProvider from '../providers/TanstackProvider';
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
  const heroClasses = clsx('sticky', styles.hero);

  return (
    <html
      lang='fr'
      suppressHydrationWarning
    >
      <body className={bodyClasses}>
        <TanstackProvider>
          <AuthProvider loggedInValue={isLoggedIn}>
            <Hero
              className={heroClasses}
              left={<Logo />}
              right={<AuthMenu />}
            ></Hero>
            <main className='py-2'>{children}</main>
          </AuthProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
