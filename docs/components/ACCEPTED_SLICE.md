# Accepted component slice

This slice is backed by AgentReady and existing Core product needs. It intentionally excludes Menu and overlay primitives until a captured consumer flow proves them.

## Included

| Component | Layer | Key guidance |
|---|---|---|
| Button | Styled primitive | Use for actions; loading disables repeat submission |
| IconButton | Styled primitive | A non-empty accessible `label` is required |
| Input | Styled primitive | Pair with FormField; connect description/error IDs |
| Select | Styled primitive | Prefer native select until advanced behavior is proven |
| FormField | Product-neutral composition | Owns visible label, description and error layout |
| Surface | Styled primitive | Visual container; consumer chooses the semantic element |
| Card | Product-neutral composition | Use for grouped content, not every section |
| StatusBadge | Styled primitive | Always include text; color/dot are supplementary |
| Metric | Styled primitive | Format values in the consumer locale |
| PageHeader | Product-neutral composition | One page title with optional description/actions |
| EmptyState | Product-neutral composition | Explain the state and provide a useful next action |

## Accessibility contract

- Keyboard focus is visible.
- Controls retain native semantics.
- Disabled and loading states prevent duplicate action.
- Validation uses `aria-invalid`, `aria-describedby` and a live error.
- Status is never communicated by color alone.
- IconButton requires an accessible name.
- RTL/LTR use logical CSS properties.
- Dark theme uses semantic variables.
- Reduced-motion preferences remove non-essential transitions.

## Consumer boundary

AgentReady-specific AuditProgress, ReportSummary, FindingCard, EvidenceBlock, RecommendationCard and ReportFilters remain in AgentReady. They compose these primitives and must not be imported back into Core without new evidence.
