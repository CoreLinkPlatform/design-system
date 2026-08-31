# Core Console Component Architecture

## Stack Direction

The design system should provide reusable components for Core Platform products.

Recommended foundation:

- React
- TypeScript
- Tailwind CSS
- Radix UI primitives
- Phosphor Icons
- Storybook

## Component Layers

### Foundation

- Color tokens
- Typography
- Spacing
- Radius
- Shadows
- Motion
- Icons

### Primitive Components

- Button
- Input
- Select
- Badge
- Avatar
- Tooltip
- Card

### Composite Components

- DataTable
- FilterBar
- ResourceCard
- MetricCard
- Timeline
- ActivityFeed
- StatusPanel

### Product Components

- DeviceExplorer
- SignalViewer
- DecisionTimeline
- ConnectorWizard
- HealthDashboard

## Rules

Do not create product-specific UI primitives inside applications.

All products consume shared design tokens and components.

Forbidden:

- Hardcoded colors
- Random spacing values
- One-off layouts
- Duplicate components

Required:

- Semantic tokens
- Accessible components
- Shared patterns
