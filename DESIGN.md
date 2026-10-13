---
name: Metrics Trainer
description: A calm, typography-led study environment built from tonal surfaces and one decisive cobalt learning card.
colors:
  cold-canvas-light: "#DEDFDD"
  quiet-canvas-light: "#EEEDEB"
  paper-light: "#FBFBFA"
  tonal-panel-light: "#F0F0EE"
  ink-light: "#171817"
  ink-muted-light: "#555754"
  ink-soft-light: "#686A67"
  rule-light: "rgba(20, 20, 20, 0.10)"
  rule-strong-light: "rgba(20, 20, 20, 0.22)"
  near-black-dark: "#0F1010"
  quiet-canvas-dark: "#171818"
  paper-dark: "#202121"
  tonal-panel-dark: "#292A2A"
  ink-dark: "#EBECEC"
  ink-muted-dark: "#B8BAB7"
  ink-soft-dark: "#A3A5A2"
  rule-dark: "rgba(235, 236, 236, 0.10)"
  rule-strong-dark: "rgba(235, 236, 236, 0.22)"
  cobalt: "#3158F5"
  white: "#FFFFFF"
  cobalt-soft-light: "#EEF0FF"
  cobalt-soft-dark: "rgba(51, 88, 255, 0.14)"
  study-card-muted: "rgba(255, 255, 255, 0.92)"
  study-card-label: "rgba(255, 255, 255, 0.88)"
  study-card-secondary-label: "rgba(255, 255, 255, 0.50)"
  study-card-rule: "rgba(255, 255, 255, 0.20)"
  study-card-soft: "rgba(255, 255, 255, 0.12)"
  action-strong-light: "#171817"
  action-strong-dark: "#101111"
  action-strong-ink: "#FFFFFF"
  error-light: "oklch(55% 0.14 25)"
  error-dark: "oklch(66% 0.13 25)"
typography:
  display:
    fontFamily: "Onest, Helvetica Neue, Arial, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 5vw, 4.75rem)"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Onest, Helvetica Neue, Arial, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.45rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Onest, Helvetica Neue, Arial, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Onest, Helvetica Neue, Arial, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Onest, Helvetica Neue, Arial, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.015em"
  topic-filter:
    fontFamily: "Onest, Helvetica Neue, Arial, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.015em"
  supporting-label:
    fontFamily: "Onest, Helvetica Neue, Arial, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.06em"
  service-label:
    fontFamily: "Onest, Helvetica Neue, Arial, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.06em"
  choice-title:
    fontFamily: "Onest, Helvetica Neue, Arial, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.02em"
  length-number:
    fontFamily: "Onest, Helvetica Neue, Arial, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.03em"
rounded:
  control: "12px"
  small: "16px"
  medium: "22px"
  large: "32px"
  pill: "999px"
spacing:
  sp-1: "4px"
  sp-2: "8px"
  sp-3: "12px"
  sp-4: "16px"
  sp-5: "24px"
  frame-gap: "10px"
  sp-6: "32px"
  sp-7: "48px"
  sp-8: "64px"
  sp-9: "96px"
  sp-10: "128px"
components:
  navigation-item-active:
    backgroundColor: "{colors.ink-light}"
    textColor: "{colors.paper-light}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0 14px"
    height: "50px"
  topic-filter-selected:
    backgroundColor: "{colors.ink-light}"
    textColor: "{colors.paper-light}"
    typography: "{typography.topic-filter}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "44px"
  study-card:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: "clamp(30px, 5vw, 56px)"
    width: "min(100%, 880px)"
  answer-action-review:
    backgroundColor: "{colors.tonal-panel-light}"
    textColor: "{colors.ink-light}"
    typography: "{typography.label}"
    rounded: "20px"
    padding: "0 20px"
    height: "64px"
  answer-action-known:
    backgroundColor: "{colors.action-strong-light}"
    textColor: "{colors.action-strong-ink}"
    typography: "{typography.label}"
    rounded: "20px"
    padding: "0 20px"
    height: "64px"
  button-accent:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 26px"
    height: "48px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-light}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 26px"
    height: "48px"
  search-field:
    backgroundColor: "{colors.paper-light}"
    textColor: "{colors.ink-light}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "15px 18px"
    width: "100%"
  progress-rule:
    backgroundColor: "{colors.tonal-panel-light}"
    textColor: "{colors.cobalt}"
    rounded: "{rounded.pill}"
    height: "4px"
  test-mode-selected:
    backgroundColor: "{colors.action-strong-light}"
    textColor: "{colors.action-strong-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "20px 22px"
    height: "84px"
  test-length-selected:
    backgroundColor: "{colors.action-strong-light}"
    textColor: "{colors.action-strong-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "16px 20px"
    height: "72px"
  answer-option-default:
    backgroundColor: "{colors.tonal-panel-light}"
    textColor: "{colors.ink-light}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 18px"
    height: "58px"
  answer-option-selected:
    backgroundColor: "{colors.action-strong-light}"
    textColor: "{colors.action-strong-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 18px"
    height: "58px"
  answer-option-correct:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 18px"
    height: "58px"
  test-question:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    typography: "{typography.headline}"
    rounded: "{rounded.xl}"
    padding: "clamp(30px, 5vw, 56px)"
    width: "100%"
  test-feedback:
    backgroundColor: "{colors.tonal-panel-light}"
    textColor: "{colors.ink-light}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "22px"
  test-result-card:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: "clamp(34px, 6vw, 68px)"
    height: "500px"
  metric-index-row:
    backgroundColor: "{colors.tonal-panel-light}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.md}"
    padding: "24px"
    height: "196px"
  metric-detail-section:
    backgroundColor: "{colors.tonal-panel-light}"
    textColor: "{colors.ink-light}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "clamp(26px, 4vw, 42px)"
  progress-overview:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: "clamp(30px, 5vw, 56px)"
  progress-history-list:
    backgroundColor: "{colors.tonal-panel-light}"
    textColor: "{colors.ink-light}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    width: "100%"
---

# Design System: Metrics Trainer

## Overview

**Creative North Star: "The Soft-Tech Study Room"**

Metrics Trainer is a calm, contemporary learning environment where type carries the hierarchy and surfaces quietly separate the work. The system feels soft without becoming playful: cold neutral canvases, warm-white working surfaces, generous rounded geometry, and a single cobalt card create a clear place to focus.

The Learn page establishes the visual authority and the Test, Metrics, and Progress surfaces extend it without changing the world. Test keeps the active question dominant; Metrics turns the same corpus into a quiet searchable knowledge index; Progress orders coverage, evidence, and diagnosis into a readable learning record. Cobalt marks assessment objects, resolved success, and the highest-value summary rather than becoming general decoration. The result is designerly and structural, but deliberately avoids generic SaaS dashboards, fake engineering cues, and ornamental instructional chrome.

**Key Characteristics:**

- One expressive grotesk family, with hierarchy made through scale, weight, tracking, and whitespace.
- Tonal surface contrast replaces outlines as the primary organizing device.
- Cobalt is reserved for the study object, progress, confirmed success, results, and decisive next actions.
- Large soft rectangles and circular cues make interactions feel physical but composed.
- Copy stays short, direct, and subordinate to the learner's current decision.
- Assessment setup, answer, feedback, and result states use one consistent tonal hierarchy.
- Every full-width desktop workspace uses one exact 10px viewport inset and rail-to-frame gap.
- Information hierarchy protects content legibility; only service-only cobalt metadata uses the explicit 14px secondary-label exception.
- Metrics behaves as a knowledge index with editorial reading detail, while Progress moves from coverage to evidence to diagnosis.

## Colors

The palette is a cold neutral environment with one hue-locked cobalt signal; dark mode changes the tonal ladder, not the accent identity.

### Primary

- **Study Cobalt** (`#3158F5`): The face of the learning and test-question cards, progress fill, correct-answer state, result surface, accent button, and known-state hover. Its rarity gives the active assessment object and confirmed success immediate priority.
- **Clear White** (`#FFFFFF`): Text and simple overlay tags on cobalt; it is also the direct foreground for decisive completion actions.

### Neutral

- **Cold Canvas** (`#DEDFDD` light / `#0F1010` dark): The outermost application field.
- **Quiet Canvas** (`#EEEDEB` light / `#171818` dark): The secondary background step.
- **Study Paper** (`#FBFBFA` light / `#202121` dark): Navigation and primary workspace surfaces.
- **Tonal Panel** (`#F0F0EE` light / `#292A2A` dark): Filters, quiet buttons, and compact controls.
- **Near Ink** (`#171817` light / `#EBECEC` dark): Primary copy and selected neutral controls.
- **Muted Ink** (`#555754` light / `#B8BAB7` dark): Supporting prose.
- **Soft Ink** (`#686A67` light / `#A3A5A2` dark): Counts, metadata, and labels that should recede.
- **Hairline Rule** (`rgba(20, 20, 20, 0.10)` light / `rgba(235, 236, 236, 0.10)` dark): Dividers and the few borders the system permits.
- **Action Strong** (`#171817` light / `#101111` dark): A theme-safe near-black for selected choices, “Know it,” and the Test submit action. It remains independent from the theme's primary text token so white action copy keeps reliable contrast.
- **Action Strong Ink** (`#FFFFFF`): The fixed foreground on Action Strong in both themes.
- **Study Card Label** (`rgba(255, 255, 255, 0.88)`): The 15px uppercase Learn-card topic/domain name. It provides a measured 4.60:1 contrast and remains part of the card's content hierarchy.
- **Study Card Secondary Label** (`rgba(255, 255, 255, 0.50)`): Deliberately subdued service-only metadata on cobalt: level/“Practice,” “Reveal answer,” and the “Answer,” “Answer in brief,” and “Formula” labels. This user-approved hierarchy exception never applies to the domain name, answer, definition, or formula content.

### Named Rules

**The One Cobalt Rule.** Keep cobalt hue-locked across themes and reserve it for study objects, progress, confirmed success, results, and decisive next actions. Interactive cobalt controls may deepen to `#244BDD` on hover without introducing another hue.

**The Tonal Before Linear Rule.** Separate regions with shifts between canvas, paper, and tonal panel before adding a border.

**The State Ladder Rule.** Use Action Strong for a user's unresolved selection, cobalt for a confirmed correct state, and the error token only for a confirmed incorrect state.

**The Content-versus-Service Rule.** Keep Learn-card content and its domain name on the stronger white tones; reserve Study Card Secondary Label exclusively for service metadata that names state, affordance, or section.

## Typography

**Display Font:** Onest (with Helvetica Neue, Arial, and system UI fallbacks)

**Body Font:** Onest (with Helvetica Neue, Arial, and system UI fallbacks)
**Label/Mono Font:** Onest for visible labels; IBM Plex Mono is available only for genuine code or data notation.

**Character:** A single characterful grotesk makes the product feel contemporary and focused. Large headings are broad, close-tracked, and medium weight; supporting language stays compact and quiet rather than becoming decorative.

### Hierarchy

- **Display** (500, `clamp(2.75rem, 5vw, 4.75rem)`, 0.9): Screen-defining words such as “Learn” and “Test,” with tight tracking and no supporting flourish.
- **Headline** (500, `clamp(2rem, 4vw, 3.45rem)`, 1.04): The study question and revealed answer; balance lines and keep the measure near 22 characters.
- **Title** (650, `clamp(1.375rem, 2.5vw, 1.75rem)`, 1.1): Section-level headings outside the main study prompt.
- **Body** (400, `1rem`, 1.55): Scenarios and explanations, generally held to 58–64 characters for comfortable reading.
- **Label** (500, `0.8125rem`, `-0.015em`): Filters, navigation, metadata, and action text. Uppercase is used only for compact technical labels with wider tracking.
- **Topic Filter** (500, `1rem`, `-0.015em`): The shared Learn and Metrics topic tabs; all labels stay 16px with a 44px target at every viewport width.
- **Supporting Label** (600, `0.9375rem`, `0.06em`): Test legends and session labels plus the Learn-card topic/domain name; uppercase and tone create hierarchy without shrinking content readability.
- **Service Label** (600, `0.875rem`, `0.06em`): Level/“Practice,” “Reveal answer,” and the “Answer,” “Answer in brief,” and “Formula” labels. This 14px uppercase role is a deliberate exception for service-only metadata on cobalt.
- **Choice Title** (600, `1.125rem`, `-0.02em`): Focus-mode names inside explanatory selection rows.
- **Length Number** (500, `2rem`, `-0.03em`): The 10, 20, and 30 numerals in Test length choices.

### Named Rules

**The Type Does the Structuring Rule.** Establish hierarchy with Onest scale, weight, tracking, and measure before introducing another surface or line.

**The Honest Mono Rule.** Use IBM Plex Mono only when content is genuinely formulaic or code-like; never use it to imply technical sophistication.

**The No Microcopy-by-Tiny-Type Rule.** Keep ordinary Test descriptions and body copy at 16px or larger, Test supporting labels and Learn-card domain names at 15px, choice titles at 18px, and length numerals at 32px. The only 14px exception is service-only metadata on cobalt; never apply it to answer, definition, formula content, or domain names.

## Layout

Desktop uses a fixed 216px navigation rail and one `--frame-gap` value of 10px. The rail begins 10px from the left edge; every full-width Learn, Metrics, Metric-detail, and Progress frame begins exactly 10px after the rail and ends 10px before the right viewport edge. This equality holds at every desktop width. General page content may cap at 1320px, but these workspaces explicitly remove that maximum and fill the available `app-main` width. The Learn deck still caps at 880px and an active Test session caps at 980px; all major workspaces use fluid 28–52px padding.

Test setup is a single sequential column capped at 980px: Focus first, Length second, then the Start row. The stages use a fluid 34–48px vertical gap. Focus is a list of explanatory rows; Length is a three-column selector whose numeral and “questions” label form one centered inline group. Results retain a 1.2fr/0.8fr split between the cobalt score card and per-topic performance and collapse to one column at 980px.

Metrics is a full-width knowledge index. Its search field fills the available workspace width and the concept list uses two equal columns until 1180px, then one. Metric detail keeps reading content left-aligned: a large answer title, a 42-character question measure, a 68-character scenario measure, and tonal definition/formula sections capped at 900px.

Progress follows one vertical evidence hierarchy: cobalt knowledge coverage, six compact KPIs, topic coverage, persisted test history, two diagnostic panels, then reset. At 1180px the KPIs reduce from six columns to three; at 768px the overview stacks with the percentage first, KPIs use two columns, and diagnostics use one; at 430px headers stack and history rows top-align; at 360px KPIs become one column.

At 980px and below, Test length choices stack as full-width inline rows; the three-column inline layout begins at 981px, where each choice has sufficient measure. At 768px the fixed rail becomes a floating bottom tab bar, outer page padding reduces to 12px, and both Learn and Test workspaces tighten to 22px by 18px. Learn filters continue to scroll horizontally and every topic target grows to a 44px minimum height. Test mode rows stack their title over the description, answer options change from two columns to one, and submit, next, and result actions become full width. At 360px and below, the outer gutter drops to 8px, workspace padding to 14px, length rows reduce to a 58px minimum height with 12px by 14px padding, question padding becomes 24px by 20px, and feedback becomes one column.

Spacing follows the implemented 4, 8, 12, 16, 24, 32, 48, 64, 96, and 128px rhythm. Fluid `clamp()` values are used only where the typography, workspace padding, or study-card padding needs to span phone and desktop widths.

**The Equal Frame Gap Rule.** On desktop, the left rail inset, rail-to-workspace gap, and workspace right inset are all the same 10px token.

**The Full-Width Learn Rule.** Let the Learn screen fill `app-main`; constrain the 880px deck inside it instead of centering the entire workspace in the general 1320px page cap.

## Elevation & Depth

Depth is mostly tonal. The navigation rail and all major Paper workspaces use one long, low-contrast ambient shadow (`0 30px 80px -58px rgba(20, 20, 20, 0.34)` in light mode; `0 34px 90px -56px rgba(0, 0, 0, 0.88)` in dark mode). The cobalt Learn card carries a faint accent-tinted lift, while Test, Metrics, and Progress content stays flat inside the already elevated workspace. The Learn card's stacked successor is suggested through color mix, scale, offset, and opacity rather than a new border.

### Shadow Vocabulary

- **Ambient Shell** (`0 30px 80px -58px rgba(20, 20, 20, 0.34)`): Large floating surfaces in the light theme.
- **Ambient Shell Dark** (`0 34px 90px -56px rgba(0, 0, 0, 0.88)`): The same structural lift in the dark theme.
- **Study Card Lift** (`0 28px 58px -44px color-mix(in srgb, #3158F5 70%, transparent)`): A low cobalt haze that keeps the card physical without turning it glossy.

### Named Rules

**The Tonal-First Depth Rule.** Use surface contrast and overlap for depth; reserve shadows for the outer shell, the study object, and active response.

## Shapes

The form language follows one semantic hierarchy: 12px for buttons, fields, and atomic controls; 16px for small cards and interactive rows; 22px for medium panels and grouped lists; 32px for primary workspaces, the navigation rail, and large cobalt cards. Circular forms are limited to icon cues, answer keys, feedback marks, and completion marks.

Borders are hairlines and remain secondary to tonal separation. Navigation and tabs never use underlines; the Progress section-header text action may use one restrained Hairline Rule underline. There are no skeletal connector lines, notched panels, or diagrams pretending the interface is an engineered schematic.

## Components

### Buttons

- **Shape:** Soft rectangular controls (12px radius) with a 48px minimum height and 14px by 26px padding.
- **Theme Exception:** The 50px theme icon button alone is fully circular so it reads as a distinct utility control rather than another navigation segment.
- **Primary:** Near Ink on the current canvas; the accent variant uses Study Cobalt with Clear White text. Selected and submit states that require theme-safe contrast use Action Strong with Action Strong Ink.
- **Hover / Focus:** Presses scale to 0.985; focus is a 2px cobalt outline with a 2px offset. Disabled controls reduce to 35% opacity.
- **Ghost / Quiet:** Ghost buttons use a strong hairline border on transparency; quiet buttons use Tonal Panel with Near Ink.

### Chips

- **Style:** Compact Onest labels in a 999px pill with a hairline border and 6px by 12px padding.
- **State:** Solid chips invert to Near Ink on canvas; accent chips use cobalt. The shared Learn and Metrics topic switcher is a grouped cousin: a 16px tonal track with 16px labels, 44px targets, 12px selected-control corners, and 16px horizontal padding at every viewport width.

### Session Progress

The Learn progress track always transforms from the exact completed-card ratio: `completedCards / deck.length`. This unrounded value gives visible movement after every completed card, including large decks where several adjacent steps would otherwise round to the same percentage. Only `aria-valuenow` uses the rounded percentage; `aria-valuetext` states the concrete card count as “N of M cards completed.”

**The Exact Progress Rule.** Use the unrounded completed-card ratio for the visual transform; use the rounded percentage only as the progressbar's numeric accessibility value.

### Cards / Containers

- **Corner Style:** Atomic controls use 12px, small cards use 16px, medium panels use 22px, and all primary workspaces and large cobalt cards use 32px.
- **Background:** Paper carries both workspaces, while cobalt carries the active learning card, Test question, and headline result surface.
- **Shadow Strategy:** Refer to the tonal-first depth rule; most internal containers stay flat.
- **Border:** General cards may use one Hairline Rule. The cobalt study card is borderless.
- **Internal Padding:** The study card scales from 30px to 56px and reduces to 22px by 20px on the narrowest supported viewport.
- **Transition Clipping:** The Learn workspace uses clipped overflow so a committed card disappears cleanly beyond the rounded frame rather than painting over the application canvas.

### Inputs / Fields

- **Style:** Paper background, one Hairline Rule, a 16px radius, and 15px by 18px padding.
- **Focus:** Replace the line with the stronger rule color; do not add a glow or inset effect.
- **Error / Disabled:** Error color is reserved for actual incorrect states. Disabled action controls use opacity and retain their geometry.

### Navigation

Desktop navigation is a fixed Paper rail with stacked 50px items. The active item is Near Ink with the current Paper as its text color; inactive hover uses Tonal Panel and a restrained 2px horizontal shift. Below 768px, the rail becomes a floating five-part bottom bar whose active destination is cobalt.

### Metrics Knowledge Index

Metrics is a browse-and-read surface, not a dashboard. A 16px introduction leads into the shared 16px topic filter and a full-width 58px tonal search field. Search focuses by becoming Paper with one inset Strong Rule rather than adding a glow. Empty search results use a single tonal panel with a direct reset action.

The alphabetical concept index uses two columns above 1180px and one below. Each desktop row is a 196px Tonal Panel with 24px padding and a three-part grid: a quiet 14px index number, the concept copy, and a 24px directional arrow. Concept names use a 20–25px semibold title; recall questions remain 15px. Metadata has an explicit two-level hierarchy: the 15px, medium-weight domain is the parent context, while the 13px uppercase level and optional Mastered state sit together below it. Level labels such as Foundation, Practice, and Advanced use 50% opacity, matching the service-level treatment on Learn. Hover changes only to the neutral `Surface Hover` gray and shifts the arrow 2px; it adds no outline, accent tint, inversion, lift, or shadow. Below 768px the index number disappears and the row becomes content-height.

### Metric Detail

Detail is an editorial reading page in the same Paper workspace. A 16px back action precedes a 15px domain followed by 13px uppercase, 50%-opacity level and mode metadata. The answer title scales from 2.6rem to 5.4rem with an 18-character measure. The recall question is 20–27px, the scenario stays 16px, and the definition/formula stack caps at 900px. Each section uses a 22px Tonal Panel with fluid 26–42px padding; its 14px label recedes, while definition copy remains 16–19px and formula content stays cobalt, 18–25px, and wraps anywhere.

### Progress Hierarchy

Progress is ordered as coverage → evidence → diagnosis → reset. A 32px cobalt overview leads with “Knowledge coverage,” the explored percentage, a 5px white progress rule, and reviewed/mastered counts. Six 16px-radius tonal KPIs then report Mastered, Card answers, Card accuracy, Best streak, Tests completed, and Test average. Topic coverage follows as five 22px list rows with exact reviewed counts, rounded percentages, and 4px cobalt rules.

Test history is evidence, not a transient result. Every completed test is persisted with the rest of learning state on the current device; the store retains the newest 24 sessions, while Progress presents the five most recent in newest-first order. Each 86px row pairs mode, localized completion date, and question count with a 28px cobalt accuracy. Tests completed and average accuracy also feed the KPI row. Before the first test, one tonal empty state explains what will appear and links directly to Test.

The final diagnostic tier places Cards to revisit and Confused pairs side by side, then stacks them below 768px. Reset remains last, separated by one Hairline Rule, and explicitly removes both learning progress and test history from the device.

### Study Card

The signature object is a borderless 32px cobalt card that holds question, scenario, metadata, and reveal cue in one uninterrupted field. The front centers the question block vertically. The main question uses the full available card width rather than an artificial character cap; supporting scenario copy may extend to 72ch. The Learn-card topic/domain name remains a 15px, 600-weight uppercase label with 0.055em tracking and the Study Card Label tone at 4.60:1 on cobalt.

Service-only metadata is deliberately quieter: level/“Practice,” “Reveal answer,” and the “Answer,” “Answer in brief,” and “Formula” labels use 14px, 600-weight uppercase type with 0.06em tracking and Study Card Secondary Label. This is an explicit user-approved exception to the general 15px supporting-label floor. The actual answer, definition, formula content, and topic/domain name never use the secondary-label tone.

The back uses only soft white dividers between answer, summary, and formula. Formula content is 18px at 500 weight with 1.55 line height, a 20px by 22px inset, and `overflow-wrap: anywhere` for long expressions. Tap or Enter flips the card in 500ms; horizontal swipes rotate up to 14 degrees and commit after a width-aware 46–88px travel or a short projected flick.

### Swipe Deck Motion

The deck behaves like a small stack of physical sheets. A committed card keeps whichever face is currently visible and travels fully outside the clipped Learn frame over 320ms with `cubic-bezier(0.42, 0, 0.72, 0.22)`. Exit distance is the largest of 720px, 1.45 times the deck width, or 90% of the viewport width, so the outgoing sheet clears both narrow and wide layouts.

The real next card is already rendered beneath the active sheet, preventing a placeholder-to-card color flash. As the top sheet moves toward ±220px, the next sheet rises continuously from 0.985 scale, 8px vertical offset, and 78% opacity to full scale, zero offset, and full opacity. Position, flip state, exit animation, and commit lock reset only when the active card identity changes; this prevents the outgoing sheet from snapping back or changing face before the next card is real.

A synchronous commit lock blocks rapid duplicate button, pointer, arrow-key, Space, and Enter input while a sheet is leaving. Gesture intent is read after a 12px dead zone: clearly vertical movement belongs to native scrolling, while a broadly horizontal thumb arc belongs to the card. Flick projection uses the latest movement sample rather than time since initial touch, so a brief pause before the swipe does not weaken recognition. Pointer cancellation follows the same non-committing reset path. In reduced-motion mode, a valid commit advances immediately without the horizontal flight, and the card-identity reset performs the cleanup.

Every new Learn session increments a session identity and keys the deck with it, forcing a full deck remount even when the new deck begins with the same card ID. The cleanup returned by the deck's layout effect runs synchronously during card change or unmount, before a new session mounts: it invalidates the active-card identity and then stops any pending exit animation. The animation completion guard therefore cannot advance a freshly reset session or move its progress bar.

**The Face-Persistence Rule.** Never turn a revealed answer back to its question face during exit; reset the flip only after the active card identity changes.

**The One Commit Per Sheet Rule.** Once a result is recorded, ignore all further pointer, keyboard, and button commits until the next card identity unlocks the deck.

**The Session Boundary Rule.** A new session must remount the deck, invalidate the outgoing card identity, and stop its animation before any pending completion can change the new session.

### Learning Actions

“Review” and “Know it” form an equal two-column decision below the card. Each action uses an internal three-column grid—20px edge, intrinsically sized centered label, 20px edge—so the text stays mathematically centered even when only one side contains an arrow. Review rests on Tonal Panel and uses the shared neutral `Surface Hover`; Know it uses Action Strong and shifts to the adjacent `Action Strong Hover` neutral on hover. Neither button moves or gains a shadow on hover. Both use a 64px height, 12px control corners, a 10px column gap, and a 0.985 pressed scale; their height reduces to 58px below 768px and 54px at 360px.

### Test Setup Selectors

Test setup reads as a deliberate three-step sequence inside one 980px column: Focus, then Length, then Start. Focus is a vertical list of 84px tonal explanatory rows with 20px by 22px padding. Each row aligns an 18px choice title in a minimum 160px column with a 16px description; selected rows invert to Action Strong and Action Strong Ink, while unselected hover changes only to the neutral `Surface Hover` gray.

Length uses 72px tonal choices for 10, 20, and 30 questions. Each choice presents a 32px numeral and a 16px “questions” label as one centered inline group: the button uses centered cross-axis and main-axis alignment, and both text parts use line-height 1. This geometry remains unchanged when the choices stack into full-width rows. Selected choices use the same strong state; unselected choices use the same neutral `Surface Hover` gray as Metrics without movement or outline. The choices form three columns from 981px upward and stack at 980px and below, including tablet widths where the rail is still visible. Below 768px their minimum height reduces to 60px. Selection is exposed through `aria-pressed`, not color alone. The Start row follows the selectors with a 32px margin rather than sharing their grid.

### Test Session

The session header pairs a short question-type label with a tabular current/total count, followed by the same 4px cobalt progress rule used in Learn. The question is a borderless 32px cobalt surface with a 340px minimum height, fluid 30–56px padding, a headline measure near 24 characters, and optional supporting context up to 62 characters. Each newly rendered question programmatically focuses its heading without placing it in the normal tab order; after an answer is revealed, focus moves to the Next or See result button. All interactive controls retain the global 2px cobalt focus outline, while the swipe card keeps its stronger 3px Near Ink outline with a 5px offset.

### Answer Options & Feedback

Options are 58px-minimum tonal rows with a 30px circular letter key. Desktop sessions place them in two equal columns; phones use one. Unresolved selection uses Action Strong with an inverted key. A confirmed correct answer becomes cobalt with a white key and checkmark; a selected incorrect answer uses the implemented 18% error/surface mix with a cross. Unselected disabled options recede to 56% opacity, while revealed correct and incorrect states remain fully opaque.

Feedback is a flat Tonal Panel block with 22px corners, a circular 48px mark, and an explanation column. Correct marks use cobalt, incorrect marks use the error token, explanatory body copy stays at 16px, and a specific “why not” note follows at the 15px supporting-label floor in Soft Ink. At mobile widths the mark reduces to 40px; at 360px feedback becomes a single column.

### Test Results

The result surface gives recall accuracy the dominant cobalt card: mode and raw correct count sit at the top, a 5–9rem close-tracked percentage fills the center, and weighted points close the card. The adjacent topic breakdown uses restrained labels, exact correct/total counts, and one 4px cobalt progress rule per topic. Results collapse from the 1.2fr/0.8fr desktop split to one column below 980px, while the cobalt card reduces from a 500px to 420px and then 380px minimum height.

## Do's and Don'ts

### Do:

- **Do** let the study question be the dominant visual event and keep instructional copy secondary.
- **Do** use tonal surface steps to organize the shell, workspace, filters, and quiet actions.
- **Do** keep cobalt concentrated on study and test-question objects, progress, confirmed success, results, and decisive next actions.
- **Do** preserve the 880px study measure, scroll long card content internally, and reflow controls cleanly down to 320px.
- **Do** maintain visible keyboard focus, touch-friendly action heights, and reduced-motion behavior.
- **Do** use Action Strong and Action Strong Ink for unresolved selected states and theme-safe high-contrast actions.
- **Do** move keyboard focus to each new Test question heading and then to the next-step button after feedback appears.
- **Do** preserve the 10px desktop frame-gap equality from viewport edge to rail, rail to every full-width workspace, and workspace to viewport edge.
- **Do** drive the visible Learn progress fill from the exact completed-card ratio and reserve rounding for `aria-valuenow`.
- **Do** keep the outgoing card's visible face intact until it clears the clipped workspace and the next card identity arrives.
- **Do** treat vertical drags and pointer cancellation as non-committing gestures.
- **Do** read touch intent after a 12px dead zone, preserve native vertical scrolling, and commit broadly horizontal swipes with a width-aware 46–88px travel or a projected short flick based on the latest movement sample.
- **Do** force a full deck reset at every session boundary, even when the first card ID is unchanged.
- **Do** keep ordinary Test descriptions and body copy at 16px or larger, Test supporting labels and Learn-card domain names at 15px, choice titles at 18px, and length numerals at 32px.
- **Do** reserve the 14px Study Card Secondary Label treatment for level/“Practice,” reveal, and back-section service labels only.
- **Do** keep every Test length number-and-label group centered with line-height 1, including stacked responsive rows.
- **Do** keep shared Learn and Metrics topic filters at 16px with 44px targets in every responsive layout.
- **Do** let Metrics read as an alphabetical knowledge index and preserve the detail page's editorial measures.
- **Do** order Progress as coverage, evidence, diagnosis, then reset, and treat persisted test history as part of the learner's record.

### Don't:

- **Don't** underline navigation or tabs; reserve the restrained Hairline Rule underline for a section-header text action such as “Start a test.”
- **Don't** add fake engineering decoration, circuit lines, registration marks, crosshairs, coordinates, or pseudo-technical mono labels.
- **Don't** let the compact Progress KPI row replace the page's coverage-first hierarchy or proliferate into a generic SaaS dashboard of interchangeable tiles.
- **Don't** introduce extra accent hues or theme-specific cobalt variants; the single cobalt is the constant.
- **Don't** crowd the card with tips, badges, verbose instructions, or decorative controls that compete with recall.
- **Don't** use error color before an answer is checked or make unselected disabled options compete with revealed answer states.
- **Don't** reset translation, flip state, or the commit lock before the active card identity changes.
- **Don't** accept a second button, swipe, or keyboard result while the outgoing sheet is still committed.
- **Don't** round the visual progress ratio; on large decks that would hide valid per-card movement.
- **Don't** let a stopped exit animation advance a newly started session or its progress.
- **Don't** apply the secondary service-label tone or 14px exception to the Learn-card domain name, actual answer, definition, or formula content.
