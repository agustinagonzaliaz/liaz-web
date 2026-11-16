import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import ServiceDetail from '@/components/ServiceDetail';
import { services } from '@/lib/content';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/config';

const s = services.find((x) => x.id === 'pro')!;

export const metadata: Metadata = pageMeta(s.slug, s.seo.title, s.seo.description);

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.name,
  description: s.seo.description,
  url: `${site.siteUrl}${s.slug}`,
  provider: { '@id': `${site.siteUrl}/#estudio` },
  areaServed: { '@type': 'Country', name: 'Argentina' },
};

export default function Page() {
  return (
    <PageShell message={s.wa}>
      <ServiceDetail s={s} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
    </PageShell>
  );
}
