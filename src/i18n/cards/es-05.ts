import type { CardOverride } from '../cardOverrides';

export const es05: Record<string, CardOverride> = {
  "ui-15": {
    frontQuestion: "¿Qué es la densidad de la interfaz y cómo saber si es la adecuada?",
    frontScenario: "Una herramienta para traders muestra tablas compactas, mientras una app para principiantes necesita mucho aire. ¿Cuánta información conviene meter por pantalla?",
    backInfo: "UI Density (densidad de la interfaz): cantidad de información y controles que presentas en un área dada. Ajústala según la frecuencia de uso, la experiencia del usuario, el dispositivo y el costo de un error; más espacio en blanco no siempre es mejor.",
  },
  "ui-16": {
    frontQuestion: "¿Qué sistema de color evita los valores sueltos y facilita los temas claro y oscuro?",
    frontScenario: "El rediseño debe soportar modo claro y oscuro, pero hoy cada componente trae un azul fijo escrito a mano.",
    backInfo: "Semantic Color Roles (roles semánticos de color): colores nombrados por su función, como fondo, texto, acento, éxito, aviso y peligro, en vez de valores sueltos. Aplícalos por rol para que los temas cambien sin reescribir componentes y la accesibilidad sea más fácil de cuidar.",
  },
  "ds-01": {
    frontQuestion: "¿Qué es un sistema de diseño y en qué se diferencia de una simple librería?",
    frontScenario: "Cinco equipos reconstruyen botones y formularios cada uno a su manera y el producto se ve fragmentado.",
    backInfo: "Design System (sistema de diseño): conjunto conectado de fundamentos, componentes, patrones, documentación y reglas de trabajo para construir de forma coherente a escala. Úsalo como sistema vivo con gobernanza y mantenimiento, no como una simple colección de pantallas.",
  },
  "ds-02": {
    frontQuestion: "¿Qué es un token de diseño y para qué sirve?",
    frontScenario: "El gris oscuro aparece escrito como código en decenas de archivos y cambiarlo es una pesadilla.",
    backInfo: "Design Token (token de diseño): valor de diseño reutilizable con nombre, como un color, un espaciado, una tipografía o una duración, independiente de un componente. Centralízalo con tipo, valor y descripción para compartirlo entre herramientas y plataformas.",
  },
  "ds-03": {
    frontQuestion: "¿Qué tipo de token guarda el valor crudo sin decir aún para qué se usa?",
    frontScenario: "El sistema guarda un azul de paleta que luego otros tokens van a referenciar.",
    backInfo: "Primitive / Reference Token (token primitivo o de referencia): token base que guarda un valor crudo, como un color de paleta o un paso de espaciado. Úsalo como cimiento y evita aplicarlo directo en componentes cuando ya existen roles semánticos.",
  },
  "ds-04": {
    frontQuestion: "¿Qué tipo de token se nombra por su uso para que el tema pueda cambiar?",
    frontScenario: "En modo oscuro el mismo texto principal debe resolverse a otro color sin tocar los componentes.",
    backInfo: "Semantic Token (token semántico): token nombrado por su intención o uso, como «texto principal» o «superficie de peligro», en vez de por su valor crudo. Úsalo en componentes para soportar temas y hablar un mismo idioma entre diseño y desarrollo.",
  },
  "ds-05": {
    frontQuestion: "¿Cómo evitas duplicar valores cuando un token debe seguir a otro?",
    frontScenario: "El texto principal debe seguir siempre al tono neutro actual en vez de copiar su color a mano.",
    backInfo: "Token Alias / Reference (alias o referencia de token): mecanismo donde un token apunta al valor de otro en vez de duplicarlo. Úsalo para crear capas entre primitivos y semánticos y que un cambio de tema se propague solo.",
  },
  "ds-06": {
    frontQuestion: "¿Qué permite que las mismas decisiones de diseño se vean distinto en modo claro, oscuro o alto contraste?",
    frontScenario: "La misma superficie necesita un valor en modo claro y otro en modo oscuro sin cambiar la referencia en el componente.",
    backInfo: "Mode / Theme (modo o tema): conjunto de valores o reglas según el contexto visual, como claro, oscuro o alto contraste. Haz que los componentes dependan de la intención semántica y no de valores fijos por tema.",
  },
  "ds-07": {
    frontQuestion: "¿Qué es un componente y cuándo vale la pena crearlo?",
    frontScenario: "Cada pantalla redibuja botones, casillas y diálogos desde cero con pequeñas diferencias.",
    backInfo: "Component (componente): bloque de interfaz reutilizable que empaqueta estructura, estilos y comportamiento. Créalo con un propósito claro, estados definidos y documentación de uso; no basta con que dos cosas se vean parecido.",
  },
  "ds-08": {
    frontQuestion: "¿Cómo representas variaciones legítimas sin crear componentes duplicados?",
    frontScenario: "Un botón puede ser primario o secundario, chico o grande, pero sigue siendo el mismo botón.",
    backInfo: "Variant (variante): variación definida dentro de la misma familia de componente, como tamaño, jerarquía o estado. Documenta solo las diferencias con sentido y evita combinar todas las opciones posibles por accidente.",
  },
  "ds-09": {
    frontQuestion: "¿Qué describe cómo se configura y se usa un componente sin improvisar?",
    frontScenario: "Diseño y desarrollo no se ponen de acuerdo en qué permite un diálogo: tamaño, título, acciones y cómo se cierra.",
    backInfo: "Component API (API de componente): contrato que documenta propiedades, estados, espacios y comportamientos soportados. Defínela con claridad para reducir excepciones y mantener alineados el diseño y el código.",
  },
  "ds-10": {
    frontQuestion: "¿Qué solución reutilizable atiende un problema recurrente más grande que un control suelto?",
    frontScenario: "La búsqueda con filtros, resultados vacíos y paginación se repite igual en varios productos.",
    backInfo: "UI Pattern (patrón de interfaz): solución reutilizable que combina varios componentes y comportamientos para un problema frecuente. Úsala cuando el contexto se repite; es más amplia que un control aislado.",
  },
  "ds-11": {
    frontQuestion: "¿Quién decide y mantiene el sistema de diseño para que no se degrade?",
    frontScenario: "Todos pueden editar la librería, pero nadie cuida la calidad, la accesibilidad ni los cambios importantes.",
    backInfo: "Design System Governance (gobernanza del sistema de diseño): modelo con roles, decisiones y reglas de mantenimiento para que el sistema siga coherente. Aplícalo para permitir contribuciones sin que la responsabilidad quede en el aire.",
  },
  "ds-12": {
    frontQuestion: "¿Cómo logras que un buen aporte local llegue al sistema compartido en vez de quedarse como copia?",
    frontScenario: "Un equipo crea un patrón de rango de fechas que podría servirle a otros seis equipos.",
    backInfo: "Contribution Model (modelo de contribución): flujo definido para proponer, evaluar, construir, documentar y publicar mejoras al sistema. Úsalo para equilibrar calidad central con la experiencia repartida en los equipos.",
  },
  "ds-13": {
    frontQuestion: "¿Cómo comunicas cambios compatibles y cambios que rompen en el sistema de diseño?",
    frontScenario: "Renombrar una propiedad podría romper decenas de pantallas si nadie avisa a tiempo.",
    backInfo: "Versioning (versionado): gestión de versiones identificables para que cada equipo entienda qué cambió y si es compatible. Comunica cada release con notas claras tanto en código como en archivos de diseño.",
  },
  "ds-14": {
    frontQuestion: "¿Qué significa marcar algo como obsoleto y cómo se hace bien?",
    frontScenario: "Un campo antiguo sigue vivo en el producto aunque ya existe una versión nueva y accesible.",
    backInfo: "Deprecation (deprecación): estado que indica que un componente, token o API ya no debe usarse y tiene reemplazo. Anúnciala con el motivo, la alternativa y la ruta de migración; nunca la elimines en silencio.",
  },
  "ds-15": {
    frontQuestion: "¿Cuándo puedes decir que el diseño y el código están realmente alineados?",
    frontScenario: "En la herramienta de diseño el botón tiene cinco variantes, pero en código hay ocho con otros nombres.",
    backInfo: "Design–Code Parity (paridad entre diseño y código): condición donde el componente documentado y el componente en producción representan la misma estructura, propiedades y estados. Revísala más allá de lo visual: también importan los nombres y el comportamiento.",
  },
  "ds-16": {
    frontQuestion: "¿Qué prueba automática detecta cambios visuales no deseados antes de que lleguen al usuario?",
    frontScenario: "Una actualización silenciosa mueve los espacios de todos los formularios y nadie lo nota hasta el reclamo.",
    backInfo: "Visual Regression Testing (prueba visual de regresión): comparación automática de capturas o renders contra lo esperado para detectar cambios de estilo o maquetación. Úsala como complemento de las pruebas funcionales y de accesibilidad, no como reemplazo.",
  },
  "a11y-01": {
    frontQuestion: "¿Qué enfoque diseña para una amplia diversidad de capacidades y contextos?",
    frontScenario: "Al diseñar la verificación de identidad, el equipo piensa en limitaciones permanentes, temporales y situacionales.",
    backInfo: "Inclusive Design (diseño inclusivo): enfoque que considera desde el inicio diversas capacidades y contextos para reducir la exclusión. Aplícalo más allá del cumplimiento: las normas de accesibilidad son una parte clave, pero no lo son todo.",
  },
  "a11y-02": {
    frontQuestion: "¿Cuáles son los cuatro principios que organizan los requisitos de WCAG?",
    frontScenario: "El equipo necesita el modelo general de accesibilidad web en vez de memorizar criterios sueltos.",
    backInfo: "POUR — Perceivable, Operable, Understandable, Robust (perceptible, operable, comprensible y robusto): los cuatro principios de WCAG. Úsalos como mapa: cada criterio de éxito cuelga de uno de ellos y te ayuda a no dejar áreas ciegas.",
  },
  "a11y-03": {
    frontQuestion: "¿Qué deberías preferir antes de agregar ARIA para que la tecnología de apoyo entienda tu interfaz?",
    frontScenario: "Un control hecho con una capa genérica obliga a programar a mano todo el comportamiento de teclado y lector de pantalla.",
    backInfo: "Semantic HTML (HTML semántico): uso de elementos nativos según su significado, como botones, encabezados, listas y controles de formulario. Aplícalo primero porque ya trae semántica y comportamiento; recrearlo con código genérico suele salir más frágil.",
  },
  "a11y-04": {
    frontQuestion: "¿Qué texto programático le dice a la tecnología de apoyo cómo se llama un control?",
    frontScenario: "Un botón de cerrar solo con ícono se ve claro, pero el lector anuncia apenas «botón».",
    backInfo: "Accessible Name (nombre accesible): nombre expuesto a las tecnologías de apoyo, tomado del texto visible, etiquetas, «alt», «aria-label» u otras fuentes. Asegúrate de que describa el propósito real del control.",
  },
  "a11y-05": {
    frontQuestion: "¿Qué garantiza que todo lo esencial funcione sin necesidad del ratón?",
    frontScenario: "Una persona recorre formularios y diálogos solo con teclado o conmutador.",
    backInfo: "Keyboard Accessibility (accesibilidad con teclado): capacidad de alcanzar y operar toda función esencial con entradas compatibles con teclado. Evita trampas de teclado y reproduce en tus controles el comportamiento esperado por el usuario.",
  },
  "a11y-06": {
    frontQuestion: "¿Qué ayuda visual permite a quien usa teclado saber dónde está parado?",
    frontScenario: "Al tabular por los botones no se ve nada porque el diseño quitó el contorno sin poner reemplazo.",
    backInfo: "Visible Focus Indicator (indicador visible de foco): tratamiento visual que muestra qué elemento tiene el foco del teclado. Nunca lo elimines sin ofrecer una alternativa clara y con visibilidad suficiente.",
  },
  "a11y-07": {
    frontQuestion: "¿Qué asegura que el foco del teclado avance en un orden que tenga sentido?",
    frontScenario: "En un pago reordenado visualmente, tabular salta del pago al envío y luego al encabezado.",
    backInfo: "Logical Focus Order (orden lógico de foco): secuencia de foco que conserva el significado y la operabilidad de la interfaz. Revisa que el orden visual no cree una ruta confusa para el teclado.",
  },
  "a11y-08": {
    frontQuestion: "¿Qué medida de WCAG revisa si el texto se distingue bien del fondo?",
    frontScenario: "Un gris claro sobre blanco se ve elegante, pero mucha gente apenas puede leerlo.",
    backInfo: "Text Contrast Ratio (relación de contraste de texto): medida de WCAG basada en luminancia relativa. En WCAG 2.2 AA pide en general al menos 4.5:1 para texto normal y 3:1 para texto grande, con excepciones definidas; no te guíes solo por cómo se ve.",
  },
  "a11y-09": {
    frontQuestion: "¿Qué requisito de WCAG pide contraste también en bordes y gráficos importantes?",
    frontScenario: "El borde de un campo y el control de foco son tan tenues que no se percibe dónde se puede interactuar.",
    backInfo: "Non-text Contrast (contraste no textual): criterio de WCAG que exige contraste suficiente para identificar componentes y objetos gráficos, en general 3:1 contra colores adyacentes donde aplique. Revísalo en bordes, íconos funcionales y estados.",
  },
  "a11y-10": {
    frontQuestion: "¿Qué criterio de WCAG 2.2 define el tamaño mínimo o el espaciado de los objetivos táctiles?",
    frontScenario: "Botones de ícono diminutos y pegados en móvil provocan toques accidentales todo el tiempo.",
    backInfo: "Target Size (Minimum) — WCAG 2.5.8 (tamaño mínimo del objetivo): en WCAG 2.2 AA pide al menos 24 × 24 píxeles CSS o cumplir excepciones de espaciado. Aplícalo en controles densos; objetivos aún mayores suelen ser más cómodos.",
  },
  "a11y-11": {
    frontQuestion: "¿Qué exige WCAG 2.2 cuando una función depende de arrastrar?",
    frontScenario: "Reordenar elementos solo funciona con arrastrar y soltar, y algunas personas no pueden hacerlo con precisión.",
    backInfo: "Dragging Movements — WCAG 2.5.7 (movimientos de arrastre): si usas arrastre, ofrece una alternativa de puntero simple, como botones o menús, salvo que arrastrar sea esencial. Aplícalo para que reordenar y similares funcionen para más personas.",
  },
  "a11y-12": {
    frontQuestion: "¿Qué alternativa de texto debe transmitir lo relevante de una imagen significativa?",
    frontScenario: "Un gráfico con las ventas del trimestre no tiene ninguna descripción equivalente.",
    backInfo: "Alt Text — Text Alternative (texto alternativo): descripción breve que comunica el propósito o contenido relevante de una imagen. Escríbela pensando en qué necesita la persona; las imágenes decorativas suelen omitirse para no hacer ruido.",
  },
  "a11y-13": {
    frontQuestion: "¿Qué alternativa sincronizada hace accesible el audio de un video para quien no lo oye?",
    frontScenario: "Un tutorial narra pasos que no se ven en pantalla y no hay forma de leerlos.",
    backInfo: "Captions (subtítulos): texto sincronizado que representa diálogos y sonidos relevantes del video. Úsalos en material pregrabado y suma transcripción o audiodescripción cuando el contenido lo exija.",
  },
  "a11y-14": {
    frontQuestion: "¿Qué preferencia del usuario debes respetar cuando la animación incomoda o dificulta el uso?",
    frontScenario: "Una presentación con mucho paralaje marea a varias personas durante el registro.",
    backInfo: "Reduced Motion (movimiento reducido): soporte a preferencias como «prefers-reduced-motion» para quitar o suavizar animaciones no esenciales. Aplícalo sin perder el sentido de los cambios de estado.",
  },
  "a11y-15": {
    frontQuestion: "¿Qué especificación aporta semántica de accesibilidad cuando el HTML nativo no alcanza?",
    frontScenario: "Un árbol personalizado necesita roles, estados y relaciones que la tecnología de apoyo entienda.",
    backInfo: "ARIA — Accessible Rich Internet Applications (aplicaciones enriquecidas accesibles): especificación WAI-ARIA con roles, estados y propiedades para la accesibilidad. Úsala solo cuando el HTML nativo no resuelve el control; un ARIA malo es peor que no usar ARIA.",
  },
  "a11y-16": {
    frontQuestion: "¿Qué principio de WCAG 2.2 evita que el acceso dependa de pruebas difíciles de memoria o transcripción?",
    frontScenario: "El acceso exige recordar la contraseña y reescribir un código sin ayuda del gestor ni pegar texto.",
    backInfo: "Accessible Authentication — WCAG 3.3.8 (autenticación accesible): en WCAG 2.2 AA limita las pruebas de función cognitiva al iniciar sesión, salvo que ofrezcas alternativa o mecanismo permitido. Facilita gestores de contraseñas y pegado en vez de bloquearlos.",
  },
  "a11y-17": {
    frontQuestion: "¿Qué exige WCAG 2.2 para no pedir dos veces el mismo dato en un mismo flujo?",
    frontScenario: "Un pago en varios pasos pide reescribir la misma dirección en dos pantallas seguidas.",
    backInfo: "Redundant Entry — WCAG 3.3.7 (entrada redundante): la información ya ingresada en el mismo proceso debe autocompletarse o poder seleccionarse, con excepciones definidas como motivos esenciales o de seguridad. Aplícalo para acortar el trámite.",
  },
  "a11y-18": {
    frontQuestion: "¿Qué comportamiento permite leer y operar el contenido con zoom sin scroll en dos direcciones?",
    frontScenario: "Con 400 % de zoom las etiquetas se enciman y hay que mover todo en horizontal línea por línea.",
    backInfo: "Reflow (reflujo): capacidad exigida por WCAG para leer y operar a anchos estrechos equivalentes sin perder información, salvo contenido que de verdad necesite dos dimensiones. Diseña para que el texto fluya y nada quede atrapado.",
  },
  "dl-01": {
    frontQuestion: "¿Qué lista ordenada y viva reúne todo el trabajo necesario para mejorar el producto en Scrum?",
    frontScenario: "Cada aprendizaje cambia lo que conviene construir o corregir después y hace falta una sola fuente.",
    backInfo: "Product Backlog (backlog del producto): lista emergente y ordenada de lo necesario para mejorar el producto, única fuente del trabajo del equipo Scrum. Mantenla viva y reordénala a medida que aprendes.",
  },
  "dl-02": {
    frontQuestion: "¿Qué plan del Sprint incluye el objetivo, los ítems elegidos y cómo entregarlos?",
    frontScenario: "Durante el Sprint, el equipo ajusta su plan cada día según lo que va descubriendo.",
    backInfo: "Sprint Backlog (backlog del sprint): plan creado por y para el equipo de desarrollo con el objetivo del Sprint, los ítems elegidos y el plan de entrega. Actualízalo durante todo el Sprint.",
  },
  "dl-03": {
    frontQuestion: "¿Qué ciclo fijo de un mes o menos convierte ideas en valor e incluye los demás eventos?",
    frontScenario: "El equipo trabaja en ciclos de dos semanas con planificación, trabajo diario, revisión y retrospectiva.",
    backInfo: "Sprint (sprint): evento Scrum de duración fija de un mes o menos. Un Sprint empieza justo después del anterior; el alcance puede aclararse mientras se protege el objetivo.",
  },
  "dl-04": {
    frontQuestion: "¿Qué objetivo único le da coherencia a un Sprint sin atarlo a cada tarea?",
    frontScenario: "Varios ítems cambian, pero el equipo necesita una razón clara de por qué importa este Sprint.",
    backInfo: "Sprint Goal (objetivo del sprint): objetivo único del Sprint. Úsalo para dar foco con flexibilidad: el alcance puede renegociarse sin traicionar la meta.",
  },
  "dl-05": {
    frontQuestion: "¿Qué acuerdo compartido define cuándo un trabajo cuenta como terminado?",
    frontScenario: "Un equipo dice «listo» antes de probar accesibilidad y otro solo cuando todo está liberable.",
    backInfo: "Definition of Done (definición de terminado): descripción formal del estado que debe cumplir un incremento para considerarse completo. Úsala para transparentar la calidad y evitar malentendidos sobre qué significa «listo».",
  },
  "dl-06": {
    frontQuestion: "¿Qué actividad continua aclara y divide los ítems para que el trabajo futuro tenga buen tamaño?",
    frontScenario: "Un pedido grande y vago se conversa, se parte y se detalla antes de entrar a un Sprint.",
    backInfo: "Product Backlog Refinement (refinamiento del backlog): actividad continua de desglosar y definir ítems con descripción, orden y tamaño. Hazla de forma regular; no es un evento formal de Scrum.",
  },
  "dl-07": {
    frontQuestion: "¿Qué evento de Scrum revisa el resultado con interesados y adapta qué sigue?",
    frontScenario: "El equipo muestra lo logrado y conversa con interesados sobre cómo cambió el mercado.",
    backInfo: "Sprint Review (revisión del sprint): sesión de trabajo al final del Sprint para inspeccionar resultados y adaptar el backlog. Úsala para decidir juntos, no como una simple demo.",
  },
  "dl-08": {
    frontQuestion: "¿Qué evento de Scrum mejora cómo trabaja el equipo en vez de revisar el producto?",
    frontScenario: "Después de entregar, el equipo conversa sobre colaboración, proceso y herramientas para la próxima vez.",
    backInfo: "Sprint Retrospective (retrospectiva del sprint): evento para inspeccionar cómo salió el Sprint y planear mejoras de calidad y efectividad. Céntralo en la forma de trabajar y cierra con acciones concretas.",
  },
  "dl-09": {
    frontQuestion: "¿Qué formato ligero expresa valor para el usuario con «Como…, quiero…, para…»?",
    frontScenario: "Un ítem necesita decir quién lo necesita y por qué sin convertirse en una especificación enorme.",
    backInfo: "User Story (historia de usuario): formato ágil y breve para disparar la conversación sobre necesidad y valor. Usa la plantilla como ayuda, no como sustituto del entendimiento compartido ni de los criterios de aceptación.",
  },
  "dl-10": {
    frontQuestion: "¿Qué condiciones dicen cómo sabrás si un ítem concreto está aceptable?",
    frontScenario: "Diseño y desarrollo discuten si una búsqueda vacía cuenta como comportamiento completo.",
    backInfo: "Acceptance Criteria (criterios de aceptación): condiciones comprobables que debe cumplir un ítem específico. Escríbelas con conducta esperada y casos borde; a diferencia de la definición de terminado, aplican a ese ítem.",
  },
  "dl-11": {
    frontQuestion: "¿Qué método visualiza el trabajo y lo gestiona en flujo continuo sin Sprints fijos?",
    frontScenario: "Un equipo con entradas constantes y prioridades cambiantes quiere optimizar cómo fluye el trabajo.",
    backInfo: "Kanban (kanban): método para visualizar y gestionar el flujo, limitar el trabajo en curso y mejorar la entrega. Úsalo para estabilizar el flujo; puede convivir con otras prácticas ágiles.",
  },
  "dl-12": {
    frontQuestion: "¿Qué regla evita tener todo empezado y nada terminado al limitar el trabajo simultáneo?",
    frontScenario: "Hay diez tareas «en curso», se acumulan bloqueos y casi nada llega a listo.",
    backInfo: "WIP Limit — Work in Progress Limit (límite de trabajo en curso): tope explícito de cuántos ítems pueden estar activos a la vez en un estado. Aplícalo para exponer cuellos de botella, reducir el multitasking y suavizar el flujo.",
  },
  "dl-13": {
    frontQuestion: "¿Qué métrica de flujo mide cuánto tarda el trabajo desde que empieza hasta que termina?",
    frontScenario: "Un ítem espera un mes en la lista y luego toma cuatro días desde que empieza el desarrollo.",
    backInfo: "Cycle Time (tiempo de ciclo): tiempo transcurrido desde el inicio del trabajo hasta su fin según tu flujo. Mídelo para entender la entrega activa; no incluye la espera previa en la lista.",
  },
  "dl-14": {
    frontQuestion: "¿Qué métrica de flujo mide la espera total desde el pedido hasta la entrega?",
    frontScenario: "Un pedido espera tres semanas antes de implementarse y luego toma cuatro días en terminarse.",
    backInfo: "Lead Time (tiempo de entrega): tiempo total desde el pedido o compromiso hasta la entrega, incluyendo colas y esperas. Úsalo para ver la espera que vive el cliente, más amplia que el tiempo de ciclo.",
  },
};
