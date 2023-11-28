import './globals.css';

import Providers from '@/Providers';

export const metadata = {
  title: 'Educ.ar',
  description: 'Buscador de escuelas'
};

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
