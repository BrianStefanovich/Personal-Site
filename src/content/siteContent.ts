export const SCHEDULE_URL = import.meta.env.VITE_SCHEDULE_URL ?? 'mailto:brian@brianstefanovich.com'

export const nav = [
  { label: 'Servicios',  href: '#servicios' },
  { label: 'Método',     href: '#metodo' },
  { label: 'Casos',      href: '#casos' },
  { label: 'Sobre mí',   href: '#sobre-mi' },
  { label: 'Contacto',   href: '#contacto' },
]

export const hero = {
  eyebrow: 'Consultor independiente',
  headline: 'Arquitectura de software, soluciones en la nube y desarrollo estratégico para empresas que necesitan claridad técnica.',
  subheadline: 'Ayudo a empresas medianas y grandes a entender, modernizar y construir software crítico para su negocio, transformando problemas técnicos complejos en decisiones claras, comparables y accionables.',
  support: 'Si tu sistema es caro de mantener, difícil de cambiar, depende de pocas personas o no sabes qué decisión técnica tomar, puedo ayudarte a ordenar el problema y definir el mejor camino.',
  ctaPrimary:   'Agendar una conversación',
  ctaSecondary: 'Ver cómo puedo ayudar',
}

export const problem = {
  title: 'Cuando el software empieza a doler, el problema no siempre es escribir más código.',
  body: 'Muchas empresas llegan a un punto en que su software funciona, pero se vuelve difícil de entender, mantener o hacer crecer. Cada cambio cuesta demasiado. Los despliegues son desordenados. La arquitectura no acompaña al negocio. La información vive en la cabeza de una o dos personas.',
  pains: [
    'No entendemos bien cómo funciona nuestro sistema.',
    'Cada cambio demora demasiado.',
    'Dependemos demasiado de una persona o proveedor.',
    'No sabemos si conviene modernizar, reconstruir o seguir igual.',
    'Los costos cloud o de desarrollo no son claros.',
    'Queremos crear un producto, pero no sabemos cómo bajarlo a software.',
    'Tenemos conocimiento tribal que nunca fue documentado.',
    'Necesitamos tomar una decisión técnica con impacto económico.',
  ],
  closing: 'Ahí es donde entro: ayudo a ordenar la complejidad, entender las opciones y construir un camino técnico realista.',
}

export type Service = {
  id: string
  title: string
  subtitle: string
  description: string
  items: string[]
}

export const services: Service[] = [
  {
    id: 'diagnostico',
    title: 'Diagnóstico técnico y estratégico',
    subtitle: 'Entender antes de decidir',
    description: 'Para empresas que necesitan entender qué está pasando con un sistema, por qué es caro cambiarlo o qué riesgos existen.',
    items: ['Revisión de arquitectura actual', 'Análisis de deuda técnica', 'Evaluación de riesgos', 'Informe ejecutivo para perfiles técnicos y no técnicos'],
  },
  {
    id: 'arquitectura',
    title: 'Arquitectura de software',
    subtitle: 'Diseño que acompaña al negocio',
    description: 'Diseño arquitecturas mantenibles, escalables y alineadas con el negocio. El foco no está en aplicar modas, sino en elegir estructuras que tengan sentido para la realidad de la empresa.',
    items: ['Diseño de arquitectura', 'Evaluación de trade-offs', 'Definición de estándares técnicos', 'Acompañamiento a equipos de desarrollo'],
  },
  {
    id: 'cloud',
    title: 'Consultoría cloud',
    subtitle: 'Claridad en infraestructura',
    description: 'Ayudo a diseñar, ordenar o modernizar despliegues cloud considerando costos, seguridad, operación y escalabilidad.',
    items: ['Evaluación de proveedores cloud', 'Diseño de arquitectura cloud', 'Optimización de costos', 'Estrategias de despliegue y automatización'],
  },
  {
    id: 'legados',
    title: 'Modernización de sistemas legados',
    subtitle: 'Evolución sin ruptura',
    description: 'Para empresas que tienen sistemas importantes pero difíciles de mantener, cambiar o escalar.',
    items: ['Análisis del sistema actual', 'Estrategia de modernización gradual', 'Reducción de conocimiento tribal', 'Diseño de caminos de migración realistas'],
  },
  {
    id: 'discovery',
    title: 'Product discovery y diseño de soluciones',
    subtitle: 'De necesidad a producto posible',
    description: 'Ayudo a transformar una necesidad de negocio en un producto o sistema posible de construir.',
    items: ['Definición del problema', 'Diseño funcional inicial', 'Priorización de funcionalidades', 'Roadmap de desarrollo'],
  },
  {
    id: 'desarrollo',
    title: 'Desarrollo de software a medida',
    subtitle: 'Código que se entiende y evoluciona',
    description: 'Diseño y construyo software alineado con el negocio, con foco en mantenibilidad, claridad y evolución a largo plazo.',
    items: ['Desarrollo backend y frontend', 'Aplicaciones web y sistemas internos', 'Plataformas multi-tenant', 'APIs e integraciones'],
  },
]

export type MethodStep = {
  number: string
  title: string
  description: string
}

export const method: MethodStep[] = [
  { number: '01', title: 'Entender', description: 'Relevar el contexto, el negocio, el sistema actual, las personas involucradas y el problema real.' },
  { number: '02', title: 'Ordenar',  description: 'Separar síntomas de causas, mapear componentes, dependencias, costos, riesgos y restricciones.' },
  { number: '03', title: 'Comparar', description: 'Evaluar alternativas técnicas, costos, beneficios, trade-offs y riesgos asociados a cada camino.' },
  { number: '04', title: 'Decidir',  description: 'Convertir la complejidad técnica en recomendaciones claras para perfiles técnicos y no técnicos.' },
  { number: '05', title: 'Construir o acompañar', description: 'Diseñar, desarrollar o acompañar la implementación, manteniendo claridad técnica y foco de negocio.' },
  { number: '06', title: 'Transferir conocimiento', description: 'Documentar, explicar y dejar capacidades instaladas para reducir dependencia de personas específicas.' },
]

export const differentiators = [
  'Especialización en arquitectura de software',
  'Desarrollo full-stack y backend con .NET',
  'Experiencia en múltiples proveedores cloud',
  'Formación matemática aplicada al análisis de problemas',
  'Capacidad de traducir complejidad técnica para no técnicos',
  'Visión pragmática: soluciones útiles, mantenibles y alineadas al negocio',
  'Experiencia liderando decisiones técnicas en contextos reales',
  'Conocimiento de distintos lenguajes y paradigmas',
]

export type CaseStudy = {
  id: string
  label: string
  title: string
  description: string
  focus: string[]
  result: string
  tag: 'Plataforma' | 'Ciberseguridad' | 'E-learning' | 'Fintech'
}

export const cases: CaseStudy[] = [
  {
    id: 'remates',
    label: 'Sistema end-to-end',
    title: 'Plataforma digital para una casa de remates en Uruguay',
    description: 'Participé junto a mi equipo en el desarrollo de un sistema end-to-end para una casa de remates online, cubriendo el flujo completo del negocio.',
    focus: ['Entendimiento del proceso de negocio', 'Diseño de una solución integral', 'Alineación entre operación, usuarios y plataforma'],
    result: 'Una plataforma diseñada para digitalizar y operar el proceso de remates online de punta a punta.',
    tag: 'Plataforma',
  },
  {
    id: 'ciberseguridad',
    label: 'Automatización de auditorías',
    title: 'Software para reducir costos de auditoría de seguridad',
    description: 'Desarrollo de un sistema orientado a reducir costos de auditorías de seguridad en el contexto de la Ley Marco de Ciberseguridad.',
    focus: ['Modelado del proceso de auditoría', 'Automatización de recolección y análisis de evidencia', 'Diseño alineado a necesidades regulatorias'],
    result: 'Un proceso costoso, manual y complejo convertido en un sistema eficiente, trazable y escalable.',
    tag: 'Ciberseguridad',
  },
  {
    id: 'elearning',
    label: 'De prototipo a producción',
    title: 'De prototipo a aplicación robusta y escalable de e-learning',
    description: 'Transformé un prototipo en una aplicación multi-tenant de e-learning robusta, capaz de crear, editar e impartir cursos a múltiples clientes.',
    focus: ['Diseño de arquitectura escalable', 'Preparación para múltiples clientes o instituciones', 'Mejora de mantenibilidad y evolución del producto'],
    result: 'Una plataforma transformada hacia una solución sólida, escalable y preparada para crecer.',
    tag: 'E-learning',
  },
  {
    id: 'fintech',
    label: 'Liderazgo técnico',
    title: 'Diseño y liderazgo técnico de soluciones fintech',
    description: 'Technical leader en proyectos de software financiero, participando en diseño, desarrollo y definición de estándares técnicos.',
    focus: ['Diseño de arquitectura', 'Liderazgo de equipos de desarrollo', 'Mejora de calidad y escalabilidad'],
    result: 'Experiencia directa en contextos donde las decisiones técnicas impactan operación, seguridad y continuidad del negocio.',
    tag: 'Fintech',
  },
]

export const audience = {
  title: 'Trabajo mejor con empresas que necesitan claridad antes de invertir más en software.',
  intro: 'Puedo ayudarte si eres founder, gerente general, gerente de operaciones, gerente comercial, gerente de tecnología o líder de un área que depende del software para operar o crecer.',
  situations: [
    'Tu empresa tiene un sistema legado que cuesta mantener.',
    'Necesitas modernizar una plataforma existente.',
    'Quieres desarrollar una aplicación, pero no sabes por dónde empezar.',
    'Tienes dudas sobre costos cloud o costos de desarrollo.',
    'Tu equipo técnico necesita una mirada externa.',
    'Dependés demasiado de una persona o proveedor.',
    'Necesitas explicar un problema técnico a dirección o gerencia.',
    'Tienes que tomar una decisión técnica de alto impacto económico.',
  ],
}

export const referral = {
  title: '¿A quién podés referirme?',
  body: 'Una buena referencia para mí es una empresa que siente que su software se volvió una caja negra: funciona, pero es caro, difícil de cambiar, difícil de entender o depende demasiado de pocas personas.',
  anchors: [
    '"No entiendo por qué mi sistema es tan caro."',
    '"Cada cambio demora demasiado."',
    '"Dependemos demasiado de una persona."',
    '"Tenemos que modernizar, pero no sabemos por dónde empezar."',
    '"El equipo técnico me explica, pero no logro traducirlo a decisión de negocio."',
  ],
  cta: 'Si conocés a alguien en esa situación, probablemente puedo ayudarlo a ordenar el problema y tomar una mejor decisión.',
}

export const about = {
  title: 'Soy Brian Stefanovich.',
  subtitle: 'Diseño, explico y construyo software para problemas complejos.',
  bio: [
    'Soy ingeniero de software con más de 10 años de experiencia en desarrollo, arquitectura, liderazgo técnico y soluciones cloud. He trabajado en distintos contextos de negocio, desde fintech hasta plataformas educativas, sistemas internos y soluciones orientadas a procesos críticos.',
    'Con el tiempo entendí que muchas empresas no necesitan solamente más código. Necesitan claridad. Necesitan entender qué tienen, qué les duele, qué opciones existen y qué decisión técnica tiene más sentido para su negocio.',
    'Me especializo en arquitectura de software, modernización, cloud y desarrollo .NET. También tengo formación matemática, lo que influye en mi manera de analizar problemas, modelar escenarios y comparar alternativas.',
  ],
  closing: 'Mi objetivo no es vender tecnología por vender tecnología. Es ayudarte a construir software que tenga sentido para tu negocio, hoy y en el largo plazo.',
  stack: ['.NET / C#', 'TypeScript', 'React', 'Azure', 'AWS', 'Docker', 'PostgreSQL', 'Arquitectura hexagonal', 'DDD', 'Microservicios'],
}

export const contact = {
  title: 'Conversemos sobre tu sistema, producto o decisión técnica.',
  body: 'Si tenés un sistema difícil de entender, una decisión técnica importante o una idea de software que necesitás bajar a tierra, podemos conversar.',
  support: 'No necesitás llegar con una solución definida. Basta con traer el problema, la preocupación o la decisión que necesitás tomar.',
  ctaPrimary: 'Agendar una conversación',
}
