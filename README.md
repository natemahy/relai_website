# Relai marketing landing page

Lightweight single-page site for Relai — Next.js App Router, TypeScript, and Tailwind CSS v4.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Drop in your assets

Place files in the `public/` folder:

| File | Path | Purpose |
|------|------|---------|
| Logo PNG | `public/logo.png` | Header + small mark above hero headline |
| Demo video | `public/demo.mp4` | Hero autoplay loop (muted, no controls) |
| Layout mock (optional) | `public/layout-reference.jpg` | Reference for future hero re-layout |

Paths are centralized in `lib/site-config.ts` (`ASSETS`).

Until you add `logo.png`, Next.js image optimization will 404 — add your logo before deploying.

## Beta signup link

Change the primary CTA destination in one place:

**`lib/site-config.ts`**

```ts
export const BETA_SIGNUP_HREF =
  process.env.NEXT_PUBLIC_BETA_SIGNUP_URL ?? "https://example.com/beta";
```

Or copy `.env.example` to `.env.local` and set:

```
NEXT_PUBLIC_BETA_SIGNUP_URL=https://your-signup-url
```

The hero CTA, header “Join Beta”, and `#beta` section button all use `BETA_SIGNUP_HREF`.

## Theme

- Light/dark via `class="dark"` on `<html>` (toggle in header).
- Preference is stored in `localStorage` under `relai-theme`.
- Decorative demo video pauses when `prefers-reduced-motion: reduce`.

## Project structure

```
app/              Layout, globals.css, page
components/       SiteHeader, Hero, DemoVideo, FeatureCards, BetaCta, SiteFooter
lib/site-config.ts  Beta URL + asset paths
public/           logo.png, demo.mp4, layout-reference.jpg (you supply)
```

## TODO

- Wire `#beta` email field to your signup provider.
- Build full **About** content for `/#about` (“Click to Know More” stub).
- Re-layout hero against `layout-reference.jpg` when provided.
