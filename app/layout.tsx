import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { site } from '@/lib/config';
import './globals.css';

/* Tipografías del manual de marca, incluidas en el proyecto (licencia SIL Open Font). */
const syne = localFont({
  src: [{ path: './fonts/Syne-Bold.woff2', weight: '700', style: 'normal' }],
  variable: '--font-syne',
  display: 'swap',
});
const dmSans = localFont({
  src: [
    { path: './fonts/DMSans-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/DMSans-Medium.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-dm',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: site.title,
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: '/',
    siteName: site.name,
    title: 'liaz · páginas web con estilo propio',
    description: 'Diseñamos tu tienda online a medida para que vendas más y respondas menos mensajes.',
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = { themeColor: '#B9D9E9' };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  url: site.siteUrl,
  description: 'Estudio creativo de diseño y desarrollo web para emprendimientos, tiendas y profesionales independientes.',
  areaServed: 'AR',
  knowsAbout: ['diseño web', 'tiendas online', 'páginas web para emprendedores'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <a className="skip" href="#contenido">Saltar al contenido</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
