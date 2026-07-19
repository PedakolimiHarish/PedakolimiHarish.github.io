# Design System

**Status:** Version 1.0 baseline. Review this document before user-interface implementation.

## Brand Direction

The interface should feel precise, calm, and systems-focused. It should resemble an engineering publication or product documentation experience more than a generic personal portfolio. Real project evidence and technical diagrams create the visual interest; the UI stays quiet and deliberate.

The initial identity treatment is a compact outlined `PH` monogram paired with the full name. It is intentionally typographic rather than a standalone logo system, so it remains credible before a dedicated personal mark is needed.

## Color System

Use CSS custom properties as the only source of color values.

| Token | Value | Purpose |
| --- | --- | --- |
| `--color-canvas` | `#080B0F` | Page background |
| `--color-surface` | `#11161D` | Cards and grouped regions |
| `--color-surface-raised` | `#18212B` | Hover and elevated surfaces |
| `--color-border` | `#2A3440` | Subtle dividers and outlines |
| `--color-text` | `#F1F5F9` | Primary text |
| `--color-text-muted` | `#A8B3C0` | Supporting text |
| `--color-accent` | `#5EE4FF` | Links, technical highlights, focus-adjacent UI |
| `--color-focus` | `#F0C96A` | Keyboard focus outline |

Accent color is reserved for meaningful interactive or technical emphasis, never used as decoration across large surfaces. Every final foreground/background pair must pass WCAG AA contrast requirements.

## Typography

- Use a system sans-serif stack for all interface and editorial text: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- Use a system monospace stack only for code, stacks, metadata, and diagram labels: `ui-monospace, "Cascadia Code", "SFMono-Regular", Consolas, monospace`.
- Use fluid type with `clamp()` values. The Home title is the only display-scale heading; all other headings communicate hierarchy through size, weight, and spacing rather than decorative treatments.
- Body copy should remain comfortably readable at 16–18px equivalent with a generous line height. Avoid justified copy and all-uppercase paragraphs.

## Spacing, Grid, and Surfaces

- Use a 4px spacing base with named steps: 4, 8, 12, 16, 24, 32, 48, 64, 96, and 128px.
- Use a centered content container with a 1200px maximum width, safe inline gutters, and a 12-column desktop / 8-column tablet / 4-column mobile grid.
- Favor whitespace and one-pixel borders over large shadows. Cards have a restrained radius and only lift slightly on supported hover devices.
- Maintain a single dominant focal point per section and one clear action at the end of each page.

## Component Contracts

Components are semantic HTML patterns styled through stable `c-` class names. Components do not rely on JavaScript to render their essential markup.

| Component | Responsibility |
| --- | --- |
| `c-navbar` | Site navigation, current-page indication, and accessible mobile disclosure |
| `c-button` | Primary, secondary, and text-link actions |
| `c-section` | Consistent section spacing, heading treatment, and optional metadata |
| `c-hero` | Page purpose, lead statement, supporting evidence, and primary action |
| `c-card` | General grouped content surface |
| `c-project-card` | Project title, scope, evidence, tags, and destination |
| `c-project-header` | Case-study identity, role, scope, media, and links |
| `c-timeline` | Chronological engineering, education, or release history |
| `c-diagram` | Captioned, accessible technical illustration with text fallback |
| `c-footer` | Contact routes, professional profiles, and copyright information |

Modifiers may change density or emphasis, but they must not introduce page-specific duplicate components. New components require a documented semantic purpose before they are added.

## Media and Diagram Rules

- Use only owned, approved, or clearly licensed media.
- Prefer responsive AVIF/WebP images; preserve original source files outside the deployed asset path when needed.
- Every media item needs meaningful alternative text, dimensions, and a caption when engineering context matters.
- Technical diagrams should be inline SVG when practical, with a visible title, caption, and text alternative. Never encode essential information solely through color.
- Video should have a poster image, descriptive title, captions where speech matters, and deferred loading when it is not the LCP asset.

## Interaction and Motion

- Motion exists to reveal state change, hierarchy, or direct interaction.
- Favor 150–220ms opacity and transform transitions with easing that feels responsive rather than theatrical.
- Do not use parallax, particles, automatic carousels, scroll-jacking, or decorative loaders.
- `prefers-reduced-motion: reduce` disables nonessential motion.

## Responsive and Accessibility Rules

- Start with a robust single-column mobile layout, then add grid complexity only when space permits.
- Touch targets must remain comfortably usable; hover-only information must never be essential.
- Keyboard focus uses a visible high-contrast outline distinct from the accent link color.
- Use ARIA only to describe behavior native HTML cannot express.
