import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = { title: 'Página no encontrada · liaz', robots: { index: false } };

export default function NotFound() {
  return (
    <PageShell cta={false}>
      <div className="section">
        <div className="wrap lost">
          <h1 className="display display--page">Esta página no existe.</h1>
          <p className="lead">Puede que el enlace esté mal escrito o que la página se haya movido.</p>
          <div className="actions">
            <Link className="btn btn--dark" href="/">Volver al inicio</Link>
            <Link className="btn btn--outline" href="/proyectos">Ver proyectos</Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
