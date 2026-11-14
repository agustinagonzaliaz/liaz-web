import Link from 'next/link';
import DeviceDuo from './DeviceDuo';
import { projects } from '@/lib/content';

export default function KalosResumen() {
  const p = projects[0];
  return (
    <section id="proyectos" className="section section--celeste">
      <div className="wrap feature">
        <div className="feature__text">
          <p className="status">Proyecto real{p.status ? `, ${p.status.toLowerCase()}` : ''}</p>
          <h2 className="display display--page">{p.name}</h2>
          <p className="lead">{p.summary}</p>
          <Link className="btn btn--dark" href="/proyectos">Ver el proyecto completo</Link>
        </div>
        <Link className="feature__media" href="/proyectos" aria-label={`Ver el proyecto ${p.name}`} tabIndex={-1}>
          <DeviceDuo
            tone="none"
            scroll
            desktop="/proyectos/kalos-inicio.webp"
            mobile="/proyectos/kalos-producto-cel.webp"
            altDesktop={`${p.name}: página de inicio, en computadora`}
            altMobile={`${p.name}: ficha de producto, en el celular`}
            sizes="(max-width: 1000px) 90vw, 50vw"
          />
        </Link>
      </div>
    </section>
  );
}
