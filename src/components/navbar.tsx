import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SOLogo } from './SOLogo' // Assuming SOLogo is converted to React component
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X } from 'lucide-react'

interface NavItem {
  name: string
  href: string
  current: boolean
  className?: string
  isButton?: boolean
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/', current: true, className: 'text-white' },
  { name: 'About', href: '/about', current: false, className: 'text-white' },
  { name: "Champion's Story", href: "/champions-story", current: false, className: 'text-white' },
  { name: 'Technical Tips', href: '/technical-tips', current: false, className: 'text-white' },
  /*{ name: 'Finalists', href: '/finalists', current: false, className: 'text-white' },*/
  { name: 'Gallery', href: '/gallery', current: false, className: 'text-white' },
  { name: 'Rules & Regulations', href: '/rules', current: false, className: 'text-white' },
  { name: 'Blogs', href: '/blogs', current: false, className: 'text-white' },
  { name: 'Register', href: '/register', current: false, isButton: true },
]

interface NavigationProps { }

export function Navigation({ }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const activeURL = location.pathname

  const NavLink = ({ item }: { item: NavItem }) => {
    const isActive = item.href === '/' ? activeURL === '/' : activeURL.startsWith(item.href)

    if (item.isButton) {
      return (
        <Link
          to={item.href}
          className="ml-2 px-6 py-2 rounded-md text-sm font-bold inline-block register-btn"
        >
          {item.name}
        </Link>
      )
    }

    return (
      <Link
        to={item.href}
        className={`
          px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200
          ${item.className || ''}
          ${isActive
            ? 'bg-white/10 shadow-lg text-white'
            : 'text-gray-300 hover:bg-white/5 hover:shadow-md hover:text-white'
          }
        `}
        aria-current={isActive ? 'page' : undefined}
      >
        {item.name}
      </Link>
    )
  }

  const MobileNavLink = ({ item }: { item: NavItem }) => {
    const isActive = item.href === '/' ? activeURL === '/' : activeURL.startsWith(item.href)

    if (item.isButton) {
      return (
        <Link
          key={item.name}
          to={item.href}
          onClick={() => setMobileMenuOpen(false)}
          className="block w-fit mt-4 px-6 py-2 rounded-md text-base font-bold register-btn"
        >
          {item.name}
        </Link>
      )
    }

    return (
      <Link
        key={item.name}
        to={item.href}
        onClick={() => setMobileMenuOpen(false)}
        className={`
          block px-3 py-2 rounded-md text-base font-medium transition-all duration-200
          ${item.className || ''}
          ${isActive
            ? 'bg-white/10 shadow-lg text-white'
            : 'text-gray-300 hover:bg-white/5 hover:shadow-md hover:text-white'
          }
        `}
        aria-current={isActive ? 'page' : undefined}
      >
        {item.name}
      </Link>
    )
  }

  return (
    <nav className="bg-[#181818] sticky top-0 w-full z-50 border-b border-white/5 shadow-md">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <SOLogo className="w-auto h-14" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:block ml-auto">
            <div className="flex items-center space-x-1 lg:space-x-2">
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
