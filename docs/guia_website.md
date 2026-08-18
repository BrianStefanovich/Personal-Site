La landing debe sentirse como una **consultoría senior antes que como una software factory**. El visitante no debería salir pensando “Brian programa en .NET, React y Azure”, sino:

**“Esta persona entiende cómo conectar decisiones técnicas con decisiones de negocio, y probablemente pueda ayudarme a ordenar mi problema.”**

Ese principio debería gobernar diseño, copy, jerarquía visual y conversión. Además, encaja directamente con tu manual de marca: diagnóstico primero, trade-offs explícitos, claridad antes que complejidad y cada recomendación conectada con una consecuencia de negocio. 

---

# 1. Objetivo de la landing

La página tiene un único objetivo comercial principal:

> **Conseguir que un prospecto cualificado agende una primera conversación de 30 minutos.**

No intentaría cerrar una consultoría desde la web.

La landing tiene que conseguir tres microconversiones previas:

1. **Reconocimiento:** “este problema se parece al mío”.
2. **Credibilidad:** “Brian parece entender este tipo de situación”.
3. **Bajo riesgo:** “puedo hablar con él sin comprometerme ni entrar en un proceso comercial agresivo”.

Entonces:

**Problema → relevancia → criterio → solución → evidencia → confianza → CTA.**

No:

**empresa → servicios → tecnologías → formulario.**

---

# 2. Concepto creativo del sitio

Definiría la dirección creativa como:

## **“Arquitectura visible”**

La web debería parecer un sistema que está siendo pensado.

No una página futurista de tecnología.

No una agencia creativa.

No una web corporativa genérica.

Visualmente debería recordar ligeramente a:

* esquemas de arquitectura;
* diagramas;
* planos técnicos;
* conexiones entre decisiones;
* capas;
* dependencias;
* nodos;
* caminos alternativos;
* anotaciones técnicas.

Pero de forma **extremadamente abstracta y editorial**.

Esto encaja muy bien con el sistema visual que ya definiste: hairlines, marcos técnicos, tipografía monoespaciada para etiquetas y un diseño prácticamente monocromático. 

La metáfora visual central sería:

> **Un problema puede tener varios caminos. La arquitectura consiste en saber cuál elegir.**

Esto conecta perfectamente con:

**“Mejor software empieza con mejores decisiones.”**

---

# 3. Sitemap

Aunque sea una landing, diseñaría desde ahora una arquitectura que pueda crecer.

## Fase inicial

```text
/
├── #problemas
├── #servicios
├── #como-trabajo
├── #casos
├── #sobre-mi
├── #faq
└── #contacto
```

Es una sola página.

El menú utiliza anchors y lleva a cada sección sin navegación compleja.

### Navegación

**Brian Stefanovich**

Servicios
Cómo trabajo
Casos
Sobre mí

**Conversemos 30 minutos →**

No pondría más.

---

## Evolución futura

Una vez que tengas casos y contenido SEO:

```text
/
├── /servicios/
│   ├── sistemas-existentes
│   ├── nuevos-negocios-software
│   └── arquitecto-fraccional
│
├── /casos/
│   └── /[caso]
│
├── /insights/
│   └── /[articulo]
│
├── /sobre-mi
│
└── /contacto
```

La landing sigue siendo el centro del sistema.

No construiría esas páginas en la primera versión salvo que necesitemos profundidad comercial o SEO.

---

# 4. Estructura narrativa

La página debería estar diseñada como una conversación.

## 01 — Hero

**¿Qué haces y por qué debería interesarme?**

↓

## 02 — Problema

**¿Entiendes lo que me está pasando?**

↓

## 03 — Tres situaciones

**¿Cuál de estas se parece a mí?**

↓

## 04–06 — Servicios

**¿Cómo puedes ayudarme exactamente?**

↓

## 07 — Filosofía

**¿Cómo piensas?**

↓

## 08 — Proceso

**¿Qué ocurrirá si trabajamos juntos?**

↓

## 09 — Casos

**¿Has hecho algo parecido antes?**

↓

## 10 — Sobre Brian

**¿Quién está detrás de todo esto?**

↓

## 11 — Fit

**¿Soy el tipo de cliente adecuado?**

↓

## 12 — FAQ

**¿Qué riesgo tiene contactarte?**

↓

## 13 — CTA

**Bien. Hablemos.**

Esa progresión es mucho más importante que cualquier efecto visual.

---

# 5. Hero

Esta es la zona más importante del sitio.

Debe ocupar aproximadamente **80–90% del viewport inicial** en desktop y prácticamente toda la primera pantalla móvil.

No pondría fotografías.

No pondría una ilustración de una persona programando.

No pondría screenshots.

No pondría logos de tecnologías.

## Composición desktop

Dos columnas asimétricas, aproximadamente **7 / 5**.

### Izquierda

Eyebrow:

**ARQUITECTURA · CONSULTORÍA · SOFTWARE**

Headline:

# Mejor software empieza

# con mejores decisiones.

Bajada:

> Ayudo a empresas a resolver sistemas que las frenan, construir nuevos productos y tomar decisiones técnicas con criterio de negocio.

CTA:

**Conversemos 30 minutos →**

Microcopy:

**Primera conversación sin costo · No sustituye una asesoría.**

### Derecha

Aquí colocaría uno de los elementos visuales distintivos de toda la marca.

Un **diagrama abstracto interactivo de decisión**.

Por ejemplo:

```text
PROBLEMA

     ┌── Refactorizar
     │
─────●── Modernizar ─────●
     │
     ├── Reemplazar
     │
     └── No cambiar
```

Una de las líneas termina destacándose en Blueprint.

No comunica una arquitectura concreta.

Comunica:

**alternativas → decisión → dirección.**

---

# 6. Animación del hero

Muy sutil.

Al cargar:

1. aparece el eyebrow;
2. headline entra con un fade/translate de aproximadamente 10–15 px;
3. aparece la bajada;
4. aparece CTA;
5. finalmente se dibujan lentamente las líneas del diagrama.

Todo en aproximadamente **700–1000 ms**.

No usaría animación letra por letra.

No usaría typewriter.

No usaría partículas.

No usaría parallax agresivo.

No usaría animaciones infinitas.

Tu manual ya establece movimiento calmado, deliberado y entre aproximadamente 200–450 ms para interacciones normales. 

Después de la entrada, el diagrama queda prácticamente estático.

---

# 7. El primer scroll

Al comenzar a bajar, quiero que ocurra algo importante:

el visitante deja atrás la promesa y entra inmediatamente en **su problema**.

### CUANDO EL SOFTWARE EMPIEZA A PESAR

# No todos los problemas de software necesitan más código.

Esta sección debería ser visualmente mucho más vacía.

Gran headline.

Poco texto.

Mucho espacio.

Puede aparecer una pequeña representación:

```text
Más código
    ↓
Más dependencias
    ↓
Más riesgo
    ↓
Más costo de cambio
```

Y una línea final:

**A veces lo primero que necesitamos cambiar no es el software. Es la decisión.**

No convertiría esta sección en un bloque largo.

Su función es reposicionar mentalmente al visitante.

---

# 8. Las tres puertas de entrada

Esta es probablemente la segunda sección comercial más importante.

Título:

# Tres situaciones. Tres formas de ayudar.

Tres tarjetas grandes.

No las trataría como “service cards” tradicionales.

Cada tarjeta comienza con **la situación del cliente**.

---

### 01

**EL SISTEMA ESTÁ FRENANDO AL NEGOCIO**

Un esquema visual de varias capas donde una dependencia aparece bloqueando otras.

↓

**Sistemas existentes**

---

### 02

**HAY UNA OPORTUNIDAD QUE NECESITA CONVERTIRSE EN SOFTWARE**

Visualmente:

```text
IDEA
 │
 ├─ hipótesis
 ├─ producto
 ├─ software
 └─ negocio
```

↓

**Nuevos negocios basados en software**

---

### 03

**EL EQUIPO NECESITA DIRECCIÓN TÉCNICA SENIOR**

Varias ramas convergiendo hacia un nodo de decisión.

↓

**Arquitecto fraccional**

---

## Interacción

Al hover:

* el hairline de la tarjeta pasa de Fog a Blueprint;
* el diagrama interior cambia levemente;
* aparece o se desplaza 4–6 px una flecha;
* nunca cambia dramáticamente el fondo.

La interacción debe decir:

**“puedes entrar por aquí”.**

No:

**“mira qué interesante es esta animación”.**

---

# 9. Diseño de las tres secciones de servicio

No haría tres grandes bloques idénticos.

Eso hace que una landing larga resulte monótona.

Mantendría la misma gramática visual, pero variaría composición.

## Sistemas existentes

Más diagnóstico.

Visual:

un sistema de cajas conectadas donde algunas dependencias generan tensión.

Etiquetas como:

`DEPENDENCIA`

`RIESGO`

`COSTO DE CAMBIO`

`DEUDA`

Y después:

`DIRECCIÓN`

La representación visual debería evolucionar de:

**complejidad → claridad.**

---

## Nuevos negocios

Más abierto y exploratorio.

Visual:

un árbol de decisiones.

```text
OPORTUNIDAD
      |
      ↓
   HIPÓTESIS
   /      \
VALIDAR   CONSTRUIR
            |
           MVP
```

El mensaje visual:

**No todo camino termina en código.**

Muy poderoso para tu posicionamiento.

---

## Arquitecto fraccional

Aquí utilizaría una metáfora diferente.

Varias áreas:

```text
PRODUCTO
   \
EQUIPO ── DECISIÓN ── ARQUITECTURA
   /
NEGOCIO
```

El arquitecto ocupa el punto de conexión.

No como jefe.

Como **capacidad transversal**.

---

# 10. El CTA como sistema

No debería existir un solo CTA al final.

Pero tampoco veinte botones idénticos.

Usaría tres niveles.

## CTA primario

Blueprint sólido:

**Conversemos 30 minutos →**

Aparece:

* hero;
* después de los servicios;
* final.

Tres veces aproximadamente.

---

## CTA contextual

Links más discretos:

**Conversemos sobre tu sistema →**

**Conversemos sobre tu idea →**

**Evaluemos si tiene sentido →**

Todos llevan al mismo scheduler, pero podemos enviar un parámetro distinto.

Ejemplo conceptual:

```text
?intent=existing-system
?intent=new-product
?intent=fractional
```

Esto tiene mucho valor comercial porque al llegar a la reunión ya sabemos qué motivó al prospecto.

---

## CTA persistente

En desktop, la navegación se vuelve sticky al hacer scroll.

Siempre queda:

**Conversemos 30 minutos**

arriba a la derecha.

En móvil, evaluaría una barra inferior muy discreta después del primer viewport:

**Conversemos 30 minutos →**

No debería aparecer desde el segundo cero; puede activarse después de que el usuario haya hecho aproximadamente un 15–20% de scroll.

---

# 11. Qué debería ocurrir al pulsar CTA

Idealmente no enviaría inmediatamente a Calendly en otra página.

Abriría un modal o drawer.

### Conversemos

Pequeño texto:

> Esta conversación sirve para entender brevemente tu situación y evaluar si tiene sentido trabajar juntos. No es una sesión de asesoría ni un diagnóstico.

Después:

**¿Qué describe mejor tu situación?**

`Sistema existente`

`Nuevo producto`

`Arquitectura fraccional`

`Otro`

Y recién entonces:

**Elegir horario →**

Esto tiene dos ventajas:

reduce la ambigüedad y proporciona contexto para la reunión.

No pondría un formulario de diez campos.

---

# 12. Casos de uso

Hasta tenerlos escritos, mostraría tres placeholders estructurales.

Pero visualmente diseñaría desde ahora el componente correcto.

Cada caso debe empezar por:

### [PROBLEMA]

no por:

### [.NET + React + Azure]

La tarjeta debería decir:

**Situación**

→

**Decisión**

→

**Resultado**

Y solo al final:

`STACK / CONTEXTO`

Esto refuerza constantemente el mismo posicionamiento.

Tu experiencia real ya te permite sustentar autoridad en arquitectura, modernización, fintech, plataformas, integraciones y liderazgo técnico, sin tener que convertir la web en un currículum. 

---

# 13. La sección “Cómo pienso”

Esta puede convertirse en una de las partes visualmente más memorables.

Título:

# La arquitectura es una decisión, no un objetivo.

Debajo construiría una especie de **canvas de decisiones**:

```text
NEGOCIO
¿Qué necesitamos conseguir?

        ↓

SISTEMA
¿Qué restricciones existen?

        ↓

ALTERNATIVAS
¿Qué podemos hacer?

        ↓

TRADE-OFFS
¿Qué ganamos y qué sacrificamos?

        ↓

DECISIÓN
¿Qué tiene sentido ahora?
```

Al hacer scroll, cada nodo se activa.

No como una animación espectacular.

Como una explicación progresiva.

En móvil sencillamente se transforma en vertical.

---

# 14. El proceso

Aquí utilizaría un **stepper vertical**.

```text
01
│
Entender
│
02
│
Hacer visible
│
03
│
Evaluar
│
04
│
Definir
│
05
│
Ejecutar
```

Una línea une las cinco etapas.

Mientras el visitante hace scroll, la línea pasa progresivamente de Fog a Blueprint.

Es una animación funcional: explica avance.

El final dice:

> **Una buena decisión tiene que llegar al software.**

Y justo debajo:

**Conversemos 30 minutos →**

Es un momento natural de conversión porque acabamos de responder:

**“¿cómo sería trabajar contigo?”**

---

# 15. Sobre mí

No la presentaría como una biografía tradicional.

Evitaría:

“Hola, soy Brian…”

El visitante ya sabe quién eres.

Usaría:

### BRIAN STEFANOVICH

# Entre el negocio y la ingeniería.

Desktop:

40% retrato / 60% texto.

Esta sería probablemente **la única fotografía importante de toda la landing**.

Fotografía real.

Nada excesivamente corporativo.

Plano medio.

Fondo neutro.

Mirada natural.

La presencia humana aquí importa porque hasta ahora toda la experiencia ha sido deliberadamente técnica y abstracta.

Esta sección cambia:

**“consultoría”**

por:

**“voy a trabajar con esta persona”.**

Ahí sí tiene sentido introducir Copper de manera extremadamente discreta, porque tu manual lo reserva para una dimensión más humana. 

---

# 16. Sistema visual

Tu manual ya proporciona una base muy buena y la mantendría casi intacta. 

## Fondo

Principal:

**Porcelain #F4F0E8**

Alternancia ocasional:

**Carbon #101311**

No haría blanco puro + negro puro.

El Porcelain le da una calidad ligeramente editorial y más sofisticada.

---

## Acción

**Blueprint #465CD4**

Solo para:

* CTA;
* links;
* estado activo;
* líneas seleccionadas;
* decisiones importantes.

Esto hace que el usuario aprenda rápidamente:

> **azul = acción / dirección.**

Muy útil para conversión.

---

## Copper

**#A65330**

Muy poco.

No para CTA.

No para competir con Blueprint.

Podría aparecer en:

* detalle de retrato;
* consecuencia humana;
* una cita;
* pequeñas anotaciones.

Tal como establece el manual. 

---

# 17. Tipografía

Seguiría exactamente la arquitectura tipográfica definida.

### Montserrat 700

Headlines.

Grande.

Pocas palabras.

---

### Open Sans 400

Explicación.

Mayor interlineado.

Lectura cómoda.

---

### JetBrains Mono 500

Para lenguaje del sistema:

`PROBLEMA`

`DECISIÓN`

`RIESGO`

`FASE 01`

`SERVICIO 02`

Esto es importante.

JetBrains Mono no debe significar “soy programador”.

Debe significar:

**“estás viendo una anotación dentro de un sistema.”**

Eso cambia completamente su percepción. 

---

# 18. Grid y composición

Mantendría el grid de 12 columnas definido en el manual. 

Pero visualmente evitaría centrar todo.

Muchos sitios SaaS terminan pareciendo:

```text
      TITLE
  text text text
    [button]

  card card card
```

Tu sitio debería sentirse más editorial.

Usaría:

* headings alineados a izquierda;
* grandes vacíos;
* secciones 7/5;
* secciones 4/8;
* ocasionalmente texto ocupando solo 6 columnas;
* diagramas usando las otras 6.

Mucho **espacio negativo**.

Eso transmite seniority.

---

# 19. Marcos técnicos

Tu manual define un recurso que explotaría bastante:

**hairline de 1 px y borde inferior de 2 px.** 

Puede convertirse en uno de los elementos más reconocibles de la web.

Usaría estos marcos alrededor de:

* servicios;
* casos;
* diagrams;
* pequeños bloques de decisión;
* proceso.

No usaría sombras.

No usaría glassmorphism.

No usaría grandes gradients.

No usaría tarjetas flotando.

La interfaz tiene que sentirse **construida**, no decorada.

---

# 20. Iconografía

No necesitaríamos muchos iconos.

Preferiría diseñar unos **6–8 glifos propios** que reutilicen la lógica del símbolo de marca:

* capas;
* bifurcación;
* dependencia;
* nodo;
* integración;
* decisión;
* sistema;
* dirección.

Siempre lineales.

Nunca ilustraciones isométricas.

Nunca íconos 3D.

Nunca emojis.

Eso sigue explícitamente la dirección de iconografía de tu manual. 

---

# 21. Animaciones

La regla debería ser:

> **La animación explica estado, relación o jerarquía. Nunca decora.**

Usaría principalmente:

**Draw line**

para diagramas.

**Fade + translate 8–16 px**

para entrada de elementos.

**Progress line**

para procesos.

**Node highlight**

para decisiones.

**Border transition**

para tarjetas.

**Arrow movement 4 px**

para links.

Nada más.

No hay razón para usar:

* counters animados;
* blobs;
* partículas;
* rotaciones;
* scroll horizontal innecesario;
* vídeos automáticos;
* 3D;
* WebGL.

Que puedas desarrollarlo no significa que debas demostrarlo.

De hecho, **no hacerlo es coherente con la propia tesis de la marca**.

---

# 22. Tono y voz

Tu manual ya lo define muy bien. 

Lo traduciría a cuatro reglas para toda la web.

## 1. Calmado

Nunca:

> “Tu software está destruyendo tu negocio.”

Sí:

> “Un sistema puede seguir funcionando y convertirse al mismo tiempo en una restricción.”

---

## 2. Específico

Nunca:

> “Construyo soluciones digitales escalables.”

Sí:

> “Te ayudo a decidir qué conviene cambiar, qué puede esperar y qué no debería tocarse todavía.”

---

## 3. Criterio antes que autoridad

Nunca:

> “Soy experto en arquitecturas enterprise altamente escalables.”

Sí:

> “Una arquitectura más sofisticada no siempre es una arquitectura mejor.”

---

## 4. Primera persona

No:

> “Nuestro equipo trabaja…”

Sí:

> “Trabajo contigo…”

> “Mi recomendación…”

> “Puedo incorporarme…”

Es una marca personal y conviene aprovecharlo. 

---

# 23. Un recurso de copy que usaría en toda la página

Una estructura recurrente:

**No X. Y.**

Por ejemplo:

> No más arquitectura. **Mejor arquitectura.**

> No más software. **Mejores decisiones.**

> No construir todo. **Construir lo que importa.**

> No reemplazar al equipo. **Aumentar su capacidad de decidir.**

> No eliminar todos los riesgos. **Saber cuáles estamos aceptando.**

Pero con moderación.

Dos o tres veces en toda la página.

No convertirlo en gimmick.

---

# 24. Mobile

No diseñaría mobile como una versión comprimida de desktop.

Cambiaría algunos conceptos.

El diagrama hero se vuelve horizontalmente simplificado.

Las tres tarjetas pasan a una secuencia vertical.

Los diagramas complejos se vuelven pequeñas representaciones lineales.

Las líneas del proceso se transforman en una timeline vertical.

El nav se reduce a:

**logo + CTA + menú**

Y después de cierto scroll:

**Conversemos 30 minutos →**

como CTA sticky inferior.

En teléfono es especialmente importante que el botón permita agendar en **máximo dos interacciones**.

---

# 25. Velocidad y experiencia

Para esta marca, rendimiento también comunica calidad técnica.

El sitio debería ser extremadamente rápido.

No cargaría:

* vídeo de fondo;
* librerías de animación gigantes;
* decenas de fuentes;
* JavaScript innecesario;
* imágenes de 5 MB.

Idealmente la mayor parte de los diagramas serían SVG.

La web debería sentirse inmediata.

Ese detalle tiene además una consecuencia interesante:

**la propia landing se convierte silenciosamente en evidencia de tu criterio técnico.**

---

# 26. La página final, visualmente

La experiencia completa debería alternar:

**Porcelain / mucho aire**

↓

**diagrama**

↓

**Carbon / concepto fuerte**

↓

**Porcelain / servicios**

↓

**arquitectura visual**

↓

**casos**

↓

**presencia humana**

↓

**CTA final oscuro**

Y terminaría con una sección Carbon de casi todo el viewport:

### PRIMERA CONVERSACIÓN

# Cuéntame qué está pasando.

Texto breve.

**[Conversemos 30 minutos →]**

`30 MIN · SIN COSTO · NO SUSTITUYE UNA ASESORÍA`

Sin ningún elemento más compitiendo.

---

# 27. Qué quiero que sienta un prospecto

Si hacemos esto bien, la secuencia psicológica debería ser:

**Primeros 5 segundos**

“Esto habla de decisiones, no solamente de programación.”

**15 segundos**

“Uno de estos problemas se parece bastante al mío.”

**30–60 segundos**

“Entiende cómo pensar este tipo de situación.”

**2 minutos**

“Parece alguien senior y pragmático, no alguien que va a intentar venderme una reescritura.”

**Final**

“Vale la pena tener una conversación.”

Ese es el verdadero funnel.

---

## Mi recomendación para la identidad completa de la landing

No intentaría competir visualmente con consultoras tecnológicas mostrando más tecnología.

Haría exactamente lo contrario.

**Mucho espacio.
Muy pocas palabras por pantalla.
Diagramas en lugar de ilustraciones.
Problemas en lugar de features.
Decisiones en lugar de tecnologías.
Una sola acción visualmente dominante.**

Y usaría como sistema conceptual transversal tres palabras:

**PROBLEMA → DECISIÓN → DIRECCIÓN**

Esas tres ideas pueden aparecer en diagramas, animaciones, casos, proceso y contenido y convertirse casi en un segundo lenguaje de la marca.

Así el sitio no solamente *dice* que ofreces claridad antes que complejidad.

**La propia experiencia de navegarlo lo demuestra.** 
