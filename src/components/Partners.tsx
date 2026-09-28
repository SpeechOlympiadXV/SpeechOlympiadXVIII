import { useState } from 'react'
import Image from './Image'

// Logo imports
import unikeyLogo from '../assets/logos/Unikey.png'
import wickramarachchiLogo from '../assets/logos/Wickramarachchi.jpg'
import elephantHouseLogo from '../assets/logos/Elephant House.png'
import hameediaLogo from '../assets/logos/Hameedia BLACKLogo.png'
import pearlBayLogo from '../assets/logos/pearl Bay.png'
import aiesecLogo from '../assets/logos/AIESEC in CS LOGO.png'

interface Partner {
  id: number
  name: string
  title: string
  imageUrl: string
  bgStyle: string
  isTop?: boolean
}

interface PartnersDisplayProps {}

export function PartnersDisplay({}: PartnersDisplayProps) {
  const [partners] = useState<Partner[]>([
    {
      id: 1,
      name: 'Unikey',
      title: 'Official Platinum Partner',
      imageUrl: unikeyLogo,
      bgStyle: 'bg-white',
      isTop: true,
    },
    {
      id: 2,
      name: 'Wickramarachchi',
      title: 'Official Silver Partner',
      imageUrl: wickramarachchiLogo,
      bgStyle: 'bg-white',
    },
    {
      id: 3,
      name: 'Elephant House',
      title: 'Official Beverage Partner',
      imageUrl: elephantHouseLogo,
      bgStyle: 'bg-white',
    },
    {
      id: 4,
      name: 'Hameedia',
      title: 'Official Gift Partner',
      imageUrl: hameediaLogo,
      bgStyle: 'bg-white',
    },
    {
      id: 5,
      name: 'Pearl Bay',
      title: 'Official Leisure Partner',
      imageUrl: pearlBayLogo,
      bgStyle: 'bg-white',
    },
    {
      id: 6,
      name: 'AIESEC in CS',
      title: 'Official Network Partner',
      imageUrl: aiesecLogo,
      bgStyle: 'bg-white',
    },
  ])

  // Separate top partner from the rest if we want to highlight it
  const topPartner = partners.find(p => p.isTop)
  const otherPartners = partners.filter(p => !p.isTop)

  return (
    <div className="w-full flex justify-center items-center mb-9">
      <div className="w-full bg-[#121212]/80 backdrop-blur-sm rounded-2xl p-12 lg:p-16 shadow-2xl">
        {/* Header */}
        <div className="w-full flex flex-col items-start mb-12">
          <h1 className="heading-page text-white lg:text-5xl xl:text-6xl text-center w-full lg:text-left">
            Our Partners
          </h1>
        </div>

        {/* Top Partner Section */}
        {topPartner && (
          <div className="mb-12 flex justify-center">
            <div className="partner-box w-full max-w-2xl flex flex-col items-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-amber-500 mb-6 tracking-wider uppercase text-center drop-shadow-lg">
                {topPartner.title}
              </h2>
              <div className="backdrop-brightness-150 rounded-lg shadow-lg p-10 transition duration-300 ease-in-out transform w-full border border-gray-700 flex items-center justify-center bg-white/5">
                <div className="flex items-center justify-center w-full h-48">
                  <Image
                    src={topPartner.imageUrl}
                    alt={topPartner.name}
                    className={`${topPartner.bgStyle} object-contain rounded w-full h-full p-4`}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Partners Grid */}
        {otherPartners.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {otherPartners.map((partner) => (
              <div
                key={partner.id}
                className="partner-box col-span-1 flex flex-col items-center"
              >
                <h3 className="text-lg lg:text-xl font-semibold text-slate-300 mb-4 tracking-wide text-center">
                  {partner.title}
                </h3>
                <div className="backdrop-brightness-150 rounded-lg shadow-lg p-8 transition duration-300 ease-in-out transform w-full h-full border border-gray-700 flex items-center justify-center bg-white/5">
                  <div className="flex items-center justify-center w-full h-32">
                    <Image
                      src={partner.imageUrl}
                      alt={partner.name}
                      className={`${partner.bgStyle} object-contain rounded w-full h-full p-2`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {partners.length === 0 && (
          <div className="text-center text-gray-400">
            No partners available at the moment.
          </div>
        )}
      </div>
    </div>
  )
}
