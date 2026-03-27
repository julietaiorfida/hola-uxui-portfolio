# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (port 8080)
npm run build     # Production build
npm run build:dev # Dev mode build (with debug info)
npm run lint      # ESLint
npm run preview   # Preview production build locally
```

## Architecture

Single-page portfolio for a UX/UI Designer. Built with **Vite + React + TypeScript**, styled with **Tailwind CSS + shadcn/ui**.

**Page structure** (`src/pages/Index.tsx`): one scrollable page with sections rendered in order — Navigation → Hero → Services → Projects → Experience → About → Contact → Footer. Each section is a component in `src/components/`.

**Routing** (`src/App.tsx`): only two routes — `/` (main page) and `*` (404). App is wrapped with `QueryClientProvider`, `LanguageProvider`, `TooltipProvider`, and toast providers.

## Content & i18n

All user-facing text lives in **`src/i18n/translations.ts`** — the single source of truth for both Spanish (default) and English content. This includes section headings, project descriptions, experience entries, skills, tools, etc.

Components consume translations via the `useLanguage()` hook, which returns a `t(key)` function. Data items (projects, jobs, skills) are defined as arrays of objects with `*Key` string properties referencing translation keys, then rendered with `t(project.titleKey)`.

To add or change any visible text, edit `translations.ts` under both `es` and `en` keys.

## UI Components

`src/components/ui/` contains 45+ shadcn/ui primitives (Radix UI based). Do not modify these directly — they are generated components. Prefer composing them rather than editing internals.

Custom hooks in `src/hooks/`:
- `useReveal` / `useScrollAnimation` — scroll-triggered animations applied to section containers
- `use-mobile` — responsive breakpoint detection

## Path Aliases

`@/*` maps to `src/*` (configured in both `vite.config.ts` and `tsconfig.json`).

## Assets

Images and icons live in `src/assets/`. Tool logos (Figma, Illustrator, HTML, etc.) are in `src/assets/tools/`. Assets are imported directly into components as ES modules.

## TypeScript Config

`tsconfig.json` has strict null checks disabled (`"strictNullChecks": false`). Keep this in mind — the codebase does not guard against null/undefined at the type level.
