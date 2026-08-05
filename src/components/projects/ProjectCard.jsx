import { motion } from 'framer-motion'
import { ExternalLink, FolderGit2 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function ProjectCard({ project, index = 0 }) {
  // Convert tech stack comma string into individual array items
  const techList = project.tech.split(',').map((t) => t.trim())

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass glass-hover rounded-2xl p-6 glow-card flex flex-col justify-between h-full overflow-hidden group"
    >
      <div>
        {/* Project Cover Image */}
        {project.image && (
          <div className="relative -mx-6 -mt-6 mb-6 overflow-hidden h-48 border-b border-[var(--color-accent-border)]">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b14]/70 via-transparent to-transparent" />
          </div>
        )}

        {/* Header Icon & Links */}
        <div className="flex justify-between items-center mb-6">
          <div className="p-3 rounded-xl bg-accent-bg border border-[var(--color-accent-border)] w-fit text-accent">
            <FolderGit2 className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Code"
                className="text-xs font-semibold text-gray-400 hover:text-accent border border-neutral-900 hover:border-accent/30 bg-neutral-950/40 hover:bg-accent-bg px-3 py-1.5 rounded-xl transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Code</span>
                <FaGithub className="w-3.5 h-3.5" />
              </a>
            )}
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="text-xs font-semibold text-gray-400 hover:text-accent border border-neutral-900 hover:border-accent/30 bg-neutral-950/40 hover:bg-accent-bg px-3 py-1.5 rounded-xl transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Visit</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white mb-3 hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description Bullets */}
        <ul className="flex flex-col gap-2.5 mb-6 text-sm text-gray-400 font-light leading-relaxed">
          {project.bullets.map((bullet, idx) => (
            <li key={idx} className="relative pl-4">
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-accent/60"></span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[var(--color-accent-border)]">
        {techList.map((tech, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 rounded-md text-[10px] md:text-xs font-semibold text-accent bg-accent-bg border border-accent/15"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
