import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLinktree } from 'react-icons/si'
import { personalData } from '../../data/portfolioData'
import { motion } from 'framer-motion'

export default function SocialIcons({ className = '' }) {
  const iconLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      url: personalData.github,
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      url: personalData.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: `mailto:${personalData.email}`,
      label: 'Email',
    },
    {
      icon: <SiLinktree className="w-5 h-5" />,
      url: personalData.linktree,
      label: 'Linktree',
    },
  ]

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {iconLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-xl border border-[var(--color-accent-border)] bg-[#0d0b14]/50 text-gray-400 hover:text-accent hover:border-accent/40 hover:bg-[#0d0b14] transition-colors duration-300"
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  )
}
