import Reveal from './Reveal';

export default function SobreLiaz() {
  return (
    <section id="sobre" className="section section--celeste">
      <div className="wrap about">
        <Reveal className="about__mark">
          <span className="about__a" aria-hidden="true">a</span>
        </Reveal>
        <Reveal className="about__text" delay={100}>
          <p className="eyebrow">quién está detrás</p>
          <h2 className="h2">Un estudio chico, con mirada de autora.</h2>
          <p className="lead">
            Liaz es un estudio creativo independiente. Cada negocio tiene algo que lo hace distinto, y mi trabajo es
            entenderlo y convertirlo en una web que lo represente de verdad.
          </p>
          <p>
            Trabajo de cerca con cada persona: escucho, propongo y ajusto hasta que la web se sienta tuya. Sin
            plantillas, sin intermediarios y con un trato directo de principio a fin.
          </p>
          <p className="about__sign">Agus · liaz</p>
        </Reveal>
      </div>
    </section>
  );
}
