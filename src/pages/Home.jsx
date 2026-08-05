import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Experience from '../components/experience/Experience'
import Projects from '../components/projects/Projects'
import Achievements from '../components/achievements/Achievements'
import Certificates from '../components/certificates/Certificates'
import Contact from '../components/contact/Contact'
import Footer from '../components/layout/Footer'
import CursorGlow from '../components/effects/CursorGlow'

import LandingPage from '../components/effects/LandingPage'
import ShortcutModal from '../components/common/ShortcutModal'
import KeyboardHint from '../components/common/KeyboardHint'
import { personalData } from '../data/portfolioData'

export default function Home() {
  const [hasEntered, setHasEntered] = useState(() => {
    // Read session storage to skip landing page on refresh
    return sessionStorage.getItem('hasEnteredPortfolio') === 'true'
  })
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false)
  const [isBlogToastOpen, setIsBlogToastOpen] = useState(false)
  const navigate = useNavigate()

  const handleEnter = () => {
    sessionStorage.setItem('hasEnteredPortfolio', 'true')
    setHasEntered(true)
  }

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Listen to keyboard commands
  useEffect(() => {
    if (!hasEntered) return

    const handleKeyDown = (e) => {
      // Avoid firing when writing text in inputs
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : ''
      if (activeTag === 'input' || activeTag === 'textarea' || document.activeElement.isContentEditable) {
        return
      }

      const key = e.key.toUpperCase()

      // Numbers
      switch (e.key) {
        case '1':
          e.preventDefault()
          scrollToSection('about')
          break
        case '2':
          e.preventDefault()
          scrollToSection('skills')
          break
        case '3':
          e.preventDefault()
          scrollToSection('experience')
          break
        case '4':
          e.preventDefault()
          scrollToSection('projects')
          break
        case '5':
          e.preventDefault()
          scrollToSection('certificates')
          break
        case '6':
          e.preventDefault()
          scrollToSection('achievements')
          break
        case '7':
          e.preventDefault()
          navigate('/resume')
          break
        case '8':
          e.preventDefault()
          scrollToSection('contact')
          break
        case '9':
          e.preventDefault()
          setIsBlogToastOpen(true)
          break
        case '0':
          e.preventDefault()
          scrollToSection('hero')
          break
        default:
          break
      }

      // Action Keys
      switch (key) {
        case 'H':
          e.preventDefault()
          scrollToSection('hero')
          break
        case 'P':
          e.preventDefault()
          scrollToSection('projects')
          break
        case 'C':
          e.preventDefault()
          scrollToSection('contact')
          break
        case 'R':
          e.preventDefault()
          navigate('/resume')
          break
        case 'G':
          e.preventDefault()
          window.open(personalData.github, '_blank', 'noopener,noreferrer')
          break
        case 'L':
          e.preventDefault()
          window.open(personalData.linkedin, '_blank', 'noopener,noreferrer')
          break
        case '?':
          e.preventDefault()
          setIsShortcutsOpen((prev) => !prev)
          break
        case 'ESCAPE':
          e.preventDefault()
          setIsShortcutsOpen(false)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [hasEntered, navigate])

  // Timer to dismiss blog toast
  useEffect(() => {
    if (isBlogToastOpen) {
      const timer = setTimeout(() => {
        setIsBlogToastOpen(false)
      }, 3500)
      return () => clearTimeout(timer)
    }
  }, [isBlogToastOpen])

  return (
    <AnimatePresence mode="wait">
      {!hasEntered ? (
        <LandingPage key="landing" onEnter={handleEnter} />
      ) : (
        <motion.div
          key="portfolio"
          initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative min-h-screen flex flex-col bg-[#08060d]"
        >
          <CursorGlow />
          
          <Navbar onOpenShortcuts={() => setIsShortcutsOpen(true)} />
          
          <main className="flex-grow">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <Certificates />
            <Contact />
          </main>
          
          <Footer />

          {/* Floaters and commands */}
          <KeyboardHint />
          <ShortcutModal isOpen={isShortcutsOpen} onClose={() => setIsShortcutsOpen(false)} />

          {/* Toast Notification Alert */}
          <AnimatePresence>
            {isBlogToastOpen && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="fixed bottom-6 left-6 z-50 glass border border-purple-500/25 px-5 py-3.5 rounded-xl shadow-2xl backdrop-blur-md max-w-sm pointer-events-none"
              >
                <h4 className="text-sm font-bold text-white mb-0.5 font-display">Developer Blog</h4>
                <p className="text-xs text-purple-300 font-light leading-relaxed">
                  Launching soon in Q3 2026. Stay tuned for developer insights and tech updates!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
