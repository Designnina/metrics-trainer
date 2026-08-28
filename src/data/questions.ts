import type { TestQuestion } from '../types';

export const questions: TestQuestion[] = [

// ═══ LEVEL 1 · RECOGNITION ════════════════════════════════════════
{ id: 'q1', type: 'identify', level: 1, metricIds: ['conversion-rate'],
  prompt: 'Какая метрика измеряет долю пользователей, перешедших из состояния A в состояние B?',
  situation: 'Вы работаете с воронкой: пользователи видят товар → добавляют в корзину → платят.',
  options: [
    { id: 'a', label: 'Retention Rate' },
    { id: 'b', label: 'Conversion Rate' },
    { id: 'c', label: 'DAU' },
    { id: 'd', label: 'NPS' },
  ], correct: ['b'],
  why: 'Conversion Rate — это доля перешедших между двумя состояниями воронки.',
  whyNot: { a: 'Retention измеряет возврат во времени, а не переход между шагами.', c: 'DAU — число уникальных за день, без переходов.', d: 'NPS — лояльность и рекомендации.' } },

{ id: 'q2', type: 'identify', level: 1, metricIds: ['churn-rate'],
  prompt: 'Как называется доля пользователей, покинувших продукт за период?',
  situation: 'За месяц из 1000 подписчиков отписались 150.',
  options: [
    { id: 'a', label: 'Churn Rate' },
    { id: 'b', label: 'Conversion Rate' },
    { id: 'c', label: 'ARPU' },
    { id: 'd', label: 'SUS' },
  ], correct: ['a'],
  why: 'Churn Rate — доля потерянных пользователей за период.',
  whyNot: { b: 'Conversion — переходы между шагами, а не уход.', c: 'ARPU — выручка на пользователя.', d: 'SUS — опросник удобства интерфейса.' } },

// ═══ LEVEL 2 · UNDERSTANDING ══════════════════════════════════════
{ id: 'q3', type: 'identify', level: 2, metricIds: ['arppu'],
  prompt: 'Что показывает ARPPU, чего не показывает ARPU?',
  options: [
    { id: 'a', label: 'Среднюю выручку на одного платящего пользователя' },
    { id: 'b', label: 'Среднюю выручку на всю базу, включая бесплатных' },
    { id: 'c', label: 'Число платящих пользователей' },
    { id: 'd', label: 'Стоимость привлечения клиента' },
  ], correct: ['a'],
  why: 'ARPPU делит выручку только на платящих, а ARPU — на всех пользователей.',
  whyNot: { b: 'Это определение ARPU.', c: 'Это количество платящих, а не выручка на них.', d: 'Это CAC.' } },

{ id: 'q4', type: 'compare', level: 2, metricIds: ['stickiness', 'retention-rate'],
  prompt: 'В чём ключевое различие между Stickiness (DAU/MAU) и Retention Rate?',
  options: [
    { id: 'a', label: 'Stickiness про долю месяца, Retention про возврат когорты через N дней' },
    { id: 'b', label: 'Это одно и то же, разная формула' },
    { id: 'c', label: 'Stickiness — бизнес-метрика, Retention — UX-метрика' },
    { id: 'd', label: 'Retention — это обратная величина Stickiness' },
  ], correct: ['a'],
  why: 'Stickiness показывает долю месяца, когда пользователи активны; Retention — как когорта возвращается через заданный период.',
  whyNot: { b: 'Это разные понятия с разными знаменателями.', c: 'Обе относятся к продукту.', d: 'Между ними нет простого обратного соотношения.' } },

// ═══ LEVEL 3 · IDENTIFICATION ═════════════════════════════════════
{ id: 'q5', type: 'identify', level: 3, metricIds: ['conversion-rate'],
  prompt: '1000 пользователей начали оформление заказа, 720 успешно оплатили. Какую метрику использовать для доли дошедших до покупки?',
  options: [
    { id: 'a', label: 'Retention Rate' },
    { id: 'b', label: 'Conversion Rate' },
    { id: 'c', label: 'DAU' },
    { id: 'd', label: 'NPS' },
  ], correct: ['b'],
  why: 'Здесь измеряется переход между двумя этапами воронки — это Conversion Rate (72%).',
  whyNot: { a: 'Retention — возвращение во времени, а не переход между шагами.', c: 'DAU не про переходы в воронке.', d: 'NPS не про конверсию.' } },

{ id: 'q6', type: 'identify', level: 3, metricIds: ['time-to-value'],
  prompt: 'B2B SaaS: новым клиентам нужно в среднем 3 недели, чтобы построить первый отчёт. Какую метрику это характеризует?',
  options: [
    { id: 'a', label: 'Time to Value' },
    { id: 'b', label: 'Time on Task' },
    { id: 'c', label: 'SUS' },
    { id: 'd', label: 'Churn Rate' },
  ], correct: ['a'],
  why: 'Время до получения первой ценности — это Time to Value.',
  whyNot: { b: 'Time on Task — время одной задачи, а не до первой ценности.', c: 'SUS — опросник удобства.', d: 'Churn — отток.' } },

// ═══ LEVEL 4 · COMPARISON ═════════════════════════════════════════
{ id: 'q7', type: 'compare', level: 4, metricIds: ['conversion-rate', 'completion-rate'],
  prompt: 'Вы анализируете 4-шаговую регистрацию: 1000 начали, на 4-м шаге осталось 200. Что покажет Completion Rate в отличие от Conversion Rate?',
  options: [
    { id: 'a', label: 'Долю дошедших до конца всего процесса' },
    { id: 'b', label: 'Конверсию только последнего шага' },
    { id: 'c', label: 'Среднее время регистрации' },
    { id: 'd', label: 'Долю вернувшихся завтра' },
  ], correct: ['a'],
  why: 'Completion Rate — доля прошедших весь многошаговый путь (20%), а не один переход.',
  whyNot: { b: 'Конверсия последнего шага — это Step Conversion, не Completion.', c: 'Это Time on Task.', d: 'Это Retention.' } },

{ id: 'q8', type: 'compare', level: 4, metricIds: ['cac', 'ltv'],
  prompt: 'Как правильно интерпретировать пару CAC и LTV?',
  options: [
    { id: 'a', label: 'LTV должен быть осмысленно выше CAC (обычно в 3+ раза)' },
    { id: 'b', label: 'CAC всегда должен быть выше LTV' },
    { id: 'c', label: 'Это независимые метрики, их не сравнивают' },
    { id: 'd', label: 'LTV измеряет маркетинг, CAC — продукт' },
  ], correct: ['a'],
  why: 'LTV/CAC > 3 считается здоровой юнит-экономикой.',
  whyNot: { b: 'Высокий CAC при низком LTV означает потерю денег.', c: 'Именно сравнение даёт картину окупаемости.', d: 'Обе про клиента, с разных сторон.' } },

{ id: 'q9', type: 'compare', level: 4, metricIds: ['nps', 'csat'],
  prompt: 'NPS или CSAT выбрать, чтобы понять готовность пользователей рекомендовать продукт?',
  options: [
    { id: 'a', label: 'NPS' },
    { id: 'b', label: 'CSAT' },
    { id: 'c', label: 'SUS' },
    { id: 'd', label: 'SEQ' },
  ], correct: ['a'],
  why: 'NPS измеряет лояльность и готовность рекомендовать; CSAT — удовлетворённость конкретным опытом.',
  whyNot: { b: 'CSAT — про конкретный опыт, а не рекомендацию.', c: 'SUS — удобство интерфейса.', d: 'SEQ — лёгкость одной задачи.' } },

// ═══ LEVEL 5 · APPLICATION ════════════════════════════════════════
{ id: 'q10', type: 'select', level: 5, metricIds: ['conversion-rate', 'drop-off-rate'],
  prompt: 'Выберите набор метрик для анализа потерь в воронке checkout.',
  options: [
    { id: 'a', label: 'Conversion Rate + Drop-off Rate' },
    { id: 'b', label: 'NPS + SUS' },
    { id: 'c', label: 'DAU + MAU' },
    { id: 'd', label: 'CAC + LTV' },
  ], correct: ['a'],
  why: 'Conversion Rate и Drop-off Rate напрямую описывают переходы и потери в воронке.',
  whyNot: { b: 'NPS/SUS — восприятие, не потери.', c: 'DAU/MAU — охват, не воронка.', d: 'CAC/LTV — юнит-экономика.' } },

{ id: 'q11', type: 'multi', level: 5, metricIds: ['retention-rate', 'churn-rate', 'cohort-retention'],
  prompt: 'Какие метрики помогут оценить, удерживает ли продукт пользователей во времени? (выберите все подходящие)',
  options: [
    { id: 'a', label: 'Retention Rate' },
    { id: 'b', label: 'Churn Rate' },
    { id: 'c', label: 'Cohort Retention' },
    { id: 'd', label: 'CPM' },
  ], correct: ['a', 'b', 'c'],
  why: 'Retention, Churn и когортный анализ описывают возврат и отток во времени.',
  whyNot: { d: 'CPM — цена показов, к удержанию не относится.' } },

// ═══ LEVEL 6 · INTERPRETATION ═════════════════════════════════════
{ id: 'q12', type: 'interpret', level: 6, metricIds: ['conversion-rate'],
  prompt: 'Conversion Rate вырос с 42% до 51%. Что можно заключить?',
  options: [
    { id: 'a', label: 'Доля переходящих к целевому действию выросла; причину нужно искать отдельно' },
    { id: 'b', label: 'Продукт стал гарантированно лучше' },
    { id: 'c', label: 'UX точно улучшился' },
    { id: 'd', label: 'Прибыль выросла пропорционально' },
  ], correct: ['a'],
  why: 'Метрика выросла, но вывод о причине требует анализа — не всегда это улучшение UX.',
  whyNot: { b: 'Одна метрика не доказывает «продукт лучше».', c: 'Рост конверсии может быть из-за трафика или акций.', d: 'Прибыль зависит от цены, маржи и объёмов.' } },

{ id: 'q13', type: 'interpret', level: 6, metricIds: ['ltv-cac'],
  prompt: 'LTV/CAC = 1,2. Какой вывод корректен?',
  options: [
    { id: 'a', label: 'Юнит-экономика на грани: на каждого клиента почти не остаётся прибыли' },
    { id: 'b', label: 'Модель отличная, можно масштабировать' },
    { id: 'c', label: 'CAC точно слишком низкий' },
    { id: 'd', label: 'Выводов сделать нельзя, метрика бесполезна' },
  ], correct: ['a'],
  why: 'Значение около 1 означает, что привлечение почти не окупается — критично для бизнеса.',
  whyNot: { b: 'Для масштабирования ориентир 3+.', c: 'Низкий ratio — проблема, а не «низкий CAC».', d: 'Метрика информативна, просто сигналит о риске.' } },

// ═══ LEVEL 7 · PRODUCT REASONING ══════════════════════════════════
{ id: 'q14', type: 'select', level: 7, metricIds: ['activation-rate', 'onboarding-completion', 'time-to-value'],
  prompt: 'Новые пользователи регистрируются, но не возвращаются. Постройте цепочку метрик для диагностики.',
  options: [
    { id: 'a', label: 'Activation Rate → Time to Value → Cohort Retention' },
    { id: 'b', label: 'CPM → CPC → CPA' },
    { id: 'c', label: 'SUS → NPS → CSAT' },
    { id: 'd', label: 'MRR → ARR → ARPU' },
  ], correct: ['a'],
  why: 'Цепочка «активация → время до ценности → удержание» описывает путь новичка.',
  whyNot: { b: 'CPM/CPC/CPA — рекламные цены, не онбординг.', c: 'SUS/NPS/CSAT — восприятие, не возвраты.', d: 'MRR/ARR/ARPU — деньги, не путь новичка.' } },

{ id: 'q15', type: 'mistake', level: 7, metricIds: ['nps'],
  prompt: '«Если NPS вырос, значит UX стал лучше». Корректно ли утверждение?',
  options: [
    { id: 'a', label: 'Некорректно: NPS измеряет лояльность, а не UX' },
    { id: 'b', label: 'Корректно, это прямое доказательство' },
    { id: 'c', label: 'Корректно только при высоком NPS' },
    { id: 'd', label: 'Некорректно, NPS вообще не про пользователей' },
  ], correct: ['a'],
  why: 'NPS — про лояльность и рекомендации; рост NPS не доказывает улучшение UX.',
  whyNot: { b: 'Высокий NPS возможен при плохом удобстве.', c: 'Величина NPS не меняет природу метрики.', d: 'NPS про пользователей, но не про UX.' } },

{ id: 'q16', type: 'mistake', level: 7, metricIds: ['time-on-task'],
  prompt: '«Чем меньше Time on Task, тем лучше». Где ошибка в этом утверждении?',
  options: [
    { id: 'a', label: 'Для творческих задач меньшее время не всегда лучше' },
    { id: 'b', label: 'Времени вообще не измеряют' },
    { id: 'c', label: 'Меньше времени всегда лучше для всех продуктов' },
    { id: 'd', label: 'Ошибки нет' },
  ], correct: ['a'],
  why: 'В продуктивных и творческих сценариях короткое время может означать потерю качества.',
  whyNot: { b: 'Время измеряют в usability-тестах.', c: 'Контекст задачи решает.', d: 'Утверждение слишком категорично.' } },

// ═══ LEVEL 3–6 · MORE QUESTIONS ═══════════════════════════════════
{ id: 'q17', type: 'calc', level: 3, metricIds: ['conversion-rate'],
  prompt: '200 пользователей начали действие, 130 завершили. Рассчитайте Conversion Rate.',
  options: [
    { id: 'a', label: '65%' },
    { id: 'b', label: '35%' },
    { id: 'c', label: '130%' },
    { id: 'd', label: '15%' },
  ], correct: ['a'],
  why: 'CR = 130 ÷ 200 = 65%.',
  whyNot: { b: '35% — это Drop-off (100% − 65%).', c: 'Нельзя получить более 100% в этой задаче.', d: 'Некорректный расчёт.' } },

{ id: 'q18', type: 'calc', level: 4, metricIds: ['arpu'],
  prompt: 'Выручка 40 000$, всего 20 000 пользователей, из них 4 000 платящих. Рассчитайте ARPU.',
  options: [
    { id: 'a', label: '2$' },
    { id: 'b', label: '10$' },
    { id: 'c', label: '0,5$' },
    { id: 'd', label: '5$' },
  ], correct: ['a'],
  why: 'ARPU = 40 000 ÷ 20 000 = 2$ (делим на всю базу).',
  whyNot: { b: '10$ — это ARPPU (40 000 ÷ 4 000).', c: 'Некорректный расчёт.', d: 'Это доля платящих, а не выручка.' } },

{ id: 'q19', type: 'calc', level: 5, metricIds: ['stickiness'],
  prompt: 'DAU = 30 000, MAU = 100 000. Рассчитайте Stickiness (DAU/MAU).',
  options: [
    { id: 'a', label: '30%' },
    { id: 'b', label: '3%' },
    { id: 'c', label: '70%' },
    { id: 'd', label: '33%' },
  ], correct: ['a'],
  why: 'Stickiness = 30 000 ÷ 100 000 = 30%.',
  whyNot: { b: 'Некорректный порядок.', c: '70% — обратное значение.', d: 'Округление неверное.' } },

{ id: 'q20', type: 'compare', level: 4, metricIds: ['retention-rate', 'churn-rate'],
  prompt: 'Monthly Retention 85%. Какой Churn Rate за месяц?',
  options: [
    { id: 'a', label: '15%' },
    { id: 'b', label: '85%' },
    { id: 'c', label: '1,7%' },
    { id: 'd', label: 'Нельзя вычислить' },
  ], correct: ['a'],
  why: 'Если без учёта новых пользователей, Churn = 100% − Retention = 15%.',
  whyNot: { b: 'Это Retention, а не Churn.', c: 'Некорректный расчёт.', d: 'При чистой паре метрик вычисление прямое.' } },

{ id: 'q21', type: 'identify', level: 3, metricIds: ['cart-abandonment'],
  prompt: '1000 корзин создано, оплачено 300. Как называется метрика потерь на этом этапе?',
  options: [
    { id: 'a', label: 'Cart Abandonment Rate' },
    { id: 'b', label: 'Retention Rate' },
    { id: 'c', label: 'SUS' },
    { id: 'd', label: 'K-Factor' },
  ], correct: ['a'],
  why: 'Потери между корзиной и покупкой — Cart Abandonment Rate (70%).',
  whyNot: { b: 'Retention — возврат во времени.', c: 'SUS — опросник.', d: 'K-Factor — виральность.' } },

{ id: 'q22', type: 'select', level: 7, metricIds: ['cac', 'ltv-cac', 'churn-rate'],
  prompt: 'Бизнес тратит больше на привлечение, чем приносит каждый клиент. Какие метрики нужны для диагностики?',
  options: [
    { id: 'a', label: 'CAC + LTV/CAC + Churn Rate' },
    { id: 'b', label: 'SUS + SEQ' },
    { id: 'c', label: 'DAU + WAU' },
    { id: 'd', label: 'CTR + CPM' },
  ], correct: ['a'],
  why: 'Юнит-экономика и отток напрямую объясняют убыточность привлечения.',
  whyNot: { b: 'UX-опросники не объяснят деньги.', c: 'DAU/WAU — охват, не экономика.', d: 'CTR/CPM — реклама, не окупаемость.' } },

{ id: 'q23', type: 'interpret', level: 6, metricIds: ['churn-rate'],
  prompt: 'Churn 25% в месяц. Что это означает для средней продолжительности жизни клиента?',
  options: [
    { id: 'a', label: 'В среднем клиент живёт около 4 месяцев' },
    { id: 'b', label: 'Клиент живёт 25 месяцев' },
    { id: 'c', label: 'Ничего не означает' },
    { id: 'd', label: 'Все клиенты уйдут через месяц' },
  ], correct: ['a'],
  why: 'Средний срок жизни ≈ 100% ÷ Churn = 4 месяца.',
  whyNot: { b: 'Это обратный расчёт.', c: 'Метрика информативна.', d: 'Среднее значение ≠ «все уйдут».' } },

{ id: 'q24', type: 'compare', level: 4, metricIds: ['nps', 'sus'],
  prompt: 'Satisfaction (CSAT) vs SUS — что измеряет каждый?',
  options: [
    { id: 'a', label: 'CSAT — удовлетворённость опытом, SUS — воспринимаемое удобство интерфейса' },
    { id: 'b', label: 'Оба измеряют лояльность' },
    { id: 'c', label: 'Оба измеряют конверсию' },
    { id: 'd', label: 'SUS — деньги, CSAT — трафик' },
  ], correct: ['a'],
  why: 'CSAT относится к удовлетворённости, SUS — стандартизированный опросник юзабилити.',
  whyNot: { b: 'Лояльность — NPS.', c: 'Конверсия — CR.', d: 'Обе про пользовательский опыт.' } },

{ id: 'q25', type: 'mistake', level: 6, metricIds: ['conversion-rate'],
  prompt: '«Если Conversion Rate вырос, значит UX стал лучше». Верно ли это?',
  options: [
    { id: 'a', label: 'Необязательно: могли повлиять трафик, сезонность, акции' },
    { id: 'b', label: 'Да, это прямое следствие' },
    { id: 'c', label: 'Да, но только для мобильных' },
    { id: 'd', label: 'Нет, конверсия вообще не про пользователей' },
  ], correct: ['a'],
  why: 'Рост конверсии — сигнал, но причина может быть внешней.',
  whyNot: { b: 'Слишком прямолинейный вывод.', c: 'Причина не зависит от платформы.', d: 'Конверсия — про пользователей, просто не единственный фактор.' } },

{ id: 'q26', type: 'identify', level: 3, metricIds: ['task-success'],
  prompt: 'В usability-тесте 7 из 10 пользователей успешно завершили задачу. Какая метрика?',
  options: [
    { id: 'a', label: 'Task Success Rate' },
    { id: 'b', label: 'NPS' },
    { id: 'c', label: 'MRR' },
    { id: 'd', label: 'CPM' },
  ], correct: ['a'],
  why: 'Доля успешно выполнивших тестовую задачу — Task Success Rate (70%).',
  whyNot: { b: 'NPS — лояльность.', c: 'MRR — выручка.', d: 'CPM — реклама.' } },

{ id: 'q27', type: 'multi', level: 5, metricIds: ['dau', 'mau', 'sessions-per-user'],
  prompt: 'Какие метрики описывают вовлечённость (engagement)? (выберите все)',
  options: [
    { id: 'a', label: 'DAU' },
    { id: 'b', label: 'Sessions per User' },
    { id: 'c', label: 'DAU/MAU' },
    { id: 'd', label: 'CAC' },
  ], correct: ['a', 'b', 'c'],
  why: 'Охват, частота и «липкость» описывают вовлечённость.',
  whyNot: { d: 'CAC — стоимость привлечения.' } },

{ id: 'q28', type: 'identify', level: 3, metricIds: ['viral-coefficient'],
  prompt: 'Каждый пользователь приглашает 0,5 человека, половина приглашённых принимают инвайт. Какая метрика описывает этот рост?',
  options: [
    { id: 'a', label: 'K-Factor (Viral Coefficient)' },
    { id: 'b', label: 'Churn Rate' },
    { id: 'c', label: 'SUS' },
    { id: 'd', label: 'ARPU' },
  ], correct: ['a'],
  why: 'K-Factor = приглашения × конверсия приглашений = 0,25.',
  whyNot: { b: 'Churn — отток.', c: 'SUS — удобство.', d: 'ARPU — выручка на пользователя.' } },

{ id: 'q29', type: 'interpret', level: 6, metricIds: ['nps'],
  prompt: 'NPS вырос с +10 до +35. Что можно сказать наверняка?',
  options: [
    { id: 'a', label: 'Лояльность и баланс промоутеров/детракторов изменились в положительную сторону' },
    { id: 'b', label: 'UX гарантированно стал лучше' },
    { id: 'c', label: 'Выручка выросла на 25%' },
    { id: 'd', label: 'Все пользователи стали промоутерами' },
  ], correct: ['a'],
  why: 'NPS вырос — лояльность улучшилась; причину и UX нужно проверять отдельно.',
  whyNot: { b: 'NPS не доказывает улучшение UX.', c: 'NPS не связан с выручкой напрямую.', d: 'Значение +35 ≠ все промоутеры.' } },

{ id: 'q30', type: 'select', level: 7, metricIds: ['sus', 'task-success', 'time-on-task', 'error-rate'],
  prompt: 'После редизайна нужно оценить удобство интерфейса. Какой набор метрик выбрать?',
  options: [
    { id: 'a', label: 'SUS + Task Success + Time on Task + Error Rate' },
    { id: 'b', label: 'MRR + ARR' },
    { id: 'c', label: 'CPC + CPM' },
    { id: 'd', label: 'DAU + MAU' },
  ], correct: ['a'],
  why: 'SUS даёт общую оценку, объективные метрики — выполнимость, время и ошибки.',
  whyNot: { b: 'MRR/ARR — деньги.', c: 'CPC/CPM — реклама.', d: 'DAU/MAU — охват, не удобство.' } },

{ id: 'q31', type: 'compare', level: 4, metricIds: ['retention-rate', 'engagement'],
  prompt: 'Retention vs Engagement — в чём главное различие?',
  options: [
    { id: 'a', label: 'Retention про возврат во времени, Engagement про активность и использование' },
    { id: 'b', label: 'Это синонимы' },
    { id: 'c', label: 'Engagement — про деньги, Retention — про людей' },
    { id: 'd', label: 'Retention — UX-метрика, Engagement — бизнес-метрика' },
  ], correct: ['a'],
  why: 'Удержание отвечает «возвращаются ли», вовлечённость — «как активно используют».',
  whyNot: { b: 'Разные вопросы.', c: 'Обе про поведение.', d: 'Обе про продукт.' } },

{ id: 'q32', type: 'mistake', level: 7, metricIds: ['ltv'],
  prompt: '«LTV 50$ — значит каждый клиент приносит 50$ прибыли». Найдите ошибку.',
  options: [
    { id: 'a', label: 'LTV — прогноз и обычно считается от выручки/маржи с допущениями' },
    { id: 'b', label: 'Ошибки нет' },
    { id: 'c', label: 'LTV всегда 50$ для всех' },
    { id: 'd', label: 'LTV не связан с деньгами' },
  ], correct: ['a'],
  why: 'LTV — оценка на основе допущений (churn, маржа), а не гарантированная прибыль.',
  whyNot: { b: 'Утверждение слишком категорично.', c: 'LTV сильно варьируется.', d: 'LTV как раз про деньги.' } },

{ id: 'q33', type: 'calc', level: 5, metricIds: ['cac-payback'],
  prompt: 'CAC = 120$, чистая маржа с клиента = 40$/мес. За сколько месяцев окупится клиент?',
  options: [
    { id: 'a', label: '3 месяца' },
    { id: 'b', label: '4 месяца' },
    { id: 'c', label: '12 месяцев' },
    { id: 'd', label: '48 месяцев' },
  ], correct: ['a'],
  why: 'Payback = 120 ÷ 40 = 3 месяца.',
  whyNot: { b: 'Некорректный расчёт.', c: 'Некорректный расчёт.', d: 'Некорректный расчёт.' } },

{ id: 'q34', type: 'identify', level: 3, metricIds: ['nps'],
  prompt: '50% промоутеров, 30% пассивных, 20% детракторов. Рассчитайте NPS.',
  options: [
    { id: 'a', label: 'NPS = +30' },
    { id: 'b', label: 'NPS = +20' },
    { id: 'c', label: 'NPS = +50' },
    { id: 'd', label: 'NPS = 0' },
  ], correct: ['a'],
  why: 'NPS = промоутеры − детракторы = 50 − 20 = +30.',
  whyNot: { b: 'Некорректный расчёт.', c: 'Пассивные не учитываются в разнице.', d: 'Некорректный расчёт.' } },

{ id: 'q35', type: 'multi', level: 5, metricIds: ['sus', 'csat', 'nps', 'seq'],
  prompt: 'Какие метрики относятся к субъективному (воспринимаемому) опыту? (выберите все)',
  options: [
    { id: 'a', label: 'SUS' },
    { id: 'b', label: 'CSAT' },
    { id: 'c', label: 'NPS' },
    { id: 'd', label: 'Time on Task' },
  ], correct: ['a', 'b', 'c'],
  why: 'SUS, CSAT и NPS основаны на восприятии пользователя.',
  whyNot: { d: 'Time on Task — объективное замеренное время.' } },

{ id: 'q36', type: 'select', level: 7, metricIds: ['dau', 'wau', 'mau', 'stickiness'],
  prompt: 'Продукт хотят сделать «ежедневной привычкой». Какие метрики отслеживать?',
  options: [
    { id: 'a', label: 'DAU + WAU + MAU + Stickiness' },
    { id: 'b', label: 'MRR + ARR' },
    { id: 'c', label: 'CPM + CPC' },
    { id: 'd', label: 'CAC + LTV' },
  ], correct: ['a'],
  why: 'Охват и «липкость» показывают формирование привычки.',
  whyNot: { b: 'Деньги не покажут привычку.', c: 'Рекламные цены не относятся.', d: 'Юнит-экономика не про частоту.' } },

{ id: 'q37', type: 'compare', level: 4, metricIds: ['mrr', 'arr', 'revenue'],
  prompt: 'Чем MRR отличается от общей выручки?',
  options: [
    { id: 'a', label: 'MRR учитывает только повторяющиеся подписки, выручка — всё' },
    { id: 'b', label: 'Это одно и то же' },
    { id: 'c', label: 'MRR всегда больше выручки' },
    { id: 'd', label: 'Выручка — это MRR × 12' },
  ], correct: ['a'],
  why: 'MRR — нормализованный повторяющийся доход; выручка включает и разовые платежи.',
  whyNot: { b: 'Разный состав.', c: 'Не всегда.', d: 'Это определение ARR.' } },

{ id: 'q38', type: 'mistake', level: 7, metricIds: ['dau'],
  prompt: '«DAU вырос на 20% — значит продукт стал вовлекать лучше». Где ошибка?',
  options: [
    { id: 'a', label: 'DAU может вырасти за счёт маркетинга, без роста вовлечённости' },
    { id: 'b', label: 'Ошибки нет' },
    { id: 'c', label: 'DAU вообще не измеряет людей' },
    { id: 'd', label: 'DAU — это выручка' },
  ], correct: ['a'],
  why: 'DAU — охват; для вовлечённости нужны частота, длительность, stickiness.',
  whyNot: { b: 'Вывод слишком прямолинейный.', c: 'DAU — уникальные пользователи.', d: 'DAU не про деньги.' } },

{ id: 'q39', type: 'interpret', level: 6, metricIds: ['task-success'],
  prompt: 'Task Success Rate = 62% в тесте задачи «восстановить пароль». Что следует предпринять?',
  options: [
    { id: 'a', label: 'Переработать сценарий: метрика ниже порога успешности' },
    { id: 'b', label: 'Ничего, это норма' },
    { id: 'c', label: 'Повысить цены' },
    { id: 'd', label: 'Измерить NPS' },
  ], correct: ['a'],
  why: 'Значение ниже типичного порога 78% — задача требует доработки.',
  whyNot: { b: '62% — низкий результат.', c: 'Цены не связаны с успешностью задачи.', d: 'NPS не заменит доработку.' } },

{ id: 'q40', type: 'identify', level: 3, metricIds: ['nrr'],
  prompt: 'Выручка от существующих клиентов выросла на 20% за год без новых продаж. Какая метрика это отражает?',
  options: [
    { id: 'a', label: 'Net Revenue Retention (NRR)' },
    { id: 'b', label: 'CPA' },
    { id: 'c', label: 'CPM' },
    { id: 'd', label: 'Error Rate' },
  ], correct: ['a'],
  why: 'NRR > 100% показывает рост на существующей базе.',
  whyNot: { b: 'CPA — цена действия.', c: 'CPM — цена показов.', d: 'Error Rate — ошибки.' } },

{ id: 'q41', type: 'calc', level: 6, metricIds: ['nrr'],
  prompt: 'MRR на старте 100k$, через квартал 110k$ от тех же клиентов. Рассчитайте NRR.',
  options: [
    { id: 'a', label: '110%' },
    { id: 'b', label: '10%' },
    { id: 'c', label: '90%' },
    { id: 'd', label: '1,1%' },
  ], correct: ['a'],
  why: 'NRR = 110 ÷ 100 × 100% = 110%.',
  whyNot: { b: 'Это прирост, а не коэффициент.', c: 'Некорректный расчёт.', d: 'Некорректная размерность.' } },

{ id: 'q42', type: 'select', level: 7, metricIds: ['sample-size', 'statistical-significance', 'p-value', 'lift'],
  prompt: 'Продуктовая команда хочет корректно провести A/B-тест. Что нужно контролировать?',
  options: [
    { id: 'a', label: 'Sample Size + Statistical Significance + p-value + Lift' },
    { id: 'b', label: 'SUS + CSAT' },
    { id: 'c', label: 'ARPU + AOV' },
    { id: 'd', label: 'DAU + MAU' },
  ], correct: ['a'],
  why: 'Планирование выборки и статистическая интерпретация — основа валидного теста.',
  whyNot: { b: 'UX-опросники не про валидность теста.', c: 'Монетизация не про эксперимент.', d: 'Охват не про тест.' } },

{ id: 'q43', type: 'compare', level: 4, metricIds: ['csat', 'ces'],
  prompt: 'CSAT vs CES — какая метрика сильнее предсказывает повторные покупки?',
  options: [
    { id: 'a', label: 'CES: усилие клиента сильнее связано с лояльностью, чем удовлетворённость' },
    { id: 'b', label: 'CSAT всегда сильнее' },
    { id: 'c', label: 'Они не связаны с покупками' },
    { id: 'd', label: 'Равнозначны' },
  ], correct: ['a'],
  why: 'Исследования показывают, что усилие (effort) сильнее влияет на повторные покупки.',
  whyNot: { b: 'Удовлетворённость слабее предсказывает лояльность.', c: 'Связаны напрямую.', d: 'Сила влияния разная.' } },

{ id: 'q44', type: 'mistake', level: 7, metricIds: ['retention-rate'],
  prompt: '«Высокий Retention всегда означает хороший UX». Верно?',
  options: [
    { id: 'a', label: 'Нет: удержание может держаться на привычке, контрактах или отсутствии альтернатив' },
    { id: 'b', label: 'Да, это гарантия' },
    { id: 'c', label: 'Да, но только для мобильных' },
    { id: 'd', label: 'Нет, retention не про пользователей' },
  ], correct: ['a'],
  why: 'Высокое удержание бывает по причинам, не связанным с UX.',
  whyNot: { b: 'Слишком категорично.', c: 'Платформа не меняет логику.', d: 'Retention — про пользователей.' } },

{ id: 'q45', type: 'identify', level: 3, metricIds: ['ctr'],
  prompt: 'Баннер показали 10 000 раз, по нему кликнули 400. Какая метрика?',
  options: [
    { id: 'a', label: 'CTR' },
    { id: 'b', label: 'NPS' },
    { id: 'c', label: 'SUS' },
    { id: 'd', label: 'Churn' },
  ], correct: ['a'],
  why: 'Доля кликов от показов — Click-Through Rate (4%).',
  whyNot: { b: 'NPS — лояльность.', c: 'SUS — удобство.', d: 'Churn — отток.' } },

{ id: 'q46', type: 'calc', level: 5, metricIds: ['ltv'],
  prompt: 'ARPU = 20$, churn = 10%/мес. Оцените LTV (без учёта маржи).',
  options: [
    { id: 'a', label: '≈ 200$' },
    { id: 'b', label: '≈ 20$' },
    { id: 'c', label: '≈ 10$' },
    { id: 'd', label: '≈ 2$' },
  ], correct: ['a'],
  why: 'LTV ≈ ARPU ÷ churn = 20 ÷ 0,1 = 200$.',
  whyNot: { b: 'Это ARPU.', c: 'Некорректный расчёт.', d: 'Некорректный расчёт.' } },

{ id: 'q47', type: 'compare', level: 4, metricIds: ['cac', 'cpa'],
  prompt: 'В чём разница между CAC и CPA?',
  options: [
    { id: 'a', label: 'CAC — стоимость платящего клиента, CPA — стоимость любого целевого действия' },
    { id: 'b', label: 'Это синонимы' },
    { id: 'c', label: 'CPA всегда больше CAC' },
    { id: 'd', label: 'CAC — это CTR' },
  ], correct: ['a'],
  why: 'CPA охватывает любые целевые действия (установки, заявки), CAC — только платящих клиентов.',
  whyNot: { b: 'Разные знаменатели.', c: 'Не всегда.', d: 'CAC не про клики.' } },

{ id: 'q48', type: 'select', level: 7, metricIds: ['error-rate', 'time-on-task', 'task-success', 'number-of-steps'],
  prompt: 'Форма из 9 полей даёт много ошибок и долгое заполнение. Какие метрики диагностируют проблему?',
  options: [
    { id: 'a', label: 'Error Rate + Time on Task + Task Success + Number of Steps' },
    { id: 'b', label: 'MRR + ARR' },
    { id: 'c', label: 'CPM + CPC' },
    { id: 'd', label: 'K-Factor + Referral Rate' },
  ], correct: ['a'],
  why: 'Ошибки, время, успешность и число шагов напрямую описывают проблему формы.',
  whyNot: { b: 'Деньги не диагностируют форму.', c: 'Реклама не относится.', d: 'Виральность не про форму.' } },

{ id: 'q49', type: 'interpret', level: 6, metricIds: ['mau'],
  prompt: 'MAU вырос на 30%, но Stickiness упал с 25% до 18%. Что происходит?',
  options: [
    { id: 'a', label: 'Аудитория выросла за счёт редких посетителей; вовлечённость снизилась' },
    { id: 'b', label: 'Все стало лучше' },
    { id: 'c', label: 'Продукт стал вирусным' },
    { id: 'd', label: 'Ничего не происходит' },
  ], correct: ['a'],
  why: 'Рост MAU при падении stickiness — база раздувается «непривычными» пользователями.',
  whyNot: { b: 'Stickiness упал — тревожный сигнал.', c: 'Вирусность не доказана.', d: 'Динамика противоречивая, есть о чём думать.' } },

{ id: 'q50', type: 'identify', level: 3, metricIds: ['ces'],
  prompt: 'Пользователи жалуются, что решить проблему в поддержке сложно и долго. Какая метрика точнее всего это измерит?',
  options: [
    { id: 'a', label: 'CES (Customer Effort Score)' },
    { id: 'b', label: 'CPM' },
    { id: 'c', label: 'K-Factor' },
    { id: 'd', label: 'AOV' },
  ], correct: ['a'],
  why: 'CES измеряет усилие, которое прикладывает клиент для решения.',
  whyNot: { b: 'CPM — цена показов.', c: 'K-Factor — виральность.', d: 'AOV — средний чек.' } },
];
