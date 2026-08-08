import { motion, useReducedMotion, type MotionStyle } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * An animated beam of light travelling along the border of its container.
 * Adapted from Magic UI's border-beam for this project's framer-motion setup
 * (upstream imports from "motion/react") and wired to prefers-reduced-motion.
 *
 * The parent must be `relative` and carry its own border radius — the beam
 * inherits it.
 */
interface BorderBeamProps {
  size?: number
  duration?: number
  delay?: number
  colorFrom?: string
  colorTo?: string
  className?: string
  reverse?: boolean
  initialOffset?: number
  borderWidth?: number
}

export function BorderBeam({
  className,
  size = 220,
  delay = 0,
  duration = 8,
  colorFrom = '#FF7A18',
  colorTo = '#FFD9A0',
  reverse = false,
  initialOffset = 0,
  borderWidth = 1.5,
}: BorderBeamProps) {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[inherit] border-transparent"
      style={{
        borderWidth: `${borderWidth}px`,
        maskImage:
          'linear-gradient(transparent, transparent), linear-gradient(#000, #000)',
        maskClip: 'padding-box, border-box',
        maskComposite: 'intersect',
        WebkitMaskComposite: 'source-in',
      }}
    >
      <motion.div
        className={cn(
          'absolute aspect-square bg-gradient-to-l from-[var(--beam-from)] via-[var(--beam-to)] to-transparent',
          className
        )}
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            '--beam-from': colorFrom,
            '--beam-to': colorTo,
          } as MotionStyle
        }
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{ repeat: Infinity, ease: 'linear', duration, delay: -delay }}
      />
    </div>
  )
}
