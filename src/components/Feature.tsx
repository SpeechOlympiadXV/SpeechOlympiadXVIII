import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface FeatureProps {
  index?: number
  heading: string
  headingEnd?: string
  text: string
  image: string
  urlString: string
}

export function Feature({
  index,
  heading,
  headingEnd,
  text,
  image,
  urlString,
}: FeatureProps) {
  const handleClick = () => {
    window.location.href = urlString
  }

  return (
    <div className="m-10 flex flex-col md:flex-row gap-6 w-[90%] md:w-[80%] rounded-2xl mx-auto bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm shadow-black relative">
      {/* Content Section */}
      <div className="flex-1 space-y-4 p-9">
        <h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tighter leading-tight">
          {heading}
          {headingEnd && <span>{headingEnd}</span>}
        </h2>

        <div className="text-gray-300 leading-6 text-left text-lg font-light">
          {text}
        </div>

        <button
          onClick={handleClick}
          className="flex h-10 font-semibold mt-10 items-center px-4 py-2 bg-[#EDC001cc] text-gray-100 rounded-lg hover-effect transition-all duration-300 hover:bg-[#EDC001aa] hover:text-shadow-sm group"
        >
          Read More
          <ChevronRight className="h-4 w-4 ml-2 mt-[2px] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/3 h-full flex flex-col justify-center">
        <Image
          src={image}
          alt={heading}
          width={500}
          height={400}
          className="w-full h-64 object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={index === 0}
        />
      </div>

      {/* Global Hover Styles */}
      <style>{`
        .hover-effect {
          transition: all 0.3s;
        }

        .hover-effect:hover {
          background-color: #EDC001aa;
          text-shadow: 0 0 1px #ffffff;
        }
      `}</style>
    </div>
  )
}
