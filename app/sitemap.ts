import type { MetadataRoute } from 'next';
import { site } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.siteUrl, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.siteUrl}/tienda-online`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.siteUrl}/web-profesional`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.siteUrl}/proyectos`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${site.siteUrl}/privacidad`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${site.siteUrl}/terminos`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${site.siteUrl}/cookies`, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
