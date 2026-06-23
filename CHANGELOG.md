# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.4.0] - 2026-06-23

### Added

- GitHub Actions CI for lint, build, and extension validation on pull requests and `main`
- Branch protection rules requiring reviews and passing CI checks
- Open source documentation: MIT license, code of conduct, security policy, and changelog
- CODEOWNERS, Dependabot, and expanded contributor documentation
- Mortakaz launch section and assets on the landing page

### Changed

- Upgraded to Next.js 16 with Turbopack as the default bundler
- Migrated from `next lint` to ESLint CLI with flat config
- Renamed `middleware.ts` to `proxy.ts` for Next.js 16 compatibility
- Improved output copy UI and realistic user preview on the landing page

## [1.3.0] - 2026-06-20

- Chrome extension with Fusha, Tunisian, English, and French conversion modes
- Web app with bilingual UI, history, and bookmarks

[Unreleased]: https://github.com/Abdelkaderbzz/arabizzi/compare/v1.4.0...HEAD
[1.4.0]: https://github.com/Abdelkaderbzz/arabizzi/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/Abdelkaderbzz/arabizzi/releases/tag/v1.3.0
