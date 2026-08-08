import { useEffect, useRef, memo, useState } from 'react'
import phoenixSvgRaw from '../assets/svg/Layer 2.svg?raw'

const cleanedSvgRaw = phoenixSvgRaw
  .replace(/<\?xml[\s\S]*?\?>/g, '')
  .replace(/<!DOCTYPE[\s\S]*?>/g, '')
  .trim()

interface Props {
  progress: number;
  isSuccess: boolean;
}

const StaticPhoenix = memo(({ cleanedSvgRaw }: { cleanedSvgRaw: string }) => (
  <>
    <div
      className="registration-phoenix-svg-container absolute top-0 bottom-0 left-0 w-[100vw] lg:w-[80vw] flex justify-center items-center -translate-x-[65%] md:-translate-x-[60%] scale-x-[-1]"
      dangerouslySetInnerHTML={{ __html: cleanedSvgRaw }}
    />
    <div
      className="registration-phoenix-svg-container absolute top-0 bottom-0 right-0 w-[100vw] lg:w-[80vw] flex justify-center items-center translate-x-[65%] md:translate-x-[60%]"
      dangerouslySetInnerHTML={{ __html: cleanedSvgRaw }}
    />
  </>
), () => true);

export const RegistrationPhoenixLogo = memo(function RegistrationPhoenixLogo({ progress, isSuccess }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathsRef = useRef<Array<{ path: SVGPathElement, length: number, index: number }>>([])
  const initialized = useRef(false)
  const [animationState, setAnimationState] = useState<'idle' | 'glow'>('idle')

  useEffect(() => {
    if (initialized.current) return;

    const containers = Array.from(document.querySelectorAll('.registration-phoenix-svg-container'));
    if (containers.length === 0) return;

    let updateScaleFns: (() => void)[] = [];
    let allPaths: SVGPathElement[] = [];

    containers.forEach(container => {
      const svgElement = container.querySelector('svg')
      if (!svgElement) return

      svgElement.style.width = '100%'
      svgElement.style.height = '100%'
      svgElement.style.objectFit = 'contain'

      const updateScale = () => {
        const scale = window.innerWidth < 768 ? 1.0 : 2;
        svgElement.style.transform = `scale(${scale})`;
      };
      updateScale();
      updateScaleFns.push(updateScale);

      svgElement.style.transformOrigin = 'center 40%'

      const paths = Array.from(svgElement.querySelectorAll('path'))
      allPaths.push(...paths)
    });

    const updateAllScales = () => updateScaleFns.forEach(fn => fn());
    window.addEventListener('resize', updateAllScales);

    if (allPaths.length === 0) return

    const pathsWithData = allPaths.map(path => {
      const length = path.getTotalLength() || 1000
      return { path, length }
    })

    // Sort by length descending (longest paths outline first, shorter detail paths later)
    pathsWithData.sort((a, b) => b.length - a.length)

    pathsRef.current = pathsWithData.map(({ path, length }, index) => {
      path.style.strokeDasharray = length.toString()
      path.style.strokeDashoffset = length.toString() // Initially hidden

      path.style.stroke = '#A9A9A9'
      path.style.strokeWidth = '1.5'
      path.style.fill = 'transparent'

      return { path, length, index }
    })

    // Force reflow
    containers.forEach(c => c.getBoundingClientRect())

    requestAnimationFrame(() => {
      pathsRef.current.forEach(({ path }) => {
        path.style.transition = 'stroke-dashoffset 0.5s ease-out'
      })
      initialized.current = true;
      updatePathsProgress(progress)
    })

    return () => {
      window.removeEventListener('resize', updateAllScales);
    }
  }, []) // Initialize once

  const updatePathsProgress = (currentProgress: number) => {
    const totalPaths = pathsRef.current.length;
    if (totalPaths === 0) return;

    pathsRef.current.forEach(({ path, length, index }) => {
      const startThreshold = index / totalPaths;
      const endThreshold = (index + 1) / totalPaths;

      if (currentProgress >= endThreshold) {
        path.style.strokeDashoffset = '0';
      } else if (currentProgress <= startThreshold) {
        path.style.strokeDashoffset = length.toString();
      } else {
        const pathProgress = (currentProgress - startThreshold) / (endThreshold - startThreshold);
        path.style.strokeDashoffset = (length * (1 - pathProgress)).toString();
      }
    })
  }

  useEffect(() => {
    if (initialized.current && animationState === 'idle') {
      updatePathsProgress(progress)
    }
  }, [progress, animationState])

  useEffect(() => {
    if (isSuccess) {
      setAnimationState('glow')
      const timer = setTimeout(() => {
        setAnimationState('idle')
      }, 2000)
      return () => clearTimeout(timer)
    } else {
      setAnimationState('idle')
      // Reset path transitions if returning to idle
      if (initialized.current) {
        pathsRef.current.forEach(({ path }) => {
          path.style.transition = 'stroke-dashoffset 0.5s ease-out'
        })
      }
    }
  }, [isSuccess])

  useEffect(() => {
    if (!initialized.current) return;

    if (animationState === 'glow') {
      pathsRef.current.forEach(({ path }) => {
        path.style.transition = 'stroke-dashoffset 2s ease-in-out'
        path.style.strokeDashoffset = '0'
      })
    }
  }, [animationState])

  let containerClasses = "fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen transition-all duration-[2000ms] "

  if (animationState === 'idle') {
    containerClasses += "opacity-10"
  } else if (animationState === 'glow') {
    containerClasses += "opacity-40 drop-shadow-[0_0_8px_#A9A9A9]"
  }

  return (
    <div className={containerClasses} ref={containerRef}>
      <StaticPhoenix cleanedSvgRaw={cleanedSvgRaw} />
    </div>
  )
})
