import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/shared/ThemeProvider/ThemeProvider';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Roboto } from 'next/font/google';
import './globals.scss';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  style: ['italic', 'normal'],
});

export const metadata: Metadata = {
  title: 'Task flow manager',
  description: 'Start to manage your tasks',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <UserProvider>
        <body className={`${roboto.className} prose antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  );
}
