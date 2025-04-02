// src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' });

export const metadata: Metadata = {
  title: 'TSP.GOV',
  description: 'ID.me Demo App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="antialiased">
        <Script src="/assets/uswds/js/uswds-init.js" strategy="beforeInteractive" />
        <Script src="/assets/uswds/js/uswds.min.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}
// This layout component sets up the global structure for the application.
