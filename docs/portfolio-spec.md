# Robotics Portfolio Specification

**Version:** 1.0  
**Status:** Frozen foundation  
**Hosting:** GitHub Pages at `https://pedakolimiharish.github.io/`

## Purpose

This site represents a Robotics Software Engineer who builds real robotic systems. It must make the engineering process, technical judgment, and project evidence easy to assess.

## Target Audience

### Primary

- Robotics software recruiters
- Robotics startups and founders
- Robotics engineers
- Research labs
- Hiring managers

### Secondary

- Open-source contributors
- Students
- Robotics enthusiasts

Within ten seconds, a visitor should understand who the engineer is, what robotic systems they build, why the work is valuable, and how to make contact. Every content and design decision serves that outcome.

## Product Principles

- Show engineering instead of claiming expertise.
- Prefer architecture diagrams, implementation details, and measured facts over marketing language.
- Use real project media only; never imply ownership of generic robotics imagery.
- Never fabricate projects, results, achievements, or timelines.
- Avoid skill percentages, progress bars, filler copy, and generic claims such as “passionate problem solver.”
- Keep every page focused: state its purpose before scrolling, establish one dominant focal point per section, and end with one obvious next action.
- Use animation only to communicate hierarchy or interaction. No parallax, particle effects, decorative loading screens, or motion that ignores reduced-motion preferences.

## Technical Constraints

- HTML5, CSS3, and modern vanilla JavaScript only.
- Static GitHub Pages deployment; no framework, server, CMS, or build dependency in version 1.0.
- Semantic HTML and resilient core content: JavaScript may enhance interaction but never generates essential content.
- Optimize for current desktop, tablet, and mobile browsers, keyboard navigation, and Lighthouse scores above 95 across all categories.

## Information Architecture

The durable route structure is:

- Home
- Projects
  - Individual project case studies, for example `/projects/safefollow/`
- Engineering
  - Software architecture, ROS 2, firmware, robotics design philosophy, and technical capability areas
- Writing
  - Technical articles, learning notes, and project updates
- Resume
- About
- Contact

Projects, Engineering resources, and Writing entries must support zero to many items. Navigation, layout, and content patterns must not assume a fixed project count.

## Project Case Studies

Project pages are the portfolio’s deepest content and primary evidence of engineering ability. Each uses the following ordered, modular structure; sections with no relevant verified material are omitted rather than filled with placeholders.

1. Hero
2. Overview
3. Problem
4. Goals
5. System Architecture
6. Hardware Architecture
7. Software Architecture
8. Technology Stack
9. State Machine and Communication
10. Engineering Challenges and Solutions
11. Images, Videos, and Technical Diagrams
12. Lessons Learned
13. Future Work
14. Repository
15. Documentation

System architecture diagrams, flow diagrams, state machines, ROS graphs, and hardware block diagrams are first-class content. Each diagram needs a meaningful title, a concise text explanation, and an accessible alternative.

## SEO, Performance, and Accessibility

- Provide page-specific titles, descriptions, canonical URLs, Open Graph metadata, Twitter metadata, sitemap, and robots policy.
- Add `Person` and `WebSite` structured data only after identity and profile details are verified.
- Use optimized AVIF/WebP media with intrinsic dimensions and descriptive alternative text. Lazy-load below-the-fold media; prioritize only the true LCP asset.
- Preserve visible focus states, heading hierarchy, semantic landmarks, sufficient contrast, and reduced-motion support.
- Validate direct access to nested routes and ensure the page remains readable when JavaScript is unavailable.

## Repository Philosophy

- Use meaningful commits and descriptive names.
- Keep the documentation in this directory current when a lasting decision changes.
- Avoid dead code, orphaned assets, and redundant styles.
- Favor stable component contracts and portable semantic content so a future migration to a static-site generator or CMS requires minimal structural change.

## Delivery Sequence

1. Approve the design system.
2. Create the static route foundation, component contracts, and metadata baseline.
3. Build Home incrementally, starting with the hero and pausing for review after each major section.
4. Build the Projects index and the first approved project case study; refine that pattern before adding more.
5. Build Engineering, Writing, Resume, About, and Contact in that order.

Future ideas belong in [roadmap.md](roadmap.md) unless they change the frozen foundation.
