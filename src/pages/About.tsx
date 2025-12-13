import { useState, useEffect } from 'react'

// Image imports
import aboutTitleMobile from '@/assets/images/About_title_mobile.jpg'
import aboutTitleDesktop from '@/assets/images/About_title_desktop.jpg'
import trophyImage from '@/assets/images/gallery/trophy_4.jpg'

interface AboutPageProps {}

export function AboutPage({}: AboutPageProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    setIsMobile(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <div className="relative w-full text-center">
        <img
          src={isMobile ? aboutTitleMobile : aboutTitleDesktop}
          alt="About Speech Olympiad"
          loading="lazy"
          className="z-0 w-full h-[450px] object-cover"
        />
      </div>

      {/* Article Section */}
      <div className="flex justify-center w-full py-9 md:py-0">
        <div 
          className="
            w-11/12 md:w-4/5 
            rounded-2xl 
            p-9 md:p-14 
            my-9
            bg-gradient-to-br from-[#282828] to-[#EDC00111]
            border border-[#585858]
            flex 
            flex-col
          "
        >
          <div className="w-full pb-2">
            <p className="font-light text-justify pt-1 leading-relaxed">
              <span className="font-semibold text-xl text-[#EDC001] drop-shadow-lg">
                Speech Olympiad
              </span>
              {' '}stands as the flagship occasion hosted by the Gavel Club of University of Moratuwa. 
              As the sole English language speech competition within the university, it garners participants from all 
              five faculties. Since its establishment in 2005, this event has progressively gained momentum, evolving 
              into one of the most highly anticipated phenomenon on the university calendar. In an era where effective 
              communication is paramount in any industry, The Speech Olympiad championship has become a coveted goal 
              pursued by all young undergraduates. The enthusiasm instilled by faculty members to engage their students 
              in this competition has led to a consistent rise in participation from all academic departments.
              While the Speech Olympiad championship certainly holds prestige, it transcends above a title. 
              It provides a platform for personal growth and the potential to ignite transformative change 
              not only within oneself but also among peers.
            </p>

            <div className="my-6" />

            <p className="font-light text-justify leading-relaxed">
              Throughout the span of the last 15 years, there has been a 
              consistent demonstration of the event's ability to unveil hidden 
              talents within the university's undergraduates. The recipients of awards 
              and those who reach the final stages encompass a broad spectrum of backgrounds, 
              highlighting the event's widespread appeal through all academic disciplines. Countless  
              participants of Speech Olympiad have then proceeded to dominate the National and International 
              stages throughout the past decade, emerging as well-rounded impactful speakers who touch the hearts of many.
            </p>

            <div className="relative w-full h-96 mt-8 rounded-lg overflow-hidden shadow-lg">
              <img
                src={trophyImage}
                alt="Speech Olympiad Trophy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutPage