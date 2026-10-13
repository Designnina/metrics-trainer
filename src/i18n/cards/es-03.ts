import type { CardOverride } from '../cardOverrides';

export const es03: Record<string, CardOverride> = {
  "ur-15": {
    frontQuestion: "¿Qué método permite revisar una interfaz con principios de usabilidad sin convocar usuarios?",
    frontScenario: "Faltan semanas para los tests con usuarios y necesitas detectar ya los problemas evidentes de las pantallas.",
    backInfo: "Heuristic Evaluation (evaluación heurística): revisión experta de la interfaz contra principios de usabilidad para detectar problemas probables. Úsala para encontrar fallos rápido, pero no la confundas con evidencia de usuarios reales.",
  },
  "ur-16": {
    frontQuestion: "¿Qué método experto muestra si una persona nueva sabrá qué hacer en cada paso?",
    frontScenario: "Diseñas una configuración compleja para administradores que la ven por primera vez.",
    backInfo: "Cognitive Walkthrough (recorrido cognitivo): análisis experto paso a paso visto con ojos de principiante. Comprueba si la persona entiende el objetivo, nota los controles, asocia cada acción con su meta y comprende la respuesta del sistema.",
  },
  "ur-17": {
    frontQuestion: "¿Qué define quién califica para un estudio para que reclutes a las personas correctas?",
    frontScenario: "Estudias a solicitantes primerizos de hipoteca y a las entrevistas llegan expertos en finanzas.",
    backInfo: "Screener (cuestionario de selección): filtro de reclutamiento que incluye o excluye participantes según rasgos y conductas relevantes. Defínelo antes de entrevistar y evita sugerir las respuestas deseadas.",
  },
  "ur-18": {
    frontQuestion: "¿Qué describe el momento en que nuevas entrevistas casi no aportan hallazgos frescos?",
    frontScenario: "Tras una docena de conversaciones los temas se repiten y cada sesión solo confirma lo escuchado.",
    backInfo: "Saturation (saturación): punto en que nuevas sesiones cualitativas aportan pocos temas nuevos para tu pregunta. Úsala como orientación según el contexto, no como regla rígida de cantidad de participantes.",
  },
  "pd-01": {
    frontQuestion: "¿Qué describe las necesidades y dolores del cliente antes de decidir qué construir?",
    frontScenario: "El equipo discute funcionalidades sin haberse puesto de acuerdo sobre qué problema resuelve.",
    backInfo: "Problem Space (espacio del problema): necesidades, dolores, restricciones y resultados deseados del cliente. Quédate en él el tiempo suficiente para no enamorarte de la primera solución.",
  },
  "pd-02": {
    frontQuestion: "¿Qué describe los posibles productos y funcionalidades para resolver un problema ya entendido?",
    frontScenario: "Descubriste que a los freelancers les cuesta dar seguimiento a sus facturas y ahora exploras cómo ayudarlos.",
    backInfo: "Solution Space (espacio de la solución): conjunto de formas posibles de resolver un problema u oportunidad. Compara varias opciones en vez de tratar la primera idea como inevitable.",
  },
  "pd-03": {
    frontQuestion: "¿Con qué debería empezar el discovery si necesitas un cambio medible y no solo una funcionalidad?",
    frontScenario: "La dirección pide «búsqueda con IA», pero primero hay que aclarar qué mejora debería producir.",
    backInfo: "Desired Outcome (resultado deseado): cambio medible en la conducta del cliente o del negocio que el equipo quiere lograr. Fíjalo al inicio para apuntar al valor y no al volumen de entregas.",
  },
  "pd-04": {
    frontQuestion: "¿Cómo se llama la necesidad insatisfecha del cliente que puede llevarte al resultado deseado?",
    frontScenario: "Entrevista tras entrevista, los compradores cuentan que no logran comparar planes con confianza antes de pagar.",
    backInfo: "Opportunity (oportunidad): necesidad, dolor o deseo del cliente que vale la pena explorar para lograr un resultado. Formúlala sin solución dentro: todavía no es una idea de funcionalidad.",
  },
  "pd-05": {
    frontQuestion: "¿Qué debería ser verdad para que tu plan funcione aunque aún no lo hayas comprobado?",
    frontScenario: "Supones que las personas confiarán en una recomendación automática lo suficiente para actuar según ella.",
    backInfo: "Assumption (supuesto): creencia no verificada que sostiene una decisión de producto. Hazla explícita para testear primero la más riesgosa con el menor costo.",
  },
  "pd-06": {
    frontQuestion: "¿Qué riesgo describe la duda de si los clientes realmente quieren tu solución?",
    frontScenario: "Todo es técnicamente viable, pero nadie sabe si la gente cambiará sus hábitos o pagará por ello.",
    backInfo: "Value Risk (riesgo de valor): riesgo de que la solución no aporte suficiente valor al cliente. Verifica el deseo, la conducta y la disposición a pagar antes de invertir en desarrollo.",
  },
  "pd-07": {
    frontQuestion: "¿Qué riesgo describe que las personas no logren entender ni usar tu interfaz?",
    frontScenario: "La funcionalidad interesa, pero en el prototipo nadie logra configurarla bien.",
    backInfo: "Usability Risk (riesgo de usabilidad): riesgo de que los usuarios no puedan usar la solución con eficacia. Redúcelo con prototipos y tests: los tropiezos se ven antes de escribir código.",
  },
  "pd-08": {
    frontQuestion: "¿Qué riesgo describe la duda de si podrán construir la solución con su tecnología y datos?",
    frontScenario: "La idea exige predicciones casi en tiempo real, pero tu plataforma de datos se actualiza una vez al día.",
    backInfo: "Feasibility Risk (riesgo de viabilidad técnica): riesgo de no poder entregar la solución de forma confiable con tus capacidades, tiempos e infraestructura. Involucra a ingeniería y datos desde el discovery.",
  },
  "pd-09": {
    frontQuestion: "¿Qué riesgo describe que la solución no resulte sostenible para el propio negocio?",
    frontScenario: "A los usuarios les encanta la idea, pero atenderla a mano haría cada transacción poco rentable.",
    backInfo: "Viability Risk (riesgo de viabilidad del negocio): riesgo de que la solución no funcione para la empresa u organización. Revisa economía, legalidad, operaciones, estrategia e interesados, más allá del «a los usuarios les gusta».",
  },
  "pd-10": {
    frontQuestion: "¿Qué deberías testear primero si un solo supuesto falso derrumba toda la idea?",
    frontScenario: "El prototipo del marketplace luce perfecto, pero todo depende de que los vendedores respondan en cinco minutos.",
    backInfo: "Riskiest Assumption (supuesto más riesgoso): supuesto cuyo fracaso más daña la idea, por incertidumbre e importancia. Testéalo antes de pulir detalles de menor riesgo.",
  },
  "pd-11": {
    frontQuestion: "¿Qué técnica ordena los supuestos por importancia y evidencia para decidir qué testear primero?",
    frontScenario: "El trío de producto acumula veinte supuestos y no sabe por dónde empezar a validar.",
    backInfo: "Assumption Mapping (mapeo de supuestos): priorización visual o estructurada de supuestos por importancia y nivel de evidencia. Úsala para enfocar los experimentos en lo que más puede cambiar la decisión.",
  },
  "pd-12": {
    frontQuestion: "¿Qué test barato mide el interés por una funcionalidad antes de construirla?",
    frontScenario: "No está claro si los clientes quieren la exportación y no quieres gastar seis semanas de desarrollo a ciegas.",
    backInfo: "Fake Door Test (test de puerta falsa): punto de entrada realista a una capacidad aún no construida para medir clics o registros. Sé transparente en el siguiente paso para no engañar ni dañar la experiencia.",
  },
  "pd-13": {
    frontQuestion: "¿Qué enfoque entrega el servicio a mano a pocos clientes para aprender qué aporta valor antes de automatizar?",
    frontScenario: "Una startup prepara informes semanales a mano para cinco clientes antes de invertir en un motor de reportes.",
    backInfo: "Concierge Test (test de conserjería): entrega manual del valor mientras aprendes sobre necesidades, flujo y disposición a usar o pagar. Su carácter manual suele ser visible para los participantes.",
  },
  "pd-14": {
    frontQuestion: "¿Qué prototipo parece automático aunque por detrás todo lo hacen personas?",
    frontScenario: "Pruebas un flujo «con IA» que clasifica solicitudes antes de tener el modelo, con un operador clasificando a mano.",
    backInfo: "Wizard of Oz Prototype (prototipo del Mago de Oz): la persona vive una conducta aparentemente automática que en realidad producen humanos entre bambalinas. Úsalo para validar interacción y valor antes de una automatización costosa.",
  },
  "pd-15": {
    frontQuestion: "¿Qué equipo multifuncional suele liderar el discovery continuo?",
    frontScenario: "Las decisiones mejoran cuando valor, experiencia y restricciones técnicas se exploran juntas y no por relevos.",
    backInfo: "Product Trio (trío de producto): colaboración entre responsable de producto, diseño e ingeniería para el discovery continuo. Su fuerza está en colaborar, no en una regla rígida de organigrama.",
  },
  "pd-16": {
    frontQuestion: "¿Qué práctica implica hablar con clientes y testear supuestos con frecuencia en vez de hacerlo una vez al año?",
    frontScenario: "El equipo conversa con clientes cada semana y valida oportunidades y soluciones en paralelo con la entrega.",
    backInfo: "Continuous Discovery (discovery continuo): trabajo constante para reducir riesgos con contacto frecuente con clientes y testeo de supuestos. Acompaña a la entrega en paralelo, no como una fase única de «primero investigamos, luego hacemos».",
  },
  "sp-01": {
    frontQuestion: "¿Qué describe el futuro de largo plazo que tu producto ayuda a crear?",
    frontScenario: "El equipo necesita un rumbo duradero que sobreviva a funcionalidades sueltas y planes trimestrales.",
    backInfo: "Product Vision (visión de producto): descripción inspiradora del futuro hacia el que avanza el producto. Te da dirección, no un plan detallado de ejecución.",
  },
  "sp-02": {
    frontQuestion: "¿Qué describe para qué existe hoy tu organización y a quién sirve?",
    frontScenario: "El equipo necesita una frase corta de propósito y no un sueño sobre un futuro lejano.",
    backInfo: "Mission (misión): declaración del propósito actual: por qué existes, a quién sirves y qué valor creas. Distínguela de la visión: la misión habla del presente, la visión del futuro.",
  },
  "sp-03": {
    frontQuestion: "¿Qué explica dónde competirá tu producto y cómo piensa ganar?",
    frontScenario: "El roadmap tiene decenas de pedidos, pero sin lógica sobre qué mercados y problemas importan más.",
    backInfo: "Product Strategy (estrategia de producto): conjunto coherente de decisiones sobre clientes, problemas, diferenciación y renuncias. Conecta la visión con la elección y exige decir que no a parte de las ideas atractivas.",
  },
  "sp-04": {
    frontQuestion: "¿Qué describe una apuesta deliberada por un rumbo cuyo éxito aún es incierto?",
    frontScenario: "La empresa decide hacer de la colaboración su gran palanca de crecimiento del año en vez de sumar funcionalidades sueltas.",
    backInfo: "Strategic Bet (apuesta estratégica): compromiso relevante de recursos basado en una creencia sobre cómo crear ventaja. Registra sus supuestos y las señales que te dirán si va por buen camino.",
  },
  "sp-05": {
    frontQuestion: "¿Qué muestra la dirección y el orden del producto sin ser un contrato rígido de funcionalidades?",
    frontScenario: "Los interesados necesitan entender qué temas piensas desarrollar y por qué esos.",
    backInfo: "Product Roadmap (hoja de ruta de producto): artefacto de comunicación sobre dirección, prioridades y secuencia esperada. Mantenlo vivo y actualízalo con nueva evidencia; no es un calendario fijo de entregas.",
  },
  "sp-06": {
    frontQuestion: "¿Qué roadmap se organiza por problemas y resultados medibles en vez de prometer funcionalidades con fecha?",
    frontScenario: "El equipo quiere alinearse en «reducir la configuración inicial fallida» en vez de atarse a una solución seis meses antes.",
    backInfo: "Outcome-based Roadmap (hoja de ruta por resultados): plan estructurado por resultados, problemas del cliente o temas estratégicos. Mantiene el rumbo y deja espacio para descubrir la mejor solución.",
  },
  "sp-07": {
    frontQuestion: "¿Qué sistema de objetivos combina una meta cualitativa con resultados clave medibles?",
    frontScenario: "Un equipo quiere una dirección ambiciosa más evidencia de si avanza hacia ella.",
    backInfo: "OKR — Objectives and Key Results (objetivos y resultados clave): marco que une un objetivo cualitativo con pocos resultados medibles. Describe resultados en los resultados clave, no solo tareas completadas.",
  },
  "sp-08": {
    frontQuestion: "¿Qué parte del OKR describe el cambio cualitativo que quieres lograr?",
    frontScenario: "La frase «que configurar el producto sea fácil para equipos nuevos» expresa intención, pero no medición.",
    backInfo: "Objective (objetivo): meta cualitativa y orientadora dentro de un OKR. Responde qué cambio significativo buscas, sin cifras en su redacción.",
  },
  "sp-09": {
    frontQuestion: "¿Qué parte del OKR aporta la evidencia medible de si lograste el objetivo?",
    frontScenario: "Necesitas números como aumento de activación y menor tiempo de configuración, no una lista de funcionalidades lanzadas.",
    backInfo: "Key Result (resultado clave): resultado cuantificado para evaluar el avance hacia un objetivo. Lanzar una funcionalidad es una iniciativa, no un buen resultado clave por sí solo.",
  },
  "sp-10": {
    frontQuestion: "¿Qué marco prioriza iniciativas con alcance, impacto, confianza y esfuerzo?",
    frontScenario: "Debes comparar ideas que afectan a distinta cantidad de usuarios y exigen distinto esfuerzo de ingeniería.",
    backInfo: "RICE — Reach, Impact, Confidence, Effort (alcance, impacto, confianza, esfuerzo): modelo con puntaje Reach × Impact × Confidence / Effort. Ordena la comparación, pero recuerda que depende de supuestos y no sustituye el juicio estratégico.",
  },
  "sp-11": {
    frontQuestion: "¿Qué marco ligero prioriza ideas por impacto, confianza y facilidad?",
    frontScenario: "Un equipo temprano quiere un puntaje más rápido que RICE porque no tiene estimaciones de alcance confiables.",
    backInfo: "ICE — Impact, Confidence, Ease (impacto, confianza, facilidad): modelo rápido de priorización. Funciona si acuerdan escalas consistentes; sin eso se vuelve muy subjetivo.",
  },
  "sp-12": {
    frontQuestion: "¿Qué método divide el costo del retraso entre el tamaño del trabajo para adelantar lo valioso y rápido?",
    frontScenario: "Un equipo de portafolio debe ordenar iniciativas donde urgencia y esfuerzo difieren mucho.",
    backInfo: "WSJF — Weighted Shortest Job First (trabajo más corto ponderado primero): enfoque que ordena por Cost of Delay / Job Size. Ayuda a secuenciar valor económico, aunque las estimaciones de entrada exigen criterio.",
  },
  "sp-13": {
    frontQuestion: "¿Qué método clasifica el alcance en debe, debería, podría y no tendrá?",
    frontScenario: "Un proyecto tiene más pedidos de los que caben en la entrega y necesita categorías explícitas de alcance.",
    backInfo: "MoSCoW — Must, Should, Could, Won't have (debe, debería, podría, no tendrá): clasificación del alcance para un periodo o entrega. Limita los «debe» o la clasificación pierde sentido.",
  },
  "sp-14": {
    frontQuestion: "¿Qué herramienta simple cruza el impacto esperado con el esfuerzo requerido?",
    frontScenario: "El equipo quiere detectar victorias rápidas y evitar meses de trabajo en ideas de bajo impacto.",
    backInfo: "Impact–Effort Matrix (matriz de impacto y esfuerzo): comparación del impacto esperado frente al esfuerzo. Sirve para conversar y filtrar, pero ignora confianza, tiempos y ajuste estratégico salvo que los agregues.",
  },
  "sp-15": {
    frontQuestion: "¿Qué modelo clasifica los atributos según cómo su presencia afecta la satisfacción?",
    frontScenario: "Algunas capacidades son una expectativa básica, mientras otras deleitan aunque nadie las esperaba.",
    backInfo: "Kano Model (modelo Kano): clasifica atributos en básicos, de desempeño y deleitadores según la respuesta de satisfacción. Recuerda que las categorías cambian con el tiempo a medida que suben las expectativas.",
  },
  "sp-16": {
    frontQuestion: "¿Qué describe la pérdida económica por retrasar un trabajo?",
    frontScenario: "Posponer un cambio regulatorio y posponer un retoque visual tienen consecuencias muy distintas con igual esfuerzo.",
    backInfo: "Cost of Delay (costo del retraso): estimación del valor perdido mientras el trabajo espera, en ingresos, riesgos o impacto al cliente. Úsalo para hacer explícita la urgencia.",
  },
  "sp-17": {
    frontQuestion: "¿Qué método prioriza oportunidades cruzando su importancia con la satisfacción actual?",
    frontScenario: "A los usuarios les importa mucho un flujo, pero están muy insatisfechos con las soluciones actuales.",
    backInfo: "Opportunity Scoring (puntuación de oportunidades): priorización que compara la importancia de las necesidades con la satisfacción con lo existente. Las fórmulas exactas varían; su meta es hallar resultados importantes y mal atendidos.",
  },
  "sp-18": {
    frontQuestion: "¿Qué objetivo de largo plazo orienta el producto y da dirección al backlog en Scrum?",
    frontScenario: "Un equipo Scrum necesita un futuro coherente hacia el cual avanzar durante varios sprints.",
    backInfo: "Product Goal (objetivo de producto): objetivo de largo plazo del equipo Scrum definido en el backlog del producto. Da foco más allá de la meta de un solo sprint.",
  },
  "fw-01": {
    frontQuestion: "¿Qué enfoque describe la demanda por el progreso que la persona quiere lograr y no por su edad o el pedido de funcionalidad?",
    frontScenario: "Dos clientes muy distintos «contratan» la misma herramienta porque ambos necesitan coordinar una decisión compleja rápido.",
    backInfo: "Jobs to Be Done — JTBD (trabajos por hacer): mirada que entiende el producto por el progreso que el cliente busca en una situación. Enfócate en el trabajo, el contexto y el avance deseado, no solo en perfiles o pedidos de funcionalidades.",
  },
  "fw-02": {
    frontQuestion: "¿Qué formato expresa situación, motivación y resultado con «Cuando…, quiero…, para poder…»?",
    frontScenario: "El equipo quiere describir contexto y motivación sin convertir el requisito en una historia atada a una funcionalidad.",
    backInfo: "Job Story (historia de trabajo): formato al estilo JTBD: When [situación], I want to [motivación], so I can [resultado]. Enfatiza contexto y progreso en vez del rótulo del rol.",
  },
  "fw-03": {
    frontQuestion: "¿Qué idea de JTBD analiza el empuje actual, la atracción de lo nuevo, los hábitos y las ansiedades?",
    frontScenario: "Los clientes dicen querer una mejor herramienta, pero no cambian; el equipo necesita entender qué los frena.",
    backInfo: "Forces of Progress (fuerzas del progreso): lente JTBD sobre lo que impulsa o frena el cambio: empuje, atracción, hábitos e inquietudes. Úsala para entender adopción y cambio de herramienta.",
  },
  "fw-04": {
    frontQuestion: "¿Qué marco de diseño alterna apertura y cierre en Descubrir, Definir, Desarrollar y Entregar?",
    frontScenario: "Un equipo necesita un modelo simple para explorar el problema, acotarlo, explorar soluciones y acotar de nuevo.",
    backInfo: "Double Diamond (doble diamante): modelo con dos ciclos de divergencia y convergencia: Discover, Define, Develop, Deliver. Tómalo como forma de pensar, no como obligación de avanzar en línea recta.",
  },
  "fw-05": {
    frontQuestion: "¿Qué enfoque centrado en las personas suele pasar por empatizar, definir, idear, prototipar y testear?",
    frontScenario: "Un taller necesita una estructura conocida para ir del entendimiento del usuario a conceptos probados.",
    backInfo: "Design Thinking (pensamiento de diseño): enfoque de resolución centrado en las personas con empatizar, definir, idear, prototipar y testear. En la práctica estas actividades son iterativas, no una cascada rígida de cinco pasos.",
  },
  "fw-06": {
    frontQuestion: "¿Qué enfoque combina ideas Lean Startup con UX colaborativo, supuestos y experimentos pequeños?",
    frontScenario: "Un equipo de producto quiere menos documentos para entregar y más hipótesis, prototipos y aprendizaje compartido.",
    backInfo: "Lean UX (UX ágil): enfoque colaborativo basado en supuestos, hipótesis y experimentación rápida, con foco en resultados y no en entregables pesados. Funciona mejor cuando diseño, producto e ingeniería aprenden juntos.",
  },
  "fw-07": {
    frontQuestion: "¿Qué marco de crecimiento organiza el ciclo en Adquisición, Activación, Retención, Referencia e Ingresos?",
    frontScenario: "Una startup quiere ubicar si su problema está antes del primer valor, después de él o en la monetización.",
    backInfo: "AARRR — Pirate Metrics (métricas pirata): marco de ciclo de vida: Acquisition, Activation, Retention, Referral, Revenue. Úsalo como diagnóstico, no como mandato de optimizar cada etapa por igual.",
  },
  "fw-08": {
    frontQuestion: "¿Qué marco de medición UX agrupa señales en Felicidad, Interacción, Adopción, Retención y Éxito?",
    frontScenario: "Un equipo quiere elegir medidas de experiencia amplias sin depender de un solo puntaje de satisfacción.",
    backInfo: "HEART Framework (marco HEART): marco de métricas UX: Happiness, Engagement, Adoption, Retention, Task Success. Mapea metas a señales y métricas dentro de las categorías relevantes.",
  },
  "fw-09": {
    frontQuestion: "¿Qué marco visual conecta un resultado deseado con oportunidades, soluciones y tests de supuestos?",
    frontScenario: "Los hallazgos de entrevistas y las ideas están dispersos y el equipo necesita una estructura que mantenga el discovery alineado.",
    backInfo: "Opportunity Solution Tree — OST (árbol de oportunidades y soluciones): visual que enlaza un resultado con oportunidades, ideas de solución y tests. Ayuda a comparar caminos en vez de saltar del resultado a una sola funcionalidad.",
  },
  "fw-10": {
    frontQuestion: "¿Qué lienzo conecta tareas, dolores y beneficios del cliente con productos, aliviadores y creadores de beneficios?",
    frontScenario: "Un equipo necesita verificar si su propuesta de valor responde a lo que el cliente intenta lograr.",
    backInfo: "Value Proposition Canvas (lienzo de propuesta de valor): marco que une el perfil del cliente con el mapa de valor. Sirve para formular hipótesis de encaje, que aún debes validar con evidencia de clientes.",
  },
  "fw-11": {
    frontQuestion: "¿Qué marco de una página ordena socios, actividades, recursos, propuesta de valor, canales, segmentos, costos e ingresos?",
    frontScenario: "Una fundadora quiere dejar visibles en una página los supuestos detrás de un nuevo modelo de negocio.",
    backInfo: "Business Model Canvas (lienzo de modelo de negocio): modelo de nueve bloques que describe cómo la organización crea, entrega y captura valor. Úsalo como mapa de hipótesis, no como prueba de que el modelo funciona.",
  },
  "fw-12": {
    frontQuestion: "¿Qué mapa muestra el recorrido del cliente junto con interacciones visibles, procesos internos y sistemas?",
    frontScenario: "Un problema parece de interfaz, pero la causa real es un proceso interno de aprobación con datos que se sincronizan tarde.",
    backInfo: "Service Blueprint (plano del servicio): mapa que enlaza acciones y puntos de contacto del cliente con interacciones visibles, procesos internos e infraestructura. Resulta útil en servicios que cruzan varios canales.",
  },
};
