# PRODUCT DESIGN TRAINING — TRAINING CARD SYSTEM 2026

**Document type:** OpenCode implementation task specification + canonical content dataset  
**Status:** Production-ready content specification  
**Content date:** 2026-08-29  
**Primary purpose:** Replace the current inconsistent swipe-card content with a complete professional training system for product designers and adjacent product roles.

---

## 0. OpenCode execution instruction

You are working inside the existing **Product Design Training** website/project.

Your task is to **replace the current training-card content system with the canonical card system defined in this document** and integrate it into the current site without redesigning the existing experience.

### Hard rules

1. **Do not redesign the website.** Preserve the current card component, page structure, swipe/flip behavior, navigation, theme behavior, responsive logic, animations, and all other existing UI unless a minimal data-binding change is required to support the new content schema.
2. Treat the current ~80 training cards as **placeholder / unreliable content**, not as source of truth.
3. Inspect the existing implementation first. Find the actual card data source, rendering component(s), IDs, filters/categories, progress logic, randomization logic, persistence/state, and any tests.
4. Replace or migrate the content safely. Do not create a parallel unused dataset.
5. Visible card copy is **English**. Technical implementation comments may remain in the language already used by the codebase.
6. Do not silently invent new professional definitions. Use the canonical data below. If the existing UI cannot display an optional field, preserve the information in the data model and render only the fields required by the current component.
7. One card = **one learning point**.
8. Front side must never reveal the answer term.
9. Back side must always state the exact professional term first.
10. After implementation, run semantic QA, duplicate QA, rendering QA, responsive QA, and regression QA.

---

# 1. Product goal

The cards are not a glossary and not decorative content. They are a **professional vocabulary + product reasoning trainer**.

A user who repeatedly trains with the deck should become able to:

- understand what common product, UX, UI, research, analytics, business, technical, accessibility, design-system and AI concepts are for;
- recognize a metric/framework/method from its purpose rather than from memorized wording;
- distinguish commonly confused terms;
- connect professional terminology to realistic product situations;
- speak more confidently with PMs, designers, researchers, engineers, analysts, marketers, founders and clients;
- use common industry vocabulary in interviews, product reviews, workshops, freelance/client work and day-to-day delivery;
- understand not just definitions but **when a concept is useful and what it does not mean**.

The training system must prioritize concepts that are genuinely useful in modern product work in 2026, both for people working **in-house** and for **freelancers, consultants and founders**.

---

# 2. Canonical card anatomy

## FRONT — recognition / reasoning

### `front_question`
A large, plain-language question that describes **what the concept measures, explains, helps decide, or is used for**.

Good:

> Which metric tells you how many users come back and keep using the product after a given period?

Bad:

> What is Retention Rate?

The front must make the learner retrieve the professional term from meaning.

### `front_scenario`
A realistic product/work situation in **1–2 short sentences**.

Example:

> A subscription app gets plenty of new sign-ups, but the team wants to know how many of those users are still active 30 days later.

Do not write mini-essays. The scenario should make the concept concrete, not repeat the definition.

---

## BACK — answer + useful context

### `answer`
The exact professional term, written first and prominently.

Example:

> Retention Rate

### `back_info`
A concise explanation of what the term does and the most useful context for applying it.

Target: normally 1–3 short sentences.

### `formula`
Optional. Use only where the formula is genuinely common and useful.

### `caveat`
Optional. A short distinction, warning or common misconception.

Do not turn the back of the card into an article.

---

# 3. Learning model

Each card may carry one of four learning modes:

- `recall` — recognize a concept from its purpose;
- `distinction` — distinguish it from a nearby concept;
- `application` — identify the right metric/method/framework for a situation;
- `interpretation` — understand what a result or signal means.

Difficulty:

- `foundation` — vocabulary every modern product practitioner should know;
- `practice` — common applied knowledge used in real projects;
- `advanced` — deeper interpretation, measurement, systems or AI/product practice.

Difficulty is **not** an excuse for obscure trivia. Advanced cards must still be professionally useful.

---

# 4. Content-writing rules

1. Use current, common professional English.
2. Prefer plain English on the front and exact industry language on the back.
3. Do not define a term using the term itself.
4. Avoid corporate filler, vague claims and inspirational language.
5. Do not use fake precision or universal benchmarks when the correct value depends on product/business context.
6. Where a denominator is context-dependent, state it clearly (for example, feature adoption may use eligible or active users depending on the product definition).
7. Distinguish customer/user/account/revenue metrics where relevant.
8. Treat frameworks as tools, not laws. Mention limitations when useful.
9. Avoid outdated UX folklore presented as hard science.
10. Accessibility content must align with **WCAG 2.2** terminology current in 2026.
11. Core Web Vitals must use **LCP, INP and CLS**; do not teach FID as a current Core Web Vital.
12. Design-token content should reflect the stable DTCG 2025.10 vocabulary used in 2026, including aliases/references and semantic intent.
13. AI-product content must cover the vocabulary commonly used in 2026: context windows, embeddings, RAG, grounding, tool use/function calling, agents, MCP, evals, structured outputs, prompt injection, human-in-the-loop and related concepts.
14. Do not make vendor-specific API names the core learning target unless the concept itself has become broadly transferable.
15. Keep scenarios realistic for SaaS, mobile apps, marketplaces, e-commerce, enterprise tools, consumer products, agencies and client work.

---

# 5. Canonical data schema

OpenCode may adapt this schema to the existing project architecture, but must preserve the semantics.

```ts
export type TrainingCard = {
  id: string;
  category: string;
  level: 'foundation' | 'practice' | 'advanced';
  mode: 'recall' | 'distinction' | 'application' | 'interpretation';
  frontQuestion: string;
  frontScenario: string;
  answer: string;
  backInfo: string;
  formula?: string;
  caveat?: string;
  aliases?: string[];
};
```

### ID rule

Use stable kebab-case IDs. Do not derive progress state from array index.

### Optional aliases

Use only when a concept is genuinely known by multiple common names or abbreviations, e.g. `Customer Lifetime Value` / `CLV` / `LTV`.

---

# 6. Target content coverage

The canonical v1 deck contains **300 cards** across 18 practical domains.

| # | Domain | Cards |
|---|---|---:|
| 01 | Product Metrics & Lifecycle | 22 |
| 02 | Growth, Revenue & Unit Economics | 18 |
| 03 | Product Analytics & Instrumentation | 16 |
| 04 | Experimentation & Statistics | 16 |
| 05 | UX & Usability Metrics | 14 |
| 06 | User Research | 18 |
| 07 | Product Discovery & Problem Framing | 16 |
| 08 | Strategy, Roadmaps & Prioritization | 18 |
| 09 | Core Product Frameworks | 16 |
| 10 | Information Architecture & Content Design | 14 |
| 11 | Interaction & Behavioral Design | 18 |
| 12 | UI & Visual Design | 16 |
| 13 | Design Systems | 16 |
| 14 | Accessibility & Inclusive Design | 18 |
| 15 | Delivery & Cross-functional Collaboration | 14 |
| 16 | Business, Freelance & Client Work | 14 |
| 17 | Technical & Web Vocabulary | 16 |
| 18 | AI Product & LLM Vocabulary | 20 |
|  | **TOTAL** | **300** |

---

# 7. Canonical card dataset

**Important:** The following content is the source of truth for v1. Do not substitute the old ~80-card copy.


## 01 — Product Metrics & Lifecycle (22)

| ID | Level | Mode | Front question | Real-world scenario | Answer | Back: essential reference |
|---|---|---|---|---|---|---|
| pm-01 | foundation | recall | Which metric tells you what share of new users reaches the first meaningful value milestone? | A project-management app gets thousands of sign-ups, but the team cares whether newcomers actually create and share their first project. | Activation Rate | The percentage of new users who complete the product's defined activation event. **Formula:** activated new users / eligible new users × 100. The activation event must represent meaningful value, not just account creation. |
| pm-02 | foundation | recall | Which metric tells you what share of a user cohort comes back and keeps using the product after a chosen period? | A fitness app wants to know how many people who started this month are still active 30 days later. | Retention Rate | Measures continued use over time for a defined cohort and return behavior. **Formula:** retained users / users in the starting cohort × 100. Always define the time window and what counts as “retained.” |
| pm-03 | foundation | distinction | Which metric tells you what share of customers or users stopped using or paying during a period? | A SaaS product has stable acquisition but the customer base is barely growing because many accounts cancel each month. | Churn Rate | Measures loss over a period. It can refer to users/customers or to revenue, so specify which one. **Formula (customer churn):** customers lost / customers at start of period × 100. |
| pm-04 | foundation | recall | Which metric tells you how many unique users are active on a typical day? | A messaging product wants a daily view of how many distinct people actually use the service. | DAU — Daily Active Users | Number of unique users who perform the defined active behavior in a day. “Active” must be tied to meaningful product behavior, not automatically to any page load. |
| pm-05 | foundation | recall | Which metric tells you how many unique users are active within a week? | A collaboration tool is used several times per week rather than every day, so daily activity alone looks artificially low. | WAU — Weekly Active Users | Number of unique users who meet the active-user definition during a rolling or calendar week. Useful for products with a weekly usage cadence. |
| pm-06 | foundation | recall | Which metric tells you how many unique users are active within a month? | A tax or finance tool may be valuable even if people do not open it every day. The team needs a broader active-user measure. | MAU — Monthly Active Users | Number of unique users who meet the product's active-user definition during a month. Useful as a broad measure of active reach, but it does not show depth of engagement. |
| pm-07 | practice | interpretation | Which ratio helps you estimate how frequently monthly users return on a daily basis? | Two apps both have 100k MAU, but one is used almost every day while the other is opened once a month. | DAU/MAU Stickiness | A frequency proxy showing the share of monthly active users who are active on a typical day. **Formula:** DAU / MAU × 100. Compare only products with similar natural usage cadence. |
| pm-08 | practice | recall | Which metric tells you what share of relevant users has tried or used a specific feature? | A team launches collaborative comments and wants to know whether existing active users are actually discovering and using them. | Feature Adoption Rate | Share of eligible or active users who use a feature during a defined period. **Formula:** feature users / defined eligible population × 100. Define the denominator explicitly. |
| pm-09 | practice | distinction | Which concept describes how many different users use a feature rather than how often each user uses it? | A dashboard is used by 70% of customers, but most open it only once. The team wants to separate reach from frequency. | Breadth of Adoption | Breadth describes how widely a feature is used across the relevant user base. It complements depth and frequency; high breadth does not necessarily mean strong engagement. |
| pm-10 | practice | distinction | Which concept describes how intensively people use a feature once they have adopted it? | Only a small group uses an advanced editor, but those users create dozens of items every week. | Depth of Engagement | Depth measures the amount or richness of use among engaged users, such as actions, items created, or meaningful steps completed. It should be tied to value, not raw clicks. |
| pm-11 | practice | recall | Which metric tells you how often an active user performs a meaningful action in a period? | A calendar feature is widely adopted, but the team needs to know whether people use it once or repeatedly. | Usage Frequency | Measures repeated use of a product or feature per user over a defined interval. Useful alongside adoption because “used once” and “used habitually” are different states. |
| pm-12 | practice | application | Which metric tells you how long it takes a new user to reach the activation milestone? | People eventually discover the value of a workflow tool, but some need three sessions before creating their first useful automation. | Time to Activate | Time between acquisition/sign-up and the defined activation event. Shorter is often better when the activation event truly represents value; do not optimize speed toward a meaningless event. |
| pm-13 | practice | application | Which concept focuses on how quickly a customer experiences meaningful value, not merely completes onboarding? | An enterprise buyer finishes setup on day one but sees the first successful business outcome two weeks later. | Time to Value — TTV | Time required for a user/customer to realize meaningful product value. It may extend beyond onboarding or activation and is especially important in B2B and complex products. |
| pm-14 | foundation | recall | Which metric tells you what share of users completes a target action such as purchase, signup or upgrade? | An e-commerce team wants to know what percentage of checkout visitors actually place an order. | Conversion Rate | Share of an eligible population that completes a defined target action. **Formula:** converters / eligible users or sessions × 100. Always specify the funnel stage and denominator. |
| pm-15 | foundation | recall | Which metric tells you what share of users finishes a defined task or flow after starting it? | Users begin identity verification, but the team wants to know how many reach the final confirmation screen. | Completion Rate | Percentage of starters who reach the defined completion point. **Formula:** completed flows / started flows × 100. Useful for onboarding, forms, setup and multi-step tasks. |
| pm-16 | foundation | distinction | Which metric tells you what share of people leaves a flow before reaching the next required step? | A checkout loses a large number of users between delivery details and payment. | Drop-off Rate | Share of users who fail to progress from a step or stage. It is usually examined step-by-step in a funnel to locate friction rather than treated as one universal product metric. |
| pm-17 | practice | recall | Which metric measures the share of users who return specifically after first using a feature? | The team knows many people try AI summaries once and wants to know whether they come back to use that feature again. | Feature Retention | Measures continued use of a specific feature after initial use. It helps distinguish novelty-driven trials from durable feature value. |
| pm-18 | practice | interpretation | Which analysis groups users by a shared starting event or characteristic so their behavior can be compared over time? | The team wants to compare retention for users who signed up in January versus February after an onboarding redesign. | Cohort Analysis | Groups users by a shared attribute or event and compares subsequent behavior. Cohorts help avoid mixing users with very different start dates or experiences. |
| pm-19 | advanced | interpretation | Which curve shows how the share of a cohort still returning changes as time passes? | A social app sees a steep early decline but then a stable group continues using it for months. | Retention Curve | A time-series view of retained users in a cohort. The shape reveals early loss and whether retention eventually stabilizes; the relevant interval depends on natural product usage. |
| pm-20 | practice | distinction | Which metric focuses on customers who were inactive but became active again? | A streaming app sends a win-back campaign and wants to track previously dormant users who return. | Reactivation Rate | Measures the share or number of previously inactive users who resume meaningful activity. Define the inactivity threshold and reactivation event before measuring it. |
| pm-21 | advanced | interpretation | Which lifecycle concept separates active users into new, current and previously inactive users who returned? | MAU is flat, but the team needs to know whether stability comes from loyal current users or from constantly replacing lost users. | User Lifecycle Segmentation | Splits activity into lifecycle states such as new, current, dormant and resurrected/reactivated users. It explains the composition behind a single active-user total. |
| pm-22 | advanced | application | Which metric should represent the recurring user behavior that best captures the core value your product delivers? | A marketplace could track page views, listings or successful transactions, but the team needs one value-centered metric to align product decisions. | North Star Metric | A durable metric representing delivered customer value and linked to sustainable business outcomes. It should be supported by input and guardrail metrics, not treated as the only number that matters. |

## 02 — Growth, Revenue & Unit Economics (18)

| ID | Level | Mode | Front question | Real-world scenario | Answer | Back: essential reference |
|---|---|---|---|---|---|---|
| gr-01 | foundation | recall | Which metric tells you the average cost of acquiring one paying customer? | A startup spends on ads, content and sales and wants to know what each new customer effectively costs. | CAC — Customer Acquisition Cost | Average acquisition cost per new customer. **Formula:** relevant sales + marketing acquisition costs / new customers acquired. Define which costs and period are included. |
| gr-02 | foundation | recall | Which metric estimates the economic value a customer generates across the whole relationship? | A subscription business can spend more to acquire customers who typically remain and pay for several years. | Customer Lifetime Value — LTV/CLV | Estimated value generated by a customer over the relationship, often based on revenue or gross profit. The calculation varies by business model; state the method rather than treating one formula as universal. |
| gr-03 | practice | interpretation | Which ratio helps you judge whether customer acquisition economics are sustainable? | Marketing can double sign-ups, but leadership needs to know whether the lifetime value generated justifies the acquisition cost. | LTV:CAC Ratio | Compares estimated customer lifetime value with acquisition cost. It is a directional unit-economics signal, not a universal benchmark; growth stage, margin and payback timing matter. |
| gr-04 | practice | recall | Which metric tells you how long it takes gross profit or contribution from a customer to recover acquisition cost? | A B2B SaaS company spends heavily on sales and wants to know how many months pass before a new account pays back that investment. | CAC Payback Period | Time needed to recover CAC from the customer's recurring gross profit/contribution. Shorter payback generally reduces financing pressure, but acceptable ranges depend on the business. |
| gr-05 | foundation | recall | Which metric tells you predictable subscription revenue normalized to one month? | A SaaS business has customers on different billing dates and wants a consistent view of recurring revenue. | MRR — Monthly Recurring Revenue | Recurring subscription revenue normalized to a month. Exclude one-off services and other non-recurring revenue when using MRR as a subscription metric. |
| gr-06 | foundation | recall | Which metric expresses recurring subscription revenue on an annualized basis? | Leadership wants a simple annual run-rate view derived from recurring subscriptions. | ARR — Annual Recurring Revenue | Annualized recurring revenue, commonly derived from recurring contracts or MRR. It is not the same as total annual revenue when one-off revenue exists. |
| gr-07 | foundation | recall | Which metric tells you average revenue generated per user in a period? | A consumer subscription app wants to compare monetization across countries with different plan mixes. | ARPU — Average Revenue per User | Average revenue per user over a defined period. **Formula:** revenue / relevant users. Specify whether “user” means active, paying or total users. |
| gr-08 | practice | distinction | Which metric is more appropriate than ARPU when revenue is contracted and billed at the company/account level? | An enterprise SaaS platform has thousands of seats but contracts with 200 customer organizations. | ARPA — Average Revenue per Account | Average revenue per customer account over a period. It is often more meaningful than per-user revenue in B2B products sold at account or workspace level. |
| gr-09 | foundation | recall | Which metric tells you the average value of an e-commerce transaction? | A retailer's order count is stable, but the team wants to know whether customers are spending more per purchase. | AOV — Average Order Value | Average revenue per completed order. **Formula:** order revenue / number of orders. Useful for merchandising, bundling and checkout strategy. |
| gr-10 | practice | recall | Which metric shows recurring revenue retained after cancellations, downgrades and expansions from the existing customer base? | A SaaS company loses some accounts but remaining customers upgrade enough that existing-account revenue still grows. | NRR — Net Revenue Retention | Measures recurring revenue retained from an existing customer cohort including expansion, contraction and churn. **Formula:** starting recurring revenue + expansion − contraction − churn / starting recurring revenue × 100. |
| gr-11 | practice | distinction | Which retention metric ignores upgrades and expansion so you can see how much recurring revenue survives losses alone? | Expansion revenue is masking a serious downgrade and cancellation problem. | GRR — Gross Revenue Retention | Measures recurring revenue retained before expansion. It captures churn and contraction but not upsell, making underlying revenue loss easier to see. |
| gr-12 | practice | recall | Which metric tells you how much additional recurring revenue came from upgrades or add-ons among existing customers? | A SaaS product launches paid add-ons and wants to separate that growth from new-logo acquisition. | Expansion Revenue | Additional revenue generated from existing customers through upgrades, additional seats, add-ons or increased usage. It is an important driver of NRR. |
| gr-13 | foundation | recall | Which metric tells you what percentage of revenue remains after direct cost of delivering the product or service? | Two products have the same revenue, but one has far higher infrastructure and service-delivery costs. | Gross Margin | Revenue left after cost of goods/services sold. **Formula:** (revenue − COGS) / revenue × 100. Useful for understanding economic efficiency before operating expenses. |
| gr-14 | practice | recall | Which metric estimates what remains from a sale after variable costs that scale with that sale? | A marketplace needs to know whether each additional transaction contributes enough to cover fixed operating costs. | Contribution Margin | Revenue minus variable costs attributable to producing or serving that revenue. It is useful for unit economics and break-even decisions; definitions vary by business. |
| gr-15 | foundation | recall | Which metric tells you how much revenue an advertising campaign produces for each unit of ad spend? | A growth team compares paid search with social ads and wants a revenue-based efficiency measure. | ROAS — Return on Ad Spend | Revenue attributed to advertising divided by ad spend. **Formula:** attributed revenue / ad spend. It does not include all business costs and depends heavily on attribution quality. |
| gr-16 | foundation | recall | Which metric tells you the percentage of ad or link impressions that resulted in a click? | A campaign is seen by millions of people, but the team wants to know whether the creative actually prompts visits. | CTR — Click-Through Rate | Share of impressions that produce clicks. **Formula:** clicks / impressions × 100. High CTR does not guarantee high-quality traffic or downstream conversion. |
| gr-17 | practice | recall | Which metric measures how much value is exchanged through a marketplace before the platform takes its fee? | A marketplace earns a commission, but first needs to know the total value of transactions completed between buyers and sellers. | GMV — Gross Merchandise Value | Total value of transactions facilitated over a period before fees, refunds or other deductions as defined by the business. It is not the marketplace's own revenue. |
| gr-18 | practice | distinction | Which metric tells you what share of marketplace transaction value the platform keeps as revenue? | A marketplace processes €10M in sales but earns only the commission and service fees. | Take Rate | Percentage of transaction value captured by the platform as revenue. **Formula:** platform revenue / relevant GMV × 100. Definitions should specify which fees and transaction value are included. |

## 03 — Product Analytics & Instrumentation (16)

| ID | Level | Mode | Front question | Real-world scenario | Answer | Back: essential reference |
|---|---|---|---|---|---|---|
| an-01 | foundation | recall | What is the basic analytics unit for a meaningful action a user performs? | The team wants to record actions such as `project_created`, `checkout_started` and `invite_sent`. | Event | A named occurrence representing user or system behavior. Good events express meaningful actions and use a consistent naming convention. |
| an-02 | foundation | recall | What analytics data describes the context or attributes attached to an event? | `purchase_completed` is useful, but the team also needs price, plan, device and payment method. | Event Property | Attribute attached to an event that adds context for filtering, grouping and analysis. Properties should have documented names, types and allowed values. |
| an-03 | foundation | distinction | What analytics data describes a person or account rather than one individual action? | The team wants to segment behavior by plan type, region and customer role. | User Property | Persistent or changing attribute associated with a user, account or profile rather than a single event. Avoid storing sensitive data without a valid need and governance. |
| an-04 | foundation | recall | What artifact defines which events and properties must be captured and how they are named? | Designers, PMs and engineers keep creating slightly different names for the same behaviors. | Tracking Plan | Shared specification for analytics events, properties, naming, triggers, owners and validation. It prevents inconsistent instrumentation from undermining analysis. |
| an-05 | practice | recall | What process adds the actual analytics events and properties to the product code or data pipeline? | The team has agreed what to measure, but engineering still needs to make those behaviors observable. | Instrumentation | Implementation of data collection in the product and supporting systems. Good instrumentation is tested like other product functionality. |
| an-06 | foundation | recall | Which analysis shows how users progress through a predefined sequence of steps and where they leave? | Many users add an item to cart, but far fewer complete checkout. | Funnel Analysis | Measures progression and conversion through ordered steps. It is best for known paths; not every real user journey is strictly linear. |
| an-07 | practice | recall | Which analysis reveals common sequences users actually take without forcing them into a predefined funnel? | The team does not know what people do between signup and first value and wants to see real behavior paths. | Path Analysis | Explores observed event sequences before or after selected actions. Useful for discovering unexpected routes, loops and dead ends. |
| an-08 | foundation | recall | Which analysis divides users into groups so behavior can be compared by attributes or conditions? | The team wants to compare activation for mobile vs desktop and free vs paid users. | Segmentation | Breaks metrics or behavior into meaningful groups. Segments help expose averages that hide important differences. |
| an-09 | practice | distinction | Which concept means a saved group of users defined by shared attributes or behavior? | The team repeatedly analyzes users who invited a teammate within their first day. | Behavioral Cohort | A reusable group defined by shared behavior or characteristics. Behavioral cohorts can be compared for retention, conversion and other outcomes. |
| an-10 | practice | recall | What analytics view groups activity into visits or periods of continuous interaction? | The team wants to understand how much users do during a typical visit, not only across a month. | Session | A grouping of user activity within a defined period or inactivity timeout. Session definitions vary by tool and may be less meaningful for always-on or multi-device products. |
| an-11 | advanced | application | What validation process checks that analytics events fire correctly with the right schema and values? | A new release shipped, but dashboards suddenly show impossible conversion numbers. | Analytics QA | Verification of event triggers, identities, properties, types, duplication and environment behavior. It should happen before relying on new instrumentation for decisions. |
| an-12 | advanced | distinction | What problem occurs when the same real person is counted as separate anonymous and logged-in users? | A person browses anonymously, signs up, then appears as two users in the funnel. | Identity Resolution | Process of linking anonymous, logged-in and cross-device identifiers to the same user/account where appropriate. Poor identity logic distorts funnels and retention. |
| an-13 | practice | recall | What analysis helps determine which marketing source or touchpoint receives credit for a conversion? | A buyer sees an ad, reads an article, then later returns through search and purchases. | Attribution | Rules or models assigning conversion credit to acquisition or marketing touchpoints. Attribution is an estimate shaped by tracking limits and model assumptions, not objective truth. |
| an-14 | advanced | application | What should you use to define a small set of critical events and their exact business meaning before building dashboards? | Different teams call any click “engagement,” making the dashboard look busy but not useful. | Measurement Framework | A documented mapping from product goals and questions to metrics, events and definitions. It forces teams to measure decisions and outcomes rather than collect data indiscriminately. |
| an-15 | practice | distinction | Which metric type predicts or influences a later outcome rather than reporting the outcome after it happens? | The team wants an early signal that retention may improve before waiting 90 days. | Leading Indicator | A metric expected to move before a desired outcome and provide earlier feedback. It should have evidence linking it to the outcome rather than being chosen only because it moves quickly. |
| an-16 | practice | distinction | Which metric type confirms an outcome only after the underlying behavior or business result has occurred? | Quarterly revenue validates whether earlier acquisition and activation efforts ultimately worked. | Lagging Indicator | A metric that reflects results after the fact. It is useful for outcome validation but often too slow to guide every daily product decision. |

## 04 — Experimentation & Statistics (16)

| ID | Level | Mode | Front question | Real-world scenario | Answer | Back: essential reference |
|---|---|---|---|---|---|---|
| ex-01 | foundation | recall | What statement predicts a measurable relationship between a product change and an outcome before you test it? | A team believes simplifying onboarding will increase first-project creation. | Hypothesis | A falsifiable prediction connecting a change, target population and expected outcome. A useful hypothesis can be tested and potentially disproved. |
| ex-02 | foundation | recall | Which experiment compares a control experience with a changed variant using randomized groups? | Half of eligible users see the current pricing page and half see a redesigned version. | A/B Test | Randomized controlled experiment comparing variants on predefined outcomes. Random assignment helps isolate causal impact from many confounding factors. |
| ex-03 | practice | distinction | What is the default statistical claim that an experiment tries to find evidence against? | Before declaring the redesign better, the analysis assumes there is no true difference between variants. | Null Hypothesis | Statistical hypothesis typically representing no effect or no difference. Evidence is evaluated against it; failing to reject it is not proof that the variants are identical. |
| ex-04 | practice | interpretation | Which statistic estimates how compatible observed data is with the null hypothesis under the chosen model? | An experiment dashboard reports 0.03 and the team wants to know what that number actually means. | p-value | Probability, assuming the null model is true, of observing data at least as extreme as what was seen. It is not the probability that the hypothesis is true. |
| ex-05 | practice | interpretation | What interval expresses a range of plausible values for an estimated effect under a specified confidence procedure? | Conversion improved by 1.2 points, but the team needs to understand uncertainty around that estimate. | Confidence Interval | Range constructed by a method that would contain the true parameter at the stated rate over repeated samples. It communicates uncertainty better than a point estimate alone. |
| ex-06 | practice | recall | What is the probability that a test will detect an effect of a specified size when that effect is real? | A team worries its experiment is too small to detect the conversion improvement it actually cares about. | Statistical Power | Probability of rejecting the null when a specified real effect exists. Power depends on sample size, variability, significance threshold and effect size. |
| ex-07 | practice | application | What calculation determines how many observations an experiment needs before it can reliably detect the target effect? | The team wants to plan test duration before launch instead of stopping as soon as the chart looks positive. | Sample Size Calculation | Estimates required observations based on baseline, target effect, variability, alpha and power assumptions. It should be planned before reading outcomes whenever possible. |
| ex-08 | advanced | recall | What is the smallest effect size worth detecting because anything smaller would not change the product decision? | A 0.05% conversion lift would be statistically detectable at huge scale but commercially irrelevant. | MDE — Minimum Detectable Effect | Smallest effect the experiment is designed to reliably detect. MDE should reflect decision relevance, not just what is statistically convenient. |
| ex-09 | practice | distinction | What error happens when you conclude there is an effect even though the null hypothesis is actually true? | A team ships a variant because of random noise and later cannot reproduce the improvement. | Type I Error — False Positive | Rejecting a true null hypothesis. The significance level controls the long-run false-positive rate under the model and testing procedure. |
| ex-10 | practice | distinction | What error happens when a meaningful real effect exists but your test fails to detect it? | The variant genuinely helps, but the sample was too small and the experiment is called inconclusive. | Type II Error — False Negative | Failing to reject the null when a relevant effect is real. Higher statistical power reduces the probability of this error for the specified effect size. |
| ex-11 | practice | application | Which experiment metric protects against harming an important area while optimizing the primary outcome? | A checkout variant increases purchases but also dramatically increases refund requests. | Guardrail Metric | A metric monitored to prevent unacceptable harm outside the primary objective, such as errors, latency, cancellations or support load. Guardrails define boundaries, not the main success target. |
| ex-12 | foundation | recall | What is the single predefined outcome an experiment is mainly designed to evaluate? | A test changes onboarding and tracks dozens of metrics, but one outcome must determine whether the hypothesis succeeded. | Primary Metric | Main decision metric specified before analysis. Predefining it reduces cherry-picking among many outcomes after seeing results. |
| ex-13 | advanced | interpretation | What diagnostic checks whether experiment traffic was split into variants in an unexpectedly different ratio from the intended allocation? | A 50/50 test receives 63% of users in variant A and 37% in B. | Sample Ratio Mismatch — SRM | Statistically suspicious deviation between expected and observed allocation. SRM often signals assignment, logging or eligibility bugs and should be investigated before trusting results. |
| ex-14 | advanced | interpretation | What effect can make a newly introduced feature look unusually strong or weak simply because it is new? | Users explore a new navigation pattern intensely in week one, then behavior settles back. | Novelty Effect | Temporary behavior change caused by newness rather than durable product value. Longer observation or follow-up measurement may be needed for lasting effects. |
| ex-15 | advanced | distinction | What bias occurs when the people observed are systematically different because of how they entered or remained in the sample? | Only highly engaged customers answer a voluntary survey, making satisfaction look higher than it is across the full user base. | Selection Bias | Systematic distortion caused by non-random inclusion, exclusion or participation. Better sampling and careful interpretation are needed; bigger samples do not automatically remove it. |
| ex-16 | advanced | application | What approach lets you inspect experiment data repeatedly using a method designed for sequential decisions rather than ordinary fixed-horizon peeking? | A team wants to stop tests early when evidence is sufficient without inflating false positives through ad-hoc daily checks. | Sequential Testing | Statistical methods designed for repeated interim analysis and stopping rules. Do not repeatedly apply a fixed-horizon significance test and stop whenever it crosses a threshold. |

## 05 — UX & Usability Metrics (14)

| ID | Level | Mode | Front question | Real-world scenario | Answer | Back: essential reference |
|---|---|---|---|---|---|---|
| uxm-01 | foundation | recall | Which usability metric tells you what share of participants successfully completes a defined task? | In a usability test, eight of ten participants manage to change their billing address without help. | Task Success Rate | Percentage of tested attempts that meet predefined success criteria. **Formula:** successful attempts / total attempts × 100. Define full, partial and failed success consistently if partial success is allowed. |
| uxm-02 | foundation | recall | Which metric tells you how long users take to complete a task? | Two checkout designs both succeed, but one requires much more time. | Time on Task | Time required to complete a defined task. Interpret alongside success and task complexity; faster is not automatically better when careful review matters. |
| uxm-03 | practice | recall | Which metric captures how often users make defined mistakes while attempting a task? | Participants repeatedly enter dates in the wrong format and trigger validation errors. | Error Rate | Frequency or proportion of defined user errors during a task. Classify errors consistently and distinguish recoverable slips from task failure where useful. |
| uxm-04 | practice | distinction | Which metric counts how many steps, clicks or actions users need to complete a goal? | Two flows have similar completion rates, but one requires far more interaction. | Interaction Cost | Amount of effort required to achieve a goal, often considered through steps, decisions, attention and input rather than a single universal formula. Fewer clicks alone is not always better. |
| uxm-05 | foundation | recall | Which standardized 10-item questionnaire gives a broad perceived-usability score on a 0–100 scale? | A team wants a lightweight benchmark of perceived usability before and after a redesign. | SUS — System Usability Scale | Ten-item standardized usability questionnaire transformed to a 0–100 score. The score is not a percentage and is best interpreted against appropriate comparative data. |
| uxm-06 | practice | recall | Which one-question post-task rating asks how easy or difficult a just-completed task felt? | After each usability task, researchers need a quick perceived-difficulty measure. | SEQ — Single Ease Question | Single-item post-task ease rating, commonly on a 7-point scale. It complements behavioral measures such as task success and time. |
| uxm-07 | practice | recall | Which compact two-item questionnaire measures perceived usefulness and ease of use? | A product team needs a very short standardized usability measure inside an ongoing survey. | UMUX-Lite | Two-item standardized questionnaire focused on usefulness/capability and ease of use. It is useful when survey space is limited. |
| uxm-08 | foundation | recall | Which metric asks customers how satisfied they are with a product, interaction or support experience? | After a support conversation, users rate how satisfied they were with the resolution. | CSAT — Customer Satisfaction Score | Direct satisfaction rating tied to a specified experience. Report the scale and calculation because organizations aggregate CSAT differently. |
| uxm-09 | foundation | recall | Which metric asks how likely someone is to recommend a product and subtracts detractors from promoters? | Leadership wants a relationship-level loyalty signal based on the standard recommendation question. | NPS — Net Promoter Score | Recommendation-based score calculated as percentage of promoters minus percentage of detractors, producing −100 to +100. It should not replace behavioral product metrics or diagnostic research. |
| uxm-10 | practice | recall | Which metric asks how much effort a customer felt was required to accomplish something? | A customer successfully updates an account but reports that the process was exhausting. | CES — Customer Effort Score | Perceived effort associated with a task or service interaction. Exact question wording and scale vary, so document the implementation when comparing results. |
| uxm-11 | practice | recall | Which metric tells you whether users click the correct first place when starting a navigation task? | Researchers want an early signal of whether people understand where “Manage team” should live in the navigation. | First-Click Success | Share of participants whose first click is on a path that can lead to the correct destination. First-click behavior can be highly diagnostic of information scent and navigation clarity. |
| uxm-12 | practice | application | Which measure combines whether a task succeeds with how efficiently or smoothly it is completed? | Two designs have the same success rate, but one causes far more hesitation and retries. | Task Efficiency | Evaluation of successful performance relative to time, actions or effort. Define the calculation for the study; efficiency should be interpreted together with effectiveness and satisfaction. |
| uxm-13 | advanced | interpretation | Which percentile-based page-experience metric measures how quickly the interface responds after user interactions? | A web app loads quickly but feels sluggish after clicks and key presses. | INP — Interaction to Next Paint | Core Web Vital for responsiveness, based on interaction latency over the page lifecycle. In 2026 it is the current responsiveness Core Web Vital; **FID is no longer the current Core Web Vital.** |
| uxm-14 | advanced | distinction | Which three metrics form Google's current Core Web Vitals set for loading, responsiveness and visual stability? | A designer and engineer review real-user web performance and need the current standard trio, not an outdated checklist. | Core Web Vitals: LCP, INP, CLS | **LCP** measures loading of the largest content element, **INP** responsiveness, and **CLS** visual stability. Current good-experience targets commonly referenced by Google are LCP ≤2.5s, INP ≤200ms and CLS ≤0.1 at the 75th percentile. |

## 06 — User Research (18)

| ID | Level | Mode | Front question | Real-world scenario | Answer | Back: essential reference |
|---|---|---|---|---|---|---|
| ur-01 | foundation | application | Which method observes representative users attempting realistic tasks so you can find usability problems? | A team needs to see where people fail while booking an appointment in a prototype. | Usability Testing | Evaluative research in which participants attempt representative tasks while researchers observe behavior and outcomes. It can be moderated or unmoderated and should use clear task goals rather than leading instructions. |
| ur-02 | foundation | distinction | Which usability-study format includes a researcher who can observe live, ask follow-up questions and manage tasks? | A complex enterprise workflow requires probing when participants hesitate or use unexpected workarounds. | Moderated Usability Testing | A facilitator interacts with the participant during the session. It supports probing and complex tasks but introduces facilitator effects and usually requires more time per participant. |
| ur-03 | foundation | distinction | Which usability-study format lets participants complete tasks independently without a live facilitator? | The team needs directional evidence from many remote participants across several countries. | Unmoderated Usability Testing | Participants complete predefined tasks without a live moderator. It scales more easily but offers less ability to probe unexpected behavior in the moment. |
| ur-04 | foundation | application | Which method uses a guided conversation to understand users' experiences, needs, behaviors and reasoning? | Before designing a workflow, the team wants to learn how accountants currently reconcile invoices and where the pain occurs. | User Interview | Qualitative conversation used to understand experiences, motivations, needs and context. Ask about real past behavior and concrete examples rather than relying only on hypothetical preferences. |
| ur-05 | practice | application | Which method studies people performing real work in their natural environment while the researcher observes and asks questions? | A designer needs to understand how warehouse staff actually use scanners while moving through a noisy facility. | Contextual Inquiry | Field research combining observation with in-context questioning. It reveals environmental constraints, tacit workarounds and behaviors that interviews alone may miss. |
| ur-06 | practice | application | Which method asks participants to record experiences or behaviors repeatedly over days or weeks? | A sleep app needs to understand changing routines that cannot be captured in one one-hour interview. | Diary Study | Longitudinal self-report method where participants document experiences over time. Useful for intermittent, emotional or context-dependent behavior, but participant effort and reporting quality must be managed. |
| ur-07 | practice | distinction | Which broad research approach observes behavior in the real environment rather than in a lab or remote test setup? | The product is used differently on construction sites than people describe in office interviews. | Field Study | Research conducted in the participant's real context to understand behavior, environment and constraints. It can include observation, interviews and contextual inquiry techniques. |
| ur-08 | foundation | application | Which method collects structured responses from many people to quantify attitudes, characteristics or self-reported behavior? | The team wants to estimate how common several reported problems are across a large customer base. | Survey | Structured questionnaire suited to breadth and quantification of self-report. Good survey design requires neutral wording, appropriate scales, sampling awareness and careful interpretation. |
| ur-09 | foundation | application | Which IA method asks participants to group content into categories that make sense to them? | A documentation site has hundreds of topics and the team wants evidence for how users mentally group them. | Card Sorting | Participants organize items into categories to reveal mental models and labeling patterns. It informs IA but does not by itself validate final navigation performance. |
| ur-10 | practice | distinction | Which card-sort format lets participants create and name their own categories? | The team has little confidence in its current taxonomy and wants to discover users' natural groupings. | Open Card Sort | Participants group items and create category labels. Best for generative understanding of mental models rather than testing a fixed taxonomy. |
| ur-11 | practice | distinction | Which card-sort format asks participants to sort items into categories that already exist? | The team has proposed navigation labels and wants to see where users expect each item to belong. | Closed Card Sort | Participants place items into predefined categories. Useful for evaluating an existing categorization scheme, though it constrains possible structures. |
| ur-12 | foundation | application | Which method tests whether people can find destinations in a text-only hierarchy without visual design influencing them? | A team wants to validate a new site structure before building screens. | Tree Testing | Participants navigate a simplified hierarchy to find specified items. It tests findability and labeling of the information architecture independently of page visual design. |
| ur-13 | practice | application | Which study tests whether a product idea or value proposition makes sense before detailed interaction design exists? | A company has three service concepts and wants to learn which problems and propositions resonate before investing in UI. | Concept Testing | Evaluates understanding, relevance, appeal and concerns around an early concept. It tests the concept, not proof of future market success. |
| ur-14 | foundation | application | Which study uses an interactive representation of a future product to test workflows before full implementation? | Engineering has not built the feature, but the team needs to observe whether users understand the proposed flow. | Prototype Testing | Evaluation using a prototype of suitable fidelity to answer specific questions. Prototype behavior and limitations should match the research goal closely enough to avoid misleading conclusions. |
| ur-15 | practice | application | Which expert-review method checks an interface against established usability principles without recruiting participants? | The team needs a fast structured review before scheduling user testing. | Heuristic Evaluation | Experts inspect an interface against usability heuristics to identify likely issues. It is efficient but does not replace evidence from actual users. |
| ur-16 | practice | application | Which expert method walks through a task step by step to judge whether a new or infrequent user will know what to do next? | A complex setup flow is designed for first-time administrators, and the team wants to inspect learnability. | Cognitive Walkthrough | Step-by-step expert evaluation focused on whether users can form the right goal, notice controls, associate actions with goals and understand feedback. |
| ur-17 | practice | recall | What document defines who qualifies for a study so recruitment matches the research question? | A study about first-time mortgage applicants accidentally recruits finance professionals who know the process too well. | Screener | Recruitment questionnaire used to include or exclude participants based on relevant characteristics and behavior. Criteria should reflect the target population without revealing desired answers. |
| ur-18 | advanced | distinction | What principle describes the point where additional qualitative sessions produce little genuinely new insight for the research question? | After many interviews, the same themes repeat and new sessions mostly confirm existing patterns. | Saturation | A qualitative-research concept indicating diminishing emergence of new relevant themes. It is context-dependent and should not be used as a mechanical universal participant-count rule. |

## 07 — Product Discovery & Problem Framing (16)

| ID | Level | Mode | Front question | Real-world scenario | Answer | Back: essential reference |
|---|---|---|---|---|---|---|
| pd-01 | foundation | distinction | What space contains customer needs, pains and desired outcomes before you decide what to build? | A team keeps debating feature ideas before agreeing on the actual customer problem. | Problem Space | The domain of user/customer needs, problems, constraints and outcomes to understand before committing to solutions. Staying in the problem space long enough reduces premature solution fixation. |
| pd-02 | foundation | distinction | What space contains the possible products, features, workflows or interventions that could address a validated problem? | The team understands that freelancers struggle with invoice follow-up and now explores several ways to help. | Solution Space | The set of possible ways to address an opportunity or problem. Multiple solutions should usually be compared rather than treating the first idea as inevitable. |
| pd-03 | foundation | recall | What should discovery start with when the team needs a clear measurable change in customer or business behavior rather than a feature request? | Leadership says “build AI search,” but the team first needs to define what improvement that feature is supposed to create. | Desired Outcome | A measurable result the team is trying to influence. Outcomes help keep discovery focused on change in behavior or value instead of output volume. |
| pd-04 | foundation | recall | What term describes an unmet customer need, pain point or desire that could help drive the desired outcome if addressed? | Interview after interview reveals that buyers cannot compare plans confidently before checkout. | Opportunity | A customer need, pain point or desire worth exploring in relation to an outcome. In continuous discovery, opportunities are not solution ideas. |
| pd-05 | foundation | recall | What is a belief that must be true for a proposed solution or plan to succeed but has not yet been proven? | The team assumes users will trust an automated recommendation enough to act on it. | Assumption | An unverified belief underlying a product decision. Good discovery makes assumptions explicit so the riskiest ones can be tested cheaply. |
| pd-06 | practice | distinction | Which product risk asks whether customers actually want or value the proposed solution? | The feature is technically possible, but nobody knows whether users care enough to change behavior or pay. | Value Risk | Risk that the solution does not create sufficient customer/user value. Test desirability, relevance, behavior and willingness before assuming demand. |
| pd-07 | practice | distinction | Which product risk asks whether users can understand and successfully use the proposed experience? | Customers want the feature, but early prototypes show they cannot configure it correctly. | Usability Risk | Risk that intended users cannot effectively or efficiently use the solution. Prototypes and usability testing are common ways to reduce it. |
| pd-08 | practice | distinction | Which product risk asks whether the team can build and operate the solution with available technology, data and constraints? | A concept depends on near-real-time predictions, but the current data pipeline updates once per day. | Feasibility Risk | Risk that the solution cannot be delivered reliably with available technical capabilities, time or infrastructure. Engineering and data input is essential during discovery. |
| pd-09 | practice | distinction | Which product risk asks whether the solution works for the business, legal model, operations and other organizational constraints? | Users love an idea, but servicing it manually would make every transaction unprofitable. | Viability Risk | Risk that the solution cannot sustainably work for the business or organization. It includes economics, legal/compliance, operations, strategy and stakeholder constraints. |
| pd-10 | practice | application | What should a team test first when one unproven belief could invalidate the whole solution? | A marketplace prototype looks polished, but success depends on sellers agreeing to respond within five minutes. | Riskiest Assumption | The assumption whose failure would most seriously undermine the idea, considering both uncertainty and importance. Test it before polishing lower-risk details. |
| pd-11 | practice | application | Which technique maps assumptions by importance and evidence so the team can decide what to test first? | A product trio has twenty assumptions and needs a rational order for validation. | Assumption Mapping | Visual or structured prioritization of assumptions, commonly by importance/risk and level of evidence. It helps focus experiments on what could most change the decision. |
| pd-12 | practice | application | Which low-cost test measures interest in a feature before the full feature exists, for example with a button or landing page? | The team is unsure whether customers want an export feature and wants evidence before spending six weeks building it. | Fake Door Test | An experiment exposing a realistic entry point to an unbuilt capability and measuring expressed behavior such as clicks or sign-ups. Be transparent enough to avoid deceptive or harmful experiences. |
| pd-13 | practice | application | Which validation approach manually delivers the service to a small number of customers to learn what creates value before automating it? | A startup personally creates weekly reports for five customers before investing in a reporting engine. | Concierge Test | Humans intentionally provide the value manually while learning about needs, workflow and willingness to use/pay. The manual nature is typically visible to participants. |
| pd-14 | practice | distinction | Which prototype approach makes a system appear automated to the user while humans secretly perform some of the operation behind the scenes? | A team tests an “AI” categorization flow before the model exists by having an operator classify requests manually. | Wizard of Oz Prototype | A prototype where users experience apparently automated behavior that is actually produced manually behind the scenes. It is useful for testing interaction/value before building expensive automation. |
| pd-15 | foundation | recall | What cross-functional group commonly combines product, design and engineering perspectives during continuous discovery? | Decisions are stronger when customer value, experience and technical constraints are explored together instead of handed off sequentially. | Product Trio | A collaborative product manager, designer and engineer grouping popularized in continuous discovery practice. It is a collaboration model, not a mandatory org-chart rule. |
| pd-16 | practice | recall | What practice means engaging with customers and testing assumptions frequently throughout product work rather than in occasional research phases? | The team speaks with customers weekly and continuously tests opportunities and solutions alongside delivery. | Continuous Discovery | Ongoing discovery aimed at reducing product risk through frequent customer contact, opportunity framing and assumption testing. It complements delivery rather than being a one-time “discovery phase.” |

## 08 — Strategy, Roadmaps & Prioritization (18)

| ID | Level | Mode | Front question | Real-world scenario | Answer | Back: essential reference |
|---|---|---|---|---|---|---|
| sp-01 | foundation | recall | What describes the long-term future state you want the product or organization to help create? | A team needs a durable direction that can outlast individual features and quarterly plans. | Product Vision | An aspirational description of the future the product is working toward. It provides direction, not a detailed execution plan. |
| sp-02 | foundation | distinction | What describes why the organization or product exists and whom it serves today? | The team needs a concise statement of purpose rather than a future-state aspiration. | Mission | Statement of present purpose: why the organization/product exists, whom it serves and often what value it creates. It is distinct from a future-oriented vision. |
| sp-03 | foundation | recall | What set of choices explains where the product will compete and how it intends to win or create differentiated value? | The roadmap contains dozens of requests, but there is no logic for why some markets and problems matter more than others. | Product Strategy | Coherent set of choices connecting vision to target customers, problems, differentiation, capabilities and trade-offs. Strategy requires saying no to some attractive options. |
| sp-04 | practice | recall | What is a deliberate high-level commitment to a direction whose success is uncertain but strategically important? | The company chooses to make collaboration its main growth lever for the next year rather than adding unrelated features. | Strategic Bet | A meaningful resource commitment based on a strategic belief about how to create advantage or reach an outcome. Bets should have explicit assumptions and signals for learning. |
| sp-05 | foundation | recall | What artifact communicates intended product direction and sequencing over time without being a guaranteed feature contract? | Stakeholders need to understand what themes the team expects to pursue and why. | Product Roadmap | Communication artifact showing product direction, priorities and expected progression. A roadmap should adapt as evidence changes; it is not automatically a fixed delivery schedule. |
| sp-06 | practice | distinction | What roadmap organizes work around problems or measurable outcomes instead of promising named features by date? | The team wants to align on “reduce failed first-time setup” rather than commit six months early to one solution. | Outcome-based Roadmap | Roadmap structured around outcomes, customer problems or strategic themes. It preserves room to discover the best solution while maintaining direction. |
| sp-07 | foundation | recall | What goal-setting system pairs a qualitative objective with measurable key results? | A team wants ambitious direction plus evidence that tells whether it moved toward that direction. | OKR — Objectives and Key Results | Framework combining a qualitative objective with a small set of measurable results. Key results should describe outcomes, not simply list tasks completed. |
| sp-08 | foundation | distinction | In an OKR, what is the qualitative description of the change or direction the team wants to achieve? | “Make first-time setup effortless for new teams” expresses intent but not the measurement. | Objective | Qualitative, directional goal in an OKR. It answers what meaningful change the team is pursuing. |
| sp-09 | foundation | distinction | In an OKR, what is the measurable evidence used to determine whether the objective was achieved? | The team needs numbers such as activation increase and setup-time reduction rather than a list of shipped features. | Key Result | Quantified outcome used to assess progress toward an objective. Shipping a feature is usually an initiative, not a strong key result by itself. |
| sp-10 | foundation | application | Which prioritization framework scores initiatives using Reach, Impact, Confidence and Effort? | A team must compare ideas that affect different numbers of users and require different engineering effort. | RICE | Prioritization model using **Reach × Impact × Confidence / Effort**. Useful for structured comparison, but scores depend on assumptions and should not replace strategic judgment. |
| sp-11 | practice | distinction | Which lightweight prioritization framework scores ideas using Impact, Confidence and Ease? | An early-stage team wants a faster scoring model than RICE because reliable reach estimates are unavailable. | ICE | Prioritization model based on Impact, Confidence and Ease. It is quick but highly subjective unless teams define consistent scoring scales. |
| sp-12 | practice | application | Which prioritization method divides Cost of Delay by job size to favor high-value work that can be delivered sooner? | A portfolio team must sequence initiatives where urgency and effort differ substantially. | WSJF — Weighted Shortest Job First | Prioritization approach popular in scaled agile contexts. **Formula:** Cost of Delay / Job Size. Useful for sequencing economic value, but the input estimates still require judgment. |
| sp-13 | foundation | recall | Which prioritization method classifies scope as Must, Should, Could and Won't have for a given period or release? | A client project has more requested features than can fit the release and needs explicit scope categories. | MoSCoW | Scope-prioritization method: Must have, Should have, Could have, Won't have this time. Teams must limit “Must” items or the classification becomes meaningless. |
| sp-14 | foundation | application | Which simple prioritization tool plots expected impact against required effort? | A team wants to identify quick wins and avoid spending months on low-impact ideas. | Impact–Effort Matrix | 2×2 or continuous comparison of expected impact and effort. Useful for discussion and triage, but it ignores factors such as confidence, timing and strategic fit unless added explicitly. |
| sp-15 | practice | application | Which model classifies product attributes by how their presence or absence affects customer satisfaction? | Some capabilities are basic expectations, while others can delight customers even though they were not expected. | Kano Model | Classifies attributes such as basic/must-be, performance and delighters based on satisfaction response. Categories can change over time as expectations evolve. |
| sp-16 | advanced | recall | Which concept expresses the economic loss or missed value caused by delaying a piece of work? | Postponing a regulatory change and postponing a cosmetic improvement have very different consequences even if effort is equal. | Cost of Delay | Estimate of value lost as work waits, including revenue, risk, customer impact or time-critical opportunity. It helps make urgency explicit. |
| sp-17 | practice | application | Which method prioritizes opportunities by combining their importance to customers with current satisfaction? | Users care strongly about a workflow but are very dissatisfied with current solutions, suggesting room for improvement. | Opportunity Scoring | Prioritization approach that compares the importance of outcomes/needs with satisfaction with existing solutions. Exact formulas vary; the purpose is to identify important underserved outcomes. |
| sp-18 | foundation | recall | In Scrum, what long-term objective provides a target for the product and gives direction to the Product Backlog? | A Scrum team needs a coherent future state to work toward across multiple Sprints. | Product Goal | The long-term objective for the Scrum Team defined in the Product Backlog. It provides focus beyond an individual Sprint Goal. |

## 09 — Core Product Frameworks (16)

| ID | Level | Mode | Front question | Real-world scenario | Answer | Back: essential reference |
|---|---|---|---|---|---|---|
| fw-01 | foundation | recall | Which perspective frames customer demand around the progress a person is trying to make rather than around demographic traits or requested features? | Two very different customers “hire” the same tool because both need to coordinate a complex decision quickly. | Jobs to Be Done — JTBD | A way to understand products through the progress customers seek in a situation. Focus on the job/context and desired progress rather than treating personas or feature requests as the explanation by themselves. |
| fw-02 | practice | application | Which sentence format expresses a user's situation, motivation and desired outcome as “When…, I want to…, so I can…”? | The team wants to describe context and motivation without turning the requirement into a feature-specific user story. | Job Story | JTBD-style framing: **When [situation], I want to [motivation], so I can [expected outcome].** It emphasizes context and progress rather than role labels alone. |
| fw-03 | advanced | interpretation | Which JTBD idea examines the push away from the current situation, pull of a new solution, habits of the present and anxieties about change? | Customers say they want a better tool but still do not switch; the team needs to understand forces both for and against change. | Forces of Progress | JTBD lens describing forces that drive or resist switching: push, pull, habits/inertia and anxieties. It is useful for understanding adoption and switching behavior. |
| fw-04 | foundation | recall | Which design framework alternates divergent and convergent thinking across Discover, Define, Develop and Deliver? | A team needs a simple shared model for exploring the problem broadly, narrowing it, exploring solutions and narrowing again. | Double Diamond | Design Council model with two divergence/convergence cycles: Discover, Define, Develop, Deliver. It is a thinking model, not a requirement that real projects proceed linearly. |
| fw-05 | foundation | recall | Which human-centered approach commonly uses empathize, define, ideate, prototype and test as iterative activities? | A workshop needs a familiar structure for moving from user understanding to tested concepts. | Design Thinking | Broad human-centered problem-solving approach commonly represented through empathize, define, ideate, prototype and test. In practice the activities are iterative, not a rigid five-step waterfall. |
| fw-06 | practice | recall | Which approach combines Lean Startup ideas with collaborative UX work, rapid assumptions and learning through small experiments? | A product team wants less documentation-for-handoff and more shared hypotheses, prototypes and learning. | Lean UX | Collaborative approach emphasizing assumptions, hypotheses, rapid experimentation and outcomes over heavy deliverables. It works best when design, product and engineering learn together. |
| fw-07 | foundation | recall | Which growth framework organizes the customer lifecycle into Acquisition, Activation, Retention, Referral and Revenue? | A startup wants a simple lens to locate whether growth problems occur before first value, after first value or in monetization. | AARRR — Pirate Metrics | Lifecycle framework: Acquisition, Activation, Retention, Referral, Revenue. It is a diagnostic structure, not a prescription that every business optimizes each stage equally. |
| fw-08 | practice | recall | Which UX measurement framework groups signals into Happiness, Engagement, Adoption, Retention and Task Success? | A team wants a broad way to select user-experience measures without relying on one satisfaction score. | HEART Framework | Google-originated UX metrics framework: Happiness, Engagement, Adoption, Retention, Task Success. Teams typically map goals to signals and metrics within relevant categories. |
| fw-09 | practice | application | Which visual discovery framework connects a desired outcome to customer opportunities, possible solutions and assumption tests? | Interview findings and solution ideas are scattered across documents and the team needs one structure to keep discovery aligned. | Opportunity Solution Tree — OST | Continuous-discovery visual that links an outcome to an opportunity space, solution ideas and tests/assumptions. It helps teams compare paths rather than jumping from outcome directly to one feature. |
| fw-10 | foundation | application | Which canvas connects customer jobs, pains and gains with products/services, pain relievers and gain creators? | A team needs to check whether a proposed value proposition actually responds to what a target customer is trying to accomplish. | Value Proposition Canvas | Strategyzer framework pairing Customer Profile with Value Map. Useful for articulating fit hypotheses; it still requires customer evidence rather than workshop consensus alone. |
| fw-11 | foundation | application | Which one-page framework maps key partners, activities, resources, value propositions, customer relationships, channels, segments, costs and revenues? | A founder wants to make the assumptions behind a new business model visible on one page. | Business Model Canvas | Nine-block model for describing how an organization creates, delivers and captures value. It is a hypothesis map, not proof that the business model works. |
| fw-12 | practice | application | Which map shows the customer journey together with frontstage interactions, backstage processes, people and supporting systems? | A service problem looks like a UI issue, but the root cause is actually an internal approval process and delayed data sync. | Service Blueprint | Service-design map linking customer actions and touchpoints to visible employee/system interactions, backstage processes and support infrastructure. Useful for cross-channel services. |
| fw-13 | foundation | application | Which artifact maps a customer's stages, actions, thoughts, emotions and touchpoints across an end-to-end goal? | A team wants to understand the experience of choosing, buying, onboarding and getting support rather than only one screen. | Customer Journey Map | Visualization of a specific customer's experience over time toward a goal. Good journey maps are grounded in evidence and scoped to a defined actor and scenario. |
| fw-14 | practice | distinction | Which map is broader than a single product and represents a person's experience around a domain or goal across channels and services? | The team studies “moving home” including agents, banks, utilities and government services, not just its own app. | Experience Map | End-to-end representation of a broader human experience that may cross products and organizations. It is typically less product-specific than a customer journey map. |
| fw-15 | practice | application | Which planning technique arranges user activities and tasks horizontally by journey and slices releases vertically by value? | A team needs to see the whole workflow while choosing the smallest coherent first release. | User Story Mapping | Jeff Patton's technique for organizing work around the user journey/activity flow and slicing releases. It helps preserve end-to-end value instead of prioritizing isolated backlog items. |
| fw-16 | advanced | application | Which JTBD-style map breaks a core job into universal process steps such as defining, locating, preparing, confirming, executing and monitoring? | A team wants to find innovation opportunities across the entire job rather than around its existing feature set. | Job Map | Structured view of the steps customers go through to accomplish a job, independent of a specific solution. Useful for identifying unmet needs across the full job process. |

## 10 — Information Architecture & Content Design (14)

| ID | Level | Mode | Front question | Real-world scenario | Answer | Back: essential reference |
|---|---|---|---|---|---|---|
| ia-01 | foundation | recall | What discipline organizes and structures information so people can understand where they are and find what they need? | A platform has hundreds of pages, tools and settings but users cannot predict where anything lives. | Information Architecture — IA | Practice of structuring, organizing, labeling and connecting information to support understanding and findability. IA includes more than drawing a sitemap. |
| ia-02 | foundation | recall | What controlled classification system defines categories and relationships used to organize content or objects? | A marketplace calls the same product “audio,” “headphones” and “personal sound” in different places. | Taxonomy | System for classifying and naming content/items into consistent categories. A useful taxonomy reflects user mental models and operational needs. |
| ia-03 | foundation | recall | What concept describes levels of importance or parent–child structure within content and navigation? | Account settings contain top-level sections, sub-sections and individual controls. | Hierarchy | Ordered structure expressing levels, grouping or priority. Clear hierarchy reduces cognitive effort and helps people predict where information belongs. |
| ia-04 | foundation | recall | What diagram represents the planned structure and relationships of pages or screens in a site or product? | Before redesigning a documentation portal, the team needs a shared structural overview. | Sitemap | Representation of pages/screens and their hierarchical relationships. It documents structure but does not prove that users can find items within it. |
| ia-05 | foundation | recall | What system of menus, links and controls helps users move through a product's information structure? | Users understand individual pages but repeatedly get lost moving between projects, settings and billing. | Navigation | Mechanisms that let users move among locations or content. Good navigation provides clear choices, orientation and predictable routes. |
| ia-06 | foundation | application | What practice chooses names for categories, menus and controls so users can predict what they contain or do? | Internal teams say “Workspace Orchestration,” while customers look for “Team settings.” | Labeling | Naming information and actions using language users can understand and distinguish. Labels should be specific, consistent and tested in context. |
| ia-07 | foundation | recall | What is the user's internal expectation of how a system or domain works? | Customers expect deleted files to behave like a familiar trash/recycle bin even though the backend implementation is different. | Mental Model | Internal representation people use to predict how something works. Interfaces are easier to learn when conceptual models align with relevant user expectations. |
| ia-08 | practice | recall | What cue helps users predict what they will find after following a label, link or navigation path? | A menu item called “Resources” gives little clue whether it contains templates, billing help or documentation. | Information Scent | Signals that help users judge whether a path is likely to lead to their goal. Specific labels and contextual cues strengthen information scent. |
| ia-09 | foundation | recall | What quality describes how easily users can locate information or functionality when they need it? | The feature exists and works perfectly, but customers keep contacting support because they cannot locate it. | Findability | Degree to which information or functionality can be discovered and located. It depends on IA, navigation, search, labels and information scent. |
| ia-10 | practice | recall | What structured definition describes content types, their fields and relationships independently of a specific screen layout? | A CMS must support articles, authors, products and reusable FAQs across web and mobile. | Content Model | Definition of content types, attributes and relationships. It separates semantic content structure from one particular presentation. |
| ia-11 | foundation | recall | What do you call short interface text such as button labels, field hints, empty-state copy and error messages? | A designer must decide whether a button says “Save,” “Apply changes” or “Update profile.” | Microcopy | Small pieces of product-interface content that guide actions, explain states and reduce uncertainty. Good microcopy is specific, concise and contextual. |
| ia-12 | foundation | distinction | What defines the consistent personality and style of a product's communication across contexts? | A brand wants to sound clear, calm and slightly playful across onboarding, help and marketing. | Voice | Stable character of how a product or brand communicates. Voice is relatively consistent; tone adapts to the situation. |
| ia-13 | foundation | distinction | What changes the emotional delivery of the same brand voice depending on the user's situation? | The product can be playful after a success but should be calm and direct when a payment fails. | Tone | Context-sensitive expression of the underlying voice. Tone should respond to user emotion, risk and task without becoming a different brand personality. |
| ia-14 | foundation | application | What writing approach prioritizes familiar words, direct structure and easy comprehension instead of jargon or bureaucratic phrasing? | A consent flow is legally important but currently reads like an internal policy document. | Plain Language | Writing so the intended audience can find, understand and use information easily. Plain language is not childish language; it reduces unnecessary complexity while preserving accuracy. |

## 11 — Interaction & Behavioral Design (18)

| ID | Level | Mode | Front question | Real-world scenario | Answer | Back: essential reference |
|---|---|---|---|---|---|---|
| ix-01 | foundation | recall | What property of an object or interface suggests what actions are possible with it? | A raised button-like control appears pressable even before the user reads its label. | Affordance | Possibilities for action offered by an object or environment relative to a user. In UI discussion, distinguish the underlying affordance from the visual cue that communicates it. |
| ix-02 | foundation | distinction | What visible or perceivable cue communicates where an action can be taken? | Underlined blue text signals that it can be clicked even though the underlying action is simply navigation. | Signifier | Perceivable signal that indicates an affordance or where/how to act. Labels, icons, shape, placement and styling can all function as signifiers. |
| ix-03 | foundation | recall | What response from the system tells users that their action was received and what happened? | After pressing “Save,” the screen changes state and confirms success rather than leaving the user uncertain. | Feedback | System response to an action that communicates status or result. Feedback should be timely, perceivable and proportional to the action. |
| ix-04 | practice | recall | What relationship makes control behavior correspond naturally to the effect it produces? | Dragging a map left causes the viewed world to move in a spatially understandable direction. | Mapping | Relationship between controls/actions and their effects. Natural mapping reduces learning effort by matching spatial or conceptual expectations. |
| ix-05 | foundation | recall | What design mechanism limits possible actions to prevent invalid or unsafe states? | “Submit” remains unavailable until all required information is valid. | Constraint | Restriction that narrows available actions or states. Constraints can prevent errors, but disabled options should not hide why progress is blocked. |
| ix-06 | foundation | application | Which principle says users should be able to understand what the system is currently doing? | A file upload takes 20 seconds with no progress indicator, so users repeatedly click upload. | Visibility of System Status | Usability principle: keep users informed about current state through appropriate, timely feedback. Progress, saving, syncing and errors should not be invisible when they matter. |
| ix-07 | foundation | recall | Which principle reduces learning effort by making similar elements and behaviors work in similar ways? | “Save” is in the same place across settings pages and destructive actions follow the same confirmation pattern. | Consistency | Reuse of patterns, language and behavior so knowledge transfers across the product. Consistency should support understanding, not preserve a bad pattern forever. |
| ix-08 | foundation | distinction | Which principle favors showing recognizable options and cues instead of forcing users to remember information from another screen? | A checkout shows saved delivery addresses rather than asking users to recall and retype them. | Recognition over Recall | Reduce memory load by making actions, objects and relevant information visible or retrievable. Recall is sometimes unavoidable, but the interface should not require unnecessary memorization. |
| ix-09 | foundation | application | Which law predicts that targets are faster to acquire when they are larger and/or closer? | A mobile primary action is tiny and placed far from the thumb's natural reach. | Fitts's Law | Movement time depends on target distance and size. In interface design it supports adequately sized, reachable targets, while context and motor accessibility still matter. |
| ix-10 | foundation | application | Which law predicts that decision time tends to increase as the number and complexity of choices increases? | A menu expands from six clear options to forty equally weighted items and users take longer to choose. | Hick's Law | Choice time generally increases with more and more complex alternatives. The implication is not “always show fewer items”; grouping, defaults and progressive disclosure can reduce decision complexity. |
| ix-11 | foundation | recall | Which principle says users spend most of their time in other products and bring those learned conventions with them? | A custom close icon behaves differently from the convention users know across desktop apps. | Jakob's Law | Users form expectations from other products, so familiar conventions can reduce learning. Break conventions deliberately only when the benefit outweighs the added learning cost. |
| ix-12 | foundation | application | What pattern reveals complexity gradually so users first see what is necessary for the current task? | An advanced analytics screen initially shows core filters while specialist controls remain available on demand. | Progressive Disclosure | Showing essential information/actions first and revealing advanced complexity when needed. It reduces initial cognitive load without permanently removing power features. |
| ix-13 | foundation | application | Which design principle tries to stop predictable mistakes before they happen rather than relying only on error messages afterward? | The product prevents booking an end date earlier than the start date instead of accepting it and failing later. | Error Prevention | Design choices that reduce the chance of mistakes through constraints, sensible defaults, previews and clear choices. Prevention is usually better than recovery when errors are predictable. |
| ix-14 | practice | application | Which design principle lets users recover easily from mistakes through actions such as undo, restore or reversible confirmation? | A user accidentally deletes a board and immediately needs a safe way to reverse the action. | Forgiving Design | Interfaces should support recovery from ordinary human error through reversibility, undo, autosave, trash states or clear recovery paths where feasible. |
| ix-15 | practice | recall | What interaction style lets users act on visible objects directly through actions such as dragging, resizing or moving? | A design canvas allows an object to be grabbed and resized rather than edited only through a command form. | Direct Manipulation | Interaction with visible objects using immediate actions and feedback. It can feel intuitive, but equivalent non-drag interactions may be needed for accessibility. |
| ix-16 | advanced | distinction | What is a persistent interaction condition in which the same user action has different effects until the condition changes? | Pressing a key edits text in one state but performs keyboard shortcuts in another. | Mode | System state that changes the interpretation of user actions. Hidden or poorly signaled modes cause mode errors; visible mode indicators and easy exits reduce risk. |
| ix-17 | foundation | recall | What describes the current condition of a component or system, such as loading, selected, disabled, empty or error? | A button can be default, hovered, focused, pressed, loading, disabled or successful. | State | Current condition that determines presentation and behavior. Explicit state design prevents missing edge cases and inconsistent feedback. |
| ix-18 | foundation | application | What UI state appears when there is no content yet and should explain what the area is for or what to do next? | A new project has no tasks, so a blank white panel would leave the user unsure how to begin. | Empty State | Intentional design for absence of content. Useful empty states orient the user, explain why the area is empty and offer an appropriate next action when one exists. |

## 12 — UI & Visual Design (16)

| ID | Level | Mode | Front question | Real-world scenario | Answer | Back: essential reference |
|---|---|---|---|---|---|---|
| ui-01 | foundation | recall | What principle uses size, weight, placement, color and spacing to communicate what should be noticed first, second and third? | A dashboard contains all the right information but every element competes equally for attention. | Visual Hierarchy | Visual ordering of importance that guides attention and scanning. It should reflect task priority, not simply make the most decorative element largest. |
| ui-02 | foundation | recall | What principle creates meaningful visual difference so elements, priorities or states are easier to distinguish? | Primary and secondary actions look almost identical, so users hesitate. | Contrast | Difference in visual properties such as size, weight, luminance, shape or spacing. Contrast supports hierarchy and differentiation; color contrast also has accessibility requirements. |
| ui-03 | foundation | application | Which Gestalt principle says elements placed near each other are perceived as belonging together? | Labels sit closer to the wrong inputs than to the fields they describe. | Proximity | Spatial closeness implies grouping. Use spacing intentionally so related items form clear groups and unrelated items are separated. |
| ui-04 | foundation | recall | What principle creates visual order by placing elements along shared edges, baselines or axes? | Cards use slightly different left edges and text baselines, making the layout feel unstable. | Alignment | Consistent positioning along shared visual lines. Good alignment creates relationships and reduces visual noise even without visible grid lines. |
| ui-05 | foundation | recall | What principle creates coherence by deliberately reusing visual patterns such as styles, shapes and spacing? | Every settings section invents a different title style and divider treatment. | Repetition | Reuse of visual decisions to create rhythm, consistency and learnability. Repetition should be systematic rather than accidental duplication. |
| ui-06 | foundation | recall | What do you call intentionally unused space that separates groups and gives content room to breathe? | A dense pricing page becomes much easier to scan after sections and labels receive clearer spacing. | Whitespace | Empty/negative space used to establish grouping, hierarchy and readability. It is functional layout space, not “wasted” space. |
| ui-07 | foundation | recall | What structural system uses columns, rows and gutters to organize layout consistently? | Different pages need to align content even though their modules vary. | Grid | Layout framework for consistent alignment and proportional structure. A grid guides composition but does not require every element to occupy identical modules. |
| ui-08 | practice | recall | What system uses a limited, repeatable set of spacing increments instead of arbitrary gaps everywhere? | A product contains 13px, 17px, 19px and 23px gaps that are visually almost the same but hard to maintain. | Spacing Scale | Defined set of spacing values used consistently across layouts and components. A scale improves rhythm and maintainability while still allowing documented exceptions. |
| ui-09 | foundation | recall | What typographic principle differentiates headings, body, labels and supporting text according to information importance? | A long settings page uses the same size and weight for every line of text. | Typographic Hierarchy | Systematic use of type size, weight, spacing and style to communicate information levels. Hierarchy should support scan patterns and semantic structure. |
| ui-10 | practice | recall | What predefined set of font sizes provides consistent typographic steps across a product? | Designers keep creating near-duplicate font sizes for headings and labels. | Type Scale | Controlled set of text sizes used across semantic roles. It improves consistency; the ratio can be modular or custom and should serve the interface rather than a mathematical rule. |
| ui-11 | foundation | recall | What typography property controls the vertical distance between lines of text? | Body copy feels cramped even though the font size is readable. | Line Height — Leading | Vertical spacing between text baselines/line boxes. Appropriate line height improves readability and depends on font, size, line length and context. |
| ui-12 | practice | application | What typography consideration limits how wide a text column becomes so long-form reading does not require excessive eye movement? | On a desktop article page, paragraphs stretch almost the full width of a 1600px screen. | Line Length | Width of a line of text, often discussed in characters per line. Comfortable ranges depend on typography and context; avoid treating one character count as an absolute law. |
| ui-13 | foundation | recall | What approach adapts layout and components to different viewport sizes and device capabilities rather than designing one fixed canvas? | The same product must remain usable on phones, tablets and large desktop screens. | Responsive Design | Designing interfaces that adapt to available space and conditions using flexible layout, media/container queries and component behavior. It is more than shrinking a desktop screen. |
| ui-14 | foundation | distinction | What is a width or condition at which a responsive layout intentionally changes behavior or structure? | A two-column settings layout becomes a single column when there is no longer enough room for both. | Breakpoint | Threshold at which responsive styles or layout rules change. Breakpoints should be driven by content/component needs rather than only by named device models. |
| ui-15 | practice | recall | What property describes how much information and interaction is packed into a given area of interface? | A professional trading tool may need compact tables, while a first-time consumer flow benefits from more breathing room. | UI Density | Amount of information and controls presented per area. Appropriate density depends on task frequency, expertise, device and error cost; “more whitespace” is not universally better. |
| ui-16 | practice | recall | What system assigns colors by functional meaning such as background, text, accent, success, warning and danger rather than by arbitrary hex values? | A redesign must support light and dark themes without components hardcoding “blue-500” as text color. | Semantic Color Roles | Colors named and applied by purpose rather than raw value. Semantic roles improve theming, accessibility management and design-system consistency. |

## 13 — Design Systems (16)

| ID | Level | Mode | Front question | Real-world scenario | Answer | Back: essential reference |
|---|---|---|---|---|---|---|
| ds-01 | foundation | recall | What is the shared system of reusable design decisions, components, guidance and governance used to build a product consistently at scale? | Five squads keep rebuilding buttons, forms and patterns differently, creating design and code drift. | Design System | A connected set of reusable foundations, components, patterns, documentation and operating practices. It is more than a UI kit because governance, maintenance and adoption are part of the system. |
| ds-02 | foundation | recall | What named value stores a reusable design decision such as a color, spacing, typography or duration value independently of one component? | Instead of hardcoding `#111111` in dozens of places, teams reference a shared named value. | Design Token | A named representation of a design decision that can be shared across tools and platforms. Modern token systems can include type, value, description and references/aliases. |
| ds-03 | practice | distinction | What kind of token represents a raw foundational value without yet expressing its UI purpose? | The system stores a palette value such as `blue-600` that other tokens may reference. | Primitive / Reference Token | Foundational token representing a raw reusable value such as a palette color or spacing step. It is usually not the preferred token for direct component usage when semantic roles are available. |
| ds-04 | practice | distinction | What kind of token is named by purpose, such as `text-primary` or `surface-danger`, so the underlying value can change by theme? | Dark mode needs the same “primary text” role to resolve to a different color than light mode. | Semantic Token | Token whose name expresses design intent or usage rather than raw value. Semantic tokens support theming, consistency and clearer cross-functional vocabulary. |
| ds-05 | advanced | recall | What token mechanism lets one token's value reference another token instead of duplicating the raw value? | `text-primary` should follow the current neutral foreground token rather than copy its color manually. | Token Alias / Reference | A token value that references another token. Aliasing creates relationships between layers of the token system and makes theme/value changes propagate consistently. |
| ds-06 | practice | recall | What system capability lets the same semantic design decisions resolve differently for contexts such as light, dark or high-contrast themes? | `surface-default` needs one value in light mode and another in dark mode while components keep the same semantic reference. | Mode / Theme | Contextual set of token values or component styling rules for a visual theme or mode. Components should depend on semantic intent rather than hardcoded theme-specific values. |
| ds-07 | foundation | recall | What reusable UI building block packages structure, styling and behavior for repeated use? | Buttons, checkboxes and dialogs should not be redrawn and reimplemented from scratch on every screen. | Component | Reusable interface building block with defined structure, states and behavior. A component should have a clear purpose and documented usage, not exist only because elements look similar. |
| ds-08 | foundation | recall | What represents a legitimate variation of the same component, such as size, hierarchy or state, without creating a separate unrelated component? | A button can be primary or secondary and small or large while keeping the same core component behavior. | Variant | Defined variation within a component family. Variants should represent meaningful supported differences rather than every accidental visual combination. |
| ds-09 | advanced | recall | What describes the documented properties, states, slots and behaviors through which teams configure and use a component? | Designers and developers need the same understanding of what a dialog allows: size, title, actions, dismiss behavior and states. | Component API | Contract describing configurable inputs and supported behavior of a component. A clear API reduces one-off overrides and improves design–code alignment. |
| ds-10 | practice | distinction | What reusable solution combines multiple components and behavior to solve a recurring user problem rather than defining one atomic control? | Search with filters, empty results and pagination repeats across several products. | UI Pattern | Reusable interaction/composition solution for a recurring problem. Patterns are larger and more contextual than individual components. |
| ds-11 | practice | recall | What operating model defines who makes design-system decisions, how standards are maintained and how teams adopt them? | Everyone can edit the library, but nobody owns quality, accessibility, releases or breaking changes. | Design System Governance | Roles, decision processes and maintenance rules that keep a design system coherent over time. Governance should enable contribution without making ownership ambiguous. |
| ds-12 | practice | application | What process lets product teams propose, review and add reusable improvements to the shared system instead of keeping local forks? | A squad builds a new date-range pattern that could benefit six other teams. | Contribution Model | Defined workflow for proposing, evaluating, building, documenting and releasing additions to the design system. It balances central quality with distributed expertise. |
| ds-13 | practice | recall | What practice communicates compatible, additive and breaking changes across design-system releases? | Renaming a component property could break dozens of product implementations. | Versioning | Managing identifiable releases so consumers understand change and compatibility. Semantic versioning concepts can help in code, but design assets also need clear release communication. |
| ds-14 | practice | recall | What lifecycle state indicates that a component, token or API should no longer be used and has a preferred replacement or migration path? | An old input component still exists in products but should be replaced by the accessible new version. | Deprecation | Marking an API/component/token as obsolete while communicating why, what replaces it and how/when to migrate. Silent deletion creates avoidable breakage. |
| ds-15 | advanced | application | What condition means the documented design component and the production code component represent the same supported structure, properties and states? | Figma shows five button variants while code supports eight different behaviors and naming conventions. | Design–Code Parity | Alignment between design assets and coded components so teams share one conceptual contract. Perfect visual identity alone is not enough; props, states and behavior should also align where applicable. |
| ds-16 | advanced | application | What automated testing approach compares rendered UI against expected visuals to detect unintended styling or layout changes? | A dependency update silently changes spacing across every form field. | Visual Regression Testing | Automated comparison of rendered interface snapshots or images to detect unexpected visual changes. It complements functional and accessibility tests rather than replacing them. |

## 14 — Accessibility & Inclusive Design (18)

| ID | Level | Mode | Front question | Real-world scenario | Answer | Back: essential reference |
|---|---|---|---|---|---|---|
| a11y-01 | foundation | recall | What design approach deliberately considers a broad range of abilities, contexts and forms of exclusion instead of designing only for an assumed average user? | A team considers permanent, temporary and situational limitations when designing identity verification. | Inclusive Design | Designing with diverse people and contexts to reduce exclusion and expand usable participation. Accessibility standards are a critical part of this work but inclusive design is broader than compliance alone. |
| a11y-02 | foundation | recall | Which four principles organize WCAG accessibility requirements? | The team needs the top-level model behind web accessibility rather than memorizing isolated criteria. | POUR — Perceivable, Operable, Understandable, Robust | WCAG's four principles: content/interface must be perceivable, operable, understandable and robust. Success criteria sit under these principles. |
| a11y-03 | foundation | application | What should developers prefer before adding ARIA because native elements already carry useful meaning and behavior for assistive technology? | A clickable control was built from a styled `div`, requiring extra work for keyboard and screen-reader behavior. | Semantic HTML | Using native elements according to their meaning, such as buttons, headings, lists and form controls. Native semantics usually provide stronger accessibility and interaction behavior than generic elements recreated with scripts. |
| a11y-04 | practice | recall | What programmatically exposed text tells assistive technology what an interactive control or element is called? | An icon-only close button is visible but a screen reader announces only “button.” | Accessible Name | The name exposed to assistive technologies for an element, derived from visible text, labels, `alt`, `aria-label` or other name-calculation sources. It should match the control's purpose. |
| a11y-05 | foundation | application | What capability ensures all essential functionality can be reached and operated without requiring a mouse? | A user navigates forms and dialogs entirely with a keyboard or switch device. | Keyboard Accessibility | Interactive functionality should be operable through keyboard-compatible input where applicable. Avoid keyboard traps and ensure custom widgets implement expected keyboard behavior. |
| a11y-06 | foundation | recall | What visual treatment lets keyboard users see which interactive element currently has focus? | Tabbing moves through buttons but the design removed the browser outline and provides no replacement. | Visible Focus Indicator | Perceivable styling that shows keyboard focus. Do not remove focus indication without providing an accessible alternative with sufficient visibility. |
| a11y-07 | practice | application | What requirement ensures keyboard focus moves through controls in an order that preserves meaning and operability? | A visually reordered checkout causes Tab to jump from payment back to shipping and then to the header. | Logical Focus Order | Focus sequence should preserve the intended meaning and operation of the interface. Visual CSS reordering must not create a confusing keyboard sequence. |
| a11y-08 | foundation | recall | What WCAG measure checks whether text is visually distinguishable enough from its background? | Light gray body text on white looks elegant but is difficult for many users to read. | Text Contrast Ratio | WCAG 2.2 AA generally requires at least **4.5:1 for normal text** and **3:1 for large text**, with defined exceptions. Contrast is based on relative luminance, not subjective appearance. |
| a11y-09 | practice | distinction | What WCAG requirement applies contrast to important UI component boundaries and graphical objects, not just text? | An input border and focus control are so faint that users cannot perceive where interaction is possible. | Non-text Contrast | WCAG criterion requiring sufficient contrast for visual information needed to identify UI components and graphical objects, generally **3:1** against adjacent colors where the criterion applies. |
| a11y-10 | practice | recall | What WCAG 2.2 criterion sets a minimum pointer target size or sufficient spacing for small targets? | Tiny icon buttons are packed closely together on mobile, making accidental activation likely. | Target Size (Minimum) — WCAG 2.5.8 | WCAG 2.2 AA requires pointer targets to be at least **24 × 24 CSS pixels** or meet specified spacing/other exceptions. Larger targets may still be preferable for usability. |
| a11y-11 | practice | application | What WCAG 2.2 requirement says functionality based on dragging should also be possible with a simple pointer action unless dragging is essential? | Reordering items works only by click-and-drag, which some users cannot perform accurately. | Dragging Movements — WCAG 2.5.7 | If functionality uses dragging, provide a single-pointer alternative such as buttons or menus unless dragging is essential or controlled by the user agent. |
| a11y-12 | foundation | application | What text alternative should communicate the purpose or relevant content of a meaningful image to someone who cannot see it? | A chart image conveys quarterly sales but has no equivalent description. | Alt Text — Text Alternative | Concise alternative describing the relevant purpose/content of non-text content. Decorative images should usually be ignored by assistive technology rather than described needlessly. |
| a11y-13 | foundation | application | What synchronized text alternative makes spoken audio in video available to people who cannot hear it? | A product tutorial relies on narration to explain steps that are not visible in the video itself. | Captions | Synchronized text representing speech and relevant non-speech audio in video. Prerecorded multimedia accessibility may also require transcripts or audio description depending on content and criteria. |
| a11y-14 | practice | application | What user preference should animations respect when motion could trigger discomfort or make the interface harder to use? | A parallax-heavy onboarding experience makes some users dizzy. | Reduced Motion | Support preferences such as `prefers-reduced-motion` and remove/reduce non-essential motion. Essential state changes should remain understandable without relying on dramatic animation. |
| a11y-15 | practice | distinction | What specification adds accessibility semantics to web content when native HTML alone cannot express a custom widget correctly? | A custom tree control needs programmatic roles, states and relationships for assistive technology. | ARIA — Accessible Rich Internet Applications | WAI-ARIA defines roles, states and properties for accessibility semantics. **No ARIA is better than bad ARIA**; use native HTML whenever it already provides the correct semantics and behavior. |
| a11y-16 | advanced | application | What WCAG 2.2 principle prevents login from depending on cognitive tests such as memorizing or transcribing information when accessible alternatives can be provided? | A login requires users to remember a password and manually retype a one-time code with no password-manager or copy/paste support. | Accessible Authentication — WCAG 3.3.8 | WCAG 2.2 AA limits cognitive-function tests in authentication unless an allowed alternative/mechanism is provided. Support mechanisms such as password managers and copy/paste rather than blocking them unnecessarily. |
| a11y-17 | practice | application | What WCAG 2.2 requirement says information already entered in the same process should not be requested again unnecessarily? | A multi-step checkout asks the user to retype the same address on two consecutive screens. | Redundant Entry — WCAG 3.3.7 | Previously entered information required again in the same process should be auto-populated or selectable, with defined exceptions such as essential/security reasons. |
| a11y-18 | practice | application | What accessibility behavior lets content remain usable when users zoom or the viewport becomes narrow without forcing two-dimensional scrolling for ordinary text content? | At 400% zoom, labels overlap and users must pan horizontally for every line. | Reflow | WCAG reflow requirements support reading and operation at narrow equivalent viewport widths without loss of information/functionality, except for content that genuinely requires two-dimensional layout. |

## 15 — Delivery & Cross-functional Collaboration (14)

| ID | Level | Mode | Front question | Real-world scenario | Answer | Back: essential reference |
|---|---|---|---|---|---|---|
| dl-01 | foundation | recall | In Scrum, what is the ordered, evolving list of work needed to improve the product? | New learning continually changes what the team may need to build or fix next. | Product Backlog | Emergent ordered list of what is needed to improve the product and the single source of work undertaken by the Scrum Team. It evolves as the team learns. |
| dl-02 | foundation | distinction | In Scrum, what plan contains the Sprint Goal, selected Product Backlog items and the actionable plan for delivering them? | During a Sprint, developers update their plan as they learn more about the work. | Sprint Backlog | Plan by and for the Developers containing the Sprint Goal, selected backlog items and delivery plan. It is updated throughout the Sprint. |
| dl-03 | foundation | recall | In Scrum, what fixed-length container of one month or less turns ideas into value and contains the other Scrum events? | A team works in repeating two-week cycles that include planning, daily work, review and retrospective. | Sprint | Fixed-length Scrum event of one month or less. A new Sprint starts immediately after the previous one; scope may be clarified while the Sprint Goal is protected. |
| dl-04 | foundation | recall | What single objective gives a Scrum Sprint coherence and focus while allowing flexibility in the exact work? | Several backlog items change, but the team still needs one reason why the Sprint matters. | Sprint Goal | The single objective for the Sprint. It provides focus and flexibility: teams may renegotiate scope without undermining the goal. |
| dl-05 | foundation | recall | What shared quality commitment defines what must be true for completed work to count as done? | One team calls a feature “done” before accessibility testing while another includes release-ready quality checks. | Definition of Done | Formal description of the state of the Increment when it meets required quality measures. It creates shared transparency about completion. |
| dl-06 | practice | recall | What ongoing activity breaks down and further defines backlog items so future work becomes clearer and appropriately sized? | A large vague request is discussed, split and clarified before the team considers selecting it for a Sprint. | Product Backlog Refinement | Ongoing activity of breaking down and further defining Product Backlog items, adding details such as description, order and size. It is not a formal Scrum event. |
| dl-07 | foundation | distinction | Which Scrum event inspects the Sprint's outcome with stakeholders and adapts what to do next? | The team demonstrates working outcomes and discusses changed market conditions with stakeholders. | Sprint Review | Working session near the end of the Sprint to inspect results and adapt the Product Backlog based on what changed. It is not merely a presentation/demo ceremony. |
| dl-08 | foundation | distinction | Which Scrum event focuses on improving the team's quality and effectiveness rather than reviewing the product outcome? | After delivery, the team discusses collaboration, process, tools and how to work better next Sprint. | Sprint Retrospective | Event for inspecting how the Sprint went and planning improvements to quality and effectiveness. It focuses on the team's way of working. |
| dl-09 | foundation | recall | What lightweight requirement format commonly states “As a…, I want…, so that…” to express user value? | A backlog item needs to communicate who needs something and why without becoming a full design specification. | User Story | Short agile requirement format intended to trigger conversation about user need and value. The template is optional; a user story is not a substitute for shared understanding or acceptance criteria. |
| dl-10 | foundation | recall | What conditions define how the team will determine whether a specific backlog item or feature behavior is acceptable? | Designers and engineers disagree on whether an empty search result counts as complete behavior. | Acceptance Criteria | Testable conditions a specific item must satisfy. They clarify expected behavior and edge cases; unlike Definition of Done, they are item-specific. |
| dl-11 | foundation | recall | What flow-based method visualizes work and manages it continuously rather than requiring fixed Sprints? | A support/product team handles a steady stream of work with changing priorities and wants to optimize flow. | Kanban | Method for visualizing and managing workflow, limiting work in progress and improving flow. It can coexist with other agile practices. |
| dl-12 | practice | application | What policy limits how many items may be actively worked on at once so the team finishes more instead of starting everything? | Ten tasks are “in progress,” blockers accumulate and almost nothing reaches done. | WIP Limit — Work in Progress Limit | Explicit cap on concurrent work in a workflow state. WIP limits expose bottlenecks, reduce multitasking and support smoother flow. |
| dl-13 | practice | distinction | Which flow metric measures elapsed time from when work actually starts until it is finished? | An item waits in backlog for a month, then takes four days from development start to completion. | Cycle Time | Elapsed time from work start to completion according to the workflow definition. It focuses on active delivery flow and differs from total lead time. |
| dl-14 | practice | distinction | Which flow metric measures total elapsed time from request/commitment to delivery, including waiting before active work begins? | A customer request waits three weeks before implementation and then takes four days to finish. | Lead Time | Time from a defined request/commitment point until delivery. It includes queue/waiting time and therefore reflects the customer's broader wait more than cycle time. |

## 16 — Business, Freelance & Client Work (14)

| ID | Level | Mode | Front question | Real-world scenario | Answer | Back: essential reference |
|---|---|---|---|---|---|---|
| biz-01 | foundation | recall | What concise document aligns everyone on the problem, goals, audience, constraints and context before work begins? | A client says “redesign the dashboard,” but the team needs to understand why, for whom and under what constraints. | Project Brief | Shared framing of the project context, problem, objectives, audience, constraints and relevant background. A brief should guide decisions without pretending unknowns are already resolved. |
| biz-02 | foundation | recall | What defines what work is included and excluded from an engagement? | A website project quietly expands from five templates to an app, design system and content migration. | Scope | Explicit boundary of work, responsibilities and included outcomes. Clear exclusions and assumptions are as important as the included work for preventing uncontrolled expansion. |
| biz-03 | foundation | distinction | What is a concrete output that a freelancer, agency or team commits to provide? | The engagement includes a research report, prototype and design-system specification. | Deliverable | Tangible agreed output of the work. Deliverables should not be confused with the business outcome they are intended to support. |
| biz-04 | foundation | recall | What document explains the recommended approach, value, scope, timing and commercial terms before a client awards the work? | A consultant responds to a prospective client's need with a tailored plan and price. | Proposal | Persuasive commercial document presenting understanding of the problem, recommended approach, scope and terms. It precedes or accompanies a formal contract/SOW depending on the engagement. |
| biz-05 | practice | recall | What formal project document specifies scope, deliverables, responsibilities, timeline, assumptions and acceptance/commercial terms? | Both parties need a contract attachment that makes the engagement boundaries operationally clear. | SOW — Statement of Work | Detailed agreement describing the work to be performed and how it will be governed. Exact legal role varies by contract structure and jurisdiction. |
| biz-06 | foundation | distinction | What pricing model charges one agreed amount for a defined scope rather than billing each hour worked? | A client buys a clearly bounded research-and-design package for €12,000. | Fixed Fee | Price agreed for a defined scope/output. The supplier takes more delivery-efficiency risk, so assumptions, change control and scope clarity matter. |
| biz-07 | foundation | distinction | What commercial model bills for the actual time spent and sometimes pass-through materials or expenses? | The work is exploratory and requirements are expected to change weekly. | Time & Materials — T&M | Billing model based on actual labor time and agreed rates, plus eligible materials/expenses where applicable. It offers flexibility but requires transparent tracking and budget management. |
| biz-08 | practice | recall | What commercial arrangement reserves ongoing access or capacity for a recurring fee? | A startup wants a designer available every month for product work rather than commissioning isolated projects. | Retainer | Recurring agreement that secures defined services, capacity or availability over time. Terms should state what is included, rollover rules and response expectations. |
| biz-09 | foundation | application | What formal mechanism handles requested work that falls outside the agreed scope and changes cost, timing or deliverables? | Halfway through the project, the client asks to add a second platform and twenty new screens. | Change Request | Documented request to alter agreed scope, requirements, cost or schedule. A clear change-control process protects both client flexibility and delivery boundaries. |
| biz-10 | practice | application | What artifact identifies relevant people, their influence, interests and relationship to a project so engagement can be planned? | A redesign stalls because the team spoke only with users and ignored legal, support and the executive sponsor. | Stakeholder Map | Structured view of people/groups affected by or influential over a project. It helps plan involvement, communication and decision pathways. |
| biz-11 | foundation | recall | What role has the authority to make or approve the final call when stakeholders disagree? | Five stakeholders provide feedback, but nobody knows whose decision determines whether the design ships. | Decision Maker | Person or defined role with authority for the relevant decision. Clarifying decision rights prevents endless consensus-seeking and conflicting feedback. |
| biz-12 | foundation | recall | What is a significant checkpoint used to track progress or trigger review, payment or a project decision? | Payment is due after research completion and again after prototype approval. | Milestone | Meaningful project checkpoint tied to progress, delivery, review or commercial terms. A milestone is not necessarily a task or exact calendar date by itself. |
| biz-13 | practice | recall | What contract concept defines who owns or may use the design, code, content and other work created during an engagement? | A freelancer finishes a brand system, but the contract is unclear about whether the client receives ownership or only usage rights. | Intellectual Property Rights — IP Rights | Legal rights governing ownership, licensing and permitted use of created work. Assignment and licensing are different; exact terms should be explicit and jurisdiction-appropriate. |
| biz-14 | foundation | recall | What agreement restricts disclosure or use of specified confidential information shared during a business relationship? | A startup shares unreleased product plans and customer data during vendor evaluation. | NDA — Non-Disclosure Agreement | Contract defining confidential information and obligations around its use/disclosure. An NDA does not replace appropriate data security, privacy terms or a full services contract. |

## 17 — Technical & Web Vocabulary (16)

| ID | Level | Mode | Front question | Real-world scenario | Answer | Back: essential reference |
|---|---|---|---|---|---|---|
| tech-01 | foundation | recall | What part of a digital product runs in or presents the user-facing interface on the client side? | A designer reports a broken modal layout that appears in the browser even though the server data is correct. | Frontend | User-facing application layer responsible for rendering interface and handling client-side interaction. The exact boundary varies across web, mobile and server-rendered architectures. |
| tech-02 | foundation | distinction | What part of a product typically handles server-side business logic, data access and services not directly rendered as UI? | The interface sends a request to create an order, and server logic validates inventory and stores the transaction. | Backend | Server-side systems and services that implement business logic, data access and integrations. A backend may consist of one service or many distributed services. |
| tech-03 | foundation | recall | What defined interface lets one software system request data or actions from another? | A mobile app needs a documented way to retrieve account data from the company's service. | API — Application Programming Interface | Contract for software interaction. APIs define available operations, inputs, outputs and behavior so systems can communicate without sharing internal implementation. |
| tech-04 | practice | distinction | What common web API style models resources and uses HTTP methods such as GET, POST, PATCH and DELETE? | A product exposes `/users/123` and `/orders/456` endpoints over HTTP. | REST — Representational State Transfer | Architectural style commonly used for resource-oriented web APIs. Real “REST APIs” vary widely; the label should not be treated as a guarantee of one exact implementation. |
| tech-05 | practice | distinction | What API query language lets clients request exactly the fields they need through a typed schema, often from a single endpoint? | A dashboard needs different combinations of nested customer data on different screens without many fixed REST responses. | GraphQL | Query language and runtime for APIs based on a typed schema. Clients specify requested fields; this flexibility also requires thoughtful authorization, performance and schema design. |
| tech-06 | foundation | recall | What specific API address or operation receives a request for a particular resource or capability? | Engineering asks which URL the client should call to submit a support ticket. | Endpoint | Addressed API location/operation through which a client accesses a capability or resource. In some API styles, “operation” is more accurate than thinking only in URLs. |
| tech-07 | foundation | recall | What pair describes data sent to a service and the result returned by that service? | The app sends an order payload and receives either the created order or an error. | Request / Response | A request asks a service to perform or return something; a response communicates the result, status and data. This pattern underlies common HTTP/API interactions. |
| tech-08 | foundation | recall | What three-digit HTTP value communicates the high-level result of a web request, such as success, client error or server error? | The API returns `404` when an object does not exist and `500` when the server fails unexpectedly. | HTTP Status Code | Standard code indicating request outcome classes such as 2xx success, 4xx client-side/request conditions and 5xx server errors. The code should match the actual semantics of the result. |
| tech-09 | practice | application | What mechanism sends an HTTP notification to another system when an event occurs instead of making that system constantly poll for changes? | A payment provider tells your backend immediately when a charge succeeds. | Webhook | Event-driven HTTP callback sent from one system to another. Consumers should handle verification, retries, duplication/idempotency and out-of-order delivery where relevant. |
| tech-10 | foundation | recall | What persistent system stores and organizes application data for later retrieval and update? | Accounts, projects and permissions must survive after the user closes the app. | Database | System for persistent structured or semi-structured data storage and querying. Database choices involve trade-offs in consistency, querying, scale and operations. |
| tech-11 | practice | application | What temporary storage keeps frequently used data closer to where it is needed so repeated work or network access is reduced? | A dashboard repeatedly requests the same expensive data and feels slow even though that data changes only every few minutes. | Cache | Temporary stored copy of data or computation used to improve speed and reduce load. Cache invalidation and staleness rules are essential because cached data can become outdated. |
| tech-12 | practice | recall | What distributed network serves static or cached content from locations closer to users to reduce delivery time and origin load? | Users in Australia download the same images from a server located only in Europe and experience unnecessary delay. | CDN — Content Delivery Network | Distributed edge network that serves content closer to users. CDNs commonly improve latency, resilience and bandwidth efficiency for cacheable assets and web delivery. |
| tech-13 | foundation | recall | What term describes the delay between initiating an action/request and receiving the relevant response? | An AI assistant eventually returns a good answer, but users wait eight seconds after pressing Send. | Latency | Time delay in a system interaction. Users perceive different parts of latency, so teams may track network, server, model and end-to-end response timings separately. |
| tech-14 | foundation | distinction | What security process verifies that a user or system is who it claims to be? | A person signs in using passkey, password or another identity mechanism. | Authentication — AuthN | Verification of identity. Authentication answers **“Who are you?”** and is distinct from authorization, which decides what that identity may do. |
| tech-15 | foundation | distinction | What security process determines what an authenticated identity is allowed to access or change? | Two employees can sign in, but only an admin may change billing settings. | Authorization — AuthZ | Rules determining permitted actions/resources for an identity. Authorization answers **“What are you allowed to do?”** and must be enforced on trusted server-side boundaries, not only hidden in UI. |
| tech-16 | foundation | recall | What architecture separates a requester/user-facing application from a service that processes requests and provides resources? | A browser requests product data from a remote application service and renders the response. | Client–Server Model | Architecture where clients request services/resources from servers. Modern systems may add edge, peer, local and distributed layers, but the client–server distinction remains useful vocabulary. |

## 18 — AI Product & LLM Vocabulary (20)

| ID | Level | Mode | Front question | Real-world scenario | Answer | Back: essential reference |
|---|---|---|---|---|---|---|
| ai-01 | foundation | recall | What type of model is trained on large amounts of language data to generate or transform text and often other modalities? | A product can summarize documents, answer questions and generate structured text from instructions. | LLM — Large Language Model | A large learned model capable of language understanding/generation tasks. Modern products may use LLMs as one component inside a larger system with tools, retrieval, rules and evaluation. |
| ai-02 | foundation | recall | What is the small unit of text or other model input/output that model limits and usage costs are commonly measured in? | A long document consumes far more model capacity than its visible character count alone suggests. | Token | Unit produced by a model's tokenizer and used to represent input/output. A token is not the same as a word; tokenization varies by model and language. |
| ai-03 | foundation | recall | What limit describes how much input, conversation history and often generated output a model can consider in one inference? | A support assistant begins forgetting early parts of a very long conversation because too much material is included. | Context Window | Maximum token capacity available to a model for a request/conversation context under the model's rules. Large context does not guarantee equally strong attention to every included detail. |
| ai-04 | foundation | recall | What is the instruction and context given to a generative model to shape the task and desired output? | A product provides role, constraints, user request and examples before asking the model to draft a result. | Prompt | Input instructions/context used to guide model behavior. In production systems, prompting is only one layer; tools, retrieval, schemas, permissions and evals often matter just as much. |
| ai-05 | practice | recall | What numeric vector representation lets semantically similar pieces of content be compared by meaning rather than exact words? | Search should find “cancel my subscription” when the stored article says “terminate membership.” | Embedding | Learned vector representation of content used for semantic similarity, clustering, retrieval and related tasks. Embeddings are commonly indexed in vector-capable storage for retrieval. |
| ai-06 | practice | application | What architecture retrieves relevant external information and supplies it to a generative model at request time? | An assistant must answer from current company documentation without retraining the base model every time a policy changes. | RAG — Retrieval-Augmented Generation | Retrieval step finds relevant external content and adds it to model context before generation. RAG can improve freshness and grounding, but retrieval quality and citation/evaluation still matter. |
| ai-07 | practice | distinction | What practice connects model output to verifiable source data, tools or retrieved evidence so answers are less dependent on unsupported model memory? | A legal assistant must answer from the customer's approved policy corpus and show supporting references. | Grounding | Constraining or supporting generation with authoritative context or external evidence. Grounding reduces unsupported claims but does not guarantee factual correctness. |
| ai-08 | foundation | recall | What do you call a model output that presents unsupported or incorrect information as if it were valid? | An assistant invents a policy clause that does not exist in any supplied document. | Hallucination | Generated content that is unsupported, fabricated or inconsistent with the relevant source/ground truth. Product design should manage the risk through grounding, tools, uncertainty handling and evals. |
| ai-09 | practice | application | What capability lets a model choose and invoke defined external functions or tools instead of only generating text? | An assistant checks inventory, creates a calendar event and retrieves account data through approved functions. | Tool Use / Function Calling | Model capability to select structured tools/functions and provide arguments for external execution. Tools expand capability but require permissions, validation, error handling and clear user control. |
| ai-10 | practice | recall | What AI system can decide among steps, tools and intermediate actions in pursuit of a user goal rather than returning one fixed completion? | A travel assistant searches options, compares them, checks constraints and performs approved actions across several steps. | Agent | AI system that can manage a goal through iterative reasoning/decision steps and tool use. Product teams must define permissions, stopping conditions, observability and human control. |
| ai-11 | advanced | distinction | What workflow allows an AI system to plan, act, observe results and continue across multiple steps instead of following a single predetermined sequence? | The system retries a failed data lookup with another tool and adjusts its next step based on the result. | Agentic Workflow | Multi-step workflow where model-driven decisions influence which actions/tools occur next. “Agentic” does not mean unlimited autonomy; boundaries and approvals should be explicit. |
| ai-12 | practice | recall | What open protocol standardizes how AI applications connect to external tools, resources and contextual systems? | The same company knowledge/search tool should be usable by multiple compatible AI clients without bespoke integration for each one. | MCP — Model Context Protocol | Open protocol for connecting AI applications with tools, resources and related context. By 2026 MCP is a major interoperability term; implementations still require security, authorization and trust boundaries. |
| ai-13 | practice | application | What output method constrains model responses to a defined machine-readable schema instead of hoping free-form text happens to parse? | A workflow needs guaranteed fields such as `name`, `risk_level` and `recommended_action` for downstream software. | Structured Outputs | Model output constrained to a specified structure/schema, commonly JSON Schema. It improves reliability of shape and types but does not guarantee the semantic truth of values. |
| ai-14 | foundation | recall | What systematic tests measure whether an AI system performs acceptably on defined tasks and failure cases? | A team changes the model and prompt and needs evidence that answer quality improved without increasing unsafe behavior. | Evals — Evaluations | Repeatable datasets, criteria and grading methods used to assess model/system behavior. Strong eval suites include representative success cases, edge cases and important failure modes. |
| ai-15 | practice | application | What workflow keeps a person responsible for review, approval or intervention at critical steps instead of allowing fully autonomous execution? | AI drafts customer refunds, but a support agent must approve high-value cases before money moves. | Human in the Loop — HITL | System design where humans review, approve, correct or take over at defined points. Use it based on risk and accountability, not as a vague promise that “a human is somewhere involved.” |
| ai-16 | advanced | recall | What attack tries to manipulate an AI system by placing malicious instructions in user input, retrieved content or external data? | A webpage retrieved by an agent contains hidden text telling the model to ignore policy and expose secrets. | Prompt Injection | Adversarial instructions attempting to override intended behavior through model-visible content. Treat external content as untrusted data and enforce security outside the model, not only through prompts. |
| ai-17 | practice | recall | What broad term describes controls that constrain unsafe, disallowed or unwanted AI behavior before, during or after model execution? | A healthcare assistant needs policy checks, restricted tools, moderation and escalation around model responses. | AI Guardrails | Layered controls such as permissions, validation, policy filters, tool restrictions, rate limits, monitoring and human escalation. Guardrails should be system-level defenses, not a single “be safe” prompt. |
| ai-18 | foundation | recall | What capability lets one model or AI system work across more than one data type such as text, images, audio or video? | A support assistant reads a screenshot, listens to a voice note and replies in text. | Multimodal AI | AI capable of processing and/or producing multiple modalities. Product design must account for modality-specific latency, accessibility, privacy and error modes. |
| ai-19 | practice | distinction | What adaptation method further trains a pretrained model on curated examples or task/domain data rather than only changing the prompt at runtime? | A company repeatedly needs a specialized response style and task behavior that prompting alone does not reliably provide. | Fine-tuning | Additional training that adapts a pretrained model using selected data. It can improve behavior for suitable tasks, but it is not the default solution for injecting frequently changing factual knowledge. |
| ai-20 | practice | recall | What do you call the runtime process of using a trained model to produce a prediction or generated output from new input? | The model is already trained; every user request now consumes compute to generate a response. | Inference | Execution of a trained model on new input. Product teams often optimize inference for quality, latency, throughput and cost rather than treating “the model” as the entire product. |

---

# 8. Implementation requirements

## 8.1 Inspect before changing

OpenCode must first locate:

- current training-card data source(s);
- card rendering component(s);
- front/back field mapping;
- swipe, flip or reveal behavior;
- category/filter controls;
- progress counters;
- randomization/shuffle behavior;
- local storage/database state;
- any card IDs referenced by persisted progress;
- tests or snapshots related to the deck.

Then implement the new dataset in the **existing canonical location**.

Do not leave old content active in another file unless it is intentionally archived outside the runtime path.

## 8.2 Preserve interaction and visual system

This task is primarily a **content architecture and data migration**, not a visual redesign.

Do not change without necessity:

- card dimensions;
- typography system;
- spacing tokens;
- colors/themes;
- border radius;
- shadows;
- page composition;
- swipe gestures;
- animations;
- navigation;
- responsive behavior.

If the current visual component cannot fit the canonical text safely, solve it using the smallest existing-system-compatible adjustment, such as existing responsive text sizing/overflow behavior. Do not invent a new card design.

## 8.3 Front rendering

Required visible order:

1. optional existing category/level metadata if already part of the design;
2. **large `frontQuestion`**;
3. **short `frontScenario`** below it;
4. existing interaction affordance/reveal/swipe UI.

Never display `answer`, `backInfo`, aliases or formula on the front.

## 8.4 Back rendering

Required visible order:

1. **`answer` as the primary heading**;
2. `backInfo`;
3. optional `formula` / caveat if represented separately by the implementation.

If the existing card has only one back-body text field, merge the short formula/caveat into that field without changing meaning.

## 8.5 Category behavior

Use the 18 canonical categories above. If the current UI supports fewer top-level filters, preserve the detailed category value in data and map it to broader UI groups without deleting information.

Suggested broader UI grouping if needed:

- **Product** — 01, 02, 03, 04, 07, 08, 09
- **UX Research** — 05, 06
- **Design** — 10, 11, 12, 13, 14
- **Delivery & Business** — 15, 16
- **Tech & AI** — 17, 18

Do not flatten all cards into one undifferentiated list if the current product already supports useful category filtering.

## 8.6 Difficulty and learning mode

Preserve `level` and `mode` in the data even if the current UI does not display them yet. They enable future modes such as:

- Foundation-only onboarding;
- mixed practice;
- advanced rounds;
- “distinction only” drills;
- adaptive repetition.

Do **not** build those new features in this task unless the codebase already contains them. This task is content-system preparation, not scope expansion.

---

# 9. Migration policy for the current ~80 cards

1. Do not preserve a card merely because it already exists.
2. Match old cards against the canonical 300 by concept.
3. If an old concept exists in the canonical set, replace its text with canonical text and use the canonical ID.
4. Remove duplicate old concepts.
5. Remove irrelevant, vague, invented or misleading cards.
6. Do not append the 300 cards on top of the old 80 and end up with ~380 mixed-quality records.
7. Final active v1 deck = **exactly 300 canonical cards**, unless a technical duplicate is discovered during QA and documented before correction.
8. Preserve user progress only where a safe semantic mapping from an old card to a canonical card can be made. Do not map unrelated cards solely to preserve a count.

---

# 10. Semantic QA

Before considering the task complete, validate every card against these rules.

### Front-side QA

- [ ] Does the front ask what the concept **does / measures / helps decide / describes**?
- [ ] Is the professional term absent from the front?
- [ ] Could a learner logically infer the answer from meaning?
- [ ] Is the scenario realistic and no longer than necessary?
- [ ] Does the scenario add context instead of restating the question?

### Back-side QA

- [ ] Is the exact professional term first?
- [ ] Is the definition accurate and concise?
- [ ] Is the most useful distinction/caveat included where necessary?
- [ ] Is a formula included only when commonly useful?
- [ ] Are denominator/time-window assumptions explicit for metrics where they matter?
- [ ] Does the back avoid turning into an article?

### Vocabulary QA

- [ ] Abbreviations are expanded at least in the answer or back reference where useful.
- [ ] Common industry synonyms are not treated as different concepts unless their meaning genuinely differs.
- [ ] Authentication vs authorization are not conflated.
- [ ] Adoption vs engagement vs retention are not conflated.
- [ ] Customer churn vs revenue churn are not conflated.
- [ ] NRR vs GRR are not conflated.
- [ ] User research methods are not presented as interchangeable.
- [ ] Qualitative evidence is not described as statistical proof.
- [ ] Experiment significance is not described as “probability the hypothesis is true.”
- [ ] Framework scores are not presented as objective truth.

---

# 11. 2026-specific accuracy checks

The implementation must preserve these current distinctions:

1. **Core Web Vitals:** use **LCP, INP, CLS**. Do not teach FID as a current Core Web Vital.
2. **WCAG:** use **WCAG 2.2** as the current W3C Recommendation reference for this deck; relevant 2.2 additions include Focus Not Obscured, Dragging Movements, Target Size (Minimum), Redundant Entry and Accessible Authentication.
3. **WCAG target size:** card `a11y-10` correctly teaches the WCAG 2.2 AA minimum as 24 × 24 CSS pixels with exceptions; do not casually replace it with a different platform guideline.
4. **Design tokens:** the Design Tokens Community Group published its first stable format specification in 2025; token, type, group and alias/reference language is now appropriate 2026 vocabulary.
5. **Continuous Discovery:** Opportunity Solution Trees and continuous discovery remain mainstream, actively used product-discovery vocabulary in 2026.
6. **Scrum:** the current official Scrum Guide remains the November 2020 version as of this document date; use its current terminology rather than older “Development Team” wording.
7. **AI product:** teach system-level concepts, not model-brand trivia. RAG, agents, tool use, MCP, structured outputs, evals, prompt injection and human approval patterns are relevant production vocabulary in 2026.
8. Do not add “AI” to established non-AI concepts simply to make the deck sound current.

---

# 12. Functional / visual QA

After content migration, verify at minimum:

- [ ] all 300 active records load;
- [ ] IDs are unique;
- [ ] no empty required fields;
- [ ] no accidental duplicate answers with identical learning purpose;
- [ ] no card front contains its answer term or obvious abbreviation leakage;
- [ ] special characters, apostrophes, en dashes and multiplication symbols render correctly;
- [ ] long terms such as “Opportunity Solution Tree” and “Customer Lifetime Value” do not break layout;
- [ ] both light and dark themes remain correct if the site supports them;
- [ ] desktop and mobile card layouts remain readable;
- [ ] swipe/flip/reveal interaction still works;
- [ ] progress/count shows the correct deck size;
- [ ] filtering/shuffling does not lose or duplicate records;
- [ ] persisted state does not crash because array indices changed;
- [ ] accessibility behavior of the existing card interaction is not degraded;
- [ ] no unrelated pages/components were visually changed.

---

# 13. Suggested automated content assertions

Where practical, add low-cost tests or validation scripts for the dataset:

```ts
expect(cards).toHaveLength(300);
expect(new Set(cards.map(c => c.id)).size).toBe(300);

for (const card of cards) {
  expect(card.id).toBeTruthy();
  expect(card.category).toBeTruthy();
  expect(card.frontQuestion).toBeTruthy();
  expect(card.frontScenario).toBeTruthy();
  expect(card.answer).toBeTruthy();
  expect(card.backInfo).toBeTruthy();
}
```

Also implement a case-insensitive content check that flags when the complete `answer` string is accidentally present in `frontQuestion` or `frontScenario`. Review abbreviations manually because some are ordinary letter sequences.

---

# 14. Definition of done

The task is complete only when:

1. the website uses the canonical 300-card dataset in production/runtime code;
2. the old inaccurate ~80-card content is no longer the active source;
3. every card follows the Front → Think → Reveal → Back learning model;
4. card content covers the full 18-domain taxonomy;
5. visible content is professional English suitable for real product work in 2026;
6. current visual design and behavior are preserved;
7. all IDs are stable and unique;
8. semantic and factual QA passes;
9. responsive and theme QA passes;
10. OpenCode reports exactly which files were changed and any old progress IDs that could/could not be safely migrated.

---

# 15. Reference baseline used for 2026 validation

These are **verification references**, not copy sources. Do not paste source text into the product.

- **Amplitude — Product Metrics / Product Analytics:** current lifecycle vocabulary around activation, engagement, retention, feature adoption, funnels, cohorts and monetization.
- **Google Search / Web Vitals documentation:** current Core Web Vitals = LCP, INP, CLS.
- **W3C Web Content Accessibility Guidelines (WCAG) 2.2** and WAI “What's New in WCAG 2.2”.
- **Design Tokens Community Group / W3C Community Group:** Design Tokens Format Module 2025.10, first stable specification used as 2026 token vocabulary baseline.
- **Product Talk / Teresa Torres:** continuous discovery and Opportunity Solution Tree practice, including active 2026 materials.
- **Official Scrum Guide:** November 2020 remains the current official version at the 2026-08-29 verification date.
- **OpenAI platform documentation:** current production concepts including tools/function calling, structured outputs and evals.
- **Model Context Protocol official 2026 specification materials:** MCP as an active interoperability concept for AI applications and tools.

---

# FINAL OPENCODE INSTRUCTION

Do not “improve” this task by inventing another content architecture.

**Implement this dataset, preserve the existing product design, and make the current training experience accurately teach the professional vocabulary represented here.**

If implementation constraints require a schema adaptation, adapt the code/schema — **not the educational meaning of the cards**.
