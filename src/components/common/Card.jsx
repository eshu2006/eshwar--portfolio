import { motion } from 'framer-motion'

export default function Card({ children, className = '', delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={`glass glass-hover rounded-2xl p-6 glow-card ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
