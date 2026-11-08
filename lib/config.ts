/**
 * TUS DATOS. Cambiá solo estas líneas.
 * whatsapp: código de país + área + número, sin espacios ni signos
 *           (ejemplo para Argentina: 5491123456789)
 * siteUrl:  la dirección real de tu web. Se usa para Google, la imagen al compartir
 *           y el mapa del sitio. Cuando tengas dominio propio, cambiala solo acá.
 */
export const site = {
  name: 'liaz',
  siteUrl: 'https://liaz-web.vercel.app',
  whatsapp: '5493513680542',
  email: 'liaz.webs@gmail.com',
  instagram: 'liaz.creative',
  price: 'Desde $40.000',
  title: 'liaz · diseño web y tiendas online para emprendedores',
  description:
    'Diseño tiendas online y webs profesionales a medida para emprendimientos, tiendas y profesionales. Desde $40.000.',
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
