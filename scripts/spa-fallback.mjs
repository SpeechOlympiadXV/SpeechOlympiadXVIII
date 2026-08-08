// GitHub Pages serves 404.html for any path it can't resolve to a file.
// Copying index.html there lets the client-side router handle deep links
// (/about, /gallery, ...) instead of returning a hard 404.
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const dist = resolve(process.cwd(), 'dist')
const index = resolve(dist, 'index.html')
const fallback = resolve(dist, '404.html')

if (!existsSync(index)) {
  console.error('[spa-fallback] dist/index.html not found — did vite build run?')
  process.exit(1)
}

copyFileSync(index, fallback)
console.log('[spa-fallback] wrote dist/404.html')
