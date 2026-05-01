import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'ASM Photography | Premium Photography Portfolio',
  description:
    'Premium wedding, newborn, maternity, fashion, commercial, and drone photography in Namakkal, Tamil Nadu. 24+ years of experience.',
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#0f0f0f',
  openGraph: {
    title: 'ASM Photography',
    description: 'Premium photography portfolio with mobile-first booking CTAs and refined gallery experiences.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%230f0f0f'/%3E%3Cpath d='M20 44V20h8.5c6.7 0 11.5 4.6 11.5 12s-4.8 12-11.5 12H20Zm7-6h1.8c4.1 0 6.4-2.6 6.4-6s-2.3-6-6.4-6H27v12Z' fill='%23d4af37'/%3E%3C/svg%3E"
          rel="icon"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} overflow-x-hidden font-body selection:bg-gold selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
