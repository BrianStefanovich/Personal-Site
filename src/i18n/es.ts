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
			headline: ['Decisiones de software que ', { b: 'importan al negocio' }] satisfies Rich,
			subhead: 'Aporto criterio técnico para recuperar el control de un sistema, validar una inversión o liderar una entrega.',
			cta: 'Conversemos 30 minutos',
			imageAlt: 'Brian Stefanovich',
		},

		prueba: {
			headline: 'Casos de éxito',
			cta: 'Ver todos los casos',
		},

		presentacion: {
			headline: 'Criterio técnico para decidir y avanzar',
			paragraphs: [
				[
					'Ayudo a empresas que dependen de un sistema, evalúan una nueva línea de negocio basada en software o necesitan liderazgo técnico para una entrega importante.',
				],
				[
					'Primero entiendo el problema, comparo alternativas y recomiendo una dirección con sus ',
					{ b: 'costos, riesgos y dependencias' },
					'. Después puedo acompañar la ejecución acordada.',
				],
			] satisfies readonly Rich[],
			diagram: {
				label: 'Diagrama: un problema con cuatro caminos posibles y una decisión',
				problem: 'Problema',
				options: ['Refactorizar', 'Modernizar', 'Reemplazar', 'No cambiar'],
				decision: 'Decisión',
			},
		},

		problema: {
			headline: 'Tres decisiones de software con consecuencias de negocio',
			subhead: 'El trabajo empieza por entender qué decisión necesita resolver la empresa.',
			doorLabel: 'Ver cómo ayudo',
			situations: [
				{
					tag: 'Sistema existente',
					title: 'El sistema deteriora la operación y cuesta evaluar qué hacer.',
					body: 'Cada cambio tarda más, fallan integraciones o el proveedor propone una solución difícil de contrastar. Necesitas saber qué corregir, qué conservar y si conviene modernizar, reemplazar componentes o cambiar de proveedor.',
				},
				{
					tag: 'Nuevo negocio',
					title: 'Quieres abrir una nueva línea de negocio basada en software.',
					body: 'Ya tienes actividad, clientes o conocimiento de la industria, pero todavía falta evidencia para decidir cuánto invertir. Necesitas saber qué incertidumbre probar primero y cuándo continuar, cambiar de rumbo o detenerte.',
				},
				{
					tag: 'Liderazgo técnico',
					title: 'Un proyecto exige liderazgo técnico que hoy no está cubierto.',
					body: 'El equipo puede ejecutar, pero necesita una persona responsable de las decisiones de arquitectura y la coordinación técnica. Hay que definir qué autoridad, dedicación y capacidad de entrega hacen falta.',
				},
			],
		},

		servicios: {
			headline: 'Servicios',
			subhead: 'Tres ofertas para tres decisiones de negocio',
			// The contracting model of each service now sits on its card, so the intro no longer lists them.
			intro: 'Cada trabajo comienza con un alcance concreto. La continuidad y cualquier implementación se definen por separado.',
			workLabel: 'En qué trabajo',
			getLabel: 'Qué obtienes',
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
					model: 'Precio cerrado',
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
					intent: 'existing-system',
				},
				{
					id: 'nuevos-negocios',
					model: 'Por etapas',
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
					intent: 'new-product',
				},
				{
					id: 'arquitecto-fraccional',
					model: 'Mensualidad',
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
					intent: 'fractional',
				},
			],
		},

		decision: {
			headline: 'El mismo criterio; cambia la decisión.',
			body: ['No existe una arquitectura perfecta ni una tecnología que resuelva por sí sola un problema de negocio.'],
			questions: [
				{
					label: 'Contexto',
					question: '¿Qué necesita conseguir el negocio y qué capacidad tiene para hacerlo?',
				},
				{
					label: 'Evidencia',
					question: '¿Qué sabemos y qué incertidumbre conviene resolver primero?',
				},
				{
					label: 'Alternativas',
					question: '¿Qué opciones son viables y qué costos, riesgos y dependencias implican?',
				},
				{
					label: 'Trade-offs',
					question: '¿Qué ganamos, qué sacrificamos y qué decidimos postergar?',
				},
				{
					label: 'Siguiente paso',
					question: '¿Qué decisión y qué ejecución tienen sentido ahora?',
					consequence: true,
				},
			],
		},

		proceso: {
			headline: 'Cómo trabajo',
			subhead: 'Diagnosticar antes de prescribir',
			steps: [
				{
					title: 'Entender el problema y quién decide',
					body: 'Converso con las personas involucradas y reviso el producto o sistema para identificar objetivos, restricciones, autoridad y capacidad de ejecución. El resultado es una definición compartida del problema.',
				},
				{
					title: 'Comparar alternativas y recomendar',
					body: 'Evalúo las opciones considerando costos, esfuerzo, riesgos, dependencias y consecuencias para el negocio. La recomendación explica qué permite cada alternativa, qué limita y qué evidencia falta.',
				},
				{
					title: 'Acompañar una ejecución medible',
					body: 'Según el servicio, reviso una intervención, acompaño una validación por etapas o asumo una responsabilidad técnica acordada. Revisamos el rumbo cuando aparece nueva evidencia y comprobamos qué cambió.',
				},
			],
			closingTitle: 'Claridad antes que complejidad',
			closing:
				'Cada recomendación debe explicar qué resuelve, qué exige y qué consecuencias introduce. El diagnóstico es útil por sí mismo, incluso si otra persona ejecuta el plan.',
		},

		casos: {
			meta: {
				title: 'Casos de éxito | Brian Stefanovich',
				description:
					'Decisiones técnicas llevadas a la práctica: el contexto, la responsabilidad que asumí y el cambio observado en cada caso.',
			},
			viewCase: 'Ver el caso',
			backLabel: 'Todos los casos',
			// Placeholder copy for the case detail pages until the real write-ups exist.
			dummy: {
				sections: [
					{
						title: 'El desafío',
						body: 'Contenido de ejemplo. Aquí se describirá el problema de negocio y las restricciones del proyecto.',
					},
					{
						title: 'Las decisiones',
						body: 'Contenido de ejemplo. Aquí se explicarán las alternativas evaluadas, los trade-offs y la dirección elegida.',
					},
					{ title: 'El resultado', body: 'Contenido de ejemplo. Aquí se documentará el cambio observado y lo que aprendió el equipo.' },
				],
			},
			headline: 'Decisiones técnicas llevadas a la práctica',
			labels: {
				context: 'Contexto',
				responsibility: 'Responsabilidad',
				result: 'Resultado',
			},
			intro:
				'Los casos muestran el contexto, la responsabilidad que asumí y el cambio observado. No presento tecnologías como sustituto de explicar el trabajo.',
			items: [
				{
					slug: 'kepler-coach',
					name: 'Kepler Coach',
					headline: 'De un prototipo a una plataforma para múltiples organizaciones',
					context:
						'Kepler Coach necesitaba evolucionar un prototipo educativo basado en inteligencia artificial hacia una plataforma orientada a producción.',
					responsibility:
						'Lideré la estrategia de reimplementación y definí la arquitectura, los límites entre servicios y las bases de infraestructura.',
					result:
						'El trabajo dio forma a una plataforma capaz de convertir documentos, videos y otras fuentes en cursos estructurados, con una arquitectura para atender a múltiples organizaciones.',
					tags: '.NET, React, Azure',
				},
				{
					slug: 'rollkall',
					name: 'RollKall',
					headline: 'Modernización mientras el equipo seguía entregando funcionalidades',
					context: 'RollKall necesitaba modernizar una aplicación existente sin frenar el desarrollo del producto.',
					responsibility:
						'Como parte del equipo de arquitectura, lideré la migración a .NET 8 y trabajé en la reimplementación y refactorización de procesos críticos.',
					result: 'La modernización avanzó de forma progresiva mientras el equipo continuaba entregando nuevas funcionalidades.',
					tags: '.NET, modernización progresiva',
				},
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
					q: '¿También participas en el desarrollo?',
					a: 'Sí. Dependiendo del problema puedo participar como consultor, arquitecto de software fraccional, líder técnico o directamente en el desarrollo. La modalidad viene después de entender qué necesita el proyecto.',
				},
				{
					q: '¿Cómo se contrata cada tipo de trabajo?',
					a: 'Distingo el valor potencial de una oportunidad, lo que mi intervención puede influir de forma defendible y lo que la empresa puede realizar con su presupuesto, autoridad y capacidad de ejecución. Eso orienta la propuesta; el alcance y las dependencias sustentan el precio. El diagnóstico se cotiza a precio cerrado, la validación avanza por etapas y el liderazgo fraccional se acuerda con una mensualidad según dedicación, disponibilidad y responsabilidad.',
				},
				{
					q: '¿El diagnóstico me obliga a contratar la implementación?',
					a: 'No. El diagnóstico y el plan deben servirte aunque otro proveedor ejecute los cambios. Cualquier acompañamiento o implementación posterior se acuerda por separado.',
				},
				{
					q: '¿Puedes confirmar si existe mercado para una idea?',
					a: 'Puedo ayudarte a identificar incertidumbres, diseñar pruebas y evaluar factibilidad técnica. La existencia de mercado requiere evidencia comercial (por ejemplo, conversaciones, pruebas de demanda o disposición a pagar), y una evaluación técnica no la reemplaza.',
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

		contacto: {
			headline: 'Conversemos sobre la decisión que necesitas tomar',
			lead: 'Cuéntame qué está pasando, qué necesitas conseguir y cuál es la principal decisión pendiente.',
			intro:
				'No necesitas saber qué servicio corresponde. En 30 minutos evaluaremos si puedo ayudarte y cuál podría ser el siguiente paso. Si el problema queda fuera de mi experiencia, te lo diré.',
			cta: 'Conversemos 30 minutos',
			directLabel: 'Escríbeme directamente',
			linkedinLabel: 'LinkedIn de Brian Stefanovich',
			form: {
				name: 'Nombre',
				email: 'Correo',
				phone: 'Teléfono',
				message: 'Qué está pasando',
				messagePlaceholder: 'El contexto, lo que necesitas conseguir y la decisión pendiente.',
				submit: 'Abrir en mi correo',
				handoff: 'Este formulario no envía el mensaje desde la página: abre tu aplicación de correo con el texto listo para enviar.',
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
			{ label: 'Sistemas existentes', href: '/#sistemas-existentes' },
			{ label: 'Nuevos productos y negocios', href: '/#nuevos-negocios' },
			{
				label: 'Arquitecto de software fraccional',
				href: '/#arquitecto-fraccional',
			},
		],
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
