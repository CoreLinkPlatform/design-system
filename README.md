# Core Design System

Runtime implementation repository for the Core product-family design system.

## Ownership boundary

- Product semantics, UX rules, token meaning, governance, and maturity live in `CoreLinkPlatform/product-planning/design/system`.
- This repository owns the runtime design system package, Storybook, tests, and CI.

## Architecture

The design system is intentionally maintained as a single package at this stage.

Package:

- `@coreplatform/design-system`

Source structure:

```
src/
├── components
├── tokens
├── icons
├── themes
└── index.ts
```

The package exposes shared foundations for Core Platform products such as Core Console, Core Link, and Core Signal.

## Design Principles

- One package until independent release boundaries are justified.
- Shared semantic tokens instead of product-specific styling.
- Components consume the same brand, typography, icon and theme rules.

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

Storybook:

```bash
pnpm storybook
```

## Status

Alpha foundation. Runtime implementation follows the canonical specification from product-planning.
