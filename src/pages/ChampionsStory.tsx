'use client'

import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Component imports
import { TechnicalTips } from '../components/TechnicalTips'
import { YasirStory } from '../ChampStory/Yasir'
import { NiruthikaStory } from '../ChampStory/Niru'

// Image imports
import yasirPortrait from '../assets/images/PathOfChampion_portrait.jpg'
import niruthikaPortrait from '../assets/images/Niru_profile_img.png'

interface ChampionStory {
  key: string
  imageSrc: string
  title: string
  subtitle: string
  body?: string
  backgroundColorClass: string
}

interface PageChampionsStoryProps {}

export function ChampionsStory({}: PageChampionsStoryProps) {
  const [activeKey, setActiveKey] = useState('0')

  const championStories: ChampionStory[] = [
    {
      key: '1',
      imageSrc: yasirPortrait,
      title: 'Walk the Path of a Champion',
      subtitle: 'The story of Mohamed Yasir, champion of Speech Olympiad VIII',
      backgroundColorClass: 'bg-yellow-300',
    },
    {
      key: '2',
      imageSrc: niruthikaPortrait,
      title: 'The Transformative Journey of a Champion',
      subtitle: 'The story of Niruththika Sritharan, Champion of Speech Olympiad XIV',
      body: 'My Speech Olympiad experience has enabled me to become the storyteller I am today. I work in advertising where I get to present new ideas and unique concepts to both my team and clients on a daily basis. I developed my presenting skills thanks to the support and knowledge I got from Speech Olympiad and the Gavel Club of University of Moratuwa.',
      backgroundColorClass: 'bg-orange-400',
    },
  ]

  const handleClose = () => setActiveKey('0')
  const handleCardClick = (key: string) => setActiveKey(key)

  return (
    <>
      {/* Cards Grid View */}
      {activeKey === '0' && (
        <div
          className={`p-8 m-8 rounded-lg transition-all duration-300 bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm w-[90%] ml-[5%] mr-auto`}
        >
          {/* Title */}
          <div className="text-3xl lg:text-4xl font-semibold tracking-tighter leading-tight text-white mb-4">
            Champion's Story
          </div>

          {/* Champion Cards Grid */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {championStories.map((story) => (
                <div
                  key={story.key}
                  onClick={() => handleCardClick(story.key)}
                  className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
                >
                  <TechnicalTips
                    title={story.title}
                    imageSrc={story.imageSrc}
                    body={story.body}
                    subtitle={story.subtitle}
                    backgroundColorClass={story.backgroundColorClass}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Yasir Story Detail View */}
      {activeKey === '1' && (
        <div className="w-full">
          <div className="sticky top-4 z-10 mb-4">
            <Button
              onClick={handleClose}
              variant="ghost"
              size="lg"
              className="bg-amber-800 hover:bg-amber-700 text-white rounded-full p-4 h-16 w-36 flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Go back to stories"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>
          <YasirStory />
          <div className="flex justify-center mt-8">
            <Button
              onClick={handleClose}
              variant="ghost"
              size="lg"
              className="bg-amber-800 hover:bg-amber-700 text-white rounded-full p-4 h-16 w-36 flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Go back to stories"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>
        </div>
      )}

      {/* Niruthika Story Detail View */}
      {activeKey === '2' && (
        <div className="w-full">
          <div className="sticky top-4 z-10 mb-4">
            <Button
              onClick={handleClose}
              variant="ghost"
              size="lg"
              className="bg-amber-800 hover:bg-amber-700 text-white rounded-full p-4 h-16 w-36 flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Go back to stories"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>
          <NiruthikaStory />
          <div className="flex justify-center mt-8">
            <Button
              onClick={handleClose}
              variant="ghost"
              size="lg"
              className="bg-amber-800 hover:bg-amber-700 text-white rounded-full p-4 h-16 w-36 flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Go back to stories"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
