import { useState } from 'react'
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom'
import Image from './Image'
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] mx-1">
        {images.map((image, i) => (
          <div
            key={i}
            className="relative flex justify-center items-center group transition-all cursor-pointer select-none"
            onClick={() => preview(image)}
            style={{
              // @ts-ignore
              '--order': i % IMAGES_PER_ROW,
            } as React.CSSProperties}
          >
            {/* Overlay */}
            <div
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
          <div className="flex items-center justify-center">
            <Link
              to="/gallery"
              className="font-bold text-lg text-gray-200 hover:text-blue-400 no-underline transition-colors"
            >
              View Gallery
            </Link>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {isShowModal && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 bg-black/50 w-[100vw] h-[100vh] z-[9999] flex items-center justify-center m-0 p-0"
          onClick={closeModal}
          style={{ top: 0, left: 0 }}
        >
          {/* Close Button */}
          <button
            onClick={() => setCurrentImage('')}
            className="absolute top-[5vh] right-[5vw] bg-transparent border-none text-white text-4xl cursor-pointer hover:text-gray-300 transition-colors z-[10000] flex items-center justify-center"
            aria-label="Close"
          >
            &#x2715;
          </button>

          {/* Modal Image */}
          <div className="flex items-center justify-center max-h-[90vh] max-w-[90vw]">
            <Image
              src={previewImage}
              alt="Preview"
              width={1200}
              height={1200}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-md"
              loading="lazy"
              sizes="90vw"
            />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
