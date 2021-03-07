# Esa web se ve mal pero... ¿Por que?

Siempre recordaré un simpatico ejercicio que soliamos hacer en clase de Diseño Grafico. Nuestro profesor nos insistía sobre la mala calidad general de los diseños de los pequeños y medianos emprendimientos en nuestra region. Tanto asi que solíamos elegir un lugar al azar en Google Maps y nunca recorríamos mas de tres calles en street view para encontrar pesimos diseños de logotipos y cartelería. El ejercicio consistía en explicar cuales eran los motivos que hacia que se vieran mal.

Hace unos días termine de leer [Design for Hackers](https://www.oreilly.com/library/view/design-for-hackers/9781119998952/) de David Kadavy, un excelente libro que expone marcos conceptuales muy claros para entender y resolver problemas de diseño web. Y mientras lo leía no podía parar de pensar en repetir el ejercicio que haciamos en clase, pero esta vez aplicado a websites utilizando los conceptos del libro, asi que alla vamos!

## Los principios del diseño y como usarlos en tu contra. Una historia verídica

Me tomó algo de trabajo encontrar un buen ejemplo de un mal diseño, pero después de unas horas buscando encontre una excelente website para mostrarles: [San Diego Performance European](https://sdpeuro.com)


El primer paso en el proceso de diseño de un sitio web, comienza resolviendo las siguientes preguntas:

 1. ¿Que esta buscando el usuario en el sitio web, cuales son sus necesidades?
 2. ¿Cuales son los objetivos del dueño del sitio?

Muchos proyectos se llevan a cabo sin tener respuestas claras a ninguna de estas dos preguntas, y conllevan a experiencias de usuario confusas y desagradables. ¿Cual es el objetivo de SDPE con su website?

No se trata de un blog, ni una cartelera de promociones, ni una tienda virtual. Al parecer se trata de una pagina de identidad corporativa, en la que cuentan de que se trata su companía, y dejan algunos metodos de contacto. Por lo tanto, podriamos decir que los objetivos de esta web son:

 1. Que su empresa exista en internet y aparecer en los buscadores
 2. Comunicar su identidad corporativa
 3. Facilitar metodos de contacto a potenciales clientes
 4. Captar clientes y aumentar sus ventas

Ahora bien, ¿que busca un usuario que visita esta web? Entre muchas, podriamos decir que lo principal es:

 1. Conocer el taller
 2. Buscar ofertas
 3. Contactar facilmente con el taller
 4. Comparar servicios con otros talleres
 
![San Diego Performance European](https://raw.githubusercontent.com/BrianStefanovich/Personal-Site/BlogPost/content/blog/sdpeuro.png)
 
 Lo primero que podemos decir es que el sitio desatiende las necesidades de ambas partes. Las pocas imagenes que aparecen, muestran autos fuera de encuadre. Si vieramos las imagenes aisladamente, serñia dificil asociarlas con un taller mecanico. No se ven herramientas, trabajadores, ni nada que nos indique que se trata de un taller dan mas bien la idea de una colección privada de automoviles. 
 
 No comunica adecuadamente su identidad corporativa, da un mensaje soso, plano y ambiguo. Tampoco capta clientes ni aumenta sus ventas, no hay llamadas a la acción, integración con redes sociales ni sección de ofertas.
 Desde la perspectiva del usuario, no podemos llegar a conocer el taller, ni sus valores, ni su identidad. Tampoco tenemos acceso a ofertas o descuentos. Se nos dan datos de contacto tradicionales (direccion y telefono) por lo que no tenemos ninguna manera moderna de contactarnos con el taller y tampoco tenemos información relevante como para comparar sus servicios con otros talleres.

Desde el contenido, han desatendido prácticamente todos los objetivos por las que este sitio podria existir en internet, pero es que aún hay mas, porque hay errores de diseño muy graves.

### ¿Por que se ve desordenado?

Una de las primeras cosas en las que pienso al entrar al sitio web, es en desorden. El principio de dirección y dominancia nos dan herramientas para entender que es lo que sucede: 

> #### Dominance
> The principle of dominance creates visual interest in a composition by drawing
the viewer’s eye to an important element in the composition. When an element
is dominant in a composition, it is one of the first things your eye is drawn to.
It acts almost like a magnet when you first lay eyes on the composition. It also
acts as an anchor – you keep returning to it as you explore other parts of the
composition.

> #### Direction
> The principle of direction helps guide the viewer’s eye throughout the
composition and helps keep the viewer looking at the design piece. Direction
can be established pretty explicitly through lines (and sometimes even arrows!),
but sometimes more implicitly through shapes, shading, or even invisible
alignment within the composition.


 Si bien hay una estructura y un orden, por alguna razón el ojo no entiende por donde empezar, ni encuentra lugares comodos donde posarsrse. Si miramos el header veremos que esta construido por tres filas. La superior, enlista las marcas con las que trabajan, pero no es clickeable. El verdadero menú, es la fila inferior, que tiene la misma altura y la misma fuente que la superior, pero por la elección de colores, se encuentra en segundo órden. Estoy seguro de que muchos usuarios confundieron mas de una vez, la fila azul con el menu de navegación.

![enter image description here](https://raw.githubusercontent.com/BrianStefanovich/Personal-Site/BlogPost/content/blog/Test/header.png)
La otra pregunta que podemos hacer es, por que el logo tiene ese tamaño y esta alineado de esa manera. Un tamaño pequeño y llevado tanto hacia el borde izquierdo, lo coloca en un lugar de poca relevancia. ¿Que es lo mas importante del header? A juzgar por el diseño, la frase "Serving San Diego Since 1996". El resto, es un cluster de elementos que  quedan relegados al fondo. 

### ¿Por que se siente dificil de leer?

Al navegar por las paginas del website, otra de los problemas que encuentro es lo monótono y dificil que se me hace leer los bloques de texto. A simple vista no me dan ganas de leerlos, y son dificiles de scanear porque al igual que el resto de la web, carecen de una jerarquía y estructura clara que me permita entender la información mas relevante con un simple vistazo.

Sin embargo, el problema con los bloques de los bloques de texto tienen que ver tambien con la textura que se genera entre los margenes, espaciados y altura de linea. Los princpios de similarity, rithm y texture no ayudan a entender esto:

> ### Similarity
> Similarity means that various elements of a composition – their shape, color,
line characteristics (smooth or jagged), or texture – are similar to one another.
Similarity makes a composition compelling because, as your eye travels
throughout that composition, it is constantly reminded of things that it has seen
before within that same composition.

> ### Rhythm
>With similarity often comes rhythm. Rhythm is a bit more abstract than
similarity is. Probably the first thing that you think about when you think
about rhythm is music. Just as the repetition of a snare or kick drum at a
consistent point in a measure of music, over and over again, creates a sense of
rhythm in music, the repetition of a particular design element or characteristic
throughout a composition create a sense of rhythm in design.

> ### Texture
>Texture is the visual indication that something has characteristics that would be
palpable if you were able to touch them. For example, if something looks like
sandstone – or actually is made of sandstone – then that is texture. Texture is
related to similarity and rhythm in that if a shape is repeated enough times, and
at a fi ne enough scale, it generally creates a texture. Texture keeps a composition
interesting because it provides an opportunity for the principle of contrast (which
I’ll talk about soon) and can create a sense of depth in foreground/background
relationships.

A lo largo de toda la web, los espaciados entre objetos son practicamente los mismosm y en especial con el texto, las alturas de linea y espaciados practicamente no cambian entre titulos y ccuerpos de texto. Esto genera una textura homogenea en todo el texto. Esto sumada a lo repetitivo  

>### Contrast
>The principle of contrast causes certain parts of a composition to stand out
more than others because of differences – or contrast – between elements.
Things in a composition can contrast with one another in terms of size, color,
value (lightness or darkness), texture, shape, line quality . . . just about any way
imaginable. By using contrast you can create dominance, or create foreground/
background relationships. Contrast can be used as a guiding principle
throughout an entire design (like if something is entirely black and white), or it
can be used sparingly in a design that is mostly homogeneous, for more impact.
  

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTUwNTM2NTUzOSwtMjIwMDU1NjY1LDc1OD
c1NjA0Myw0MTM2ODEzMDksLTc0NzA4NTYxNywxOTAwMTMwMDA3
LDE4OTgxNzA5NjAsNzE0NTkwOTE3LDIwMDY3ODU2MjQsMTQ1ND
AwNzcwNSwxNDk1NjI1Njg5LC0yMDU0MDc2NDg3LDcwMTY0ODgw
LDEwOTkxNjY3MDAsLTE3Njg2NjYwODEsOTQxODY1OTczLDE0Mj
Y1NDM4OTgsLTEyNjQwNDUwODgsMTk1NjY1NzEzMSwtMzQzMDM1
NjAwXX0=
-->