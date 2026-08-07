import React from 'react'
import Image from './Image'

interface TechnicalTipsCardProps {
  imageSrc: string
  title: string
  subtitle: string
  backgroundColorClass?: string
  textColorClass?: string
  onClick: () => void
}

export function TechnicalTipsCard({
  imageSrc,
  title,
  subtitle,
  backgroundColorClass = '',
  textColorClass = 'text-zinc-900',
  onClick
}: TechnicalTipsCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-[#1c1c1c] shadow-lg
        rounded-lg p-4 my-3 md:my-0 w-full h-full
        cursor-pointer
        transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl
        flex flex-col
      `}
    >
      <div className="w-full text-left flex flex-col h-full">
        <h5
          className={`font-semibold tracking-tighter leading-tight text-gray-300 text-xl sm:text-2xl xl:text-3xl mb-2 border-b-2 border-[#333333] pb-2 drop-shadow-md`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="flex flex-col md:flex-row mt-auto pt-4">
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
            <h6 className="text-left text-gray-300 text-sm font-medium">{subtitle}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
