import type { CardOverride } from '../cardOverrides';

export const es04: Record<string, CardOverride> = {
  "fw-13": {
    frontQuestion: "¿Qué artefacto muestra las etapas, acciones, pensamientos y emociones de un cliente hacia una meta?",
    frontScenario: "El equipo quiere entender cómo alguien elige, compra, se incorpora y pide ayuda, no mirar una sola pantalla aislada.",
    backInfo: "Customer Journey Map (mapa del recorrido del cliente): visualización de la experiencia de una persona concreta en el tiempo hacia una meta, con etapas, acciones, pensamientos, emociones y puntos de contacto. Básalo en evidencia real y delimita bien el actor y el escenario.",
  },
  "fw-14": {
    frontQuestion: "¿Qué mapa describe una experiencia completa de vida, más allá de un solo producto?",
    frontScenario: "El equipo estudia «mudarse de casa» con inmobiliarias, bancos, servicios y trámites, no solo su propia app.",
    backInfo: "Experience Map (mapa de experiencia): representación de una vivencia amplia alrededor de una meta, que puede cruzar varios productos y organizaciones. Úsalo para orientarte en el contexto total antes de detallar el recorrido de tu producto.",
  },
  "fw-15": {
    frontQuestion: "¿Qué técnica ordena las actividades por recorrido y corta las entregas por valor?",
    frontScenario: "El equipo ve el flujo completo en la pared y busca el primer lanzamiento pequeño que aún tenga sentido entero.",
    backInfo: "User Story Mapping (mapa de historias de usuario): técnica que ordena actividades y tareas en horizontal según el recorrido y corta entregas en vertical por valor. Así conservas el sentido de punta a punta en vez de priorizar tareas sueltas.",
  },
  "fw-16": {
    frontQuestion: "¿Qué mapa descompone un trabajo central en pasos universales como definir, preparar y supervisar?",
    frontScenario: "El equipo quiere encontrar oportunidades en todo el trabajo del cliente, no solo alrededor de sus funciones actuales.",
    backInfo: "Job Map (mapa del trabajo): vista ordenada de los pasos que sigue una persona para lograr un trabajo, independiente de cualquier solución. Revisa cada paso —definir, localizar, preparar, confirmar, ejecutar, supervisar— y busca necesidades sin cubrir.",
  },
  "ia-01": {
    frontQuestion: "¿Qué disciplina organiza la información para que cada persona se ubique y encuentre lo que busca?",
    frontScenario: "La plataforma tiene cientos de páginas, herramientas y ajustes, y nadie adivina dónde vive cada cosa.",
    backInfo: "Information Architecture — IA (arquitectura de la información): práctica de estructurar, organizar, nombrar y conectar la información para facilitar la comprensión y la localización. Incluye mucho más que dibujar un mapa del sitio.",
  },
  "ia-02": {
    frontQuestion: "¿Qué sistema define categorías claras para que todo se llame igual en todas partes?",
    frontScenario: "El mismo producto aparece como «audio», «audífonos» y «sonido personal» según la sección del catálogo.",
    backInfo: "Taxonomy (taxonomía): sistema controlado de clasificación que define categorías y relaciones para ordenar contenidos u objetos. Diseña categorías que reflejen cómo piensan las personas y cómo opera el negocio.",
  },
  "ia-03": {
    frontQuestion: "¿Qué concepto expresa niveles de importancia y relaciones de padre e hijo en el contenido?",
    frontScenario: "Los ajustes de la cuenta tienen secciones, subsecciones y controles sueltos, pero la jerarquía no se entiende.",
    backInfo: "Hierarchy (jerarquía): estructura ordenada que expresa niveles, agrupación o prioridad. Una jerarquía clara reduce el esfuerzo mental y ayuda a predecir dónde pertenece cada información.",
  },
  "ia-04": {
    frontQuestion: "¿Qué diagrama muestra la estructura planeada y las relaciones entre páginas o pantallas?",
    frontScenario: "Antes de rediseñar el portal de ayuda, el equipo necesita una vista compartida de toda la estructura.",
    backInfo: "Sitemap (mapa del sitio): representación de las páginas o pantallas y sus relaciones jerárquicas. Documenta la estructura, pero por sí solo no prueba que las personas logren encontrar cada cosa.",
  },
  "ia-05": {
    frontQuestion: "¿Qué sistema ayuda a moverse por la estructura y no perderse entre secciones?",
    frontScenario: "Cada página se entiende por separado, pero la gente se pierde al saltar entre proyectos, ajustes y facturación.",
    backInfo: "Navigation (navegación): conjunto de menús, enlaces y controles que permiten moverse entre lugares o contenidos. Ofrece opciones claras, orientación y rutas predecibles.",
  },
  "ia-06": {
    frontQuestion: "¿Qué práctica elige nombres que permiten adivinar qué hay detrás de cada menú o botón?",
    frontScenario: "El equipo interno dice «orquestación del espacio», mientras el cliente solo busca «ajustes del equipo».",
    backInfo: "Labeling (etiquetado): elección de nombres para categorías, menús y controles con palabras que cada persona entiende y distingue. Usa etiquetas concretas y consistentes, y pruébalas en su contexto real.",
  },
  "ia-07": {
    frontQuestion: "¿Qué es esa idea interna que cada persona ya trae sobre cómo funciona un sistema?",
    frontScenario: "La gente espera que los archivos borrados se comporten como la papelera de siempre, aunque la tecnología sea otra.",
    backInfo: "Mental Model (modelo mental): representación interna con la que cada persona predice cómo funciona algo. La interfaz se aprende más fácil cuando tu concepto coincide con esa expectativa.",
  },
  "ia-08": {
    frontQuestion: "¿Qué pista ayuda a adivinar qué encontrarás después de seguir un enlace o un menú?",
    frontScenario: "Un menú dice «Recursos» y no aclara si hay plantillas, ayuda de facturación o documentación.",
    backInfo: "Information Scent (rastro de información): señales que ayudan a juzgar si un camino lleva a la meta. Refuérzalo con etiquetas específicas y contexto; sin rastro claro, la gente abandona o se equivoca de ruta.",
  },
  "ia-09": {
    frontQuestion: "¿Qué cualidad describe lo fácil que resulta encontrar algo justo cuando se necesita?",
    frontScenario: "La función existe y funciona perfecto, pero el soporte se llena de mensajes porque nadie la localiza.",
    backInfo: "Findability (facilidad de localización): grado en que una información o función se puede descubrir y ubicar. Depende de la arquitectura, la navegación, la búsqueda, las etiquetas y el rastro de información.",
  },
  "ia-10": {
    frontQuestion: "¿Qué definición ordena los tipos de contenido, sus campos y relaciones sin atarse a una pantalla?",
    frontScenario: "El gestor debe manejar artículos, autores, productos y preguntas frecuentes reutilizables en web y móvil.",
    backInfo: "Content Model (modelo de contenido): definición de tipos de contenido, atributos y relaciones, separada de una presentación concreta. Te ayuda a decidir qué se reutiliza y cómo se conecta.",
  },
  "ia-11": {
    frontQuestion: "¿Cómo se llaman esos textos cortos como etiquetas de botones, ayudas y mensajes de error?",
    frontScenario: "La diseñadora duda si el botón debe decir «Guardar», «Aplicar cambios» o «Actualizar perfil».",
    backInfo: "Microcopy (microtextos): piezas pequeñas de contenido que guían la acción, explican estados y reducen la duda. Escríbelos concretos, breves y pegados al momento en que aparecen.",
  },
  "ia-12": {
    frontQuestion: "¿Qué define la personalidad estable de la comunicación de un producto en todo contexto?",
    frontScenario: "La marca quiere sonar clara, tranquila y un poco juguetona en la bienvenida, la ayuda y el marketing.",
    backInfo: "Voice (voz): carácter estable de cómo comunica un producto o marca. La voz se mantiene; lo que cambia según la situación es el tono.",
  },
  "ia-13": {
    frontQuestion: "¿Qué ajusta la expresión emocional de la misma voz según el momento de la persona?",
    frontScenario: "El producto puede celebrar con humor un éxito, pero debe ser sereno y directo si falla un pago.",
    backInfo: "Tone (tono): expresión del mensaje según el contexto, sin cambiar la personalidad de base. Adáptalo a la emoción, el riesgo y la tarea de cada momento.",
  },
  "ia-14": {
    frontQuestion: "¿Qué enfoque de escritura prioriza palabras conocidas y estructura directa en vez de jerga?",
    frontScenario: "Un consentimiento importante parece un documento interno lleno de formalismos que nadie termina de leer.",
    backInfo: "Plain Language (lenguaje claro): escritura que ayuda a encontrar, entender y usar la información con palabras familiares y estructura directa. No es lenguaje infantil; es quitar complejidad innecesaria sin perder precisión.",
  },
  "ix-01": {
    frontQuestion: "¿Qué propiedad de un objeto sugiere qué acciones se pueden hacer con él?",
    frontScenario: "Un control con relieve parece que se puede pulsar incluso antes de leer su etiqueta.",
    backInfo: "Affordance (posibilidad de acción): lo que un objeto o entorno permite hacer en relación con una persona. Distingue la posibilidad real de la pista visual que la comunica.",
  },
  "ix-02": {
    frontQuestion: "¿Qué señal visible comunica dónde se puede actuar?",
    frontScenario: "Un texto azul y subrayado invita a hacer clic, aunque por detrás solo sea una navegación simple.",
    backInfo: "Signifier (indicador): señal perceptible que muestra una posibilidad de acción o cómo actuar. Etiquetas, iconos, forma, posición y estilo pueden funcionar como indicadores.",
  },
  "ix-03": {
    frontQuestion: "¿Qué respuesta del sistema confirma que tu acción se recibió y qué pasó?",
    frontScenario: "Después de pulsar «Guardar», la pantalla cambia y confirma el éxito en vez de dejar todo en duda.",
    backInfo: "Feedback (retroalimentación): respuesta del sistema que comunica el estado o el resultado de una acción. Hazla oportuna, perceptible y acorde a la importancia de lo que pasó.",
  },
  "ix-04": {
    frontQuestion: "¿Qué relación hace que un control se sienta natural respecto al efecto que produce?",
    frontScenario: "Al arrastrar un mapa hacia la izquierda, el mundo visible se mueve de forma espacialmente lógica.",
    backInfo: "Mapping (correspondencia): relación entre controles y sus efectos. Una correspondencia natural sigue expectativas espaciales o conceptuales y reduce el esfuerzo de aprendizaje.",
  },
  "ix-05": {
    frontQuestion: "¿Qué mecanismo limita las acciones para evitar estados inválidos o inseguros?",
    frontScenario: "El botón «Enviar» sigue inactivo hasta que todos los datos obligatorios están válidos.",
    backInfo: "Constraint (restricción): límite que reduce acciones o estados posibles. Previene errores, pero explica siempre por qué el avance está bloqueado en vez de solo apagar el botón.",
  },
  "ix-06": {
    frontQuestion: "¿Qué principio exige que cada persona entienda qué está haciendo el sistema ahora mismo?",
    frontScenario: "Una subida tarda 20 segundos sin barra de progreso y la gente pulsa el botón una y otra vez.",
    backInfo: "Visibility of System Status (visibilidad del estado del sistema): principio que pide informar del estado actual con mensajes oportunos. El progreso, el guardado, la sincronización y los errores no deben quedar invisibles cuando importan.",
  },
  "ix-07": {
    frontQuestion: "¿Qué principio facilita el aprendizaje al hacer que lo parecido funcione de forma parecida?",
    frontScenario: "«Guardar» está siempre en el mismo lugar y las acciones delicadas piden confirmación igual en todas partes.",
    backInfo: "Consistency (consistencia): reutilización de patrones, lenguaje y comportamientos para que lo aprendido se transfiera. Unifica lo bueno; no conserves un mal patrón solo por costumbre.",
  },
  "ix-08": {
    frontQuestion: "¿Qué principio prefiere mostrar opciones reconocibles en vez de obligar a recordar datos?",
    frontScenario: "El pago ofrece las direcciones guardadas en vez de pedir que las escribas de memoria cada vez.",
    backInfo: "Recognition over Recall (reconocer en vez de recordar): reduce la carga de memoria al hacer visibles o recuperables las acciones y la información clave. Exige memoria solo donde sea inevitable.",
  },
  "ix-09": {
    frontQuestion: "¿Qué ley predice que los objetivos grandes y cercanos se alcanzan más rápido?",
    frontScenario: "La acción principal en móvil es diminuta y queda lejos del pulgar, así que cuesta acertar.",
    backInfo: "Fitts's Law (ley de Fitts): el tiempo de alcance depende de la distancia y el tamaño del objetivo. Diseña botones amplios y al alcance, y considera la accesibilidad motriz.",
  },
  "ix-10": {
    frontQuestion: "¿Qué ley dice que decidir toma más tiempo cuantas más opciones complejas hay?",
    frontScenario: "Un menú pasa de seis opciones claras a cuarenta con el mismo peso y elegir se vuelve eterno.",
    backInfo: "Hick's Law (ley de Hick): el tiempo de decisión suele crecer con el número y la complejidad de alternativas. No se trata solo de mostrar menos, sino de agrupar, ofrecer valores iniciales y revelar por niveles.",
  },
  "ix-11": {
    frontQuestion: "¿Qué principio recuerda que cada persona trae costumbres aprendidas en otros productos?",
    frontScenario: "Un icono propio para cerrar funciona distinto del que casi todas las apps de escritorio ya enseñaron.",
    backInfo: "Jakob's Law (ley de Jakob): cada persona pasa más tiempo en otros productos y traslada esas convenciones. Usa lo familiar y rompe la norma solo cuando el beneficio compense el nuevo aprendizaje.",
  },
  "ix-12": {
    frontQuestion: "¿Qué patrón muestra primero lo esencial y revela lo avanzado solo cuando se necesita?",
    frontScenario: "Una pantalla de análisis muestra los filtros básicos y deja los controles expertos disponibles bajo demanda.",
    backInfo: "Progressive Disclosure (revelado progresivo): presenta primero la información y acciones esenciales y abre la complejidad avanzada cuando toca. Baja la carga inicial sin quitar potencia a quien la necesita.",
  },
  "ix-13": {
    frontQuestion: "¿Qué principio busca evitar errores previsibles en vez de solo avisar después?",
    frontScenario: "El producto impide reservar una fecha de fin anterior al inicio en vez de aceptarla y fallar luego.",
    backInfo: "Error Prevention (prevención de errores): decisiones que reducen la probabilidad de equivocarse con restricciones, valores sensatos, vistas previas y opciones claras. Prevenir suele ser mejor que solo pedir perdón.",
  },
  "ix-14": {
    frontQuestion: "¿Qué principio permite recuperarse fácil de un error con deshacer o restaurar?",
    frontScenario: "Alguien borra un tablero por accidente y necesita un camino seguro para traerlo de vuelta ya mismo.",
    backInfo: "Forgiving Design (diseño tolerante): interfaces que facilitan la recuperación del error humano normal con deshacer, autoguardado, papelera o rutas claras de vuelta, siempre que sea viable.",
  },
  "ix-15": {
    frontQuestion: "¿Qué estilo de interacción deja actuar directo sobre objetos visibles como arrastrar o mover?",
    frontScenario: "En el lienzo puedes agarrar una figura y cambiar su tamaño en vez de editarla solo con un formulario.",
    backInfo: "Direct Manipulation (manipulación directa): interacción con objetos visibles mediante acciones inmediatas y respuesta al momento. Se siente intuitiva, pero ofrece siempre una alternativa accesible al arrastre.",
  },
  "ix-16": {
    frontQuestion: "¿Qué es esa condición persistente donde la misma acción hace cosas distintas hasta cambiarla?",
    frontScenario: "La misma tecla escribe texto en un estado y dispara atajos en otro, y el cambio no se nota.",
    backInfo: "Mode (modo): estado del sistema que cambia cómo se interpretan las acciones. Los modos ocultos provocan errores de modo; muestra el modo activo y ofrece una salida fácil.",
  },
  "ix-17": {
    frontQuestion: "¿Qué describe la condición actual de un componente, como cargando, seleccionado o con error?",
    frontScenario: "Un botón puede estar normal, enfocado, pulsado, cargando, inactivo o en éxito, y cada caso se ve distinto.",
    backInfo: "State (estado): condición actual que determina presentación y comportamiento. Diseña explícito cada estado importante para no dejar casos borde ni mensajes incoherentes.",
  },
  "ix-18": {
    frontQuestion: "¿Qué estado aparece cuando aún no hay contenido y debe explicar qué hacer ahora?",
    frontScenario: "Un proyecto nuevo no tiene tareas y un panel blanco dejaría a cualquiera sin saber por dónde empezar.",
    backInfo: "Empty State (estado vacío): diseño intencional para la ausencia de contenido. Orienta, explica por qué está vacío y propone una próxima acción útil cuando la hay.",
  },
  "ui-01": {
    frontQuestion: "¿Qué principio usa tamaño, peso, posición y espacio para decir qué mirar primero?",
    frontScenario: "Un panel trae toda la información correcta, pero cada elemento grita con la misma fuerza.",
    backInfo: "Visual Hierarchy (jerarquía visual): orden visual de importancia que guía la mirada y el escaneo. Debe reflejar la prioridad de la tarea, no solo agrandar lo más decorativo.",
  },
  "ui-02": {
    frontQuestion: "¿Qué principio crea diferencias claras para distinguir prioridades o estados?",
    frontScenario: "Las acciones principal y secundaria se ven casi idénticas y nadie se anima a pulsar.",
    backInfo: "Contrast (contraste): diferencia en tamaño, peso, luminosidad, forma o espacio. Sostiene la jerarquía y la distinción; en color, además, respeta los requisitos de accesibilidad.",
  },
  "ui-03": {
    frontQuestion: "¿Qué principio de Gestalt dice que lo cercano se percibe como parte del mismo grupo?",
    frontScenario: "Cada etiqueta queda más pegada al campo equivocado que al campo que realmente describe.",
    backInfo: "Proximity (proximidad): la cercanía espacial sugiere agrupación. Usa el espacio con intención para juntar lo relacionado y separar lo distinto.",
  },
  "ui-04": {
    frontQuestion: "¿Qué principio ordena al alinear elementos sobre bordes, líneas o ejes comunes?",
    frontScenario: "Las tarjetas usan bordes izquierdos y líneas base apenas distintos, y todo se siente inestable.",
    backInfo: "Alignment (alineación): colocación consistente sobre líneas visuales compartidas. Crea relaciones y reduce el ruido aun sin mostrar ninguna retícula.",
  },
  "ui-05": {
    frontQuestion: "¿Qué principio crea coherencia al reutilizar con intención patrones, estilos y espacios?",
    frontScenario: "Cada sección de ajustes inventa su propio estilo de títulos y sus propias líneas divisorias.",
    backInfo: "Repetition (repetición): reutilización sistemática de decisiones visuales para crear ritmo, consistencia y aprendizaje. Que sea un sistema deliberado, no una copia accidental.",
  },
  "ui-06": {
    frontQuestion: "¿Cómo se llama ese espacio libre que separa grupos y deja respirar el contenido?",
    frontScenario: "Una página de precios densa se vuelve fácil de escanear cuando las secciones y etiquetas ganan aire.",
    backInfo: "Whitespace (espacio en blanco): vacío funcional que establece agrupación, jerarquía y legibilidad. No es espacio perdido; es parte del diseño.",
  },
  "ui-07": {
    frontQuestion: "¿Qué sistema organiza la composición con columnas, filas y separaciones consistentes?",
    frontScenario: "Varias páginas deben alinear sus contenidos aunque sus módulos cambien de una a otra.",
    backInfo: "Grid (retícula): marco de composición para alinear con proporción y consistencia. Guía el diseño sin obligar a que todo ocupe módulos idénticos.",
  },
  "ui-08": {
    frontQuestion: "¿Qué sistema reemplaza separaciones arbitrarias por unos pocos valores repetibles?",
    frontScenario: "El producto mezcla huecos de 13, 17, 19 y 23 píxeles que se ven igual, pero son un dolor de mantener.",
    backInfo: "Spacing Scale (escala de espaciado): conjunto definido de valores que se usa con consistencia en diseños y componentes. Mejora el ritmo y el mantenimiento, con excepciones documentadas si hacen falta.",
  },
  "ui-09": {
    frontQuestion: "¿Qué principio tipográfico distingue títulos, cuerpo y apoyos según su importancia?",
    frontScenario: "Una página larga de ajustes usa el mismo tamaño y grosor para cada línea de texto.",
    backInfo: "Typographic Hierarchy (jerarquía tipográfica): uso sistemático de tamaño, peso, espaciado y estilo para comunicar niveles de información. Apoya el escaneo y la estructura del contenido.",
  },
  "ui-10": {
    frontQuestion: "¿Qué conjunto definido de tamaños mantiene pasos tipográficos consistentes en el producto?",
    frontScenario: "Cada diseñador crea tamaños casi iguales pero ligeramente distintos para títulos y etiquetas.",
    backInfo: "Type Scale (escala tipográfica): repertorio controlado de tamaños para roles claros en la interfaz. Mejora la consistencia; la proporción puede ser modular o propia, siempre al servicio de la pantalla.",
  },
  "ui-11": {
    frontQuestion: "¿Qué propiedad tipográfica controla la distancia vertical entre líneas de texto?",
    frontScenario: "El texto corrido se siente apretado aunque el tamaño de letra sí se lee bien.",
    backInfo: "Line Height — Leading (interlineado): espacio vertical entre líneas o líneas base. Un valor adecuado mejora la lectura y depende de la fuente, el tamaño, el ancho de línea y el contexto.",
  },
  "ui-12": {
    frontQuestion: "¿Qué cuidado evita que una columna de texto se vuelva tan ancha que canse al leer?",
    frontScenario: "En un monitor grande, los párrafos se estiran casi a todo lo ancho de una pantalla de 1600 píxeles.",
    backInfo: "Line Length (longitud de línea): ancho de una línea de texto, a menudo en caracteres por línea. Busca un rango cómodo según tipografía y contexto; evita tratar un solo número como ley absoluta.",
  },
  "ui-13": {
    frontQuestion: "¿Qué enfoque adapta el diseño a distintos tamaños de pantalla en vez de un lienzo fijo?",
    frontScenario: "El mismo producto debe seguir usable en teléfono, tableta y monitor grande de escritorio.",
    backInfo: "Responsive Design (diseño adaptable): interfaces que se ajustan al espacio disponible con composición flexible y comportamiento por componentes. Es mucho más que encoger la pantalla de escritorio.",
  },
  "ui-14": {
    frontQuestion: "¿Qué es ese punto donde un diseño adaptable cambia su estructura a propósito?",
    frontScenario: "Un ajuste de dos columnas pasa a una sola columna cuando ya no caben lado a lado.",
    backInfo: "Breakpoint (punto de corte): ancho o condición donde cambian las reglas de composición. Defínelo por lo que piden el contenido y los componentes, no solo por modelos de dispositivo.",
  },
};
