
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, User, Briefcase, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      router.push(`/#${sectionId}`)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  const isLegalPage = pathname === '/impressum' || pathname === '/datenschutz'

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      suppressHydrationWarning
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo und Name / Back Button für Legal Pages */}
          <div className="flex items-center space-x-4">
            {isLegalPage && (
              <Button
                onClick={() => router.push('/')}
                variant="ghost"
                size="sm"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Zurück
              </Button>
            )}
            
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/mindshift-logo.png"
                alt="Mindshift AI Consultants"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">
                Dirk Brusch
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - nur auf der Hauptseite */}
          {!isLegalPage && (
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Über mich</span>
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Briefcase className="h-4 w-4" />
                <span>Leistungen</span>
              </button>
            </nav>
          )}

          {/* Mobile Menu Button - nur auf der Hauptseite */}
          {!isLegalPage && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          )}
        </div>

        {/* Mobile Navigation - nur auf der Hauptseite */}
        {isMenuOpen && !isLegalPage && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg rounded-b-lg border-t">
            <nav className="py-4 px-4 space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                <User className="h-4 w-4" />
                <span>Über mich</span>
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                <Briefcase className="h-4 w-4" />
                <span>Leistungen</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
