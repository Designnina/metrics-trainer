# Правила проекта Metrics Trainer

## Деплой: гигиена файлов

- На GitHub Pages уезжает **только `dist/`** (workflow `.github/workflows/deploy.yml`
  загружает `path: dist`, собирая его в CI). Ни один файл из корня репо на сайт не попадает.
- Поэтому в git коммитим **только runtime-минимум**: `src/`, `index.html`, `package.json`
  (+lock), `vite.config.ts`, `tsconfig*`, `.github/workflows/`, `README.md`,
  `Start Site.command`, `.gitignore`.
- **Никогда не деплоить (не коммитить) лишние файлы**, даже если они лежат в рабочей папке:
  - `ideology/` — исходные ТЗ-брифы;
  - `visuals/` — референсные картинки этапа дизайна;
  - `.impeccable/`, `assets/` — scratch дизайн-тулинга;
  - `PRODUCT.md`, `DESIGN.md` — локальные доки контекста (живут только на диске);
  - `.nojekyll` — не нужен: деплой идёт через Actions-артефакт, Jekyll не запускается,
    а без папки `public/` файл всё равно не попал бы в `dist/`;
  - `dist/`, `node_modules/`, `.DS_Store`, `*.tsbuildinfo` — всегда игнорируются.
- Такие файлы храним **локально** и держим в `.gitignore`, чтобы они не вернулись в git.
- Перед пушем в `main` проверять `git status` / `git ls-files`: в индексе не должно быть
  ничего из списка выше. Пуш в `main` = автоматический деплой на Pages.
