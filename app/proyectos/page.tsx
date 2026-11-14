import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Showcase from '@/components/Showcase';
import { projects } from '@/lib/content';
import { pageMeta } from '@/lib/seo';

const title = 'Proyectos · liaz';
const description = 'Kalos Feria: tienda online con panel de administración propio, diseñada y desarrollada por liaz.';

export const metadata: Metadata = pageMeta('/proyectos', title, description);

export default function ProyectosPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <div className="wrap">
          <div className="page-hero__intro">
            <h1 className="display display--page">Diseños con identidad propia.</h1>
            <p className="lead">Cada web nace de un negocio distinto. Así se ve por dentro un proyecto en el que estoy trabajando.</p>
          </div>
        </div>
      </section>
      <section className="section section--papel">
        {projects.map((p) => (
          <article key={p.id} className="wrap case">
            <div className="case__stage">
              <Showcase
                name={p.name}
                screens={(p.showcase ?? []).map((s) => ({ label: s.label, desktop: s.desktop || undefined, mobile: s.mobile || undefined }))}
              />
            </div>
            <div className="case__info">
              <p className="status">Proyecto real{p.status ? `, ${p.status.toLowerCase()}` : ''}</p>
              <h2 className="h2">{p.name}</h2>
              <p className="small">{p.type}</p>
              <p>{p.text}</p>
            </div>
            <div className="case__list">
              <h3 className="h4">Qué incluye</h3>
              <ul className="rows rows--two small">
                {p.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
