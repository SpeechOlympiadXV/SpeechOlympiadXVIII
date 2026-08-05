import { useState } from 'react'
import { motion } from 'framer-motion'

// Temporary placeholder images
import chemini from '../assets/images/finalists/2025/chemini.png'
import hansali from '../assets/images/finalists/2025/hansali.png'

const semiFinalistsData = [
  { text: 'Chemini Mallikarachchi', image: chemini, number: 1 },
  { text: 'Hansali Kariyawasam', image: hansali, number: 2 },
]

const reservedSemiFinalists = [
  { text: 'Aloka Fernando', number: 3 },
]

export function SemiFinalists() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  return (
    <div className="w-[90%] sm:w-[80%] rounded-xl mx-auto my-9 bg-[#121212] backdrop-blur-sm mt-20 text-white">
      <div className="px-9 py-9 mx-auto">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
          Semi Finalists
        </h2>

        <div className="text-gray-300 leading-6 text-left text-md sm:text-lg font-thin mt-8">
          With grace and passion, you've emerged into the spotlight—each word you've spoken has been magic.
        </div>
        <div className="text-gray-300 leading-6 text-left text-md sm:text-lg font-thin mt-1">
          Now, the journey to be{' '}
          <span className="text-xl sm:text-2xl italic font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#edc001] to-[#ff5e5e]">
            Unleashed
          </span>
          , begins.
        </div>
      </div>

      <div className="flex h-full w-full items-center justify-center px-4 mb-12">
        <div className="w-full max-w-full px-4">
          <motion.ul
            className="flex flex-row gap-7 justify-center flex-wrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {semiFinalistsData.map((item, index) => {
              // @ts-ignore
              const imgSrc = item.image.src || item.image;
              const isHovered = hoverIndex === index;
              return (
                <motion.li
                  key={`item-${index}`}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className={`relative rounded-lg overflow-hidden transition-all duration-500 ease-in-out p-[2px] bg-gradient-to-br from-[#846a00] to-[#84001e] ${
                    isHovered ? 'w-[37%] sm:w-[35%] md:w-[30%] lg:w-[25%]' : 'w-[20%] sm:w-[15%] md:w-[15%] lg:w-[12%]'
                  }`}
                  style={{ minWidth: '150px', height: '300px', cursor: 'pointer' }}
                >
                  <img
                    className="h-full w-full object-cover rounded-lg"
                    src={imgSrc}
                    alt={item.text}
                  />
                  {/* Text Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <p className="text-white text-center font-bold text-lg px-2">
                      {item.text}
                    </p>
                  </div>
                </motion.li>
              )
            })}
          </motion.ul>
        </div>
      </div>

      <div className="px-9 py-9 mx-auto border-t border-gray-700">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight leading-tight mb-8">
          Reserved Semi Finalists
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {reservedSemiFinalists.map((reserved) => (
            <motion.div
              key={reserved.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#282828] to-[#1a1a1a] border-l-4 border-[#ff5e5e] p-4 rounded-lg shadow-xl"
            >
              <div className="flex flex-col items-center">
                <span className="text-center md:text-lg font-semibold">{reserved.text}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
