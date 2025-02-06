import { AuthProvider } from '@cpd/shared';
import clsx from 'clsx';
import type { Metadata } from 'next';
import '@cpd/style/src/scss/app.scss';
import { Box, Hero, ToastProvider } from '@cpd/ui';
import { Open_Sans } from 'next/font/google';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import MainMenuContainer from '../features/menu/MainMenuContainer';
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
  children: ReactNode;
}>) {
  const cookieStore = await cookies();
  const isLoggedIn = !!cookieStore.get('authToken')?.value;

  const bodyClasses = clsx(fontFamily.className, styles.body);
  const heroClasses = clsx('sticky', styles.hero);
  const mainClasses = clsx('flex gap-0-5', styles.main);

  return (
    <html
      lang='fr'
      suppressHydrationWarning
    >
      <body className={bodyClasses}>
        <TanstackProvider>
          <ToastProvider>
            <AuthProvider loggedInValue={isLoggedIn}>
              <Hero
                className={heroClasses}
                left={<Logo />}
                right={<AuthMenu />}
              ></Hero>
              <main className={mainClasses}>
                <Box className={styles.sidebar}>
                  <MainMenuContainer />
                </Box>
                <Box
                  className={styles.container}
                  padding={'0-75'}
                  marginRight={'0-75'}
                  grow
                  rounded
                  shadow
                >
                  {children}
                </Box>
              </main>
            </AuthProvider>
          </ToastProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
