import type {Metadata} from 'next';
import {Figtree, Inter} from 'next/font/google';
import './globals.css';

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-sans',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Luminous Workspace',
  description: 'Plataforma SaaS de alta performance.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${figtree.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
