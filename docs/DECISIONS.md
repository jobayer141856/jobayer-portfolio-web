# Architecture and Product Decisions

Record decisions that affect the public frontend. Add a new entry when a meaningful decision is made; do not silently overwrite historical context.

## Decision record template

### DEC-XXX — Short title
- **Status:** Proposed / Accepted / Rejected / Superseded
- **Date:**
- **Context:**
- **Decision:**
- **Alternatives considered:**
- **Consequences:**

## Initial proposed decisions

### DEC-001 — Separate public frontend from admin frontend
- **Status:** Accepted as project direction
- **Context:** The public portfolio and private content-management dashboard have different users and security needs.
- **Decision:** Maintain separate Angular applications. This PRD covers only the public application.
- **Consequences:** Shared design or API contracts may be documented, but admin routes and privileged operations must not be included in the public application.

### DEC-002 — Use ASP.NET Core as the backend API
- **Status:** Accepted as project direction
- **Context:** The overall solution uses Angular applications and an ASP.NET Core backend.
- **Decision:** The public frontend consumes a REST API provided by ASP.NET Core.
- **Consequences:** Final endpoint paths and DTO schemas must be coordinated through the backend OpenAPI contract.

### DEC-003 — Prioritize SEO for public routes
- **Status:** Proposed
- **Context:** Recruiters, employers, and academic contacts may discover the portfolio through search or shared links.
- **Decision:** Evaluate Angular SSR or prerendering and implement route-specific metadata.
- **Consequences:** Hosting and rendering strategy must support the selected approach.

## Pending decisions
- Final visual theme and brand identity
- Final professional headline and website copy
- Website language
- Blog inclusion
- Profile photo usage
- Public email visibility
- Analytics
- SSR/prerendering choice
- Hosting provider and deployment approach
