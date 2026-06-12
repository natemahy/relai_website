#!/usr/bin/env bash
# Copy Relai brand PNGs from the BreakBoard app repo into this marketing site.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BB="${BREAKBOARD_ROOT:-$(cd "$ROOT/../BreakBoard" && pwd)}"

if [[ ! -d "$BB/brand-sources" ]]; then
  echo "BreakBoard not found at $BB — set BREAKBOARD_ROOT" >&2
  exit 1
fi

mkdir -p "$ROOT/public/brand/icon" "$ROOT/brand-sources" "$ROOT/lib"

cp "$BB/brand-sources/"*.png "$ROOT/brand-sources/"
cp -R "$BB/public/brand/"* "$ROOT/public/brand/"
cp "$BB/public/brand/relai-logo-header.png" "$ROOT/public/logo-wordmark.png"
cp "$BB/public/brand/icon/favicon-32.png" "$ROOT/public/logo.png"
cp "$BB/src/lib/relai-brand-colors.generated.json" "$ROOT/lib/relai-brand-colors.generated.json"
cp "$BB/src/app/icon.png" "$ROOT/app/icon.png"
cp "$BB/src/app/apple-icon.png" "$ROOT/app/apple-icon.png"

echo "Brand synced from $BB"
