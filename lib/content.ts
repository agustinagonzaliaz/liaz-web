/** Todos los textos de la web. Editalos acá sin tocar los componentes. */

/* ---------- Portada ---------- */
export const heroWords = ['tu marca', 'tu tienda', 'tu feria', 'tu proyecto'];

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
  name: string;
  forWho: string;
  text: string;
  base: string[];
  optional: string[];
  cta: string;
  wa: string;
  mock: 'tienda' | 'pro';
  color: 'celeste' | 'lila';
};

export const services: Service[] = [
  {
    id: 'tienda',
    name: 'Tienda online',
    forWho: 'Para emprendimientos que venden productos',
    text: 'Una web donde mostrás tus productos, organizás tu catálogo y hacés que comprarte sea fácil.',
    base: ['Catálogo de productos con fotos y precios', 'Categorías para ordenar todo', 'Pedidos o consultas por WhatsApp', 'Diseño pensado para el celular'],
    optional: ['Talles, colores y variantes', 'Carrito de compras', 'Que puedas actualizar productos y precios vos'],
    cta: 'Quiero mi tienda',
    wa: 'Hola liaz! Quiero consultar por una tienda online.',
    mock: 'tienda',
    color: 'celeste',
  },
  {
    id: 'pro',
    name: 'Web profesional',
    forWho: 'Para profesionales, servicios y negocios',
    text: 'Una web para presentar lo que hacés, mostrar tus servicios y recibir consultas.',
    base: ['Presentación del negocio o profesional', 'Sección de servicios', 'Contacto y WhatsApp', 'Diseño adaptable a cualquier pantalla'],
    optional: ['Formulario de consultas', 'Galería de trabajos', 'Estructura preparada para buscadores'],
    cta: 'Quiero mi web',
    wa: 'Hola liaz! Quiero consultar por una web profesional.',
    mock: 'pro',
    color: 'lila',
  },
];

/* ---------- Proceso ---------- */
export const steps = [
  { title: 'Charlamos', text: 'Conocemos tu negocio, qué querés lograr y qué necesitás. Con eso definimos juntos qué tipo de web te conviene.' },
  { title: 'Diseñamos', text: 'Armamos una propuesta visual y funcional a tu medida. La revisás y hacemos los ajustes que acordemos.' },
  { title: 'Publicamos', text: 'Dejamos tu web online y te explicamos cómo usarla y actualizarla, según las funciones de tu proyecto.' },
];

export const toBring = [
  'Información sobre tu negocio',
  'Tu logo, si ya tenés',
  'Fotos de tus productos o de tu trabajo',
  'Textos, precios o servicios',
];

/* ---------- Por qué liaz ---------- */
export const reasons = [
  { title: 'Diseño con identidad', text: 'Sin plantillas genéricas: tu web se parece a tu marca.' },
  { title: 'Trato directo', text: 'Hablás siempre con quien diseña tu web, de principio a fin.' },
  { title: 'Pensada para el celular', text: 'Donde están tus clientes cuando llegan desde Instagram.' },
  { title: 'Un lugar propio', text: 'Tu web es tuya y no depende de ninguna red social.' },
];

/* ---------- Preguntas frecuentes ---------- */
export const faqs = [
  { q: '¿Cuánto tarda en estar lista mi página?', a: 'Depende del tipo de web y de las funciones que necesites. Te damos un tiempo estimado en la propuesta, antes de empezar.' },
  { q: '¿Necesito conocimientos técnicos?', a: 'No. Nos ocupamos de la parte técnica y te explicamos todo en un lenguaje simple.' },
  { q: '¿Puedo modificar los productos o la información después?', a: 'Depende de cómo se arme tu web. Antes de empezar te contamos qué vas a poder actualizar por tu cuenta.' },
  { q: '¿La web se ve bien desde el celular?', a: 'Sí. Todas las webs se diseñan pensando primero en el celular, porque es desde donde llega la mayoría de tus clientes.' },
  { q: '¿Puedo conectar Instagram y WhatsApp?', a: 'Sí. Podemos sumar botones a tu WhatsApp para consultas o pedidos, y enlaces a tu Instagram.' },
  { q: '¿Necesito comprar un dominio?', a: 'No es obligatorio, pero lo recomendamos para que tu web tenga una dirección propia, como tumarca.com.ar. Te ayudamos a elegirlo.' },
  { q: '¿Hay costos aparte del diseño?', a: 'El dominio y, según la plataforma, el alojamiento de la web pueden tener costos propios. Te explicamos cuáles aplican a tu proyecto antes de empezar.' },
  { q: '¿Qué necesito tener preparado para empezar?', a: 'Información de tu negocio, fotos, textos y, si es una tienda, tus productos con precios. Si te falta algo, lo charlamos en la primera reunión.' },
  { q: '¿Puedo sumar productos o secciones más adelante?', a: 'Sí. Tu web puede crecer con tu negocio. Lo que se agregue después se cotiza según lo que necesites.' },
];

/* ---------- Formulario ---------- */
export const projectTypes = ['Tienda online', 'Web profesional', 'Todavía no sé'];
