import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface FireParticle {
  id: number
  style: any
}

export function Hero() {
  const [textAnimationDone, setTextAnimationDone] = useState(false)
  const [particles, setParticles] = useState<FireParticle[]>([])

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setTextAnimationDone(true)
    }, 3000)

    const particleCount = 200
    const generatedParticles: FireParticle[] = []

    for (let i = 0; i < particleCount; i++) {
      const isBlue = Math.random() > 0.85

      const coreColor = isBlue ? '#FFF9C4' : '#EDC001'
      const midColor = isBlue ? '#EDC001' : '#EDC001'
      const endColor = isBlue ? '#B8860B' : '#8B6508'

      const size = Math.random() * 15 + 4
      const duration = Math.random() * 5 + 4
      const delay = Math.random() * -8

      const isLeft = Math.random() > 0.5;

      const startX = isLeft ? `calc(0% - 20px)` : `calc(100% + 20px)`;
      const startY = `calc(100% + 20px)`;

      const driftX = isLeft ? `${Math.random() * 40 + 10}vw` : `-${Math.random() * 40 + 10}vw`;
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
          filter: `blur(${Math.random() * 2}px)`,
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
  }, [])

  return (
    <>
      <style>{`
        @keyframes phoenixFireRise {
          0% {
            transform: translate(0, 0) scale(1.2) rotate(var(--rot-start));
            opacity: 1;
            background-color: var(--core-color);
            box-shadow: 0 0 10px var(--core-color);
          }
          40% {
            background-color: var(--mid-color);
            opacity: 0.9;
            box-shadow: 0 0 15px var(--mid-color);
          }
          100% {
            transform: translate(var(--drift-x), var(--drift-y)) scale(0.2) rotate(var(--rot-end));
            opacity: 0;
            background-color: var(--end-color);
            box-shadow: 0 0 5px var(--end-color);
          }
        }

        .phoenix-fire-particle {
          position: absolute;
          border-radius: 2px;
          mix-blend-mode: screen;
          animation: phoenixFireRise linear infinite;
          pointer-events: none;
        }

        .unleashed-shadow {
          text-shadow: 0 0 20px rgba(188, 156, 35, 0.8), 0 0 40px rgba(188, 156, 35, 0.4);
        }

        .unbound-text-shadow {
          text-shadow: 0 0 20px rgba(237, 192, 1, 0.8), 0 0 40px rgba(237, 192, 1, 0.4);
        }
      `}</style>

      <div
        className="w-full h-[78vh] sm:h-[82vh] md:h-[86vh] lg:h-[90vh] flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(75% 75% at 50% 50%, #000000 59%, #181818 100%)',
          backgroundSize: '100% 100%',
          backgroundPosition: '0px 0px',
        }}
      >
        {/* Phoenix Fire Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="phoenix-fire-particle"
              style={particle.style}
            />
          ))}
        </div>

        {/* Main Text Container */}
        <div className="w-full max-w-6xl h-full flex flex-col items-center justify-center p-4 z-10 relative">

          {/* First Line: "Rise Within" */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
            className="flex flex-col items-center mb-8"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white text-center leading-tight tracking-tight unleashed-shadow">
              RISE WITHIN
            </h1>
          </motion.div>

          {/* Golden Separator Line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '12rem' }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 1 }}
            className="my-6"
          >
            <div className="h-1 bg-gradient-to-r from-transparent via-[#EDC001] to-transparent shadow-[0_0_20px_rgba(237,192,1,0.6)] w-full" />
          </motion.div>

          {/* Second Line: "Reign Beyond" */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 1.5 }}
            className="flex flex-col items-center mt-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#EDC001] text-center leading-tight tracking-tight unbound-text-shadow">
              REIGN BEYOND
            </h2>
          </motion.div>
        </div>
      </div>
    </>
  )
}
