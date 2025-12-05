'use client'

import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

// Component imports
import { TechnicalTips } from '../components/TechnicalTips'
import { SamadhiTechTip } from '../TechTips/Samadhi'
import { MadushikaTechTip } from '../TechTips/Madushika'
import { YasirTechTip } from '../TechTips/Yasir_techtip'
import { KasunTechTip } from '../TechTips/Kasun'

// Image imports
import technicalTipsPortrait from '../assets/images/TechnicalTips_portrait.jpeg'
import madushikaPortrait from '../assets/images/Madushika_portrait.jpg'
import yasirPortrait from '../assets/images/PathOfChampion_portrait.jpg'
import kasunPortrait from '../assets/images/Kasunayya.jpg'

interface TechnicalTip {
  key: string
  imageSrc: string
  title: string
  subtitle: string
  backgroundColorClass: string
  backgroundColorHash: string
  body: string
}

interface PageTechnicalTipsProps {}

export function PageTechnicalTips({}: PageTechnicalTipsProps) {
  const [activeKey, setActiveKey] = useState('0')

  const technicalTips: TechnicalTip[] = [
    {
      key: '1',
      imageSrc: technicalTipsPortrait,
      title: 'A guide to becoming a better speaker',
      subtitle:
        'Tips from Dr.Samadhi Poornima, champion of Speech Olympiad IX',
      backgroundColorClass: 'bg-amber-900',
      backgroundColorHash: '#FFF2CC',
      body: 'Speech Olympiad is more than a mere speaking contest, it is a culmination of people, experiences and exposure. I cherish to this date, every moment of the competition which was a gateway to self-reflection that enhanced my capabilities in the corporate world and beyond.',
    },
    {
      key: '2',
      imageSrc: madushikaPortrait,
      title: 'Embarking On Eloquence',
      subtitle:
        'Tips from Toastmaster Madushika Munasinghe, Semi Finalist of Speech Olympiad XIII, Former Vice President Membership',
      backgroundColorClass: 'bg-amber-800',
      backgroundColorHash: '#FFD966',
      body: 'My Speech Olympiad experience has enabled me to become the storyteller I am today. I work in advertising where I get to present new ideas and unique concepts to both my team and clients on a daily basis. I developed my presenting skills thanks to the support and knowledge I got from Speech Olympiad and the Gavel Club of University of Moratuwa.',
    },
    {
      key: '3',
      imageSrc: yasirPortrait,
      title: 'Crafting Compelling Speeches',
      subtitle:
        'Tips on how to craft and structure your speech from DTM Mohamed Yasir, Champion of Speech Olympiad VIII',
      backgroundColorClass: 'bg-amber-900',
      backgroundColorHash: '#F4B183',
      body: 'My Speech Olympiad experience has enabled me to become the storyteller I am today. I work in advertising where I get to present new ideas and unique concepts to both my team and clients on a daily basis. I developed my presenting skills thanks to the support and knowledge I got from Speech Olympiad and the Gavel Club of University of Moratuwa.',
    },
  ]

  const handleClose = () => setActiveKey('0')
  const handleCardClick = (key: string) => setActiveKey(key)

  return (
    <div
      className={`px-8 py-8 m-9 rounded-lg transition-all duration-300 ${
        activeKey === '0'
          ? 'bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm w-[90%] ml-[5%] mr-auto'
          : 'w-full'
      }`}
    >
      {/* Title */}
      <div className="text-3xl mb-9 lg:text-4xl font-semibold tracking-tighter leading-tight text-white">
        Technical Tips
      </div>

      {/* Cards Grid - Show when no card is selected */}
      {activeKey === '0' && (
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {technicalTips.map((tip) => (
              <div
                key={tip.key}
                onClick={() => handleCardClick(tip.key)}
                className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
              >
                <TechnicalTips
                  title={tip.title}
                  imageSrc={tip.imageSrc}
                  body={tip.body}
                  subtitle={tip.subtitle}
                  backgroundColorClass={tip.backgroundColorClass}
                  backgroundColorHash={tip.backgroundColorHash}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Samadhi Tech Tip Detail View */}
      {activeKey === '1' && (
        <div className="w-full">
          <div className="sticky top-4 z-10 mb-4">
            <Button
              onClick={handleClose}
              variant="ghost"
              size="lg"
              className="bg-amber-800 hover:bg-amber-700 text-white rounded-full p-4 h-16 w-16 flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Go back to tips"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>
          <SamadhiTechTip />
          <div className="flex justify-center mt-8">
            <Button
              onClick={handleClose}
              variant="ghost"
              size="lg"
              className="bg-amber-800 hover:bg-amber-700 text-white rounded-full p-4 h-16 w-16 flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Go back to tips"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>
        </div>
      )}

      {/* Madushika Tech Tip Detail View */}
      {activeKey === '2' && (
        <div className="w-full">
          <div className="sticky top-4 z-10 mb-4">
            <Button
              onClick={handleClose}
              variant="ghost"
              size="lg"
              className="bg-amber-800 hover:bg-amber-700 text-white rounded-full p-4 h-16 w-16 flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Go back to tips"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>
          <MadushikaTechTip />
          <div className="flex justify-center mt-8">
            <Button
              onClick={handleClose}
              variant="ghost"
              size="lg"
              className="bg-amber-800 hover:bg-amber-700 text-white rounded-full p-4 h-16 w-16 flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Go back to tips"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>
        </div>
      )}

      {/* Yasir Tech Tip Detail View */}
      {activeKey === '3' && (
        <div className="w-full">
          <div className="sticky top-4 z-10 mb-4">
            <Button
              onClick={handleClose}
              variant="ghost"
              size="lg"
              className="bg-amber-800 hover:bg-amber-700 text-white rounded-full p-4 h-16 w-16 flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Go back to tips"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>
          <YasirTechTip />
          <div className="flex justify-center mt-8">
            <Button
              onClick={handleClose}
              variant="ghost"
              size="lg"
              className="bg-amber-800 hover:bg-amber-700 text-white rounded-full p-4 h-16 w-16 flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Go back to tips"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>
        </div>
      )}

      {/* Kasun Tech Tip Detail View (Commented out in original) */}
      {activeKey === '4' && (
        <div className="w-full">
          <div className="sticky top-4 z-10 mb-4">
            <Button
              onClick={handleClose}
              variant="ghost"
              size="lg"
              className="bg-amber-800 hover:bg-amber-700 text-white rounded-full p-4 h-16 w-16 flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Go back to tips"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>
          <KasunTechTip />
          <div className="flex justify-center mt-8">
            <Button
              onClick={handleClose}
              variant="ghost"
              size="lg"
              className="bg-amber-800 hover:bg-amber-700 text-white rounded-full p-4 h-16 w-16 flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Go back to tips"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
