# Frontend Testing and QA

## Testing goals
Verify that public visitor journeys work, content is accurate, the interface is responsive, and failures are handled safely.

## Test layers

### Unit tests
Test:
- Formatting and mapping utilities
- Components with meaningful logic
- API services and error mapping
- Form validation
- Route metadata helpers

### Component tests
Test:
- Navigation interactions
- Project cards and filters
- Experience and publication rendering
- Contact form states
- Loading, empty, and error states

### Integration tests
Test API-connected features against controlled test responses or a suitable test backend.

### End-to-end tests
Critical journeys:
1. Open home and identify the professional profile.
2. Navigate to projects and open a project detail.
3. Review experience and education.
4. Open a publication link.
5. Download the résumé.
6. Submit the contact form and observe confirmed success.
7. Navigate on a mobile viewport.
8. Navigate core content with a keyboard.

## Responsive QA
Test representative narrow mobile, wide mobile, tablet, laptop, and desktop widths. Verify no horizontal overflow, clipped content, or inaccessible controls.

## Accessibility QA
Follow `ACCESSIBILITY.md`. Automated tools should supplement manual keyboard and assistive-technology checks.

## SEO QA
Follow `SEO_AND_METADATA.md`. Verify rendered HTML, route metadata, canonical URLs, sitemap, robots rules, and social preview metadata.

## Release checklist
- [ ] Formatting/lint checks pass.
- [ ] Unit tests pass.
- [ ] Relevant integration and E2E tests pass.
- [ ] Production build succeeds.
- [ ] No broken primary links or CTAs.
- [ ] API failure states are usable.
- [ ] Responsive review completed.
- [ ] Accessibility review completed.
- [ ] SEO review completed.
- [ ] No secrets or private content are exposed.
- [ ] Contact and résumé flows verified.
