import { ChevronRight } from 'lucide-react'
import Image from './Image'

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
    <div className="my-10 flex flex-col md:flex-row gap-6 w-full rounded-2xl mx-auto bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm shadow-black relative">
      {/* Content Section */}
      <div className="flex-1 space-y-6 p-12 lg:p-16 flex flex-col justify-center">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tighter leading-tight">
          {heading}
          {headingEnd && <span>{headingEnd}</span>}
        </h2>

        <div className="text-gray-300 leading-relaxed text-left text-xl lg:text-2xl font-light">
          {text}
        </div>

        <button
          onClick={handleClick}
          className="flex h-14 w-fit font-semibold mt-10 items-center px-8 py-4 text-lg bg-[#EDC001cc] text-gray-100 rounded-lg hover-effect transition-all duration-300 hover:bg-[#EDC001aa] hover:text-shadow-sm group"
        >
          Read More
          <ChevronRight className="h-5 w-5 ml-2 mt-[2px] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[45%] lg:w-[40%] h-full flex flex-col justify-center">
        <Image
          src={image}
          alt={heading}
          width={800}
          height={600}
          className="w-full h-80 md:h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] object-cover rounded-r-2xl rounded-l-none md:rounded-l-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
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
