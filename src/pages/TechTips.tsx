import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { TechnicalTipsCard } from '../components/TechnicalTipsCard'

// Child components
import { Samadhi } from '../TechTips/Samadhi'
import { Madushika } from '../TechTips/Madushika'
import { YasirTechTip } from '../TechTips/YasirTechTip'
import { Kasun } from '../TechTips/Kasun'

// Images for cards
import samadhiPortrait from '../assets/images/TechnicalTips_portrait.jpeg'
import madushikaPortrait from '../assets/images/Madushika_portrait.jpg'
import yasirPortrait from '../assets/images/PathOfChampion_portrait.jpg'
import kasunPortrait from '../assets/images/Kasunayya.jpg'

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="bg-[#EDC001] m-4 text-[#181818] p-3 w-16 h-16 rounded-full hover:bg-[#FF7A18] focus:outline-none focus:ring-2 focus:ring-[#FF7A18] focus:ring-opacity-50 flex items-center justify-center transition-transform hover:scale-105"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M9.293 5.293a1 1 0 011.414 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
  </button>
)

export function PageTechnicalTips() {
  const location = useLocation()
  const navigate = useNavigate()

  const [activeKey, setActiveKey] = useState('0')

  useEffect(() => {
    if (location.state?.activeKey) {
      setActiveKey(location.state.activeKey)
    }
  }, [location.state?.activeKey])

  const handleCardClick = (key: string) => {
    if (location.pathname === '/') {
      navigate('/technical-tips', { state: { activeKey: key } })
    } else {
      setActiveKey(key)
    }
  }

  const closePost = () => {
    setActiveKey('0')
    navigate(location.pathname, { replace: true, state: {} })
  }

  const tips = [
    {
      key: '1',
      imageSrc: samadhiPortrait,
      title: 'A guide to becoming <br/> a better speaker',
      subtitle: 'Tips from Dr.Samadhi Poornima, champion of Speech Olympiad IX',
      backgroundColorClass: 'bg-gradient-to-br from-slate-300/70 via-slate-100/70 to-slate-400/70',
    },
    {
      key: '2',
      imageSrc: madushikaPortrait,
      title: 'Embarking On <br/> Eloquence',
      subtitle: 'Tips from Toastmaster Madushika Munasinghe, Semi Finalist of Speech Olympiad XIII, Former Vice President Membership',
      backgroundColorClass: 'bg-gradient-to-br from-slate-300/70 via-slate-100/70 to-slate-400/70',
    },
    {
      key: '3',
      imageSrc: yasirPortrait,
      title: 'Crafting Compelling <br/> Speeches',
      subtitle: 'Tips on how to craft and structure your speech from DTM Mohamed Yasir, Champion of Speech Olympiad VIII',
      backgroundColorClass: 'bg-gradient-to-br from-slate-300/70 via-slate-100/70 to-slate-400/70',
    },
    {
      key: '4',
      imageSrc: kasunPortrait,
      title: 'The Art Of <br/> Winning',
      subtitle: 'Tips from Kasun Ranasinghe, Champion of Speech Olympiad X',
      backgroundColorClass: 'bg-gradient-to-br from-slate-300/70 via-slate-100/70 to-slate-400/70',
    },
  ]

  return (
    <div className="w-full flex justify-center items-center py-10">
      {activeKey === '0' ? (
        <section
          aria-labelledby="technical-tips-heading"
          className="w-full bg-[#121212]/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
        >
          <h2
            id="technical-tips-heading"
            className="font-display text-2xl mb-9 lg:text-3xl font-bold tracking-wide text-white"
          >
            Technical Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <TechnicalTipsCard
                key={tip.key}
                title={tip.title}
                imageSrc={tip.imageSrc}
                subtitle={tip.subtitle}
                backgroundColorClass={tip.backgroundColorClass}
                onClick={() => handleCardClick(tip.key)}
              />
            ))}
          </div>
        </section>
      ) : (
        <div className="w-full">
          {activeKey === '1' && (
            <>
              <BackButton onClick={closePost} />
              <Samadhi />
              <BackButton onClick={closePost} />
            </>
          )}
          {activeKey === '2' && (
            <>
              <BackButton onClick={closePost} />
              <Madushika />
              <BackButton onClick={closePost} />
            </>
          )}
          {activeKey === '3' && (
            <>
              <BackButton onClick={closePost} />
              <YasirTechTip />
              <BackButton onClick={closePost} />
            </>
          )}
          {activeKey === '4' && (
            <>
              <BackButton onClick={closePost} />
              <Kasun />
              <BackButton onClick={closePost} />
            </>
          )}
        </div>
      )}
    </div>
  )
}
