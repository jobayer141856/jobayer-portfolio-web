# Frontend Agent Instructions

## Scope
This repository contains the public Angular portfolio frontend only. The admin dashboard and ASP.NET Core backend are separate applications.

## Before changing code
1. Read `FRONTEND_PRD.md` and the relevant documents in `docs/`.
2. Inspect the existing Angular version, project structure, dependencies, and conventions.
3. Check existing components and services before creating new ones.
4. Identify whether a requirement depends on an API contract or product decision that is not yet confirmed.

## Core rules
- Use the approved PRD as product guidance.
- Do not invent biography details, employment claims, project outcomes, publications, credentials, or contact details.
- Do not hardcode production portfolio content in page components. Load published content through typed API services.
- Keep public frontend functionality separate from admin functionality.
- Never add database credentials, private API keys, or secrets to frontend code or environment files.
- Do not expose unpublished or private content.
- Do not implement backend behavior in the frontend.
- Do not add dependencies without a clear reason.
- Prefer small, focused, reusable components over premature abstractions.
- Follow the Angular version and conventions already selected by the project. Prefer standalone components and strict TypeScript when compatible.
- Use semantic HTML, keyboard-accessible controls, visible focus states, and meaningful image alternative text.
- Respect `prefers-reduced-motion`.
- Handle loading, empty, error, and not-found states for API-driven content.
- Do not claim an action succeeded until the API confirms success.

## API integration
- Use typed request and response models.
- Centralize API access in services.
- Keep the API base URL configurable per environment.
- Treat client-side validation as a usability aid; backend validation remains authoritative.
- Never call admin-only endpoints from the public app.
- Confirm uncertain endpoint paths and schemas against the backend OpenAPI contract.

## Quality checks
Before completing a change:
1. Run formatting and lint checks available in the repository.
2. Run relevant unit and integration tests.
3. Run a production build.
4. Check responsive behavior and keyboard interaction for changed UI.
5. Update documentation when routes, design tokens, API contracts, or architectural decisions change.

## Handling ambiguity
If content, design, API behavior, or product requirements are unclear, document the question and ask for clarification rather than inventing a consequential answer.
