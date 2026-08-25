import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FicusSoft | Tomorrow doesn’t wait. Neither do we.',
  description: 'Silicon Valley product engineering, applied AI, computer vision, and embedded systems. Great ideas brought to life in weeks, not years.',
  icons: { icon: 'https://www.ficussoft.com/images/logo.png' },
  openGraph: {
    title: 'FicusSoft | Tomorrow doesn’t wait. Neither do we.',
    description: 'Silicon Valley product engineering, applied AI, and embedded intelligence.',
    images: ['https://www.ficussoft.com/images/logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'FicusSoft | Tomorrow doesn’t wait. Neither do we.',
    description: 'Product engineering, applied AI, and embedded intelligence.',
    images: ['https://www.ficussoft.com/images/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
