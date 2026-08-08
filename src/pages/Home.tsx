import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Image from '../components/Image'

// Component imports
import { Hero } from '../components/Hero.tsx'
import { Feature } from '../components/Feature.tsx'
import { Doodle } from '../components/Doodle.tsx'
import { RegistrationCTA } from '../components/RegistrationCTA.tsx'
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

  // Removed manual rotation useEffect since we use CSS marquee

  return (
    // App.tsx already provides the page's single <main> landmark.
    <>
      {/* Hero Section */}
      <Hero />

      {/* Marketing Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 py-12">
        {/* Doodle Element */}
        <Doodle />

        {/* Registration CTA Section */}
        <RegistrationCTA />

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
        <section
          aria-labelledby="testimonials-heading"
          className="my-12 p-9 w-full bg-[#121212]/80 backdrop-blur-sm rounded-xl border border-[#282828]"
        >
          <h2
            id="testimonials-heading"
            className="font-display text-2xl lg:text-3xl font-bold tracking-wide leading-tight text-white mb-8"
          >
            Testimonials
          </h2>

          {/* Testimonial Cards Marquee. The list is rendered twice so the CSS
              marquee can loop seamlessly; the duplicate is hidden from
              assistive tech so each testimonial is announced only once. */}
          <div className="overflow-hidden relative w-full p-3">
            <div className="flex w-max animate-marquee gap-6">
              {[false, true].map((isDuplicate) => (
                <div
                  key={isDuplicate ? 'marquee-duplicate' : 'marquee-primary'}
                  className="flex gap-6"
                  aria-hidden={isDuplicate || undefined}
                >
                  {testimonials.map((testimonial) => (
                    <div
                      key={`testimonial-${testimonial.key}`}
                      className="w-[300px] md:w-[400px] flex-shrink-0 flex items-stretch"
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
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section
          aria-labelledby="gallery-heading"
          className="my-12 p-9 w-full bg-[#121212]/80 backdrop-blur-sm rounded-xl border border-[#282828]"
        >
          <h2
            id="gallery-heading"
            className="font-display text-2xl lg:text-3xl font-bold tracking-wide leading-tight text-white mb-8"
          >
            Gallery
          </h2>
          <div className="p-2">
            <AppGallery images={galleryImages} showLink={true} />
          </div>
        </section>
      </div>
    </>
  )
}
