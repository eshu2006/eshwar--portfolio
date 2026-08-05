import { motion } from 'framer-motion'

export default function SectionTitle({ title, subtitle, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-16 text-center ${className}`}
    >
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 relative inline-block">
        <span className="text-gradient-purple">{title}</span>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-gradient-to-r from-accent to-purple-600"></div>
      </h2>
      {subtitle && (
        <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto mt-4 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
