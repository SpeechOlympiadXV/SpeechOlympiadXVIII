import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'

import thulasi from '../assets/images/voting/thulasi.jpg'
import ami from '../assets/images/voting/ami.jpg'
import neela from '../assets/images/voting/neela.jpg'
import aloka from '../assets/images/voting/aloka.jpg'
import afra from '../assets/images/voting/afra.jpg'

interface VoteData {
  name: string
  path: string
  gender: number
  image: string
  igLink: string
  fbLink: string
}

const data: VoteData[] = [
  {
    name: 'Thulasithan Gnanenthiram',
    path: '/thulasithan',
    gender: 0,
    // @ts-ignore
    image: thulasi.src || thulasi,
    igLink: 'https://www.instagram.com/p/DGBI7SbSJAO/?igsh=MWlhd3F1djNybzlscw==',
    fbLink: 'https://www.facebook.com/share/p/15qL8sRhvS/?mibextid=oFDknk',
  },
  {
    name: 'Amirthavarshani Ananthan',
    path: '/amirthavarshani',
    gender: 1,
    // @ts-ignore
    image: ami.src || ami,
    igLink: 'https://www.instagram.com/p/DGBIl6rSC_y/?igsh=ZXh0Z3dib2JpbTY0',
    fbLink: 'https://www.facebook.com/share/p/1J8omuhXbd/?mibextid=oFDknk',
  },
  {
    name: 'Neelayadhakshi Priyadhakshan',
    path: '/neelayadhakshi',
    gender: 1,
    // @ts-ignore
    image: neela.src || neela,
    igLink: 'https://www.instagram.com/p/DGBI1t2SKIh/?igsh=MTkxMXZiZWhwbTh0Mg==',
    fbLink: 'https://www.facebook.com/share/p/1A4LswJeeu/?mibextid=oFDknk',
  },
  {
    name: 'Aloka Fernando',
    path: '/aloka',
    gender: 0,
    // @ts-ignore
    image: aloka.src || aloka,
    igLink: 'https://www.instagram.com/p/DGBIvUGSMXk/?igsh=dzF6ZjI5cWEyMHJp',
    fbLink: 'https://www.facebook.com/share/p/16Azar2UYx/?mibextid=oFDknk',
  },
  {
    name: 'Afrah Rumie',
    path: '/afrah',
    gender: 1,
    // @ts-ignore
    image: afra.src || afra,
    igLink: 'https://www.instagram.com/p/DGBIEhSysGC/?igsh=MXR4YmRia2dlYmpzeA==',
    fbLink: 'https://www.facebook.com/share/p/1CqidZF34L/?mibextid=oFDknk',
  },
]

export function Vote() {
  const location = useLocation()
  const [currentData, setCurrentData] = useState<VoteData | null>(null)

  useEffect(() => {
    const match = data.find((x) => x.path === location.pathname)
    setCurrentData(match || null)
  }, [location.pathname])

  if (!currentData) {
    return null
  }

  return (
    <div className="px-8 py-10 w-[90%] sm:w-[80%] md:w-[60%] h-auto mx-auto my-10 bg-[#121212]/80 mt-20">
      <div className="w-[100%] max-w-[400px] mx-auto h-auto rounded-md overflow-hidden">
        <img
          src={currentData.image}
          alt={`Vote for ${currentData.name}`}
          className="w-full h-auto object-contain rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <a
          href={currentData.igLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ember h-12 w-full rounded-lg"
        >
          <Instagram className="mr-2 w-5 h-5" />
          <p className="text-center font-bold text-sm md:text-md">
            Vote on Instagram
          </p>
        </a>
        <a
          href={currentData.fbLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ember h-12 w-full rounded-lg"
        >
          <Facebook className="mr-2 w-5 h-5" />
          <p className="text-center font-bold text-sm md:text-md">
            Vote on Facebook
          </p>
        </a>
      </div>
      <div className="text-gray-300 leading-6 text-left text-md sm:text-lg mt-8 font-normal">
        Place your like now through Facebook and Instagram before 19th of February! 🗳✨
      </div>
      <ul className="list-disc pl-6 mt-4 space-y-2 border-none">
        <li className="text-gray-300 font-semibold border-none">1 like = 1 point</li>
        <li className="text-gray-300 font-semibold border-none">1 share = 2 points</li>
      </ul>
      <div className="text-gray-300 leading-6 text-left text-md sm:text-lg font-normal mt-4">
        (Only the likes and shares of the original post will be considered.)
      </div>
      <div className="text-gray-300 leading-6 text-left text-md sm:text-lg font-bold mt-6 text-ember">
        Vote for them on the Grand Finale!
      </div>
      <div className="text-gray-300 leading-6 text-left text-md sm:text-lg font-bold mt-2">
        A physical vote registered at the Grand Finale = 5 points
      </div>
    </div>
  )
}
