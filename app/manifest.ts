import type { MetadataRoute } from 'next';
import { site } from '@/lib/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'liaz · diseño web',
    short_name: site.name,
    description: site.description,
    start_url: '/',
    display: 'browser',
    background_color: '#FAF2E8',
    theme_color: '#FAF2E8',
    icons: [
      { src: '/icon.png', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
