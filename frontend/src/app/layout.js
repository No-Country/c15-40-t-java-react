import './globals.css';

import Providers from '@/Providers';
import { Header } from '@/components/Header';

import { K2D } from 'next/font/google';
const K2DFont = K2D({
  subsets: ['latin-ext'],
  display: 'swap',
  weight: '400'
});

export const metadata = {
  title: 'Educ.ar',
  description: 'Buscador de escuelas'
};

export default function RootLayout ({ children }) {
  return (
    <html lang="es" className={K2DFont.className}>
      <body className='relative after:shadow-orange-500/40 after:w-40 after:h-40 after:rotate-45 after:shadow-lg after:bg-orange-500 after:rounded-xl after:absolute after:-top-6 after:-left-6' style={
        {
          background:
          'radial-gradient(circle 300px at 25% 25dvh, #c084fc2f 25%, #d8b4fe2f 75%, transparent), radial-gradient(circle 225px at 17.5% 45dvh, #fdba742f 25%, #fdba742f 75%, transparent), radial-gradient(circle 300px at 80% 50dvh, #fdba742f 25%, #fdba742f 75%, transparent)'
        }
      }>
        <Providers>
          <Header />
          <main className='min-h-[calc(100dvh_-_96px)] p-4 max-w-5xl mx-auto'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
