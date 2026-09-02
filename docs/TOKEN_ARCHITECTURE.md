# Runtime token architecture

The canonical product meaning remains in `CoreLinkPlatform/product-planning/design/tokens.json`. Runtime source `src/tokens/source.json` records that source path, version and exact canonical revision, then adds only implementation roles required by accepted components.

`pnpm tokens:generate` deterministically produces CSS variables and typed TypeScript exports. `pnpm tokens:check` runs in CI and fails when generated outputs are stale.

## Layers

1. Canonical reference values: Core palette, neutral themes, typography, spacing and radius.
2. Runtime semantic roles: surface, text, border, action, focus and operational status.
3. Component consumption: components reference semantic CSS variables and do not own product hex, focus or radius values.

Light is the default. Dark replaces semantic values without changing component structure. Persian/Arabic switches the UI family token to Noto Sans Arabic; English/Latin uses Noto Sans. All directional layout remains in logical CSS properties.

## Reconciliation rule

Changes to palette, typography, shape, spacing or product meaning begin in `product-planning/design/`. Runtime-only additions must name an implementation role, preserve canonical meaning and include a consumer. The runtime repository does not redefine brand semantics.
