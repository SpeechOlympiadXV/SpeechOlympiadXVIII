'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
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
  }, [])

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
      className={`transition-all bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm text-gray-100 mt-10 mb-10 rounded-lg mr-auto ${
        post
          ? 'w-[98%] ml-[1%] md:w-[95%] md:ml-[2.5%]'
          : 'w-[90%] ml-[5%]'
      }`}
    >
      <div className="container mx-auto px-4 py-8 w-full">
        {/* Header */}
        <div className="w-full flex flex-col items-start mb-9">
          <div className="pl-5 text-3xl lg:text-4xl font-semibold tracking-tighter leading-tight text-white">
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
              <div className="backdrop-brightness-150 bg-opacity-50 rounded-lg shadow-lg overflow-hidden relative">
                {/* Close Button */}
                <button
                  onClick={closePost}
                  className="absolute z-30 top-4 left-4 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out"
                  aria-label="Close post"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Cover Image */}
                {post.coverImage && (
                  <div className="p-4 mt-4">
                    <Image
                      src={imageUrlFor(post.coverImage)}
                      alt={post.title}
                      width={1200}
                      height={400}
                      className="w-full h-64 object-cover rounded-lg"
                      sizes="100vw"
                    />
                  </div>
                )}

                {/* Title */}
                <div className="p-6">
                  <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white border-b border-[#edc001] pb-2 inline-block">
                      {post.title}
                    </h1>
                  </div>

                  {/* Blog Content */}
                  <div className="blog-container">
                    <div className="max-w-[920px] mx-auto prose prose-invert prose-lg blog-content">
                      <PortableText
                        value={blocks}
                      />
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="mt-8 flex items-center">
                    {post.authorImage && (
                      <Image
                        src={imageUrlFor(post.authorImage)}
                        alt={post.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                    )}
                    <p className="text-sm text-gray-300">By: {post.name}</p>
                  </div>
                </div>

                {/* Blog Photos Gallery */}
                {post.images && post.images.length > 0 && (
                  <div className="px-6 py-4">
                    <h2 className="text-2xl font-semibold mb-4 text-white">
                      Blog Photos
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {post.images.map((imageC, index) => {
                        const imageUrl = convertImageUrl(
                          imageC.image.asset._ref
                        )
                        return (
                          <div
                            key={index}
                            className="aspect-square cursor-pointer"
                          >
                            <Image
                              src={imageUrl}
                              alt={`Blog photo ${index + 1}`}
                              width={400}
                              height={400}
                              onClick={() => showImageModal(imageUrl)}
                              className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                              sizes="(max-width: 768px) 50vw, 33vw"
                            />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
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
                className="backdrop-brightness-150 bg-opacity-50 rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="p-4">
                  <Image
                    src={imageUrlFor(post.image)}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-white">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4">
                    {post.description || post.excerpt}
                  </p>
                  <button
                    onClick={() => handleReadmore(post.slug.current)}
                    className="bg-[#EDC001cc] hover:bg-[#EDC001] text-gray-100 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
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
        .blog-container {
          width: 100%;
          max-width: none;
          text-align: left;
          margin: 0;
          padding: 0 2rem;
        }

        .prose {
          color: rgb(243 244 246);
          font-size: 1.25rem;
          line-height: 2;
          text-align: left;
          max-width: none !important;
        }

        .prose p {
          margin: 2rem 0;
          text-align: justify;
          text-justify: inter-word;
          max-width: 75ch;
          padding-right: 1.5rem;
          font-weight: 400;
        }

        .prose p:first-of-type {
          font-size: 1.4rem;
          font-weight: 400;
          color: rgb(229 231 235);
          line-height: 1.7;
          font-style: italic;
          border-left: 4px solid rgb(251 191 36);
          padding-left: 1.5rem;
          margin: 2.5rem 0;
        }

        .prose h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: rgb(255 255 255);
          margin: 2.5rem 0 1.5rem 0;
          border-bottom: 2px solid rgba(237, 192, 1, 0.4);
          padding-bottom: 0.5rem;
        }

        .prose h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: rgb(251 191 36);
          margin: 2rem 0 1rem 0;
        }

        .prose ul, .prose ol {
          margin: 1.5rem 0 1.5rem 2rem;
          color: rgb(229 231 235);
        }

        .prose li {
          margin-bottom: 0.75rem;
          line-height: 1.6;
        }

        .prose li::marker {
          color: rgb(251 191 36);
        }

        .prose blockquote {
          border-left: 4px solid rgb(251 191 36);
          padding: 1.5rem 2rem;
          margin: 2rem 0;
          background: linear-gradient(135deg, rgba(237, 192, 1, 0.1), rgba(0, 0, 0, 0));
          border-radius: 0 0.5rem 0.5rem 0;
        }

        .prose blockquote p {
          font-style: italic;
          color: rgb(209 213 219);
        }

        .prose img {
          border-radius: 0.75rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          margin: 2.5rem auto;
          max-width: 100%;
          height: auto;
        }

        @media (max-width: 768px) {
          .blog-container {
            padding: 0 1rem;
          }

          .prose {
            font-size: 1.125rem;
            line-height: 1.8;
          }

          .prose p:first-of-type {
            font-size: 1.25rem;
          }

          .prose h2 {
            font-size: 1.5rem;
          }

          .prose h3 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  )
}
