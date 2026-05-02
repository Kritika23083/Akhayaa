# AGENTS.md

## Cursor Cloud specific instructions

### Overview

Akhaya Escapes is a **front-end-only Next.js (App Router) marketing website** for a premium travel-stay discovery platform. There is no backend, no database, no API routes, and no environment variables or secrets required. All data is hardcoded in `/data/*.ts`.

### Running the dev server

```
npm run dev
```

The server starts on port 3000. The Three.js 3D components (`/components/three/`) use `next/dynamic` with SSR disabled, which causes expected SSR bailout messages in the terminal — these are normal.

### Available npm scripts

See `package.json`. Key scripts: `dev`, `build`, `lint` (ESLint), `typecheck` (tsc --noEmit).

### Pre-existing issues

- `npm run build` fails due to TypeScript errors in `Testimonials.tsx` (missing `trip` property), `DestinationCard.tsx` (missing `imageTone`/`vibe` properties), and `PremiumButton.tsx` (framer-motion type conflict). The dev server still works fine.
- `npm run lint` reports 4 ESLint errors (pre-existing): `no-html-link-for-pages` in Navbar and `react-hooks/purity` in FloatingParticles.
- `npm run typecheck` reports the same TS errors that block `build`.

### Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Animation:** Framer Motion
- **3D:** Three.js via `@react-three/fiber` + `@react-three/drei`
- **Package manager:** npm (no lockfile committed; all deps pinned to `"latest"`)
