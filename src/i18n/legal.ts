export type LegalBlock = { h2: string } | { h3: string } | { p: string } | { ul: readonly string[] };

export interface LegalDocument {
	slug: 'privacy' | 'terms';
	path: string;
	crumb: string;
	title: string;
	meta: { title: string; description: string };
	updated?: string;
	blocks: readonly LegalBlock[];
}

export const privacy: LegalDocument = {
	slug: 'privacy',
	path: '/privacy',
	crumb: 'Privacidad',
	title: 'Política de privacidad',
	meta: {
		title: 'Política de privacidad | Brian Stefanovich',
		description: 'Qué datos recopila este sitio, para qué se usan, con quién se comparten y cómo ejercer tus derechos.',
	},
	updated: 'Última actualización: 12 de octubre de 2026',
	blocks: [
		{ p: 'Esta política explica cómo trata tus datos personales este sitio web, operado por Stefanovich SpA. Si contratas mis servicios, el tratamiento de los datos de tu organización se rige además por los Términos y condiciones generales de prestación de servicios.' },

		{ h2: '1. Quién es el responsable' },
		{ p: 'Stefanovich SpA, Badajoz 100, of 1014, Las Condes, Santiago de Chile. Puedes escribirme a hi@brianstefanovich.com para cualquier consulta sobre esta política o sobre tus datos.' },

		{ h2: '2. Información que recopilo' },
		{ h3: '2.1 Información que me entregas' },
		{
			ul: [
				'Información de contacto: nombre, correo electrónico y, si decides compartirlos, empresa y teléfono.',
				'Contenido de tus mensajes: lo que me escribes por correo o al agendar una conversación, incluido el contexto de tu sistema o proyecto.',
				'Datos de la reserva: fecha y hora elegidas, y la información que ingreses en el formulario de agenda.',
			],
		},
		{ h3: '2.2 Información técnica' },
		{
			ul: [
				'Datos de navegación: dirección IP, tipo de navegador y dispositivo, páginas visitadas y origen de la visita.',
				'Eventos de uso: clics en botones de contacto y apertura de páginas de servicio, que me sirven para saber qué partes del sitio resultan útiles.',
			],
		},
		{ h3: '2.3 Preferencias en tu navegador' },
		{ p: 'Si eliges modo claro u oscuro, tu elección se guarda en el almacenamiento local de tu navegador. Esa información no sale de tu dispositivo.' },

		{ h2: '3. Cómo uso tu información' },
		{
			ul: [
				'Responder tus consultas y coordinar conversaciones.',
				'Evaluar si puedo ayudarte y preparar una propuesta, cuando me lo solicitas.',
				'Medir y mejorar el sitio.',
				'Cumplir obligaciones legales, tributarias y contables.',
			],
		},
		{ p: 'No envío comunicaciones comerciales masivas ni uso tus datos para elaborar perfiles.' },

		{ h2: '4. Con quién la comparto' },
		{ p: 'No vendo ni alquilo tus datos personales. Solo intervienen terceros que prestan un servicio necesario para operar el sitio:' },
		{
			ul: [
				'Cal.com, que gestiona la agenda de conversaciones cuando reservas un horario.',
				'Google Analytics, que entrega estadísticas agregadas de uso del sitio.',
				'Proveedores de correo y alojamiento que permiten recibir tus mensajes y publicar el sitio.',
				'Autoridades, cuando una ley u orden judicial lo exija, o para proteger mis derechos en una disputa.',
			],
		},
		{ p: 'Estos proveedores tratan los datos según sus propias políticas de privacidad.' },

		{ h2: '5. Cookies y tecnologías similares' },
		{ p: 'El sitio usa cookies o identificadores de Google Analytics para medir el tráfico y el comportamiento de las visitas, y el servicio de agenda de Cal.com puede usar los suyos cuando lo abres. Las tipografías se sirven desde este mismo sitio, sin solicitudes a servicios de fuentes de terceros.' },
		{ p: 'Puedes bloquear o eliminar cookies desde la configuración de tu navegador. Si lo haces, el sitio sigue funcionando y puedes contactarme por correo.' },

		{ h2: '6. Seguridad' },
		{ p: 'Aplico medidas técnicas y organizativas razonables para proteger la información que recibo, entre ellas acceso restringido a los mensajes y reservas, y el uso de proveedores reconocidos. Ningún sistema es completamente infalible, por lo que no puedo garantizar seguridad absoluta.' },

		{ h2: '7. Conservación' },
		{ p: 'Conservo tus datos solo el tiempo necesario para atender tu consulta, ejecutar el servicio que hayas contratado y cumplir obligaciones legales. Cuando dejan de ser necesarios, los elimino o anonimizo.' },

		{ h2: '8. Tus derechos' },
		{ p: 'Conforme a la legislación chilena de protección de datos personales, puedes:' },
		{
			ul: [
				'Acceso: pedir confirmación de si trato tus datos y recibir una copia.',
				'Rectificación: corregir datos inexactos o incompletos.',
				'Supresión: solicitar que elimine tus datos cuando proceda.',
				'Oposición: oponerte a un tratamiento determinado.',
				'Portabilidad: recibir tus datos en un formato estructurado y de uso común.',
				'Bloqueo: pedir que se suspenda temporalmente el tratamiento mientras se resuelve una solicitud.',
			],
		},
		{ p: 'Para ejercerlos escribe a hi@brianstefanovich.com indicando qué derecho quieres ejercer. Respondo dentro de los plazos legales. Si consideras que no atendí tu solicitud correctamente, puedes reclamar ante la autoridad chilena de protección de datos personales.' },

		{ h2: '9. Transferencias internacionales' },
		{ p: 'Algunos proveedores, como Google y Cal.com, pueden tratar datos en servidores fuera de Chile. Cuando ocurre, uso proveedores que ofrecen garantías adecuadas de protección conforme a la ley aplicable.' },

		{ h2: '10. Menores de edad' },
		{ p: 'Este sitio y mis servicios están dirigidos a personas mayores de 18 años. No recopilo intencionalmente datos de menores.' },

		{ h2: '11. Cambios a esta política' },
		{ p: 'Puedo actualizar esta política para reflejar cambios en el sitio o en la ley. La fecha de la última actualización figura al inicio de esta página.' },

		{ h2: '12. Contacto' },
		{ p: 'Stefanovich SpA · Badajoz 100, of 1014, Las Condes, Santiago de Chile · hi@brianstefanovich.com' },
	],
};

export const terms: LegalDocument = {
	slug: 'terms',
	path: '/terms',
	crumb: 'Términos',
	title: 'Términos y condiciones generales de prestación de servicios',
	meta: {
		title: 'Términos y condiciones | Brian Stefanovich',
		description:
			'Términos generales que rigen la confidencialidad, el secreto industrial, el tratamiento de datos personales y el término de los encargos de servicios tecnológicos.',
	},
	blocks: [
		{ h3: 'Brian Stefanovich — Prestador de Servicios Tecnológicos' },
		{
			p: 'El presente instrumento establece los términos y condiciones generales que rigen la relación entre el Prestador y sus Mandantes en materia de secreto industrial, confidencialidad, tratamiento de datos personales y ciberseguridad. Forma parte integrante de todos los contratos y encargos que el Prestador suscriba, salvo estipulación expresa en contrario.',
		},

		{ h2: 'I. Definiciones' },
		{ h3: 'Artículo 1°. Definiciones' },
		{ p: 'Para los efectos de este instrumento se entenderá por:' },
		{
			ul: [
				'"Prestador": Brian Stefanovich, proveedor de servicios tecnológicos.',
				'"Mandante": toda persona natural o jurídica que contrate los servicios del Prestador.',
				'"Partes": el Prestador y el Mandante, conjuntamente.',
				'"Información Confidencial": toda comunicación, dato, documento, metodología, base de datos, estrategia comercial, información financiera, credenciales de acceso, código fuente, arquitecturas de sistemas y, en general, cualquier información sensible revelada por una Parte a la otra en el contexto del encargo, respecto de la cual se hayan adoptado medidas razonables de reserva. Se presume confidencial toda información recibida en el contexto de la relación de servicios, sin necesidad de marcación expresa.',
				'"Datos Personales": información concerniente a personas naturales identificadas o identificables, conforme a la Ley N° 21.719.',
				'"Responsable de Datos": el Mandante, en cuanto determina los fines y medios del tratamiento de datos personales de sus titulares.',
				'"Encargado de Datos / Tercero Mandatario": el Prestador, cuando trata datos personales por cuenta y bajo instrucciones del Mandante (Art. 15 bis, Ley N° 21.719).',
				'"Operador de Importancia Vital" y "Prestador de Servicios Esenciales": entidades sujetas a la Ley N° 21.663 conforme a su Art. 4°.',
				'"Secreto Industrial": know-how, metodologías, criterios de diagnóstico, marcos de análisis y estándares técnicos propios del Prestador, protegidos por la Ley N° 19.039.',
			],
		},

		{ h2: 'Secreto industrial e información confidencial' },
		{ h3: 'Artículo 2°. Obligación general de confidencialidad' },
		{
			p: 'Las Partes se obligan recíprocamente a no divulgar ni explotar, directa ni indirectamente y en ningún tiempo, la Información Confidencial a la que tengan acceso con ocasión de la relación de servicios, salvo previo consentimiento escrito de la otra Parte.',
		},
		{
			p: 'Esta obligación se extiende a todos los profesionales, representantes, ejecutivos, colaboradores y subcontratistas de cada Parte, quienes quedarán sujetos a compromisos de confidencialidad equivalentes. Se considera material confidencial, entre otros, todo documento, archivo o información contenida en espacios de almacenamiento en la nube (Google Workspace, OneDrive u otro medio autorizado), correos electrónicos, credenciales de acceso y documentación financiera, con independencia del soporte que la contenga.',
		},

		{ h3: 'Artículo 3°. Obligaciones específicas de las Partes' },
		{ p: 'Cada Parte se obliga a:' },
		{
			ul: [
				'Mantener la más estricta reserva y confidencialidad sobre todos los antecedentes compartidos y no revelarlos a terceros en forma alguna, parcial ni totalmente, ni utilizarlos para finalidad distinta de la prevista en el encargo. La Parte que entregó la información podrá autorizar su divulgación, previamente y por escrito.',
				'Proporcionar la Información Confidencial solo a las personas estrictamente necesarias para la ejecución del encargo.',
				'Restituir mutuamente la información intercambiada cuando cualquiera de las Partes así lo solicite, o proceder a su destrucción segura si la restitución no fuere posible.',
				'Adoptar, respecto de la Información Confidencial de la otra Parte, medidas de resguardo no inferiores a las empleadas para proteger la propia información confidencial, sin que estas puedan ser menores a un estándar de diligencia razonable.',
			],
		},

		{ h3: 'Artículo 4°. Excepciones a la obligación de confidencialidad' },
		{ p: 'La obligación de confidencialidad no será exigible respecto de información que:' },
		{
			ul: [
				'Sea de dominio público o se haga pública por causa no imputable a la Parte receptora.',
				'La Parte receptora pueda acreditar que conocía con anterioridad al inicio de la relación.',
				'Deba divulgarse por orden judicial o mandato de autoridad gubernamental legalmente facultada. En este caso, la Parte requerida deberá notificar de inmediato a la otra Parte y solo divulgará la información que sea estrictamente necesaria.',
				'Haya sido autorizada expresamente por escrito por la Parte titular.',
			],
		},

		{ h3: 'Artículo 5°. Secreto Industrial — Protección del know-how del Prestador' },
		{
			p: 'El Prestador ejecuta sus servicios aplicando know-how, metodologías de trabajo, marcos de análisis, criterios de diagnóstico y estándares técnicos propios, que constituyen su acervo profesional protegido como secreto industrial conforme a la Ley N° 19.039.',
		},
		{
			p: 'Las Partes declaran y acuerdan expresamente que la entrega de Información Confidencial por parte del Mandante al Prestador, o la obtención de la misma por el Prestador de cualquier otra forma, en caso alguno implicará ningún tipo de cesión o transferencia —ni aun meramente transitoria— de los derechos de propiedad intelectual o industrial que el Mandante o terceros tengan o lleguen a tener en el futuro respecto de tal información.',
		},
		{
			p: 'De igual modo, la exposición del know-how, metodologías de trabajo, marcos de análisis, criterios de diagnóstico y estándares técnicos del Prestador durante la ejecución del servicio no implicará cesión ni transferencia —ni aun meramente transitoria— de los derechos de propiedad intelectual o industrial que el Prestador tenga o llegue a tener en el futuro respecto de dichos elementos. El know-how y las metodologías del Prestador están protegidos como secreto industrial, conforme a la normativa aplicable.',
		},

		{ h3: 'Artículo 6°. Responsabilidad por infracción y secreto profesional' },
		{
			p: 'La infracción a las obligaciones de confidencialidad constituirá causal de término inmediato del encargo, reservándose la Parte afectada el derecho de reclamar todas las indemnizaciones que procedan, incluyendo daño emergente, lucro cesante y honorarios de los abogados que intervengan en la defensa de sus intereses.',
		},
		{
			p: 'Ambas Partes se obligan a mantener el secreto profesional respecto de los asuntos tratados con y para los clientes del Mandante, y a cumplir con la legislación vigente sobre protección de la vida privada y datos personales.',
		},

		{ h3: 'Artículo 7°. Vigencia de la obligación de confidencialidad' },
		{
			p: 'Las obligaciones de confidencialidad subsistirán durante toda la vigencia del encargo y por un período de dos años desde su término, con independencia de la causa que lo origine. El deber de secreto sobre datos personales subsistirá indefinidamente conforme al Art. 14 bis de la Ley N° 21.719.',
		},

		{ h3: 'Artículo 8°. Roles bajo la Ley N° 21.719' },
		{ p: 'En los encargos en que el Prestador acceda o trate datos personales de titulares del Mandante, las Partes actuarán en los siguientes roles:' },
		{
			ul: [
				'El Mandante actúa como Responsable de Datos, determinando los fines y los medios del tratamiento.',
				'El Prestador actúa como Encargado de Datos / Tercero Mandatario, tratando datos personales por cuenta del Mandante y conforme a sus instrucciones escritas, sin asumir la condición de Responsable de Datos.',
			],
		},

		{ h3: 'Artículo 9°. Contrato de encargo de tratamiento de datos' },
		{ p: 'Cuando el encargo involucre tratamiento de datos personales, las Partes suscribirán un instrumento específico, o incorporarán en el contrato respectivo:' },
		{
			ul: [
				'Objeto y duración del tratamiento.',
				'Finalidad del tratamiento.',
				'Tipo de datos personales que serán tratados.',
				'Categorías de titulares afectados.',
				'Derechos y obligaciones del Responsable y del Encargado.',
				'Instrucciones escritas del Mandante al Prestador, incluyendo si se autoriza o no la subdelegación a terceros y bajo qué condiciones.',
			],
		},
		{
			p: 'La ausencia de instrucciones escritas delimita la responsabilidad del Prestador a los tratamientos expresamente acordados y no exonera al Mandante de sus obligaciones como Responsable.',
		},

		{ h3: 'Artículo 10°. Obligaciones del Prestador como Encargado' },
		{ p: 'En su calidad de Encargado de Datos, el Prestador se obliga a:' },
		{
			ul: [
				'Tratar los datos personales únicamente conforme a las instrucciones escritas del Mandante, sin darles uso o finalidad distintos.',
				'Mantener el deber de secreto o confidencialidad sobre los datos personales tratados, el cual subsistirá tras el término del encargo.',
				'Adoptar medidas de seguridad técnicas y organizativas proporcionales al riesgo, incluyendo seudonimización, cifrado, confidencialidad, integridad, disponibilidad y resiliencia de los sistemas.',
				'Reportar al Mandante, dentro de 48 horas desde que tome conocimiento, cualquier vulneración a las medidas de seguridad que afecte los datos tratados por su cuenta.',
				'No subdelegar el tratamiento de datos a terceros sin autorización escrita previa del Mandante.',
				'Suprimir o devolver los datos al Mandante una vez concluido el encargo, salvo obligación legal de conservarlos.',
			],
		},

		{ h3: 'Artículo 11°. Obligaciones del Mandante como Responsable' },
		{ p: 'El Mandante, como Responsable de Datos, declara y se obliga a:' },
		{
			ul: [
				'Contar con base de licitud válida para el tratamiento de los datos que encarga al Prestador.',
				'Haber informado a los titulares sobre la posible participación de encargados externos, en la medida exigida por la ley.',
				'Impartir instrucciones escritas, claras y suficientes sobre los datos autorizados a tratar, la finalidad y los límites del tratamiento.',
				'Garantizar que los datos personales entregados al Prestador fueron obtenidos lícitamente y que su tratamiento no contraviene la ley ni los derechos de los titulares.',
			],
		},

		{ h3: 'Artículo 12°. Exoneración de responsabilidad del Prestador en materia de datos' },
		{ p: 'El Prestador no será responsable de infracciones a la Ley N° 21.719 derivadas de:' },
		{
			ul: [
				'Instrucciones del Mandante que resulten contrarias a la ley, ejecutadas de buena fe por el Prestador sin conocimiento de su ilicitud.',
				'Falta de base de licitud para el tratamiento, atribuible exclusivamente al Mandante.',
				'Vulneraciones derivadas de brechas en sistemas, redes o infraestructura de exclusiva administración y responsabilidad del Mandante.',
				'Incumplimiento de obligaciones de información a los titulares, cuyo cumplimiento corresponde al Mandante como Responsable.',
			],
		},

		{ h3: 'Artículo 13°. Causales de término' },
		{ p: 'El encargo o servicio contratado podrá terminar por cualquiera de las siguientes causales:' },
		{
			ul: ['Mutuo acuerdo de las Partes.', 'Término de la gestión encomendada.', 'Cierre por falta de respuesta del Mandante, conforme al procedimiento del Artículo 15°.'],
		},

		{ h3: 'Artículo 14°. Término por gestión completada' },
		{
			p: 'El término del encargo por conclusión de la gestión encomendada se materializará mediante el envío de un correo electrónico por parte del Prestador al Mandante, en el que se indique expresamente que los servicios han sido finalizados por este motivo. Dicha comunicación producirá los efectos del término a contar de su fecha de envío.',
		},

		{ h3: 'Artículo 15°. Término por falta de respuesta del Mandante' },
		{
			p: 'Las Partes autorizan expresamente al Prestador para dar por finalizado el encargo por falta de respuesta del Mandante, cuando, habiéndose realizado un requerimiento al Mandante, éste no respondiere tras reiterados intentos de contacto por correo electrónico y/o llamadas telefónicas, conforme al siguiente procedimiento:',
		},
		{
			ul: [
				'El Prestador dejará constancia escrita de los intentos de contacto realizados, indicando fecha, medio y contenido del requerimiento.',
				'Si el Mandante no responde dentro de un plazo razonable contado desde el último intento de contacto, el Prestador podrá notificar el término del encargo mediante correo electrónico dirigido a la dirección registrada por el Mandante.',
				'La notificación de término deberá indicar expresamente la causal invocada y la fecha efectiva de cierre del encargo.',
			],
		},

		{ h3: 'Artículo 16°. Solicitud de reapertura' },
		{
			p: 'En caso de que el Mandante esté en desacuerdo con la finalización del encargo motivada por falta de respuesta, podrá solicitar la reapertura dentro de los 3 días corridos siguientes a la notificación de término. Dicha solicitud deberá constar por escrito —mediante correo electrónico— y expresar los motivos y circunstancias en que se funda.',
		},
		{
			p: 'La solicitud de reapertura será revisada por el Prestador, quien emitirá respuesta escrita al Mandante. La reapertura no será procedente si el Mandante no cumple con los requisitos de respuesta dentro del plazo señalado.',
		},

		{ h3: 'Artículo 17°. Modificación y nulidad parcial' },
		{
			p: 'Estos Términos y Condiciones se tendrán para todo efecto como parte íntegra a cada Contrato de Prestación de Servicios suscrito entre las Partes. En caso de contradicción, prevalecerá el contrato específico en cuanto a las condiciones particulares del encargo, y estos Términos en todo lo relativo a secreto industrial, confidencialidad y datos personales, salvo que el contrato específico establezca condiciones más estrictas.',
		},
		{
			p: 'Cualquier modificación a estos Términos y Condiciones requerirá acuerdo escrito y firmado por ambas Partes, y no afectará encargos ya en ejecución, salvo acuerdo expreso en tal sentido. En caso de declararse la nulidad de alguna de las cláusulas de estos Términos, dicha nulidad no afectará la validez de las restantes cláusulas, las cuales mantendrán su plena vigencia y efecto.',
		},

		{ h3: 'Artículo 20°. Ley aplicable y jurisdicción' },
		{
			p: 'Estos Términos y Condiciones se rigen por las leyes de la República de Chile. El Mandante se somete a la jurisdicción de los Tribunales Ordinarios de Justicia con asiento en la ciudad de Santiago, renunciando expresamente a cualquier otra jurisdicción que pudiere corresponderle.',
		},

		{ h3: 'Artículo 21°. Vigencia' },
		{
			p: 'Estos Términos y Condiciones entran en vigor en la fecha de suscripción del encargo respectivo o, en caso de no existir firma separada, desde el inicio de ejecución del encargo convenido entre las Partes.',
		},
	],
};
