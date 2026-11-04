# Frontend Technology Stack

**Application:** Public Professional Portfolio  
**Status:** Proposed baseline; confirm versions when the repository is initialized.

## Stack overview

| Area | Technology | Purpose |
|---|---|---|
| Framework | Angular | Public portfolio application |
| Language | TypeScript (strict mode) | Typed application code |
| Markup | Angular templates + semantic HTML | Accessible UI |
| Styling | Tailwind CSS or SCSS | Responsive styling and design tokens |
| Rendering | Angular SSR and/or prerendering | SEO and first-render performance |
| Routing | Angular Router | Public navigation |
| Forms | Angular Reactive Forms | Contact form and validation UX |
| HTTP | Angular HttpClient | ASP.NET Core REST API integration |
| State | Angular Signals and services | UI and shared feature state |
| API contract | OpenAPI-aligned TypeScript types | Frontend/backend consistency |
| E2E testing | Playwright (proposed) | Browser journey testing |
| Quality | ESLint + Prettier (proposed) | Linting and formatting |
| Package manager | npm (proposed) | Dependency management |

## Framework and language
- Use a currently supported stable Angular release at project initialization.
- Prefer standalone components and route-level lazy loading.
- Enable TypeScript strict mode.
- Avoid `any`; define typed API and UI models.
- Follow conventions for the selected Angular version.

## Styling
Choose one primary approach before implementation.

**Tailwind CSS:** useful for utility-first styling and rapid consistent UI. Define tokens and component conventions to avoid inconsistent one-off utility combinations.

**SCSS/CSS:** useful for custom component styles and design systems. Use CSS custom properties for color, typography, spacing, and themes.

Do not combine styling systems without a clear reason.

## Rendering and SEO
Evaluate Angular SSR and prerendering because the site is public and search discovery matters.
- Prefer prerendering for stable routes when suitable.
- Use SSR where dynamic server rendering is needed.
- Ensure important page content and metadata are present in rendered HTML.
- Select hosting that supports the chosen rendering model.

## Data access and state
- Use feature-focused Angular services for API access.
- Keep HTTP calls out of presentational components.
- Use Signals or local component state for UI state.
- Avoid NgRx or another global state library unless complexity justifies it.
- Cache public content only with an explicit freshness strategy.

## Forms
- Use Reactive Forms for the contact form.
- Provide accessible labels, hints, and field-level validation.
- Backend validation remains authoritative.
- Prevent duplicate submissions while a request is pending.
- Show success only after confirmed API success.

## Testing and quality
Proposed tools: Angular-compatible unit/component test runner, Playwright for E2E, ESLint, and Prettier. Confirm exact tools against the chosen Angular version and project preferences.

## Environment configuration
Expected public configuration:
- API base URL
- Public site origin
- Environment identifier
- Optional public analytics identifier, only if approved

Everything shipped to the browser is public. Never store secrets, private keys, database credentials, or privileged tokens in frontend configuration.

## Dependency policy
- Prefer Angular and browser platform capabilities before adding libraries.
- Review maintenance, license, security, compatibility, and bundle impact.
- Avoid dependencies that duplicate Angular capabilities.
- Update dependencies deliberately.

## Decisions to finalize
- Angular major version
- Tailwind CSS or SCSS
- SSR, prerendering, or CSR strategy
- Unit/component test runner
- E2E test tool
- Package manager
- Hosting and deployment model
