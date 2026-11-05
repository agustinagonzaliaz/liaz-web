'use client';

import Link from 'next/link';
import { useRef, useState, type FormEvent } from 'react';
import Reveal from './Reveal';
import { waLink } from '@/lib/config';
import { projectTypes } from '@/lib/content';

type Fields = { nombre: string; negocio: string; redes: string; medio: string; dato: string; tipo: string; mensaje: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = 'idle' | 'sending' | 'sent' | 'error';

const empty: Fields = { nombre: '', negocio: '', redes: '', medio: 'whatsapp', dato: '', tipo: '', mensaje: '' };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.nombre.trim().length < 2) e.nombre = 'Escribí tu nombre.';
  if (f.negocio.trim().length < 2) e.negocio = 'Contanos el nombre de tu negocio o emprendimiento.';
  if (f.medio === 'email') {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.dato.trim())) e.dato = 'Revisá tu mail: falta algo, por ejemplo la @.';
  } else if (f.dato.replace(/\D/g, '').length < 8) {
    e.dato = 'Escribí tu número con código de área, por ejemplo 11 2345 6789.';
  }
  if (!f.tipo) e.tipo = 'Elegí qué tipo de web te interesa.';
  return e;
}

function toWhatsApp(f: Fields) {
  return [
    `Hola liaz! Soy ${f.nombre || '...'}${f.negocio ? `, de ${f.negocio}` : ''}.`,
    f.tipo && `Me interesa: ${f.tipo}.`,
    f.mensaje && `Busco: ${f.mensaje}`,
  ].filter(Boolean).join('\n');
}

export default function Contacto() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.value;
    setFields((f) => ({ ...f, [k]: value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus('sending');
    try {
      const honeypot = (formRef.current?.elements.namedItem('empresa') as HTMLInputElement | null)?.value ?? '';
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, empresa: honeypot }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (!res.ok || !data.ok) throw new Error('send failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
    requestAnimationFrame(() => resultRef.current?.focus());
  };

  const fieldProps = (k: keyof Fields) => ({
    name: k,
    id: `f-${k}`,
    value: fields[k],
    onChange: set(k),
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `e-${k}` : undefined,
  });
  const err = (k: keyof Fields) => errors[k] && <p className="field__error" id={`e-${k}`}>{errors[k]}</p>;

  return (
    <section id="contacto" className="section section--choco">
      <div className="wrap contact">
        <Reveal className="contact__text">
          <p className="eyebrow">hablemos</p>
          <h2 className="h2 h2--xl">Contanos sobre tu negocio.</h2>
          <p className="lead">Completá el formulario y te respondemos para charlar sobre tu web. Si preferís, escribinos directo.</p>
          <a className="btn btn--celeste btn--lg" href={waLink('Hola liaz! Quiero consultar por una web.')} target="_blank" rel="noopener noreferrer">
            Escribinos por WhatsApp
          </a>
        </Reveal>

        <div className="form-wrap">
          {status === 'sent' ? (
            <div className="result result--ok" ref={resultRef} tabIndex={-1} role="status">
              <h3 className="h3 h3--lg">¡Recibimos tu consulta!</h3>
              <p>Gracias, {fields.nombre.split(' ')[0]}. Te respondemos pronto por {fields.medio === 'email' ? 'mail' : 'WhatsApp'}.</p>
            </div>
          ) : (
            <form className="form" ref={formRef} onSubmit={onSubmit} noValidate>
              <p className="hp" aria-hidden="true"><label>No completar <input name="empresa" tabIndex={-1} autoComplete="off" /></label></p>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="f-nombre">Tu nombre</label>
                  <input type="text" autoComplete="name" {...fieldProps('nombre')} />
                  {err('nombre')}
                </div>
                <div className="field">
                  <label htmlFor="f-negocio">Tu negocio o emprendimiento</label>
                  <input type="text" autoComplete="organization" {...fieldProps('negocio')} />
                  {err('negocio')}
                </div>
              </div>
              <div className="field">
                <label htmlFor="f-redes">Instagram o web actual <span className="field__opt">(si tenés)</span></label>
                <input type="text" placeholder="@tumarca" {...fieldProps('redes')} />
              </div>
              <fieldset className="field">
                <legend>¿Cómo te contactamos?</legend>
                <div className="segmented">
                  {[['whatsapp', 'WhatsApp'], ['email', 'Mail']].map(([v, l]) => (
                    <label key={v} className="segmented__opt">
                      <input type="radio" name="medio" value={v} checked={fields.medio === v} onChange={set('medio')} />
                      <span>{l}</span>
                    </label>
                  ))}
                </div>
                <label className="sr-only" htmlFor="f-dato">{fields.medio === 'email' ? 'Tu mail' : 'Tu número de WhatsApp'}</label>
                <input
                  type={fields.medio === 'email' ? 'email' : 'tel'}
                  autoComplete={fields.medio === 'email' ? 'email' : 'tel'}
                  placeholder={fields.medio === 'email' ? 'tu@mail.com' : '11 2345 6789'}
                  {...fieldProps('dato')}
                />
                {err('dato')}
              </fieldset>
              <fieldset className="field">
                <legend>¿Qué tipo de web te interesa?</legend>
                <div className="segmented segmented--wrap">
                  {projectTypes.map((t) => (
                    <label key={t} className="segmented__opt">
                      <input type="radio" name="tipo" value={t} checked={fields.tipo === t} onChange={set('tipo')} aria-describedby={errors.tipo ? 'e-tipo' : undefined} />
                      <span>{t}</span>
                    </label>
                  ))}
                </div>
                {err('tipo')}
              </fieldset>
              <div className="field">
                <label htmlFor="f-mensaje">Contanos brevemente qué buscás <span className="field__opt">(opcional)</span></label>
                <textarea rows={3} {...fieldProps('mensaje')} />
              </div>
              <button className="btn btn--crema btn--lg" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando…' : 'Enviar consulta'}
              </button>
              <p className="form__legal">
                Usamos tus datos solo para responder tu consulta. Más información en nuestra{' '}
                <Link href="/privacidad">Política de privacidad</Link>.
              </p>
              {status === 'error' && (
                <div className="result result--error" ref={resultRef} tabIndex={-1} role="alert">
                  <p><b>No pudimos enviar tu consulta.</b> Probá de nuevo en un rato o mandala por WhatsApp, ya armamos el mensaje con tus datos.</p>
                  <a className="btn btn--celeste" href={waLink(toWhatsApp(fields))} target="_blank" rel="noopener noreferrer">Enviar por WhatsApp</a>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
