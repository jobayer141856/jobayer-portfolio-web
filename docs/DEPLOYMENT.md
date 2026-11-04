# Public Frontend Deployment

**Status:** Deployment design to be finalized after hosting is selected.

## Deployment scope
This document covers only the public Angular frontend. Admin frontend and ASP.NET Core backend deployment are documented separately.

## Build and hosting
- Use a reproducible production build.
- Select static hosting for a prerendered/static deployment, or an SSR-capable Node hosting environment when server-side rendering is enabled.
- Configure the production API base URL at build or runtime according to the chosen deployment model.
- Enforce HTTPS.
- Configure the correct fallback/rewrite behavior for Angular routes.
- Do not expose source configuration containing secrets.

## SSR considerations
If Angular SSR is selected:
- Host in an environment that supports the required server runtime.
- Confirm server and browser code do not access browser-only APIs during server rendering.
- Cache only public, safe content.
- Avoid caching visitor-specific responses.

## Caching and assets
- Use long-lived immutable caching for fingerprinted static assets.
- Use appropriate caching for HTML and public API responses.
- Ensure updated deployments invalidate or refresh relevant HTML.
- Optimize images and static assets.

## Security
- Use HTTPS and secure response headers.
- Apply a restrictive Content Security Policy where feasible.
- Configure referrer and permissions policies appropriately.
- Do not expose environment secrets.
- Coordinate CORS and API security with the backend team.

## Release process
1. Run lint, tests, and production build.
2. Review environment configuration.
3. Deploy to staging.
4. Verify primary routes, API connectivity, SEO, and contact flow.
5. Approve and deploy to production.
6. Verify health and critical visitor journeys.
7. Keep a rollback path.

## Decisions still required
- Hosting provider
- Static/prerendered vs SSR deployment
- Domain and DNS
- CI/CD provider
- Monitoring and error reporting
- Cache/CDN configuration
