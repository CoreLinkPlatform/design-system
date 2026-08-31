# @coreplatform/tokens

Framework-independent semantic design tokens.

Source of truth:
`CoreLinkPlatform/product-planning/design/system`

Targets:

- colors
- typography
- spacing
- radius
- shadows
- motion
- focus
- density
- light/dark themes

## Core Platform Rules

All Core Platform products consume these semantic tokens.

Products must not define their own visual primitives.

Forbidden:

- hardcoded colors
- custom spacing scales
- product-specific radius values

Required:

- semantic naming
- accessibility-aware contrast
- shared light/dark behavior

## Token Roadmap

Outputs:

- JSON token source
- CSS variables
- Tailwind integration
- Component library integration
