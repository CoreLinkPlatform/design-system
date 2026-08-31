# Core Design System

Runtime implementation repository for the Core product-family design system.

## Ownership boundary

- Product semantics, UX rules, token meaning, governance, and maturity live in `CoreLinkPlatform/product-planning/design/system`.
- This repository owns runtime packages, Storybook, tests, CI and releases.

## First vertical slice

Packages:

- `@coreplatform/tokens`
- `@coreplatform/icons`
- `@coreplatform/ui`

Initial consumer: `CoreLinkPlatform/Control`.

## Non-goals for first release

- charts package
- patterns package
- full AppShell extraction
- premature DataTable abstraction

## Status

Alpha foundation. Runtime implementation follows the canonical specification from product-planning.
