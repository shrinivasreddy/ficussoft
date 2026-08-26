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
  title: 'FicusSoft — Ideas engineered into impact',
  description: 'An independent Silicon Valley engineering partner for AI, digital products, computer vision, cloud platforms, and connected systems.',
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '512x512' }],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'FicusSoft — Ideas engineered into impact',
    description: 'Independent engineering for AI, digital products, and the connected world.',
    images: ['https://www.ficussoft.com/images/logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'FicusSoft — Ideas engineered into impact',
    description: 'Independent engineering for AI, digital products, and the connected world.',
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
