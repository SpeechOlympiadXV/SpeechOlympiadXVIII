import { useState } from 'react'
import Image from './Image'
import { ShieldQuestion } from 'lucide-react'

// Logo imports
import platinumLogo from '../assets/logos/platinumlogo.png'
import gold1Logo from '../assets/logos/gold1logo.png'
import gold2Logo from '../assets/logos/gold2logo.png'
import gold3Logo from '../assets/logos/gold3logo.png'
import silverLogo from '../assets/logos/silverlogo.png'
import normal1Logo from '../assets/logos/normal1logo.png'
import normal2Logo from '../assets/logos/normal2logo.jpeg'
import normal3Logo from '../assets/logos/normal3logo.png'
import educationLogo from '../assets/logos/educationlogo.jpg'

interface Partner {
  id: number
  name: string
  imageUrl: string
  partnershipType: 'Platinum' | 'Gold' | 'Silver' | 'Gift' | 'Wristband' | 'Leisure' | 'Education'
  bgStyle: string
}

interface PartnersDisplayProps {}

const partnerTypes: Array<'Platinum' | 'Gold' | 'Silver' | 'Gift' | 'Wristband' | 'Leisure' | 'Education'> = [
  'Platinum',
  'Gold',
  'Silver',
  'Gift',
  'Wristband',
  'Leisure',
  'Education',
]

const getPartnerTypeClass = (type: string): string => {
  switch (type) {
    case 'Platinum':
      return 'text-slate-100 drop-shadow-lg'
    case 'Gold':
      return 'text-amber-300 drop-shadow-lg'
    case 'Silver':
      return 'text-slate-300 drop-shadow-lg'
    case 'Gift':
      return 'text-orange-300 drop-shadow-lg'
    case 'Wristband':
      return 'text-orange-300 drop-shadow-lg'
    case 'Leisure':
      return 'text-orange-300 drop-shadow-lg'
    case 'Education':
      return 'text-orange-300 drop-shadow-lg'
    default:
      return 'text-orange-300 drop-shadow-lg'
  }
}

const getPartnerImageClass = (partner: Partner): string => {
  // Keep specific Gold partners at 75% width
  if (partner.partnershipType === 'Gold' && (partner.id === 12 || partner.id === 13)) {
    return 'w-3/4 object-contain'
  }
  // Make Dan & Ken 50% width
  if (partner.partnershipType === 'Gold' && partner.id === 11) {
    return 'w-2/4 object-contain'
  }
  // Make Gift, Wristband, Leisure, and Platinum partners 50% width
  if (['Gift', 'Wristband', 'Leisure', 'Platinum'].includes(partner.partnershipType)) {
    return 'w-2/4 object-contain'
  }
  return 'w-full object-contain'
}

export function PartnersDisplay({}: PartnersDisplayProps) {
  const [partners] = useState<Partner[]>([
    // Platinum
    {
      id: 10,
      name: 'Platinum Partner',
      imageUrl: platinumLogo,
      partnershipType: 'Platinum',
      bgStyle: 'bg-white',
    },
    // Gold
    {
      id: 11,
      name: 'Gold Partner 1',
      imageUrl: gold1Logo,
      partnershipType: 'Gold',
      bgStyle: 'bg-white',
    },
    {
      id: 12,
      name: 'Gold Partner 2',
      imageUrl: gold2Logo,
      partnershipType: 'Gold',
      bgStyle: 'bg-white',
    },
    {
      id: 13,
      name: 'Gold Partner 3',
      imageUrl: gold3Logo,
      partnershipType: 'Gold',
      bgStyle: 'bg-white',
    },
    // Silver
    {
      id: 14,
      name: 'Silver Partner',
      imageUrl: silverLogo,
      partnershipType: 'Silver',
      bgStyle: 'bg-white',
    },
    // Other partnership types
    {
      id: 22,
      name: 'Gift Partner',
      imageUrl: normal2Logo,
      partnershipType: 'Gift',
      bgStyle: 'bg-white',
    },
    {
      id: 21,
      name: 'Wristband Partner',
      imageUrl: normal3Logo,
      partnershipType: 'Wristband',
      bgStyle: 'bg-white',
    },
    {
      id: 20,
      name: 'Leisure Partner',
      imageUrl: normal1Logo,
      partnershipType: 'Leisure',
      bgStyle: 'bg-white',
    },
    {
      id: 23,
      name: 'Education Partner',
      imageUrl: educationLogo,
      partnershipType: 'Education',
      bgStyle: 'bg-white',
    },
  ])

  const getPartnersByType = (type: string): Partner[] => {
    return partners.filter((partner) => partner.partnershipType === type)
  }

  return (
    <div className="w-full flex justify-center items-center mb-9">
      <div className="w-full bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm rounded-2xl p-12 lg:p-16 shadow-2xl">
        {/* Header */}
        <div className="w-full flex flex-col items-start mb-12">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tighter leading-tight text-white">
            Our Partners
          </h1>
        </div>

        {/* Partner Types Sections */}
        {partners.length > 0 ? (
          <div className="space-y-8">
            {partnerTypes.map((type) => {
              const typePartners = getPartnersByType(type)
              if (typePartners.length === 0) return null

              return (
                <div key={type}>
                  <h2 className={`text-xl lg:text-2xl font-semibold mb-4 ${getPartnerTypeClass(type)}`}>
                    {type} Partners
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
                    {typePartners.map((partner) => (
                      <div
                        key={partner.id}
                        className="partner-box col-span-1 flex flex-col"
                      >
                        <div className="backdrop-brightness-150 rounded-lg shadow-lg p-4 transition duration-300 ease-in-out transform w-full h-full border border-gray-700 flex items-center justify-center">
                          {partner.name !== 'mystery' ? (
                            <div className={`flex items-center justify-center ${getPartnerImageClass(partner)}`}>
                              <Image
                                src={partner.imageUrl}
                                alt={partner.name}
                                width={400}
                                height={200}
                                className={`${partner.bgStyle} object-contain rounded`}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </div>
                          ) : (
                            <ShieldQuestion className="w-32 h-32 text-gray-400 mb-4" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center text-gray-400">
            No partners available at the moment.
          </div>
        )}
      </div>
    </div>
  )
}
