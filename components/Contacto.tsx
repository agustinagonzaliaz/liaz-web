'use client';

import Link from 'next/link';
import { useRef, useState, type FormEvent } from 'react';
import WaButton from './WaButton';
import { projectTypes } from '@/lib/content';

type Fields = { nombre: string; negocio: string; redes: string; medio: string; dato: string; tipo: string; mensaje: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = 'idle' | 'sending' | 'sent' | 'error';
type Accept = { terminos: boolean; privacidad: boolean };

const empty: Fields = { nombre: '', negocio: '', redes: '', medio: 'whatsapp', dato: '', tipo: '', mensaje: '' };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.nombre.trim().length < 2) e.nombre = 'Escribí tu nombre.';
  if (f.medio === 'email') {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.dato.trim())) e.dato = 'Revisá tu mail: falta algo, por ejemplo la @.';
  } else if (f.dato.replace(/\D/g, '').length < 8) {
    e.dato = 'Escribí tu número con código de área, por ejemplo 351 234 5678.';
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
  /* Aceptación de Términos y de Privacidad: dos casillas separadas, sin marcar por defecto. */
  const [accept, setAccept] = useState<Accept>({ terminos: false, privacidad: false });
  const [acceptError, setAcceptError] = useState(false);
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
    const missing = !accept.terminos || !accept.privacidad;
    setAcceptError(missing);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    if (missing) {
      formRef.current?.querySelector<HTMLElement>(`[name="${accept.terminos ? 'aceptaPrivacidad' : 'aceptaTerminos'}"]`)?.focus();
      return;
    }
    setStatus('sending');
    try {
      const honeypot = (formRef.current?.elements.namedItem('empresa') as HTMLInputElement | null)?.value ?? '';
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, empresa: honeypot, aceptaTerminos: accept.terminos, aceptaPrivacidad: accept.privacidad }),
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
    <section id="contacto" className="section on-dark" data-hide-float>
      <div className="wrap contact">
        <div className="contact__text">
          <h2 className="display display--page">Contame sobre tu negocio.</h2>
          <p className="lead">Completá el formulario y te respondo para charlar sobre tu web.</p>
          <ul className="rows small">
            <li>Presupuesto a medida y sin compromiso</li>
            <li>Todo acordado por escrito antes de empezar</li>
            <li>Te enseño a usar tu web cuando está lista</li>
          </ul>
        </div>

        <div className="form-wrap">
          {status === 'sent' ? (
            <div className="result result--ok" ref={resultRef} tabIndex={-1} role="status">
              <h3 className="h3">¡Recibí tu consulta!</h3>
              <p>Gracias, {fields.nombre.split(' ')[0]}. Te respondo pronto por {fields.medio === 'email' ? 'mail' : 'WhatsApp'}.</p>
            </div>
          ) : (
            <form className="form" ref={formRef} onSubmit={onSubmit} noValidate>
              <div className="hp" aria-hidden="true"><label>No completar <input name="empresa" tabIndex={-1} autoComplete="off" aria-hidden="true" /></label></div>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="f-nombre">Tu nombre</label>
                  <input type="text" autoComplete="name" {...fieldProps('nombre')} />
                  {err('nombre')}
                </div>
                <div className="field">
                  <label htmlFor="f-negocio">Tu negocio o emprendimiento <span className="field__opt">(opcional)</span></label>
                  <input type="text" autoComplete="organization" {...fieldProps('negocio')} />
                </div>
              </div>
              <div className="field">
                <label htmlFor="f-redes">Instagram o web actual <span className="field__opt">(si tenés)</span></label>
                <input type="text" placeholder="@tumarca" {...fieldProps('redes')} />
              </div>
              <fieldset className="field">
                <legend>¿Cómo te contacto?</legend>
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
                  placeholder={fields.medio === 'email' ? 'tu@mail.com' : '351 234 5678'}
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
                <label htmlFor="f-mensaje">Contame brevemente qué buscás <span className="field__opt">(opcional)</span></label>
                <textarea rows={3} {...fieldProps('mensaje')} />
              </div>
              <fieldset className="field consent">
                <legend className="sr-only">Aceptación de los términos y de la política de privacidad</legend>
                <label className="check">
                  <input
                    type="checkbox"
                    name="aceptaTerminos"
                    checked={accept.terminos}
                    onChange={(e) => setAccept((a) => ({ ...a, terminos: e.target.checked }))}
                    aria-invalid={acceptError && !accept.terminos ? true : undefined}
                    aria-describedby={acceptError ? 'e-acepta' : undefined}
                  />
                  <span>Leí y acepto los <Link href="/terminos" target="_blank">Términos y condiciones</Link>.</span>
                </label>
                <label className="check">
                  <input
                    type="checkbox"
                    name="aceptaPrivacidad"
                    checked={accept.privacidad}
                    onChange={(e) => setAccept((a) => ({ ...a, privacidad: e.target.checked }))}
                    aria-invalid={acceptError && !accept.privacidad ? true : undefined}
                    aria-describedby={acceptError ? 'e-acepta' : undefined}
                  />
                  <span>Leí y acepto la <Link href="/privacidad" target="_blank">Política de privacidad</Link>.</span>
                </label>
                {acceptError && (!accept.terminos || !accept.privacidad) && (
                  <p className="field__error" id="e-acepta">Para enviar la consulta, marcá las dos casillas.</p>
                )}
              </fieldset>
              <button className="btn btn--crema" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando…' : 'Enviar consulta'}
              </button>
              <p className="form__legal">
                Uso tus datos solo para responder tu consulta. Guardo la fecha y la hora de tu aceptación como constancia.
              </p>
              {status === 'error' && (
                <div className="result result--error" ref={resultRef} tabIndex={-1} role="alert">
                  <p><b>No se pudo enviar tu consulta.</b> Probá de nuevo en un rato o mandala por WhatsApp: el mensaje ya está armado con tus datos.</p>
                  <WaButton message={toWhatsApp(fields)} className="btn btn--celeste">Enviar por WhatsApp</WaButton>
                </div>
              )}
            </form>
          )}
          <div className="direct">
            <p className="h4">¿Preferís escribir directo?</p>
            <WaButton message="Hola liaz! Quiero consultar por una web." className="btn btn--ghost">Escribime por WhatsApp</WaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
