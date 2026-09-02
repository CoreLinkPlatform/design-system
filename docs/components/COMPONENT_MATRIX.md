# Component maturity matrix

Updated: 2026-09-02

| Component/capability | Layer | Maturity | Owner | Consumer evidence | Accessibility contract | Next gate |
|---|---|---|---|---|---|---|
| Button | Styled primitive | Candidate | Design System | Existing package and Storybook | Native button, focus, disabled state | Validate in two products |
| Card | Styled primitive | Candidate | Design System | Existing package and Storybook | Semantic element selected by consumer | Usage guidance and adoption evidence |
| Badge | Styled primitive | Candidate | Design System | Existing package and Storybook | Text must carry meaning; color is supplementary | Status semantics and adoption evidence |
| ThemeProvider | Headless foundation | Experimental | Design System | Existing package | Preserve user preference; no content loss | Light/dark regression coverage |
| Input | Styled primitive | Proposed | Design System | AgentReady #7/#14; design-system #9 | Label, help, error, keyboard and focus | API proposal and implementation |
| FormField | Headless/styled composition | Proposed | Design System | AgentReady audit form | Label/description/error relationships | Validate with Input |
| AsyncStatus | Headless primitive | Proposed | Design System | AgentReady #14 | Announced state changes and stable vocabulary | Experimental implementation |
| Progress | Styled primitive | Proposed | Design System | AgentReady #14 | Accessible name/value; indeterminate support | Experimental implementation |
| StatusIndicator | Styled primitive | Proposed | Design System | AgentReady #14 | Icon/text semantics; not color-only | Experimental implementation |
| Disclosure/Accordion | Headless primitive | Proposed | Design System | AgentReady #8/#14 | Keyboard and expanded state | Consumer API example |
| Tabs/SegmentedControl | Headless/styled primitive | Proposed | Design System | AgentReady report filters | Roving focus and selected state | Choose correct semantics per job |
| Tooltip | Headless primitive | Proposed | Design System | AgentReady evidence help | Hover/focus, dismissal and non-essential content | API proposal |
| Dialog/Drawer/BottomSheet | Headless primitive | Deferred | Design System | Only one tentative AgentReady need | Focus trap, escape, return focus, labelling | Wait for a proven flow |
| Skeleton | Styled primitive | Proposed | Design System | AgentReady loading | Hidden or meaningful announcement; no layout shift | Pair with AsyncStatus |
| EmptyState/ErrorState | Product-neutral composition | Proposed | Design System | AgentReady #9/#14; Console candidate | Heading, action, recovery and live-region guidance | Validate across two consumers |
| Metric/AnimatedNumber | Styled primitive | Proposed | Design System | AgentReady score; Console metrics | Locale formatting; static reduced-motion fallback | Experimental implementation |
| CodeBlock | Styled primitive | Proposed | Design System | AgentReady remediation | Bidi isolation, language label and copy feedback | Validate developer workflow |
| AuditProgress | Product composition | Experimental-local | AgentReady | AgentReady #14 | Live status, elapsed time and recovery | Keep in AgentReady |
| Finding/EvidenceCard | Product composition | Experimental-local | AgentReady | AgentReady #8/#14 | Structured headings, disclosure and bidi-safe evidence | Keep in AgentReady |
| RecommendationCard | Product composition | Experimental-local | AgentReady | AgentReady #8/#14 | Priority and action cannot rely on color | Keep in AgentReady |
| AgentJourneyTimeline | Product composition | Deferred | AgentReady | AgentReady #2/#14 | Ordered steps and explicit outcomes | Wait for journey schema |
| Source/ToolChip | Product composition | Deferred | AgentReady/Core Signal | Beautiful UI reference only | Text label and removable/interactive semantics | Require implemented consumer evidence |
| AgentStatusOrb | Experimental adapter | Deferred | Design System | AgentReady idea; Thinking Orbs reference | Never sole cue; reduced motion; static fallback | Evaluate under motion issue #12 |
| Canvas/WebGL effects | Brand experiment | Deferred | Consumer | No production evidence | Static fallback, reduced motion and performance budget | Keep out of base package |
