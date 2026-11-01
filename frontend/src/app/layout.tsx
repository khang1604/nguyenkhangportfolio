import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Nguyen Khang | Full Stack Engineer & System Architect',
  description:
    'Modern Developer Portfolio of Nguyen Khang featuring scalable architectures, full-stack applications, and autonomous AI systems.',
  keywords: ['Nguyen Khang', 'Portfolio', 'Full Stack', 'Next.js 15', 'React', '.NET 10', 'AI Agents'],
  authors: [{ name: 'Nguyen Khang' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`dark ${jetbrainsMono.variable} ${ibmPlexSans.variable}`}>
      <body className="bg-black text-slate-100 min-h-screen selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
