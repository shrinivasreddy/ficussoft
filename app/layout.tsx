import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import ConsentBanner from './ConsentBanner';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const productionOrigin = new URL('https://ficussoft-product-engineering.p-shrinivas-reddy.chatgpt.site');

export const metadata: Metadata = {
  metadataBase: productionOrigin,
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
    images: [{ url: '/hero-ficussoft-v2.png', width: 1536, height: 1024, alt: 'FicusSoft engineering ideas into impact' }],
    type: 'website',
  },
  robots: { index: true, follow: true },
  twitter: {
    card: 'summary_large_image',
    title: 'FicusSoft — Ideas engineered into impact',
    description: 'Independent engineering for AI, digital products, and the connected world.',
    images: ['/hero-ficussoft-v2.png'],
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
        <ConsentBanner />
      </body>
    </html>
  );
}
