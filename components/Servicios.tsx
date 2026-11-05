import Image from 'next/image';
import Reveal from './Reveal';
import { services } from '@/lib/content';
import { waLink } from '@/lib/config';

/* Webs de ejemplo diseñadas por liaz para mostrar cada servicio (marcas ficticias). */
const examples: Record<string, { desktop: string; mobile: string; brand: string }> = {
  tienda: { desktop: '/ejemplos/tienda.webp', mobile: '/ejemplos/tienda-cel.webp', brand: 'Mora accesorios' },
  pro: { desktop: '/ejemplos/profesional.webp', mobile: '/ejemplos/profesional-cel.webp', brand: 'Clara Ruiz, nutrición' },
};

export default function Servicios() {
  return (
    <section id="servicios" className="section">
      <div className="wrap stack">
        <Reveal className="head head--split">
          <div className="head">
            <p className="eyebrow">servicios</p>
            <h2 className="h2">Dos formas de estar en internet.</h2>
          </div>
          <p className="head__intro">Cada proyecto se adapta a tu negocio: partimos de una base y sumamos lo que realmente necesitás.</p>
        </Reveal>
        <div className="services">
          {services.map((s, i) => {
            const ex = examples[s.id];
            return (
              <Reveal as="div" key={s.id} className={`service service--${s.color}`} delay={i * 100}>
                {ex && (
                  <div className="smedia">
                    <span className="smedia__tag">Ejemplo de diseño</span>
                    <div className="smedia__browser">
                      <div className="showcase__bar" aria-hidden="true"><span /><span /><span /></div>
                      <div className="smedia__screen">
                        <Image src={ex.desktop} alt={`Ejemplo de ${s.name} diseñada por liaz para la marca ficticia ${ex.brand}, en computadora`} fill sizes="(max-width: 700px) 85vw, 40vw" className="smedia__img" />
                      </div>
                    </div>
                    <div className="smedia__phone">
                      <div className="smedia__screen">
                        <Image src={ex.mobile} alt={`El mismo ejemplo de ${ex.brand}, en el celular`} fill sizes="130px" className="smedia__img" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="service__body">
                  <p className="eyebrow">{s.forWho}</p>
                  <h3 className="h3 h3--xl">{s.name}</h3>
                  <p>{s.text}</p>
                  <div className="service__lists">
                    <div>
                      <h4 className="service__label">La base</h4>
                      <ul className="ticks">{s.base.map((b) => <li key={b}>{b}</li>)}</ul>
                    </div>
                    <div>
                      <h4 className="service__label">Según tu proyecto</h4>
                      <ul className="ticks ticks--plus">{s.optional.map((o) => <li key={o}>{o}</li>)}</ul>
                    </div>
                  </div>
                  <a className="btn btn--dark" href={waLink(s.wa)} target="_blank" rel="noopener noreferrer">{s.cta}</a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
