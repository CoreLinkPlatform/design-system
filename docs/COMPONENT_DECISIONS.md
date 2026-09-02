# Component decision log

| Date | Request | Decision | Reason | Revisit when |
|---|---|---|---|---|
| 2026-09-02 | Promote AgentReady report cards to Core | Deferred | Domain-specific evidence, scoring and remediation semantics belong to AgentReady | A second consumer proves the same contract |
| 2026-09-02 | Add AgentStatusOrb to stable exports | Deferred | Only a visual reference exists; status must work without animation | AgentReady validates an accessible API under issue #12 |
| 2026-09-02 | Add WebGL/WebGPU effects to the base package | Rejected | Critical UI must not inherit GPU, browser-support and bundle costs | A product-specific brand experiment proves value and fallback |
| 2026-09-02 | Copy external component registries into Core | Rejected | Core needs owned APIs, tokens, tests and provenance—not an unreviewed visual fork | Individual components pass intake and license review |
| 2026-09-02 | Add Dialog/Drawer/BottomSheet immediately | Deferred | AgentReady has no proven overlay flow yet | A captured flow demonstrates that inline disclosure is insufficient |
