# Routes and Navigation

**Status:** Proposed route map; confirm before implementation.

## Proposed routes

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Main professional introduction |
| `/about` | About | Biography and professional focus |
| `/experience` | Experience | Career history |
| `/projects` | Projects | Published project listing |
| `/projects/:slug` | Project detail | Shareable case study |
| `/skills` | Skills | Optional dedicated skills page |
| `/education` | Education | Academic background |
| `/publications` | Publications | Research work |
| `/certifications` | Certifications | Credentials and achievements |
| `/blog` | Blog listing | Only if blog is approved |
| `/blog/:slug` | Blog article | Only if blog is approved |
| `/contact` | Contact | Contact details and form |
| `**` | Not found | Custom 404 experience |

Some sections may instead be sections on the home page. Avoid creating thin pages with little useful content.

## Navigation behavior
- Desktop navigation should clearly identify the current page or active section.
- Mobile navigation must use a keyboard-accessible menu button.
- Escape should close an open mobile menu where appropriate.
- Focus must remain logical when the menu opens and closes.
- Provide a visible path back to the home page from detail pages.
- Do not use hover-only navigation.
- Keep primary navigation concise.

## URL and slug rules
- Use stable, readable, lowercase slugs.
- Detail pages must be directly addressable and shareable.
- Handle missing or unpublished slugs with a not-found state.
- Do not use array indexes as public identifiers.
- Preserve canonical URLs when slugs change, using backend redirects or an agreed redirect strategy.

## Route metadata
Each indexable route should define:
- Unique document title
- Unique meta description
- Canonical URL
- Open Graph title, description, and image where relevant
- Appropriate robots directives

## Navigation acceptance criteria
- All links work with mouse, touch, and keyboard.
- Current route/section is perceivable.
- Mobile navigation does not obscure or trap content.
- Browser back/forward navigation works.
- Unknown routes show a useful 404 page.
