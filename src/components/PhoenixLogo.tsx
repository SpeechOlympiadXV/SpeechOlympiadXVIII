'use client'

import { useEffect, useRef, memo } from 'react'
import phoenixSvgRaw from '../assets/svg/Layer 2.svg?raw'

const cleanedSvgRaw = phoenixSvgRaw
  .replace(/<\?xml[\s\S]*?\?>/g, '')
  .replace(/<!DOCTYPE[\s\S]*?>/g, '')
  .trim()

export const PhoenixLogo = memo(function PhoenixLogo() {
  const svgRef = useRef<HTMLDivElement>(null)
  const chestRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let updateScale: (() => void) | null = null;

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
        // Adjust scaling, translate, and rotation to visually center the phoenix
        // Desktop is stretched horizontally by 1.5x, mobile uses uniform scale
        svgElement.style.transform = isMobile
          ? 'scale(1.15) translate(2%, 2%) rotate(3deg)'
          : 'scale(1.8, 1.2) translate(0.5%, -5%) rotate(3deg)';

        // Adjust gradient center over the head
        if (svgRef.current) {
          const mask = isMobile
            ? 'radial-gradient(circle at 50% 35%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 15%, rgba(0,0,0,1) 45%)'
            : 'radial-gradient(circle at 50% 20%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 15%, rgba(0,0,0,1) 45%)';
          svgRef.current.style.maskImage = mask;
          svgRef.current.style.webkitMaskImage = mask;
        }

        // Adjust chest gradient
        if (chestRef.current) {
          const chestMask = isMobile
            ? 'radial-gradient(circle at 50% 60%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,1) 50%)'
            : 'radial-gradient(circle at 50% 45%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 15%, rgba(0,0,0,1) 40%)';
          chestRef.current.style.maskImage = chestMask;
          chestRef.current.style.webkitMaskImage = chestMask;
        }
      };
      updateScale();
      window.addEventListener('resize', updateScale);

      svgElement.style.transformOrigin = 'center 30%'

      const paths = Array.from(svgElement.querySelectorAll('path'))
      if (paths.length === 0) return

      // Get SVG center
      const svgRect = svgElement.getBoundingClientRect()
      const centerX = svgRect.width / 2
      const centerY = svgRect.height / 2

      // Calculate distances to center
      const pathsWithDistance = paths.map(path => {
        const rect = path.getBoundingClientRect()
        const pathCenterX = (rect.left + rect.width / 2) - svgRect.left
        const pathCenterY = (rect.top + rect.height / 2) - svgRect.top

        const distance = Math.sqrt(
          Math.pow(pathCenterX - centerX, 2) +
          Math.pow(pathCenterY - centerY, 2)
        )
        return { path, distance }
      })

      // Sort by distance (outward means center first, then outer)
      pathsWithDistance.sort((a, b) => a.distance - b.distance)

      // Apply initial state
      pathsWithDistance.forEach(({ path }) => {
        const length = path.getTotalLength() || 1000
        path.style.strokeDasharray = length.toString()
        path.style.strokeDashoffset = length.toString()
        path.style.transition = 'none'

        // Silver metallic stroke
        path.style.stroke = '#C0C0C0'
        path.style.strokeWidth = '1.5'
        path.style.fill = 'transparent'
      })

      // Force reflow
      svgElement.getBoundingClientRect()

      // Apply animations
      requestAnimationFrame(() => {
        const totalPaths = pathsWithDistance.length
        pathsWithDistance.forEach(({ path }, index) => {
          // Max delay of 2.5 seconds for the outermost paths
          const delay = (index / totalPaths) * 2.5
          path.style.transition = `stroke-dashoffset 3s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`
          path.style.strokeDashoffset = '0'
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
      className="absolute inset-0 z-0 flex justify-center items-center opacity-20 pointer-events-none"
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
