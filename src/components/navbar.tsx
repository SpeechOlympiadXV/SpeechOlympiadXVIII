import { useState, useEffect } from 'react'
import { SOLogo } from './SOLogo' // Assuming SOLogo is converted to React component
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X } from 'lucide-react'

interface NavItem {
  name: string
  href: string
  current: boolean
  className: string
}

const navigation: NavItem[] = [
  { name: 'Home', href: '#', current: true, className: 'text-white' },
  { name: 'About', href: '#about', current: false, className: 'text-white' },
  { name: "Champion's Story", href: "#champions-story", current: false, className: 'text-white' },
  { name: 'Technical Tips', href: '#technical-tips', current: false, className: 'text-white' },
  { name: 'Finalists', href: '#finalists', current: false, className: 'text-white' },
  { name: 'Gallery', href: '#gallery', current: false, className: 'text-white' },
  { name: 'Rules & Regulations', href: '#rules', current: false, className: 'text-white' },
  { name: 'Blogs', href: '#blogs', current: false, className: 'text-white' },
]

interface NavigationProps {}

export function Navigation({}: NavigationProps) {
  const [activeURL, setActiveURL] = useState('#')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      setActiveURL(window.location.hash || '#')
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Set initial state

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const NavLink = ({ item }: { item: NavItem }) => (
    <a
      href={item.href}
      className={`
        px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200
        ${item.className}
        ${activeURL === item.href 
          ? 'backdrop-brightness-150 shadow-lg' 
          : 'hover:backdrop-brightness-150 hover:shadow-md'
        }
      `}
      aria-current={activeURL === item.href ? 'page' : undefined}
    >
      {item.name}
    </a>
  )

  const MobileNavLink = ({ item }: { item: NavItem }) => (
    <a
      key={item.name}
      href={item.href}
      onClick={() => setMobileMenuOpen(false)}
      className={`
        block px-3 py-2 rounded-md text-base font-medium transition-all duration-200
        ${activeURL === item.href 
          ? 'backdrop-brightness-75 bg-white/10 shadow-lg' 
          : 'hover:backdrop-brightness-75 hover:bg-white/5'
        }
      `}
      aria-current={activeURL === item.href ? 'page' : undefined}
    >
      {item.name}
    </a>
  )

  return (
    <nav className="bg-inherit sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <SOLogo className="w-auto h-24" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:block ml-auto">
            <div className="flex items-center space-x-4">
              {navigation.map((item) => (
                <NavLink key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="inline-flex items-center justify-center p-2 rounded-md text-white transition-all duration-200 hover:backdrop-brightness-150 focus:outline-none backdrop-brightness-150"
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu className="block h-6 w-6 xl:hidden" />
                  <X className="hidden h-6 w-6 xl:block" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] sm:w-[400px] bg-gradient-to-br from-[#181818] via-[#181818] to-[#282828] border-none rounded-b-none"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <MobileNavLink key={item.name} item={item} />
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
