# Consumer evidence

## AgentReady

Evidence date: 2026-09-02

Repositories and work items:

- Consumer: https://github.com/jaavid/agentready
- Design-system adoption: https://github.com/jaavid/agentready/issues/7
- Report information architecture: https://github.com/jaavid/agentready/issues/8
- Accessibility and localization: https://github.com/jaavid/agentready/issues/9
- Product compositions: https://github.com/jaavid/agentready/issues/14

### User job

A website owner needs to start an audit, understand its progress, trust the resulting score, inspect evidence and act on prioritized fixes.

### Proven shared needs

- Labelled input and form errors
- Async status vocabulary
- Determinate and indeterminate progress
- Status badge/indicator
- Metric formatting
- Disclosure for technical evidence
- Code block and copy feedback
- Empty, partial, failed and retry states
- RTL/LTR, bidi isolation, light/dark and reduced-motion support

### Product-local needs

AuditProgress, ReportSummary, CategoryBreakdown, FindingCard, EvidenceBlock, RecommendationCard, ReportFilters and AgentJourneyTimeline remain in AgentReady. They may consume Core primitives but do not become shared exports without further evidence.

## Future evidence

Core Console and Core Signal requests must use the component request template and link exact product revisions. Similar appearance does not count as shared-contract evidence.
