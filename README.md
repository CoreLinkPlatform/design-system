# Core Design System

Runtime implementation repository for the Core product-family design system.

## Ownership boundary

- Product semantics, UX rules, token meaning and canonical design decisions live in `CoreLinkPlatform/product-planning/design/system`.
- This repository owns the runtime package, Storybook, tests, consumer intake and component lifecycle evidence.

## Architecture

The design system is intentionally maintained as a single package at this stage:

- `@coreplatform/design-system`

```
src/
├── components
├── tokens
├── icons
├── themes
└── index.ts
```

## Design principles

- One package until independent release boundaries are justified.
- Shared semantic tokens instead of product-specific styling.
- Components consume the same brand, typography, icon and theme rules.
- Consumer jobs and evidence drive component scope.
- Product compositions stay in products until a reusable contract is proven.
- RTL/LTR, accessibility, themes and reduced motion are part of component quality.

## Component governance

- [Maturity lifecycle and promotion gates](docs/COMPONENT_MATURITY.md)
- [Current component maturity matrix](docs/components/COMPONENT_MATRIX.md)
- [Consumer evidence](docs/CONSUMER_EVIDENCE.md)
- [Decision log](docs/COMPONENT_DECISIONS.md)
- [Contribution guide](CONTRIBUTING.md)

Submit new needs through the **Component request** issue template. Requests begin as Proposed and do not become stable exports automatically.

## Development

Requirements:

- Node.js >= 22
- pnpm 10

```bash
pnpm install
pnpm build
pnpm storybook
```

## Status

Alpha foundation. Runtime implementation follows the canonical specification from product-planning and the evidence-backed maturity process in this repository.
