# Experimental agent feedback

Status: Experimental. AgentReady must validate these contracts before promotion.

## Contract

- Import components from `src/experimental` and styles explicitly from `src/experimental/styles.css`; the stable entry and stable CSS do not import this slice.
- Every state requires visible text. Color, pulse and `AgentStatusOrb` are supplementary.
- `AsyncStatus` uses polite announcements by default and assertive announcements only for blocked/error states. Consumers should update one mounted region rather than append repeated live regions.
- Determinate `Progress` exposes min/max/value; indeterminate progress omits `aria-valuenow`.
- `AnimatedNumber` exposes the final formatted value to assistive technology and becomes static in reduced-motion mode.
- Streaming containers must reserve a minimum block size, retain stable keys and update content in place to avoid layout shifts.

## Motion budget

| Role | Token | Budget |
|---|---|---|
| Instant feedback | `--core-motion-instant` | 0 ms |
| Hover/focus | `--core-motion-fast` | 120 ms |
| State/layout move | `--core-motion-normal` | 240 ms |
| One-off emphasis | `--core-motion-slow` | 400 ms maximum |

Stagger is consumer-owned: 30–50 ms between items, at most 6 items, and no sequence longer than 500 ms. Continuous status animation uses only opacity/transform and stops when reduced motion is requested. Animate no more than one orb and one progress indicator in the primary mobile viewport. No filter, blur, box-shadow, layout or GPU-canvas animation is permitted in critical flows.

## Provenance

The API was informed by public patterns from Beautiful UI and beUI. `AgentStatusOrb` is an original CSS adapter inspired by the state vocabulary of Thinking Orbs; no upstream source or Canvas implementation was copied. It has no runtime dependency and is not a reasoning/chain-of-thought display. Rare UI informed the opt-in delivery model. Canvas UI remains excluded due to critical-flow suitability and licensing/performance constraints.

## Promotion evidence

Capture AgentReady evidence for queued, running, partial, blocked, error and success states; Persian RTL and English LTR; light/dark; keyboard and screen-reader announcements; a 360 px viewport; reduced motion; and low-end mobile trace without long animation frames.
