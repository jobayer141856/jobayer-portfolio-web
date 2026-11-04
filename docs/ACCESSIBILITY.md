# Accessibility Requirements

**Target:** WCAG 2.2 AA where practical.

## Semantic structure
- Use landmarks such as `header`, `nav`, `main`, and `footer`.
- Maintain a logical heading hierarchy.
- Use buttons for actions and links for navigation.
- Provide a skip-to-content link.

## Keyboard access
- All interactive elements must be keyboard accessible.
- Provide visible `:focus-visible` styles.
- Do not create keyboard traps.
- Menus and dialogs must support predictable focus behavior.
- Do not rely on hover to reveal essential content.

## Forms
- Every input must have a programmatic label.
- Associate hints and validation messages with their fields.
- Identify errors in text, not color alone.
- Announce submission success and failure appropriately.
- Preserve entered values when a recoverable submission error occurs.

## Images and media
- Provide useful alt text for meaningful images.
- Use empty alt text or hide decorative images from assistive technology.
- Avoid text embedded in images for essential information.
- Provide captions or transcripts when relevant media requires them.

## Visual design
- Maintain sufficient text and UI contrast.
- Support zoom and text resizing.
- Avoid conveying meaning by color alone.
- Ensure touch targets are comfortably usable.
- Respect reduced-motion preferences.

## Testing
- Keyboard-only review of primary journeys.
- Screen-reader spot checks.
- Automated accessibility checks as a supplement, not a replacement.
- Test mobile navigation, forms, dialogs, and interactive filters.
- Record and resolve serious accessibility defects before release.
