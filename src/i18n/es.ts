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
			title: 'Consultoría de software en Chile | Brian Stefanovich',
			description:
				'Te ayudo a evaluar sistemas, validar nuevos negocios y liderar decisiones técnicas. Consultoría de software desde Chile para empresas de todo el mundo.',
		},

		hero: {
			eyebrow: 'Arquitectura y consultoría de software',
			/** One entry per line so the two halves of the promise break cleanly at every width. */
			headline: [['Tu ', { b: 'negocio' }, ' al mando.'], ['El ', { b: 'software' }, ' a tu favor.']] satisfies readonly Rich[],
			subhead:
				'Ayudo a decidir qué corregir, qué construir y cómo llevarlo adelante. Conecto las decisiones técnicas con tus objetivos de negocio y acompaño su ejecución.',
			cta: 'Conversemos sobre tu proyecto',
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
					outcome: 'Un responsable técnico definido y acompañamiento durante la ejecución.',
					cta: 'Quiero sumar liderazgo técnico',
				},
			],
		},

		services: {
			workLabel: 'En qué trabajo',
			getLabel: 'Qué obtienes',
			notIncludedLabel: 'Qué no incluye',
			caseLabel: 'Caso relacionado',
			relatedLabel: 'Otros servicios',
			index: {
				meta: {
					title: 'Arquitectura y consultoría de software | Brian Stefanovich',
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
						title: 'Diagnóstico de software | Brian Stefanovich',
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
					faq: {
						headline: 'Recuperar el control empieza por entender tus opciones',
						items: [
							{
								q: '¿Tendré que cambiar de sistema o de proveedor?',
								a: [
									'Eso se decide después del diagnóstico. Reviso qué funciona, qué provoca los problemas y qué alternativas tienes: corregir, conservar, modernizar o reemplazar.',
									'Cada opción se compara por su costo, riesgo e impacto en la operación.',
								],
								highlight: 'Lo que ya funciona también merece conservarse.',
							},
							{
								q: '¿Puedes trabajar con mi proveedor o equipo actual?',
								a: [
									'Sí. Puedo conversar con tu equipo y tus proveedores, revisar sus propuestas y facilitar que negocio y tecnología compartan una misma comprensión del problema.',
									'Mi aporte es hacer claras las alternativas, las responsabilidades y los próximos pasos para que puedas decidir con fundamento.',
								],
							},
							{
								q: '¿Tengo que contratarte también para implementar los cambios?',
								a: [
									'No. Recibes un diagnóstico y un plan documentado que puedes llevar a tu equipo o a otro proveedor.',
									'Si necesitas que acompañe la ejecución, acordamos esa etapa por separado.',
								],
								highlight: 'El plan queda en tu empresa. La decisión de cómo avanzar sigue siendo tuya.',
							},
						],
					},
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
						title: 'Validación de negocios y MVP | Brian Stefanovich',
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
					faq: {
						headline: 'Dale a tu idea una prueba concreta',
						items: [
							{
								q: '¿Cómo sabremos si vale la pena invertir en mi idea?',
								a: [
									'Identificamos qué tendría que ser cierto para que el negocio funcione y diseñamos pruebas para contrastarlo: interés de clientes, disposición a pagar, viabilidad técnica o costos de operación.',
									'Acordamos qué resultados justificarían continuar, ajustar o detenerse.',
								],
								highlight: 'Cada etapa debe darte razones para decidir la siguiente inversión.',
							},
							{
								q: '¿Necesito desarrollar una aplicación completa para empezar?',
								a: [
									'No. Primero definimos qué necesitas aprender. A veces basta con una prueba manual o un prototipo sencillo; otras, hace falta desarrollar una primera versión funcional.',
									'El alcance se concentra en lo necesario para poner a prueba la oportunidad con usuarios reales.',
								],
							},
							{
								q: '¿Qué ocurre si la prueba muestra que la idea necesita cambiar?',
								a: [
									'Revisamos lo aprendido y decidimos qué ajustar, qué volver a probar o si conviene detener la inversión.',
									'Descubrir una limitación temprano permite replantear el proyecto antes de comprometer más recursos. Ese aprendizaje también es un resultado útil.',
								],
							},
						],
					},
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
					faq: {
						headline: 'Liderazgo técnico con un compromiso claro',
						items: [
							{
								q: '¿Qué significa contratar un arquitecto fraccional?',
								a: [
									'Significa incorporar experiencia senior con una dedicación parcial acordada. Me integro al proyecto para asumir responsabilidades concretas de arquitectura y liderazgo técnico.',
									'Antes de comenzar definimos las decisiones que delegas, mi disponibilidad, los entregables y cómo trabajaremos con tu equipo.',
								],
								highlight: 'Sabes con qué apoyo cuentas y para qué.',
							},
							{
								q: '¿Puedes integrarte a un equipo que ya está trabajando?',
								a: [
									'Sí. Primero conozco el producto, las personas y las decisiones pendientes. Desde ahí, acuerdo con el equipo las prioridades, oriento la arquitectura y ayudo a resolver los obstáculos técnicos.',
									'También puedo participar en conversaciones con negocio, proveedores o el cliente final para facilitar acuerdos y hacer explícitos los riesgos.',
								],
							},
							{
								q: '¿También participas en el desarrollo?',
								a: [
									'Sí, cuando el alcance lo requiere. Puedo implementar componentes, revisar código o acompañar al equipo en decisiones técnicas complejas.',
									'Acordamos esa participación desde el inicio y confirmamos la capacidad de desarrollo necesaria. Mi dedicación se concentra donde puede aportar más al proyecto.',
								],
							},
						],
					},
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
				title: 'Casos de arquitectura de software | Brian Stefanovich',
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
			headline: 'Antes de dar el siguiente paso',
			intro: 'Respuestas claras para que sepas qué esperar al trabajar conmigo.',
			items: [
				{
					q: 'Tengo un problema, pero no sé qué servicio necesito. ¿Podemos hablar?',
					a: ['Sí. Cuéntame qué está pasando, cómo afecta a tu negocio y qué necesitas conseguir. Yo te ayudo a ordenar el problema y evaluar qué tipo de apoyo tiene sentido.'],
					highlight: 'Puedes llegar con preguntas. No necesitas traer un diagnóstico.',
				},
				{
					q: '¿Cómo es la primera conversación? ¿Tiene costo?',
					a: [
						'Es una conversación de unos 30 minutos, sin costo ni compromiso. Revisamos tu situación, la decisión que necesitas tomar y si mi experiencia puede ayudarte.',
						'Si tiene sentido avanzar, acordamos qué información hace falta para preparar una propuesta. El diagnóstico técnico detallado corresponde a una etapa posterior, con alcance y precio definidos.',
					],
				},
				{
					q: '¿Cómo sabré cuánto voy a invertir y qué recibiré?',
					a: [
						'Antes de comenzar, revisamos una propuesta con alcance, inversión, entregables y criterios de aceptación.',
						'El diagnóstico tiene precio cerrado; la validación de una oportunidad se contrata por etapas; y el liderazgo técnico, mediante una mensualidad con dedicación y responsabilidades acordadas.',
					],
					highlight: 'Sabrás qué estás contratando antes de comprometerte.',
				},
				{
					q: '¿Cómo sabré si el trabajo está avanzando?',
					a: [
						'Recibes reportes semanales y entregas a lo largo del proyecto. Desde el inicio acordamos hitos, métricas y criterios para validar el avance.',
						'Además, documento las decisiones y organizo el conocimiento para que tu equipo pueda utilizarlo.',
					],
					highlight: 'La claridad llega durante el trabajo, desde las primeras entregas.',
				},
				{
					q: '¿Trabajas a distancia o también visitas la empresa?',
					a: [
						'Trabajo de forma remota con empresas en Chile y equipos internacionales. Cuando aporta valor y es posible coordinarlo, visito tus instalaciones para observar la operación y conversar con las personas involucradas.',
					],
					highlight: 'Entender cómo se usa el software ayuda a entender qué necesita cambiar.',
				},
				{
					q: '¿Podemos conversar sobre información confidencial?',
					a: [
						'Sí. Antes de compartir información sensible, acordamos su protección mediante un acuerdo de confidencialidad y definimos los accesos necesarios.',
						'Para la primera conversación basta con describir el problema de forma general. Los detalles sensibles se revisan con los resguardos acordados.',
					],
				},
				{
					q: '¿Puedes ayudarme aunque usemos otra tecnología?',
					a: [
						'Mi especialidad está en .NET y Azure, y tengo experiencia con aplicaciones web, móviles e integraciones en distintos entornos.',
						'Primero reviso tu sistema, tu equipo y tus objetivos. Si el desafío requiere una especialidad fuera de mi experiencia, te lo diré.',
					],
					highlight: 'La recomendación parte de lo que tu negocio necesita.',
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
