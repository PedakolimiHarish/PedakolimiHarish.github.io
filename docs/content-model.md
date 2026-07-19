# Content Model

This document records the verified information required before content is published. Missing fields remain absent or use a clearly marked internal TODO during development; they are never replaced with invented claims.

## Global Identity

- Preferred public name
- Exact current role or headline
- One- to two-sentence positioning statement
- Public email address
- GitHub URL
- LinkedIn URL
- Canonical site URL
- Approved profile image or decision to use no portrait
- Resume PDF, if offered

## Home

- Hero statement and primary contact action
- Approved hero media or typography-only fallback
- Featured project selection
- Short, factual project summaries
- Engineering principles or capability evidence
- Final contact prompt

## Project Index Entry

Each card requires:

- Project name and stable URL slug
- One-sentence factual summary
- Timeframe, role, and project status when approved for publication
- Technology/category tags
- Approved thumbnail or diagram
- Case-study destination

## Project Case Study

Use the specification order in [portfolio-spec.md](portfolio-spec.md). Collect the following before publishing a section:

- Problem, constraints, and goals
- Role, individual contribution, collaborators, and timeframe
- Architecture decisions and trade-offs
- Hardware, software, middleware, state-machine, and communication details where relevant
- Verified technical stack and implementation evidence
- Engineering challenges, solutions, lessons, and future work
- Approved diagrams, photos, videos, captions, and ownership/license status
- Repository and documentation links, only when public
- Measured outcomes or observations, including their source and any necessary caveats

## Engineering

Each Engineering hub item requires a category, clear technical purpose, a summary, related projects or Writing entries, and source material that supports the claims. Possible categories include software architecture, ROS 2, firmware, robotics design principles, and learning roadmap items.

## Writing

Each Writing entry requires a title, publish date, summary, body, topic tags, estimated reading time, and related projects/resources. Distinguish durable technical articles from time-specific learning notes and project updates.

## Resume, About, and Contact

- Resume: verified role history, education, selected work, skills stated as evidence-backed capabilities, and an approved downloadable PDF when available.
- About: concise personal context, engineering perspective, and links to evidence; it is not a duplicate of the resume.
- Contact: approved email, professional profiles, availability language only when explicitly supplied, and no form without an approved delivery/privacy design.

## Portable Content Rules

- Keep content in semantic HTML sections with stable headings and no inline layout styling.
- Store assets beside predictable project/topic paths and use descriptive, stable filenames.
- Keep layout classes separate from prose so content can later move into a static-site generator or CMS with minimal rewriting.
