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
  title: 'DOMINIC BLACK | CRM & AI',
  description: 'Máquina completa de aquisição + fechamento de clientes',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${figtree.variable} ${inter.variable} dark`}>
      <body className="antialiased dark:bg-bg-deep dark:text-white">{children}</body>
    </html>
  );
}
