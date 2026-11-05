---
name: portfolio-web
description: >-
  Workflows, runbooks, coding conventions, build commands, and verification
  standards for developing, testing, and maintaining the jobayer-portfolio-web
  Angular application. Use this skill when the user asks to run, develop, build,
  test, or add features to the public portfolio frontend.
---

# Portfolio Web Application Runbook & Skill Guide

This skill guides development, quality verification, and maintenance for **`jobayer-portfolio-web`**, the public personal portfolio application for Jobayer.

---

## 1. Project Overview & Tech Stack

- **Framework**: Angular (v22), Standalone Components, Signals (`signal`, `computed`).
- **Styles & Design**: Tailwind CSS v4 via `@tailwindcss/postcss` and `.postcssrc.json`.
- **Theme & Design Tokens**: Dark theme design tokens in `src/styles/_tokens.css`.
- **Rendering & SSR**: Angular Server-Side Rendering (SSR) with Express and route prerendering (`@angular/ssr`).
- **HTTP & State**: Typed REST services with Angular `HttpClient`, `AsyncState<T>` signals, and defensive offline fallbacks in `src/app/core/mock/portfolio-mock-data.ts`.
- **Strict Separation**: Public frontend only. Admin management and ASP.NET Core backend are separate applications.

---

## 2. Essential Commands & Runbooks

### Development Server (Client with Live Reload)
```powershell
npm start
```
- Starts the Vite-powered Angular dev server at **`http://localhost:4200`**.
- Watches for file changes in `src/` and reloads automatically.

### Production SSR Build & Server
```powershell
npm run build:prod
npm run serve:ssr
```
- Compiles the full client browser bundle and Express server bundle to `dist/jobayer-portfolio-web`.
- Prerenders all static routes (Home, About, Experience, Projects, Skills, Education, Publications, Certifications, Contact).
- Starts the Node Express SSR server listening at **`http://localhost:4000`**.

### Continuous Watch Build
```powershell
npm run watch
```
- Runs `ng build --watch --configuration development` to recompile the bundles on file save.

### Code Quality & Formatting
```powershell
# Run ESLint across all TypeScript and HTML files
npm run lint

# Check formatting with Prettier
npm run format:check

# Auto-format all files with Prettier
npm run format

# Run unit tests
npm test
```

---

## 3. Architecture & Conventions

### Standalone Components & Signals
- Always use Angular standalone components (`imports: [...]`).
- Manage component state using Angular Signals (`signal<AsyncState<T>>({ status: 'loading' })`).
- In templates, narrow signal values defensively:
  ```html
  @if (state().status === 'loading') {
    <app-loading-skeleton />
  } @else if (state().status === 'error') {
    <app-inline-error [message]="state().message ?? 'Error'" (retry)="loadData()" />
  } @else if (state().data; as data) {
    <!-- Render data safely -->
  }
  ```

### Tailwind CSS v4 & Styling
- Global styles reside in `src/styles.css`, which imports Tailwind and modular style layers:
  ```css
  @import 'tailwindcss';
  @import './styles/_tokens.css';
  @import './styles/_reset.css';
  @import './styles/_typography.css';
  @import './styles/_utilities.css';
  ```
- PostCSS configuration is maintained in `.postcssrc.json` using `@tailwindcss/postcss`.
- Always add defensive width and height constraints to inline SVGs (`width: 1.25rem; height: 1.25rem; flex-shrink: 0;`).

### API Integration & Offline Fallback
- Services live inside feature directories under `data-access/` (e.g. `src/app/features/home/data-access/profile-api.service.ts`).
- Inject `API_BASE_URL` (`src/app/core/config/api-config.token.ts`).
- All services must include an offline fallback via `catchError(() => of(MOCK_...))` referencing `src/app/core/mock/portfolio-mock-data.ts`. This ensures the UI remains fully functional and testable even when the ASP.NET Core backend API (`http://localhost:5000`) is offline.

---

## 4. Strict Constraints (from AGENTS.md & FRONTEND_PRD.md)

1. **Integrity of Claims**:
   - Do NOT invent biography details, employment claims, project outcomes, publications, credentials, or contact details.
2. **Public Scope**:
   - Keep public frontend functionality strictly separate from administrative CRUD operations.
   - Never expose unpublished or private content.
3. **Security**:
   - Never commit database credentials, private API keys, or backend secrets.
4. **Accessibility (a11y)**:
   - Use semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`).
   - Maintain visible focus rings (`var(--focus-ring)`).
   - Ensure color contrast ratios meet WCAG AA standards (minimum 4.5:1 for body text).
   - Provide meaningful `aria-label` or `alt` attributes for non-text content.

