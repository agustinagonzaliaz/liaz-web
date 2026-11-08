import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import ServiceDetail from '@/components/ServiceDetail';
import { services } from '@/lib/content';
import { pageMeta } from '@/lib/seo';

const s = services.find((x) => x.id === 'tienda')!;

export const metadata: Metadata = pageMeta(s.slug, s.seo.title, s.seo.description);

export default function Page() {
  return (
    <PageShell message={s.wa}>
      <ServiceDetail s={s} />
    </PageShell>
  );
}
