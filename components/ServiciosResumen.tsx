import Link from 'next/link';
import DeviceDuo from './DeviceDuo';
import { services } from '@/lib/content';
import { site } from '@/lib/config';

export default function ServiciosResumen() {
  return (
    <section id="servicios" className="section">
      <div className="wrap cols">
        <p className="cols__note">Servicios</p>
        <div className="cols__main">
          <h2 className="h2">Dos formas de estar en internet.</h2>
          <div className="offer">
            {services.map((s) => (
              <article key={s.id} className="offer__card">
                <Link className="offer__media" href={s.slug} aria-label={`Ver el detalle de ${s.name}`} tabIndex={-1}>
                  <DeviceDuo
                    scroll
                    tone={s.color}
                    desktop={s.example.desktop}
                    mobile={s.example.mobile}
                    altDesktop={`Ejemplo de ${s.name} para la marca ficticia ${s.example.brand}, en computadora`}
                    altMobile={`El mismo ejemplo de ${s.example.brand}, en el celular`}
                  />
                </Link>
                <p className="caption">Ejemplo de diseño: {s.example.brand}, una marca ficticia.</p>
                <div className="offer__body">
                  <h3 className="h3">{s.name}</h3>
                  <p>{s.summary}</p>
                  <ul className="rows small">{s.summaryPoints.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                  <div className="offer__foot">
                    <p className="price">{site.price}</p>
                    <Link className="btn btn--outline btn--sm" href={s.slug}>Ver detalle<span className="sr-only"> de {s.name}</span></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
