import type { Metadata } from 'next';
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const display = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://widmisonfrancois.com'),
  title:
    'Widmison Francois | Full-Stack Web Developer, Digital Marketer & Founder of Royol Technology',
  description:
    'Official portfolio of Widmison Francois — Florida-based Full-Stack Web Developer, AI Digital Marketing Strategist, creator of Mex509, and Founder of Royol Technology (1M+ cross-platform followers).',
  alternates: {
    canonical: 'https://widmisonfrancois.com',
  },
  openGraph: {
    type: 'profile',
    url: 'https://widmisonfrancois.com',
    title:
      'Widmison Francois | Full-Stack Web Developer, Digital Marketer & Founder of Royol Technology',
    description:
      'Official portfolio of Widmison Francois — Florida-based Full-Stack Web Developer, AI Digital Marketing Strategist, creator of Mex509, and Founder of Royol Technology (1M+ cross-platform followers).',
    siteName: 'Widmison Francois',
    firstName: 'Widmison',
    lastName: 'Francois',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Widmison Francois — Full-Stack Web Developer & AI Growth Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Widmison Francois | Full-Stack Web Developer, Digital Marketer & Founder of Royol Technology',
    description:
      'Official portfolio of Widmison Francois — Full-Stack Web Developer, AI Digital Marketing Strategist, and Founder of Royol Technology (1M+ followers).',
    images: ['/images/og-cover.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'Widmison Francois',
    'Full-Stack Web Developer',
    'Royol Technology',
    'Mex509',
    'AI Digital Marketing',
    'Port St. Lucie',
    'Next.js',
    'Python',
    'FastAPI',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
