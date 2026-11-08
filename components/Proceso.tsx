import Reveal from './Reveal';
import { steps } from '@/lib/content';

export default function Proceso() {
  return (
    <section id="proceso" className="section">
      <div className="wrap stack">
        <Reveal className="head">
          <p className="eyebrow">cómo trabajo</p>
          <h2 className="h2">De la idea a tu web, en tres pasos.</h2>
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
      </div>
    </section>
  );
}
