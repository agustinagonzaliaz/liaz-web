import Image from 'next/image';
import Reveal from './Reveal';
import { toBring, type Service } from '@/lib/content';
import { site } from '@/lib/config';

/** Página de detalle de un servicio. */
export default function ServiceDetail({ s }: { s: Service }) {
  const ex = s.example;
  return (
    <>
      <section className="section page-top">
        <div className="wrap sdetail">
          <Reveal className="sdetail__text">
            <p className="eyebrow">{s.forWho}</p>
            <h1 className="h2 h2--xl">{s.name}</h1>
            <p className="lead">{s.text}</p>
            <p className="price price--lg">{site.price}</p>
          </Reveal>
          <Reveal className={`service service--${s.color} sdetail__media`} delay={100}>
            <div className="smedia">
              <span className="smedia__tag">Ejemplo de diseño</span>
              <div className="smedia__browser">
                <div className="showcase__bar" aria-hidden="true"><span /><span /><span /></div>
                <div className="smedia__screen">
                  <Image src={ex.desktop} alt={`Ejemplo de ${s.name} para la marca ficticia ${ex.brand}, en computadora`} fill sizes="(max-width: 1000px) 90vw, 50vw" className="smedia__img" priority />
                </div>
              </div>
              <div className="smedia__phone">
                <div className="smedia__screen">
                  <Image src={ex.mobile} alt={`El mismo ejemplo de ${ex.brand}, en el celular`} fill sizes="140px" className="smedia__img" />
                </div>
              </div>
            </div>
            <p className="sdetail__caption">{ex.brand} es una marca ficticia, creada para mostrar este ejemplo.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--white">
        <div className="wrap stack">
          <div className="sdetail__lists">
            <Reveal className="sbox">
              <h2 className="h3 h3--lg">La base</h2>
              <ul className="ticks">{s.base.map((b) => <li key={b}>{b}</li>)}</ul>
            </Reveal>
            <Reveal className="sbox" delay={100}>
              <h2 className="h3 h3--lg">Según tu proyecto</h2>
              <ul className="ticks ticks--plus">{s.optional.map((o) => <li key={o}>{o}</li>)}</ul>
            </Reveal>
          </div>
          <Reveal className="bring">
            <h2 className="h3">Para empezar, solo necesitás tener a mano:</h2>
            <ul className="bring__list">{toBring.map((t) => <li key={t}>{t}</li>)}</ul>
            <p className="bring__note">¿Te falta algo? Lo vemos juntos en la primera charla.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
