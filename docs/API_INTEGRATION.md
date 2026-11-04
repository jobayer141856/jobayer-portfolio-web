# Public API Integration

**Status:** Contract proposal only. Confirm actual paths and schemas with the ASP.NET Core backend and its OpenAPI document.

## Responsibilities
The Angular public frontend:
- Reads published public portfolio content.
- Submits visitor contact messages.
- Does not manage portfolio content.
- Does not call admin-only operations.
- Does not contain privileged credentials.

## Proposed resource groups

| Resource | Proposed purpose |
|---|---|
| Profile | Public profile and hero content |
| Experiences | Published work history |
| Projects | Published project list and details |
| Skills | Skill categories and items |
| Educations | Public education records |
| Publications | Public research records |
| Certifications | Public credentials |
| Blog | Published articles, if enabled |
| Contact | Visitor message submission |

Proposed route prefix: `/api/v1`. Final endpoint paths, HTTP methods, query parameters, and payloads are pending backend agreement.

## Service organization
Create a focused Angular service per resource or feature. Keep HTTP concerns out of page components. Use typed interfaces/models generated from or aligned with the backend OpenAPI contract where practical.

## API configuration
- Use an environment-specific base URL.
- Use HTTPS in production.
- Do not place secrets in frontend configuration.
- Configure timeouts and retry behavior deliberately.
- Do not automatically retry non-idempotent contact submissions unless the backend supports idempotency.

## Expected UI states
Every API-driven feature should account for:
- Initial loading
- Loaded with data
- Loaded with no data
- Request failure
- Not found (for detail routes)
- Partial optional data

## Error handling
- Present a friendly, actionable message.
- Do not expose stack traces, SQL details, internal exception messages, or infrastructure data.
- Log useful diagnostic information only through an approved monitoring solution.
- Retry only where useful and safe.
- Backend validation errors should be mapped to relevant fields where possible.

## Contact submission
The contact form should:
1. Validate required fields for usability.
2. Submit to the agreed public contact endpoint.
3. Show a pending state and prevent accidental repeated submission.
4. Show success only after confirmed server success.
5. Show a recoverable error on failure.
6. Avoid logging or exposing message contents unnecessarily.

## Contract checklist for backend coordination
- Exact endpoint paths and methods
- Response envelopes and pagination format
- DTO field names and nullability
- Slug and public identifier rules
- Published/visibility behavior
- Date/time format and timezone policy
- Error response format
- Contact form validation and spam protection
- CORS and caching policy
- OpenAPI document location and versioning
