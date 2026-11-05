# liaz — web

Web de liaz, hecha con Next.js y lista para publicar en Vercel.

## Dónde cambiar cada cosa

- **Tus datos** (WhatsApp, mail, Instagram, dirección de la web): `lib/config.ts`
- **Todos los textos** (portada, proyectos, diagnóstico, servicios, pasos, preguntas): `lib/content.ts`
- **Capturas de proyectos:** guardalas en `public/proyectos/` y poné la ruta en `lib/content.ts` (por ejemplo `/proyectos/kalos-desktop.jpg`)
- **Colores, tipografías y estilos:** `app/globals.css`
- **Cada sección:** `components/`

## Verla en tu compu

```bash
npm install
npm run dev
```

Abrí http://localhost:3000. Cada cambio que guardes se ve al instante.

## Formulario de contacto

El formulario envía las consultas a tu mail con Resend (resend.com, tiene plan gratis).

1. Creá una cuenta en resend.com y generá una API key.
2. En Vercel, entrá a **Settings → Environment Variables** y cargá:
   - `RESEND_API_KEY`: la clave de Resend
   - `CONTACT_TO_EMAIL`: el mail donde querés recibir las consultas (con el remitente de prueba de Resend, tiene que ser el mismo mail de tu cuenta de Resend)
3. Volvé a publicar (Deployments → Redeploy).

Para probarlo en tu compu, copiá `.env.example` como `.env.local` y completalo.

Mientras no esté configurado, el formulario muestra un error honesto y ofrece mandar la consulta por WhatsApp. Nunca muestra un envío exitoso que no ocurrió.

## Publicar en Vercel

1. Subí la carpeta a un repositorio de GitHub.
2. En vercel.com: **Add New → Project**, elegí el repositorio y tocá **Deploy**.
3. Cada vez que subas cambios a GitHub, la web se actualiza sola.

Cuando tengas dominio, conectalo en **Settings → Domains** y cambiá `siteUrl` en `lib/config.ts`.
