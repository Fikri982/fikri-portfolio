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

**Rendering pattern**: almost every component is `"use client"` because the UI is animation/canvas-heavy (Framer Motion, `ParticleCanvas`, `IsometricArt`, `TechOrbitRing`). The deliberate exceptions are Server Components: [app/page.tsx](app/page.tsx) (the homepage composition itself) and the dynamic project route [app/projects/[id]/page.tsx](app/projects/[id]/page.tsx), which uses `generateStaticParams()` to statically prerender every project at build time, does the data lookup server-side, and hands the result to a client component (`ProjectDetailsClient`) only for the interactive parts. Follow this split (server component for static params/data lookup, client component for interactivity) when adding new dynamic routes rather than making the whole route `"use client"`.

**Hydration gotcha — anything computed with `Math.cos`/`Math.sin`/similar transcendental math for layout (e.g. `TechOrbitRing`'s orbit positions) must be loaded via `next/dynamic(..., { ssr: false })`, not rendered inline.** These functions aren't guaranteed bit-identical between the Node/server and browser/client runtimes, so embedding the result directly in server-rendered inline `style` strings causes real (previously hit) hydration mismatches. `HeroSection`'s `IsometricArt` and `AboutTeaserSection`'s `TechOrbitRing` both follow this pattern — copy it for any new decorative math-driven visual.

**Content vs. types vs. UI — three separate layers, don't collapse them**:
- `app/data/*.ts` — the actual copywriting/content (projects, case studies, experience, education, skills, testimonials, socials, stats, teaching materials). Editing site content should almost always mean editing a file here, not a component.
- `app/types/*.ts` — the interfaces for that content (`Project`, `CaseStudy`, `Education`, `Experience`, `Skill`, `Testimonial`, `SocialLink`, `Stat`, `TeachingMaterial`). Data files import their shape from here; components import types from here too, never from a `data/*` file.
- `app/components/**` — grouped by page domain (`home/`, `about/`, `projects/`, `teaching/`, `layout/`, `ui/`, `playground/`), not by component kind. When adding a component, put it under the domain it belongs to, not a generic `components/` bucket.

**Project detail pages** are driven entirely by two data files keyed by the same `id`: [app/data/projects.ts](app/data/projects.ts) (card/grid info) and [app/data/caseStudies.ts](app/data/caseStudies.ts) (the long-form case study, looked up via `caseStudies[project.id]`, optional). Adding a project means adding entries to both, sharing the id. A project can be set `hidden: true` (in `Project`) to pull it from the homepage/archive listing and `generateStaticParams()` without deleting its data — used for projects that are deprioritized or not ready to show yet.

**`/teaching`** ([app/teaching/page.tsx](app/teaching/page.tsx) + `TeachingClient`) lists practicum-assistant course materials from [app/data/teaching.ts](app/data/teaching.ts) and opens each one in an in-page modal that embeds the Google Drive preview iframe (`https://drive.google.com/file/d/<id>/preview`) — materials are hosted on Drive, not committed to the repo. Per-course practicum-partner credit comes from the `coursePartners` map in the same file; a material's `preparedBy` field overrides that when the slides were actually authored by a different (guest) group, so don't drop that override when editing.

**`/playground`** ([app/playground/page.tsx](app/playground/page.tsx)) is currently disabled — it renders the `ComingSoon` placeholder. The real implementation (`PlaygroundClient` + `FourierTab`/`MatrixTab`, math-visualization demos for Fourier transform and matrix operations) exists and is feature-complete but its import is commented out in `page.tsx`; re-enabling the page means uncommenting that import/render, not rebuilding it.

**`app/api/github/route.ts`** proxies the GitHub profile API with an inline hardcoded fallback payload — if the upstream call fails or rate-limits, it returns the fallback instead of erroring, so treat that fallback object as data that needs to stay in sync with reality, not dead code.

**`usePageLoader`** ([app/hooks/usePageLoader.ts](app/hooks/usePageLoader.ts)) shows the full branded `PageLoader` overlay from the very first paint (state starts `true` on both server and client render, so there's no flash of raw content first), then an effect checks `sessionStorage` to decide how long it stays: the full delay on the first page visited this browser session, or an effectively-instant hide on later in-session navigations. Every page's client component calls this instead of its own `useState`/`setTimeout` loader boilerplate — don't reintroduce that duplication.

**Styling**: `app/globals.css` defines the whole design system as CSS custom properties inside a single Tailwind v4 `@theme inline` block (`--color-background`, `--color-accent`, `--color-text-*`, `--font-sans`/`--font-heading`, etc.). Use those tokens (`bg-background`, `text-text-secondary`, `border-border`, ...) instead of hardcoding colors, so the dark theme stays consistent.
