# Core Design System Architecture

## Decision

Core Platform Design System is maintained as one distributable package.

The project intentionally avoids multiple publishable packages at this stage.

## Package

```
@coreplatform/design-system
```

Contains:

- design tokens
- typography
- icons
- UI components
- themes
- documentation
- Storybook examples

## Rationale

The current priority is adoption and speed, not independent package versioning.

A single package reduces:

- changeset overhead
- dependency management
- release complexity
- synchronization issues

Future extraction is possible when independent versioning becomes necessary.
