'use client'

import Image from './Image'

interface AppTestimonialCardProps {
  imageSrc: string
  title: string
  subtitle: string
  body: string
}

export function AppTestimonialCard({
  imageSrc,
  title,
  subtitle,
  body,
}: AppTestimonialCardProps) {
  return (
    <div className="testimonial-card mb-3 md:mb-0 bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="flex justify-center my-4 pt-3">
        <Image
          src={imageSrc}
          alt={title}
          width={100}
          height={100}
          className="testimonial-card-img w-[100px] h-[100px] rounded-full object-cover"
          loading="lazy"
          sizes="100px"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h5 className="text-left text-lg font-semibold text-white mb-2 testimonial-card-heading">
          {title}
        </h5>
        <h6 className="text-sm text-gray-400 mb-4 testimonial-card-subtitle">
          {subtitle}
        </h6>
        <p className="text-left text-gray-300 text-base leading-relaxed testimonial-card-body">
          "{body}"
        </p>
      </div>

      <style>{`
        .testimonial-card {
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
        }

        .testimonial-card-img {
          border: 2px solid #EDC001;
        }
      `}</style>
    </div>
  )
}
