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
      const rand = Math.random();
      let coreColor, midColor, endColor;

      if (rand > 0.95) {
        // Blue (5%)
        coreColor = '#E0FFFF'; 
        midColor = '#00BFFF';
        endColor = '#0000CD';
      } else if (rand > 0.88) {
        // Red (7%)
        coreColor = '#FFC0CB';
        midColor = '#FF0000';
        endColor = '#8B0000';
      } else {
        // Golden Yellow (88%)
        coreColor = '#FFFDE7';
        midColor = '#FFD700';
        endColor = '#DAA520';
      }

      const size = Math.random() * 6 + 2
      const duration = Math.random() * 10 + 8
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
  }, [])

  return (
    <>
      <style>{`
        @keyframes phoenixFireRise {
          0% {
            transform: translate(0, 0) scale(1.2) rotate(var(--rot-start));
            opacity: 1;
            background-color: var(--core-color);
            box-shadow: 0 0 2px var(--core-color);
          }
          40% {
            background-color: var(--mid-color);
            opacity: 0.9;
            box-shadow: 0 0 4px var(--mid-color);
          }
          100% {
            transform: translate(var(--drift-x), var(--drift-y)) scale(0.2) rotate(var(--rot-end));
            opacity: 0;
            background-color: var(--end-color);
            box-shadow: 0 0 2px var(--end-color);
          }
        }

        .phoenix-fire-particle {
          position: absolute;
          border-radius: 2px;
          mix-blend-mode: screen;
          animation: phoenixFireRise linear infinite;
          pointer-events: none;
        }

        .silver-metallic-text {
          background: linear-gradient(to bottom right, #a1a1aa 0%, #f4f4f5 30%, #71717a 70%, #e4e4e7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 1.5px #bf953f;
          filter: drop-shadow(0 0 20px rgba(161, 161, 170, 0.5)) drop-shadow(0 0 40px rgba(161, 161, 170, 0.3));
        }

        .golden-metallic-text {
          background: linear-gradient(to bottom right, #bf953f 0%, #fcf6ba 30%, #b38728 70%, #fbf5b7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 1.5px #bf953f;
          filter: drop-shadow(0 0 20px rgba(237, 192, 1, 0.5)) drop-shadow(0 0 40px rgba(237, 192, 1, 0.3));
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

          {/* First Line: "Rise Within, Shine In" */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
            className="flex flex-col items-center mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-thin text-center leading-tight tracking-tight silver-metallic-text uppercase">
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium text-center leading-tight tracking-tight golden-metallic-text uppercase">
              REIGN BEYOND
            </h2>
          </motion.div>
        </div>
      </div>
    </>
  )
}
