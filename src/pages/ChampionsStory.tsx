import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { TechnicalTipsCard } from '../components/TechnicalTipsCard'

// Child components
import { Yasir } from '../ChampStory/Yasir'
import { Niru } from '../ChampStory/Niru'

// Images for cards
import yasirPortrait from '../assets/images/PathOfChampion_portrait.jpg'
import niruthikaPortrait from '../assets/images/Niru_profile_img.png'

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="bg-[#EDC001] m-4 text-[#181818] p-3 w-16 h-16 rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 flex items-center justify-center transition-transform hover:scale-105"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M9.293 5.293a1 1 0 011.414 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
  </button>
)

export function ChampionsStory() {
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
      navigate('/champions-story', { state: { activeKey: key } })
    } else {
      setActiveKey(key)
    }
  }

  const closePost = () => {
    setActiveKey('0')
    navigate(location.pathname, { replace: true, state: {} })
  }

  const stories = [
    {
      key: '1',
      imageSrc: yasirPortrait,
      title: "Walk the Path of a <br className='hidden md:block' /> Champion",
      subtitle: "The story of Mohamed Yasir, champion of Speech Olympiad VIII",
      backgroundColorClass: "bg-[#D4B34C]",
    },
    {
      key: '2',
      imageSrc: niruthikaPortrait,
      title: 'The Transformative Journey<br/> of a Champion',
      subtitle: "The story of Niruththika Sritharan, Champion of Speech Olympiad XIV",
      backgroundColorClass: "bg-[#CA8553]",
    }
  ]

  return (
    <div className="w-full flex justify-center items-center py-10">
      {activeKey === '0' ? (
        <div className="w-full bg-[#121212] backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <div className="text-3xl mb-9 lg:text-4xl font-semibold tracking-tight text-white">
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
                onClick={() => handleCardClick(story.key)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full">
          {activeKey === '1' && (
            <>
              <BackButton onClick={closePost} />
              <Yasir />
              <BackButton onClick={closePost} />
            </>
          )}
          {activeKey === '2' && (
            <>
              <BackButton onClick={closePost} />
              <Niru />
              <BackButton onClick={closePost} />
            </>
          )}
        </div>
      )}
    </div>
  )
}
