# Security Policy

## Supported versions

Security fixes are applied to the latest release on the `main` branch.

| Version | Supported |
| --- | --- |
| Latest on `main` | Yes |
| Older releases | Best effort |

## Reporting a vulnerability

**Please do not open a public GitHub issue for security vulnerabilities.**

Instead, report them privately by emailing:

**bouzomitaabdelkader2004@gmail.com**

Include as much detail as possible:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if you have one)

You should receive a response within **7 days**. If the issue is confirmed, we
will work on a fix and coordinate disclosure with you.

## Scope

This policy covers:

- The Next.js web app in this repository
- The Chrome extension in `extension/`
- GitHub Actions workflows and repository configuration

Out of scope:

- Third-party services (Google Gemini, Netlify, Chrome Web Store)
- Self-hosted deployments with custom configuration outside this repo

## Safe disclosure

We appreciate responsible disclosure and will credit reporters in release notes
when they agree to be named.

## Secrets and API keys

- Never commit `.env` files or API keys to the repository
- Use `.env.example` as a template for local development
- Rotate any key that may have been exposed

See [CONTRIBUTING.md](CONTRIBUTING.md) for local setup guidance.
