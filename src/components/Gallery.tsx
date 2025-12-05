import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const IMAGES_PER_ROW = 4

interface AppGalleryProps {
  images: string[]
  showLink?: boolean
  galleryName?: string
}

export function AppGallery({
  images,
  showLink = false,
  galleryName,
}: AppGalleryProps) {
  const [currentImage, setCurrentImage] = useState('')

  const previewImage = currentImage !== '' ? currentImage : ''
  const isShowModal = currentImage !== ''

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).tagName === 'IMG') return
    setCurrentImage('')
  }

  const preview = (img: string) => {
    setCurrentImage(img)
  }

  const getOrder = (index: number): string => {
    return `--order: ${index % IMAGES_PER_ROW}`
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="flex flex-wrap gap-[10px] mx-1">
        {images.map((image, i) => (
          <div
            key={i}
            className="w-1/4 lg:w-1/4 md:w-1/2 sm:w-full p-[10px] relative flex justify-center items-center cursor-pointer group transition-all"
            style={{
              // @ts-ignore
              '--order': i % IMAGES_PER_ROW,
            } as React.CSSProperties}
          >
            {/* Overlay */}
            <div
              onClick={() => preview(image)}
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 flex items-center justify-center rounded"
            >
              <h5 className="text-white text-center font-semibold">
                See full image
              </h5>
            </div>

            {/* Image */}
            <Image
              src={image}
              alt="Gallery image"
              width={400}
              height={400}
              className="w-full h-auto object-cover aspect-square rounded"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        ))}

        {/* View Gallery Link */}
        {showLink && (
          <div className="w-full sm:w-1/3 md:w-1/4 p-[10px] flex items-center justify-center">
            <a
              href="#gallery"
              className="font-bold text-lg text-gray-200 hover:text-blue-400 no-underline transition-colors"
            >
              View Gallery
            </a>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {isShowModal && (
        <div
          className="fixed inset-0 bg-black/50 w-full h-screen z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={() => setCurrentImage('')}
            className="absolute top-[5vh] right-0 transform translate-x-1/2 -translate-y-1/2 h-12 w-12 bg-transparent border-none text-white text-2xl cursor-pointer hover:bg-gray-700 rounded-full transition-colors z-50 flex items-center justify-center"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Modal Image */}
          <div className="flex items-center justify-center max-h-[75vh] max-w-[75vw]">
            <Image
              src={previewImage}
              alt="Preview"
              width={1200}
              height={1200}
              className="max-h-[75vh] max-w-[75vw] object-contain"
              loading="lazy"
              sizes="75vw"
            />
          </div>
        </div>
      )}
    </>
  )
}
