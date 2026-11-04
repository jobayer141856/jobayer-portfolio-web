# Design System

**Status:** Initial proposal; visual direction and theme require owner approval.

## Design principles
- Modern, minimal, professional, and content-focused.
- Prioritize clarity, readability, and evidence of engineering work.
- Use restrained decoration and purposeful motion.
- Maintain consistent spacing, alignment, and interaction patterns.
- Avoid arbitrary skill percentage meters, excessive gradients, and generic stock imagery.

## Theme decision
Pending owner decision:
- Light theme
- Dark theme
- Both, with a user-controlled theme switch

Do not finalize brand colors until this decision is approved.

## Tokens to define
Create centralized CSS custom properties (or the project's chosen token mechanism) for:
- Brand/accent colors
- Neutral surfaces and text
- Semantic success, warning, and error colors
- Typography families, sizes, weights, and line heights
- Spacing scale
- Border widths and radii
- Shadows and elevation
- Layout widths and breakpoints
- Focus ring styles
- Motion durations and easing

## Typography
- Choose a highly readable font with appropriate language coverage.
- Establish a consistent heading scale.
- Use comfortable body line-height and readable paragraph widths.
- Avoid small text for essential information.
- Use tabular numerals where dates or metrics benefit from alignment.

## Layout
- Use a consistent content container and spacing rhythm.
- Use responsive grids that reflow naturally.
- Keep long-form text at a comfortable reading width.
- Prevent horizontal overflow.
- Preserve image aspect ratios and reserve image space to reduce layout shift.

## Components
Define shared visual behavior for:
- Header and navigation
- Footer
- Buttons and links
- Cards
- Tags and badges
- Form controls
- Alerts and feedback messages
- Loading skeletons
- Empty and error states
- Breadcrumbs
- Dialogs, if required

## Interaction states
Every interactive component must define default, hover (where relevant), focus-visible, active, disabled, loading, and error states as applicable. Do not rely on hover alone.

## Motion
- Keep transitions subtle and short.
- Respect `prefers-reduced-motion`.
- Do not delay access to important content.
- Avoid scroll-jacking and unnecessary entrance animations.

## Pending decisions
- Final theme
- Brand/accent color
- Font selection
- Logo/wordmark treatment
- Profile photography or illustration direction
