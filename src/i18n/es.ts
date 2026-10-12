import { casesSection, publishedCases } from './cases';

/** Inline emphasis: plain strings render as-is, `{ b }` renders as <strong>. */
export type Rich = readonly (string | { readonly b: string })[];

export const es = {
	nav: {
		name: 'Brian Stefanovich',
		homeLabel: 'Brian Stefanovich, inicio',
		links: [
			{ label: 'Servicios', href: '/services' },
			{ label: 'Casos', href: '/cases' },
			{ label: 'Cómo trabajo', href: '/#how-i-work' },
			{ label: 'Sobre mí', href: '/#about' },
		],
		cta: 'Hablemos',
		openMenu: 'Abrir menú',
		closeMenu: 'Cerrar menú',
		themeLabel: 'Modo oscuro',
		breadcrumbLabel: 'Ruta de navegación',
		homeCrumb: 'Inicio',
		skipToContent: 'Saltar al contenido',
		primaryLabel: 'Principal',
	},

	home: {
		meta: {
			title: 'Brian Stefanovich | Arquitectura y consultoría de software',
			description:
				'Aporto criterio técnico para decidir qué corregir, qué validar y cómo liderar entregas de software con consecuencias de negocio. Primera conversación sin costo.',
		},

		hero: {
			eyebrow: 'Arquitectura y consultoría de software',
			/** One entry per line so the two halves of the promise break cleanly at every width. */
			headline: [['Tu ', { b: 'negocio' }, ' al mando.'], ['El ', { b: 'software' }, ' a tu favor.']] satisfies readonly Rich[],
			subhead:
				'Ayudo a decidir qué corregir, qué construir y cómo llevarlo adelante. Conecto las decisiones técnicas con tus objetivos de negocio y acompaño su ejecución.',
			cta: 'Aclaremos tu próximo paso',
			ctaNote: 'Primera conversación de 30 minutos, sin costo ni compromiso.',
			secondaryLink: 'Ver cómo puedo ayudarte',
			scenariosLabel: 'Tres situaciones en las que puedo ayudarte',
			scenarios: [
				{ title: 'Cuando tu sistema te frena', text: 'Entiende qué falla y decide qué corregir, modernizar o reemplazar.' },
				{ title: 'Cuando aparece una oportunidad', text: 'Valida un nuevo negocio antes de comprometer una inversión mayor.' },
				{
					title: 'Cuando tu proyecto necesita liderazgo',
					text: 'Incorpora dirección técnica senior con una dedicación adaptada a tu proyecto.',
				},
			],
			microcopy: 'Primera conversación sin costo para entender el problema y definir el siguiente paso. No incluye una auditoría de código.',
			imageAlt: 'Brian Stefanovich',
		},

		problems: {
			headline: '¿Qué necesita hoy tu negocio para avanzar?',
			subhead: 'Identifica tu situación. Te ayudo a entender las opciones y definir el siguiente paso.',
			/** Each card answers, in order: what is happening to me, how Brian helps, what I get. `tag` and `outcome` also feed /services. */
			outcomeLabel: 'Qué obtienes',
			situations: [
				{
					id: 'regain-control',
					tag: 'Sistema existente',
					/** One entry per sentence so the problem breaks cleanly at every width. */
					problem: ['Tu sistema falla.', 'Cada cambio cuesta más.'],
					situation: 'Los problemas se repiten, tu operación se resiente y las explicaciones de tu proveedor no te permiten decidir.',
					offer: 'Recupera el control de tu software.',
					intervention:
						'Reviso qué está pasando y te ayudo a decidir qué corregir, qué conservar y cuándo conviene modernizar o cambiar de solución.',
					outcome: 'Un diagnóstico fundamentado y un plan de acción priorizado.',
					cta: 'Quiero recuperar el control',
				},
				{
					id: 'validate-opportunity',
					tag: 'Nuevo negocio',
					problem: ['Ves una oportunidad.', 'Necesitas saber si vale la inversión.'],
					situation:
						'Conoces tu negocio y tienes una idea. Necesitas aterrizar qué probar primero, cuánto invertir y cómo saber si tiene futuro.',
					offer: 'Valida la oportunidad antes de comprometer más inversión.',
					intervention: 'Defino contigo una prueba concreta y el software mínimo necesario para obtener evidencia de clientes reales.',
					outcome: 'Un plan de validación, presupuesto y criterios para continuar, ajustar o detenerte.',
					cta: 'Quiero evaluar mi oportunidad',
				},
				{
					id: 'add-leadership',
					tag: 'Liderazgo técnico',
					problem: ['Tienes el proyecto.', 'Te falta liderazgo técnico.'],
					situation:
						'Aparece un proyecto que quieres tomar, o uno en marcha exige decisiones que tu equipo necesita resolver con apoyo senior.',
					offer: 'Suma experiencia para dirigir la ejecución.',
					intervention:
						'Me integro a tu equipo con una dedicación acordada para definir la arquitectura, orientar las decisiones y acompañar el desarrollo.',
					outcome: 'Una responsabilidad técnica definida y acompañamiento durante la ejecución.',
					cta: 'Quiero sumar liderazgo técnico',
				},
			],
		},

		services: {
			workLabel: 'En qué trabajo',
			getLabel: 'Qué obtienes',
			notIncludedLabel: 'Qué no incluye',
			caseLabel: 'Caso relacionado',
			faqHeadline: 'Preguntas sobre este servicio',
			relatedLabel: 'Otros servicios',
			index: {
				meta: {
					title: 'Servicios | Brian Stefanovich',
					description:
						'Diagnóstico de sistemas existentes, validación de nuevos negocios con software y liderazgo técnico fraccional: tres formas de trabajo según la decisión que necesitas tomar.',
				},
				headline: 'Servicios',
				intro:
					'Tres formas de trabajo según la decisión que necesitas tomar. Primero entiendo el problema; después acordamos el alcance y la modalidad.',
				open: 'Ver el servicio',
			},
			items: [
				{
					id: 'existing-systems',
					path: '/services/existing-systems',
					navLabel: 'Sistemas existentes',
					/** Menu entry: the client's goal first, the service name beneath. */
					menuTitle: 'Recupera el control de tu software',
					menuService: 'Consultoría técnica',
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
					id: 'new-ventures',
					path: '/services/new-ventures',
					navLabel: 'Nuevos negocios con software',
					/** Menu entry: the client's goal first, the service name beneath. */
					menuTitle: 'Valida tu idea de negocio',
					menuService: 'Consultoría y desarrollo de MVP',
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
					id: 'fractional-architect',
					path: '/services/fractional-architect',
					navLabel: 'Arquitecto de software fraccional',
					/** Menu entry: the client's goal first, the service name beneath. */
					menuTitle: 'Suma liderazgo técnico a tu equipo',
					menuService: 'Arquitecto fraccional',
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
					caseSlug: 'innspiral',
					caseNote:
						'Muestra una dirección técnica externa con dedicación acordada, conectada con la operación que se quiere mejorar. El proyecto sigue en curso.',
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

		process: {
			eyebrow: 'Cómo trabajo',
			headline: 'Me involucro en tu negocio. Avanzamos con claridad.',
			steps: [
				{
					title: 'Entendemos el desafío',
					body: [
						'Conversamos sobre lo que necesitas y reunimos la información para evaluar cómo ayudarte. Antes de compartir información sensible, acordamos su protección mediante un acuerdo de confidencialidad.',
					],
				},
				{
					title: 'Conozco tu operación de cerca',
					body: [
						'Siempre que es posible, ',
						{ b: 'visito tus instalaciones' },
						' y observo cómo trabajan las personas involucradas. Hago preguntas, conecto a los equipos y facilito la conversación con tus proveedores para entender el problema completo.',
					],
				},
				{
					title: 'Acordamos un plan concreto',
					body: [
						'Investigo las alternativas y te presento una propuesta con alcance e inversión. Ajustamos el plan y dejamos definidos en el contrato los hitos, las entregas y los criterios para validarlas.',
					],
				},
				{
					title: 'Avanzamos con evidencia',
					body: [
						'Recibes reportes semanales, métricas de avance y documentación desde las primeras entregas. Revisamos cada hito con los criterios acordados y ajustamos el rumbo cuando hace falta.',
					],
				},
			],
			closingTitle: 'El conocimiento queda en tu empresa.',
			closing:
				'Las decisiones, los documentos y los aprendizajes se entregan durante el proyecto, organizados para que tu equipo pueda utilizarlos.',
		},

		clients: {
			headline: 'Empresas con las que he trabajado',
			intro: 'Con algunas trabajé directamente; con otras, a través de otra empresa o desde dentro de su equipo.',
			listLabel: 'Logos de las empresas con las que he trabajado',
			pause: 'Pausar',
			play: 'Reanudar',
		},

		cases: {
			meta: {
				title: 'Casos | Brian Stefanovich',
				titleSuffix: 'Casos | Brian Stefanovich',
				description:
					'Proyectos y experiencia seleccionada: sistemas que evolucionan, productos que toman forma y equipos con dirección técnica.',
			},
			viewCase: 'Ver el caso',
			headline: casesSection.title,
			labels: {
				company: 'Empresa',
				relation: 'Relación',
				role: 'Mi participación',
				service: 'Servicio',
			},
			intro: casesSection.intro,
			moreHeadline: 'Más experiencia',
			moreIntro: 'Otros proyectos y líneas de trabajo, con la relación que tuve con cada empresa.',
			ongoingLabel: 'En curso',
			scopeNote:
				'Esta ficha resume lo que puedo contar públicamente. Las alternativas que se evaluaron y sus trade-offs los explico en una conversación.',
			relatedLabel: 'Servicio relacionado',
			// Copy for each case lives in cases.es.json; the dictionary only receives what is cleared for publication.
			items: publishedCases,
		},

		about: {
			titleLines: ['Hablo de negocio contigo.', 'De arquitectura con tu equipo.'],
			identityName: 'Soy Brian Stefanovich.',
			identityRole: 'Arquitecto de software y líder técnico.',
			imageAlt: 'Retrato de Brian Stefanovich',
			paragraphs: [
				'He diseñado y desarrollado software, liderado equipos y participado en la modernización de sistemas en producción. Esa experiencia me permite conectar lo que tu negocio necesita con lo que realmente implica construirlo.',
				'Mi formación en Matemática y mi experiencia en múltiples proyectos de software aporta dos perspectivas a mi trabajo: analizar los problemas con rigor y entender para quién estamos creando valor. Mi especialidad técnica está en el desarrollo y la arquitectura de aplicaciones, con foco en .NET y Azure.',
				'Me involucro para entender el problema, cuestionar supuestos y hacer explícitas las alternativas. Puedo ayudarte a evaluar una propuesta de tu proveedor, convertir una oportunidad en un prototipo o acompañar a tu equipo en decisiones difíciles.',
			],
			mottoLines: ['Mi recomendación tiene que ayudarte a decidir.', 'Mi trabajo, a avanzar.'],
			experienceTitle: 'Experiencia llevada a la práctica',
			experience: [
				{
					slug: 'innspiral',
					title: 'Dirección técnica para una operación de abastecimiento compleja',
					body: 'En INNSPIRAL acompaño como arquitecto y líder técnico externo una solución de cotizaciones y abastecimiento para una constructora chilena. El proyecto sigue en curso.',
				},
				{
					slug: 'kepler-coach',
					title: 'Convertir un prototipo en una plataforma preparada para crecer',
					body: 'En Kepler Coach lideré la evolución de un prototipo educativo con IA hacia una plataforma multiempresa con .NET, React y Azure.',
				},
			],
			casesCta: 'Conoce los proyectos en los que he trabajado',
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

		contactSection: {
			headline: 'Conversemos sobre la decisión que necesitas tomar',
			lead: 'Cuéntame qué está pasando, qué necesitas conseguir y cuál es la principal decisión pendiente.',
			intro:
				'No necesitas saber qué servicio corresponde. En 30 minutos evaluaremos si puedo ayudarte y cuál podría ser el siguiente paso. Si el problema queda fuera de mi experiencia, te lo diré.',
			cta: 'Hablemos',
			emailLabel: 'O escríbeme directamente',
			linkedinLabel: 'LinkedIn de Brian Stefanovich',
		},
	},

	diagrams: {
		note: 'Esquema ilustrativo',
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
			{ label: 'Cómo trabajo', href: '/#how-i-work' },
			{ label: 'Preguntas frecuentes', href: '/#faq' },
			{ label: 'Contacto', href: '/#contact' },
		],
		company: { name: 'Stefanovich SpA', address: ['Badajoz 100, of 1014', 'Las Condes, Santiago de Chile'] },
		legalLabel: 'Legal',
		legal: [
			{ label: 'Privacidad', href: '/privacy' },
			{ label: 'Términos', href: '/terms' },
		],
		slogan: 'Decisiones de software · Razones de negocio',
		copyright: '© 2026 Brian Stefanovich',
	},

	/** Pre-fills the booking notes when a CTA already knows which route the visitor chose. */
	contact: {
		situations: [
			{ id: 'existing-system', label: 'Sistema existente' },
			{ id: 'new-product', label: 'Nuevo producto' },
			{ id: 'fractional', label: 'Arquitectura fraccional' },
		],
	},
} as const;
