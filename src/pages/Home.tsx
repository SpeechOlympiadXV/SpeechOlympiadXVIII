import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Image from '../components/Image'

// Component imports
import { Hero } from '../components/Hero.tsx'
import { Feature } from '../components/Feature.tsx'
import { Doodle } from '../components/Doodle.tsx'
//import { PartnersDisplay } from '../components/Partners.tsx'
import { CompetitionTimeline } from '../components/Timeline.tsx'
import { AppGallery } from '../components/Gallery.tsx'
import { AppTestimonialCard } from '../components/Testimonial.tsx'
import { Blogs } from './Blog.tsx'
import { PageTechnicalTips } from './TechTips.tsx'
import { ChampionsStory } from './ChampionsStory.tsx'
// import { BookletSection } from '../components/BookletSection.tsx'
// import { SemiFinalists } from './SemiFinalists.tsx'
// import { Finalists } from './Finalists.tsx'

// Image imports - Testimonials
import sirimevantestimonialmobileImage from '../assets/images/HomePage_testimonial_sirimevan.jpg'
import malindtestimonialmobileImage from '../assets/images/HomePage_testimonial_malindi.jpeg'
import asithatestimonialmobileImage from '../assets/images/HomePage_testimonial_asitha.jpg'
import amayatestimonialmobileImage from '../assets/images/HomePage_testimonial_amaya.jpg'

// Image imports - Features
import homePageAbout from '../assets/images/What is SO - Home page .png'

// Image imports - Gallery
import prelis1 from '../assets/images/gallery/1.png'
import prelis2 from '../assets/images/gallery/3.jpg'
import prelis3 from '../assets/images/gallery/8.jpg'

interface Feature {
  heading: string
  headingEnd: string
  text: string
  image: string
  urlString: string
}

interface Testimonial {
  key: string
  imageSrc: string
  title: string
  subtitle: string
  body: string
}

interface HomePageProps { }

export function HomePage({ }: HomePageProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      key: '1',
      imageSrc: sirimevantestimonialmobileImage,
      title: 'Sirimevan Jayasundera',
      subtitle: 'Champion - SOVI',
      body: 'Speech Olympiad is more than a mere speaking contest, it is a culmination of people, experiences and exposure. I cherish to this date, every moment of the competition which was a gateway to self-reflection that enhanced my capabilities in the corporate world and beyond.',
    },
    {
      key: '2',
      imageSrc: malindtestimonialmobileImage,
      title: 'Malindi Jayathunga',
      subtitle: '1st Runner-Up and Best Prepared Speaker - SOXI',
      body: 'My Speech Olympiad experience has enabled me to become the storyteller I am today. I work in advertising where I get to present new ideas and unique concepts to both my team and clients on a daily basis. I developed my presenting skills thanks to the support and knowledge I got from Speech Olympiad and the Gavel Club of University of Moratuwa.',
    },
    {
      key: '3',
      imageSrc: asithatestimonialmobileImage,
      title: 'Asitha Rathnayake',
      subtitle: 'Champion – SOXII',
      body: 'Speech Olympiad is a good place to win, but more than that, it is a great place to lose. The Gavel Mora family helped me a lot to improve myself as a speaker and a leader during the course of three Speech Olympiads, which helped me become the overall champion at Speech Olympiad XII.',
    },
    {
      key: '4',
      imageSrc: amayatestimonialmobileImage,
      title: 'Amaya Dharmasiri',
      subtitle: '1st Runner-Up and Best Impromptu Speaker – SOXII',
      body: 'I was not new to the stage, but I was new to public speaking when I took part in Speech Olympiad. Everyone at the Gavel Club was willing to help us become the best version of ourselves. Not only did I become more confident in communicating in English, but I also learnt about my capabilities and understood myself better, thanks to Speech Olympiad.',
    },
  ])

  const [displayedTestimonials, setDisplayedTestimonials] = useState<Testimonial[]>(testimonials)

  const featurettes: Feature[] = [
    {
      heading: 'What is Speech Olympiad?',
      headingEnd: '',
      text: 'Speech Olympiad stands as the flagship occasion hosted by the Gavel Club at the University of Moratuwa. As the sole English language speech competition within the university...',
      image: homePageAbout,
      urlString: '/about',
    },
  ]

  const galleryImages = [
    prelis1,
    prelis2,
    prelis3,
  ]

  // Rotate testimonials on desktop every 10 seconds
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches

    if (!isMobile) {
      const shiftTestimonial = () => {
        setDisplayedTestimonials((prev) => {
          if (prev.length === 0) return prev
          const first = prev[0]
          return [...prev.slice(1), first]
        })
      }

      const interval = setInterval(shiftTestimonial, 10000)
      return () => clearInterval(interval)
    }
  }, [testimonials])

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Marketing Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 py-12">
        {/* Doodle Element */}
        <Doodle />

        {/* Registration CTA Section */}
        <div className="mb-16 relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#EDC001] to-[#B08D00] shadow-2xl">
          <div className="absolute inset-0 bg-black/10 opacity-20"></div>
          <div className="relative px-6 py-16 sm:px-12 sm:py-20 flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#181818] tracking-tight mb-4">
              Ready to Take the Stage?
            </h2>
            <p className="max-w-2xl text-lg sm:text-xl text-[#181818]/80 font-medium mb-8">
              Join Speech Olympiad XVIII today. Register now and let your voice be heard by the world.
            </p>
            <Link to="/register" className="inline-block">
              <button className="bg-[#181818] text-white hover:bg-black px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Register Now
              </button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          {featurettes.map((featurette, i) => (
            <Feature
              key={i}
              heading={featurette.heading}
              headingEnd={featurette.headingEnd}
              text={featurette.text}
              image={featurette.image}
              urlString={featurette.urlString}
            />
          ))}
        </div>

        {/* Partners Section */}
        {/* <PartnersDisplay /> */}

        {/* Timeline Section */}
        <CompetitionTimeline />

        {/* Blogs Section */}
        <div className="mb-16">
          <Blogs limit={2} />
        </div>

        {/* Booklet Section */}
        {/* <BookletSection /> */}

        {/* Semi Finalists Section */}
        {/* <div className="mb-16">
          <SemiFinalists />
        </div> */}

        {/* Finalists Section */}
        {/* <div className="mb-16">
          <Finalists />
        </div> */}

        {/* Technical Tips Section */}
        <div className="mb-16">
          <PageTechnicalTips />
        </div>

        {/* Champions Story Section */}
        <div className="mb-16">
          <ChampionsStory />
        </div>

        {/* Testimonials Section */}
        <div className="my-8 px-4 py-8 w-full bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm rounded-lg">
          <div className="pl-4 text-3xl lg:text-4xl font-semibold tracking-tighter leading-tight text-white mb-8">
            Testimonials
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-3">
            {displayedTestimonials.map((testimonial) => (
              <div
                key={`testimonial-${testimonial.key}`}
                className="transform transition-all duration-500 ease-out"
              >
                <AppTestimonialCard
                  title={testimonial.title}
                  imageSrc={testimonial.imageSrc}
                  body={testimonial.body}
                  subtitle={testimonial.subtitle}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="my-9 px-4 py-8 w-full bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm rounded-lg">
          <div className="pl-4 text-3xl lg:text-4xl font-semibold tracking-tighter leading-tight text-white mb-4">
            Gallery
          </div>
          <div className="p-2">
            <AppGallery images={galleryImages} showLink={true} />
          </div>
        </div>
      </div>
    </main>
  )
}
