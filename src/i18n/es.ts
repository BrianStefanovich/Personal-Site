const contactFormContent = {
	textFields: [
		{ name: 'nombre', label: 'Nombre', type: 'text', required: true, autoComplete: 'name' },
		{ name: 'empresa', label: 'Empresa', type: 'text', required: true, autoComplete: 'organization' },
		{ name: 'cargo', label: 'Cargo', type: 'text', required: true, autoComplete: 'organization-title' },
		{ name: 'correo', label: 'Correo de trabajo', type: 'email', required: true, autoComplete: 'email' },
		{ name: 'sitio', label: 'Sitio web de la empresa (opcional)', type: 'text', required: false, autoComplete: 'url' },
	],
	needsLabel: '¿Qué necesitas resolver?',
	needsOptions: [
		{ value: 'sistema-existente', label: 'Modernizar un sistema existente' },
		{ value: 'nuevo-producto', label: 'Diseñar o construir un nuevo producto' },
		{ value: 'arquitectura-riesgo', label: 'Evaluar arquitectura o riesgo' },
		{ value: 'liderazgo-fraccional', label: 'Liderazgo técnico fraccional' },
		{ value: 'otro', label: 'Otro desafío de software' },
	],
	textareas: [
		{ name: 'situacion', label: 'Cuéntame brevemente qué está ocurriendo' },
		{ name: 'urgencia', label: '¿Por qué es importante resolverlo ahora?' },
	],
	trailingFields: [
		{ name: 'plazo', label: 'Plazo esperado', type: 'text', required: false, autoComplete: 'off' },
		{ name: 'presupuesto', label: 'Presupuesto orientativo (opcional)', type: 'text', required: false, autoComplete: 'off' },
	],
	submit: 'Enviar contexto',
	disclaimer: 'Tus datos se usan únicamente para responder esta consulta.',
	submitted: 'Gracias. Revisaré la información y responderé con claridad sobre si puedo ayudarte y cuál sería el siguiente paso.',
};

export const es = {
	brand: {
		name: 'Brian Stefanovich',
		fullName: 'Brian Stefanovich Consulting',
		tagline: 'Decisiones claras. Software bien diseñado.',
		disciplines: 'Arquitectura · Modernización · Productos de software',
		location: 'Santiago de Chile · Trabajo remoto',
		motto: 'Clarity before complexity.',
	},
	nav: {
		links: [
			{ label: 'Inicio', href: '/' },
			{
				label: 'Servicios',
				children: [
					{ label: 'Sistemas existentes', href: '/sistemas-existentes' },
					{ label: 'Nuevos productos', href: '/nuevos-productos' },
					{ label: 'Diagnóstico ejecutivo', href: '/diagnostico' },
				],
			},
			{ label: 'Cómo trabajo', href: '/#como-trabajo' },
			{ label: 'Experiencia', href: '/#experiencia' },
			{ label: 'Sobre mí', href: '/sobre-mi' },
		],
		cta: 'Hablemos de tu software',
		openMenu: 'Abrir menú',
		closeMenu: 'Cerrar menú',
		openServicios: 'Abrir submenú de Servicios',
		closeServicios: 'Cerrar submenú de Servicios',
	},
	footer: {
		servicios: [
			{ label: 'Sistemas existentes', href: '/sistemas-existentes' },
			{ label: 'Nuevos productos', href: '/nuevos-productos' },
			{ label: 'Diagnóstico ejecutivo', href: '/diagnostico' },
		],
		informacion: [
			{ label: 'Cómo trabajo', href: '/#como-trabajo' },
			{ label: 'Experiencia', href: '/#experiencia' },
			{ label: 'Sobre mí', href: '/sobre-mi' },
			{ label: 'Contacto', href: '/contacto' },
		],
		contacto: {
			location: 'Santiago de Chile',
			remoto: 'Trabajo remoto',
			linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
			correo: { label: 'Correo electrónico', href: 'mailto:hola@example.com' },
		},
		legal: [
			{ label: 'Política de privacidad', href: '/privacidad' },
			{ label: 'Términos del sitio', href: '/terminos' },
		],
		copyright: '© 2026 Brian Stefanovich Consulting',
	},

	// ---------------------------------------------------------------------
	// Inicio
	// ---------------------------------------------------------------------
	home: {
		meta: {
			title: 'Brian Stefanovich Consulting | Arquitectura y productos de software',
			description:
				'Consultoría senior para diagnosticar y modernizar sistemas existentes, diseñar nuevos productos y liderar decisiones de arquitectura y ejecución.',
		},
		hero: {
			eyebrow: 'Consultoría senior de arquitectura, modernización y productos de software',
			headingLines: ['Decisiones claras.', 'Software bien diseñado.'],
			body: 'Ayudo a empresas a tomar mejores decisiones sobre su software: diagnostico y modernizo sistemas que frenan la operación, y convierto ideas o prototipos en productos viables, con una arquitectura sólida, un roadmap realista y acompañamiento senior para ejecutar el cambio con seguridad.',
			cta: 'Hablemos de tu software',
			ctaHref: '/contacto',
			secondaryCta: 'Explorar servicios',
			secondaryCtaHref: '/#servicios',
			note: 'Sesión de encaje de 25 minutos. Revisaremos tu situación y definiremos si puedo ayudarte. No es una auditoría técnica ni una llamada para venderte horas.',
			imageAlt: 'Brian Stefanovich con un notebook',
			supports: ['Atención senior directa', 'Arquitectura y ejecución', 'Santiago de Chile · Trabajo remoto'],
		},
		problemas: {
			number: '01',
			short: 'Problema',
			long: 'Cuando el software comienza a limitar el negocio',
			heading: 'La decisión difícil no suele ser qué tecnología usar.',
			body: [
				'El problema aparece cuando no está claro qué conviene cambiar, cuánto riesgo implica y cómo avanzar sin interrumpir lo que ya funciona. En productos nuevos ocurre algo parecido: construir demasiado pronto puede convertir supuestos de negocio en meses de desarrollo difícil de sostener.',
			],
			columns: [
				{
					id: 'existentes',
					label: 'Sistemas existentes',
					title: 'Situaciones reconocibles en sistemas existentes',
					items: [
						{
							icon: { src: '/images/icon-problema-existente-1.svg', width: 20, height: 16 },
							title: 'El sistema funciona, pero cada cambio cuesta más',
							description:
								'Las entregas se vuelven lentas, los errores reaparecen y solo unas pocas personas comprenden las partes críticas. Reescribir todo parece demasiado riesgoso, pero continuar igual también tiene un costo.',
						},
						{
							icon: { src: '/images/icon-problema-existente-2.svg', width: 20, height: 20 },
							title: 'La operación depende de software frágil',
							description:
								'Hay procesos manuales, integraciones inestables, poca observabilidad o infraestructura que genera incertidumbre. El equipo reacciona a urgencias, pero no consigue reducir el riesgo estructural.',
						},
					],
				},
				{
					id: 'nuevos',
					label: 'Nuevos productos',
					title: 'Situaciones reconocibles en nuevos productos',
					items: [
						{
							icon: { src: '/images/icon-problema-nuevo-1.svg', width: 11, height: 18 },
							title: 'Existe una idea o un prototipo, pero no un plan de producto',
							description:
								'La oportunidad parece real, aunque todavía faltan decisiones sobre alcance, arquitectura, prioridades, costos y ruta de lanzamiento.',
						},
						{
							icon: { src: '/images/icon-problema-nuevo-2.svg', width: 20, height: 18 },
							title: 'Hay muchas opiniones técnicas y poca claridad ejecutiva',
							description:
								'El equipo, los proveedores y el negocio proponen caminos distintos. Falta una evaluación independiente que conecte alternativas técnicas con impacto, riesgo y capacidad de ejecución.',
						},
					],
				},
			],
			callout:
				'Mi trabajo comienza antes de elegir una solución: hago visible el problema, ordeno las decisiones y convierto la dirección acordada en un plan ejecutable.',
		},
		dosRutas: {
			number: '02',
			short: 'Servicios',
			long: 'Dos puntos de partida',
			heading: '¿Qué necesitas resolver?',
			helpLabel: 'Incluye, según el caso',
			rutas: [
				{
					subtitle: '01. Sistemas existentes',
					title: 'Modernizar sin poner en riesgo la operación.',
					description:
						'Para empresas con plataformas críticas, deuda técnica, problemas de escalabilidad, entregas lentas o integraciones difíciles de sostener. Evalúo el estado actual, priorizo riesgos y diseño una evolución gradual que el equipo pueda ejecutar.',
					items: [
						'Diagnóstico de arquitectura y riesgos.',
						'Estrategia de modernización o migración.',
						'Revisión de calidad, infraestructura y entrega.',
						'Roadmap priorizado por impacto y dependencia.',
						'Liderazgo técnico y acompañamiento de ejecución.',
					],
					href: '/sistemas-existentes',
					linkLabel: 'Explorar sistemas existentes →',
				},
				{
					subtitle: '02. Nuevos productos',
					title: 'Convertir una oportunidad en un producto viable.',
					description:
						'Para empresas y fundadores que necesitan transformar una idea, un proceso o un prototipo en software listo para operar. Aterrizo el alcance, las decisiones técnicas y la ruta de construcción antes de comprometer una inversión mayor.',
					items: [
						'Discovery técnico y definición de alcance.',
						'Arquitectura y decisiones de plataforma.',
						'Roadmap, hitos y estimación de escenarios.',
						'Prototipo o primera versión operativa.',
						'Preparación para crecimiento, operación y traspaso.',
					],
					href: '/nuevos-productos',
					linkLabel: 'Explorar nuevos productos →',
				},
			],
		},
		diagnostico: {
			number: '03',
			short: 'Diagnóstico',
			long: 'Una forma concreta de empezar',
			heading: 'Primero entendemos. Después decidimos qué vale la pena cambiar.',
			offerName: 'Diagnóstico Ejecutivo de Riesgo y Modernización',
			body: [
				'Una evaluación independiente y de alcance fijo para entender el estado real de un sistema, identificar los riesgos que afectan al negocio y definir una ruta de mejora defendible antes de iniciar una migración, una reescritura o una contratación mayor.',
				'Te llevas: una visión compartida del problema, las decisiones prioritarias y un plan de acción que puede ejecutar tu equipo, un proveedor o Brian Stefanovich Consulting.',
			],
			detailsLabel: 'Modelo',
			details: [
				{ term: 'Modelo:', value: 'alcance y precio fijo.' },
				{ term: 'Duración típica:', value: '7 a 10 días hábiles.' },
				{ term: 'Inversión:', value: '45 UF + IVA.' },
			],
			includesLabel: 'Qué incluye',
			includes: [
				'Reunión de contexto con responsables de negocio y tecnología.',
				'Revisión focalizada de arquitectura, código, infraestructura y proceso de entrega.',
				'Mapa de riesgos, dependencias y cuellos de botella.',
				'Alternativas con trade-offs, impacto y orden recomendado.',
				'Roadmap ejecutivo de corto y mediano plazo.',
				'Sesión de presentación y resolución de preguntas.',
			],
			cta: 'Evaluar si este diagnóstico aplica',
			ctaHref: '/contacto',
			note: 'El diagnóstico es un entregable independiente. No obliga a contratar una implementación posterior.',
		},
		comoTrabajo: {
			number: '04',
			short: 'Proceso',
			long: 'De la incertidumbre a la ejecución',
			heading: 'Un proceso que hace visibles las decisiones.',
			steps: [
				{
					number: '01',
					title: 'Entender',
					description:
						'Partimos del contexto del negocio, las restricciones reales y la razón por la que el problema importa ahora. Resultado: un problema bien encuadrado y criterios de éxito compartidos.',
				},
				{
					number: '02',
					title: 'Diagnosticar',
					description:
						'Reviso la arquitectura, los flujos críticos, la infraestructura, el proceso de entrega y las dependencias relevantes para separar síntomas de causas. Resultado: riesgos y oportunidades priorizados con evidencia.',
				},
				{
					number: '03',
					title: 'Decidir',
					description:
						'Comparamos alternativas, costos, trade-offs y secuencias posibles. No toda deuda debe pagarse ni toda idea debe construirse. Resultado: una dirección técnica defendible.',
				},
				{
					number: '04',
					title: 'Diseñar',
					description:
						'Traduzco la decisión en arquitectura, hitos, responsables, criterios de calidad y un roadmap que pueda ejecutarse. Resultado: un plan concreto, no una recomendación abstracta.',
				},
				{
					number: '05',
					title: 'Ejecutar y transferir',
					description:
						'Puedo liderar la implementación, trabajar junto al equipo existente o acompañar a otro proveedor. Las decisiones, diagramas y fundamentos quedan documentados. Resultado: avance verificable y menor dependencia de una persona o proveedor.',
				},
			],
		},
		continuidad: {
			number: '05',
			short: 'Modalidades',
			long: 'Formas de trabajar',
			heading: 'El modelo depende de la claridad del problema.',
			options: [
				{
					title: 'Diagnóstico de alcance fijo',
					description:
						'Para comprender un sistema, reducir incertidumbre y priorizar antes de intervenir. Modalidad: entregables, plazo y precio acordados desde el inicio.',
				},
				{
					title: 'Blueprint técnico de producto',
					description:
						'Para convertir una idea o prototipo en arquitectura, alcance, roadmap y plan de lanzamiento. Modalidad: alcance y precio fijo después de la sesión de encaje.',
				},
				{
					title: 'Liderazgo técnico fraccional',
					description:
						'Para empresas que necesitan criterio senior recurrente sin incorporar todavía un rol ejecutivo a tiempo completo. Modalidad: retainer mensual con objetivos, capacidad y responsabilidades acordadas.',
				},
				{
					title: 'Ejecución por hitos',
					description:
						'Para modernizaciones, migraciones o productos con resultados verificables por etapa. Modalidad: alcance progresivo, entregables definidos y revisión al cierre de cada hito.',
				},
			],
			note: 'No vendo una bolsa indefinida de horas. Cuando el alcance puede definirse, trabajo por resultados y entregables; cuando la naturaleza del problema exige continuidad, acordamos capacidad, responsabilidades y criterios de avance.',
		},
		experiencia: {
			number: '06',
			short: 'Experiencia',
			long: 'Experiencia aplicada',
			heading: 'Arquitectura con responsabilidad sobre la ejecución.',
			intro:
				'Mi experiencia combina liderazgo técnico, desarrollo hands-on y evolución de sistemas en fintech, plataformas de datos, productos con IA, integraciones empresariales y aplicaciones orientadas a clientes.',
			casos: [
				{
					title: 'Modernización sin detener la entrega',
					text: 'Participé en la evolución de una plataforma de gran escala con API .NET y clientes web y móviles. Desde un equipo de arquitectura, lideré la migración a .NET 8 mientras el producto continuaba entregando, además de trabajar en la reimplementación de procesos críticos y liderar técnicamente un portal orientado a clientes.',
					demuestra: 'Modernización progresiva, continuidad operativa y coordinación técnica transversal.',
				},
				{
					title: 'De prototipo de IA a plataforma orientada a producción',
					text: 'Lideré la transformación de un prototipo EdTech construido en Next.js hacia una plataforma multi-tenant basada en .NET, React y Azure. Definí arquitectura, límites de servicios, estrategia de reimplementación, pipelines de infraestructura y herramientas para flujos de ingestión y generación de contenido.',
					demuestra: 'Prototype-to-production, arquitectura de producto y liderazgo entre aplicación, datos e infraestructura.',
				},
				{
					title: 'Liderazgo técnico en soluciones fintech',
					text: 'He liderado el diseño y la entrega de soluciones de software financiero, definiendo estándares técnicos y acompañando a equipos de ingeniería para sostener calidad, consistencia y evolución de largo plazo.',
					demuestra: 'Criterio arquitectónico, estándares compartidos y acompañamiento de equipos.',
				},
				{
					title: 'Integraciones y sistemas intensivos en datos',
					text: 'También he trabajado en herramientas de presupuestación con grandes volúmenes de datos, integraciones para gestión y auditoría de permisos, soluciones CMS para instituciones financieras y pipelines de datos para validación biométrica.',
					demuestra: 'Capacidad para comprender procesos complejos y convertirlos en sistemas operables.',
				},
			],
			linkLabel: 'Ver experiencia ampliada →',
			linkHref: '/experiencia',
		},
		diferenciales: {
			number: '07',
			short: 'Diferencial',
			long: 'Por qué Brian Stefanovich Consulting',
			heading: 'La persona que ayuda a decidir también puede ayudar a ejecutar.',
			items: [
				{
					title: 'Atención senior directa',
					description:
						'Trabajas directamente conmigo durante el diagnóstico, el diseño y el acompañamiento. No hay una venta senior seguida de un traspaso automático a perfiles junior.',
				},
				{
					title: 'Independencia de la solución',
					description:
						'Una buena recomendación puede ser modernizar, reemplazar, integrar, simplificar, posponer o no construir. La tecnología se elige después de comprender el problema.',
				},
				{
					title: 'Arquitectura conectada con la operación',
					description:
						'Las decisiones consideran despliegue, observabilidad, seguridad, capacidad del equipo, costos, continuidad y mantenimiento; no solo la forma ideal del código.',
				},
				{
					title: 'Capacidad hands-on',
					description:
						'Puedo pasar del análisis a diagramas, decisiones de arquitectura, prototipos, revisión de código y acompañamiento de implementación. Esto mantiene continuidad entre la recomendación y la realidad técnica.',
				},
				{
					title: 'Transferencia de criterio',
					description:
						'El objetivo no es volverme indispensable. Dejo decisiones, fundamentos y próximos pasos comprensibles para que el equipo pueda continuar con mayor autonomía.',
				},
			],
		},
		encaje: {
			number: '08',
			short: 'Encaje',
			long: 'Cuándo tiene sentido hablar',
			heading: 'Trabajo mejor cuando hay una decisión importante detrás del software.',
			fit: {
				title: 'Probablemente encajemos si...',
				items: [
					'El software es relevante para la operación, los ingresos o una nueva línea de negocio.',
					'Existe incertidumbre sobre modernizar, migrar, reescribir o continuar.',
					'Necesitas conectar una decisión de negocio con arquitectura y ejecución.',
					'Tu equipo necesita dirección senior temporal o una evaluación independiente.',
					'Quieres empezar por comprender y priorizar, no por contratar capacidad sin contexto.',
				],
			},
			noFit: {
				title: 'Probablemente no sea el servicio adecuado si...',
				items: [
					'Solo buscas cubrir horas de desarrollo o aumentar headcount temporal.',
					'Necesitas un sitio web simple, diseño visual aislado o una tarea técnica puntual sin contexto.',
					'La solución y el alcance ya están completamente definidos y solo buscas el precio por hora más bajo.',
					'Esperas una promesa de plazo o costo antes de permitir una evaluación mínima del problema.',
				],
			},
			closing: 'Si tu necesidad requiere otro tipo de especialista, te lo diré con claridad durante la sesión de encaje.',
		},
		sobreBrian: {
			number: '09',
			short: 'Sobre mí',
			long: 'Quién está detrás',
			heading: 'Profundidad técnica para decisiones que también son de negocio.',
			imageAlt: 'Retrato de Brian Stefanovich',
			paragraphs: [
				'Soy Brian Stefanovich, technical leader y consultor de software radicado en Santiago de Chile. He trabajado diseñando, construyendo y modernizando plataformas fintech, productos con IA, integraciones empresariales, sistemas intensivos en datos y aplicaciones orientadas a clientes.',
				'Mi forma de trabajar combina arquitectura, pensamiento sistémico y ejecución hands-on. Me interesa comprender qué necesita realmente el negocio, hacer explícitos los trade-offs y diseñar soluciones que el equipo pueda operar y evolucionar, no solo presentar.',
				'Trabajo directamente con responsables de negocio, líderes técnicos, equipos internos y proveedores. Cuando el desafío supera mi especialidad o capacidad, lo hago visible desde el inicio.',
			],
			links: [{ label: 'Conocer mi experiencia y forma de trabajo →', href: '/sobre-mi', icon: '/images/icon-external.svg' }],
		},
		faq: {
			number: '10',
			label: 'Preguntas frecuentes',
			heading: 'Respuestas claras antes de empezar.',
			items: [
				{
					question: '¿La sesión de encaje es una consultoría gratuita?',
					answer:
						'No. Es una conversación de 25 minutos para entender el contexto, el desafío y la urgencia, y evaluar si mi experiencia puede ayudarte. No incluye revisión de código, auditoría ni diseño de una solución.',
				},
				{
					question: '¿Solo haces consultoría o también participas en la implementación?',
					answer:
						'Puedo trabajar en ambas etapas. Según el caso, el resultado puede ser un diagnóstico independiente, un blueprint técnico, liderazgo de la ejecución o una implementación por hitos. También puedo acompañar a tu equipo o proveedor sin reemplazarlo.',
				},
				{
					question: '¿Trabajas con sistemas que ya están en producción?',
					answer:
						'Sí. Una parte central de mi experiencia es evolucionar software existente sin perder de vista la continuidad operativa, las restricciones del equipo y el riesgo de cada cambio.',
				},
				{
					question: '¿Puedes ayudar si todavía solo tenemos una idea o un prototipo?',
					answer:
						'Sí, siempre que exista un problema de negocio suficientemente claro para evaluar. El primer objetivo será definir qué necesita validarse, qué conviene construir y qué debería esperar.',
				},
				{
					question: '¿Trabajas por hora?',
					answer:
						'No como modalidad principal. Prefiero alcance y precio fijo cuando los entregables pueden definirse, ejecución por hitos cuando el trabajo evoluciona por etapas y retainer cuando se requiere liderazgo continuo.',
				},
				{
					question: '¿Con qué tecnologías trabajas?',
					answer:
						'Mi experiencia principal incluye .NET, TypeScript, Node.js, React, React Native, Python, SQL y entornos cloud como Azure y AWS. La elección tecnológica se presenta como una consecuencia del contexto, no como el punto de partida de la conversación.',
				},
				{
					question: '¿Puedes trabajar con nuestro equipo o proveedor actual?',
					answer:
						'Sí. Puedo aportar una evaluación independiente, definir arquitectura y estándares, revisar decisiones o acompañar la implementación. El objetivo es aumentar la claridad y la capacidad del equipo, no crear una dependencia innecesaria.',
				},
				{
					question: '¿Cómo se formaliza la colaboración?',
					answer:
						'La modalidad es contractor, con un alcance, entregables, responsabilidades y condiciones de pago acordados por escrito. Emito las facturas correspondientes según los plazos definidos en la propuesta.',
				},
				{
					question: '¿Qué ocurre si no eres la persona adecuada?',
					answer:
						'Te lo diré durante la sesión de encaje. Cuando sea posible, también indicaré qué perfil o especialidad parece más apropiado para el problema.',
				},
			],
		},
		ctaFinal: {
			eyebrow: 'El siguiente paso',
			heading: 'Antes de comprometer una inversión mayor, aclaremos la decisión.',
			text: 'Cuéntame qué está ocurriendo con tu sistema o qué producto quieres construir. En 25 minutos revisaremos el contexto, los objetivos y los principales riesgos para determinar si tiene sentido trabajar juntos y cuál debería ser el siguiente paso.',
			ctaLabel: 'Hablemos de tu software',
			ctaHref: '/contacto',
			microcopy: 'Sin auditoría improvisada ni discurso de venta. Si no existe encaje, lo sabrás con claridad.',
		},
	},

	// ---------------------------------------------------------------------
	// Sistemas existentes
	// ---------------------------------------------------------------------
	sistemasExistentes: {
		meta: {
			title: 'Modernización y arquitectura de software | Brian Stefanovich',
			description:
				'Diagnóstico, estrategia y liderazgo técnico para modernizar sistemas, reducir riesgo y evolucionar software sin detener la operación.',
		},
		hero: {
			eyebrow: 'Arquitectura y modernización',
			headingLines: ['Evoluciona tu software sin', 'detener lo que ya funciona.'],
			body: 'Ayudo a empresas a comprender sistemas complejos, priorizar riesgos y diseñar una modernización gradual que mejore la capacidad de entrega, la operación y la evolución del producto sin convertir una reescritura en una apuesta a ciegas.',
			cta: 'Evaluar mi sistema',
			ctaHref: '/contacto',
			note: 'Sesión de encaje de 25 minutos. No requiere preparar una presentación técnica.',
			imageAlt: 'Brian Stefanovich con un notebook',
		},
		situaciones: {
			heading: 'El problema rara vez es solamente "deuda técnica".',
			items: [
				'Cada entrega tarda más y aumenta el riesgo de regresión.',
				'La plataforma depende de componentes o versiones difíciles de sostener.',
				'Existen cuellos de botella de rendimiento, despliegue o escalabilidad.',
				'Integraciones críticas fallan o requieren intervención manual frecuente.',
				'El conocimiento está concentrado en pocas personas.',
				'No está claro si conviene refactorizar, migrar, reemplazar o reescribir.',
				'El negocio necesita crecer, pero la arquitectura actual condiciona el roadmap.',
			],
		},
		queHago: {
			heading: 'Qué hago',
			steps: [
				{
					number: '01',
					title: 'Diagnóstico de arquitectura y riesgo',
					description: 'Hago visible el estado actual, los puntos críticos, las dependencias y el costo de continuar sin cambios.',
				},
				{
					number: '02',
					title: 'Estrategia de modernización',
					description:
						'Diseño una transición progresiva, con criterios para decidir qué preservar, qué aislar, qué reemplazar y en qué secuencia.',
				},
				{
					number: '03',
					title: 'Arquitectura de evolución',
					description:
						'Defino límites, patrones de integración, datos, infraestructura, observabilidad y estándares necesarios para sostener el cambio.',
				},
				{
					number: '04',
					title: 'Liderazgo de ejecución',
					description: 'Acompaño al equipo en las decisiones, revisiones y hitos que convierten el roadmap en mejoras operativas reales.',
				},
			],
		},
		ofertaRecomendada: {
			heading: 'Empieza con un diagnóstico independiente.',
			text: 'El Diagnóstico Ejecutivo de Riesgo y Modernización concentra el análisis en 7 a 10 días hábiles y termina con un mapa de riesgos, alternativas y roadmap priorizado.',
			facts: [
				{ label: 'Inversión', value: '45 UF + IVA' },
				{ label: 'Modalidad', value: 'alcance fijo' },
				{ label: 'Independencia', value: 'puedes ejecutar el resultado con tu equipo, otro proveedor o conmigo.' },
			],
			ctaLabel: 'Ver el diagnóstico ejecutivo',
			ctaHref: '/diagnostico',
		},
		resultado: {
			heading: 'Resultado esperado',
			items: [
				'Lenguaje compartido entre negocio y tecnología.',
				'Riesgos diferenciados de preferencias técnicas.',
				'Decisiones documentadas con trade-offs explícitos.',
				'Roadmap ordenado por impacto, dependencia y urgencia.',
				'Próximo paso suficientemente claro para presupuestar y ejecutar.',
			],
		},
		ctaFinal: {
			heading: 'Modernizar no comienza reescribiendo. Comienza decidiendo bien.',
			ctaLabel: 'Hablemos de tu sistema',
			ctaHref: '/contacto',
		},
	},

	// ---------------------------------------------------------------------
	// Nuevos productos
	// ---------------------------------------------------------------------
	nuevosProductos: {
		meta: {
			title: 'Arquitectura y desarrollo de productos de software | Brian Stefanovich',
			description:
				'Convierte una idea o prototipo en un producto viable con discovery técnico, arquitectura, roadmap y ejecución por hitos.',
		},
		hero: {
			eyebrow: 'Discovery, arquitectura y producto',
			headingLines: ['Convierte una idea o prototipo en un', 'producto que pueda operar y evolucionar.'],
			body: 'Ayudo a fundadores y empresas a traducir una oportunidad de negocio en alcance, arquitectura, hitos y una primera versión viable, evitando que los supuestos iniciales se conviertan demasiado pronto en complejidad técnica y costos difíciles de revertir.',
			cta: 'Revisar mi producto',
			ctaHref: '/contacto',
			note: 'Sesión de encaje de 25 minutos. No requiere preparar una presentación técnica.',
			imageAlt: 'Brian Stefanovich con un notebook',
		},
		cuandoTieneSentido: {
			heading: 'Cuándo tiene sentido',
			items: [
				'Existe una idea con contexto de negocio, pero falta convertirla en un plan técnico.',
				'Hay un prototipo que demuestra el concepto, pero todavía no está preparado para producción.',
				'Debes decidir qué construir internamente, tercerizar o integrar.',
				'Necesitas estimar escenarios antes de comprometer presupuesto y equipo.',
				'El producto requiere coordinar aplicación, datos, infraestructura o IA.',
				'Un proveedor propone construir, pero necesitas criterio técnico independiente.',
			],
		},
		blueprint: {
			heading: 'Un plan de construcción antes de una inversión mayor.',
			body: [
				'Te llevas: una definición técnica y operativa que conecta el problema de negocio con el primer alcance, las decisiones arquitectónicas y una secuencia realista de entrega.',
			],
			deliverablesLabel: 'Puede incluir',
			deliverables: [
				'Alcance inicial y criterios de exclusión.',
				'Flujos principales y requisitos no funcionales.',
				'Arquitectura, límites e integraciones.',
				'Estrategia de datos, infraestructura y seguridad.',
				'Decisiones de construir, comprar o integrar.',
				'Roadmap de hitos y riesgos.',
				'Escenarios de equipo, costo y plazo.',
				'Plan de lanzamiento, operación y traspaso.',
			],
			modelLabel: 'Modalidad y horizonte',
			model:
				'Alcance y precio fijo definidos después de la sesión de encaje. Horizonte típico: 1 a 3 semanas, según complejidad y acceso a información.',
			cta: 'Hablemos de tu producto',
			ctaHref: '/contacto',
		},
		proceso: {
			heading: 'De la idea a producción',
			steps: [
				{
					number: '01',
					title: 'Encuadre y validación de supuestos',
					description: 'Definimos el problema, el usuario, la evidencia disponible y qué todavía no conviene dar por cierto.',
				},
				{
					number: '02',
					title: 'Alcance y arquitectura',
					description: 'Traducimos la oportunidad en flujos, componentes, integraciones, restricciones y decisiones de plataforma.',
				},
				{
					number: '03',
					title: 'Primera versión',
					description: 'Construimos el menor alcance capaz de operar, aprender y sostener la siguiente decisión.',
				},
				{
					number: '04',
					title: 'Evolución por evidencia',
					description:
						'Los siguientes hitos responden a uso, operación y aprendizaje real, no solo a una lista inicial de funcionalidades.',
				},
			],
		},
		queNoPrometo: {
			heading: 'Qué no prometo',
			items: [
				'Un presupuesto definitivo sin comprender el alcance y los riesgos.',
				'Escalabilidad ilimitada desde el primer día.',
				'Construir todas las funcionalidades imaginadas para "aprovechar" el proyecto.',
				'Resolver falta de validación comercial únicamente con tecnología.',
			],
		},
		ctaFinal: {
			heading: 'Construir mejor comienza por decidir qué merece ser construido.',
			ctaLabel: 'Hablemos de tu producto',
			ctaHref: '/contacto',
		},
	},

	// ---------------------------------------------------------------------
	// Diagnóstico ejecutivo
	// ---------------------------------------------------------------------
	diagnosticoPage: {
		meta: {
			title: 'Diagnóstico de riesgo y modernización de software | Brian Stefanovich',
			description:
				'Evaluación de alcance fijo para comprender riesgos, comparar alternativas y definir un roadmap de modernización antes de invertir.',
		},
		hero: {
			eyebrow: 'Alcance fijo · 7 a 10 días hábiles',
			headingLines: ['Comprende el riesgo antes', 'de elegir la solución.'],
			body: 'El Diagnóstico Ejecutivo de Riesgo y Modernización transforma señales dispersas —entregas lentas, incidentes, dependencia de personas, costos o límites de arquitectura— en decisiones priorizadas y una ruta de acción defendible.',
			note: 'Inversión: 45 UF + IVA',
			cta: 'Evaluar si aplica a mi sistema',
			ctaHref: '/contacto',
			imageAlt: 'Brian Stefanovich con un notebook',
		},
		paraQuienEs: {
			heading: 'Para quién es',
			items: [
				'Responsables de negocio que necesitan decidir una inversión técnica.',
				'CTOs o líderes de ingeniería que requieren una evaluación externa.',
				'Empresas que consideran una migración, modernización o reescritura.',
				'Equipos que necesitan alinear prioridades antes de contratar o cambiar proveedor.',
			],
		},
		preguntas: {
			heading: 'Preguntas que busca responder',
			items: [
				'¿Cuál es el riesgo real de continuar como estamos?',
				'¿Qué problemas son estructurales y cuáles son síntomas?',
				'¿Qué conviene preservar, aislar, reemplazar o postergar?',
				'¿Qué secuencia reduce más riesgo con la menor interrupción?',
				'¿Qué capacidades, roles e inversión exige la ruta recomendada?',
			],
		},
		proceso: {
			heading: 'Proceso',
			steps: [
				{
					number: 'Día 1',
					title: 'Encuadre',
					description: 'Objetivos, restricciones, síntomas, decisiones pendientes y acceso a información.',
				},
				{
					number: 'Días 2 a 6',
					title: 'Revisión focalizada',
					description:
						'Arquitectura, código, infraestructura, datos, entrega y conversaciones con personas clave, según el alcance acordado.',
				},
				{
					number: 'Días 7 a 8',
					title: 'Síntesis y alternativas',
					description: 'Mapa de riesgos, causas, dependencias, escenarios y trade-offs.',
				},
				{
					number: 'Días 9 a 10',
					title: 'Roadmap y presentación',
					description: 'Recomendación, secuencia de acción, responsables, próximos hitos y sesión ejecutiva.',
				},
			],
		},
		entregables: {
			heading: 'Entregables',
			items: [
				'Resumen ejecutivo.',
				'Mapa de riesgos priorizado.',
				'Hallazgos y evidencia relevante.',
				'Opciones consideradas y trade-offs.',
				'Arquitectura objetivo o principios de evolución, cuando corresponda.',
				'Roadmap de 30, 60 y 90 días.',
				'Recomendaciones de ejecución y gobernanza.',
				'Sesión de presentación y preguntas.',
			],
		},
		limites: {
			heading: 'Límites',
			text: 'El diagnóstico no es una auditoría exhaustiva de seguridad, una certificación, una estimación contractual de toda la modernización ni una revisión línea por línea del código. El alcance se concentra en las decisiones de mayor impacto.',
		},
		despues: {
			heading: 'Después del diagnóstico',
			text: 'Puedes ejecutar el roadmap con tu equipo, con un proveedor actual o conmigo. Si continuamos, la siguiente etapa se cotiza por separado y se organiza mediante hitos o liderazgo técnico fraccional.',
		},
		ctaFinal: {
			heading: 'Obtén una dirección clara antes de comprometer el cambio.',
			ctaLabel: 'Agendar sesión de encaje',
			ctaHref: '/contacto',
		},
	},

	// ---------------------------------------------------------------------
	// Sobre mí
	// ---------------------------------------------------------------------
	sobreMi: {
		meta: {
			title: 'Brian Stefanovich | Technical leader y consultor de software',
			description:
				'Experiencia en arquitectura, modernización, fintech, productos con IA, sistemas de datos y liderazgo técnico hands-on.',
		},
		hero: {
			eyebrow: 'Brian Stefanovich',
			headingLines: ['Arquitectura, liderazgo técnico y', 'ejecución en una misma conversación.'],
			body: 'Soy technical leader y consultor de software. Trabajo con empresas que necesitan comprender sistemas complejos, reducir riesgo técnico o convertir una oportunidad de negocio en un producto viable.',
			imageAlt: 'Brian Stefanovich con un notebook',
		},
		enfoque: {
			heading: 'Mi enfoque',
			paragraphs: [
				'No entiendo la arquitectura como una colección de diagramas ni la modernización como una reescritura automática. Son procesos de decisión: qué debe cambiar, por qué, en qué orden y con qué capacidad real del negocio y del equipo.',
				'Combino pensamiento sistémico, profundidad técnica y experiencia hands-on para conectar esas decisiones con código, datos, infraestructura, procesos de entrega y operación. Mi objetivo es que el resultado sea comprensible, ejecutable y transferible.',
			],
		},
		experienciaList: {
			heading: 'Experiencia',
			items: [
				'Plataformas fintech y software financiero.',
				'Modernización de sistemas .NET y aplicaciones críticas.',
				'Productos con IA y plataformas multi-tenant.',
				'Aplicaciones web y móviles orientadas a clientes.',
				'Integraciones empresariales y sistemas intensivos en datos.',
				'Arquitectura cloud, infraestructura y pipelines de entrega.',
			],
			trayectoria:
				'Mi trayectoria incluye liderazgo técnico en Vangwe y Kepler Coach, trabajo de arquitectura y modernización en CrunchLoop, e implementación de productos, integraciones y soluciones de datos en distintos contextos empresariales.',
		},
		comoEsTrabajar: {
			heading: 'Cómo es trabajar conmigo',
			items: [
				'Pregunto antes de prescribir.',
				'Explico alternativas y trade-offs en lenguaje comprensible.',
				'Puedo entrar en detalle técnico sin perder el objetivo de negocio.',
				'Documento decisiones y fundamentos, no solo conclusiones.',
				'Señalo límites, riesgos e incertidumbres desde el inicio.',
				'Busco que el equipo quede con mayor capacidad, no con mayor dependencia.',
			],
		},
		cta: {
			heading: 'Si hay una decisión importante detrás de tu software, conversemos.',
			ctaLabel: 'Hablemos de tu software',
			ctaHref: '/contacto',
		},
	},

	// ---------------------------------------------------------------------
	// Contacto
	// ---------------------------------------------------------------------
	contactoPage: {
		meta: {
			title: 'Hablemos de tu software | Brian Stefanovich Consulting',
			description: 'Reserva una sesión de encaje de 25 minutos para revisar tu desafío de software y definir si tiene sentido trabajar juntos.',
		},
		hero: {
			eyebrow: 'Sesión de encaje',
			headingLines: ['Hablemos de tu software.'],
			body: 'Conversemos durante 25 minutos para conocer tu situación, entender el desafío y evaluar si mi experiencia puede ayudarte. Revisaremos el contexto, los objetivos y los principales riesgos para definir con claridad el siguiente paso.',
			note: 'No es una auditoría técnica ni una llamada de venta. Si el problema requiere otro tipo de especialista, te lo diré con claridad.',
			cta: 'Reservar sesión de encaje',
			ctaHref: '#formulario',
			imageAlt: 'Brian Stefanovich con un notebook',
		},
		queConvieneTraer: {
			heading: 'Qué conviene traer',
			intro: 'No necesitas preparar una presentación. Es suficiente con poder explicar:',
			items: [
				'Qué está ocurriendo y por qué importa ahora.',
				'Qué impacto tiene en el negocio, el equipo o los clientes.',
				'Qué se ha intentado o decidido hasta el momento.',
				'Qué decisión necesitas tomar.',
				'Quiénes participan de esa decisión.',
			],
		},
		form: {
			heading: 'Formulario alternativo',
			body: 'Si prefieres no usar Calendly, cuéntame tu contexto por escrito y te responderé por correo.',
			info: 'Revisaré tu mensaje y te diré con claridad si puedo ayudarte y cuál sería el siguiente paso.',
			...contactFormContent,
		},
	},

	// ---------------------------------------------------------------------
	// Fase 2 — Experiencia (casos ampliados)
	// ---------------------------------------------------------------------
	experienciaPage: {
		meta: {
			title: 'Experiencia | Brian Stefanovich Consulting',
			description: 'Casos ampliados de arquitectura, modernización y construcción de productos de software.',
		},
		hero: {
			eyebrow: 'Experiencia aplicada',
			headingLines: ['Arquitectura con responsabilidad', 'sobre la ejecución.'],
			body: 'Estos casos amplían, con más contexto técnico, los proyectos donde he liderado decisiones de arquitectura, modernización y construcción de producto.',
			imageAlt: 'Brian Stefanovich con un notebook',
		},
		intro:
			'Mi experiencia combina liderazgo técnico, desarrollo hands-on y evolución de sistemas en fintech, plataformas de datos, productos con IA, integraciones empresariales y aplicaciones orientadas a clientes. A continuación, más contexto sobre cada caso.',
		casos: [
			{
				title: 'Modernización sin detener la entrega',
				text: 'Participé en la evolución de una plataforma de gran escala con API .NET y clientes web y móviles. Desde un equipo de arquitectura, lideré la migración a .NET 8 mientras el producto continuaba entregando funcionalidad al negocio. En paralelo, trabajé en la reimplementación de procesos críticos que exigían compatibilidad con el sistema en producción y lideré técnicamente un portal orientado a clientes, coordinando prioridades entre equipos de plataforma y de producto.',
				demuestra: 'Modernización progresiva, continuidad operativa y coordinación técnica transversal.',
			},
			{
				title: 'De prototipo de IA a plataforma orientada a producción',
				text: 'Lideré la transformación de un prototipo EdTech construido en Next.js hacia una plataforma multi-tenant basada en .NET, React y Azure. Definí la arquitectura objetivo, los límites de cada servicio, la estrategia de reimplementación progresiva, los pipelines de infraestructura como código y las herramientas necesarias para los flujos de ingestión y generación de contenido con modelos de IA.',
				demuestra: 'Prototype-to-production, arquitectura de producto y liderazgo entre aplicación, datos e infraestructura.',
			},
			{
				title: 'Liderazgo técnico en soluciones fintech',
				text: 'He liderado el diseño y la entrega de soluciones de software financiero, definiendo estándares técnicos de arquitectura, calidad y seguridad, y acompañando a equipos de ingeniería para sostener consistencia y evolución de largo plazo en productos con alta exigencia regulatoria y operativa.',
				demuestra: 'Criterio arquitectónico, estándares compartidos y acompañamiento de equipos.',
			},
			{
				title: 'Integraciones y sistemas intensivos en datos',
				text: 'También he trabajado en herramientas de presupuestación con grandes volúmenes de datos, integraciones para gestión y auditoría de permisos, soluciones CMS para instituciones financieras y pipelines de datos para validación biométrica, conectando procesos de negocio complejos con sistemas operables y mantenibles.',
				demuestra: 'Capacidad para comprender procesos complejos y convertirlos en sistemas operables.',
			},
		],
		nota:
			'Nota editorial: hasta contar con autorización y métricas verificables de cada cliente, esta sección se presenta como experiencia aplicada y no como casos de éxito cuantificados.',
		cta: {
			heading: 'Si tu desafío se parece a alguno de estos casos, conversemos.',
			ctaLabel: 'Hablemos de tu software',
			ctaHref: '/contacto',
		},
	},

	// ---------------------------------------------------------------------
	// Fase 3 — Recursos (stub)
	// ---------------------------------------------------------------------
	recursosPage: {
		meta: {
			title: 'Recursos | Brian Stefanovich Consulting',
			description: 'Artículos, guías y herramientas de decisión sobre arquitectura, modernización y construcción de productos de software.',
		},
		hero: {
			eyebrow: 'Recursos',
			headingLines: ['Artículos, guías y', 'herramientas de decisión.'],
			body: 'Esta sección reunirá contenido práctico para evaluar modernización, arquitectura y decisiones de producto. Está en construcción: iré publicando aquí guías y artículos a medida que estén listos.',
			imageAlt: 'Brian Stefanovich con un notebook',
		},
		cta: {
			heading: 'Mientras tanto, conversemos directamente sobre tu situación.',
			ctaLabel: 'Hablemos de tu software',
			ctaHref: '/contacto',
		},
	},

	// ---------------------------------------------------------------------
	// Fase 3 — Liderazgo técnico fraccional (stub)
	// ---------------------------------------------------------------------
	liderazgoFraccionalPage: {
		meta: {
			title: 'Liderazgo técnico fraccional | Brian Stefanovich Consulting',
			description: 'Criterio técnico senior recurrente para empresas que aún no necesitan un rol ejecutivo a tiempo completo.',
		},
		hero: {
			eyebrow: 'Liderazgo técnico fraccional',
			headingLines: ['Criterio técnico senior, sin', 'incorporar un rol a tiempo completo.'],
			body: 'Para empresas que necesitan dirección arquitectónica recurrente, revisión de decisiones técnicas y acompañamiento a equipos internos o proveedores, sin todavía justificar un CTO o líder de ingeniería a tiempo completo.',
			imageAlt: 'Brian Stefanovich con un notebook',
		},
		intro: [
			'El liderazgo técnico fraccional funciona como un retainer mensual: objetivos, capacidad y responsabilidades se acuerdan por adelantado, y el trabajo se ajusta a la evolución real del negocio y del equipo.',
			'Puede incluir revisión de arquitectura y decisiones técnicas, acompañamiento y mentoría al equipo, supervisión de proveedores, documentación de estándares y comunicación directa con la gerencia sobre riesgo, prioridades e inversión.',
		],
		cta: {
			heading: 'Si necesitas criterio senior recurrente, conversemos primero sobre el contexto.',
			ctaLabel: 'Hablemos de tu software',
			ctaHref: '/contacto',
		},
	},
} as const;
