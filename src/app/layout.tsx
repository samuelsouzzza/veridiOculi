import type { Metadata } from 'next';
import '../global/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { GlobalContextProvider } from '@/global/GlobalContext';
import ProvidersNProgress from '../global/NProgress';

export const metadata: Metadata = {
  title: 'Veridi Oculi',
  description: 'Análises de imageamento aéreo',
  icons: '/assets/logo.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalContextProvider>
      <html lang='pt-br'>
        <body>
          <ProvidersNProgress>{children}</ProvidersNProgress>
        </body>
      </html>
    </GlobalContextProvider>
  );
}
