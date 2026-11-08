import type { Metadata } from 'next';
import { site } from './config';

/** Título, descripción, URL canónica e imagen para compartir de cada página. */
export function pageMeta(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'es_AR',
      siteName: site.name,
      url: path,
      title,
      description,
      images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'liaz · diseño web' }],
    },
  };
}
