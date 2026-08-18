export const es = {
	nav: {
		name: 'Brian Stefanovich',
		links: [
			{ label: 'Servicios', href: '/#servicios' },
			{ label: 'Cómo trabajo', href: '/#como-trabajo' },
			{ label: 'Casos', href: '/#casos' },
			{ label: 'Sobre mí', href: '/#sobre-mi' },
		],
		cta: 'Conversemos 30 minutos',
	},

	home: {
		meta: {
			title: 'Brian Stefanovich — Arquitectura y consultoría de software',
			description:
				'Ayudo a empresas a resolver sistemas que las frenan, construir nuevos productos y tomar decisiones técnicas con criterio de negocio. Primera conversación sin costo.',
		},

		hero: {
			eyebrow: 'Arquitectura · Consultoría · Software',
			headlineLines: ['Mejor software empieza', 'con mejores decisiones.'],
			subhead:
				'Ayudo a empresas a resolver sistemas que las frenan, construir nuevos productos y tomar decisiones técnicas con criterio de negocio.',
			cta: 'Conversemos 30 minutos',
			microcopy: 'Primera conversación sin costo · No sustituye una asesoría.',
		},

		problem: {
			eyebrow: 'Cuando el software empieza a pesar',
			headline: 'No todos los problemas de software necesitan más código.',
			paragraphs: [
				'A veces un sistema funciona, pero cada cambio cuesta más.',
				'A veces existe una oportunidad de negocio, pero todavía no está claro qué conviene construir.',
				'Y otras veces el equipo puede ejecutar, pero necesita criterio técnico senior para tomar decisiones importantes.',
			],
			lede: 'En cualquiera de esos escenarios, empezar por la solución suele ser demasiado pronto.',
			emphasis: 'Primero hay que entender qué está pasando y qué necesita realmente el negocio.',
			chain: ['Más código', 'Más dependencias', 'Más riesgo', 'Más costo de cambio'],
			closing: 'A veces lo primero que necesitamos cambiar no es el software. Es la decisión.',
		},

		doors: {
			headline: 'Tres situaciones. Tres formas de ayudar.',
			items: [
				{
					number: '01',
					tag: 'El sistema está frenando al negocio',
					body: 'El producto funciona, pero evolucionarlo se volvió lento, costoso o riesgoso. Hay deuda técnica, integraciones frágiles, problemas de rendimiento, decisiones acumuladas o partes del sistema que nadie quiere tocar.',
					emphasis:
						'Te ayudo a entender qué está causando el problema, qué vale la pena cambiar y cómo hacerlo sin introducir más riesgo del necesario.',
					service: 'Consultoría y desarrollo para sistemas existentes',
					cta: 'Ver servicio',
					href: '/#sistemas-existentes',
					intent: 'existing-system',
				},
				{
					number: '02',
					tag: 'Hay una oportunidad que necesita convertirse en software',
					body: 'Tienes una idea, un nuevo producto o una oportunidad de negocio donde el software será una pieza central. Antes de invertir meses desarrollando, necesitas claridad sobre qué construir, qué validar primero y qué decisiones pueden condicionar el negocio.',
					emphasis: 'Te ayudo a convertir esa oportunidad en una estrategia de producto y tecnología que pueda ejecutarse.',
					service: 'Consultoría estratégica para nuevos negocios basados en software',
					cta: 'Ver servicio',
					href: '/#nuevos-negocios',
					intent: 'new-product',
				},
				{
					number: '03',
					tag: 'El equipo necesita dirección técnica senior',
					body: 'El equipo sabe desarrollar. Lo que falta es una mirada transversal para decisiones de arquitectura, deuda técnica, integraciones, estándares, evolución del sistema o roadmap tecnológico.',
					emphasis: 'Me incorporo de manera recurrente para aportar criterio técnico senior sin necesidad de crear un rol full-time.',
					service: 'Arquitecto de software fraccional',
					cta: 'Ver servicio',
					href: '/#arquitecto-fraccional',
					intent: 'fractional',
				},
			],
		},

		services: {
			existentes: {
				id: 'sistemas-existentes',
				eyebrow: 'Consultoría · Modernización · Desarrollo',
				headline: 'Cuando cambiar el sistema se vuelve más difícil que mantenerlo igual.',
				intro:
					'Un sistema puede seguir funcionando y al mismo tiempo convertirse en una restricción. Las señales suelen aparecer gradualmente:',
				signals: [
					'cada funcionalidad tarda más de lo esperado',
					'modificar una parte rompe otra',
					'existen componentes que nadie quiere tocar',
					'los despliegues generan incertidumbre',
					'aparecen problemas de rendimiento o escalabilidad',
					'las integraciones son cada vez más difíciles de mantener',
					'la deuda técnica condiciona decisiones de producto',
					'una migración parece inevitable, pero nadie tiene claro por dónde comenzar',
				],
				pivot: 'Mi trabajo no empieza suponiendo que necesitas una reescritura.',
				pivotEmphasis: 'Empieza entendiendo qué está limitando realmente al sistema y qué consecuencia tiene para el negocio.',
				steps: [
					{
						label: 'Diagnosticar',
						body: 'Separar síntomas de causas y hacer visibles las restricciones, dependencias y riesgos relevantes.',
					},
					{
						label: 'Decidir',
						body: 'Evaluar alternativas y hacer explícitos sus costos, beneficios y trade-offs. Refactorizar. Modernizar. Migrar. Reemplazar una parte. Cambiar una integración. O no hacer nada todavía.',
					},
					{
						label: 'Diseñar',
						body: 'Convertir la decisión en una arquitectura objetivo y una hoja de ruta que pueda ejecutarse progresivamente.',
					},
					{
						label: 'Ejecutar',
						body: 'Cuando el proyecto lo necesita, también puedo participar directamente de la modernización o desarrollo junto al equipo.',
					},
				],
				resultLabel: 'El resultado que buscamos',
				resultNot: 'No una arquitectura más sofisticada.',
				result: 'Recuperar la capacidad de cambiar el software con una relación razonable entre velocidad, costo y riesgo.',
				cta: 'Conversemos sobre tu sistema',
				intent: 'existing-system',
			},
			nuevos: {
				id: 'nuevos-negocios',
				eyebrow: 'Producto · Tecnología · Negocio',
				headline: 'Construir bien importa. Construir lo correcto importa más.',
				intro:
					'Cuando el software es parte central de un nuevo negocio, las primeras decisiones tienen consecuencias desproporcionadas. Una mala decisión temprana puede convertirse después en meses de desarrollo, infraestructura innecesaria, una arquitectura difícil de modificar o inversión destinada a funcionalidades que nunca debieron construirse.',
				pivot: 'Antes de hablar de frameworks o infraestructura, trabajamos sobre preguntas más importantes.',
				questions: [
					{
						q: '¿Qué problema estamos resolviendo?',
						a: 'Qué necesidad existe, para quién y qué tendría que ocurrir para considerar que la solución funciona.',
					},
					{
						q: '¿Qué necesitamos construir primero?',
						a: 'Separar lo esencial de lo accesorio y determinar qué puede validarse antes de invertir en desarrollo.',
					},
					{
						q: '¿Qué deberíamos construir y qué deberíamos integrar?',
						a: 'No todo necesita ser tecnología propia. La ventaja competitiva está en identificar dónde realmente vale la pena invertir.',
					},
					{
						q: '¿Qué decisiones técnicas necesita esta etapa?',
						a: 'Diseñar para las restricciones actuales sin intentar resolver prematuramente problemas que todavía no existen.',
					},
					{
						q: '¿Cómo debería evolucionar si funciona?',
						a: 'Pensar desde el comienzo en una dirección posible sin convertir esa dirección en complejidad innecesaria hoy.',
					},
				],
				scopeLede: 'Puedo acompañar el proceso desde la definición inicial hasta la arquitectura y construcción del producto.',
				scope: 'Discovery, MVP, arquitectura, estimación, roadmap, selección tecnológica, proveedores, desarrollo y evolución.',
				resultLabel: 'El resultado que buscamos',
				result: 'Reducir incertidumbre antes de aumentar inversión. Entender qué vale la pena construir y después construirlo con una dirección clara.',
				cta: 'Conversemos sobre tu idea',
				intent: 'new-product',
			},
			fraccional: {
				id: 'arquitecto-fraccional',
				eyebrow: 'Liderazgo técnico · Arquitectura · Decisión',
				headline: 'Criterio técnico senior, sin crear un rol full-time.',
				intro: 'Hay equipos que no necesitan más personas escribiendo código. Necesitan alguien que pueda mirar el sistema completo.',
				pivot:
					'Como arquitecto fraccional me incorporo de manera recurrente para acompañar las decisiones técnicas que pueden afectar la evolución del producto y del negocio.',
				workWith: 'Puedo trabajar junto a founders, CTOs, Tech Leads, producto y equipos de ingeniería en:',
				topics: [
					'arquitectura y diseño de sistemas',
					'decisiones técnicas de alto impacto',
					'evaluación de riesgos y trade-offs',
					'deuda técnica',
					'modernizaciones y migraciones',
					'integraciones',
					'estándares técnicos',
					'revisión de propuestas y diseños',
					'roadmap tecnológico',
					'acompañamiento del equipo',
					'traducción de necesidades de negocio a decisiones técnicas ejecutables',
				],
				notReplace: 'No reemplazo al equipo.',
				notReplaceEmphasis: 'Aumento su capacidad para tomar buenas decisiones.',
				fitLabel: 'Tiene sentido cuando...',
				fits: [
					'Existe un equipo capaz de ejecutar, pero falta una mirada senior transversal.',
					'El CTO o Tech Lead necesita un segundo criterio para una decisión importante.',
					'La empresa creció y decisiones antes informales están empezando a tener consecuencias estructurales.',
					'O todavía no tiene sentido incorporar un arquitecto de software a tiempo completo.',
				],
				cta: 'Evaluemos si tiene sentido',
				intent: 'fractional',
			},
		},

		principios: {
			eyebrow: 'Cómo pienso el software',
			headline: 'La arquitectura es una decisión, no un objetivo.',
			lede: 'No parto de una arquitectura favorita ni de una tecnología predeterminada. Empiezo por entender cuatro cosas.',
			nodes: [
				{ label: 'Negocio', question: '¿Qué necesita conseguir la empresa y por qué importa?' },
				{ label: 'Sistema', question: '¿Qué capacidades, restricciones y riesgos existen hoy?' },
				{ label: 'Alternativas', question: '¿Qué opciones reales tenemos?' },
				{ label: 'Trade-offs', question: '¿Qué ganamos, qué sacrificamos y qué estamos decidiendo postergar?' },
				{ label: 'Decisión', question: '¿Qué tiene sentido ahora?' },
			],
			closingNot: 'Una buena arquitectura no es la más sofisticada.',
			closing: 'Es la que permite que el software acompañe al negocio sin introducir complejidad antes de que sea necesaria.',
		},

		proceso: {
			eyebrow: 'El proceso',
			headline: 'Diagnosticar antes de prescribir.',
			steps: [
				{
					number: '01',
					label: 'Entender',
					body: 'Comprender el negocio, el sistema, las personas y las restricciones. No solamente qué está pasando técnicamente, sino por qué importa.',
				},
				{
					number: '02',
					label: 'Hacer visible el problema',
					body: 'Separar síntomas de causas. Identificar dependencias, riesgos y decisiones que hoy están siendo tomadas de forma implícita.',
				},
				{
					number: '03',
					label: 'Evaluar alternativas',
					body: 'Normalmente existe más de una solución razonable. Hago explícitos sus costos, beneficios, riesgos y consecuencias para poder compararlas.',
				},
				{
					number: '04',
					label: 'Definir una dirección',
					body: 'Convertir la decisión en arquitectura, prioridades y una hoja de ruta que pueda ejecutarse.',
				},
				{
					number: '05',
					label: 'Llevarla al software',
					body: 'Dependiendo del proyecto, puedo participar como consultor, arquitecto fraccional, líder técnico o directamente en el desarrollo.',
				},
			],
			closingNot: 'Porque el objetivo no es producir un documento.',
			closing: 'Es conseguir que una buena decisión llegue al software.',
			cta: 'Conversemos 30 minutos',
		},

		casos: {
			eyebrow: 'Experiencia',
			headline: 'Del problema a la decisión.',
			lede: 'Tres contextos diferentes, con algo en común: el desafío no era simplemente desarrollar software, sino entender qué necesitaba el negocio y diseñar una dirección técnica que pudiera sostenerlo.',
			backLabel: 'Casos',
			cta: 'Conversemos 30 minutos',
			items: [
				{
					slug: 'kepler-coach',
					name: 'Kepler Coach',
					card: {
						headline: 'De prototipo a plataforma multi-tenant.',
						body: 'Transformación de un prototipo de IA en una plataforma sobre .NET, React y Azure preparada para operar como producto real.',
						tag: 'PROTOTIPO → PLATAFORMA',
					},
					detail: {
						tagline: 'Producto · Arquitectura · Azure',
						intro: [
							'Kepler Coach había demostrado su idea mediante un prototipo funcional: utilizar IA para transformar documentos, videos y otras fuentes de información en cursos estructurados.',
							'El siguiente desafío era muy diferente: el sistema debía convertirse en una plataforma robusta, capaz de operar para una de las empresas públicas más grandes de Uruguay, soportar múltiples clientes y seguir evolucionando como producto.',
						],
						problema: {
							heading: 'El problema',
							paragraphs: [
								'El prototipo permitía validar la propuesta, pero no había sido diseñado como fundamento de una plataforma multi-tenant de largo plazo.',
								'Era necesario resolver decisiones estructurales:',
							],
							list: [
								'cómo separar clientes y responsabilidades',
								'cómo procesar distintas fuentes de contenido',
								'cómo integrar los procesos de datos e IA',
								'cómo evolucionar nuevas capacidades sin aumentar innecesariamente el acoplamiento',
								'cómo desplegar y operar todo el sistema sobre Azure',
							],
							closing: '¿Qué necesita este producto para convertirse en una plataforma?',
						},
						decision: {
							heading: 'La decisión',
							paragraphs: [
								'En lugar de continuar agregando complejidad sobre el prototipo, definimos una nueva base técnica orientada a producción.',
								'Diseñé la arquitectura de una plataforma multi-tenant sobre .NET, React y Azure, definiendo los límites entre servicios, las capacidades compartidas y la estrategia de evolución del producto. También diseñé servicios y herramientas para soportar los procesos de ingestión, procesamiento y generación de contenido mediante IA.',
							],
							closing:
								'El prototipo seguía siendo evidencia de lo que debía hacer el producto — pero ya no tenía que determinar cómo debía estar construido.',
						},
						rol: {
							heading: 'Mi rol',
							label: 'Technical Leader · Arquitectura de software',
							items: [
								'Definición de la arquitectura objetivo',
								'Estrategia de reimplementación',
								'Diseño de límites y responsabilidades del sistema',
								'Arquitectura multi-tenant',
								'Diseño de capacidades para ingestión y procesamiento',
								'Integración con workflows de datos e IA',
								'Fundamentos de infraestructura sobre Azure',
								'Acompañamiento técnico del equipo durante la implementación',
							],
						},
						resultado: {
							heading: 'Resultado',
							paragraphs: [
								'Kepler Coach pasó de ser un prototipo utilizado para demostrar una hipótesis a tener las bases de una plataforma multi-tenant orientada a producción, preparada para recibir distintas fuentes de contenido y transformarlas en cursos, módulos, actividades y evaluaciones.',
							],
							closing:
								'El cambio más importante no fue tecnológico: fue pasar de demostrar que algo podía construirse a diseñar cómo debía evolucionar como producto real.',
						},
					},
				},
				{
					slug: 'rollkall',
					name: 'RollKall',
					card: {
						headline: 'Modernizar sin detener el producto.',
						body: 'Migración progresiva de una aplicación legada hacia .NET moderno mientras el equipo continuaba entregando nuevas funcionalidades.',
						tag: 'LEGACY → MODERNIZACIÓN → DELIVERY',
					},
					detail: {
						tagline: 'Modernización · Arquitectura · .NET',
						intro: [
							'RollKall era una aplicación madura, con un backend de gran tamaño y múltiples clientes construidos sobre él. El sistema seguía evolucionando y el negocio necesitaba continuar entregando funcionalidades.',
							'Al mismo tiempo, parte importante de su núcleo tecnológico permanecía sobre .NET Framework y necesitaba avanzar hacia una plataforma .NET moderna.',
						],
						problema: {
							heading: 'El problema',
							paragraphs: [
								'Modernizar un sistema activo presenta una tensión difícil: la tecnología necesita cambiar, pero el negocio no puede detenerse mientras cambia.',
								'Una migración completa podía consumir meses de capacidad del equipo y congelar el roadmap. Postergarla indefinidamente significaba acumular restricciones sobre una base cada vez más costosa de evolucionar.',
							],
							closing: 'El problema no era simplemente migrar de framework: era modernizar y seguir entregando al mismo tiempo.',
						},
						decision: {
							heading: 'La decisión',
							paragraphs: [
								'La modernización se planteó de manera incremental. En lugar de detener el desarrollo para una gran reescritura, trabajamos sobre una migración progresiva hacia .NET moderno, usando las necesidades reales del producto como oportunidades para avanzar también sobre la arquitectura.',
								'Desde el Architecture Pod participé en la estrategia de migración hacia .NET 8, así como en la reimplementación y refactorización de procesos críticos del negocio.',
							],
							closing:
								'Esto permitió separar la modernización en decisiones más pequeñas y controlables, sin convertirla en un proyecto aislado del roadmap.',
						},
						rol: {
							heading: 'Mi rol',
							label: 'Architecture Pod · Technical Lead · Full-Stack Engineer',
							items: [
								'Estrategia de modernización de .NET',
								'Migración progresiva hacia .NET 8',
								'Revisión de arquitectura',
								'Reimplementación de procesos críticos',
								'Refactorización de componentes existentes',
								'Liderazgo técnico de iniciativas de producto',
								'Acompañamiento del equipo durante la transición',
							],
						},
						resultado: {
							heading: 'Resultado',
							paragraphs: [
								'La aplicación pudo avanzar hacia una base tecnológica moderna sin transformar la migración en una pausa prolongada del desarrollo de producto. Las nuevas funcionalidades continuaron llegando mientras partes estratégicas del sistema eran modernizadas progresivamente.',
							],
							closing:
								'La decisión no fue elegir entre delivery o modernización: fue diseñar una estrategia que permitiera sostener ambos.',
						},
					},
				},
				{
					slug: 'bavastro',
					name: 'Bavastro',
					card: {
						headline: 'Una operación de remates de punta a punta.',
						body: 'Un sistema que conecta el ingreso de un artículo en bodega con su publicación y una experiencia de pujas en tiempo real.',
						tag: 'BODEGA → PUBLICACIÓN → PUJA',
					},
					detail: {
						tagline: 'Producto · Operaciones · Tiempo real',
						intro: [
							'Para Bavastro, la mayor casa de remates de Uruguay, el software debía representar mucho más que un portal donde publicar productos.',
							'Un artículo ingresa a bodega, debe ser registrado, identificado y preparado para su venta. Después se publica, forma parte de un remate y finalmente recibe ofertas de compradores que participan en tiempo real.',
						],
						problema: {
							heading: 'El problema',
							paragraphs: [
								'El desafío era construir un sistema capaz de acompañar todo el ciclo operativo de un producto, desde su ingreso físico a la empresa hasta el momento en que alguien realiza una puja.',
								'Eso significaba conectar dos mundos que normalmente se resuelven por separado: la operación interna de la casa de remates y la experiencia digital del comprador.',
							],
							closing:
								'El sistema debía mantener una relación coherente entre inventario, catálogo, publicación, remates y ofertas en tiempo real.',
						},
						decision: {
							heading: 'La decisión',
							paragraphs: [
								'Diseñamos el producto alrededor del flujo real del negocio. En lugar de construir herramientas independientes para cada etapa, desarrollamos un sistema end-to-end donde un artículo mantiene continuidad durante todo su recorrido.',
							],
							list: [
								'Ingreso en bodega',
								'Registro y gestión',
								'Preparación para remate',
								'Publicación',
								'Portal del comprador',
								'Puja en tiempo real',
							],
							closing:
								'La arquitectura debía servir tanto a los procesos internos de Bavastro como a una experiencia pública donde múltiples compradores interactúan simultáneamente durante un remate.',
						},
						rol: {
							heading: 'Mi rol',
							label: 'Arquitectura · Diseño de producto · Desarrollo full-stack',
							items: [
								'Modelado del flujo operativo',
								'Diseño de arquitectura',
								'Desarrollo del sistema de gestión',
								'Integración entre back-office y publicación',
								'Portal público de remates',
								'Diseño de la experiencia de pujas',
								'Comunicación y actualización en tiempo real',
							],
						},
						resultado: {
							heading: 'Resultado',
							paragraphs: [
								'Bavastro obtuvo un sistema que conecta digitalmente el recorrido completo de un artículo: desde que entra a la bodega hasta que recibe una oferta durante un remate.',
							],
							closing:
								'Más que digitalizar una etapa aislada, el proyecto permitió tratar la operación como un único sistema conectado, manteniendo continuidad entre los procesos internos y la experiencia del comprador.',
						},
					},
				},
			],
		},

		sobreMi: {
			eyebrow: 'Brian Stefanovich',
			headline: 'Entre el negocio y la ingeniería.',
			paragraphs: [
				'Soy ingeniero de software y Technical Leader.',
				'He trabajado diseñando, construyendo y evolucionando sistemas en fintech, plataformas digitales, integraciones empresariales, productos basados en datos y aplicaciones utilizadas directamente por clientes.',
				'Mi experiencia combina arquitectura con desarrollo hands-on. Eso me permite moverme entre una conversación sobre negocio, producto y riesgo y el nivel técnico necesario para que una decisión pueda ejecutarse.',
			],
			intersectionLabel: 'Trabajo especialmente bien en la intersección entre:',
			intersection: ['negocio', 'producto', 'arquitectura', 'ingeniería'],
			closingNot: 'No busco introducir complejidad para demostrar sofisticación técnica.',
			closing: 'Busco encontrar la decisión adecuada para el problema, las restricciones y la etapa actual del negocio.',
			cta: 'Conoce mi experiencia',
		},

		fit: {
			eyebrow: 'Cuándo tiene sentido trabajar juntos',
			headline: 'No todos los problemas necesitan consultoría.',
			yesLabel: 'Probablemente podamos trabajar bien juntos si:',
			yes: [
				'tu empresa depende de un sistema que necesita evolucionar y no está claro cómo hacerlo',
				'una decisión tecnológica tiene consecuencias importantes para el negocio',
				'quieres construir un producto y reducir incertidumbre antes de comprometer una inversión importante',
				'tienes un equipo técnico que necesita acompañamiento senior',
				'quieres entender alternativas y trade-offs, no solamente recibir una recomendación cerrada',
				'buscas a alguien capaz de discutir estrategia y también entender profundamente la implementación',
			],
			noLabel: 'Probablemente no sea lo que necesitas si:',
			no: [
				'solo buscas aumentar temporalmente la cantidad de desarrolladores',
				'la solución ya está completamente definida y únicamente necesitas ejecución por horas',
				'necesitas una software factory capaz de incorporar un equipo grande de forma inmediata',
				'buscas aplicar una tecnología específica independientemente del problema',
				'esperas una solución antes de que exista suficiente contexto para entender el problema',
			],
			closing:
				'A veces la mejor recomendación es no reescribir, no construir o no agregar más arquitectura. Eso también forma parte del trabajo.',
		},

		faq: {
			eyebrow: 'FAQ',
			headline: 'Preguntas frecuentes.',
			items: [
				{
					q: '¿Qué ocurre en la primera conversación?',
					a: 'Nos conocemos y entiendo brevemente qué está ocurriendo, por qué importa y qué tipo de ayuda estás buscando. Si veo una forma en la que puedo ayudarte, definimos cuál podría ser el siguiente paso. Si no soy la persona adecuada para el problema, también te lo diré.',
				},
				{
					q: '¿La reunión gratuita incluye asesoría?',
					a: 'No. La conversación inicial no sustituye una consultoría, diagnóstico o auditoría. Su objetivo es obtener suficiente contexto para determinar si tiene sentido trabajar juntos.',
				},
				{
					q: '¿Tengo que saber qué servicio necesito?',
					a: 'No. No espero que diagnostiques el problema antes de contactarme. Cuéntame qué está ocurriendo. A partir de ahí podemos determinar qué tipo de intervención tiene sentido.',
				},
				{
					q: '¿Trabajas con equipos existentes?',
					a: 'Sí. Muchos de estos problemas no requieren reemplazar al equipo. Puedo trabajar junto a developers, Tech Leads, CTOs, producto, founders y proveedores existentes.',
				},
				{
					q: '¿Solo trabajas como consultor?',
					a: 'No. Dependiendo del problema puedo participar como consultor, arquitecto fraccional, Technical Leader o directamente en el desarrollo. La modalidad viene después de entender qué necesita el proyecto.',
				},
				{
					q: '¿Trabajas con una tecnología específica?',
					a: 'No parto de una tecnología determinada. Tengo experiencia principalmente en ecosistemas .NET, JavaScript/TypeScript, React, Python, Node.js, SQL y plataformas cloud. La selección tecnológica depende del sistema, el equipo, las restricciones y el negocio.',
				},
				{
					q: '¿Trabajas de forma remota?',
					a: 'Sí. Trabajo con empresas en Chile y con equipos internacionales de forma remota.',
				},
			],
		},

		ctaFinal: {
			eyebrow: 'Primera conversación',
			headline: 'Cuéntame qué está pasando.',
			body: 'Si el software está frenando a tu empresa, estás evaluando construir un nuevo producto o tu equipo necesita dirección técnica senior, podemos empezar por una conversación. 30 minutos para conocernos, entender brevemente el contexto y evaluar si puedo ayudarte.',
			cta: 'Conversemos 30 minutos',
			microcopy: 'Primera conversación sin costo · No sustituye una asesoría.',
		},
	},

	footer: {
		name: 'Brian Stefanovich',
		tagline: 'Arquitectura y consultoría de software.',
		promise: 'Claridad antes que complejidad.',
		servicesLabel: 'Servicios',
		services: [
			{ label: 'Sistemas existentes', href: '/#sistemas-existentes' },
			{ label: 'Nuevos negocios basados en software', href: '/#nuevos-negocios' },
			{ label: 'Arquitecto fraccional', href: '/#arquitecto-fraccional' },
		],
		linkedin: 'LinkedIn',
		email: 'Email',
		copyright: '© Brian Stefanovich · 2026',
	},

	contact: {
		title: 'Conversemos',
		intro:
			'Esta conversación sirve para entender brevemente tu situación y evaluar si tiene sentido trabajar juntos. No es una sesión de asesoría ni un diagnóstico.',
		situationLabel: '¿Qué describe mejor tu situación?',
		situations: [
			{ id: 'existing-system', label: 'Sistema existente' },
			{ id: 'new-product', label: 'Nuevo producto' },
			{ id: 'fractional', label: 'Arquitectura fraccional' },
			{ id: 'other', label: 'Otro' },
		],
		scheduleCta: 'Elegir horario',
		schedulePlaceholder: 'La agenda se conecta pronto. Mientras tanto, escríbeme directamente y coordinamos un horario.',
		emailCta: 'Escribir por email',
		close: 'Cerrar',
		back: 'Volver',
	},
} as const;
