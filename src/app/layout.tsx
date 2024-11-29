import type { Metadata } from 'next';
import './globals.scss';
import { ThemeProvider } from '@/components/shared/ThemeProvider/ThemeProvider';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  style: ['italic', 'normal'],
});

export const metadata: Metadata = {
  title: 'Task flow manager',
  description: 'Start to manage your project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} prose antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
