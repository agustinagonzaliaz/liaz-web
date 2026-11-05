import Link from 'next/link';
import type { ReactNode } from 'react';
import Footer from './Footer';
import { legal } from '@/lib/legal';

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <header className="header">
        <div className="wrap header__in">
          <Link className="logo" href="/" aria-label="liaz, inicio">liaz</Link>
          <Link className="btn btn--outline btn--sm" href="/">Volver al inicio</Link>
        </div>
      </header>
      <main id="contenido" className="section">
        <article className="wrap legal">
          <p className="eyebrow">información legal</p>
          <h1 className="h2">{title}</h1>
          <p className="legal__date">Última actualización: {legal.actualizado}</p>
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
