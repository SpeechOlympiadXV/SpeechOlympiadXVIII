
import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Navigation } from '@/components/navbar'
import { Footer } from '@/components/Footer'

// Page imports
import { HomePage } from '@/pages/Home'
import { AboutPage } from '@/pages/About'
import { ChampionsStory } from '@/pages/ChampionsStory'
import { PageTechnicalTips } from '@/pages/TechTips'
import { Gallery } from '@/pages/Gallery'
import { Blogs } from '@/pages/Blog'
import { Rules } from '@/pages/Rules'
//import { Finalists } from '@/pages/Finalists'
// import { SemiFinalists } from '@/pages/SemiFinalists'
import { Vote } from '@/pages/Vote'
import { Register } from '@/pages/Register'
import { NotFoundPage } from '@/pages/Page404'

// Sanity setup moved to lib/sanity.ts

// ScrollToTop component to handle scroll on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * Some page components (TechTips, ChampionsStory, Blogs, About) are also
 * rendered as sections of the home page, so they can't own an <h1> themselves.
 * When they're the whole page they still need one, so the route supplies a
 * visually-hidden title. Screen readers and search engines see it; the visual
 * design is unchanged.
 */
function PageTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="sr-only">{children}</h1>
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#181818] text-white">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-ember focus:px-4 focus:py-2 focus:font-semibold focus:text-[#121212]"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/about"
            element={<><PageTitle>About Speech Olympiad</PageTitle><AboutPage /></>}
          />
          <Route
            path="/champions-story"
            element={<><PageTitle>Champion's Story</PageTitle><ChampionsStory /></>}
          />
          <Route
            path="/technical-tips"
            element={<><PageTitle>Technical Tips</PageTitle><PageTechnicalTips /></>}
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/blogs"
            element={<><PageTitle>Blogs</PageTitle><Blogs /></>}
          />
          <Route path="/rules" element={<Rules />} />
          {/*<Route path="/semifinalists" element={<SemiFinalists />} />
          <Route path="/finalists" element={<Finalists />} />
          <Route path="/thulasithan" element={<Vote />} />
          <Route path="/aloka" element={<Vote />} />
          <Route path="/amirthavarshani" element={<Vote />} />
          <Route path="/neelayadhakshi" element={<Vote />} />
          <Route path="/afrah" element={<Vote />} />*/}
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
