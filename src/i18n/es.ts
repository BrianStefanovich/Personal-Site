/** Inline emphasis: plain strings render as-is, `{ b }` renders as <strong>. */
export type Rich = readonly (string | { readonly b: string })[];

export const es = {
	nav: {
		name: 'Brian Stefanovich',
		descriptor: 'Arquitectura y consultoría de software',
		homeLabel: 'Brian Stefanovich, inicio',
		links: [
			{ label: 'Servicios', href: '/#servicios' },
			{ label: 'Cómo trabajo', href: '/#como-trabajo' },
			{ label: 'Casos', href: '/cases' },
			{ label: 'Sobre Brian', href: '/#sobre-brian' },
		],
		cta: 'Agendar 30 minutos',
		openMenu: 'Abrir menú',
		closeMenu: 'Cerrar menú',
		themeLabel: 'Modo oscuro',
	},

	home: {
		meta: {
			title: 'Brian Stefanovich | Arquitectura y consultoría de software',
			description:
				'Aporto criterio técnico para decidir qué corregir, qué validar y cómo liderar entregas de software con consecuencias de negocio. Primera conversación sin costo.',
		},

		hero: {
			eyebrow: 'Arquitectura y consultoría de software',
			headline: ['Arquitectura de software para decisiones que afectan tu ', { b: 'negocio' }] satisfies Rich,
			subhead:
				'Soy Brian Stefanovich. Ayudo a empresas a recuperar el control de sistemas que frenan su operación, validar nuevas oportunidades con software y dar liderazgo técnico a proyectos en marcha.',
			method: 'Primero aclaro el problema y las alternativas; después acordamos qué conviene hacer y quién lo ejecuta.',
			cta: 'Agendar conversación de 30 minutos',
			microcopy: 'Primera conversación sin costo para entender el problema y definir el siguiente paso. No incluye una auditoría de código.',
			imageAlt: 'Brian Stefanovich',
		},

		prueba: {
			headline: 'Casos',
			cta: 'Ver todos los casos',
			roleLabel: 'Mi rol',
		},

		problema: {
			headline: '¿Qué está pasando en tu empresa?',
			subhead: 'El trabajo empieza por entender qué decisión necesita resolver la empresa.',
			decisionLabel: 'Decisión por tomar',
			situations: [
				{
					tag: 'Sistema existente',
					title: 'El sistema frena la operación y no está claro qué hacer.',
					decision: 'Qué corregir, qué conservar y si conviene modernizar, reemplazar o cambiar de proveedor.',
					link: 'Ver el diagnóstico de sistemas',
				},
				{
					tag: 'Nuevo negocio',
					title: 'Quieres abrir una línea de negocio basada en software.',
					decision: 'Qué incertidumbre probar primero y cuándo continuar, cambiar de rumbo o detenerte.',
					link: 'Ver la validación por etapas',
				},
				{
					tag: 'Liderazgo técnico',
					title: 'Un proyecto necesita liderazgo técnico que hoy nadie cubre.',
					decision: 'Qué decisiones, autoridad y dedicación debe asumir una persona responsable.',
					link: 'Ver el liderazgo fraccional',
				},
			],
		},

		servicios: {
			workLabel: 'En qué trabajo',
			getLabel: 'Qué obtienes',
			notIncludedLabel: 'Qué no incluye',
			caseLabel: 'Caso relacionado',
			faqHeadline: 'Preguntas sobre este servicio',
			relatedLabel: 'Otros servicios',
			items: [
				{
					id: 'sistemas-existentes',
					path: '/servicios/sistemas-existentes',
					navLabel: 'Sistemas existentes',
					model: 'Precio cerrado',
					meta: {
						title: 'Diagnóstico técnico de un sistema existente | Brian Stefanovich',
						description:
							'Evalúo un sistema del que depende tu negocio y comparo corregir, conservar, modernizar, reemplazar o cambiar de proveedor, con costos, riesgos y secuencia de intervención.',
					},
					title: 'Diagnóstico técnico y plan de intervención',
					lead: 'Recupera capacidad de decisión sobre un sistema del que depende tu negocio.',
					intro: ['Cuando tu empresa depende de un sistema que necesita evolucionar.'],
					work: [
						'Evaluación de arquitectura, mantenimiento, operación, integraciones y riesgos relevantes.',
						'Revisión de las propuestas del proveedor y de las dependencias que condicionan cada alternativa.',
						'Comparación de corregir, conservar, mejorar el trabajo con el proveedor, modernizar, reemplazar componentes o cambiar de proveedor.',
						'Recomendación priorizada con costos, dependencias y secuencia de intervención.',
					],
					get: 'Un diagnóstico sustentado y un plan útil por sí mismo para decidir qué hacer y en qué orden. El alcance del diagnóstico se acuerda con precio cerrado.',
					note: {
						lead: 'No tienes que contratarme para ejecutar la recomendación.',
						body: 'Puedes llevarla a tu equipo o a otro proveedor. Si quieres que acompañe o supervise técnicamente la ejecución, se define como una etapa independiente.',
					},
					notIncluded: [
						'Ejecutar la recomendación: cualquier implementación o acompañamiento posterior se acuerda por separado.',
						'Una migración definida de antemano: ninguna se propone sin inspeccionar antes el sistema.',
					],
					intent: 'existing-system',
					cta: 'Evaluar mi sistema',
					caseSlug: 'rollkall',
					caseNote: 'Una modernización llevada de forma progresiva mientras el equipo seguía entregando funcionalidades.',
					faq: [
						{
							q: '¿El diagnóstico me obliga a contratar la implementación?',
							a: 'No. El diagnóstico y el plan deben servirte aunque otro proveedor ejecute los cambios. Cualquier acompañamiento o implementación posterior se acuerda por separado.',
						},
						{
							q: '¿Trabajas con equipos existentes?',
							a: 'Sí. Muchos de estos problemas no requieren reemplazar al equipo. Puedo trabajar junto a desarrolladores, líderes técnicos, CTOs, equipos de producto, fundadores y proveedores existentes.',
						},
					],
				},
				{
					id: 'nuevos-negocios',
					path: '/servicios/nuevos-negocios',
					navLabel: 'Nuevos negocios con software',
					model: 'Por etapas',
					meta: {
						title: 'Validar un nuevo negocio con software antes de construirlo | Brian Stefanovich',
						description:
							'Diseño la validación de una nueva línea de negocio: hipótesis críticas, experimentos, alcance mínimo del prototipo y criterios para continuar, cambiar de rumbo o detenerse.',
					},
					title: 'Diseño de validación y plan de prototipo',
					lead: 'Decide qué incertidumbre resolver antes de comprometer una inversión mayor.',
					intro: [
						'Trabajo con empresas que ya operan, tienen clientes o conocen su industria y quieren abrir una nueva línea de negocio. Primero distinguimos qué necesita evidencia comercial, qué requiere validación técnica y qué puede esperar.',
					],
					work: [
						'Priorización de hipótesis sobre demanda, disposición a pagar, factibilidad, integración y costo de operación.',
						'Diseño del experimento adecuado: puede ser una prueba manual; no siempre hace falta construir software.',
						'Definición del alcance mínimo del prototipo cuando el software sea necesario.',
						'Presupuesto, dependencias y criterios acordados para continuar, modificar o detener la inversión.',
					],
					get: 'Un plan por etapas con hipótesis críticas, experimentos, alcance mínimo del prototipo si aplica, presupuesto y criterios de decisión. El trabajo se contrata por etapas para que cada inversión responda a la evidencia obtenida.',
					note: {
						lead: 'Una evaluación técnica, por sí sola, no demuestra que exista mercado.',
						body: 'Mi criterio ayuda a evaluar factibilidad técnica y a diseñar cómo obtener evidencia comercial.',
					},
					notIncluded: [
						'Una prueba de que existe mercado: esa evidencia sale de los experimentos comerciales, no de una evaluación técnica.',
						'Construir software por defecto: a veces la prueba adecuada es manual.',
					],
					intent: 'new-product',
					cta: 'Definir qué validar',
					caseSlug: 'kepler-coach',
					caseNote: 'Muestra mi trabajo de arquitectura de una plataforma; no es un caso de validación de demanda.',
					faq: [
						{
							q: '¿Puedes confirmar si existe mercado para una idea?',
							a: 'Puedo ayudarte a identificar incertidumbres, diseñar pruebas y evaluar factibilidad técnica. La existencia de mercado requiere evidencia comercial (por ejemplo, conversaciones, pruebas de demanda o disposición a pagar), y una evaluación técnica no la reemplaza.',
						},
					],
				},
				{
					id: 'arquitecto-fraccional',
					path: '/servicios/arquitecto-fraccional',
					navLabel: 'Arquitecto de software fraccional',
					model: 'Mensualidad',
					meta: {
						title: 'Arquitecto de software fraccional | Brian Stefanovich',
						description:
							'Asumo una responsabilidad técnica acordada dentro de un proyecto y su equipo: arquitectura, decisiones críticas y coordinación técnica con dedicación parcial y límites claros.',
					},
					title: 'Liderazgo técnico fraccional para una entrega definida',
					lead: 'Asumo una responsabilidad técnica acordada dentro de un proyecto y su equipo.',
					intro: [
						'La arquitectura fraccional describe la modalidad, no el alcance. Antes de comenzar acordamos qué decisiones y funciones delegas, mi autoridad, disponibilidad, dedicación y límites de responsabilidad.',
					],
					work: [
						'Arquitectura inicial y revisión de decisiones críticas.',
						'Estándares, acompañamiento del equipo y coordinación técnica con el cliente final.',
						'Alineamiento con quien aprueba el presupuesto y con quienes deben hacer cumplir las decisiones.',
						'Confirmación de que el equipo tiene capacidad de desarrollo suficiente para ejecutar el proyecto.',
					],
					get: 'Una responsabilidad y dedicación mensual definidas de antemano, con disponibilidad, autoridad, límites y entregables acordados. La mensualidad corresponde al compromiso pactado, no a una promesa abierta de cubrir cualquier función técnica.',
					note: {
						lead: 'Cubre una brecha de liderazgo,',
						body: 'no sustituye a las personas necesarias para desarrollar y entregar el software. Fraccional significa dedicación parcial y acotada, no un alcance abierto.',
					},
					notIncluded: [
						'Sustituir al equipo que desarrolla y entrega el software.',
						'Un alcance abierto: fraccional significa dedicación parcial y acotada.',
					],
					intent: 'fractional',
					cta: 'Conversar sobre liderazgo técnico',
					caseSlug: null,
					caseNote: null,
					faq: [
						{
							q: '¿También participas en el desarrollo?',
							a: 'Sí. Dependiendo del problema puedo participar como consultor, arquitecto de software fraccional, líder técnico o directamente en el desarrollo. La modalidad viene después de entender qué necesita el proyecto.',
						},
						{
							q: '¿Trabajas con equipos existentes?',
							a: 'Sí. Muchos de estos problemas no requieren reemplazar al equipo. Puedo trabajar junto a desarrolladores, líderes técnicos, CTOs, equipos de producto, fundadores y proveedores existentes.',
						},
					],
				},
			],
		},

		proceso: {
			headline: 'Cómo empieza el trabajo',
			steps: [
				{
					title: 'Una conversación de 30 minutos, sin costo',
					body: 'Entiendo el contexto, quién decide y qué necesitas conseguir, y evaluamos si puedo ayudarte. No incluye una auditoría de código ni obliga a contratar nada.',
				},
				{
					title: 'Acordamos un alcance concreto',
					body: 'Si tiene sentido trabajar juntos, definimos un diagnóstico a precio cerrado, una validación por etapas o una responsabilidad técnica mensual. Aquí empieza el servicio contratado.',
				},
				{
					title: 'Comparo alternativas y acompaño lo acordado',
					body: 'Evalúo las opciones con costos, riesgos y dependencias, recomiendo una dirección y, si lo acordamos, acompaño la ejecución. Revisamos el rumbo cuando aparece nueva evidencia.',
				},
			],
			closingTitle: 'Claridad antes que complejidad',
			closing:
				'Cada recomendación debe explicar qué resuelve, qué exige y qué consecuencias introduce. El diagnóstico es útil por sí mismo, incluso si otra persona ejecuta el plan.',
		},

		casos: {
			meta: {
				title: 'Casos | Brian Stefanovich',
				description: 'Decisiones técnicas llevadas a la práctica: el contexto, la responsabilidad que asumí y el cambio observado en cada caso.',
			},
			viewCase: 'Ver el caso',
			backLabel: 'Todos los casos',
			headline: 'Decisiones técnicas llevadas a la práctica',
			labels: {
				role: 'Mi rol',
				context: 'Contexto',
				responsibility: 'Responsabilidad',
				result: 'Resultado',
			},
			intro:
				'Los casos muestran el contexto, la responsabilidad que asumí y el cambio observado. No presento tecnologías como sustituto de explicar el trabajo.',
			scopeNote:
				'Esta ficha resume lo que puedo contar públicamente. Las alternativas que se evaluaron y sus trade-offs los explico en una conversación.',
			relatedLabel: 'Servicio relacionado',
			items: [
				{
					slug: 'kepler-coach',
					name: 'Kepler Coach',
					headline: 'De un prototipo a una plataforma para múltiples organizaciones',
					role: 'Líder de la reimplementación y de la arquitectura',
					outcome: 'Arquitectura para atender a múltiples organizaciones definida',
					context:
						'Kepler Coach necesitaba evolucionar un prototipo educativo basado en inteligencia artificial hacia una plataforma orientada a producción.',
					responsibility:
						'Lideré la estrategia de reimplementación y definí la arquitectura, los límites entre servicios y las bases de infraestructura.',
					result:
						'El trabajo dio forma a una plataforma capaz de convertir documentos, videos y otras fuentes en cursos estructurados, con una arquitectura para atender a múltiples organizaciones.',
					tags: '.NET, React, Azure',
					service: 'nuevos-negocios',
				},
				{
					slug: 'rollkall',
					name: 'RollKall',
					headline: 'Modernización mientras el equipo seguía entregando funcionalidades',
					role: 'Equipo de arquitectura; líder de la migración a .NET 8',
					outcome: 'Migración a .NET 8 sin frenar la entrega de funcionalidades',
					context: 'RollKall necesitaba modernizar una aplicación existente sin frenar el desarrollo del producto.',
					responsibility:
						'Como parte del equipo de arquitectura, lideré la migración a .NET 8 y trabajé en la reimplementación y refactorización de procesos críticos.',
					result: 'La modernización avanzó de forma progresiva mientras el equipo continuaba entregando nuevas funcionalidades.',
					tags: '.NET, modernización progresiva',
					service: 'sistemas-existentes',
				},
			],
			// Held back until Brian confirms his exact role and the state of the system; not rendered anywhere.
			pending: [
				{
					slug: 'bavastro',
					name: 'Bavastro',
					headline: 'Un sistema que conecta la operación de remates',
					context:
						'El proyecto reúne el ingreso de artículos en bodega, su publicación y las pujas en tiempo real dentro de un mismo sistema.',
					result: 'El desarrollo conecta las etapas de la operación con la experiencia de quienes participan en el remate.',
					tags: 'Bodega, publicación, pujas en tiempo real',
				},
			],
		},

		sobreBrian: {
			headline: 'Sobre Brian',
			subhead: 'Criterio de arquitectura conectado con la ejecución',
			intro:
				'Soy Brian Stefanovich, ingeniero de software y líder técnico. Trabajo en el diseño, la construcción y la evolución de sistemas, con experiencia en fintech, integraciones empresariales y plataformas utilizadas por clientes.',
			imageAlt: 'Brian Stefanovich sosteniendo un notebook',
			lead: 'Esa experiencia me permite conectar una conversación sobre negocio y riesgo con las decisiones de arquitectura y el trabajo de implementación. Puedo ayudarte a evaluar una inversión en software y acompañar al equipo que la lleva a la práctica.',
			casesCta: 'Ver los casos',
			areas: [
				{
					title: 'Negocio',
					body: 'Entender qué necesita conseguir la empresa y cómo el software puede contribuir.',
				},
				{
					title: 'Producto',
					body: 'Definir qué problema resolver, para quién y qué conviene construir primero.',
				},
				{
					title: 'Arquitectura',
					body: 'Elegir una dirección técnica teniendo en cuenta costos, restricciones y riesgos.',
				},
				{
					title: 'Ingeniería',
					body: 'Llevar las decisiones al sistema y revisar sus efectos durante la implementación.',
				},
			],
		},

		faq: {
			headline: 'Preguntas frecuentes',
			featured: {
				q: '¿Qué ocurre en la primera conversación?',
				a: 'Durante unos 30 minutos conversamos sobre el contexto, quién decide, qué necesitas conseguir y qué evidencia o capacidad de ejecución existe. Evaluamos si puedo ayudarte y cuál podría ser el siguiente paso. Si el problema queda fuera de mi experiencia, te lo diré.',
			},
			items: [
				{
					q: '¿La primera conversación tiene costo?',
					a: 'No. La primera conversación no tiene costo. No sustituye una consultoría, un diagnóstico ni una auditoría: su objetivo es obtener suficiente contexto para determinar si tiene sentido trabajar juntos.',
				},
				{
					q: '¿Tengo que saber qué servicio necesito?',
					a: 'No. No espero que diagnostiques el problema antes de contactarme. Cuéntame qué está ocurriendo. A partir de ahí podemos determinar qué tipo de intervención tiene sentido.',
				},
				{
					q: '¿Cómo se contrata cada tipo de trabajo?',
					a: 'Distingo el valor potencial de una oportunidad, lo que mi intervención puede influir de forma defendible y lo que la empresa puede realizar con su presupuesto, autoridad y capacidad de ejecución. Eso orienta la propuesta; el alcance y las dependencias sustentan el precio. El diagnóstico se cotiza a precio cerrado, la validación avanza por etapas y el liderazgo fraccional se acuerda con una mensualidad según dedicación, disponibilidad y responsabilidad.',
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

		contacto: {
			headline: 'Conversemos sobre la decisión que necesitas tomar',
			lead: 'Cuéntame qué está pasando, qué necesitas conseguir y cuál es la principal decisión pendiente.',
			intro:
				'No necesitas saber qué servicio corresponde. En 30 minutos evaluaremos si puedo ayudarte y cuál podría ser el siguiente paso. Si el problema queda fuera de mi experiencia, te lo diré.',
			cta: 'Agendar conversación de 30 minutos',
			emailLabel: 'O escríbeme directamente',
			linkedinLabel: 'LinkedIn de Brian Stefanovich',
		},
	},

	diagrams: {
		note: 'Esquema ilustrativo',
		hero: {
			label: 'Esquema: un sistema existente, una oportunidad nueva y un proyecto en marcha convergen en una decisión informada',
			caption:
				'Tres puntos de partida distintos (un sistema existente, una oportunidad nueva o un proyecto en marcha) terminan en la misma pregunta: qué decisión conviene tomar. Comparo las alternativas antes de recomendar una.',
			existing: 'Sistema existente',
			opportunity: 'Oportunidad nueva',
			project: 'Proyecto en marcha',
			compare: 'comparo',
			decision: 'Decisión informada',
		},
		existing: {
			label: 'Esquema: un problema pasa por un diagnóstico y llega a cinco alternativas equivalentes antes de la decisión',
			caption:
				'Un problema pasa por un diagnóstico y se compara con cinco alternativas: conservar, corregir, modernizar, reemplazar o cambiar de proveedor. Ninguna viene elegida de antemano; el diagnóstico es lo que permite decidir.',
			problem: 'Problema',
			diagnosis: 'Diagnóstico',
			options: ['Conservar', 'Corregir', 'Modernizar', 'Reemplazar', 'Cambiar proveedor'],
			decision: 'Decisión',
		},
		validation: {
			label: 'Mapa de validación: una hipótesis se prueba, produce evidencia y lleva a continuar, cambiar de rumbo o detenerse',
			caption:
				'Mapa de validación: una hipótesis se prueba, la prueba produce evidencia y la evidencia decide si se continúa, se cambia de rumbo o se detiene la inversión.',
			steps: ['Hipótesis', 'Prueba', 'Evidencia'],
			decision: 'Decisión',
			branch: 'según la evidencia',
			outcomes: ['Continuar', 'Cambiar', 'Detener'],
		},
		responsibility: {
			label: 'Esquema de responsabilidades: el decisor prioriza, Brian orienta al equipo, el equipo entrega y Brian avisa los riesgos',
			caption:
				'Quien decide el presupuesto prioriza; yo oriento la arquitectura del equipo; el equipo ejecuta y entrega; y aviso al decisor de los riesgos que aparezcan. Cada rol conserva su responsabilidad.',
			roles: [
				{ name: 'Decisor', sub: 'presupuesto' },
				{ name: 'Brian', sub: 'arquitectura' },
				{ name: 'Equipo', sub: 'ejecución' },
			],
			messages: ['prioriza', 'orienta', 'entrega', 'avisa riesgos'],
		},
	},

	footer: {
		servicesLabel: 'Servicios',
		resourcesLabel: 'Recursos',
		resources: [
			{ label: 'Casos', href: '/cases' },
			{ label: 'Cómo trabajo', href: '/#como-trabajo' },
			{ label: 'Preguntas frecuentes', href: '/#faq' },
			{ label: 'Contacto', href: '/#contacto' },
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
		calLoading: 'Cargando calendario...',
		calError: 'No se pudo cargar el calendario. Puedes reintentar o escribirme por email.',
		calRetry: 'Reintentar',
		emailCta: 'Escribir por email',
		close: 'Cerrar',
		back: 'Volver',
	},
} as const;
