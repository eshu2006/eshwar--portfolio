import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { skillsData } from '../../data/portfolioData'
import { 
  FaCode, 
  FaJs, 
  FaPython, 
  FaJava, 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaBootstrap, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
} from 'react-icons/fa'
import { 
  SiCplusplus, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiPostman
} from 'react-icons/si'
import { 
  Cpu, 
  Brain, 
  Zap, 
  Blocks, 
  Binary, 
  Database as DbIcon, 
  Monitor, 
  Network,
  Code,
  ArrowDown,
  BarChart
} from 'lucide-react'

// Mapping tools to appropriate icons
const getSkillIcon = (name) => {
  switch (name) {
    case 'C':
      return <FaCode className="w-5 h-5" />
    case 'JavaScript':
      return <FaJs className="w-5 h-5" />
    case 'Python':
      return <FaPython className="w-5 h-5" />
    case 'Java':
      return <FaJava className="w-5 h-5" />
    case 'C++':
      return <SiCplusplus className="w-5 h-5" />
    case 'HTML':
      return <FaHtml5 className="w-5 h-5" />
    case 'CSS':
      return <FaCss3Alt className="w-5 h-5" />
    case 'React JS':
      return <FaReact className="w-5 h-5" />
    case 'Bootstrap':
      return <FaBootstrap className="w-5 h-5" />
    case 'Express.js':
      return <SiExpress className="w-5 h-5" />
    case 'Node.js':
      return <FaNodeJs className="w-5 h-5" />
    case 'LangChain':
      return <Cpu className="w-5 h-5" />
    case 'MySQL':
      return <SiMysql className="w-5 h-5" />
    case 'MongoDB':
      return <SiMongodb className="w-5 h-5" />
    case 'Git':
      return <FaGitAlt className="w-5 h-5" />
    case 'GitHub Copilot':
      return <FaGithub className="w-5 h-5" />
    case 'Postman':
      return <SiPostman className="w-5 h-5" />
    case 'Power BI':
      return <BarChart className="w-5 h-5" />
    case 'Claude':
      return <Brain className="w-5 h-5" />
    case 'Antigravity':
      return <Zap className="w-5 h-5" />
    case 'OOPS':
      return <Blocks className="w-5 h-5" />
    case 'DSA':
      return <Binary className="w-5 h-5" />
    case 'DBMS':
      return <DbIcon className="w-5 h-5" />
    case 'Operating Systems':
      return <Monitor className="w-5 h-5" />
    case 'Computer Networks':
      return <Network className="w-5 h-5" />
    default:
      return <Code className="w-5 h-5" />
  }
}

export default function Skills() {
  const targetRef = useRef(null)
  const scrollRef = useRef(null)
  const [xTranslation, setXTranslation] = useState(0)

  // Calculate dynamic scroll distance based on width
  useEffect(() => {
    const calculateTranslation = () => {
      if (scrollRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth
        const parentWidth = scrollRef.current.parentElement ? scrollRef.current.parentElement.clientWidth : window.innerWidth
        // We translate by the remaining scrollable width
        const translation = -(scrollWidth - parentWidth)
        setXTranslation(translation < 0 ? translation : 0)
      }
    }

    calculateTranslation()
    
    // Recalculate on resize
    window.addEventListener('resize', calculateTranslation)
    
    // Small delay to ensure styles/content are fully rendered before measuring
    const timer = setTimeout(calculateTranslation, 100)
    
    return () => {
      window.removeEventListener('resize', calculateTranslation)
      clearTimeout(timer)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })

  // Smooth translation mapped to vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], [0, xTranslation])

  // Count total tools and domains
  const totalTools = skillsData.reduce((acc, curr) => acc + curr.items.length, 0)
  const totalDomains = skillsData.length

  return (
    <section 
      ref={targetRef} 
      id="skills" 
      className="relative h-[300vh] bg-[#08060d] border-b border-[var(--color-accent-border)]"
    >
      {/* Sticky container that keeps the section in viewport during horizontal scroll */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-12 px-6 md:px-12">
        
        {/* Header container */}
        <div className="max-w-6xl w-full mx-auto flex justify-between items-end mb-8 relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2">
              Skills
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-light">
              {totalTools} tools, {totalDomains} domains
            </p>
          </div>
          
          {/* Scroll Direction Guide */}
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            <span>Scroll</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </div>

        {/* Horizontal scroll window */}
        <div className="w-full max-w-6xl mx-auto overflow-visible relative z-10">
          <motion.div 
            ref={scrollRef}
            style={{ x }} 
            className="flex gap-6 w-max pb-8"
          >
            {skillsData.map((domain, idx) => {
              const cardNumber = String(idx + 1).padStart(2, '0')
              return (
                <div 
                  key={idx}
                  className="w-[85vw] sm:w-[26rem] h-[28rem] rounded-2xl p-8 flex flex-col justify-between relative bg-[#0c0a12] border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.02)] transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] group"
                >
                  <div>
                    {/* Top index & tool count */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-emerald-400/80 font-mono text-sm tracking-widest font-bold">
                        {cardNumber}
                      </span>
                      <div className="h-px bg-emerald-500/20 flex-grow mx-4" />
                      <span className="text-gray-500 text-xs font-mono tracking-wider uppercase font-medium">
                        {domain.items.length} Tools
                      </span>
                    </div>

                    {/* Category Title */}
                    <h3 className="text-2xl font-bold text-white mb-8 tracking-wide group-hover:text-emerald-400 transition-colors duration-300">
                      {domain.category}
                    </h3>

                    {/* Two-column tools list */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                      {domain.items.map((tool, tIdx) => (
                        <div 
                          key={tIdx} 
                          className="flex items-center gap-3 group/item"
                        >
                          <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-neutral-900 border border-emerald-500/10 text-emerald-400 group-hover/item:border-emerald-400 group-hover/item:bg-emerald-500/5 transition-all duration-300">
                            {getSkillIcon(tool)}
                          </div>
                          <span className="text-sm font-medium text-gray-300 group-hover/item:text-white transition-colors duration-200 truncate">
                            {tool}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card bottom accents */}
                  <div className="flex items-center justify-between pt-6 border-t border-emerald-500/10 mt-auto">
                    {/* Emerald green bar */}
                    <div className="w-12 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    
                    {/* Category code */}
                    <span className="text-[10px] font-mono tracking-widest text-gray-600 font-bold uppercase">
                      {domain.code}
                    </span>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* Scroll Progress Bar at the bottom */}
        <div className="max-w-6xl w-full mx-auto mt-6 relative h-[2px] bg-emerald-500/10 rounded-full overflow-hidden">
          <motion.div 
            style={{ scaleX: scrollYProgress, originX: 0 }}
            className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
          />
        </div>

      </div>
    </section>
  )
}
