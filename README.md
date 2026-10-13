# Metrics Trainer

Interactive trainer for product, UX research, design, delivery, business, tech & AI metrics.
300 flip/swipe learning cards, generated tests, progress tracking — in 5 languages.

**Live site → https://designnina.github.io/metrics-trainer/#/**

## Features

- **Learn** — flip & swipe card deck with spaced repetition (mark Known / Review)
- **Test** — generated sessions (10 / 20 / 30 questions; balanced / weak / challenge modes)
- **Metrics** — searchable knowledge index of all 300 concepts + topic overview
- **Progress** — knowledge coverage, KPIs, per-topic accuracy, test history, cards to revisit
- **5 languages** — EN / RU / DE / ES / FR (terms stay English-first, explanations localized)
- **Light & dark themes**, responsive 320px → desktop, keyboard support, reduced-motion mode

## Stack

React 18 · TypeScript · Vite · React Router (HashRouter) · GitHub Pages

## Run locally

```bash
npm install
npm run dev
```

Or double-click `Start Site.command` (macOS) — it starts the server and opens the browser.
LAN preview for phones/tablets on the same Wi-Fi: `npx vite --host`, then open
`http://<your-local-ip>:5173/metrics-trainer/#/`.

## Deploy

Push to `main` → GitHub Actions builds and deploys `dist/` to GitHub Pages automatically.
