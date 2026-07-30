import React from 'react'
import Image from './Image'

interface TechnicalTipsCardProps {
  imageSrc: string
  title: string
  subtitle: string
  backgroundColorClass?: string
  backgroundColorHash?: string
  onClick: () => void
}

export function TechnicalTipsCard({
  imageSrc,
  title,
  subtitle,
  backgroundColorClass = '',
  backgroundColorHash,
  onClick
}: TechnicalTipsCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        ${backgroundColorClass}
        border border-gray-700
        rounded-lg p-4 my-3 md:my-0 w-full
        cursor-pointer
        opacity-90 hover:opacity-100 transition-opacity
        flex flex-col md:flex-row shadow-lg hover:shadow-xl
      `}
      style={backgroundColorHash ? { backgroundColor: backgroundColorHash } : {}}
    >
      <div className="w-full text-left">
        <h5 
          className="font-bold text-zinc-900 text-2xl sm:text-3xl xl:text-4xl mb-2 border-b-2 border-zinc-700/50 pb-2 drop-shadow-md"
          dangerouslySetInnerHTML={{ __html: title }} 
        />
        <div className="flex flex-col md:flex-row mt-4">
          <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 shadow-inner">
              <Image 
                src={imageSrc} 
                alt="Tip Author" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          <div className="md:w-2/3 flex items-center md:pl-4">
            <h6 className="text-left text-zinc-900 text-sm font-medium">{subtitle}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
