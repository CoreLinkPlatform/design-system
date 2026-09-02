# Core Design System

Runtime implementation repository for the Core product-family design system.

## Ownership boundary

- Product semantics, UX rules, token meaning and canonical design decisions live in `CoreLinkPlatform/product-planning/design/system`.
- This repository owns the runtime package, Storybook, tests, consumer intake and component lifecycle evidence.

## Package

The design system is intentionally maintained as one package:

```
@corelinkplatform/design-system
```

Install from GitHub Packages, then import the stable runtime:

```tsx
import { Button, Card, PageHeader } from '@corelinkplatform/design-system';
import '@corelinkplatform/design-system/styles.css';
```

The root entry currently includes the runtime stylesheet for compatibility. The explicit CSS export is recommended so consumers document the dependency. Experimental motion styles are opt-in:

```ts
import '@corelinkplatform/design-system/experimental/styles.css';
```

Published artifacts contain compiled ESM, TypeScript declarations and runtime CSS under `dist/`.

## Architecture

```
src/
├── components
├── tokens
├── icons
├── themes
├── experimental
└── index.ts
```

## Design principles

- One package until independent release boundaries are justified.
- Shared semantic tokens instead of product-specific styling.
- Consumer jobs and evidence drive component scope.
- Product compositions stay in products until a reusable contract is proven.
- RTL/LTR, accessibility, themes and reduced motion are release quality.

## Component governance

- [Maturity lifecycle and promotion gates](docs/COMPONENT_MATURITY.md)
- [Current component maturity matrix](docs/components/COMPONENT_MATRIX.md)
- [Consumer evidence](docs/CONSUMER_EVIDENCE.md)
- [Decision log](docs/COMPONENT_DECISIONS.md)
- [Contribution guide](CONTRIBUTING.md)

## Development

Requires Node.js 22 or newer and pnpm 10.

```bash
pnpm install --frozen-lockfile
pnpm tokens:check
pnpm lint
pnpm test
pnpm package:check
pnpm storybook:build
```

`package:check` builds the distributable artifact, verifies every public export target and inspects the package tarball before publication.

## Status

Alpha foundation. Runtime implementation follows the canonical Product Planning specification and the evidence-backed maturity process in this repository.
