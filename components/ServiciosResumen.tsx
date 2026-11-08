import Link from 'next/link';
import Reveal from './Reveal';
import { services } from '@/lib/content';
import { site } from '@/lib/config';

export default function ServiciosResumen() {
  return (
    <section id="servicios" className="section">
      <div className="wrap stack">
        <Reveal className="head">
          <p className="eyebrow">servicios</p>
          <h2 className="h2">Dos formas de estar en internet.</h2>
        </Reveal>
        <div className="services">
          {services.map((s, i) => (
            <Reveal as="div" key={s.id} className={`scard scard--${s.color}`} delay={i * 100}>
              <p className="eyebrow">{s.forWho}</p>
              <h3 className="h3 h3--xl">{s.name}</h3>
              <p>{s.summary}</p>
              <ul className="ticks">{s.summaryPoints.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              <div className="scard__foot">
                <p className="price">{site.price}</p>
                <Link className="btn btn--dark" href={s.slug}>Ver detalle</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
