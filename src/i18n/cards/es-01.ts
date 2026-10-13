import type { CardOverride } from '../cardOverrides';

export const es01: Record<string, CardOverride> = {
  "pm-01": {
    frontQuestion: "¿Qué métrica muestra cuántos usuarios nuevos llegan al primer momento de valor?",
    frontScenario: "Una app de gestión de proyectos suma miles de registros, pero el equipo quiere saber cuántos crean y comparten su primer proyecto de verdad.",
    backInfo: "Activation Rate (tasa de activación): porcentaje de usuarios nuevos que completan el evento de activación definido. Conviene definir un evento que refleje valor real, no solo crear una cuenta, y revisar qué frena a quienes no llegan.",
  },
  "pm-02": {
    frontQuestion: "¿Qué métrica muestra cuántos usuarios de una cohorte siguen activos después de un periodo?",
    frontScenario: "Una app de ejercicio quiere saber cuántas personas que empezaron este mes siguen entrenando 30 días después.",
    backInfo: "Retention Rate (tasa de retención): mide la continuidad de uso de una cohorte en el tiempo. Ten en cuenta definir siempre la ventana temporal y qué cuenta como haber vuelto.",
  },
  "pm-03": {
    frontQuestion: "¿Qué métrica describe cuántos clientes o usuarios dejan de usar o pagar en un periodo?",
    frontScenario: "Un producto SaaS capta clientes cada mes, pero la base casi no crece porque muchas cuentas se dan de baja.",
    backInfo: "Churn Rate (tasa de abandono): mide la pérdida en un periodo, ya sea de usuarios o de ingresos. Conviene aclarar cuál de las dos se está midiendo, porque llevan a conclusiones distintas.",
  },
  "pm-04": {
    frontQuestion: "¿Qué métrica muestra cuántos usuarios únicos están activos en un día típico?",
    frontScenario: "Un servicio de mensajería quiere ver cada día cuántas personas distintas lo usan realmente.",
    backInfo: "DAU — Daily Active Users (usuarios activos diarios): número de usuarios únicos que realizan la acción activa definida en un día. Conviene ligar lo «activo» a un comportamiento con sentido, no a cualquier carga de página.",
  },
  "pm-05": {
    frontQuestion: "¿Qué métrica muestra cuántos usuarios únicos están activos durante una semana?",
    frontScenario: "Una herramienta de colaboración se usa varias veces por semana, pero rara vez a diario, así que el dato diario se queda corto.",
    backInfo: "WAU — Weekly Active Users (usuarios activos semanales): número de usuarios únicos que cumplen la definición de actividad durante una semana. Resulta útil en productos con ritmo de uso semanal.",
  },
  "pm-06": {
    frontQuestion: "¿Qué métrica muestra cuántos usuarios únicos están activos durante un mes?",
    frontScenario: "Una herramienta de finanzas casi nadie la abre a diario, aunque aporta mucho valor. El equipo necesita una mirada más amplia.",
    backInfo: "MAU — Monthly Active Users (usuarios activos mensuales): número de usuarios únicos que cumplen la definición de actividad durante un mes. Sirve para medir el alcance, pero dice poco sobre la profundidad del uso.",
  },
  "pm-07": {
    frontQuestion: "¿Qué indicador estima con qué frecuencia vuelven los usuarios mensuales en un día típico?",
    frontScenario: "Dos apps tienen 100 mil usuarios mensuales, pero una se abre casi a diario y la otra una sola vez al mes.",
    backInfo: "DAU/MAU Stickiness (coeficiente de recurrencia): proporción de usuarios mensuales activos en un día típico. Conviene comparar solo productos con una frecuencia natural de uso parecida.",
  },
  "pm-08": {
    frontQuestion: "¿Qué métrica muestra cuántos usuarios relevantes han probado una funcionalidad concreta?",
    frontScenario: "El equipo lanza comentarios colaborativos y quiere saber si los usuarios activos los descubren y los usan.",
    backInfo: "Feature Adoption Rate (tasa de adopción de funcionalidad): proporción de usuarios elegibles o activos que usan una funcionalidad en un periodo definido. Ten en cuenta definir con claridad el denominador.",
  },
  "pm-09": {
    frontQuestion: "¿Qué concepto describe a cuántos usuarios distintos llega una funcionalidad, más allá de la frecuencia?",
    frontScenario: "Un panel lo usa el 70 % de los clientes, pero la mayoría lo abre una sola vez. El equipo quiere separar alcance de frecuencia.",
    backInfo: "Breadth of Adoption (amplitud de adopción): describe a cuántos usuarios de la base relevante llega una funcionalidad. Complementa la profundidad y la frecuencia; una amplitud alta no siempre significa un uso intenso.",
  },
  "pm-10": {
    frontQuestion: "¿Qué concepto describe con qué intensidad se usa una funcionalidad una vez adoptada?",
    frontScenario: "Solo un grupo pequeño usa el editor avanzado, pero esas personas crean decenas de elementos cada semana.",
    backInfo: "Depth of Engagement (profundidad de uso): mide la cantidad o riqueza de uso entre quienes ya usan la funcionalidad, como acciones o elementos creados. Conviene ligarla al valor, no a los clics sin más.",
  },
  "pm-11": {
    frontQuestion: "¿Qué métrica muestra con qué frecuencia un usuario activo realiza una acción relevante?",
    frontScenario: "Una función de calendario llega a mucha gente, pero el equipo necesita saber si se usa una vez o de forma repetida.",
    backInfo: "Usage Frequency (frecuencia de uso): mide la repetición de uso de un producto o funcionalidad por usuario en un intervalo definido. Conviene leerla junto a la adopción, porque usar algo una vez no es lo mismo que usarlo por hábito.",
  },
  "pm-12": {
    frontQuestion: "¿Qué métrica muestra cuánto tarda un usuario nuevo en llegar al momento de activación?",
    frontScenario: "La gente acaba viendo el valor de una herramienta de flujos de trabajo, aunque algunas personas necesitan tres sesiones para crear su primera automatización útil.",
    backInfo: "Time to Activate (tiempo hasta la activación): tiempo entre la llegada o el registro y el evento de activación definido. Suele convenir acortarlo cuando el evento refleja valor real; acelerar hacia un evento vacío no ayuda.",
  },
  "pm-13": {
    frontQuestion: "¿Qué concepto mide cuánto tarda un cliente en obtener valor real, más allá del registro?",
    frontScenario: "Un cliente empresarial termina la configuración el primer día, pero logra su primer resultado de negocio dos semanas después.",
    backInfo: "Time to Value — TTV (tiempo hasta el valor): tiempo necesario para que el usuario o cliente obtenga valor significativo. Puede ir más allá de la activación y resulta clave en productos B2B o complejos.",
  },
  "pm-14": {
    frontQuestion: "¿Qué métrica muestra cuántos usuarios completan una acción objetivo como comprar o suscribirse?",
    frontScenario: "Un comercio electrónico quiere saber qué porcentaje de quienes llegan al pago termina haciendo el pedido.",
    backInfo: "Conversion Rate (tasa de conversión): proporción de una población elegible que completa la acción objetivo definida. Ten en cuenta especificar siempre la etapa del embudo y el denominador.",
  },
  "pm-15": {
    frontQuestion: "¿Qué métrica muestra cuántos usuarios terminan una tarea después de empezarla?",
    frontScenario: "Mucha gente empieza la verificación de identidad, y el equipo quiere saber cuántos llegan a la pantalla final de confirmación.",
    backInfo: "Completion Rate (tasa de finalización): porcentaje de quienes empiezan un flujo y llegan al punto final definido. Resulta útil en registros, formularios y procesos de varios pasos.",
  },
  "pm-16": {
    frontQuestion: "¿Qué métrica muestra cuántas personas abandonan un flujo antes del siguiente paso?",
    frontScenario: "Una tienda pierde a muchos usuarios entre los datos de envío y la pantalla de pago.",
    backInfo: "Drop-off Rate (tasa de abandono en el flujo): proporción de usuarios que no avanzan desde una etapa. Conviene analizarla paso a paso para localizar fricción, en lugar de tratarla como un único dato general.",
  },
  "pm-17": {
    frontQuestion: "¿Qué métrica muestra cuántos usuarios vuelven a usar una funcionalidad después de probarla?",
    frontScenario: "El equipo sabe que mucha gente prueba los resúmenes con IA una vez y quiere saber si repiten.",
    backInfo: "Feature Retention (retención de funcionalidad): mide el uso continuado de una funcionalidad concreta tras el primer uso. Permite distinguir la curiosidad inicial del valor duradero.",
  },
  "pm-18": {
    frontQuestion: "¿Qué análisis agrupa a los usuarios por un inicio común para comparar su comportamiento en el tiempo?",
    frontScenario: "El equipo quiere comparar la retención de quienes se registraron en enero frente a febrero, tras rediseñar la bienvenida.",
    backInfo: "Cohort Analysis (análisis de cohortes): agrupa a los usuarios por un atributo o evento compartido y compara su comportamiento posterior. Evita mezclar usuarios con fechas o experiencias muy distintas.",
  },
  "pm-19": {
    frontQuestion: "¿Qué curva muestra cómo evoluciona en el tiempo la proporción de una cohorte que sigue volviendo?",
    frontScenario: "Una app social pierde muchos usuarios al principio, pero luego un grupo estable la sigue usando durante meses.",
    backInfo: "Retention Curve (curva de retención): vista temporal de cuántos usuarios de una cohorte se mantienen. Su forma revela la caída inicial y si la retención se estabiliza; el intervalo depende del uso natural del producto.",
  },
  "pm-20": {
    frontQuestion: "¿Qué métrica se centra en clientes inactivos que vuelven a estar activos?",
    frontScenario: "Una app de series lanza una campaña de recuperación y quiere medir cuántos usuarios dormidos regresan.",
    backInfo: "Reactivation Rate (tasa de reactivación): mide la proporción o el número de usuarios antes inactivos que retoman una actividad relevante. Conviene definir primero el umbral de inactividad y el evento de reactivación.",
  },
  "pm-21": {
    frontQuestion: "¿Qué enfoque separa a los usuarios activos en nuevos, actuales y recuperados?",
    frontScenario: "El total mensual está estable, pero el equipo necesita saber si se sostiene por usuarios fieles o porque cada mes se reemplaza a quienes se van.",
    backInfo: "User Lifecycle Segmentation (segmentación por ciclo de vida del usuario): divide la actividad en estados como nuevo, actual, inactivo y reactivado. Así se entiende qué hay detrás de un total único de usuarios activos.",
  },
  "pm-22": {
    frontQuestion: "¿Qué métrica resume el comportamiento recurrente que mejor refleja el valor central del producto?",
    frontScenario: "Un marketplace podría seguir visitas, anuncios o transacciones, pero necesita un valor central para alinear las decisiones.",
    backInfo: "North Star Metric (métrica estrella): métrica duradera que representa el valor entregado al cliente y conectada con un negocio sostenible. Conviene acompañarla de métricas de apoyo y de control, sin tratarla como el único número importante.",
  },
  "gr-01": {
    frontQuestion: "¿Qué métrica muestra cuánto cuesta en promedio conseguir un cliente nuevo?",
    frontScenario: "Una startup invierte en anuncios, contenidos y ventas, y quiere saber lo que le cuesta en la práctica cada cliente nuevo.",
    backInfo: "CAC — Customer Acquisition Cost (costo de adquisición de cliente): costo medio por cada cliente nuevo. Ten en cuenta definir qué costos y qué periodo se incluyen.",
  },
  "gr-02": {
    frontQuestion: "¿Qué métrica estima el valor económico que un cliente aporta durante toda la relación?",
    frontScenario: "Un negocio de suscripción puede pagar más por captar clientes que suelen quedarse y pagar durante años.",
    backInfo: "Customer Lifetime Value — LTV/CLV (valor de vida del cliente): estimación del valor que genera un cliente a lo largo de la relación, a partir de ingresos o margen. El cálculo varía según el modelo de negocio, así que conviene explicar el método usado.",
  },
  "gr-03": {
    frontQuestion: "¿Qué relación ayuda a saber si la economía de captación es sostenible?",
    frontScenario: "Marketing puede duplicar los registros, pero la dirección necesita saber si el valor generado compensa el costo de captación.",
    backInfo: "LTV:CAC Ratio (relación LTV:CAC): compara el valor de vida estimado con el costo de adquisición. Es una señal orientativa de economía unitaria, no un ideal universal; la etapa, el margen y los tiempos de retorno también importan.",
  },
  "gr-04": {
    frontQuestion: "¿Qué métrica muestra en cuánto tiempo el margen de un cliente recupera su costo de captación?",
    frontScenario: "Una empresa SaaS B2B invierte fuerte en ventas y quiere saber cuántos meses pasan hasta que una cuenta nueva compensa esa inversión.",
    backInfo: "CAC Payback Period (periodo de recuperación del CAC): tiempo necesario para recuperar el CAC con el margen recurrente del cliente. Un plazo corto suele aliviar la presión financiera, aunque el rango aceptable depende del negocio.",
  },
  "gr-05": {
    frontQuestion: "¿Qué métrica muestra los ingresos por suscripción previstos, normalizados a un mes?",
    frontScenario: "Un negocio SaaS cobra en fechas distintas y necesita una visión uniforme de sus ingresos recurrentes.",
    backInfo: "MRR — Monthly Recurring Revenue (ingresos recurrentes mensuales): ingresos por suscripción normalizados a un mes. Conviene excluir servicios puntuales y otros ingresos no recurrentes al usarlo como métrica de suscripción.",
  },
  "gr-06": {
    frontQuestion: "¿Qué métrica expresa los ingresos recurrentes por suscripción en base anual?",
    frontScenario: "La dirección quiere una visión anual sencilla del ritmo de ingresos recurrentes por suscripción.",
    backInfo: "ARR — Annual Recurring Revenue (ingresos recurrentes anuales): ingresos recurrentes anualizados, normalmente a partir de contratos o del MRR. No equivale a los ingresos totales del año cuando hay ingresos puntuales.",
  },
  "gr-07": {
    frontQuestion: "¿Qué métrica muestra el ingreso medio generado por usuario en un periodo?",
    frontScenario: "Una app de suscripción quiere comparar la monetización entre países con planes muy distintos.",
    backInfo: "ARPU — Average Revenue per User (ingreso medio por usuario): ingreso medio por usuario en un periodo definido. Ten en cuenta aclarar si se refiere a usuarios activos, de pago o totales.",
  },
  "gr-08": {
    frontQuestion: "¿Qué métrica conviene más que el ARPU cuando se factura por empresa o cuenta?",
    frontScenario: "Una plataforma SaaS empresarial tiene miles de puestos, pero solo 200 organizaciones con contrato.",
    backInfo: "ARPA — Average Revenue per Account (ingreso medio por cuenta): ingreso medio por cuenta de cliente en un periodo. Suele ser más útil que el dato por usuario en productos B2B que se venden por cuenta o espacio de trabajo.",
  },
  "gr-09": {
    frontQuestion: "¿Qué métrica muestra el valor medio de cada compra en un comercio electrónico?",
    frontScenario: "Una tienda mantiene el número de pedidos, pero quiere saber si cada compra deja más o menos dinero.",
    backInfo: "AOV — Average Order Value (valor medio del pedido): ingreso medio por pedido completado. Resulta útil para surtido, paquetes y estrategia de pago.",
  },
  "gr-10": {
    frontQuestion: "¿Qué métrica muestra los ingresos recurrentes que se conservan con la base actual, incluyendo mejoras y bajas?",
    frontScenario: "Una empresa SaaS pierde algunas cuentas, pero las que se quedan amplían tanto su plan que los ingresos de la base crecen.",
    backInfo: "NRR — Net Revenue Retention (retención neta de ingresos): mide los ingresos recurrentes conservados en una cohorte de clientes, incluyendo expansión, contracción y bajas. Permite ver si la base actual crece por sí sola.",
  },
  "gr-11": {
    frontQuestion: "¿Qué métrica de retención ignora las mejoras para mostrar solo la pérdida real de ingresos?",
    frontScenario: "Los ingresos por ampliación están ocultando un problema serio de cancelaciones y reducciones de plan.",
    backInfo: "GRR — Gross Revenue Retention (retención bruta de ingresos): mide los ingresos recurrentes conservados sin contar la expansión. Recoge bajas y contracciones, pero no mejoras, así la pérdida de base se ve con claridad.",
  },
  "gr-12": {
    frontQuestion: "¿Qué métrica muestra los ingresos recurrentes extra que llegan por mejoras de clientes actuales?",
    frontScenario: "Un producto SaaS lanza complementos de pago y quiere separar ese crecimiento de la captación de cuentas nuevas.",
    backInfo: "Expansion Revenue (ingresos por expansión): ingresos adicionales de clientes actuales por mejoras de plan, puestos extra, complementos o mayor uso. Es uno de los motores de la retención neta de ingresos.",
  },
  "gr-13": {
    frontQuestion: "¿Qué métrica muestra qué porcentaje de los ingresos queda tras el costo directo del servicio?",
    frontScenario: "Dos productos facturan lo mismo, pero uno tiene costos de infraestructura y entrega mucho más altos.",
    backInfo: "Gross Margin (margen bruto): ingresos que quedan tras restar el costo directo de producción o entrega. Sirve para entender la eficiencia económica antes de los gastos operativos.",
  },
  "gr-14": {
    frontQuestion: "¿Qué métrica estima lo que queda de una venta tras los costos variables asociados?",
    frontScenario: "Un marketplace necesita saber si cada transacción adicional aporta lo suficiente para cubrir los costos fijos.",
    backInfo: "Contribution Margin (margen de contribución): ingresos menos los costos variables atribuibles a esos ingresos. Resulta útil para economía unitaria y punto de equilibrio; la definición exacta varía por negocio.",
  },
  "gr-15": {
    frontQuestion: "¿Qué métrica muestra cuántos ingresos genera una campaña por cada unidad de gasto en anuncios?",
    frontScenario: "El equipo de crecimiento compara anuncios en buscadores y en redes, y necesita una medida de eficiencia basada en ingresos.",
    backInfo: "ROAS — Return on Ad Spend (retorno de la inversión publicitaria): ingresos atribuidos a la publicidad divididos entre el gasto en anuncios. No incluye todos los costos del negocio y depende mucho de la calidad de la atribución.",
  },
  "gr-16": {
    frontQuestion: "¿Qué métrica muestra el porcentaje de impresiones de un anuncio que terminan en clic?",
    frontScenario: "Una campaña la ven millones de personas, pero el equipo quiere saber si la creatividad invita a visitar la página.",
    backInfo: "CTR — Click-Through Rate (tasa de clics): proporción de impresiones que generan clics. Una tasa alta no garantiza visitas de calidad ni conversión posterior.",
  },
  "gr-17": {
    frontQuestion: "¿Qué métrica mide el valor total intercambiado en un marketplace antes de la comisión?",
    frontScenario: "Un marketplace cobra comisión, pero primero necesita conocer el valor total de las operaciones entre compradores y vendedores.",
    backInfo: "GMV — Gross Merchandise Value (volumen bruto de mercancía): valor total de las transacciones facilitadas en un periodo, antes de comisiones o reembolsos según defina el negocio. No equivale a los ingresos propios de la plataforma.",
  },
  "gr-18": {
    frontQuestion: "¿Qué métrica muestra qué parte del valor transaccionado se queda la plataforma como ingreso?",
    frontScenario: "Un marketplace mueve 10 millones de euros en ventas, pero solo ingresa la comisión y las tarifas de servicio.",
    backInfo: "Take Rate (comisión de la plataforma): porcentaje del valor transaccionado que la plataforma retiene como ingreso. Conviene especificar qué tarifas y qué valor de transacción se incluyen.",
  },
  "an-01": {
    frontQuestion: "¿Qué unidad básica de analítica describe una acción relevante que hace el usuario?",
    frontScenario: "El equipo quiere registrar acciones como proyecto creado, pago iniciado o invitación enviada.",
    backInfo: "Event (evento): ocurrencia con nombre que representa un comportamiento del usuario o del sistema. Conviene que cada evento exprese una acción con sentido y siga una convención de nombres uniforme.",
  },
  "an-02": {
    frontQuestion: "¿Qué dato de analítica describe el contexto o los atributos que acompañan a un evento?",
    frontScenario: "Saber que se completó una compra ayuda, pero el equipo también necesita precio, plan, dispositivo y método de pago.",
    backInfo: "Event Property (propiedad de evento): atributo ligado a un evento que aporta contexto para filtrar y agrupar. Conviene documentar nombres, tipos y valores permitidos.",
  },
  "an-03": {
    frontQuestion: "¿Qué dato de analítica describe a la persona o cuenta, en lugar de una acción puntual?",
    frontScenario: "El equipo quiere comparar el comportamiento por tipo de plan, región y rol del cliente.",
    backInfo: "User Property (propiedad de usuario): atributo asociado al usuario o cuenta, no a un evento aislado. Conviene evitar datos sensibles sin una necesidad clara y una buena gestión.",
  },
  "an-04": {
    frontQuestion: "¿Qué documento define qué eventos medir y cómo nombrarlos?",
    frontScenario: "Diseño, producto e ingeniería crean nombres algo distintos para los mismos comportamientos y el análisis se vuelve un caos.",
    backInfo: "Tracking Plan (plan de seguimiento): especificación compartida de eventos, propiedades, nombres, disparadores y responsables. Evita que una medición desigual arruine el análisis.",
  },
  "an-05": {
    frontQuestion: "¿Qué proceso incorpora los eventos y propiedades al código del producto?",
    frontScenario: "El equipo ya acordó qué medir, pero falta que esos comportamientos queden registrados desde la ingeniería.",
    backInfo: "Instrumentation (instrumentación analítica): implementación de la recogida de datos en el producto y sus sistemas. Conviene probarla como cualquier otra funcionalidad.",
  },
  "an-06": {
    frontQuestion: "¿Qué análisis muestra cómo avanzan los usuarios por una secuencia de pasos y dónde salen?",
    frontScenario: "Mucha gente añade un artículo al carrito, pero muy pocos terminan la compra.",
    backInfo: "Funnel Analysis (análisis de embudo): mide el avance y la conversión a través de pasos ordenados. Funciona bien en rutas conocidas; no todo recorrido real es estrictamente lineal.",
  },
  "an-07": {
    frontQuestion: "¿Qué análisis revela las secuencias reales que siguen los usuarios, sin imponer un embudo?",
    frontScenario: "El equipo no sabe qué hacen las personas entre el registro y el primer valor, y quiere ver los recorridos reales.",
    backInfo: "Path Analysis (análisis de rutas): explora las secuencias de eventos observadas antes o después de una acción. Sirve para descubrir rutas inesperadas, bucles y puntos sin salida.",
  },
  "an-08": {
    frontQuestion: "¿Qué análisis divide a los usuarios en grupos para comparar comportamientos?",
    frontScenario: "El equipo quiere comparar la activación en móvil frente a escritorio, y en plan gratuito frente a plan de pago.",
    backInfo: "Segmentation (segmentación): divide métricas o comportamientos en grupos con sentido. Permite ver diferencias importantes que un promedio general oculta.",
  },
  "an-09": {
    frontQuestion: "¿Qué concepto describe un grupo guardado de usuarios con atributos o conductas en común?",
    frontScenario: "El equipo analiza una y otra vez a quienes invitaron a un compañero en su primer día.",
    backInfo: "Behavioral Cohort (cohorte conductual): grupo reutilizable definido por un comportamiento o característica compartida. Permite comparar retención, conversión y otros resultados entre cohortes.",
  },
  "an-10": {
    frontQuestion: "¿Qué vista de analítica agrupa la actividad en visitas o periodos de interacción continua?",
    frontScenario: "El equipo quiere entender lo que pasa durante una visita típica, no solo en el conjunto del mes.",
    backInfo: "Session (sesión): agrupación de la actividad del usuario en un periodo definido o hasta un tiempo de inactividad. La definición varía por herramienta y pierde sentido en productos siempre activos o multidispositivo.",
  },
};
