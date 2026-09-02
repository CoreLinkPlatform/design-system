# Contributing

Core Design System contributions must preserve the ownership boundary: product semantics and canonical design decisions live in `CoreLinkPlatform/product-planning/design/system`; this repository owns runtime implementation.

## Component requests

1. Open the **Component request** issue template.
2. Link real consumer evidence and an owner.
3. Describe the user job, states, accessibility, RTL/LTR and theme requirements.
4. State whether the request is a headless primitive, styled primitive or product composition.
5. Maintainers triage it using `docs/COMPONENT_MATURITY.md` and update the component matrix.
6. Product compositions remain in the consumer unless a shared contract is proven.

## Implementation requirements

Before promotion to Candidate or Stable, include:

- semantic-token consumption;
- Storybook variants and state coverage;
- Persian/RTL and English/LTR examples;
- light and dark behavior;
- keyboard, focus and screen-reader behavior;
- interaction and visual-regression tests;
- bundle/performance impact;
- usage and non-usage guidance;
- changelog and exact consumer revision;
- license and source revision for adapted upstream work.

## Pull requests

A pull request must identify the maturity transition it proposes and link:

- component request;
- consumer evidence;
- matrix entry;
- canonical planning decision when semantics change;
- tests and Storybook evidence.

Visual polish alone is not sufficient for a stable shared export.
