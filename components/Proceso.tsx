import { steps } from '@/lib/content';

export default function Proceso() {
  return (
    <section id="proceso" className="section">
      <div className="wrap cols">
        <p className="cols__note">Cómo trabajo</p>
        <div className="cols__main">
          <h2 className="h2">De la idea a tu web, en tres pasos.</h2>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title} className="step">
                <span className="step__n" aria-hidden="true">{i + 1}</span>
                <h3 className="h3">{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
