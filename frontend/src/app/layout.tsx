import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
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
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.svg',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const nonce = headersList.get('x-nonce') || undefined;

  return (
    <html lang="vi" suppressHydrationWarning className={`${jetbrainsMono.variable} ${ibmPlexSans.variable}`}>
      <head>
        <script
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var s = localStorage.getItem('nguyenkhang_portfolio_theme');
                var p = window.matchMedia('(prefers-color-scheme: light)').matches;
                var t = (s === 'light' || s === 'dark') ? s : (p ? 'light' : 'dark');
                document.documentElement.setAttribute('data-theme', t);
                document.documentElement.classList.add(t);
                document.documentElement.style.colorScheme = t;
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
