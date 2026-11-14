'use client';

import { useState } from 'react';
import { faqs } from '@/lib/content';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="dudas" className="section section--papel">
      <div className="wrap cols">
        <p className="cols__note">Dudas</p>
        <div className="cols__main">
          <h2 className="h2">Antes de empezar.</h2>
          <div className="faq">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div className={`faq__item${isOpen ? ' is-open' : ''}`} key={f.q}>
                  <h3 className="faq__h">
                    <button
                      type="button"
                      className="faq__q"
                      id={`faq-q-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span>{f.q}</span>
                      <span className="faq__icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="faq__panel" id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`} inert={!isOpen}>
                    <div className="faq__inner"><p>{f.a}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
          <p>¿Tu pregunta no está acá? <a className="ulink" href="#contacto">Escribime y te respondo</a>.</p>
        </div>
      </div>
    </section>
  );
}
