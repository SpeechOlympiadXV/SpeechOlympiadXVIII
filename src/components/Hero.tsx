import { useState, useEffect } from 'react'

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

interface HeroProps {}

export function Hero({}: HeroProps) {
  const [textAnimationDone, setTextAnimationDone] = useState(false)
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Trigger text animation and stars after 3 seconds
    const textTimer = setTimeout(() => {
      setTextAnimationDone(true)
    }, 3000)

    // Generate stars
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
          0% {
            opacity: 0;
            transform: scale(1);
            translate: 0 0;
          }
          50% {
            opacity: 0.7;
            transform: scale(1.5);
          }
          100% {
            opacity: 0;
            transform: scale(1);
            translate: 0 -30px;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
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

        .golden-glow {
          box-shadow: 0 0 20px rgba(237, 192, 1, 0.6), 0 0 40px rgba(237, 192, 1, 0.3);
        }

        .animate-fade-in {
          animation: fadeIn 1.2s ease-out;
          animation-fill-mode: forwards;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        @media (max-width: 640px) {
          h1, h2 {
            line-height: 1.1;
          }
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
          <div className="absolute inset-0">
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
          </div>
        )}

        {/* Main Text Container */}
        <div className="w-full max-w-6xl h-full flex flex-col items-center justify-center p-4 z-10 relative">
          
          {/* First Line: "Own Your Voice" */}
          <div className="flex flex-col items-center mb-8">
            <div className="animate-fade-in animation-delay-500">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white text-center leading-tight tracking-tight">
                OWN YOUR
                <span className="block unleashed-shadow text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  VOICE
                </span>
              </h1>
            </div>
          </div>

          {/* Golden Separator Line */}
          <div className="animate-fade-in animation-delay-1000 my-6">
            <div className="w-32 md:w-48 h-1 bg-gradient-to-r from-transparent via-[#EDC001] to-transparent golden-glow" />
          </div>

          {/* Second Line: "Earn Your Crown" */}
          <div className="flex flex-col items-center mt-8">
            <div className="animate-fade-in animation-delay-1500">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#EDC001] text-center leading-tight tracking-tight">
                EARN YOUR
                <span className="block unbound-text-shadow text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  CROWN
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
