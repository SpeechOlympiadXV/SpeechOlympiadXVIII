import { ChevronRight } from 'lucide-react'
import Image from './Image'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const handleClick = () => {
    if (urlString.startsWith('http') || urlString.startsWith('mailto:')) {
      window.location.href = urlString
    } else {
      navigate(urlString)
    }
  }

  return (
    <div className="my-10 flex flex-col md:flex-row gap-6 w-full rounded-2xl mx-auto bg-[#121212] backdrop-blur-sm shadow-black relative border border-[#282828]">
      {/* Content Section */}
      <div className="flex-1 space-y-6 p-12 lg:p-16 flex flex-col justify-center">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tighter leading-tight text-white">
          {heading}
          {headingEnd && <span>{headingEnd}</span>}
        </h2>

        <div className="text-gray-300 leading-relaxed text-left text-lg font-light">
          {text}
        </div>

        <button
          onClick={handleClick}
          className="flex h-14 w-fit font-bold mt-10 items-center px-8 py-4 text-lg text-black rounded-lg transition-all duration-300 hover:brightness-110 hover:scale-105 group shadow-lg"
          style={{ background: 'radial-gradient(circle at center, #ffd700 0%, #d4af37 50%, #996515 100%)' }}
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
