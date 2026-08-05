import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, Brain, GraduationCap, Code } from 'lucide-react'
import { personalData, educationData } from '../../data/portfolioData'
import Particles from '../effects/Particles'
import FloatingShapes from '../effects/FloatingShapes'
import Button from '../common/Button'
import SocialIcons from '../common/SocialIcons'
import profileImg from '../../assets/images/profile.png'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-28 pb-16">
      {/* Background canvas particles and aurora gradient */}
      <div className="absolute inset-0 bg-[#08060d] z-0">
        <Particles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-accent-bg)_0%,_transparent_70%)] opacity-70"></div>
      </div>
      
      {/* Floating 3D-like shapes */}
      <FloatingShapes />

      <div className="max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full relative">
        
        {/* Left Column - Intro text and actions */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-last lg:order-first">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 py-1.5 px-4 rounded-full border border-[var(--color-accent-border)] bg-[#0d0b14]/65 backdrop-blur-md text-xs font-semibold text-accent tracking-wide uppercase inline-flex items-center gap-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></span>
            Available for Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
          >
            {personalData.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium tracking-wide mb-3"
          >
            <span className="text-gradient-accent">{personalData.title}</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#c084fc]/80 uppercase mb-8"
          >
            {personalData.tagline}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mb-10 leading-relaxed font-light"
          >
            {personalData.about}
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto"
          >
            <a href="#projects" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto">
                View My Work
              </Button>
            </a>
            <Link to="/resume" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto">
                My Resume <ArrowUpRight className="w-4.5 h-4.5" />
              </Button>
            </Link>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <SocialIcons />
          </motion.div>
        </div>

        {/* Right Column - Profile picture card */}
        <div className="lg:col-span-5 flex justify-center items-center relative order-first lg:order-last py-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[340px] md:max-w-[380px] aspect-[4/5] rounded-3xl p-3 bg-[#0d0b14]/80 backdrop-blur-xl shadow-2xl shadow-accent/5 border border-accent/15"
          >
            {/* Main Image */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative border border-accent/10 bg-[#08060d]">
              <img
                src={profileImg}
                alt={personalData.name}
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
              />
              {/* Overlay glow and smooth bottom fade matching theme background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b14]/90 via-[#0d0b14]/20 to-transparent opacity-70"></div>
            </div>

            {/* Floating Badges */}
            {/* Badge 1: CGPA */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -left-6 glass px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-lg border border-accent/20"
            >
              <div className="p-1.5 rounded-lg bg-accent/20 text-accent">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">CGPA {educationData[0].cgpa}</p>
                <p className="text-[11px] font-extrabold text-white">VNR VJIET</p>
              </div>
            </motion.div>

            {/* Badge 2: AI / ML Enthusiast */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute top-[40%] -right-8 glass px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-lg border border-accent/20"
            >
              <div className="p-1.5 rounded-lg bg-accent/20 text-accent">
                <Brain className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-extrabold text-white">AI / ML</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Enthusiast</p>
              </div>
            </motion.div>

            {/* Badge 3: 15+ Tech Stack */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -bottom-4 right-4 glass px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-lg border border-accent/20"
            >
              <div className="p-1.5 rounded-lg bg-accent/20 text-accent">
                <Code className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-extrabold text-white">15+ Tech</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Stack mastered</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated scroll down button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.a
            href="#about"
            whileHover={{ y: 3 }}
            className="flex flex-col items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors duration-300"
          >
            Scroll Down
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="p-2 rounded-full border border-gray-800 bg-[#0d0b14]/40"
            >
              <ArrowDown className="w-4 h-4 text-accent" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
