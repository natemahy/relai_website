# Relai brand (marketing site)

Shared with the Relai app (`BreakBoard`). Master PNGs live in `brand-sources/` (synced from BreakBoard).

## Colors

| Token | Hex |
|-------|-----|
| Magenta | `#E74AF9` |
| Purple | `#625694` |
| Cyan | `#33B2FF` |

CSS: `--relai-magenta`, `--relai-purple`, `--relai-cyan` in `app/globals.css`.

## Logos

| Use | Path |
|-----|------|
| Header / footer / hero | `/brand/relai-logo.png` |
| Favicon / compact | `/brand/icon/relai-icon.png` |

Code: `RelaiLogo` component, `RELAI_LOGO_SRC` in `lib/relai-brand.ts`.

## Sync after app brand updates

From BreakBoard: `npm run build:relai-brand`

Then in this repo:

```bash
npm run sync:brand
```
