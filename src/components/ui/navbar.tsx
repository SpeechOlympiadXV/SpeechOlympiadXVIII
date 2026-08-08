import { useState, useEffect } from 'react'
import { SOLogo } from '../SOLogo'
import { Menu, X } from 'lucide-react'

interface NavItem {
  name: string
  href: string
  current?: boolean
  class?: string
}

const NAVIGATION: NavItem[] = [
  { name: 'Home', href: '#', current: true, class: 'text-white' },
  { name: 'About', href: '#about', current: false, class: 'text-white' },
  { name: "Champion's Story", href: '#champions-story', current: false, class: 'text-white' },
  { name: 'Technical Tips', href: '#technical-tips', current: false, class: 'text-white' },
  { name: 'Finalists', href: '#finalists', current: false, class: 'text-white' },
  { name: 'Gallery', href: '#gallery', current: false, class: 'text-white' },
  { name: 'Rules & Regulations', href: '#rules', current: false, class: 'text-white' },
  { name: 'Blogs', href: '#blogs', current: false, class: 'text-white' },
]

export default function Navigation() {
  const [activeURL, setActiveURL] = useState<string>('#')
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    // Set initial hash
    const currentHash = window.location.hash || '#'
    setActiveURL(currentHash)

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash || '#'
      setActiveURL(newHash)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const isActive = (href: string): boolean => activeURL === href

  return (
    <nav className="sticky top-0 z-50 w-full bg-inherit">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <SOLogo className="h-24 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="ml-auto hidden xl:block">
            <div className="flex items-center space-x-4">
              {NAVIGATION.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`rounded-md px-3 py-2 text-sm font-semibold transition duration-200 ${
                    isActive(item.href)
                      ? 'backdrop-brightness-150'
                      : 'hover:backdrop-brightness-150'
                  } ${item.class}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center rounded-md p-2 text-white transition duration-200 hover:backdrop-brightness-150 focus:outline-none ${
                mobileMenuOpen ? 'backdrop-brightness-150' : ''
              }`}
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="absolute z-20 w-full rounded-b-2xl bg-gradient-to-br from-[#181818] via-[#181818] to-[#282828] lg:hidden"
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {NAVIGATION.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`block rounded-md px-3 py-2 text-base font-medium text-white ${
                  isActive(item.href)
                    ? 'backdrop-brightness-75'
                    : 'hover:backdrop-brightness-75'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
