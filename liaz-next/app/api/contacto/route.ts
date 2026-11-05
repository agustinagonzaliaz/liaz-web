import { NextResponse } from 'next/server';

/**
 * Recibe el formulario y lo envía por mail con Resend (resend.com).
 * Variables de entorno (en Vercel: Settings → Environment Variables):
 *   RESEND_API_KEY     la clave de tu cuenta de Resend
 *   CONTACT_TO_EMAIL   el mail donde querés recibir las consultas
 *   CONTACT_FROM_EMAIL opcional: remitente de un dominio verificado en Resend
 * Si faltan, responde con error: el sitio nunca muestra un envío exitoso que no ocurrió.
 */
export const runtime = 'nodejs';

const clean = (v: unknown, max = 500) => String(v ?? '').replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, max);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 });
  }

  // Campo trampa para bots: si viene completo, se ignora sin avisar.
  if (clean(body.empresa)) return NextResponse.json({ ok: true });

  const data = {
    nombre: clean(body.nombre, 100),
    negocio: clean(body.negocio, 120),
    redes: clean(body.redes, 200),
    medio: body.medio === 'email' ? 'email' : 'whatsapp',
    dato: clean(body.dato, 120),
    tipo: clean(body.tipo, 60),
    mensaje: clean(body.mensaje, 2000),
  };
  if (data.nombre.length < 2 || data.negocio.length < 2 || data.dato.length < 5 || !data.tipo) {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    console.error('Formulario: faltan RESEND_API_KEY o CONTACT_TO_EMAIL');
    return NextResponse.json({ ok: false, error: 'not-configured' }, { status: 503 });
  }

  const text = [
    `Nombre: ${data.nombre}`,
    `Negocio: ${data.negocio}`,
    `Instagram o web: ${data.redes || '-'}`,
    `Contacto (${data.medio}): ${data.dato}`,
    `Tipo de web: ${data.tipo}`,
    '',
    data.mensaje || '(sin mensaje)',
  ].join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || 'liaz web <onboarding@resend.dev>',
        to: [to],
        subject: `Nueva consulta: ${data.negocio} (${data.tipo})`,
        text,
        ...(data.medio === 'email' ? { reply_to: data.dato } : {}),
      }),
    });
    if (!res.ok) {
      console.error('Formulario: Resend respondió', res.status, await res.text());
      return NextResponse.json({ ok: false, error: 'send-failed' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Formulario: error de red', err);
    return NextResponse.json({ ok: false, error: 'send-failed' }, { status: 502 });
  }
}
