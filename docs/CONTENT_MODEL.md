# Public Content Model

This document describes the content the public frontend expects to display. It is not a database schema. The backend owns persistence, validation, publication state, and canonical DTO definitions.

## General rules
- Render only content explicitly marked public/published by the backend.
- Do not infer or fabricate missing facts.
- Treat optional fields as optional.
- Keep stable public identifiers and slugs.
- Use consistent date formatting and an agreed timezone policy.
- Provide alt text for meaningful images.
- Do not expose private contact or personal data without owner approval.

## Profile
Potential fields:
- Display name
- Professional headline
- Short introduction
- Biography
- Profile image and alt text
- Public email (only if approved)
- Résumé URL
- Professional social links
- SEO title and description

## Project
Potential fields:
- Public ID and slug
- Title
- Short summary
- Full description or case-study sections
- Cover image and alt text
- Gallery images
- Technology tags
- Category
- Role and contributions
- Challenges and decisions
- Outcomes (verified only)
- Live demo URL
- Repository URL
- Featured flag
- Publication date
- SEO metadata

## Experience
Potential fields:
- Organization
- Role/title
- Employment type
- Start date and end date
- Current-role flag
- Location/work arrangement
- Summary
- Responsibilities and contributions
- Technology tags

## Skill
Potential fields:
- Name
- Category
- Optional description
- Display order

Do not assume a numeric proficiency score.

## Education
Potential fields:
- Institution
- Qualification/degree
- Department/subject
- Start and end dates
- Optional result (only with owner approval)
- Description
- Public institution URL

## Publication
Potential fields:
- Title
- Authors in exact order
- Venue/publisher
- Publication date/year
- DOI or official URL
- Abstract/summary
- Public PDF URL, if sharing is permitted

## Certification or achievement
Potential fields:
- Title
- Issuer
- Issue date
- Credential URL or ID (if approved)
- Description
- Image/logo (optional)

## Blog article (optional)
Potential fields:
- Slug
- Title
- Summary
- Body/content
- Author
- Cover image and alt text
- Categories/tags
- Published and updated dates
- SEO metadata

## Contact message
Visitor-submitted fields should be limited to what is necessary, such as:
- Name
- Email
- Subject (optional)
- Message

The backend must define validation, spam controls, retention, and privacy handling.

## Editorial governance
The owner is responsible for approving:
- Public biography and headline
- Employment details and dates
- Project descriptions and claims
- Academic results and publication metadata
- Public contact details
- Résumé and external links
