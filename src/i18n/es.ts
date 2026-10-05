/** Inline emphasis: plain strings render as-is, `{ b }` renders as <strong>. */
export type Rich = readonly (string | { readonly b: string })[];

export const es = {
	nav: {
		name: 'Brian Stefanovich',
		descriptor: 'Arquitectura y consultoría de software',
		homeLabel: 'Brian Stefanovich, inicio',
		links: [
			{ label: 'Servicios', href: '#servicios' },
			{ label: 'Cómo trabajo', href: '#como-trabajo' },
			{ label: 'Casos', href: '#casos' },
			{ label: 'Sobre Brian', href: '#sobre-brian' },
		],
		openMenu: 'Abrir menú',
		closeMenu: 'Cerrar menú',
	},

	home: {
		meta: {
			title: 'Brian Stefanovich | Arquitectura y consultoría de software',
			description:
				'Ayudo a fundadores, dueños de negocio y líderes de tecnología a decidir qué construir, qué mejorar y cómo hacerlo viable. Primera conversación sin costo.',
		},

		hero: {
			eyebrow: 'Arquitectura y consultoría de software',
			headlineLines: ['Arquitectura de software', 'con visión de negocio'],
			subhead:
				'Ayudo a fundadores, dueños de negocio y líderes de tecnología a decidir qué construir, qué mejorar y cómo hacerlo viable.',
			cta: 'Conversemos 30 minutos',
			note: '30 min · Sin costo · No sustituye una asesoría',
			imageAlt: 'Brian Stefanovich',
		},

		presentacion: {
			eyebrow: 'Enfoque',
			headline: 'El mejor software comienza con mejores decisiones',
			paragraphs: [
				[
					{ b: 'Ofrezco arquitectura de software, consultoría tecnológica, desarrollo de software y liderazgo técnico' },
					' para empresas que necesitan mejorar sus sistemas, desarrollar nuevos productos digitales o resolver desafíos tecnológicos.',
				],
				[
					'Analizo tu negocio y tu tecnología para encontrar ',
					{ b: 'soluciones simples, eficientes y que puedan evolucionar' },
					', evaluando las distintas alternativas antes de tomar decisiones.',
				],
				[
					'Te ayudo a ',
					{
						b: 'modernizar sistemas, reducir deuda técnica, mejorar la arquitectura de software, integrar tecnologías y desarrollar nuevos productos digitales',
					},
					'.',
				],
				[{ b: 'Si tu software necesita evolucionar o tienes un nuevo proyecto tecnológico, conversemos.' }],
			] satisfies readonly Rich[],
			diagram: {
				label: 'Diagrama: un problema con cuatro caminos posibles y una decisión',
				problem: 'Problema',
				options: ['Refactorizar', 'Modernizar', 'Reemplazar', 'No cambiar'],
				decision: 'Decisión',
			},
		},

		problema: {
			eyebrow: 'Cuando el software empieza a pesar',
			headline: 'Cuando necesitas tomar una decisión sobre software',
			subhead: 'No todos los problemas de software se solucionan escribiendo más código.',
			paragraphs: [
				'Cuando un sistema comienza a frenar al negocio, aumentar los costos o dificultar la evolución del producto, el primer paso no necesariamente es desarrollar.',
				'Antes hay que entender qué está ocurriendo.',
			],
			question: '¿Te encuentras en alguna de estas situaciones?',
			doorLabel: 'Ver cómo ayudo',
			chain: {
				label: 'Cadena de consecuencias',
				steps: ['Más código', 'Más dependencias', 'Más riesgo', 'Más costo de cambio'],
				closing: 'A veces lo primero que necesitamos cambiar no es el software. Es la decisión.',
			},
			situations: [
				{
					title: 'El sistema funciona pero cada cambio cuesta más.',
					body: 'Los cambios tardan más, las integraciones fallan o el equipo dedica demasiado tiempo a resolver problemas del sistema. Necesitas entender las causas y decidir qué conviene mejorar primero.',
				},
				{
					title: 'Tienes una oportunidad de negocio y necesitas definir qué construir.',
					body: 'Quieres crear un producto basado en software, pero todavía hay dudas sobre el alcance, la viabilidad o la inversión. Necesitas decidir qué validar antes de comprometer meses de desarrollo.',
				},
				{
					title: 'Tu equipo necesita dirección técnica senior',
					body: 'El equipo avanza, pero las decisiones de arquitectura y tecnología requieren una mirada que conecte el trabajo diario con la evolución del producto.',
				},
			],
		},

		servicios: {
			eyebrow: 'Qué hago',
			headline: 'Servicios',
			subhead: 'Arquitectura y consultoría para las decisiones de tu negocio',
			intro:
				'Puedes comenzar con un problema concreto, una idea de producto o una decisión pendiente. Según el contexto, trabajo en un diagnóstico puntual, acompaño al equipo de forma recurrente o participo en la implementación.',
			workLabel: 'En qué trabajo',
			getLabel: 'Qué obtienes',
			itemLabel: 'Servicio',
			diagrams: {
				existing: {
					label: 'Diagrama: un sistema enredado, con una dependencia de riesgo, que evoluciona hacia una dirección clara',
					dependency: 'Dependencia',
					risk: 'Riesgo',
					direction: 'Dirección',
				},
				newProduct: {
					label: 'Diagrama: de una oportunidad a una hipótesis que se valida antes de construir un MVP',
					opportunity: 'Oportunidad',
					hypothesis: 'Hipótesis',
					validate: 'Validar',
					build: 'Construir',
					mvp: 'MVP',
				},
				fractional: {
					label: 'Diagrama: producto, equipo y negocio convergen en una decisión que orienta la arquitectura',
					product: 'Producto',
					team: 'Equipo',
					business: 'Negocio',
					decision: 'Decisión',
					architecture: 'Arquitectura',
				},
			},
			items: [
				{
					id: 'sistemas-existentes',
					phase: '01',
					cta: 'Conversemos sobre tu sistema',
					title: 'Arquitectura y modernización de sistemas existentes',
					lead: 'Cuando el software funciona, pero evolucionarlo se volvió cada vez más difícil.',
					intro: ['Cuando tu empresa depende de un sistema que necesita evolucionar.'],
					work: [
						'Diagnóstico de arquitectura, deuda técnica y problemas de rendimiento.',
						'Revisión de integraciones, dependencias y riesgos operativos.',
						'Evaluación de alternativas de modernización.',
						'Priorización de cambios y definición de una hoja de ruta.',
					],
					get: [
						'Un diagnóstico con los principales problemas y riesgos, una recomendación con sus razones y un plan de cambios ordenado por prioridad. El objetivo es que puedas decidir dónde invertir y cómo avanzar teniendo en cuenta la continuidad de la operación.',
						'Cuando el proyecto requiere desarrollo, puedo acompañar al equipo o participar en la implementación. Ese alcance se acuerda por separado.',
					],
					intent: 'existing-system',
				},
				{
					id: 'nuevos-negocios',
					phase: '02',
					cta: 'Conversemos sobre tu idea',
					title: 'Consultoría estratégica para productos y negocios basados en software',
					lead: 'Cuando necesitas decidir qué producto construir y por dónde comenzar.',
					intro: [
						'Trabajo contigo para entender la oportunidad de negocio y convertirla en decisiones de producto y tecnología. Identifico qué hipótesis conviene validar, qué necesita incluir una primera versión y qué restricciones pueden condicionar su desarrollo.',
					],
					work: [
						'Revisión del modelo de negocio y las necesidades de quienes usarán el producto.',
						'Definición del alcance inicial y de lo que conviene validar primero.',
						'Evaluación de desarrollar, comprar o integrar soluciones existentes.',
						'Análisis de riesgos, arquitectura inicial y prioridades de desarrollo.',
					],
					get: [
						'Una dirección de producto y tecnología: alcance inicial, supuestos por validar, alternativas con sus costos y riesgos, y una hoja de ruta para la primera etapa. Esto permite evaluar la inversión antes de comprometer el desarrollo.',
					],
					intent: 'new-product',
				},
				{
					id: 'arquitecto-fraccional',
					phase: '03',
					cta: 'Evaluemos si tiene sentido',
					title: 'Arquitecto de software fraccional',
					lead: 'Dirección técnica senior con dedicación parcial y acompañamiento recurrente.',
					intro: [
						'Me integro al trabajo de tu equipo para revisar decisiones de arquitectura, orientar prioridades técnicas y resolver dudas que afectan la evolución del producto. La dedicación, la frecuencia de las reuniones y las responsabilidades se acuerdan según lo que necesita la empresa.',
					],
					work: [
						'Revisión de arquitectura y decisiones de diseño.',
						'Evaluación de tecnologías, integraciones y deuda técnica.',
						'Definición de criterios y estándares junto al equipo.',
						'Seguimiento de la hoja de ruta tecnológica y apoyo en decisiones críticas.',
					],
					get: [
						'Recomendaciones documentadas, criterios compartidos para decidir y seguimiento de las prioridades técnicas. A diferencia de una consultoría puntual, el acompañamiento continúa mientras el equipo implementa y aparecen nuevas decisiones.',
					],
					intent: 'fractional',
				},
			],
		},

		decision: {
			eyebrow: 'Cómo pienso',
			headline: 'La arquitectura es una decisión, no un objetivo.',
			body: [
				'No existe una arquitectura perfecta ni una tecnología que sea la respuesta para todos los negocios.',
				'El punto de partida es entender qué necesita la empresa, qué existe actualmente y qué restricciones deben considerarse.',
			],
			questions: [
				{ label: 'Negocio', question: '¿Qué necesita conseguir la empresa y por qué importa?' },
				{ label: 'Sistema', question: '¿Qué capacidades, restricciones y riesgos existen actualmente?' },
				{ label: 'Alternativas', question: '¿Qué opciones reales tenemos para resolver el problema?' },
				{ label: 'Trade-offs', question: '¿Qué ganamos, qué sacrificamos y qué estamos decidiendo postergar?', consequence: true },
				{ label: 'Decisión', question: '¿Qué tiene sentido hacer ahora?' },
			],
		},

		proceso: {
			eyebrow: 'Método',
			phaseLabel: 'Fase',
			headline: 'Cómo trabajo',
			subhead: 'Diagnosticar antes de prescribir',
			intro:
				'Cada proyecto comienza por entender qué necesita conseguir la empresa y qué impide avanzar. La profundidad del análisis y mi participación se ajustan al servicio y al alcance acordado.',
			steps: [
				{
					phase: '01',
					title: 'Entender el contexto',
					body: 'Converso con las personas involucradas y reviso el producto o sistema para identificar objetivos, restricciones y riesgos. El resultado es una definición compartida del problema y de las decisiones que necesitamos tomar.',
				},
				{
					phase: '02',
					title: 'Comparar alternativas y definir una dirección',
					body: 'Evalúo las opciones considerando costo, esfuerzo, riesgo y consecuencias para el negocio. Dejo explícito qué permite cada alternativa y qué limita. El resultado es una recomendación fundamentada y una hoja de ruta con prioridades.',
				},
				{
					phase: '03',
					title: 'Acompañar la ejecución',
					body: 'Según el alcance, reviso decisiones con el equipo, doy seguimiento a la arquitectura o participo en el desarrollo. El objetivo es llevar la dirección acordada al software y revisarla cuando aparece nueva información.',
				},
			],
			closingTitle: 'Claridad antes que complejidad',
			closing:
				'La arquitectura debe responder al problema y a la etapa del negocio. Cada recomendación tiene que explicar qué resuelve, cuánto exige y qué consecuencias introduce.',
		},

		casos: {
			eyebrow: 'Evidencia',
			headline: 'Casos',
			subhead: 'Decisiones de arquitectura llevadas a la práctica',
			intro:
				'Estos proyectos muestran cómo conecto el contexto del producto con el diseño del sistema y el trabajo de implementación.',
			items: [
				{
					name: 'Kepler Coach',
					headline: 'De un prototipo a una plataforma para múltiples organizaciones',
					body: [
						'Kepler Coach necesitaba evolucionar un prototipo educativo basado en inteligencia artificial hacia una plataforma orientada a producción. Lideré la estrategia de reimplementación y definí la arquitectura, los límites entre servicios y las bases de infraestructura.',
						'El trabajo dio forma a una plataforma capaz de convertir documentos, videos y otras fuentes en cursos estructurados, con una arquitectura para atender a múltiples organizaciones.',
					],
					tags: '.NET, React, Azure',
				},
				{
					name: 'RollKall',
					headline: 'Modernización mientras el equipo seguía entregando funcionalidades',
					body: [
						'RollKall necesitaba modernizar una aplicación existente sin frenar el desarrollo del producto. Como parte del equipo de arquitectura, lideré la migración a .NET 8 y trabajé en la reimplementación y refactorización de procesos críticos.',
						'La modernización avanzó de forma progresiva mientras el equipo continuaba entregando nuevas funcionalidades.',
					],
					tags: '.NET, modernización progresiva',
				},
				{
					name: 'Bavastro',
					headline: 'Un sistema que conecta la operación de remates',
					body: [
						'El proyecto reúne el ingreso de artículos en bodega, su publicación y las pujas en tiempo real dentro de un mismo sistema.',
						'El desarrollo conecta las etapas de la operación con la experiencia de quienes participan en el remate.',
					],
					tags: 'Bodega, publicación, pujas en tiempo real',
				},
			],
		},

		sobreBrian: {
			eyebrow: 'Perfil',
			headline: 'Sobre Brian',
			subhead: 'Experiencia en arquitectura e implementación de software',
			paragraphs: [
				'Soy Brian Stefanovich, ingeniero de software y líder técnico. Trabajo en el diseño, la construcción y la evolución de sistemas, con experiencia en fintech, integraciones empresariales y plataformas utilizadas por clientes.',
				'En Kepler Coach lideré la evolución de un prototipo hacia una plataforma para múltiples organizaciones. En RollKall participé en el equipo de arquitectura y lideré una migración tecnológica mientras continuaba el desarrollo del producto.',
			],
			imageAlt: 'Brian Stefanovich sosteniendo un notebook',
			lead: 'Esa experiencia me permite conectar una conversación sobre negocio y riesgo con las decisiones de arquitectura y el trabajo de implementación. Puedo ayudarte a evaluar una inversión en software y acompañar al equipo que la lleva a la práctica.',
			areas: [
				{ title: 'Negocio', body: 'Entender qué necesita conseguir la empresa y cómo el software puede contribuir.' },
				{ title: 'Producto', body: 'Definir qué problema resolver, para quién y qué conviene construir primero.' },
				{ title: 'Arquitectura', body: 'Elegir una dirección técnica teniendo en cuenta costos, restricciones y riesgos.' },
				{ title: 'Ingeniería', body: 'Llevar las decisiones al sistema y revisar sus efectos durante la implementación.' },
			],
		},

		faq: {
			eyebrow: 'Antes de contactarme',
			headline: 'Preguntas frecuentes',
			featured: {
				q: '¿Qué ocurre en la primera conversación?',
				a: 'Durante unos 30 minutos conversamos sobre tu situación, lo que necesitas conseguir y la decisión que tienes pendiente. Evaluamos si puedo ayudarte y qué tipo de trabajo tendría sentido como siguiente paso. Si el problema queda fuera de mi experiencia, te lo diré.',
			},
			items: [
				{
					q: '¿La primera conversación tiene costo?',
					a: 'No. La primera conversación no tiene costo. No sustituye una consultoría, un diagnóstico ni una auditoría: su objetivo es obtener suficiente contexto para determinar si tiene sentido trabajar juntos.',
				},
				{
					q: '¿También participas en el desarrollo?',
					a: 'Sí. Dependiendo del problema puedo participar como consultor, arquitecto de software fraccional, líder técnico o directamente en el desarrollo. La modalidad viene después de entender qué necesita el proyecto.',
				},
				{
					q: '¿Tengo que saber qué servicio necesito?',
					a: 'No. No espero que diagnostiques el problema antes de contactarme. Cuéntame qué está ocurriendo. A partir de ahí podemos determinar qué tipo de intervención tiene sentido.',
				},
				{
					q: '¿Trabajas con una tecnología específica?',
					a: 'No parto de una tecnología determinada. Tengo experiencia principalmente en ecosistemas .NET, JavaScript/TypeScript, React, Python, Node.js, SQL y plataformas cloud. La selección tecnológica depende del sistema, el equipo, las restricciones y el negocio.',
				},
				{
					q: '¿Trabajas con equipos existentes?',
					a: 'Sí. Muchos de estos problemas no requieren reemplazar al equipo. Puedo trabajar junto a desarrolladores, líderes técnicos, CTOs, equipos de producto, fundadores y proveedores existentes.',
				},
				{
					q: '¿Trabajas de forma remota?',
					a: 'Sí. Trabajo con empresas en Chile y con equipos internacionales de forma remota.',
				},
			],
			expandLabel: 'Mostrar respuesta',
			collapseLabel: 'Ocultar respuesta',
		},

		ctaFinal: {
			eyebrow: '30 min · Sin costo',
			headline: 'Primera conversación',
			subhead: 'Conversemos sobre la decisión que necesitas tomar',
			paragraphs: [
				'Si necesitas mejorar un sistema, evaluar un producto de software o darle dirección técnica a tu equipo, podemos comenzar por entender el contexto.',
				'Cuéntame qué está pasando, qué necesitas conseguir y cuál es la principal decisión pendiente. En 30 minutos evaluaremos si puedo ayudarte y cuál podría ser el siguiente paso.',
			],
			cta: 'Conversemos 30 minutos',
			imageAlt: 'Brian Stefanovich',
		},

		contacto: {
			eyebrow: 'Por escrito',
			headline: 'Contacto',
			subhead: 'Cuéntame qué está pasando.',
			intro:
				'Puedes escribirme aunque todavía no tengas definido el servicio. Comencemos por el problema o la oportunidad que quieres evaluar.',
			directLabel: 'Escríbeme directamente',
			linkedinLabel: 'LinkedIn de Brian Stefanovich',
			form: {
				name: 'Nombre',
				email: 'Correo',
				phone: 'Teléfono',
				message: 'Mensaje',
				submit: 'Enviar',
				subject: 'Contacto desde brianstefanovich.com',
				consentData: 'Acepto y consiento el tratamiento de mis datos personales para gestionar mi solicitud de contacto.',
				consentMarketing: 'Acepto recibir comunicaciones comerciales y boletines informativos de Brian Stefanovich.',
				sent: 'Se abrió tu correo con el mensaje listo para enviar. Si no se abrió, escríbeme a',
				required: 'Campo obligatorio',
			},
		},
	},

	footer: {
		servicesLabel: 'Servicios',
		services: [
			{ label: 'Sistemas existentes', href: '#sistemas-existentes' },
			{ label: 'Nuevos productos y negocios', href: '#nuevos-negocios' },
			{ label: 'Arquitecto de software fraccional', href: '#arquitecto-fraccional' },
		],
		resourcesLabel: 'Recursos',
		resources: [
			{ label: 'Casos', href: '#casos' },
			{ label: 'Cómo trabajo', href: '#como-trabajo' },
			{ label: 'Preguntas frecuentes', href: '#faq' },
			{ label: 'Contacto', href: '#contacto' },
		],
		attributes: ['Riguroso', 'Intencional'],
		tagline: 'Claridad antes que complejidad',
		copyright: '© 2026 Brian Stefanovich',
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
		emailCta: 'Escribir por email',
		close: 'Cerrar',
		back: 'Volver',
	},
} as const;
