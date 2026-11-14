import type { ReactNode } from 'react';
import PageShell from './PageShell';
import { legal } from '@/lib/legal';

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <PageShell cta={false}>
      <div className="section">
        <article className="wrap legal">
          <h1 className="display display--page">{title}</h1>
          <p className="legal__date">Última actualización: {legal.actualizado}</p>
          {children}
        </article>
      </div>
    </PageShell>
  );
}
