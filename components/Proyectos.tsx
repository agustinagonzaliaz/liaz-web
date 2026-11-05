import Image from 'next/image';
import Reveal from './Reveal';
import MiniSite from './MiniSite';
import Showcase from './Showcase';
import { projects, type Project } from '@/lib/content';

function Media({ p }: { p: Project }) {
  const screens = (p.showcase ?? []).filter((s) => s.desktop || s.mobile);
  if (screens.length > 0) {
    return <Showcase name={p.name} screens={screens.map((s) => ({ label: s.label, desktop: s.desktop || undefined, mobile: s.mobile || undefined }))} />;
  }
  if (p.images.desktop) {
    return (
      <div className="project__media">
        <Image className="project__shot" src={p.images.desktop} alt={`Captura de la web de ${p.name}`} width={1440} height={900} sizes="(max-width: 900px) 100vw, 60vw" />
        {p.images.mobile && (
          <Image className="project__phone" src={p.images.mobile} alt={`${p.name} en el celular`} width={390} height={844} sizes="180px" />
        )}
      </div>
    );
  }
  if (p.mock) {
    return (
      <div className="project__media project__media--mock">
        <MiniSite variant={p.mock === 'pro' ? 'pro' : 'tienda'} label={`Boceto de ${p.type}`} accent={p.mock === 'pro' ? 'var(--lila)' : 'var(--durazno)'} />
      </div>
    );
  }
  return (
    <div className="project__media project__media--pending">
      <span>Captura de {p.name}</span>
    </div>
  );
}

function Info({ p }: { p: Project }) {
  return (
    <div className="project__info">
      <div className="project__meta">
        <span className={`badge badge--${p.kind}`}>{p.kind === 'real' ? 'Proyecto real' : 'Concepto'}</span>
        {p.status && <span className="badge badge--status">{p.status}</span>}
      </div>
      <p className="project__type">{p.type}</p>
      <h3 className="h3 h3--xl">{p.name}</h3>
      {p.text && <p>{p.text}</p>}
      {p.features.length > 0 && (
        <ul className="project__features">
          {p.features.map((f) => <li key={f}>{f}</li>)}
        </ul>
      )}
      {p.url && <a className="link link--arrow" href={p.url} target="_blank" rel="noopener noreferrer">Ver la web</a>}
    </div>
  );
}

export default function Proyectos() {
  return (
    <section id="proyectos" className="section">
      <div className="wrap stack">
        <Reveal className="head head--split">
          <div className="head">
            <p className="eyebrow">proyectos</p>
            <h2 className="h2">Diseños con identidad propia.</h2>
          </div>
          <p className="head__intro">Cada web nace de un negocio distinto. Así se ve por dentro un proyecto en el que estamos trabajando.</p>
        </Reveal>

        {projects.map((p, i) => (
          <Reveal key={p.id} className={`case${i % 2 ? ' case--flip' : ''}`}>
            <Media p={p} />
            <Info p={p} />
          </Reveal>
        ))}

        <Reveal className="next">
          <span className="next__a" aria-hidden="true">a</span>
          <div className="next__text">
            <h3 className="h3 h3--lg">¿Tu negocio es el próximo?</h3>
            <p>Estamos sumando nuevos proyectos. Contanos tu idea y la diseñamos a tu medida.</p>
          </div>
          <a className="btn btn--dark" href="#contacto">Quiero mi web</a>
        </Reveal>
      </div>
    </section>
  );
}
