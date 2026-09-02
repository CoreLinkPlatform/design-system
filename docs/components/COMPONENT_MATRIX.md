# Component maturity matrix

Updated: 2026-09-02

| Component/capability | Layer | Maturity | Owner | Consumer evidence | Accessibility contract | Next gate |
|---|---|---|---|---|---|---|
| Button | Styled primitive | Candidate | Design System | Package, Storybook, AgentReady #7/#14 | Native button, visible focus, disabled/loading | Production adoption in AgentReady |
| IconButton | Styled primitive | Candidate | Design System | AgentReady actions | Required accessible label and 44px default target | Production adoption in AgentReady |
| Input | Styled primitive | Candidate | Design System | AgentReady audit form | Native input, label/help/error wiring | Production adoption in AgentReady |
| Select | Styled primitive | Candidate | Design System | AgentReady vertical profiles | Native select and keyboard behavior | Second consumer evidence |
| FormField | Product-neutral composition | Candidate | Design System | AgentReady audit form | Visible label, description and live error | Production adoption in AgentReady |
| Surface | Styled primitive | Candidate | Design System | AgentReady and Console surfaces | Consumer-selected semantic element | Production adoption in AgentReady |
| Card | Product-neutral composition | Candidate | Design System | Existing package, AgentReady reports | Structured header/content/footer | Usage feedback |
| StatusBadge | Styled primitive | Candidate | Design System | AgentReady finding states | Text semantics; color/dot supplementary | Production adoption in AgentReady |
| Badge | Compatibility alias | Deprecated | Design System | Existing package consumers | Delegates to StatusBadge | Remove in next major after migration |
| Metric | Styled primitive | Candidate | Design System | AgentReady score; Console metrics | Locale formatting in consumer; reduced-motion safe | Validate in two products |
| PageHeader | Product-neutral composition | Candidate | Design System | AgentReady report and Console candidate | One h1; responsive actions | Validate in two products |
| EmptyState | Product-neutral composition | Candidate | Design System | AgentReady #9/#14; Console candidate | Heading, recovery and useful next action | Validate in two products |
| ThemeProvider | Headless foundation | Experimental | Design System | Existing package | Preserve preference and content | Light/dark regression coverage |
| MotionProvider | Headless foundation | Experimental | Design System | AgentReady #14 | System/forced preference and static fallback | Validate in AgentReady |
| AsyncStatus | Headless primitive | Experimental | Design System | AgentReady #14 | Visible text, controlled live region and stable vocabulary | Validate in AgentReady |
| Progress | Styled primitive | Experimental | Design System | AgentReady #14 | Accessible name/value and indeterminate mode | Validate in AgentReady |
| StatusIndicator | Styled primitive | Experimental | Design System | AgentReady #14 | Required visible label; color/motion supplementary | Validate in AgentReady |
| AnimatedNumber | Styled primitive | Experimental | Design System | AgentReady score/metrics | Final value announced; static reduced-motion fallback | Validate in AgentReady |
| Disclosure/Accordion | Headless primitive | Proposed | Design System | AgentReady #8/#14 | Keyboard and expanded state | Future slice |
| Tabs/SegmentedControl | Headless/styled primitive | Proposed | Design System | AgentReady report filters | Focus and selected-state semantics | Future slice |
| Tooltip | Headless primitive | Proposed | Design System | AgentReady evidence help | Hover/focus/dismissal | Future slice |
| Dialog/Drawer/BottomSheet | Headless primitive | Deferred | Design System | No proven overlay flow | Focus trap, escape, return focus, labelling | Wait for captured flow |
| Skeleton | Styled primitive | Proposed | Design System | AgentReady loading | No layout shift; paired status announcement | Issue #12 |
| CodeBlock | Styled primitive | Proposed | Design System | AgentReady remediation | Bidi isolation and copy feedback | Future slice |
| AuditProgress | Product composition | Experimental-local | AgentReady | AgentReady #14 | Live status, elapsed time and recovery | Keep in AgentReady |
| Finding/EvidenceCard | Product composition | Experimental-local | AgentReady | AgentReady #8/#14 | Structured disclosure and bidi-safe evidence | Keep in AgentReady |
| RecommendationCard | Product composition | Experimental-local | AgentReady | AgentReady #8/#14 | Priority/action not color-only | Keep in AgentReady |
| AgentJourneyTimeline | Product composition | Deferred | AgentReady | AgentReady #2/#14 | Ordered steps and explicit outcomes | Wait for journey schema |
| AgentStatusOrb | Experimental adapter | Experimental | Design System | AgentReady idea | Required label; never sole cue; static fallback | Validate alongside AsyncStatus |
| Canvas/WebGL effects | Brand experiment | Deferred | Consumer | No production evidence | Static fallback and performance budget | Keep out of base package |
