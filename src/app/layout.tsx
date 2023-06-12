import type { ReactNode } from 'react';
import './globals.scss';
import Header from '@/components/header';

export const metadata = {
  title: {
    template: '%s - Sopars de duro',
    default: 'Sopars de duro',
  },
  description: 'Menús sibarítics per a totes les butxaques',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ca">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
