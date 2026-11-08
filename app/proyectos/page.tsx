import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Reveal from '@/components/Reveal';
import Showcase from '@/components/Showcase';
import { projects } from '@/lib/content';
import { pageMeta } from '@/lib/seo';

const title = 'Proyectos · liaz';
const description = 'Kalos Feria: tienda online con panel de administración propio, diseñada y desarrollada por liaz.';

export const metadata: Metadata = pageMeta('/proyectos', title, description);

export default function ProyectosPage() {
  return (
    <PageShell>
      <section className="section page-top">
        <div className="wrap stack">
          <Reveal className="head">
            <p className="eyebrow">proyectos</p>
            <h1 className="h2 h2--xl">Diseños con identidad propia.</h1>
            <p className="head__intro">Cada web nace de un negocio distinto. Así se ve por dentro un proyecto en el que estoy trabajando.</p>
          </Reveal>
          {projects.map((p) => (
            <Reveal key={p.id} className="case">
              <Showcase
                name={p.name}
                screens={(p.showcase ?? []).map((s) => ({ label: s.label, desktop: s.desktop || undefined, mobile: s.mobile || undefined }))}
              />
              <div className="project__info">
                <div className="project__meta">
                  <span className="badge badge--real">Proyecto real</span>
                  {p.status && <span className="badge badge--status">{p.status}</span>}
                </div>
                <p className="project__type">{p.type}</p>
                <h2 className="h3 h3--xl">{p.name}</h2>
                <p>{p.text}</p>
                <p className="features__label">Qué incluye</p>
                <ul className="project__features">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
