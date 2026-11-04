# Environment and Configuration

## Principles
- Keep environment-specific configuration separate from application logic.
- Frontend configuration is public: anything shipped to the browser can be inspected.
- Never place secrets, private API keys, database credentials, or signing keys in Angular configuration.
- Use HTTPS for production API communication.

## Configuration values
The application may need:
- Public API base URL
- Public site origin
- Environment identifier
- Optional analytics public measurement ID, only if approved
- Optional public feature flags

Exact names should follow the Angular project's environment/configuration approach.

## Environments
Maintain separate configuration for:
- Local development
- Test/staging
- Production

Do not point production builds at development or staging services.

## Configuration validation
- Fail clearly when required public configuration is missing.
- Validate URL formats at startup/build time where practical.
- Do not print sensitive visitor-submitted data in logs.
- Ensure source maps and diagnostics follow the deployment security policy.

## Local development
Document:
- Supported Node.js version
- Package manager and version
- Install command
- Development server command
- Test and lint commands
- Production build command
- Local API URL and CORS setup

These exact versions and commands should be recorded after the project is scaffolded.
