# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build — also the way to typecheck copy/content edits
npm run start    # serve the production build
npm run lint     # eslint (eslint-config-next core-web-vitals + typescript)
```

There is no test suite/runner configured in this repo.

## Architecture

**Stack**: Next.js (App Router) + React 19 + TypeScript (strict) + Tailwind CSS v4 + Framer Motion. Path alias `@/*` maps to the repo root (e.g. `@/app/data/projects`).

**Rendering pattern**: almost every component is `"use client"` because the UI is animation/canvas-heavy (Framer Motion, `ParticleCanvas`, `IsometricArt`). The one deliberate exception is the dynamic project route: [app/projects/[id]/page.tsx](app/projects/[id]/page.tsx) stays a Server Component that uses `generateStaticParams()` to statically prerender every project at build time, does the data lookup server-side, and hands the result to a client component (`ProjectDetailsClient`) only for the interactive parts. Follow this split (server component for static params/data lookup, client component for interactivity) when adding new dynamic routes rather than making the whole route `"use client"`.

**Content vs. types vs. UI — three separate layers, don't collapse them**:
- `app/data/*.ts` — the actual copywriting/content (projects, case studies, experience, education, skills, testimonials, socials). Editing site content should almost always mean editing a file here, not a component.
- `app/types/*.ts` — the interfaces for that content (`Project`, `CaseStudy`, `Education`, `Experience`, `Skill`, `Testimonial`, `SocialLink`). Data files import their shape from here; components import types from here too, never from a `data/*` file.
- `app/components/**` — grouped by page domain (`home/`, `about/`, `projects/`, `layout/`, `ui/`, `playground/`), not by component kind. When adding a component, put it under the domain it belongs to, not a generic `components/` bucket.

**Project detail pages** are driven entirely by two data files keyed by the same `id`: [app/data/projects.ts](app/data/projects.ts) (card/grid info) and [app/data/caseStudies.ts](app/data/caseStudies.ts) (the long-form case study, looked up via `caseStudies[project.id]`, optional). Adding a project means adding entries to both, sharing the id.

**`/playground`** ([app/playground/page.tsx](app/playground/page.tsx)) hosts math-visualization demos (Fourier transform, matrix operations) as a tabbed client experience (`PlaygroundClient` + `FourierTab`/`MatrixTab`); math logic that isn't view-specific lives alongside it in `fourierDft.ts` rather than in `app/data`.

**`app/api/github/route.ts`** proxies the GitHub profile API with an inline hardcoded fallback payload — if the upstream call fails or rate-limits, it returns the fallback instead of erroring, so treat that fallback object as data that needs to stay in sync with reality, not dead code.

**Styling**: `app/globals.css` defines the whole design system as CSS custom properties inside a single Tailwind v4 `@theme inline` block (`--color-background`, `--color-accent`, `--color-text-*`, `--font-sans`/`--font-heading`, etc.). Use those tokens (`bg-background`, `text-text-secondary`, `border-border`, ...) instead of hardcoding colors, so the dark theme stays consistent.
