# portfolio

## Commands

```sh
npm run dev      # dev server on http://localhost:3000
npm run build    # static export to ./out
npm run lint     # ESLint v9 (flat config)
```

No test runner configured.

## Framework & config quirks

- **Next.js 16** — static export: `output: "export"` in `next.config.ts` with `basePath: "/portfolio"`.
- **Images** are `unoptimized: true` (required for static export). Remote patterns only allow `img.shields.io`.
- **Tailwind v4** — theme is defined in `app/globals.css` via `@theme`, not in a `tailwind.config.ts`. Custom colors: `primary` (#6C63FF), `accent` (#58A6FF), `dark` (#0D1117), `dark-card`, `dark-border`.
- **ESLint** uses the new flat config (`eslint.config.mjs`).

## Project structure

Single-page app — all sections composed in `app/page.tsx`. No routing.

```
app/globals.css      — Tailwind v4 theme + global styles
app/layout.tsx       — root layout with metadata
app/page.tsx         — home page (Navbar + Hero + About + TechStack + Experience + Projects + Contact + Footer)
components/          — one file per section
```

## Design system

A generated design system is persisted at `design-system/aljayz-portfolio/MASTER.md`. Page-specific overrides can go in `design-system/aljayz-portfolio/pages/`. The AI skill that powers it is installed at `.opencode/skills/ui-ux-pro-max/`.
