/** Todos los textos de la web. Editalos acá sin tocar los componentes. */

/* ---------- Proyectos ----------
 * kind: 'real' = proyecto real · 'concepto' = demostración propia (se muestra con esa etiqueta).
 * images: rutas dentro de /public. Si están vacías, se muestra un marco "captura pendiente".
 * Para Kalos Feria: guardá las capturas en public/proyectos/ y completá las rutas y features
 * SOLO con funcionalidades que ya estén implementadas.
 * showcase: vitrina animada (compu + celular). Cada pantalla lleva una captura de compu
 * (idealmente la página entera, que se recorre sola) y, si querés, una de celular.
 * Solo se muestran las pantallas que tengan captura de compu.
 */
export type Project = {
  id: string;
  name: string;
  kind: 'real' | 'concepto';
  status?: string;
  type: string;
  text: string;
  features: string[];
  images: { desktop?: string; mobile?: string };
  mock?: 'tienda' | 'pro' | 'catalogo';
  url?: string;
  showcase?: { label: string; desktop: string; mobile?: string }[];
  /** Texto corto para la página principal. */
  summary?: string;
};

export const projects: Project[] = [
  {
    id: 'kalos',
    name: 'Kalos Feria',
    kind: 'real',
    status: 'En desarrollo',
    type: 'Tienda online + panel de administración',
    text: 'Una feria digital de ropa, calzado y accesorios nuevos y usados. La tienda muestra cada pieza con su estado, talle y precio, y un panel propio permite administrar todo sin tocar código.',
    features: [
      'Catálogo con búsqueda y filtros',
      'Categorías por rubro',
      'Ofertas con precio anterior',
      'Favoritos y carrito',
      'Consultas por WhatsApp',
      'Panel para cargar, editar y publicar productos',
      'Control de stock y ventas',
    ],
    summary: 'Una feria digital de ropa y accesorios nuevos y usados, con un panel propio para cargar productos sin tocar código.',
    images: { desktop: '', mobile: '' },
    showcase: [
      { label: 'Inicio', desktop: '/proyectos/kalos-inicio.webp', mobile: '/proyectos/kalos-inicio-cel.webp' },
      { label: 'Producto', desktop: '', mobile: '/proyectos/kalos-producto-cel.webp' },
      { label: 'Panel de administración', desktop: '/proyectos/kalos-admin.webp', mobile: '/proyectos/kalos-admin-cel.webp' },
    ],
  },
  /* Cuando tengas un nuevo trabajo, sumalo acá con el mismo formato. */
];

/* ---------- ¿Qué te pasa hoy? ---------- */
export type Pain = { id: string; label: string; title: string; text: string; points: string[]; cta: string; wa: string };

export const pains: Pain[] = [
  {
    id: 'mensajes',
    label: 'Vendo todo por mensaje',
    title: 'Tu catálogo, ordenado en un solo lugar.',
    text: 'Con una tienda online tus clientes ven productos, precios, talles y colores sin tener que preguntarte. Te escriben cuando ya saben qué quieren.',
    points: ['Productos organizados por categoría', 'Precios y talles siempre a la vista', 'Pedidos que llegan claros'],
    cta: 'Quiero ordenar mis ventas',
    wa: 'Hola liaz! Vendo todo por mensaje y quiero una tienda online para ordenar mis ventas.',
  },
  {
    id: 'tiempo',
    label: 'No llego a responder a todos',
    title: 'Que tu web responda por vos.',
    text: 'Las preguntas de siempre (cuánto sale, qué talles hay, cómo se envía) quedan respondidas en tu web. Vos ganás tiempo y tus clientes compran sin esperar.',
    points: ['Preguntas frecuentes resueltas', 'Un camino de compra simple', 'Menos idas y vueltas por chat'],
    cta: 'Quiero ganar tiempo',
    wa: 'Hola liaz! No llego a responder todos los mensajes y quiero una web que me ayude.',
  },
  {
    id: 'empiezo',
    label: 'Recién estoy empezando',
    title: 'Empezá con una imagen profesional.',
    text: 'Una web propia hace que tu marca se vea seria desde el primer día. Es el lugar al que mandás a quien te descubre, y no depende de ningún algoritmo.',
    points: ['Una imagen cuidada desde el inicio', 'Un link propio para compartir', 'Una base que crece con vos'],
    cta: 'Quiero empezar bien',
    wa: 'Hola liaz! Estoy empezando con mi emprendimiento y quiero mi primera web.',
  },
  {
    id: 'feria',
    label: 'Vendo en ferias',
    title: 'Seguí vendiendo cuando la feria termina.',
    text: 'Con un catálogo online, quien te conoció en tu puesto puede volver a ver tus productos y comprarte cualquier día, no solo el fin de semana.',
    points: ['Tu catálogo disponible todo el tiempo', 'Un link o QR para tu puesto', 'Clientes que vuelven a comprarte'],
    cta: 'Quiero vender más allá de la feria',
    wa: 'Hola liaz! Vendo en ferias y quiero un catálogo online para seguir vendiendo.',
  },
];

/* ---------- Servicios ---------- */
export type Service = {
  id: string;
  slug: string;
  name: string;
  forWho: string;
  /** Resumen de la página principal */
  summary: string;
  summaryPoints: string[];
  /** Detalle de la página propia */
  text: string;
  base: string[];
  optional: string[];
  wa: string;
  color: 'celeste' | 'lila';
  example: { desktop: string; mobile: string; brand: string };
  seo: { title: string; description: string };
};

export const services: Service[] = [
  {
    id: 'tienda',
    slug: '/tienda-online',
    name: 'Tienda online',
    forWho: 'Para emprendimientos que venden productos',
    summary: 'Mostrás tus productos ordenados y hacés que comprarte sea fácil.',
    summaryPoints: ['Catálogo con fotos, precios y talles', 'Pedidos por WhatsApp', 'Pensada para el celular'],
    text: 'Una web donde mostrás tus productos, organizás tu catálogo y hacés que comprarte sea fácil.',
    base: ['Catálogo de productos con fotos y precios', 'Categorías para ordenar todo', 'Pedidos o consultas por WhatsApp', 'Diseño pensado para el celular'],
    optional: ['Talles, colores y variantes', 'Carrito de compras', 'Que puedas actualizar productos y precios vos'],
    wa: 'Hola liaz! Quiero consultar por una tienda online.',
    color: 'celeste',
    example: { desktop: '/ejemplos/tienda.webp', mobile: '/ejemplos/tienda-cel.webp', brand: 'Mora accesorios' },
    seo: {
      title: 'Tienda online para emprendedores · liaz',
      description: 'Diseño tiendas online a medida: catálogo con fotos y precios, pedidos por WhatsApp y diseño pensado para el celular. Desde $40.000.',
    },
  },
  {
    id: 'pro',
    slug: '/web-profesional',
    name: 'Web profesional',
    forWho: 'Para profesionales, servicios y negocios',
    summary: 'Presentás lo que hacés, mostrás tus servicios y recibís consultas.',
    summaryPoints: ['Presentación y servicios', 'Contacto y WhatsApp', 'Se adapta a cualquier pantalla'],
    text: 'Una web para presentar lo que hacés, mostrar tus servicios y recibir consultas.',
    base: ['Presentación del negocio o profesional', 'Sección de servicios', 'Contacto y WhatsApp', 'Diseño adaptable a cualquier pantalla'],
    optional: ['Formulario de consultas', 'Galería de trabajos', 'Estructura preparada para buscadores'],
    wa: 'Hola liaz! Quiero consultar por una web profesional.',
    color: 'lila',
    example: { desktop: '/ejemplos/profesional.webp', mobile: '/ejemplos/profesional-cel.webp', brand: 'Clara Ruiz, nutrición' },
    seo: {
      title: 'Web profesional para profesionales y negocios · liaz',
      description: 'Diseño webs profesionales a medida para presentar lo que hacés, mostrar tus servicios y recibir consultas. Desde $40.000.',
    },
  },
];

/* ---------- Cómo trabajo ---------- */
export const steps = [
  { title: 'Charlamos', text: 'Me contás tu negocio y definimos qué web te conviene.' },
  { title: 'Diseño', text: 'Te muestro una propuesta a tu medida y la ajustamos juntos.' },
  { title: 'Publicamos', text: 'Dejo tu web online y te enseño a usarla.' },
];

export const toBring = [
  'Información sobre tu negocio',
  'Tu logo, si ya tenés',
  'Fotos de tus productos o de tu trabajo',
  'Textos, precios o servicios',
];

/* ---------- Preguntas frecuentes ---------- */
export const faqs = [
  { q: '¿Cuánto cuesta?', a: 'Los proyectos arrancan desde $40.000. Antes de empezar te paso un presupuesto cerrado según lo que necesites.' },
  { q: '¿Cuánto tarda en estar lista?', a: 'Depende del tipo de web y de las funciones que necesites. Te doy un tiempo estimado en la propuesta, antes de empezar.' },
  { q: '¿Puedo actualizarla yo después?', a: 'Depende de cómo se arme tu web. Antes de empezar te cuento qué vas a poder cambiar por tu cuenta.' },
  { q: '¿Hay costos aparte del diseño?', a: 'El dominio y, según la plataforma, el alojamiento pueden tener costos propios. Te explico cuáles aplican antes de empezar.' },
];

/* ---------- Formulario ---------- */
export const projectTypes = ['Tienda online', 'Web profesional', 'Todavía no sé'];
