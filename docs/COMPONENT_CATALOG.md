# Component Catalog

This document defines the proposed reusable UI component inventory. It is a guide, not a requirement to create every component before it is needed.

## Application shell
- `SiteHeader`: brand, primary navigation, optional theme control, key CTA.
- `MobileNavigation`: accessible small-screen navigation.
- `SiteFooter`: professional links, copyright, and secondary navigation.
- `PageContainer`: consistent content width and horizontal padding.
- `PageHeader`: page title, intro, and optional breadcrumb.

## Content components
- `ProjectCard`: title, summary, image, technology tags, detail link.
- `ProjectGallery`: responsive project screenshots with meaningful alt text.
- `ExperienceEntry`: role, organization, dates, summary, contributions.
- `SkillGroup`: category heading and skill tags.
- `PublicationCard`: title, authors, venue, year, and verified links.
- `EducationEntry`: institution, qualification, dates, optional approved result.
- `CertificationCard`: credential, issuer, date, and verification link.
- `ArticleCard`: blog metadata and article link, only if blog is approved.
- `SocialLinks`: configured public professional profiles.

## Interaction components
- `Button`: primary, secondary, and text/link variants.
- `FormField`: label, input, hint, and validation message.
- `ContactForm`: contact submission flow.
- `FilterControls`: optional project filters.
- `BackToTop`: optional page utility.

## Feedback components
- `LoadingSkeleton`
- `InlineError`
- `EmptyState`
- `NotFoundPage`
- `SubmissionSuccess`
- `SubmissionFailure`

## Component design rules
- Prefer semantic native elements.
- Components should have clear inputs and outputs.
- Keep API calls out of purely presentational components.
- Avoid components that only wrap one element without adding value.
- Define responsive behavior and interaction states.
- Use stable identifiers for repeated content.
- Ensure focus, labels, and accessible names are correct.

## Content fallback rules
- Hide optional metadata when absent.
- Do not render empty headings or empty cards.
- Use a designed fallback for missing non-critical images.
- Never replace missing real content with invented sample claims in production.
