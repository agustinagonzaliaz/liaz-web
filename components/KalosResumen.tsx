import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';
import { projects } from '@/lib/content';

export default function KalosResumen() {
  const p = projects[0];
  return (
    <section id="proyectos" className="section section--celeste">
      <div className="wrap kalos">
        <Reveal className="kalos__phone">
          <div className="phone">
            <div className="phone__screen">
              <Image src="/proyectos/kalos-inicio-cel.webp" alt={`${p.name} en el celular`} fill sizes="260px" className="phone__img" />
            </div>
          </div>
        </Reveal>
        <Reveal className="kalos__text" delay={100}>
          <div className="project__meta">
            <span className="badge badge--real">Proyecto real</span>
            {p.status && <span className="badge badge--status">{p.status}</span>}
          </div>
          <h2 className="h2">{p.name}</h2>
          <p className="lead">{p.summary}</p>
          <Link className="btn btn--dark" href="/proyectos">Ver el proyecto completo</Link>
        </Reveal>
      </div>
    </section>
  );
}
