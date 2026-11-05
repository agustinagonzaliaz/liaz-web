/**
 * TUS DATOS. Cambiá solo estas líneas.
 * whatsapp: código de país + área + número, sin espacios ni signos
 *           (ejemplo para Argentina: 5491123456789)
 * siteUrl:  la dirección final de tu web (cuando tengas dominio, cambiala)
 */
export const site = {
  name: 'liaz',
  siteUrl: 'https://liaz.vercel.app',
  whatsapp: '549XXXXXXXXXX',
  email: 'tu-mail@ejemplo.com',
  instagram: 'tu_usuario',
  title: 'liaz · diseño web y tiendas online para emprendedores',
  description:
    'Páginas web con estilo propio para emprendimientos, tiendas y profesionales. Diseñamos tu tienda online a medida para que vendas más y respondas menos mensajes.',
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
