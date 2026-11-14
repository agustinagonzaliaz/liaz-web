'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import { pains } from '@/lib/content';
import WaButton from './WaButton';

/** "¿Qué te pasa hoy?": cada opción muestra una respuesta a medida y un contacto con mensaje propio. */
export default function Diagnostico() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const pain = pains[selected];

  /* Se recorre con las flechas, como cualquier grupo de pestañas. */
  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = pains.length - 1;
    let next = -1;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = selected === last ? 0 : selected + 1;
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = selected === 0 ? last : selected - 1;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = last;
    if (next < 0) return;
    e.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="diagnostico" className="section section--papel">
      <div className="wrap cols">
        <h2 className="h2 cols__full" id="diag-title">¿Qué te pasa hoy con tu emprendimiento?</h2>
        <div className="diag cols__full">
          <div className="diag__tabs" role="tablist" aria-labelledby="diag-title" aria-orientation="vertical">
            {pains.map((p, i) => (
              <button
                key={p.id}
                ref={(el) => { tabs.current[i] = el; }}
                type="button"
                role="tab"
                id={`diag-tab-${p.id}`}
                aria-selected={i === selected}
                aria-controls="diag-panel"
                tabIndex={i === selected ? 0 : -1}
                className="diag__tab"
                onClick={() => setSelected(i)}
                onKeyDown={onKey}
              >
                <span className="diag__dot" aria-hidden="true" />
                {p.label}
              </button>
            ))}
          </div>
          <div className="diag__panel" role="tabpanel" id="diag-panel" aria-labelledby={`diag-tab-${pain.id}`} key={pain.id}>
            <h3 className="h3">{pain.title}</h3>
            <p>{pain.text}</p>
            <ul className="rows">
              {pain.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
            <WaButton message={pain.wa}>{pain.cta}</WaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
