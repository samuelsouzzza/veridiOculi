import type { Metadata } from 'next';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { GlobalContextProvider } from '@/global/GlobalContext';

export const metadata: Metadata = {
  title: 'Veridi Oculi',
  description: 'Análises de imageamento aéreo',
  icons: '/logo.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <GlobalContextProvider>
        <body>{children}</body>
      </GlobalContextProvider>
    </html>
  );
}
