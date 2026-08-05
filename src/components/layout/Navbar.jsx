import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { personalData } from '../../data/portfolioData'
import { NAVIGATION_LINKS } from '../../utils/constants'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../common/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation link list
  const links = [
    { name: 'About', path: '/#about' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Certificates', path: '/#certificates' },
    { name: 'Awards', path: '/#achievements' },
    { name: 'Contact', path: '/#contact' },
  ]

  const isHome = location.pathname === '/'

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-[#08060d]/80 border-b border-[var(--color-accent-border)] backdrop-blur-lg shadow-lg' 
        : 'py-6 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-wider text-white hover:text-accent transition-colors duration-300">
          PE
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-sm font-medium text-gray-300 hover:text-accent transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <Link to="/resume">
            <Button variant="secondary" className="py-2 px-4 text-xs font-semibold">
              Resume <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[var(--color-accent-border)] bg-[#08060d] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-gray-300 hover:text-accent py-2 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <Link to="/resume" onClick={() => setIsOpen(false)}>
                <Button variant="secondary" className="w-full py-2.5 text-xs font-semibold justify-center">
                  Resume <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
