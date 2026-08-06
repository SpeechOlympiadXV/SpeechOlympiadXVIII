import { AppGallery } from '../components/Gallery'

import c_1 from '../assets/images/gallery/1.png'
import c_2 from '../assets/images/gallery/2.png'
import c_3 from '../assets/images/gallery/3.jpg'
import c_4 from '../assets/images/gallery/4.jpg'
import trophies from '../assets/images/gallery/trophies.jpg'
import c_6 from '../assets/images/gallery/6.jpg'
import c_7 from '../assets/images/gallery/7.jpg'
import c_8 from '../assets/images/gallery/8.jpg'
import prelis9 from '../assets/images/gallery/prelis9.jpg'
import c_9 from '../assets/images/gallery/9.jpg'
import c_10 from '../assets/images/gallery/10.jpg'
import c_5 from '../assets/images/gallery/5.jpg'
import img_2024_1 from '../assets/images/gallery/2024.1.jpg'
import img_2024_2 from '../assets/images/gallery/2024.2.jpg'
import img_2024_3 from '../assets/images/gallery/2024.3.jpg'
import img_2024_4 from '../assets/images/gallery/2024.4.jpg'
import img_2024_5 from '../assets/images/gallery/2024.5.jpg'
import img_2024_6 from '../assets/images/gallery/2024.6.jpg'
import img_2024_7 from '../assets/images/gallery/2024.7.jpg'
import img_2024_8 from '../assets/images/gallery/2024.8.jpg'

export function Gallery() {
  const images = [
    c_1,
    c_2,
    c_3,
    c_4,
    trophies,
    c_6,
    c_7,
    c_8,
    prelis9,
    c_9,
    c_10,
    c_5,
    img_2024_1,
    img_2024_2,
    img_2024_3,
    img_2024_4,
    img_2024_5,
    img_2024_6,
    img_2024_7,
    img_2024_8,
  ]

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <h1 className="text-4xl font-bold text-center text-white mb-10">Gallery</h1>
      <div className="bg-[#282828] bg-[#121212]/80 p-4 sm:p-8 rounded-lg shadow-xl backdrop-blur-sm">
        <AppGallery images={images} />
      </div>
    </div>
  )
}
