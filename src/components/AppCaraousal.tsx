'use client'

import { useState, useEffect } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

// Image imports
import carousel1Mobile from '../assets/images/HomePage_carousel1_mobile.jpg'
import carousel1Desktop from '../assets/images/HomePage_carousel1_desktop.jpg'
import carousel2Mobile from '../assets/images/HomePage_carousel2_mobile.jpg'
import carousel2Desktop from '../assets/images/HomePage_carousel2_desktop.jpg'
import carousel3Mobile from '../assets/images/HomePage_carousel3_mobile.jpg'
import carousel3Desktop from '../assets/images/carousel_image_new.jpg'

interface CarouselSlide {
  mobileSrc: typeof carousel1Mobile
  desktopSrc: typeof carousel1Desktop
  alt: string
}

const slides: CarouselSlide[] = [
  { 
    mobileSrc: carousel1Mobile, 
    desktopSrc: carousel1Desktop, 
    alt: 'Slide 1' 
  },
  { 
    mobileSrc: carousel2Mobile, 
    desktopSrc: carousel2Desktop, 
    alt: 'Slide 2' 
  },
  { 
    mobileSrc: carousel3Mobile, 
    desktopSrc: carousel3Desktop, 
    alt: 'Slide 3' 
  },
]

interface HomeCarouselProps {}

export function HomeCarousel({}: HomeCarouselProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    setIsMobile(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const plugin = Autoplay({
    delay: 5000,
  })

  return (
    <div className="w-full mb-0 lg:mb-16">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[plugin]}
        className="w-full"
        onMouseEnter={() => plugin.stop()}
        onMouseLeave={() => plugin.reset()}
      >
        <CarouselContent className="m-0 h-[30rem] lg:h-[32rem]">
          {slides.map((slide, index) => (
            <CarouselItem 
              key={index} 
              className="p-0 basis-full h-[30rem] lg:h-[32rem]"
            >
              <div className="relative w-full h-full">
                <Image
                  src={isMobile ? slide.mobileSrc : slide.desktopSrc}
                  alt={slide.alt}
                  fill
                  className="object-cover w-full h-full"
                  sizes="100vw"
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  aria-hidden="true"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Indicators - Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index)
              }}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white scale-110 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index ? 'page' : undefined}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <CarouselPrevious 
          className="left-4 lg:left-8 h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/30 text-white transition-all duration-200" 
        />
        <CarouselNext 
          className="right-4 lg:right-8 h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/30 text-white transition-all duration-200" 
        />
      </Carousel>
    </div>
  )
}
