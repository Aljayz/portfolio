import type { Metadata } from 'next';
import { Fira_Code, Share_Tech_Mono } from 'next/font/google';
import './globals.css';

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const firaCode = Fira_Code({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aljayz | Portfolio',
  description: 'Exploring AI • Cloud • Web • Mobile • Cybersecurity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${shareTechMono.variable} ${firaCode.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}