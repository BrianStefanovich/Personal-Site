export const es = {
	meta: {
		title: 'Brian Stefanovich Consulting | Decisiones claras. Software bien diseñado.',
		description:
			'Consultoría estratégica de arquitectura y productos de software. Diagnóstico de sistemas existentes, modernización progresiva y construcción de nuevos productos.',
	},
	brand: {
		name: 'Brian Stefanovich',
		fullName: 'Brian Stefanovich Consulting',
		tagline: 'Decisiones claras. Software bien diseñado.',
		disciplines: 'Arquitectura · Modernización · Productos de software',
		location: 'Santiago de Chile · Atención remota en Chile y Latinoamérica',
		motto: 'Clarity before complexity.',
	},
	nav: {
		links: [
			{ label: 'Problemas', href: '#problemas' },
			{ label: 'Servicios', href: '#servicios' },
			{ label: 'Cómo trabajo', href: '#como-trabajo' },
			{ label: 'Sobre mí', href: '#sobre-mi' },
		],
		ctaMobile: 'Agendar consulta',
		ctaDesktop: 'Agendar sesión',
		openMenu: 'Abrir menú',
		closeMenu: 'Cerrar menú',
	},
	hero: {
		eyebrow: 'Consultoría estratégica de arquitectura y productos de software',
		headingLines: ['Decisiones', 'claras.', 'Software bien', 'diseñado.'],
		body: 'Ayudo a empresas a tomar mejores decisiones sobre su software: Diagnostico problemas, modernizo sistemas y convierto ideas o prototipos en productos viables.',
		cta: 'Agenda una consulta',
		note: 'Es una conversación de evaluación, no una auditoría gratuita ni una llamada para venderte horas. Si el problema requiere otro tipo de especialista, te lo diré con claridad.',
		imageAlt: 'Brian Stefanovich con un notebook',
	},
	problemas: {
		number: '01',
		short: 'Problema',
		long: 'Cuando el software empieza a decidir por el negocio',
		heading: 'Un sistema puede seguir funcionando y, aun así, estar frenando a la empresa.',
		body: [
			'El problema rara vez es una tecnología aislada. Suele ser una combinación de decisiones acumuladas, dependencias invisibles, procesos frágiles y prioridades que nadie ha convertido en un mapa común.',
			'Cuando eso ocurre, cada nueva funcionalidad cuesta más, una migración parece demasiado riesgosa y la organización continúa invirtiendo sin saber qué problema está resolviendo primero.',
		],
		columns: [
			{
				id: 'existentes',
				label: 'Sistemas existentes',
				title: 'Síntomas en sistemas existentes',
				items: [
					{
						icon: { src: '/images/icon-problema-existente-1.svg', width: 20, height: 16 },
						title: 'Las entregas se vuelven lentas o impredecibles',
						description:
							'Cambios aparentemente pequeños exigen tocar demasiadas partes del sistema, coordinar varios equipos o aceptar un nivel de riesgo difícil de explicar.',
					},
					{
						icon: { src: '/images/icon-problema-existente-2.svg', width: 20, height: 20 },
						title: 'Los incidentes se corrigen, pero vuelven con otra forma',
						description:
							'El equipo resuelve síntomas bajo presión mientras las causas arquitectónicas, operativas o de datos permanecen intactas.',
					},
					{
						icon: { src: '/images/icon-problema-existente-3.svg', width: 18, height: 18 },
						title: 'Existe una migración pendiente, pero no una estrategia confiable',
						description:
							'Reescribir todo parece imprudente; seguir igual también. Falta comparar alternativas, dependencias, costos y secuencias de transición.',
					},
					{
						icon: { src: '/images/icon-problema-existente-4.svg', width: 20, height: 20 },
						title: 'Negocio y tecnología están discutiendo problemas distintos',
						description:
							'La gerencia necesita decidir sobre inversión, riesgo y tiempo. El equipo técnico habla de componentes, deuda y plataformas.',
					},
				],
			},
			{
				id: 'nuevos',
				label: 'Nuevos productos',
				title: 'Síntomas en nuevos productos',
				items: [
					{
						icon: { src: '/images/icon-problema-nuevo-1.svg', width: 11, height: 18 },
						title: 'Hay una idea o un prototipo, pero todavía no un producto operable',
						description:
							'La demostración valida interés, no necesariamente seguridad, mantenibilidad, costos, integración ni capacidad de crecimiento.',
					},
					{
						icon: { src: '/images/icon-problema-nuevo-2.svg', width: 20, height: 18 },
						title: 'Es difícil evaluar al proveedor o al equipo técnico',
						description:
							'Las estimaciones cambian, las decisiones no quedan documentadas y la empresa depende de quien construyó la primera versión.',
					},
					{
						icon: { src: '/images/icon-problema-nuevo-3.svg', width: 22, height: 16 },
						title: 'Se está por invertir antes de resolver las preguntas costosas',
						description:
							'No están claras las hipótesis críticas, el alcance de la primera versión, los límites del sistema ni los riesgos que podrían invalidar el proyecto.',
					},
				],
			},
		],
		callout:
			'Si reconoces una o más de estas situaciones, el siguiente paso no debería ser contratar más desarrollo. Primero necesitas claridad para decidir.',
	},
	dosRutas: {
		number: '02',
		short: 'Servicios',
		long: 'Dos contextos. Una misma disciplina.',
		heading: 'Desde el problema de negocio hasta una decisión técnica ejecutable.',
		helpLabel: 'Puedo ayudarte a:',
		resultLabel: 'Resultado esperado',
		rutas: [
			{
				title: 'Tengo un sistema con dolores',
				description: 'Para empresas con software crítico, costoso, frágil o difícil de evolucionar.',
				items: [
					'Identificar causas raíz y dependencias críticas',
					'Evaluar riesgos de arquitectura, operación y entrega',
					'Decidir qué mantener, reemplazar, aislar o modernizar',
					'Diseñar una transición progresiva sin detener el negocio',
					'Convertir la decisión en prioridades, arquitectura y un roadmap de 90 días',
					'Acompañar al equipo o al proveedor durante la ejecución.',
				],
				result:
					'Una visión compartida del sistema, alternativas comparables y un plan que permita invertir con criterio.',
			},
			{
				title: 'Quiero construir un negocio basado en software',
				description:
					'Para founders, áreas de innovación y empresas con una idea, proceso o prototipo que debe convertirse en un producto real.',
				items: [
					'Traducir el modelo de negocio en capacidades de producto',
					'Identificar hipótesis y riesgos técnicos antes de construir',
					'Definir el alcance responsable de la primera versión',
					'Diseñar la arquitectura, los límites y las integraciones',
					'Estimar etapas, dependencias y rangos de inversión',
					'Construir o liderar la transición desde prototipo hacia producción',
				],
				result:
					'Un producto técnicamente viable, con decisiones explícitas y una base que el negocio pueda comprender y el equipo pueda mantener.',
			},
		],
		cta: 'Conversemos sobre tu situación',
	},
	diagnostico: {
		number: '03',
		short: 'Diagnóstico',
		long: 'Una forma concreta de comenzar',
		heading: 'Diagnóstico Ejecutivo de Riesgo y Modernización',
		body: 'Antes de aprobar una migración, aumentar el equipo o comprometer un nuevo presupuesto, obtén una evaluación independiente de qué está ocurriendo, qué alternativas existen y cuál debería ser la secuencia de decisión.',
		detailsLabel: 'Datos del servicio',
		details: [
			{ term: 'Duración:', value: '7 a 10 días hábiles.' },
			{ term: 'Alcance y precio fijos.', value: '' },
			{ term: 'Inversión:', value: '45 UF + IVA.' },
			{ term: 'Forma de pago:', value: '50% al iniciar y 50% en la presentación ejecutiva.' },
			{
				term: 'Modalidad:',
				value: 'remota para Chile y Latinoamérica; reuniones presenciales en Santiago cuando el contexto lo justifique.',
			},
		],
		includesLabel: 'Incluye',
		includes: [
			'entrevista de encuadre con responsables de negocio y tecnología;',
			'revisión de arquitectura, documentación, flujos y evidencia técnica disponible;',
			'mapa visual del sistema, dependencias y puntos críticos;',
			'distinción entre síntomas, causas raíz y restricciones reales;',
			'escenarios de evolución con costos, riesgos y trade-offs;',
			'recomendación independiente y criterios que la sostienen;',
			'prioridades y plan de acción para los próximos 90 días;',
			'rango de inversión para las etapas siguientes;',
			'presentación ejecutiva y sesión de preguntas.',
		],
		excludesLabel: 'No incluye',
		excludes: [
			'una reescritura completa del sistema;',
			'implementación o capacidad de desarrollo abierta;',
			'una certificación de seguridad o auditoría regulatoria formal;',
			'promesas de costo o fecha sin acceso a evidencia suficiente.',
		],
		processLabel: 'Cómo se desarrolla',
		process: [
			{
				number: '01',
				title: 'Encuadre',
				description:
					'Acordamos la decisión que la empresa necesita tomar, los actores relevantes y la evidencia disponible. No revisamos tecnología sin entender primero el impacto de negocio.',
			},
			{
				number: '02',
				title: 'Observación',
				description:
					'Reviso arquitectura, código o artefactos pertinentes, datos, integraciones, operación y forma de entrega. Las entrevistas permiten contrastar el sistema documentado con el sistema que realmente existe.',
			},
			{
				number: '03',
				title: 'Modelado',
				description:
					'Convierto la complejidad en diagramas, riesgos y escenarios comparables. Cada alternativa explicita beneficios, costos, dependencias y consecuencias.',
			},
			{
				number: '04',
				title: 'Decisión',
				description:
					'Presento una recomendación, prioridades de 90 días y una secuencia de inversión. La empresa conserva los entregables y los criterios utilizados para tomar la decisión.',
			},
		],
		cta: 'Evaluar si el diagnóstico aplica a mi caso',
		note: 'La sesión inicial dura 25 minutos y sirve para validar encaje. No necesitas contratar una implementación posterior.',
	},
	sprint: {
		number: '04',
		short: 'Sprint',
		long: 'Cuando todavía no existe el sistema correcto',
		heading: 'Sprint de Viabilidad Técnica de Producto',
		body: [
			'Una idea atractiva o un prototipo funcional no responden por sí solos si el producto puede operar, integrarse, mantenerse y crecer con una inversión razonable.',
			'El sprint convierte la oportunidad de negocio en decisiones verificables antes de abrir un proyecto de desarrollo.',
		],
		deliverablesLabel: 'Entregables posibles, según el alcance acordado',
		deliverables: [
			'Mapa del problema, usuarios y flujos críticos',
			'Hipótesis que deben validarse antes de escalar',
			'Alcance de la primera versión y decisiones de exclusión',
			'Arquitectura inicial y límites del sistema',
			'Estrategia de datos, integraciones, seguridad y operación',
			'Roadmap por etapas, dependencias y rango de inversión.',
			'Prototipo técnico cuando existe una incertidumbre que debe probarse',
		],
		modelLabel: 'Modelo de contratación',
		model: 'Después de la sesión de encuadre se propone un alcance cerrado, con duración, entregables e inversión definidos. No se inicia con una bolsa de horas abierta.',
		cta: 'Quiero evaluar una idea o prototipo',
	},
	continuidad: {
		number: '05',
		short: 'Continuidad',
		long: 'De la recomendación a la ejecución',
		heading: 'Puedes ejecutar con tu equipo, con tu proveedor o conmigo.',
		body: 'Los entregables están diseñados para que la empresa pueda decidir y avanzar sin quedar cautiva de quien realizó el diagnóstico. Si necesitas continuidad, el acompañamiento puede tomar una de estas formas.',
		options: [
			{
				title: 'Arquitectura y roadmap de solución',
				description:
					'Definición detallada de límites, componentes, integraciones, decisiones de datos, infraestructura, riesgos y secuencia de implementación.',
			},
			{
				title: 'Modernización progresiva',
				description:
					'Diseño y ejecución de transiciones por etapas para reemplazar, aislar o reimplementar partes del sistema sin detener el flujo de negocio.',
			},
			{
				title: 'Arquitecto de Software Fraccional',
				description:
					'Liderazgo técnico senior por un período definido: revisión de decisiones, acompañamiento al equipo, supervisión de proveedores, documentación de arquitectura y comunicación con gerencia.',
			},
			{
				title: 'Construcción de producto',
				description:
					'Implementación directa o liderazgo de una primera versión cuando el alcance y los riesgos ya están suficientemente comprendidos.',
			},
		],
		note: 'La forma de trabajo se elige por la decisión y el resultado que necesitas, no por una cantidad predeterminada de horas.',
	},
	diferenciales: {
		number: '07',
		short: 'Diferencial',
		long: 'Una contraparte técnica independiente',
		heading: 'La recomendación no está atada a venderte una tecnología, un equipo o una reescritura.',
		items: [
			{
				title: 'Atención senior directa',
				description:
					'Trabajas con Brian desde el encuadre hasta la entrega. No existe un traspaso comercial hacia un equipo junior que recién entonces conoce el problema.',
			},
			{
				title: 'Independencia tecnológica',
				description:
					'La arquitectura se elige según el negocio, las restricciones y la capacidad real del equipo. La experiencia en .NET, Node.js, Python, React y cloud permite comparar alternativas sin convertir el stack en la propuesta de valor.',
			},
			{
				title: 'Traducción entre gerencia y tecnología',
				description:
					'Los diagramas, escenarios y roadmaps están diseñados para que responsables de negocio y equipos técnicos puedan discutir la misma decisión sin perder precisión.',
			},
			{
				title: 'Cercanía con la ejecución',
				description:
					'La recomendación se construye con conocimiento práctico de código, infraestructura, datos y entrega. El objetivo no es producir un informe elegante que el equipo no pueda implementar.',
			},
			{
				title: 'Transferencia de criterio',
				description:
					'Las decisiones, sus trade-offs y los artefactos quedan en la empresa. El equipo debe terminar con mayor autonomía, no con una dependencia nueva.',
			},
		],
	},
	sobreBrian: {
		number: '08',
		short: 'Sobre mí',
		long: 'Sobre mí',
		heading: 'Arquitectura con criterio técnico, lectura de negocio y responsabilidad sobre la ejecución.',
		imageAlt: 'Retrato de Brian Stefanovich',
		paragraphs: [
			'Soy Brian Stefanovich, Technical Leader y consultor de arquitectura y desarrollo de software.',
			'Desde 2020 he trabajado en fintech, plataformas empresariales, integraciones, productos intensivos en datos y aplicaciones orientadas a clientes. He liderado decisiones de arquitectura, migraciones tecnológicas, reimplementaciones de procesos críticos y la evolución de prototipos hacia plataformas preparadas para producción.',
			'Mi formación en Matemática fortaleció una forma de trabajo basada en modelar problemas, separar causas de síntomas y hacer explícitas las suposiciones. La experiencia liderando equipos y construyendo sistemas me enseñó la otra mitad: una decisión solo es buena si puede explicarse, ejecutarse y sostenerse en el contexto real de la empresa.',
			'Trabajo entre dos niveles que con frecuencia quedan desconectados: la conversación ejecutiva sobre inversión, riesgo y oportunidad, y la realidad técnica del código, los datos, la infraestructura y los equipos.',
			'Atiendo empresas en Chile y Latinoamérica de forma remota, con disponibilidad para trabajo presencial en Santiago cuando agrega valor.',
		],
		links: [
			{ label: 'Ver perfil de LinkedIn', href: 'https://www.linkedin.com/', icon: '/images/icon-external.svg' },
			{ label: 'Descargar CV', href: '/cv.pdf', icon: '/images/icon-download.svg' },
			{ label: 'Agendar una sesión', href: '#contacto', icon: '/images/icon-calendar.svg' },
		],
	},
	encaje: {
		fit: {
			title: 'Probablemente podamos trabajar bien si…',
			items: [
				'tu empresa depende de un sistema que se volvió difícil de cambiar o explicar;',
				'debes decidir una modernización, migración o inversión relevante;',
				'necesitas una mirada senior e independiente antes de comprometer presupuesto;',
				'tienes un equipo o proveedor, pero falta dirección arquitectónica;',
				'cuentas con una idea o un prototipo serio y necesitas convertirlo en producto;',
				'prefieres una evolución por etapas basada en evidencia antes que una reescritura impulsiva.',
			],
		},
		noFit: {
			title: 'Probablemente no sea el servicio adecuado si…',
			items: [
				'solo necesitas aumentar capacidad de desarrollo por hora;',
				'buscas una cotización inmediata sin una etapa mínima de comprensión;',
				'ya decidiste la tecnología y solo necesitas que alguien valide la decisión;',
				'esperas una promesa de costo, fecha o escalabilidad sin acceso a evidencia;',
				'el problema principal no es técnico ni existe voluntad de involucrar a los responsables de negocio.',
			],
		},
	},
	faq: {
		number: '10',
		label: 'Preguntas frecuentes',
		heading: 'Preguntas frecuentes',
		items: [
			{
				question: '¿Eres una software factory?',
				answer:
					'No. Brian Stefanovich Consulting es una consultoría senior e independiente. Puedo diseñar, liderar o participar en la implementación cuando tiene sentido, pero el punto de partida es una decisión y un resultado, no la venta de capacidad genérica de desarrollo.',
			},
			{
				question: '¿Puedes trabajar con nuestro equipo o proveedor actual?',
				answer:
					'Sí. El diagnóstico y el acompañamiento están diseñados para complementar equipos internos y ofrecer una contraparte técnica frente a proveedores. La responsabilidad, los accesos y los límites de decisión se acuerdan al comenzar.',
			},
			{
				question: '¿Trabajas solamente con .NET y Azure?',
				answer:
					'No. Tengo experiencia práctica en .NET, Node.js, Python, React, React Native, SQL y entornos AWS, Azure y GCP. La recomendación tecnológica depende del problema, las restricciones y la capacidad del equipo, no de una preferencia comercial.',
			},
			{
				question: '¿Trabajas presencial o remoto?',
				answer:
					'Trabajo de forma remota con empresas de Chile y Latinoamérica. En Santiago pueden acordarse sesiones presenciales cuando aportan valor al diagnóstico, los talleres o la toma de decisiones.',
			},
			{
				question: '¿La sesión inicial es un diagnóstico gratuito?',
				answer:
					'No. Es una conversación de 25 minutos para comprender la decisión pendiente, validar si existe encaje y definir el siguiente paso. El análisis técnico y los entregables forman parte de un servicio con alcance acordado.',
			},
			{
				question: '¿Debemos contratarte para implementar las recomendaciones?',
				answer:
					'No. Los entregables quedan en la empresa y pueden ser ejecutados por tu equipo o proveedor. Si necesitas continuidad, podemos acordar arquitectura detallada, acompañamiento fraccional o implementación.',
			},
			{
				question: '¿Por qué el diagnóstico tiene precio fijo?',
				answer:
					'Porque su alcance, duración y resultado están definidos. El objetivo es alinear el trabajo con una decisión concreta, no abrir una bolsa de horas cuyo costo y resultado sean difíciles de prever.',
			},
			{
				question: '¿Qué necesito compartir para comenzar?',
				answer:
					'Depende del caso. Normalmente se requieren conversaciones con responsables de negocio y tecnología, documentación disponible y acceso controlado a los artefactos técnicos relevantes. El alcance especificará qué se revisará y cómo se manejará la información.',
			},
		],
	},
	contacto: {
		// TODO(figma 2339:2246 / 2339:729): confirmar el copy de la columna izquierda y el aviso legal.
		heading: 'Conversemos sobre tu situación',
		body: 'Cuéntame qué decisión necesitas tomar y con qué evidencia cuentas hoy. Te responderé si el diagnóstico aplica a tu caso o si necesitas otro tipo de especialista.',
		info: 'La sesión inicial dura 25 minutos y sirve para validar encaje. No necesitas contratar una implementación posterior.',
		textFields: [
			{ name: 'nombre', label: 'Nombre y apellido.', type: 'text', required: true, autoComplete: 'name' },
			{ name: 'correo', label: 'Correo corporativo.', type: 'email', required: true, autoComplete: 'email' },
			{ name: 'empresa', label: 'Empresa y cargo.', type: 'text', required: true, autoComplete: 'organization' },
			{ name: 'plazo', label: 'Plazo aproximado.', type: 'text', required: false, autoComplete: 'off' },
		],
		needsLabel: '¿Qué necesitas resolver?',
		needsOptions: [
			{ value: 'sistema-existente', label: 'Tengo un sistema con dolores' },
			{ value: 'nuevo-producto', label: 'Quiero construir un negocio basado en software' },
		],
		textareas: [
			{ name: 'decision', label: '¿Qué decisión necesitas tomar?' },
			{ name: 'urgencia', label: '¿Por qué es importante resolverla ahora?' },
		],
		submit: 'Enviar',
		disclaimer: 'Tus datos se usan únicamente para responder esta consulta.',
		submitted: 'Gracias. El envío del formulario todavía no está conectado a un backend.',
	},
	footer: {
		links: [
			{ label: 'LinkedIn', href: 'https://www.linkedin.com/' },
			{ label: 'Correo', href: 'mailto:hola@example.com' },
			{ label: 'Política de privacidad', href: '/privacidad/' },
		],
		copyright: '© 2024 Brian Stefanovich Consulting. Arquitetura e Evolução.',
		copyrightDesktop: '© 2024 Brian Stefanovich. All rights reserved.',
	},
} as const;
