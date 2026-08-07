'use client'

import { useEffect, useRef, memo } from 'react'
import phoenixSvgRaw from '../assets/svg/Layer 2.svg?raw'

const cleanedSvgRaw = phoenixSvgRaw
  .replace(/<\?xml[\s\S]*?\?>/g, '')
  .replace(/<!DOCTYPE[\s\S]*?>/g, '')
  .trim()

export const PhoenixLogo = memo(function PhoenixLogo() {
  const svgRef = useRef<HTMLDivElement>(null)

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
        svgElement.style.transform = `scale(${isMobile ? 1.5 : 3})`;
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

        // Bright gold stroke
        path.style.stroke = '#FFD700'
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
      className="absolute inset-0 z-0 flex justify-center items-center opacity-5 pointer-events-none mix-blend-screen"
      ref={svgRef}
      dangerouslySetInnerHTML={{ __html: cleanedSvgRaw }}
    />
  )
})
