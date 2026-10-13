import type { CardOverride } from '../cardOverrides';

export const es02: Record<string, CardOverride> = {
  "an-11": {
    frontQuestion: "¿Qué proceso verifica que los eventos analíticos se activen bien?",
    frontScenario: "Después de un lanzamiento, el panel muestra una conversión imposible y todo apunta a un error en la medición.",
    backInfo: "Analytics QA (verificación analítica): revisión de activadores, identidades, propiedades, tipos de datos, duplicados y comportamiento por entorno. Hazla antes de decidir con datos nuevos y prueba la medición con el mismo rigor que el código.",
  },
  "an-12": {
    frontQuestion: "¿Qué proceso evita contar a la misma persona como dos usuarios distintos?",
    frontScenario: "Alguien navega sin registrarse, luego crea una cuenta y aparece dos veces en el embudo.",
    backInfo: "Identity Resolution (resolución de identidad): unión de identificadores anónimos, de sesión iniciada y de varios dispositivos en un mismo perfil cuando corresponde. Sin una buena lógica de unión, los embudos y la retención quedan distorsionados.",
  },
  "an-13": {
    frontQuestion: "¿Qué análisis decide a qué canal o contacto se le atribuye una conversión?",
    frontScenario: "Una compradora ve un anuncio, lee un artículo y días después vuelve desde el buscador y compra.",
    backInfo: "Attribution (atribución): reglas o modelos que reparten el mérito de la conversión entre los puntos de contacto. Es siempre una estimación limitada por el rastreo y los supuestos del modelo, no una verdad objetiva.",
  },
  "an-14": {
    frontQuestion: "¿Qué documento define los eventos clave y su significado antes de crear paneles?",
    frontScenario: "Cada equipo llama «interacción» a cualquier clic y el panel se ve activo pero no sirve para decidir.",
    backInfo: "Measurement Framework (marco de medición): mapa documentado que conecta objetivos, preguntas, métricas, eventos y definiciones. Obliga a medir decisiones y resultados en vez de acumular datos sin rumbo.",
  },
  "an-15": {
    frontQuestion: "¿Qué tipo de métrica anticipa un resultado futuro en vez de confirmarlo después?",
    frontScenario: "El equipo quiere una señal temprana de que la retención mejorará sin esperar 90 días.",
    backInfo: "Leading Indicator (indicador adelantado): métrica que se mueve antes del resultado deseado y da retroalimentación rápida. Úsala solo si hay evidencia real de que predice ese resultado, no solo porque se mueve pronto.",
  },
  "an-16": {
    frontQuestion: "¿Qué tipo de métrica confirma un resultado solo después de que ya ocurrió?",
    frontScenario: "Los ingresos del trimestre confirman si los esfuerzos de adquisición y activación funcionaron.",
    backInfo: "Lagging Indicator (indicador rezagado): métrica que refleja el resultado cuando el comportamiento ya sucedió. Sirve para validar outcomes, pero suele ser demasiado lenta para guiar las decisiones diarias de producto.",
  },
  "ex-01": {
    frontQuestion: "¿Qué enunciado predice la relación entre un cambio y un resultado antes de probarlo?",
    frontScenario: "El equipo cree que simplificar el registro aumentará la creación del primer proyecto.",
    backInfo: "Hypothesis (hipótesis): predicción comprobable que conecta un cambio, una población objetivo y un resultado esperado. Una buena hipótesis se puede refutar con una prueba; sin ella, cualquier resultado parece una victoria.",
  },
  "ex-02": {
    frontQuestion: "¿Qué experimento compara una versión actual con una variante usando grupos aleatorios?",
    frontScenario: "La mitad de los usuarios ve la página de precios actual y la otra mitad ve un diseño nuevo.",
    backInfo: "A/B Test (prueba A/B): experimento controlado y aleatorizado que compara variantes en resultados definidos de antemano. La asignación aleatoria ayuda a aislar el efecto causal de otros factores que confunden.",
  },
  "ex-03": {
    frontQuestion: "¿Qué supuesto estadístico intenta refutar un experimento?",
    frontScenario: "Antes de declarar ganador al rediseño, el análisis parte de que no hay diferencia real entre variantes.",
    backInfo: "Null Hypothesis (hipótesis nula): afirmación estadística que suele representar ausencia de efecto o de diferencia. No rechazarla no prueba que las variantes sean iguales; quizá solo faltan datos.",
  },
  "ex-04": {
    frontQuestion: "¿Qué estadístico indica qué tan compatibles son los datos con la hipótesis nula?",
    frontScenario: "El panel del experimento muestra 0,03 y el equipo quiere saber qué significa de verdad ese número.",
    backInfo: "p-value (valor p): probabilidad, si el modelo nulo fuera cierto, de observar datos tan extremos o más que los obtenidos. No es la probabilidad de que la hipótesis sea verdadera.",
  },
  "ex-05": {
    frontQuestion: "¿Qué intervalo muestra el rango de valores plausibles para un efecto estimado?",
    frontScenario: "La conversión mejoró 1,2 puntos, pero el equipo necesita entender la incertidumbre de esa estimación.",
    backInfo: "Confidence Interval (intervalo de confianza): rango construido con un método que contendría el valor real con la frecuencia indicada si se repitiera el muestreo. Comunica la incertidumbre mucho mejor que una estimación puntual.",
  },
  "ex-06": {
    frontQuestion: "¿Qué métrica indica la probabilidad de detectar un efecto real si existe?",
    frontScenario: "Al equipo le preocupa que su experimento sea demasiado pequeño para notar la mejora que le importa.",
    backInfo: "Statistical Power (potencia estadística): probabilidad de rechazar la hipótesis nula cuando existe un efecto real del tamaño indicado. Depende del tamaño de muestra, la variabilidad, el umbral de significancia y el tamaño del efecto.",
  },
  "ex-07": {
    frontQuestion: "¿Qué cálculo determina cuántas observaciones necesita un experimento?",
    frontScenario: "El equipo quiere planear la duración de la prueba antes de lanzarla en vez de detenerla cuando el gráfico se ve bien.",
    backInfo: "Sample Size Calculation (cálculo del tamaño de muestra): estimación de las observaciones necesarias según la base, el efecto objetivo, la variabilidad, el alfa y la potencia. Conviene hacerlo antes de mirar resultados.",
  },
  "ex-08": {
    frontQuestion: "¿Qué es el efecto más pequeño que vale la pena detectar porque cambiaría la decisión?",
    frontScenario: "Una mejora de 0,05 % sería detectable a gran escala, pero no tendría relevancia comercial.",
    backInfo: "MDE — Minimum Detectable Effect (efecto mínimo detectable): el efecto más pequeño que el experimento está diseñado para detectar con fiabilidad. Debe reflejar relevancia para la decisión, no solo conveniencia estadística.",
  },
  "ex-09": {
    frontQuestion: "¿Qué error ocurre cuando concluyes que hay un efecto aunque no existe?",
    frontScenario: "El equipo lanza una variante por puro ruido aleatorio y después no logra reproducir la mejora.",
    backInfo: "Type I Error — False Positive (error de tipo I, falso positivo): rechazar una hipótesis nula que en realidad es verdadera. El nivel de significancia controla su frecuencia a largo plazo bajo el modelo y el procedimiento usados.",
  },
  "ex-10": {
    frontQuestion: "¿Qué error ocurre cuando existe un efecto real pero tu prueba no lo detecta?",
    frontScenario: "La variante sí ayuda, pero la muestra fue pequeña y el experimento se declaró no concluyente.",
    backInfo: "Type II Error — False Negative (error de tipo II, falso negativo): no rechazar la hipótesis nula cuando sí existe un efecto relevante. Una mayor potencia estadística reduce su probabilidad para el efecto indicado.",
  },
  "ex-11": {
    frontQuestion: "¿Qué métrica te protege de dañar algo importante mientras optimizas el objetivo principal?",
    frontScenario: "Una variante del pago aumenta las compras pero también dispara las solicitudes de reembolso.",
    backInfo: "Guardrail Metric (métrica de resguardo): indicador vigilado para evitar daños inaceptables fuera del objetivo principal, como errores, lentitud, cancelaciones o carga de soporte. Marca límites, no la meta principal de éxito.",
  },
  "ex-12": {
    frontQuestion: "¿Qué es el resultado único que un experimento debe evaluar por encima de todo?",
    frontScenario: "Una prueba cambia el registro y mide decenas de métricas, pero un solo resultado debe decidir si la hipótesis ganó.",
    backInfo: "Primary Metric (métrica primaria): indicador principal de decisión, definido antes del análisis. Fijarlo de antemano evita elegir a conveniencia entre muchos resultados después de ver los datos.",
  },
  "ex-13": {
    frontQuestion: "¿Qué diagnóstico detecta si el reparto del tráfico se desvió de lo planeado?",
    frontScenario: "Una prueba 50/50 recibe 63 % de usuarios en la variante A y 37 % en la B.",
    backInfo: "Sample Ratio Mismatch — SRM (desajuste en la proporción de la muestra): desviación sospechosa entre la asignación esperada y la observada. Suele indicar fallas de asignación, registro o elegibilidad; investígala antes de confiar en los resultados.",
  },
  "ex-14": {
    frontQuestion: "¿Qué efecto hace que una función nueva parezca mejor o peor solo por ser nueva?",
    frontScenario: "Los usuarios exploran con intensidad una navegación nueva la primera semana y luego vuelven a su conducta habitual.",
    backInfo: "Novelty Effect (efecto de novedad): cambio temporal de conducta causado por la novedad y no por valor durable. Para efectos duraderos conviene observar más tiempo o hacer una medición de seguimiento.",
  },
  "ex-15": {
    frontQuestion: "¿Qué sesgo aparece cuando las personas observadas difieren por cómo entraron a la muestra?",
    frontScenario: "Solo los clientes más activos responden una encuesta voluntaria y la satisfacción parece más alta de lo real.",
    backInfo: "Selection Bias (sesgo de selección): distorsión sistemática por inclusión, exclusión o participación no aleatoria. Requiere mejor muestreo e interpretación cuidadosa; una muestra más grande no lo elimina por sí sola.",
  },
  "ex-16": {
    frontQuestion: "¿Qué enfoque permite revisar los datos repetidamente sin inflar los falsos positivos?",
    frontScenario: "El equipo quiere detener las pruebas pronto cuando haya evidencia suficiente, sin el riesgo de mirar los datos cada día sin control.",
    backInfo: "Sequential Testing (pruebas secuenciales): métodos estadísticos diseñados para análisis intermedios repetidos y reglas de detención. No apliques una prueba de horizonte fijo una y otra vez ni te detengas cuando cruce el umbral por casualidad.",
  },
  "uxm-01": {
    frontQuestion: "¿Qué métrica de usabilidad indica cuántos participantes completan una tarea?",
    frontScenario: "En una prueba de usabilidad, ocho de diez personas logran cambiar su dirección de facturación sin ayuda.",
    backInfo: "Task Success Rate (tasa de éxito de tareas): porcentaje de intentos que cumplen los criterios de éxito definidos. Si aceptas éxito parcial, define con consistencia qué cuenta como éxito total, parcial o fracaso.",
  },
  "uxm-02": {
    frontQuestion: "¿Qué métrica indica cuánto tardan los usuarios en completar una tarea?",
    frontScenario: "Dos diseños de pago funcionan, pero uno exige mucho más tiempo.",
    backInfo: "Time on Task (tiempo por tarea): tiempo necesario para completar una tarea definida. Interprétalo junto con el éxito y la complejidad; más rápido no siempre es mejor cuando la revisión cuidadosa importa.",
  },
  "uxm-03": {
    frontQuestion: "¿Qué métrica captura cuántos errores cometen los usuarios durante una tarea?",
    frontScenario: "Los participantes escriben fechas en un formato incorrecto y disparan errores de validación una y otra vez.",
    backInfo: "Error Rate (tasa de errores): frecuencia o proporción de errores definidos durante una tarea. Clasifícalos con consistencia y distingue tropiezos recuperables del fracaso total cuando sea útil.",
  },
  "uxm-04": {
    frontQuestion: "¿Qué métrica cuenta cuántos pasos o acciones necesita un objetivo?",
    frontScenario: "Dos flujos tienen una finalización parecida, pero uno exige mucha más interacción.",
    backInfo: "Interaction Cost (costo de interacción): esfuerzo necesario para lograr una meta, visto en pasos, decisiones, atención y esfuerzo de entrada más que en una fórmula única. Menos clics por sí solos no siempre son mejores.",
  },
  "uxm-05": {
    frontQuestion: "¿Qué cuestionario breve de 10 preguntas da un puntaje general de usabilidad?",
    frontScenario: "El equipo quiere una referencia ligera de usabilidad percibida antes y después de un rediseño.",
    backInfo: "SUS — System Usability Scale (escala de usabilidad del sistema): cuestionario estandarizado de diez ítems que se transforma a una escala de 0 a 100. El puntaje no es un porcentaje y conviene interpretarlo frente a datos comparativos adecuados.",
  },
  "uxm-06": {
    frontQuestion: "¿Qué pregunta única mide lo fácil o difícil que se sintió una tarea recién hecha?",
    frontScenario: "Después de cada tarea de usabilidad, el equipo necesita una medida rápida de dificultad percibida.",
    backInfo: "SEQ — Single Ease Question (pregunta única de facilidad): calificación de facilidad posterior a la tarea, comúnmente en una escala de 7 puntos. Complementa medidas conductuales como el éxito y el tiempo.",
  },
  "uxm-07": {
    frontQuestion: "¿Qué cuestionario compacto de dos preguntas mide utilidad y facilidad de uso?",
    frontScenario: "El equipo necesita una medida estandarizada muy corta dentro de una encuesta continua.",
    backInfo: "UMUX-Lite: cuestionario estandarizado de dos ítems sobre utilidad o capacidad y facilidad de uso. Resulta útil cuando el espacio en la encuesta es limitado.",
  },
  "uxm-08": {
    frontQuestion: "¿Qué métrica pregunta qué tan satisfecho está el cliente con una experiencia?",
    frontScenario: "Después de una conversación de soporte, cada persona califica qué tan satisfecha quedó con la solución.",
    backInfo: "CSAT — Customer Satisfaction Score (puntaje de satisfacción del cliente): calificación directa de satisfacción ligada a una experiencia concreta. Reporta la escala y el cálculo porque cada organización lo agrega de forma distinta.",
  },
  "uxm-09": {
    frontQuestion: "¿Qué métrica pregunta si recomendarías el producto y resta detractores de promotores?",
    frontScenario: "La dirección quiere una señal de lealtad basada en la clásica pregunta de recomendación.",
    backInfo: "NPS — Net Promoter Score (puntaje neto de recomendación): porcentaje de promotores menos porcentaje de detractores, en un rango de −100 a +100. No reemplaza las métricas conductuales ni la investigación de diagnóstico.",
  },
  "uxm-10": {
    frontQuestion: "¿Qué métrica pregunta cuánto esfuerzo sintió el cliente para lograr algo?",
    frontScenario: "Una clienta logra actualizar su cuenta, pero dice que el proceso fue agotador.",
    backInfo: "CES — Customer Effort Score (puntaje de esfuerzo del cliente): esfuerzo percibido en una tarea o interacción de servicio. La redacción exacta y la escala varían, así que documenta tu versión al comparar resultados.",
  },
  "uxm-11": {
    frontQuestion: "¿Qué métrica indica si el primer clic va al lugar correcto al navegar?",
    frontScenario: "El equipo quiere una señal temprana de si la gente entiende dónde debería vivir la opción «Gestionar equipo».",
    backInfo: "First-Click Success (acierto en el primer clic): proporción de participantes cuyo primer clic lleva por una ruta que puede llegar al destino correcto. Suele revelar con claridad si la navegación se entiende.",
  },
  "uxm-12": {
    frontQuestion: "¿Qué medida combina si la tarea se logra con qué tan fluida fue?",
    frontScenario: "Dos diseños tienen el mismo éxito, pero uno provoca muchas dudas y reintentos.",
    backInfo: "Task Efficiency (eficiencia de la tarea): valoración del desempeño exitoso en relación con tiempo, acciones o esfuerzo. Define el cálculo en cada estudio e interprétala junto con eficacia y satisfacción.",
  },
  "uxm-13": {
    frontQuestion: "¿Qué métrica mide qué tan rápido responde la página después de cada interacción?",
    frontScenario: "Una app web carga rápido, pero se siente lenta después de cada clic o tecla.",
    backInfo: "INP — Interaction to Next Paint (interacción hasta el siguiente pintado): métrica esencial de capacidad de respuesta basada en la latencia de las interacciones durante el ciclo de la página. Es la métrica de respuesta vigente; FID ya no lo es.",
  },
  "uxm-14": {
    frontQuestion: "¿Qué trío de métricas forma hoy el estándar de experiencia web de Google?",
    frontScenario: "Diseño e ingeniería revisan el rendimiento real y necesitan el trío actual, no una lista vieja.",
    backInfo: "Core Web Vitals (métricas web esenciales): LCP mide la carga del elemento más grande, INP la capacidad de respuesta y CLS la estabilidad visual. Los valores de referencia habituales son LCP ≤ 2,5 s, INP ≤ 200 ms y CLS ≤ 0,1 en el percentil 75.",
  },
  "ur-01": {
    frontQuestion: "¿Qué método observa a usuarios reales intentando tareas realistas para hallar problemas?",
    frontScenario: "El equipo necesita ver dónde se traban las personas al reservar una cita en un prototipo.",
    backInfo: "Usability Testing (pruebas de usabilidad): investigación evaluativa donde los participantes intentan tareas representativas mientras se observa su conducta. Puede ser moderada o no moderada y debe usar metas claras sin dar pistas.",
  },
  "ur-02": {
    frontQuestion: "¿Qué formato de estudio incluye a un investigador que guía y pregunta en vivo?",
    frontScenario: "Un flujo empresarial complejo exige indagar cuando alguien duda o improvisa un atajo inesperado.",
    backInfo: "Moderated Usability Testing (pruebas de usabilidad moderadas): una persona facilita la sesión e interactúa con el participante. Permite profundizar y abordar tareas complejas, pero introduce efectos del facilitador y toma más tiempo.",
  },
  "ur-03": {
    frontQuestion: "¿Qué formato permite completar tareas sin un facilitador en vivo?",
    frontScenario: "El equipo necesita evidencia orientativa de muchos participantes remotos en varios países.",
    backInfo: "Unmoderated Usability Testing (pruebas de usabilidad no moderadas): los participantes completan tareas definidas sin moderador en vivo. Escala con facilidad, pero ofrece menos margen para indagar conductas inesperadas en el momento.",
  },
  "ur-04": {
    frontQuestion: "¿Qué método usa una conversación guiada para entender experiencias y necesidades?",
    frontScenario: "Antes de diseñar un flujo, el equipo quiere saber cómo concilian facturas los contadores y dónde sufren.",
    backInfo: "User Interview (entrevista con usuarios): conversación cualitativa para entender experiencias, motivaciones, necesidades y contexto. Pregunta por conductas pasadas reales y ejemplos concretos, no solo por gustos hipotéticos.",
  },
  "ur-05": {
    frontQuestion: "¿Qué método estudia a las personas en su entorno real mientras trabajan?",
    frontScenario: "Una diseñadora necesita ver cómo usa el escáner el personal de un almacén ruidoso y en movimiento.",
    backInfo: "Contextual Inquiry (indagación contextual): investigación de campo que combina observación con preguntas en contexto. Revela restricciones del entorno y atajos tácitos que una entrevista sola no muestra.",
  },
  "ur-06": {
    frontQuestion: "¿Qué método pide registrar experiencias durante días o semanas?",
    frontScenario: "Una app de sueño necesita entender rutinas cambiantes que no caben en una entrevista de una hora.",
    backInfo: "Diary Study (estudio de diario): método longitudinal de autorreporte donde los participantes documentan experiencias en el tiempo. Sirve para conductas intermitentes o ligadas al contexto, pero exige cuidar el esfuerzo y la calidad del reporte.",
  },
  "ur-07": {
    frontQuestion: "¿Qué enfoque amplio observa la conducta en el entorno real y no en un laboratorio?",
    frontScenario: "El producto se usa distinto en una obra que como lo describen las personas en una oficina.",
    backInfo: "Field Study (estudio de campo): investigación en el contexto real del participante para entender conductas, entorno y restricciones. Puede incluir observación, entrevistas e indagación contextual.",
  },
  "ur-08": {
    frontQuestion: "¿Qué método recoge respuestas estructuradas de mucha gente para cuantificar opiniones?",
    frontScenario: "El equipo quiere estimar qué tan comunes son varios problemas en toda su base de clientes.",
    backInfo: "Survey (encuesta): cuestionario estructurado ideal para amplitud y cuantificación del autorreporte. Exige redacción neutral, escalas adecuadas, atención al muestreo e interpretación cuidadosa.",
  },
  "ur-09": {
    frontQuestion: "¿Qué método de arquitectura pide agrupar contenidos según tu propio criterio?",
    frontScenario: "Un sitio de ayuda tiene cientos de temas y el equipo busca evidencia de cómo los agrupa la gente.",
    backInfo: "Card Sorting (clasificación de tarjetas): los participantes organizan elementos en categorías para revelar modelos mentales y patrones de nombres. Orienta la arquitectura, pero por sí sola no valida el rendimiento final de la navegación.",
  },
  "ur-10": {
    frontQuestion: "¿Qué formato deja crear y nombrar tus propias categorías?",
    frontScenario: "El equipo desconfía de su taxonomía actual y quiere descubrir las agrupaciones naturales de los usuarios.",
    backInfo: "Open Card Sort (clasificación abierta de tarjetas): los participantes agrupan elementos y crean las etiquetas. Ideal para entender modelos mentales de forma generativa, no para probar una taxonomía fija.",
  },
  "ur-11": {
    frontQuestion: "¿Qué formato pide ordenar elementos en categorías ya definidas?",
    frontScenario: "El equipo propuso etiquetas de navegación y quiere ver dónde espera cada persona cada contenido.",
    backInfo: "Closed Card Sort (clasificación cerrada de tarjetas): los participantes colocan elementos en categorías predefinidas. Sirve para evaluar un esquema existente, aunque limita las estructuras posibles.",
  },
  "ur-12": {
    frontQuestion: "¿Qué método prueba si la gente encuentra destinos en una jerarquía solo de texto?",
    frontScenario: "El equipo quiere validar la nueva estructura del sitio antes de construir pantallas.",
    backInfo: "Tree Testing (prueba de árbol): los participantes navegan una jerarquía simplificada para hallar elementos indicados. Evalúa encontrabilidad y etiquetas de la arquitectura sin la influencia del diseño visual.",
  },
  "ur-13": {
    frontQuestion: "¿Qué estudio prueba si una idea tiene sentido antes de diseñar el detalle?",
    frontScenario: "La empresa tiene tres conceptos de servicio y quiere saber cuál resuena antes de invertir en interfaz.",
    backInfo: "Concept Testing (prueba de concepto): evalúa comprensión, relevancia, atractivo y dudas frente a un concepto temprano. Pone a prueba la idea, no garantiza el éxito futuro en el mercado.",
  },
  "ur-14": {
    frontQuestion: "¿Qué estudio usa una representación interactiva para probar flujos antes de programar?",
    frontScenario: "Ingeniería aún no construyó la función, pero el equipo necesita ver si se entiende el flujo propuesto.",
    backInfo: "Prototype Testing (prueba de prototipo): evaluación con un prototipo de fidelidad adecuada para responder preguntas concretas. Su conducta y sus límites deben ajustarse al objetivo para no llevar a conclusiones engañosas.",
  },
};
