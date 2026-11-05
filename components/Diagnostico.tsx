'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { pains } from '@/lib/content';
import { waLink } from '@/lib/config';

/** "¿Qué te pasa hoy?": cada opción muestra una respuesta a medida y un contacto con mensaje propio. */
export default function Diagnostico() {
  const [selected, setSelected] = useState(pains[0].id);
  const pain = pains.find((p) => p.id === selected) ?? pains[0];

  return (
    <section id="diagnostico" className="section section--white">
      <div className="wrap stack">
        <Reveal className="head">
          <p className="eyebrow">¿es para vos?</p>
          <h2 className="h2">¿Qué te pasa hoy con tu emprendimiento?</h2>
        </Reveal>
        <div className="diag">
          <div className="diag__options" role="radiogroup" aria-label="Elegí lo que te pasa hoy">
            {pains.map((p) => {
              const on = p.id === selected;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  className="diag__option"
                  onClick={() => setSelected(p.id)}
                >
                  <span className="diag__check" aria-hidden="true" />
                  {p.label}
                </button>
              );
            })}
          </div>
          <div className="diag__answer" aria-live="polite" key={pain.id}>
            <h3 className="h3 h3--lg">{pain.title}</h3>
            <p>{pain.text}</p>
            <ul className="diag__points">
              {pain.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
            <a className="btn btn--dark" href={waLink(pain.wa)} target="_blank" rel="noopener noreferrer">{pain.cta}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
