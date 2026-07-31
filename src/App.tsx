'use client'

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
import { Finalists } from '@/pages/Finalists'
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

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#181818] text-white">
      <ScrollToTop />
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/champions-story" element={<ChampionsStory />} />
          <Route path="/technical-tips" element={<PageTechnicalTips />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/finalists" element={<Finalists />} />
          <Route path="/thulasithan" element={<Vote />} />
          <Route path="/aloka" element={<Vote />} />
          <Route path="/amirthavarshani" element={<Vote />} />
          <Route path="/neelayadhakshi" element={<Vote />} />
          <Route path="/afrah" element={<Vote />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
