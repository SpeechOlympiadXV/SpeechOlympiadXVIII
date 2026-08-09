import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { PhoenixLogo } from './PhoenixLogo'


interface FireParticle {
  id: number
  style: any
}

export function Hero() {
  const [textAnimationDone, setTextAnimationDone] = useState(false)
  const [particles, setParticles] = useState<FireParticle[]>([])
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setTextAnimationDone(true)
    }, 3000)

    // Don't create ~80 perpetually-animating elements for users who have asked
    // the OS to reduce motion — CSS alone would still leave them in the DOM.
    if (reduceMotion) {
      setParticles([])
      return () => clearTimeout(textTimer)
    }

    const particleCount = 80
    const generatedParticles: FireParticle[] = []

    for (let i = 0; i < particleCount; i++) {
      const rand = Math.random();
      let coreColor, midColor, endColor;

      if (rand > 0.92) {
        // Red (8%)
        coreColor = '#FFC0CB';
        midColor = '#FF0000';
        endColor = '#8B0000';
      } else {
        // Ember (92%)
        coreColor = '#FFF0D6';
        midColor = '#FFA53D';
        endColor = '#FF7A18';
      }

      const size = Math.random() * 6 + 2
      const isMobile = window.innerWidth < 768;
      const duration = (Math.random() * 10 + 8) * (isMobile ? 1.8 : 1)
      const delay = Math.random() * -12

      const startX = `${Math.random() * 120 - 10}%`;
      const startY = `calc(100% + 20px)`;

      const driftX = `${(Math.random() - 0.5) * 50}vw`;
      const driftY = `-${Math.random() * 80 + 50}vh`;

      const rotStart = Math.random() * 360;
      const rotEnd = rotStart + (Math.random() * 720 - 360);

      generatedParticles.push({
        id: i,
        style: {
          left: startX,
          top: startY,
          width: `${size}px`,
          height: `${size * (Math.random() * 0.4 + 0.2)}px`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          '--core-color': coreColor,
          '--mid-color': midColor,
          '--end-color': endColor,
          '--drift-x': driftX,
          '--drift-y': driftY,
          '--rot-start': `${rotStart}deg`,
          '--rot-end': `${rotEnd}deg`,
        },
      })
    }

    setParticles(generatedParticles)
    return () => clearTimeout(textTimer)
  }, [reduceMotion])

  return (
    <>
      <style>{`
        @keyframes phoenixFireRise {
          0% {
            transform: translate(0, 0) scale(1.2) rotate(var(--rot-start));
            opacity: 1;
          }
          100% {
            transform: translate(var(--drift-x), var(--drift-y)) scale(0.2) rotate(var(--rot-end));
            opacity: 0;
          }
        }

        .phoenix-fire-particle {
          position: absolute;
          border-radius: 2px;
          mix-blend-mode: screen;
          background-color: var(--mid-color);
          box-shadow: 0 0 4px var(--mid-color);
          animation: phoenixFireRise linear infinite;
          pointer-events: none;
          will-change: transform, opacity;
        }

        .glowing-white-text {
          color: #f2f2f2;
          text-shadow: 0 0 34px rgba(255, 255, 255, 0.28), 0 0 12px rgba(255, 255, 255, 0.18);
        }

        /* Ember gradient — pale flame at the top falling to deep ember, so the
           headline reads as fire rather than metal and ties to the phoenix and
           the drifting fire particles. Vertical (not diagonal) and with no
           text-stroke, which would muddy the letter edges. */
        .golden-metallic-text {
          background: linear-gradient(
            180deg,
            #ffd9a0 0%,
            #ffa53d 30%,
            #ff7a18 58%,
            #b02a0e 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          filter: drop-shadow(0 0 26px rgba(255, 110, 30, 0.45))
                  drop-shadow(0 0 60px rgba(255, 60, 0, 0.22));
        }

        /* Sheen that sweeps across the gold once on load */
        .golden-metallic-text::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          background: linear-gradient(
            100deg,
            transparent 35%,
            rgba(255, 255, 255, 0.75) 50%,
            transparent 65%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          background-size: 250% 100%;
          animation: goldSheen 2.6s ease-out 0.9s 1 both;
          pointer-events: none;
        }

        @keyframes goldSheen {
          from { background-position: 180% 0; }
          to   { background-position: -80% 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .golden-metallic-text::after { animation: none; opacity: 0; }
        }
      `}</style>

      <div
        className="w-full h-[78vh] sm:h-[82vh] md:h-[86vh] lg:h-[90vh] flex flex-col items-center justify-center relative overflow-hidden z-10"
        style={{
          backgroundImage: 'radial-gradient(75% 75% at 50% 50%, rgba(0,0,0,0.9) 49%, #181818 100%)',
          backgroundSize: '100% 100%',
          backgroundPosition: '0px 0px',
        }}
      >
        {/* Phoenix Fire Background */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        >
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="phoenix-fire-particle"
              style={particle.style}
            />
          ))}
        </motion.div>

        {/* Phoenix SVG Line Animation */}
        <PhoenixLogo />

        {/* Main Text Container */}
        <div className="w-full max-w-6xl h-full flex flex-col items-center justify-center p-4 z-10 relative">

          {/* Kicker */}
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="eyebrow mb-6 sm:mb-8 md:text-sm text-neutral-300/90 sm:tracking-[0.4em] text-center"
          >
            Speech Olympiad XIX
          </motion.p>

          {/* First Line */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <h1 className="font-display text-[1.85rem] sm:text-[2.75rem] md:text-5xl lg:text-6xl xl:text-[4.5rem] font-normal text-center leading-[1.12] tracking-[0.1em] glowing-white-text uppercase">
              Rise Within
            </h1>
          </motion.div>

          {/* Golden Separator Line */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '26rem' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="my-7 sm:my-9 max-w-[70vw]"
          >
            <div className="h-[2px] rounded-full bg-linear-to-r from-transparent via-ember-mid to-transparent shadow-[0_0_22px_rgba(255,122,24,0.7)] w-full" />
          </motion.div>

          {/* Second Line: "Reign Beyond".
              This <h2> is the LCP element. Its entrance previously started at
              1.5s and ran for 1.2s, so the largest paint could not happen
              before ~2.7s after mount — the animation, not the network, was
              the LCP. Timings are tightened so the reveal still reads as
              staggered but completes early. */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <h2
              data-text="Reign Beyond"
              className="relative font-display text-[2.05rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-normal text-center leading-[1.08] tracking-[0.055em] golden-metallic-text uppercase"
            >
              Reign Beyond
            </h2>
          </motion.div>

        </div>

        {/* Attribution, pinned near the hero's lower edge so it sits in the
            quiet band below the phoenix rather than across its body. */}
        {/* <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
          className="absolute bottom-7 sm:bottom-9 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap font-display text-[0.55rem] sm:text-[0.68rem] font-normal uppercase text-neutral-400/70 tracking-[0.2em] text-center [text-shadow:0_2px_10px_rgba(0,0,0,0.9)]"
        >
          Gavel Club <span className="mx-1.5 text-ember/60">&middot;</span> University of Moratuwa
        </motion.p> */}
      </div>
    </>
  )
}
