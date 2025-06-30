import React from 'react';
import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Memora – All Company Knowledge. One Interface.',
  description: 'Memora ingests and organizes all your company knowledge, then surfaces context-rich answers in seconds.',
  openGraph: {
    title: 'Memora – All Company Knowledge. One Interface.',
    description: 'Memora: the AI assistant that knows everything about your business. Ingest and organize internal knowledge, then get instant, context-rich answers.',
    url: 'https://memora.example.com',
    siteName: 'Memora',
    locale: 'en_US',
    type: 'website',
    // images: [ { url: '/og-image.png' } ] // Add an Open Graph image in public/ and uncomment this line if available
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="bg-neutral-light text-neutral-dark dark:bg-neutral-dark dark:text-neutral-light font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
