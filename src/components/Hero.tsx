import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Star {
  id: number
  style: {
    left: string
    top: string
    animationDelay: string
    filter: string
    backgroundColor: string
  }
}

export function Hero() {
  const [textAnimationDone, setTextAnimationDone] = useState(false)
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setTextAnimationDone(true)
    }, 3000)

    const starCount = 100
    const generatedStars: Star[] = []

    for (let i = 0; i < starCount; i++) {
      generatedStars.push({
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          filter: `blur(${Math.random() * 5}px)`,
          backgroundColor: Math.random() > 0.5 ? 'white' : '#EDC001',
        },
      })
    }

    setStars(generatedStars)
    return () => clearTimeout(textTimer)
  }, [])

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0; transform: scale(1); translate: 0 0; }
          50% { opacity: 0.7; transform: scale(1.5); }
          100% { opacity: 0; transform: scale(1); translate: 0 -30px; }
        }

        .star {
          position: absolute;
          width: 0.25rem;
          height: 0.25rem;
          border-radius: 9999px;
          backdrop-filter: blur(100%);
          opacity: 0;
          animation: twinkle 5s infinite;
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
        {/* Twinkling Stars Background */}
        {textAnimationDone && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="absolute inset-0">
            {stars.map((star) => (
              <div
                key={star.id}
                className="star"
                style={{
                  left: star.style.left,
                  top: star.style.top,
                  backgroundColor: star.style.backgroundColor,
                  animationDelay: star.style.animationDelay,
                  filter: star.style.filter,
                }}
              />
            ))}
          </motion.div>
        )}

        {/* Main Text Container */}
        <div className="w-full max-w-6xl h-full flex flex-col items-center justify-center p-4 z-10 relative">
          
          {/* First Line: "Own Your Voice" */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
            className="flex flex-col items-center mb-8"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white text-center leading-tight tracking-tight">
              OWN YOUR
              <span className="block unleashed-shadow text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2">
                VOICE
              </span>
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

          {/* Second Line: "Earn Your Crown" */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 1.5 }}
            className="flex flex-col items-center mt-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#EDC001] text-center leading-tight tracking-tight">
              EARN YOUR
              <span className="block unbound-text-shadow text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2">
                CROWN
              </span>
            </h2>
          </motion.div>
        </div>
      </div>
    </>
  )
}
