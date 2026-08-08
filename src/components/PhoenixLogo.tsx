import { useEffect, useRef, memo } from 'react'
import phoenixSvgRaw from '../assets/svg/Layer 2.svg?raw'
// [pathIndex, strokeLength][] — precomputed, ordered centre-outward.
// Regenerate if 'Layer 2.svg' changes (see scripts/README or the audit notes).
import phoenixPathMetrics from '../assets/phoenixPathMetrics.json'

const pathMetrics = phoenixPathMetrics as [number, number][]

const cleanedSvgRaw = phoenixSvgRaw
  .replace(/<\?xml[\s\S]*?\?>/g, '')
  .replace(/<!DOCTYPE[\s\S]*?>/g, '')
  .trim()

export const PhoenixLogo = memo(function PhoenixLogo() {
  const svgRef = useRef<HTMLDivElement>(null)
  const chestRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let updateScale: (() => void) | null = null;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    // Delay slightly to ensure layout is calculated
    const timer = setTimeout(() => {
      if (!svgRef.current) return
      const svgElement = svgRef.current.querySelector('svg')
      if (!svgElement) return

      // Ensure SVG is responsive and takes the full container
      svgElement.style.width = '100%'
      svgElement.style.height = '100%'
      svgElement.style.objectFit = 'contain'

      // Scale up and focus on upper section
      updateScale = () => {
        const isMobile = window.innerWidth < 768;

        // The artwork is portrait (viewBox 364 x 540) and the <svg> already
        // fits itself to the container with preserveAspectRatio="meet".
        // The old transform was scale(1.8, 1.2) — a non-uniform stretch that
        // distorted the bird AND pushed it past the hero's overflow-hidden,
        // cropping the wing tips and tail. A uniform scale just under 1 keeps
        // the whole phoenix inside the frame.
        svgElement.style.transform = 'scale(0.86)';

        // Soft vignette: opaque through the middle, fading only at the far
        // edges. The previous masks were inverted — transparent at the centre —
        // which is what erased the phoenix's head and chest.
        const mask = isMobile
          ? 'radial-gradient(ellipse 78% 62% at 50% 46%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 58%, rgba(0,0,0,0.35) 82%, rgba(0,0,0,0) 100%)'
          : 'radial-gradient(ellipse 62% 70% at 50% 48%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.35) 84%, rgba(0,0,0,0) 100%)';
        if (svgRef.current) {
          svgRef.current.style.maskImage = mask;
          svgRef.current.style.webkitMaskImage = mask;
        }
        if (chestRef.current) {
          chestRef.current.style.maskImage = 'none';
          chestRef.current.style.webkitMaskImage = 'none';
        }
      };
      updateScale();
      window.addEventListener('resize', updateScale);

      svgElement.style.transformOrigin = 'center center'

      const paths = Array.from(svgElement.querySelectorAll('path'))
      if (paths.length === 0) return

      // The static stroke styling lives in CSS (.phoenix-svg path) rather than
      // being written per-element, so JS only touches dash properties.
      svgElement.classList.add('phoenix-svg')

      // No layout reads at runtime.
      //
      // This used to call getBoundingClientRect() and getTotalLength() on each
      // of the ~790 paths, interleaved with style writes — which forced a
      // synchronous reflow per iteration (~525ms on the main thread). Both the
      // path lengths and the centre-outward ordering are fixed properties of
      // the artwork, so they are precomputed into phoenixPathMetrics.json
      // (generated in SVG user space, hence viewport-independent) and simply
      // read back here. The animation is now write-only.
      const measured: { path: SVGPathElement; length: number }[] = []
      for (const [index, length] of pathMetrics) {
        const path = paths[index]
        if (path) measured.push({ path, length })
      }
      if (measured.length === 0) return

      // If the user asked for reduced motion, paint the final state and stop.
      if (prefersReducedMotion) {
        for (const { path, length } of measured) {
          path.style.strokeDasharray = String(length)
          path.style.strokeDashoffset = '0'
        }
        return
      }

      // ---- Write pass ------------------------------------------------
      for (const { path, length } of measured) {
        path.style.strokeDasharray = String(length)
        path.style.strokeDashoffset = String(length)
        path.style.transition = 'none'
      }

      // Let the browser paint the initial dashed state on its own schedule,
      // then start the transitions on the next frame. A getBoundingClientRect()
      // here would work too, but forcing a synchronous layout over a 788-path
      // SVG costs ~0.5s on the main thread — double-rAF gets the same ordering
      // guarantee for free.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const total = measured.length
          measured.forEach(({ path }, index) => {
            // Max delay of 2.5 seconds for the outermost paths
            const delay = (index / total) * 2.5
            path.style.transition = `stroke-dashoffset 3s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`
            path.style.strokeDashoffset = '0'
          })
        })
      })
    }, 100)

    return () => {
      clearTimeout(timer);
      if (updateScale) window.removeEventListener('resize', updateScale);
    }
  }, [])

  return (
    <div
      className="absolute inset-0 z-0 flex justify-center items-center opacity-30 pointer-events-none"
      ref={chestRef}
    >
      <div
        ref={svgRef}
        className="w-full h-full flex justify-center items-center"
        dangerouslySetInnerHTML={{ __html: cleanedSvgRaw }}
      />
    </div>
  )
})
