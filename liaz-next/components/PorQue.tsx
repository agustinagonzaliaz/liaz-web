import Reveal from './Reveal';
import { reasons } from '@/lib/content';

export default function PorQue() {
  return (
    <section className="section section--durazno">
      <div className="wrap why">
        <Reveal as="h2" className="h2 why__title">Por qué liaz.</Reveal>
        <dl className="why__list">
          {reasons.map((r, i) => (
            <Reveal key={r.title} className="why__item" delay={i * 80}>
              <dt className="h3">{r.title}</dt>
              <dd>{r.text}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
