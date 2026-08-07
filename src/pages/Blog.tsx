'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Image from '../components/Image'
import { ChevronLeft, X } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { sanityClient as sanity } from '../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'

const imageBuilder = imageUrlBuilder(sanity)

interface Post {
  _id: string
  title: string
  slug: { current: string }
  body: any[]
  image: any
  coverImage: any
  name: string
  images: Array<{ image: { asset: { _ref: string } } }>
  authorImage: any
  description?: string
  excerpt?: string
}

interface BlogsProps {
  limit?: number
}

export function Blogs({
  limit = 50,
}: BlogsProps) {
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(false)
  const [loadBlog, setLoadBlog] = useState(true)
  const [slug, setSlug] = useState<string | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [post, setPost] = useState<Post | null>(null)
  const [blocks, setBlocks] = useState<any[]>([])
  const [showModal, setShowModal] = useState(false)
  const [modalImageUrl, setModalImageUrl] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [touchStartX, setTouchStartX] = useState(0)
  const [touchEndX, setTouchEndX] = useState(0)

  const observerRef = useRef<IntersectionObserver | null>(null)
  const componentRef = useRef<HTMLDivElement>(null)

  const location = useLocation()
  const navigate = useNavigate()

  // Image URL converter
  const convertImageUrl = (imageRef: string): string => {
    let modifiedUrl = imageRef.replace('image-', '').replace(/-(?!.*-)/, '.')
    return `https://cdn.sanity.io/images/i32b0q2c/production/${modifiedUrl}`
  }

  // Image URL builder
  const imageUrlFor = (source: any) => {
    return imageBuilder.image(source).url()
  }

  // Fetch blog posts
  const fetchData = useCallback(() => {
    const query =
      limit === 2
        ? `*[_type == "post" && (slug.current in ["so-xv-the-grand-finale", "the-preliminary-round-of-speech-olympiad-xv", "speech-olympiad-xv-the-semi-final-round"])] {
            _id, title, slug, description,
            "image": mainImage.asset->,
            "name": author->name,
            excerpt
          }`
        : `*[_type == "post"] {
            _id, title, slug, description,
            "image": mainImage.asset->,
            "name": author->name,
            excerpt
          }[0..${limit}]`

    setLoading(true)
    sanity.fetch(query).then(
      (posts: Post[]) => {
        setLoading(false)
        setPosts(posts)
      },
      (error: Error) => {
        setError(error.message)
        setLoading(false)
      }
    )
  }, [limit])

  // Fetch single post
  const handleReadmore = useCallback((postSlug: string) => {
    if (location.pathname === '/') {
      navigate('/blogs', { state: { slug: postSlug } })
      return
    }

    const query = `*[slug.current == $slug] {
      _id, title, slug, body, 
      "image": mainImage.asset->,
      "coverImage": coverImage.asset->,
      "name": author->name,
      images,
      "authorImage": author->image
    }[0]`

    setSlug(postSlug)
    setLoadBlog(false)
    setLoading2(true)

    sanity.fetch(query, { slug: postSlug }).then(
      (post: Post) => {
        setLoading2(false)
        setPost(post)
        setBlocks(post.body)
      },
      (error: Error) => {
        setError(error.message)
        setLoading2(false)
      }
    )
  }, [location.pathname, navigate])

  // Handle incoming state from navigation
  useEffect(() => {
    if (location.state && location.state.slug) {
      handleReadmore(location.state.slug)
      window.history.replaceState({}, document.title)
    }
  }, [location.state, handleReadmore])

  // Close post
  const closePost = useCallback(() => {
    setSlug(null)
    setLoadBlog(true)
    setPost(null)
  }, [])

  // Image modal handlers
  const showImageModal = (imageUrl: string) => {
    setModalImageUrl(imageUrl)
    setShowModal(true)
  }

  const closeImageModal = () => {
    setModalImageUrl('')
    setShowModal(false)
  }

  // Keyboard handler
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePost()
      }
    },
    [closePost]
  )

  // Touch handlers
  const handleTouchStart = (event: TouchEvent) => {
    setTouchStartX(event.changedTouches[0].screenX)
  }

  const handleTouchEnd = (event: TouchEvent) => {
    setTouchEndX(event.changedTouches[0].screenX)
    detectSwipe(event.changedTouches[0].screenX)
  }

  const detectSwipe = (touchEndX: number) => {
    const threshold = 50
    const swipeDistance = touchEndX - touchStartX

    if (swipeDistance > threshold) {
      closePost()
    }
  }

  // Intersection Observer
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.1,
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.addEventListener('keydown', handleKeyPress)
          window.addEventListener('touchstart', handleTouchStart)
          window.addEventListener('touchend', handleTouchEnd)
        } else {
          window.removeEventListener('keydown', handleKeyPress)
          window.removeEventListener('touchstart', handleTouchStart)
          window.removeEventListener('touchend', handleTouchEnd)
        }
      })
    }

    observerRef.current = new IntersectionObserver(
      handleIntersection,
      options
    )
    if (componentRef.current) {
      observerRef.current.observe(componentRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      window.removeEventListener('keydown', handleKeyPress)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [handleKeyPress])

  // Initial fetch
  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div
      ref={componentRef}
      className={`transition-all p-9 bg-[#121212]/80 backdrop-blur-sm text-gray-100 my-12 rounded-xl w-full border border-[#282828]`}
    >
      <div className="w-full">
        {/* Header */}
        <div className="w-full flex flex-col items-start mb-8">
          <div className="text-3xl lg:text-4xl font-semibold tracking-tighter leading-tight text-white">
            Past Experiences
          </div>
        </div>

        {/* Single Post View */}
        {slug && (
          <div>
            {loading2 && (
              <div className="text-center text-2xl font-semibold">Loading...</div>
            )}

            {error && (
              <div
                className="bg-red-800 border-l-4 border-red-500 text-white p-4"
                role="alert"
              >
                <p className="font-bold">Error</p>
                <p>{error}</p>
              </div>
            )}

            {post && (
              <div className="relative w-full text-gray-100 pb-16 rounded-lg shadow-lg overflow-hidden bg-black/20">
                {/* Close Button */}
                <button
                  onClick={closePost}
                  className="absolute z-30 top-4 left-4 bg-gray-900/60 backdrop-blur-md text-white p-2 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out"
                  aria-label="Close post"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Cover Image */}
                {post.coverImage && (
                  <div className="relative text-center w-full">
                    <Image
                      src={imageUrlFor(post.coverImage)}
                      alt={post.title}
                      width={1200}
                      height={600}
                      className="w-full h-64 md:h-[450px] object-cover"
                      sizes="100vw"
                    />
                  </div>
                )}

                {/* Main Content Card */}
                <div className="flex justify-center w-full">
                  <div className="w-[90%] md:w-[80%] bg-[#121212]/80 border border-gray-600 rounded-2xl p-9 md:p-14 my-9 text-lg font-light leading-normal">
                    
                    {/* Title */}
                    <div className="text-center mb-12">
                      <h1 className="text-4xl md:text-5xl font-bold text-white border-b border-[#edc001] pb-2 inline-block">
                        {post.title}
                      </h1>
                    </div>

                    {/* Blog Content */}
                    <div className="article-content prose prose-invert max-w-none">
                      <PortableText
                        value={blocks}
                      />
                    </div>

                    {/* Author Info */}
                    {post.name && (
                      <div className="mt-12 border-t border-gray-600 pt-8">
                        <p className="text-gray-400 mb-4 text-base">Words by</p>
                        <div className="flex items-center mb-4">
                          {post.authorImage && (
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gray-600 mr-6">
                              <Image
                                src={imageUrlFor(post.authorImage)}
                                alt={post.name}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="text-xl md:text-2xl font-medium text-[#EDC001]">
                            {post.name}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Blog Photos Gallery */}
                    {post.images && post.images.length > 0 && (
                      <div className="mt-12 border-t border-gray-600 pt-8">
                        <h2 className="text-2xl font-semibold mb-6 text-white">
                          Blog Photos
                        </h2>
                        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
                          {post.images.map((imageC, index) => {
                            const imageUrl = convertImageUrl(
                              imageC.image.asset._ref
                            )
                            return (
                              <div
                                key={index}
                                className="cursor-pointer break-inside-avoid mb-4 overflow-hidden rounded-lg"
                                onClick={() => showImageModal(imageUrl)}
                              >
                                <Image
                                  src={imageUrl}
                                  alt={`Blog photo ${index + 1}`}
                                  width={800}
                                  height={600}
                                  className="w-full h-auto rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Image Modal */}
            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-75" />
                <div className="relative z-10 max-w-4xl w-full max-h-screen flex items-center justify-center">
                  <button
                    onClick={closeImageModal}
                    className="absolute top-4 right-4 z-40 text-white hover:text-gray-300 transition"
                    aria-label="Close image"
                  >
                    <X className="w-8 h-8" />
                  </button>
                  <Image
                    src={modalImageUrl}
                    alt="Modal image"
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-screen object-contain"
                    sizes="100vw"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Blog Posts Grid */}
        {loadBlog && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-4 pr-4">
            {posts.map((post) => (
              <div
                key={post._id}
                className="flex flex-col h-full backdrop-brightness-150 bg-opacity-50 rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="p-4">
                  <Image
                    src={imageUrlFor(post.image)}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold mb-2 text-white">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4 flex-grow">
                    {post.description || post.excerpt}
                  </p>
                  <button
                    onClick={() => handleReadmore(post.slug.current)}
                    className="mt-auto self-start text-black font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out hover:brightness-110 hover:scale-105 shadow-md bg-[#c8a009]"
                  >
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Global Styles */}
      <style>{`
        .article-content p {
          margin-top: 1rem;
          margin-bottom: 1rem;
          font-weight: 300;
          color: rgb(243 244 246);
        }
        
        .article-content p:first-of-type::first-letter {
          font-size: 250%;
          line-height: 100%;
          color: #EDC001;
        }

        .article-content blockquote {
          background-color: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          text-align: left;
          font-style: italic;
          border-left: 4px solid #EDC001;
          margin: 1.5rem 0;
          border-radius: 0 0.5rem 0.5rem 0;
        }
        
        .article-content blockquote p {
          font-style: italic;
          color: rgb(209 213 219);
        }

        .article-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: rgb(255 255 255);
          margin: 2.5rem 0 1.5rem 0;
          border-bottom: 2px solid rgba(237, 192, 1, 0.4);
          padding-bottom: 0.5rem;
        }

        .article-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: rgb(251 191 36);
          margin: 2rem 0 1rem 0;
        }

        .article-content ul, .article-content ol {
          margin: 1.5rem 0 1.5rem 2rem;
          color: rgb(229 231 235);
        }

        .article-content li {
          margin-bottom: 0.75rem;
          line-height: 1.5;
        }

        .article-content li::marker {
          color: rgb(251 191 36);
        }

        .article-content img {
          border-radius: 0.75rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          margin: 2.5rem auto;
          max-width: 100%;
          height: auto;
        }

        @media (max-width: 768px) {
          .article-content h2 {
            font-size: 1.5rem;
          }

          .article-content h3 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  )
}
