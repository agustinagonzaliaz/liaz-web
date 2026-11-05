import Reveal from './Reveal';
import { steps, toBring } from '@/lib/content';

export default function Proceso() {
  return (
    <section id="proceso" className="section">
      <div className="wrap stack">
        <Reveal className="head">
          <p className="eyebrow">cómo trabajamos</p>
          <h2 className="h2">De la idea a tu web, en tres etapas.</h2>
        </Reveal>
        <ol className="steps">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} className="step" delay={i * 100}>
              <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="h3 h3--lg">{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="bring">
          <h3 className="h3">Para empezar, solo necesitás tener a mano:</h3>
          <ul className="bring__list">{toBring.map((t) => <li key={t}>{t}</li>)}</ul>
          <p className="bring__note">¿Te falta algo? Lo vemos juntos en la primera charla.</p>
        </Reveal>
      </div>
    </section>
  );
}
