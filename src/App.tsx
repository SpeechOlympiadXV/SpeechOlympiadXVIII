'use client'

import React, { useState, useEffect } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

// Page imports
import PageHome from '@/pages/PageHome'
import PageAbout from '@/pages/PageAbout'
import PageChampionsStory from '@/pages/PageChampionsStory'
import PageTechnicalTips from '@/pages/PageTechnicalTips'
import PageGallery from '@/pages/PageGallery'
import PageBlogs from '@/pages/PageBlogs'
import PageRules from '@/pages/PageRules'
import PageFinalists from '@/pages/PageFinalists'
import PageVote from '@/pages/PageVote'
import Page404 from '@/pages/Page404'

// Sanity setup
import { createClient } from 'next-sanity'

const sanityClient = createClient({
  projectId: 'i32b0q2c',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

type RouteKey = '/' | '/about' | '/champions-story' | '/technical-tips' | '/gallery' | '/blogs' | '/rules' | '/finalists' | '/thulasithan' | '/aloka' | '/amirthavarshani' | '/neelayadhakshi' | '/afrah'

const ROUTES: Record<RouteKey, React.ComponentType> = {
  '/': PageHome,
  '/about': PageAbout,
  '/champions-story': PageChampionsStory,
  '/technical-tips': PageTechnicalTips,
  '/gallery': PageGallery,
  '/blogs': PageBlogs,
  '/rules': PageRules,
  '/finalists': PageFinalists,
  '/thulasithan': PageVote,
  '/aloka': PageVote,
  '/amirthavarshani': PageVote,
  '/neelayadhakshi': PageVote,
  '/afrah': PageVote,
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('')
  const [currentView, setCurrentView] = useState<React.ComponentType>(PageHome)

  // Get the hash route
  const getHash = (): string => {
    if (typeof window !== 'undefined') {
      return window.location.hash.split('/')[0]
    }
    return ''
  }

  // Get nth parameter from hash
  const getNthParam = (n: number): string => {
    if (typeof window !== 'undefined') {
      return window.location.hash.split('/')[n] || ''
    }
    return ''
  }

  // Update current view based on path
  useEffect(() => {
    // Scroll to top when path changes
    window.scrollTo({ top: 0, behavior: 'auto' })

    // Get path from hash
    const hash = window.location.hash
    const path = ('/' + hash.slice(1)) as RouteKey

    // Get the component, fallback to 404
    const component = ROUTES[path] || Page404
    setCurrentView(() => component)
  }, [currentPath])

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Set initial path on mount
  useEffect(() => {
    setCurrentPath(window.location.hash)
  }, [])

  const CurrentView = currentView

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <CurrentView />
      </main>
      <Footer />
    </div>
  )
}
