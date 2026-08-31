# Core Design System

Runtime implementation repository for the Core product-family design system.

## Ownership boundary

- Product semantics, UX rules, token meaning, governance, and maturity live in `CoreLinkPlatform/product-planning/design/system`.
- This repository owns runtime packages, Storybook, tests, and CI.

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

## Development

Requirements:

- Node.js >= 22
- pnpm 10

Install:

```bash
pnpm install
```

Build:

```bash
pnpm build
```

## Status

Alpha foundation. Runtime implementation follows the canonical specification from product-planning.
