import Image from './Image'

// You will need to save the provided images to these locations
import message1 from '../assets/images/partners/message1.webp'
import message2 from '../assets/images/partners/message2.webp'

export function PartnerMessages() {
  return (
    <div className="w-full flex justify-center items-center mb-16">
      <div className="w-full bg-[#121212]/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-2xl border border-[#282828]">
        {/* Header */}
        <div className="w-full flex flex-col items-start mb-8">
          <h2 className="heading-section text-white text-center w-full lg:text-left mb-6">
            Partners' Messages
          </h2>
        </div>

        {/* Images Container */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
          {/* First Message */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700/50 hover:border-amber-500/50 transition-colors duration-300">
              <Image
                src={message1}
                alt="Partner Message 1"
                width={1080}
                height={1350}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Second Message */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700/50 hover:border-amber-500/50 transition-colors duration-300">
              <Image
                src={message2}
                alt="Partner Message 2"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
