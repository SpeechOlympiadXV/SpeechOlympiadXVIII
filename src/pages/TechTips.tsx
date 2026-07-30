import React, { useState } from 'react'
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

export function PageTechnicalTips() {
  const [activeKey, setActiveKey] = useState('0')

  const closePost = () => setActiveKey('0')

  const tips = [
    {
      key: '1',
      imageSrc: samadhiPortrait,
      title: 'A guide <br/>  to becoming a  <br/> better speaker',
      subtitle: 'Tips from Dr.Samadhi Poornima, champion of Speech Olympiad IX',
      backgroundColorClass: 'bg-amber-900/40',
      backgroundColorHash: '#FFF2CC',
    },
    {
      key: '2',
      imageSrc: madushikaPortrait,
      title: 'Embarking <br/> On <br/> Eloquence',
      subtitle: 'Tips from Toastmaster Madushika Munasinghe, Semi Finalist of Speech Olympiad XIII, Former Vice President Membership',
      backgroundColorHash: '#FFD966',
    },
    {
      key: '3',
      imageSrc: yasirPortrait,
      title: 'Crafting <br/>  Compelling <br/>  Speeches',
      subtitle: 'Tips on how to craft and structure your speech from DTM Mohamed Yasir, Champion of Speech Olympiad VIII',
      backgroundColorClass: 'bg-amber-900/40',
      backgroundColorHash: '#F4B183',
    },
    {
      key: '4',
      imageSrc: kasunPortrait,
      title: 'The Art  <br/> Of <br/>  Winning',
      subtitle: 'Tips from Kasun Ranasinghe, Champion of Speech Olympiad X',
      backgroundColorClass: 'bg-amber-900/40',
      backgroundColorHash: '#DFA67B',
    },
  ]

  // Render the back button
  const BackButton = () => (
    <button
      onClick={closePost}
      className="bg-[#EDC001] m-4 text-[#181818] p-3 w-16 h-16 rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 flex items-center justify-center transition-transform hover:scale-105"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.293 5.293a1 1 0 011.414 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>
    </button>
  )

  return (
    <div className="w-full flex justify-center items-center py-10">
      {activeKey === '0' ? (
        <div className="w-[90%] bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <div className="text-3xl mb-9 lg:text-4xl font-semibold tracking-tight text-[#EDC001]">
            Technical Tips
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <TechnicalTipsCard
                key={tip.key}
                title={tip.title}
                imageSrc={tip.imageSrc}
                subtitle={tip.subtitle}
                backgroundColorClass={tip.backgroundColorClass}
                backgroundColorHash={tip.backgroundColorHash}
                onClick={() => setActiveKey(tip.key)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-5xl">
          {activeKey === '1' && (
            <>
              <BackButton />
              <Samadhi />
              <BackButton />
            </>
          )}
          {activeKey === '2' && (
            <>
              <BackButton />
              <Madushika />
              <BackButton />
            </>
          )}
          {activeKey === '3' && (
            <>
              <BackButton />
              <YasirTechTip />
              <BackButton />
            </>
          )}
          {activeKey === '4' && (
            <>
              <BackButton />
              <Kasun />
              <BackButton />
            </>
          )}
        </div>
      )}
    </div>
  )
}
