import React, { useState } from 'react'
import { TechnicalTipsCard } from '../components/TechnicalTipsCard'

// Child components
import { Yasir } from '../ChampStory/Yasir'
import { Niru } from '../ChampStory/Niru'

// Images for cards
import yasirPortrait from '../assets/images/PathOfChampion_portrait.jpg'
import niruthikaPortrait from '../assets/images/Niru_profile_img.png'

export function ChampionsStory() {
  const [activeKey, setActiveKey] = useState('0')

  const closePost = () => setActiveKey('0')

  const stories = [
    {
      key: '1',
      imageSrc: yasirPortrait,
      title: "Walk the Path <br className='hidden md:block' /> of a <br className='hidden md:block' /> Champion",
      subtitle: "The story of Mohamed Yasir, champion of Speech Olympiad VIII",
      backgroundColorClass: "bg-yellow-300/20",
    },
    {
      key: '2',
      imageSrc: niruthikaPortrait,
      title: 'The Transformative Journey<br/> of a Champion',
      subtitle: "The story of Niruththika Sritharan, Champion of Speech Olympiad XIV",
      backgroundColorClass: "bg-orange-400/20",
    }
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
            Champion's Story
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {stories.map((story) => (
              <TechnicalTipsCard
                key={story.key}
                title={story.title}
                imageSrc={story.imageSrc}
                subtitle={story.subtitle}
                backgroundColorClass={story.backgroundColorClass}
                onClick={() => setActiveKey(story.key)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-5xl">
          {activeKey === '1' && (
            <>
              <BackButton />
              <Yasir />
              <BackButton />
            </>
          )}
          {activeKey === '2' && (
            <>
              <BackButton />
              <Niru />
              <BackButton />
            </>
          )}
        </div>
      )}
    </div>
  )
}
