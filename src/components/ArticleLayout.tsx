import React from 'react'
import Image from './Image'

interface ArticleLayoutProps {
  heroImageDesktop?: string
  heroImageMobile?: string
  children: React.ReactNode
  authorName?: string
  intervieweeName?: string
  intervieweeImg?: string
  compiledBy?: boolean
}

export function ArticleLayout({
  heroImageDesktop,
  heroImageMobile,
  children,
  authorName,
  intervieweeName,
  intervieweeImg,
  compiledBy = true,
}: ArticleLayoutProps) {
  return (
    <main className="text-gray-100 pb-16">
      {/* Hero Section */}
      {(heroImageDesktop || heroImageMobile) && (
        <div className="relative text-center w-full">
          {heroImageMobile && (
            <Image
              src={heroImageMobile}
              alt="Hero"
              className="md:hidden w-full h-auto object-cover"
            />
          )}
          {heroImageDesktop && (
            <Image
              src={heroImageDesktop}
              alt="Hero"
              className={`${heroImageMobile ? 'hidden md:block' : ''} w-full h-[450px] object-cover`}
            />
          )}
        </div>
      )}

      {/* Article Content */}
      <div className="flex justify-center w-full">
        <div className="w-[90%] md:w-[80%] bg-[#121212]/80 border border-gray-600 rounded-2xl p-9 md:p-14 my-9 text-xl font-light leading-normal">
          <div className="article-content prose prose-invert max-w-none">
            {children}
          </div>

          {/* Interview Section */}
          {intervieweeName && (
            <div className="mt-8 border-t border-gray-600 pt-6">
              <p className="text-gray-400 mb-4">Words by</p>
              <div className="flex items-center mb-4">
                {intervieweeImg && (
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-600 mr-6">
                    <Image
                      src={intervieweeImg}
                      alt={intervieweeName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="text-xl font-medium text-[#EDC001]">
                  {intervieweeName}
                </div>
              </div>
              {compiledBy && authorName && (
                <p className="text-gray-400">Compiled by {authorName}</p>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .article-content p {
          margin-top: 1rem;
          margin-bottom: 1rem;
          font-weight: 300;
        }
        .article-content .first-letter::first-letter {
          font-size: 250%;
          line-height: 100%;
          color: #EDC001;
        }
        .article-content .box {
          background-color: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          text-align: left;
          font-style: italic;
          border-left: 4px solid #EDC001;
          margin: 1.5rem 0;
          border-radius: 4px;
        }
        .article-content img.article-img {
          width: 100%;
          height: auto;
          object-fit: cover;
          margin: 2rem auto;
          display: block;
          border-radius: 8px;
        }
        @media (min-width: 768px) {
          .article-content img.article-img {
            width: 50%;
          }
          .article-content img.article-img-resize {
            width: 40%;
          }
        }
      `}</style>
    </main>
  )
}
