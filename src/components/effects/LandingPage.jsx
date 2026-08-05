import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function LandingPage({ onEnter }) {
  const canvasRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isExiting, setIsExiting] = useState(false)

  // Track mouse coordinates for dynamic radial spotlight glow
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  // Draw floating particles on Canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    
    const particles = []
    const particleCount = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 20000))
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.4 + 0.2
      })
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY
        
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(192, 132, 252, ${p.alpha})`
        ctx.fill()
      })
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()
    
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Listen for Enter keyboard shortcut keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        triggerEnter()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const triggerEnter = () => {
    setIsExiting(true)
    setTimeout(() => {
      onEnter()
    }, 850) // Wait for transition fade & blur overlay to play out
  }

  // Cursive Explorer text reveal configs
  const explorerWord = "Explorer."
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        staggerChildren: 0.08,
      }
    }
  }
  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 10, stiffness: 100 }
    }
  }

  return (
    <div 
      onMouseMove={handleMouseMove}
      className={`fixed inset-0 w-screen h-screen overflow-hidden bg-aurora flex items-center justify-center z-50 transition-all duration-700 ease-in-out ${
        isExiting ? 'opacity-0 scale-105 blur-2xl pointer-events-none' : 'opacity-100 scale-100 blur-none'
      }`}
    >
      {/* Spotlight glow tracker */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-60 md:opacity-80"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(192, 132, 252, 0.07), transparent 80%)`
        }}
      />

      {/* Floating Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Landing Center Panel */}
      <div className="relative text-center px-6 max-w-xl z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass border border-accent-border/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle card reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-accent/5 pointer-events-none" />

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-black tracking-widest text-white uppercase select-none">
            WELCOME,
          </h2>

          {/* Handwritten Explorer signature logo */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="my-3 py-1"
          >
            <motion.h1 
              variants={sentenceVariants} 
              initial="hidden" 
              animate="visible" 
              className="text-6xl md:text-8xl font-cursive text-gradient-accent drop-shadow-[0_0_12px_rgba(192,132,252,0.45)] select-none"
            >
              {explorerWord.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {/* Text Description */}
          <p className="text-xs md:text-sm text-gray-400 font-light max-w-sm mx-auto leading-relaxed select-none mb-8">
            Discover my world of design, development and innovation.
          </p>

          {/* Enter Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={triggerEnter}
            className="group relative px-8 py-3.5 rounded-full text-xs md:text-sm font-semibold text-white tracking-widest uppercase cursor-pointer border border-accent/40 bg-accent-bg/40 backdrop-blur-md transition-all duration-300 hover:border-accent hover:bg-accent/15 hover:shadow-[0_0_20px_rgba(192,132,252,0.25)] flex items-center gap-3.5 mx-auto"
          >
            <span>Enter Portfolio</span>
            <ArrowRight className="w-4 h-4 text-accent transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>

          {/* Enter key hint */}
          <div className="text-[10px] font-mono text-gray-600 mt-4 uppercase tracking-widest">
            or press <span className="border border-gray-800 bg-[#0d0a14] px-1.5 py-0.5 rounded text-gray-400">Enter</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
