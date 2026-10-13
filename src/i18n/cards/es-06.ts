import type { CardOverride } from '../cardOverrides';

export const es06: Record<string, CardOverride> = {
  "biz-01": {
    frontQuestion: "¿Qué documento breve ayuda a alinear el problema, los objetivos, la audiencia y los límites antes de empezar?",
    frontScenario: "Un cliente pide «rediseñar el panel», pero el equipo aún no sabe por qué, para quién ni con qué restricciones.",
    backInfo: "Project Brief (brief del proyecto): documento corto que ordena el contexto, el problema, los objetivos, la audiencia y las restricciones. Úsalo para decidir cada día y anota con honestidad lo que todavía no sabes.",
  },
  "biz-02": {
    frontQuestion: "¿Qué define qué trabajo entra en el proyecto y qué queda fuera?",
    frontScenario: "Un sitio de cinco plantillas crece sin control hasta pedir una app, un sistema de diseño y migración de contenidos.",
    backInfo: "Scope (alcance): frontera explícita del trabajo, las responsabilidades y los resultados incluidos. Anota también las exclusiones y los supuestos; sin eso, el crecimiento descontrolado es casi seguro.",
  },
  "biz-03": {
    frontQuestion: "¿Qué es el resultado concreto que un equipo o profesional se compromete a entregar?",
    frontScenario: "El encargo incluye un informe de investigación, un prototipo y una especificación del sistema de diseño.",
    backInfo: "Deliverable (entregable): producto tangible y acordado del trabajo. No lo confundas con el resultado de negocio que busca apoyar; el informe por sí solo todavía no mejora ninguna métrica.",
  },
  "biz-04": {
    frontQuestion: "¿Qué documento presenta el enfoque, el valor, el alcance y las condiciones antes de ganar el trabajo?",
    frontScenario: "Una consultora responde a un cliente potencial con un plan a medida y un precio claro.",
    backInfo: "Proposal (propuesta comercial): documento persuasivo donde muestras que entiendes el problema y propones enfoque, alcance y condiciones. Suele ir antes del contrato o del SOW (declaración de trabajo).",
  },
  "biz-05": {
    frontQuestion: "¿Qué documento formal detalla alcance, entregables, responsables, plazos y condiciones de aceptación?",
    frontScenario: "Ambas partes necesitan un anexo al contrato que deje los límites del encargo claros para el día a día.",
    backInfo: "SOW — Statement of Work (declaración de trabajo): acuerdo detallado que describe qué se hará y cómo se gobernará. Su valor legal exacto varía según el contrato y el país, así que revísalo con el área legal.",
  },
  "biz-06": {
    frontQuestion: "¿Qué modelo cobra un monto único por un alcance definido en vez de facturar cada hora?",
    frontScenario: "Un cliente compra un paquete cerrado de investigación y diseño por 12 000 euros.",
    backInfo: "Fixed Fee (precio fijo): monto acordado por un alcance o resultado definido. El proveedor asume más riesgo de eficiencia, por eso importan los supuestos, el control de cambios y un alcance muy claro.",
  },
  "biz-07": {
    frontQuestion: "¿Qué modelo comercial cobra por el tiempo real trabajado y a veces por materiales o gastos?",
    frontScenario: "El trabajo es exploratorio y los requisitos cambian cada semana, así que no se puede cerrar un alcance fijo.",
    backInfo: "Time & Materials — T&M (tiempo y materiales): facturación por horas reales con tarifas acordadas, más materiales o gastos si así se pactó. Da flexibilidad, pero exige registro transparente y control del presupuesto.",
  },
  "biz-08": {
    frontQuestion: "¿Qué acuerdo reserva acceso o capacidad continua a cambio de un pago recurrente?",
    frontScenario: "Una startup quiere una diseñadora disponible cada mes en vez de contratar proyectos aislados.",
    backInfo: "Retainer (iguala): acuerdo recurrente que asegura servicios, capacidad o disponibilidad en el tiempo. Deja por escrito qué incluye, si las horas se acumulan y qué tiempos de respuesta puedes esperar.",
  },
  "biz-09": {
    frontQuestion: "¿Qué mecanismo formal gestiona el trabajo pedido fuera del alcance y ajusta costo, plazo o entregables?",
    frontScenario: "A mitad del proyecto, el cliente pide sumar una segunda plataforma y veinte pantallas nuevas.",
    backInfo: "Change Request (solicitud de cambio): petición documentada para modificar alcance, requisitos, costo o calendario. Un proceso claro protege tanto la flexibilidad del cliente como los límites del equipo.",
  },
  "biz-10": {
    frontQuestion: "¿Qué artefacto identifica personas clave, su influencia e intereses para planificar cómo involucrarlas?",
    frontScenario: "Un rediseño se frena porque el equipo solo habló con usuarios e ignoró al área legal, a soporte y al patrocinador.",
    backInfo: "Stakeholder Map (mapa de interesados): vista ordenada de las personas y grupos afectados por el proyecto o con influencia sobre él. Sirve para planear a quién involucrar, cómo comunicar y cómo se decide.",
  },
  "biz-11": {
    frontQuestion: "¿Qué rol tiene la autoridad para dar la palabra final cuando los interesados no se ponen de acuerdo?",
    frontScenario: "Cinco interesados opinan, pero nadie sabe de quién depende que el diseño se publique o no.",
    backInfo: "Decision Maker (responsable de la decisión): persona o rol con autoridad para resolver. Aclara los derechos de decisión desde el inicio; si no, te pierdes en consensos eternos y comentarios contradictorios.",
  },
  "biz-12": {
    frontQuestion: "¿Qué es ese punto de control importante que sirve para medir avance o activar una revisión o un pago?",
    frontScenario: "Un pago se libera al terminar la investigación y otro al aprobar el prototipo.",
    backInfo: "Milestone (hito): punto significativo ligado al avance, a una entrega, a una revisión o a condiciones comerciales. No es una simple tarea ni una fecha suelta sin contenido.",
  },
  "biz-13": {
    frontQuestion: "¿Qué concepto del contrato define quién es dueño del diseño, el código y los contenidos creados?",
    frontScenario: "Un profesional termina un sistema de marca, pero el contrato no aclara si el cliente recibe propiedad o solo permiso de uso.",
    backInfo: "Intellectual Property Rights — IP Rights (derechos de propiedad intelectual): reglas legales sobre propiedad, licencia y uso permitido del trabajo creado. Cesión y licencia no son lo mismo; déjalo explícito y acorde a cada país.",
  },
  "biz-14": {
    frontQuestion: "¿Qué acuerdo limita la divulgación o el uso de la información confidencial compartida?",
    frontScenario: "Una startup comparte planes sin publicar y datos de clientes mientras evalúa a un proveedor.",
    backInfo: "NDA — Non-Disclosure Agreement (acuerdo de confidencialidad): contrato que define qué es confidencial y qué obligaciones hay sobre su uso y divulgación. No sustituye buenas medidas de seguridad, privacidad ni un contrato completo de servicios.",
  },
  "tech-01": {
    frontQuestion: "¿Qué parte del producto presenta la interfaz que ve y toca la persona usuaria?",
    frontScenario: "Una ventana modal se ve rota en el navegador, aunque los datos que llegan del servidor están bien.",
    backInfo: "Frontend (interfaz o lado del cliente): capa visible que dibuja la pantalla y gestiona la interacción en el dispositivo. El límite exacto cambia entre web, móvil y renderizado en servidor.",
  },
  "tech-02": {
    frontQuestion: "¿Qué parte del producto gestiona la lógica del servidor, los datos y los servicios detrás de la pantalla?",
    frontScenario: "La interfaz pide crear un pedido y la lógica del servidor valida inventario y guarda la transacción.",
    backInfo: "Backend (servidor o parte interna): sistemas y servicios que aplican reglas de negocio, acceden a datos e integran otros servicios. Puede ser un solo servicio o muchos servicios distribuidos.",
  },
  "tech-03": {
    frontQuestion: "¿Qué es esa interfaz definida que permite a un sistema pedir datos o acciones a otro?",
    frontScenario: "Una app móvil necesita una vía documentada para consultar los datos de la cuenta en el servicio de la empresa.",
    backInfo: "API — Application Programming Interface (interfaz de programación): contrato para que dos programas se comuniquen. Define operaciones, entradas, salidas y comportamiento sin exponer cómo está construido por dentro.",
  },
  "tech-04": {
    frontQuestion: "¿Qué estilo de API web organiza recursos y usa métodos HTTP como GET, POST, PATCH y DELETE?",
    frontScenario: "Un producto expone direcciones como «/users/123» y «/orders/456» sobre HTTP.",
    backInfo: "REST — Representational State Transfer (transferencia de estado representacional): estilo de arquitectura para API orientadas a recursos. En la práctica las «API REST» varían mucho; la etiqueta no garantiza una única implementación exacta.",
  },
  "tech-05": {
    frontQuestion: "¿Qué lenguaje de consulta permite pedir exactamente los campos necesarios con un esquema tipado?",
    frontScenario: "Un panel necesita distintas combinaciones de datos anidados de clientes sin crear una respuesta fija para cada pantalla.",
    backInfo: "GraphQL (lenguaje de consulta para API): lenguaje y motor de API basado en un esquema con tipos, muchas veces desde un solo punto de acceso. Da flexibilidad al cliente, pero exige cuidar autorización, rendimiento y diseño del esquema.",
  },
  "tech-06": {
    frontQuestion: "¿Qué es esa dirección u operación concreta de una API a la que se llama para pedir un recurso?",
    frontScenario: "Ingeniería pregunta a qué URL debe llamar el cliente para enviar un ticket de soporte.",
    backInfo: "Endpoint (punto de acceso): ubicación u operación de una API por donde el cliente accede a una función o recurso. En algunos estilos de API es más preciso hablar de «operación» que solo de URL.",
  },
  "tech-07": {
    frontQuestion: "¿Qué describe lo que se envía a un servicio y lo que ese servicio devuelve?",
    frontScenario: "La app envía los datos de un pedido y recibe el pedido creado o un error.",
    backInfo: "Request / Response (petición y respuesta): la petición pide algo a un servicio o le envía datos; la respuesta comunica el resultado, el estado y los datos. Este patrón es la base de la comunicación HTTP y de casi toda API.",
  },
  "tech-08": {
    frontQuestion: "¿Qué número de tres dígitos comunica si una petición web tuvo éxito o falló?",
    frontScenario: "La API devuelve «404» cuando el objeto no existe y «500» cuando el servidor falla de forma inesperada.",
    backInfo: "HTTP Status Code (código de estado HTTP): código estándar del resultado, como 2xx para éxito, 4xx para condiciones del lado del cliente y 5xx para errores del servidor. El código debe reflejar el significado real del resultado.",
  },
  "tech-09": {
    frontQuestion: "¿Qué mecanismo avisa por HTTP a otro sistema cuando ocurre un evento, sin que tenga que preguntar a cada rato?",
    frontScenario: "Un proveedor de pagos avisa de inmediato a tu servidor cuando un cobro se completa.",
    backInfo: "Webhook (notificación automática por HTTP): llamada que un sistema envía a otro al ocurrir un evento. Quien la recibe debe manejar verificación, reintentos, duplicados y posibles llegadas fuera de orden.",
  },
  "tech-10": {
    frontQuestion: "¿Qué sistema guarda y organiza los datos de la aplicación para consultarlos después?",
    frontScenario: "Las cuentas, los proyectos y los permisos deben seguir ahí aunque la persona cierre la app.",
    backInfo: "Database (base de datos): sistema de almacenamiento persistente y consulta de datos estructurados o semiestructurados. Elegirla implica balancear consistencia, consultas, escala y operación.",
  },
  "tech-11": {
    frontQuestion: "¿Qué almacenamiento temporal guarda datos frecuentes cerca de donde se usan para ir más rápido?",
    frontScenario: "Un panel pide una y otra vez el mismo dato costoso y se siente lento, aunque ese dato cambia cada pocos minutos.",
    backInfo: "Cache (caché): copia temporal de datos o cálculos para acelerar y reducir carga. Define bien cuándo caduca y cuándo se invalida, porque lo guardado puede quedar desactualizado.",
  },
  "tech-12": {
    frontQuestion: "¿Qué red distribuida sirve contenido desde puntos cercanos a cada persona para reducir tiempos y carga?",
    frontScenario: "Personas en Australia descargan las mismas imágenes desde un servidor que solo está en Europa y todo tarda demasiado.",
    backInfo: "CDN — Content Delivery Network (red de distribución de contenidos): red de servidores al borde que entrega contenido cerca de cada usuario. Suele mejorar latencia, resistencia y uso de ancho de banda en recursos que se pueden cachear.",
  },
  "tech-13": {
    frontQuestion: "¿Qué mide la demora entre iniciar una acción y recibir la respuesta?",
    frontScenario: "Un asistente de IA da una buena respuesta, pero tarda ocho segundos después de pulsar Enviar.",
    backInfo: "Latency (latencia): tiempo de espera en una interacción del sistema. Conviene medirla por partes —red, servidor, modelo y respuesta total— porque cada tramo se percibe y se optimiza distinto.",
  },
  "tech-14": {
    frontQuestion: "¿Qué proceso de seguridad verifica que una persona o sistema es quien dice ser?",
    frontScenario: "Una persona inicia sesión con llave de acceso, contraseña u otro mecanismo de identidad.",
    backInfo: "Authentication — AuthN (autenticación): verificación de identidad. Responde a «¿quién eres?» y es distinta de la autorización, que decide qué puede hacer esa identidad.",
  },
  "tech-15": {
    frontQuestion: "¿Qué proceso de seguridad decide qué puede ver o cambiar una identidad ya verificada?",
    frontScenario: "Dos empleados inician sesión, pero solo quien administra puede cambiar la facturación.",
    backInfo: "Authorization — AuthZ (autorización): reglas que definen las acciones y recursos permitidos. Responde a «¿qué puedes hacer?» y debe aplicarse en el servidor de confianza, no solo ocultando botones en la pantalla.",
  },
  "tech-16": {
    frontQuestion: "¿Qué arquitectura separa la aplicación que pide recursos del servicio que los procesa y entrega?",
    frontScenario: "Un navegador pide datos de productos a un servicio remoto y luego dibuja la respuesta.",
    backInfo: "Client–Server Model (modelo cliente-servidor): arquitectura donde los clientes piden servicios o recursos a los servidores. Los sistemas modernos suman capas locales y distribuidas, pero la distinción sigue siendo vocabulario útil.",
  },
  "ai-01": {
    frontQuestion: "¿Qué tipo de modelo aprende de grandes volúmenes de texto para generar o transformar lenguaje?",
    frontScenario: "Un producto resume documentos, responde preguntas y genera textos estructurados a partir de instrucciones.",
    backInfo: "LLM — Large Language Model (modelo grande de lenguaje): modelo amplio capaz de entender y generar lenguaje. En productos reales suele ser solo una pieza dentro de un sistema mayor con herramientas, búsqueda, reglas y evaluación.",
  },
  "ai-02": {
    frontQuestion: "¿Qué es esa pequeña unidad de texto con la que se miden límites y costos de uso del modelo?",
    frontScenario: "Un documento largo consume mucha más capacidad del modelo de lo que sugiere su conteo visible de caracteres.",
    backInfo: "Token (fragmento de texto): unidad que produce el divisor del modelo para representar entradas y salidas. No equivale a una palabra; la división cambia según el modelo y el idioma.",
  },
  "ai-03": {
    frontQuestion: "¿Qué límite describe cuánto historial y contexto puede tomar en cuenta un modelo en una sola petición?",
    frontScenario: "Un asistente de soporte empieza a olvidar el inicio de una conversación muy larga porque se incluyó demasiado material.",
    backInfo: "Context Window (ventana de contexto): capacidad máxima de tokens que un modelo puede considerar por petición o conversación, según sus reglas. Que sea grande no garantiza que atienda con igual fuerza a cada detalle.",
  },
  "ai-04": {
    frontQuestion: "¿Qué es la instrucción con contexto que se da al modelo para orientar la tarea y el resultado?",
    frontScenario: "Un producto envía rol, restricciones, pedido del usuario y ejemplos antes de pedir al modelo un borrador.",
    backInfo: "Prompt (instrucción o indicación): entrada con instrucciones y contexto que guía el comportamiento del modelo. En producción es solo una capa; también importan herramientas, búsqueda, esquemas, permisos y evaluaciones.",
  },
  "ai-05": {
    frontQuestion: "¿Qué representación numérica permite comparar contenidos por significado y no por palabras exactas?",
    frontScenario: "La búsqueda debe encontrar «terminar membresía» cuando alguien escribe «cancelar mi suscripción».",
    backInfo: "Embedding (representación vectorial): vector aprendido que representa un contenido para comparar similitud, agrupar y recuperar por significado. Suele guardarse en un almacén capaz de buscar por vectores.",
  },
  "ai-06": {
    frontQuestion: "¿Qué arquitectura busca información externa relevante y se la entrega al modelo al momento de responder?",
    frontScenario: "Un asistente debe responder con la documentación actual de la empresa sin reentrenar el modelo cada vez que cambia una norma.",
    backInfo: "RAG — Retrieval-Augmented Generation (búsqueda con generación): paso de búsqueda que encuentra contenido externo y lo suma al contexto antes de generar. Mejora frescura y sustento, pero la calidad de la búsqueda y la evaluación siguen siendo clave.",
  },
  "ai-07": {
    frontQuestion: "¿Qué práctica conecta la respuesta del modelo con datos verificables para no depender de su memoria?",
    frontScenario: "Un asistente legal debe responder solo con las normas aprobadas del cliente y mostrar referencias de apoyo.",
    backInfo: "Grounding (fundamentación en fuentes): apoyar o limitar la generación con contexto autorizado o evidencia externa. Reduce afirmaciones sin sustento, pero no garantiza por sí sola que todo sea correcto.",
  },
  "ai-08": {
    frontQuestion: "¿Cómo se llama cuando el modelo presenta como válida información inventada o sin sustento?",
    frontScenario: "Un asistente cita una cláusula que no existe en ningún documento entregado.",
    backInfo: "Hallucination (alucinación): contenido generado sin sustento, inventado o contrario a la fuente de verdad. Contrólalo con diseño de producto: fundamentación, herramientas, manejo de incertidumbre y evaluaciones.",
  },
  "ai-09": {
    frontQuestion: "¿Qué capacidad permite al modelo elegir y llamar funciones externas en vez de solo generar texto?",
    frontScenario: "Un asistente revisa inventario, crea un evento de calendario y consulta datos de la cuenta con funciones aprobadas.",
    backInfo: "Tool Use / Function Calling (uso de herramientas o llamada a funciones): capacidad de elegir herramientas estructuradas y pasarles argumentos para que se ejecuten fuera del modelo. Amplía lo posible, pero exige permisos, validación, manejo de errores y control claro del usuario.",
  },
  "ai-10": {
    frontQuestion: "¿Qué sistema de IA puede decidir pasos y herramientas para lograr un objetivo en vez de dar una sola respuesta fija?",
    frontScenario: "Un asistente de viajes busca opciones, las compara, revisa restricciones y ejecuta acciones aprobadas en varios pasos.",
    backInfo: "Agent (agente): sistema de IA que avanza hacia una meta con pasos iterativos de razonamiento, decisión y uso de herramientas. Define permisos, condiciones de parada, observabilidad y control humano.",
  },
  "ai-11": {
    frontQuestion: "¿Qué flujo permite a un sistema de IA planear, actuar, observar y seguir en varios pasos?",
    frontScenario: "El sistema reintenta con otra herramienta una búsqueda de datos que falló y ajusta el paso siguiente según el resultado.",
    backInfo: "Agentic Workflow (flujo de trabajo agéntico): flujo de varios pasos donde las decisiones del modelo influyen en qué acciones ocurren después. «Agéntico» no significa autonomía ilimitada; los límites y aprobaciones deben ser explícitos.",
  },
  "ai-12": {
    frontQuestion: "¿Qué protocolo abierto estandariza cómo las apps de IA se conectan a herramientas y recursos externos?",
    frontScenario: "La misma herramienta de búsqueda de la empresa debería funcionar con varios clientes de IA compatibles sin integrarla una por una.",
    backInfo: "MCP — Model Context Protocol (protocolo de contexto del modelo): protocolo abierto para conectar aplicaciones de IA con herramientas, recursos y contexto. Ya es un estándar clave de interoperabilidad; aun así exige cuidar seguridad, autorización y límites de confianza.",
  },
  "ai-13": {
    frontQuestion: "¿Qué método obliga al modelo a responder en un esquema legible por máquina en vez de esperar texto libre?",
    frontScenario: "Un flujo necesita campos garantizados como «nombre», «nivel de riesgo» y «acción recomendada» para el software que sigue.",
    backInfo: "Structured Outputs (salidas estructuradas): respuestas del modelo limitadas a una estructura definida, comúnmente con esquema JSON. Mejora la forma y los tipos, pero no garantiza que los valores sean verdaderos.",
  },
  "ai-14": {
    frontQuestion: "¿Qué pruebas sistemáticas miden si un sistema de IA rinde bien en tareas y casos de fallo definidos?",
    frontScenario: "Un equipo cambia modelo e instrucciones y necesita evidencia de que la calidad mejoró sin aumentar conductas riesgosas.",
    backInfo: "Evals — Evaluations (evaluaciones): conjuntos repetibles de datos, criterios y métodos de calificación para valorar el sistema. Una buena batería incluye casos típicos, casos borde y modos de fallo importantes.",
  },
  "ai-15": {
    frontQuestion: "¿Qué diseño mantiene a una persona aprobando o interviniendo en pasos críticos en vez de automatizar todo?",
    frontScenario: "La IA redacta reembolsos, pero un agente de soporte debe aprobar los casos de monto alto antes de mover dinero.",
    backInfo: "Human in the Loop — HITL (persona en el circuito): diseño donde personas revisan, aprueban, corrigen o toman el control en puntos definidos. Úsalo según riesgo y responsabilidad, no como promesa vaga de que «alguien participa».",
  },
  "ai-16": {
    frontQuestion: "¿Qué ataque intenta manipular a la IA con instrucciones maliciosas en entradas o datos externos?",
    frontScenario: "Una página que consulta un agente trae texto oculto que le ordena ignorar normas y exponer secretos.",
    backInfo: "Prompt Injection (inyección de instrucciones): instrucciones adversarias que buscan torcer el comportamiento a través de contenido visible para el modelo. Trata el contenido externo como dato no confiable y aplica seguridad fuera del modelo, no solo en la instrucción.",
  },
  "ai-17": {
    frontQuestion: "¿Qué controles limitan conductas riesgosas o no deseadas de la IA antes, durante y después de ejecutarse?",
    frontScenario: "Un asistente de salud necesita revisiones de normas, herramientas restringidas, moderación y escalamiento de respuestas.",
    backInfo: "AI Guardrails (barreras de seguridad para IA): controles en capas como permisos, validación, filtros de normas, restricción de herramientas, límites de uso, monitoreo y escalamiento humano. Deben ser defensas del sistema, no una sola instrucción de «sé cuidadoso».",
  },
  "ai-18": {
    frontQuestion: "¿Qué capacidad permite a un modelo trabajar con varios tipos de datos como texto, imagen, audio o video?",
    frontScenario: "Un asistente de soporte lee una captura de pantalla, escucha una nota de voz y responde en texto.",
    backInfo: "Multimodal AI (IA multimodal): IA capaz de procesar o producir varias modalidades. Al diseñar considera latencia, accesibilidad, privacidad y errores propios de cada modalidad.",
  },
  "ai-19": {
    frontQuestion: "¿Qué método adapta un modelo ya entrenado con ejemplos seleccionados en vez de solo cambiar la instrucción?",
    frontScenario: "Una empresa necesita de forma repetida un estilo y un comportamiento que la sola instrucción no logra de manera confiable.",
    backInfo: "Fine-tuning (ajuste fino): entrenamiento adicional que adapta un modelo preentrenado con datos elegidos. Puede mejorar tareas adecuadas, pero no es la vía por defecto para datos que cambian a cada rato.",
  },
  "ai-20": {
    frontQuestion: "¿Cómo se llama el proceso de usar un modelo ya entrenado para generar una respuesta ante una entrada nueva?",
    frontScenario: "El modelo ya está entrenado; cada pedido del usuario consume cómputo para generar una respuesta.",
    backInfo: "Inference (inferencia): ejecución de un modelo entrenado sobre una entrada nueva. Los equipos suelen optimizarla por calidad, latencia, capacidad y costo, en vez de tratar «el modelo» como todo el producto.",
  },
};
