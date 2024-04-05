import type { Metadata } from 'next';
import '../global/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { GlobalContextProvider } from '@/global/GlobalContext';
import ProvidersNProgress from '../global/NProgress';

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
        <body>
          <ProvidersNProgress>{children}</ProvidersNProgress>
        </body>
      </GlobalContextProvider>
    </html>
  );
}
