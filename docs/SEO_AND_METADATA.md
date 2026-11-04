# SEO and Metadata Requirements

## Goals
Make the public portfolio discoverable and ensure shared links display accurate previews. SEO must reflect real, owner-approved content.

## Per-route metadata
Every indexable route should provide:
- Unique page title
- Unique meta description
- Canonical URL
- Open Graph title, description, URL, and image
- Twitter/X card metadata where useful
- Appropriate robots directives

## Rendering
Evaluate Angular SSR or prerendering for public routes. Confirm that important page content and metadata are available in rendered HTML and not dependent solely on client-side execution.

## URL strategy
- Use short, readable, stable slugs.
- Use canonical URLs with the production domain.
- Avoid duplicate indexable routes for the same content.
- Handle deleted, unpublished, or changed slugs deliberately.

## Structured data
Use structured data only when the visible page content supports it. Candidate types include:
- `Person`
- `WebSite`
- `ProfilePage`
- `Article` for blog posts

Validate generated structured data and do not invent credentials, employer affiliations, awards, or publication facts.

## Technical SEO
- Generate and maintain `sitemap.xml`.
- Configure `robots.txt`.
- Provide a custom 404 page.
- Use descriptive link text.
- Add meaningful image alt text.
- Avoid indexing internal, preview, or unpublished routes.
- Ensure canonical and social URLs use the correct production origin.

## Performance and image SEO
- Use appropriately sized images and modern formats where supported.
- Set image dimensions or aspect ratios to reduce layout shift.
- Lazy-load below-the-fold images.
- Do not lazy-load the primary hero image if it harms the largest contentful paint.
- Use descriptive asset filenames where practical.

## Validation
Before release:
- Inspect rendered HTML for key routes.
- Validate titles, descriptions, canonical URLs, and social previews.
- Validate sitemap and robots behavior.
- Check structured data.
- Check broken internal and external links.
