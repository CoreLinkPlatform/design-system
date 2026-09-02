# Component maturity and consumer intake

This document governs runtime component maturity in `@coreplatform/design-system`. Canonical product semantics remain in `CoreLinkPlatform/product-planning/design/system`.

## Principles

1. Start with a user job, not a visual reference.
2. Prefer product composition until a reusable contract is proven.
3. Stable components require consumer evidence, accessibility and regression coverage.
4. Motion and visual novelty never replace semantics.
5. RTL/LTR and light/dark behavior are part of the API.

## Maturity lifecycle

| Maturity | Meaning | Export policy |
|---|---|---|
| Proposed | A documented consumer need awaiting triage | Not exported |
| Experimental | API may change; one product is validating it | Explicit experimental path; no stability promise |
| Candidate | Contract is supported by two consumers, or one consumer plus an approved platform need | Public preview with migration notes |
| Stable | Production contract and quality gates are complete | Normal package export; semver applies |
| Deprecated | Replacement and removal window are published | Kept until the announced major release |

## Promotion gates

### Proposed → Experimental

- Named user job and owning product
- Evidence link
- Required states
- Proposed ownership layer
- Accessibility, direction and theme requirements
- Existing alternatives evaluated
- Maintainer assigned

### Experimental → Candidate

- Adoption evidence from two consumers, or one consumer plus a platform-level decision
- API review completed
- Semantic tokens only
- Storybook coverage for all states
- Persian/RTL and English/LTR examples
- Light and dark examples
- Keyboard, focus and screen-reader contract
- Interaction and visual-regression tests
- Bundle and performance impact recorded
- Upstream license/provenance recorded when adapted

### Candidate → Stable

- Production adoption and feedback documented
- No unresolved critical accessibility defects
- Semver and migration behavior documented
- Public usage and non-usage guidance
- Ownership and maintenance commitment
- Changelog entry and exact package revision

## Ownership layers

| Layer | Purpose | Default location |
|---|---|---|
| Headless primitive | State and accessible behavior without product styling | Design-system package |
| Styled primitive | Shared Core visual and interaction contract | Design-system package |
| Product composition | Domain meaning assembled from primitives | Consumer repository |
| Experimental adapter | Optional third-party or specialized behavior | Experimental export or consumer repository |

## Triage

Maintainers review component requests against the matrix in `docs/components/COMPONENT_MATRIX.md`. Rejected and deferred requests are recorded in `docs/COMPONENT_DECISIONS.md`. Promotion must link exact consumer revisions and test evidence.
