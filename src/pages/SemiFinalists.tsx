import { motion } from 'framer-motion'

import aloka from '../assets/images/semifinalists-XIX/Aloka Fernando.jpg'
import amanda from '../assets/images/semifinalists-XIX/Amanda Ariyawansa.jpg'
import anuja from '../assets/images/semifinalists-XIX/Anuja Mahamalage.jpg'
import hirupaba from '../assets/images/semifinalists-XIX/Hirupaba Hemapala.png'
import jalal from '../assets/images/semifinalists-XIX/Jalal Wahab.jpeg'
import nadin from '../assets/images/semifinalists-XIX/Nadin Dharmawardena.jpeg'
import nehansa from '../assets/images/semifinalists-XIX/Nehansa Piyathilake.jpg'
import prashani from '../assets/images/semifinalists-XIX/Prashani Bhagya.jpeg'
import ravitha from '../assets/images/semifinalists-XIX/Ravitha Perera.jpg'
import sadil from '../assets/images/semifinalists-XIX/Sadil Jayathilaka.jpg'
import thamasha from '../assets/images/semifinalists-XIX/Thamasha Gunawardana.jpg'
import umaiyall from '../assets/images/semifinalists-XIX/Umaiyall Thuraichelvan.jpg'

const semiFinalistsData = [
  { text: 'Aloka Fernando', image: aloka, objectPosition: 'center 50%' },
  { text: 'Amanda Ariyawansa', image: amanda },
  { text: 'Anuja Mahamalage', image: anuja },
  { text: 'Hirupaba Hemapala', image: hirupaba },
  { text: 'Jalal Wahab', image: jalal },
  { text: 'Nadin Dharmawardena', image: nadin },
  { text: 'Nehansa Piyathilake', image: nehansa, objectPosition: 'center 35%', scale: 1.2 },
  { text: 'Prashani Bhagya', image: prashani },
  { text: 'Ravitha Perera', image: ravitha },
  { text: 'Sadil Jayathilaka', image: sadil },
  { text: 'Thamasha Gunawardana', image: thamasha, scale: 1.5 },
  { text: 'Umaiyall Thuraichelvan', image: umaiyall },
]

const reservedSemiFinalists = [
  { text: 'Kajanan Charavanapavan' },
  { text: 'Sasindi Peiris' },
  { text: 'Manulya Bandara' },
  { text: 'Methmi Suriyaarachchi' },
]

export function SemiFinalists() {
  return (
    <section className="w-full bg-[#121212]/80 backdrop-blur-sm rounded-xl border border-[#282828] p-6 sm:p-9 text-white">
      <div className="mx-auto">
        <h2 className="heading-section text-white text-center">
          Semi Finalists
        </h2>

        <div className="text-gray-300 text-center text-md sm:text-lg font-thin mt-8 max-w-3xl mx-auto px-4">
          Having discovered the strength of your voice, you've ignited the spark of true greatness.<br className="hidden sm:block" /> Now, the time has come to
        </div>
        <div className="text-center mt-2">
          <span className="text-xl sm:text-3xl italic font-bold bg-clip-text text-transparent bg-gradient-to-r from-ember to-[#ff5e5e]">
            Rise within, Reign beyond
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-center px-4 mt-12 mb-12">
        <div className="w-full max-w-5xl">
          <motion.ul
            className="flex flex-row gap-8 sm:gap-12 justify-center flex-wrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            {semiFinalistsData.map((item, index) => {
              // @ts-ignore
              const imgSrc = item.image.src || item.image;
              return (
                <motion.li
                  key={`item-${index}`}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-4 w-[120px] sm:w-[150px]"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-ember-deep/60 shadow-lg shadow-black/50 hover:border-ember transition-colors duration-300">
                    <img
                      className="h-full w-full object-cover"
                      style={{ 
                        objectPosition: item.objectPosition || 'center top',
                        transform: item.scale ? `scale(${item.scale})` : 'none'
                      }}
                      src={imgSrc}
                      alt={item.text}
                    />
                  </div>
                  <p className="text-white text-center font-semibold text-sm sm:text-base leading-tight">
                    {item.text}
                  </p>
                </motion.li>
              )
            })}
          </motion.ul>
        </div>
      </div>

      <div className="pt-10 mt-10 mx-auto border-t border-gray-700/50 w-full max-w-5xl">
        <h2 className="heading-section text-white mb-8 text-center text-2xl sm:text-3xl">
          Reserved Semi Finalists
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {reservedSemiFinalists.map((reserved, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#282828] to-[#1a1a1a] border-l-4 border-[#ff5e5e] p-4 rounded-lg shadow-xl flex items-center justify-center min-h-[80px]"
            >
              <span className="text-center text-md sm:text-lg font-semibold text-white">
                {reserved.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

