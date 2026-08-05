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
      className="glass glass-hover rounded-2xl p-6 glow-card flex flex-col justify-between h-full"
    >
      <div>
        {/* Header Icon & Links */}
        <div className="flex justify-between items-center mb-6">
          <div className="p-3 rounded-xl bg-accent-bg border border-[var(--color-accent-border)] w-fit text-accent">
            <FolderGit2 className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Code"
                className="text-gray-400 hover:text-accent p-1.5 transition-colors duration-300"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="text-gray-400 hover:text-accent p-1.5 transition-colors duration-300"
              >
                <ExternalLink className="w-5 h-5" />
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
