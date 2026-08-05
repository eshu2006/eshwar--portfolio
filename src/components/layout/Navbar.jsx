import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ onOpenShortcuts }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { key: '1', name: 'About', id: 'about' },
    { key: '2', name: 'Skills', id: 'skills' },
    { key: '3', name: 'Experience', id: 'experience' },
    { key: '4', name: 'Projects', id: 'projects' },
    { key: '5', name: 'Certificates', id: 'certificates' },
    { key: '8', name: 'Contact', id: 'contact' },
  ]

  const handleScrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => handleScrollTo(link.id)}
              className="text-sm font-medium text-gray-300 hover:text-accent transition-colors duration-300 flex items-center gap-2 cursor-pointer"
            >
              <kbd className="px-1.5 py-0.5 rounded bg-neutral-950 border border-emerald-500/30 text-emerald-400 font-mono text-[9px] font-bold shadow-[0_1px_0_rgba(16,185,129,0.1)]">
                {link.key}
              </kbd>
              <span>{link.name}</span>
            </button>
          ))}
        </div>

        {/* Desktop / Mobile Shortcuts Toggle */}
        <button
          onClick={onOpenShortcuts}
          className="px-4.5 py-2.5 rounded-xl text-xs font-semibold text-gray-300 hover:text-white border border-neutral-900 hover:border-emerald-500/20 bg-neutral-950/40 hover:bg-emerald-500/5 transition-all duration-300 flex items-center gap-2 cursor-pointer shrink-0"
        >
          <span>⌨ Shortcuts</span>
          <kbd className="hidden sm:inline px-1.5 py-0.5 rounded bg-[#161324] border border-emerald-500/30 text-emerald-400 font-mono text-[9px] font-bold">?</kbd>
        </button>
      </div>
    </nav>
  )
}
