import DeviceDuo from './DeviceDuo';
import Proceso from './Proceso';
import { toBring, type Service } from '@/lib/content';
import { site } from '@/lib/config';

/** Página de detalle de un servicio. */
export default function ServiceDetail({ s }: { s: Service }) {
  const ex = s.example;
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero__grid">
          <div className="page-hero__text">
            <p className="small">{s.forWho}</p>
            <h1 className="display display--page">{s.name}</h1>
            <p className="lead">{s.text}</p>
            <p className="price">{site.price}</p>
            <a className="btn btn--dark" href="/#contacto">Contame sobre tu negocio</a>
          </div>
          <div className="page-hero__media">
            <DeviceDuo
              tone={s.color}
              priority
              desktop={ex.desktop}
              mobile={ex.mobile}
              altDesktop={`Ejemplo de ${s.name} para la marca ficticia ${ex.brand}, en computadora`}
              altMobile={`El mismo ejemplo de ${ex.brand}, en el celular`}
              sizes="(max-width: 1000px) 90vw, 55vw"
            />
            <p className="caption">Ejemplo de diseño. {ex.brand} es una marca ficticia, creada para mostrarlo.</p>
          </div>
        </div>
      </section>

      <section className="section section--papel">
        <div className="wrap cols">
          <p className="cols__note">Qué incluye</p>
          <div className="cols__main">
            <div className="includes">
              <div>
                <h2 className="h3">La base</h2>
                <ul className="rows">{s.base.map((b) => <li key={b}>{b}</li>)}</ul>
              </div>
              <div>
                <h2 className="h3">Según tu proyecto</h2>
                <ul className="rows rows--plus">{s.optional.map((o) => <li key={o}>{o}</li>)}</ul>
              </div>
            </div>
            <div className="bring">
              <h2 className="h4">Para empezar, solo necesitás tener a mano:</h2>
              <ul className="bring__list">{toBring.map((t) => <li key={t}>{t}</li>)}</ul>
              <p className="small">¿Te falta algo? Lo vemos juntos en la primera charla.</p>
            </div>
          </div>
        </div>
      </section>

      <Proceso />
    </>
  );
}
