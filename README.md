# Aljayz Portfolio

Personal portfolio website built with [Next.js 16](https://nextjs.org) and [Tailwind CSS v4](https://tailwindcss.com), statically exported for GitHub Pages.

## Sections

- Hero — profile, tagline, social links
- About — background and interests
- Tech Stack — infinite carousel per category with official logos
- Experience & Achievements — internships, competitions, education
- Projects — featured work (JobVest, etc.)
- Contact — social platform cards

## Tech Stack

- **Framework:** Next.js 16 (static export)
- **Styling:** Tailwind CSS v4 with custom theme (`@theme` in `globals.css`)
- **Fonts:** Share Tech Mono (headings) + Fira Code (body) via `next/font/google`
- **Icons:** Devicon, Simple Icons, Wikimedia SVGs
- **Deployment:** GitHub Pages via `npm run build && npm run deploy`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000/portfolio](http://localhost:3000/portfolio).

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on localhost:3000 |
| `npm run build` | Static export to `./out` |
| `npm run lint` | ESLint v9 flat config |
