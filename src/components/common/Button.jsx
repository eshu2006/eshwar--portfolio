import { motion } from 'framer-motion'

export default function Button({ children, onClick, className = '', variant = 'primary', ...props }) {
  const baseStyle = 'px-6 py-3 rounded-xl font-medium tracking-wide transition-colors duration-300 cursor-pointer focus:outline-none flex items-center justify-center gap-2 text-sm md:text-base'
  
  const variants = {
    primary: 'bg-accent text-[#08060d] hover:bg-[#b07dfb] font-semibold shadow-lg shadow-accent/20',
    secondary: 'border border-[var(--color-accent-border)] text-[#f3f4f6] hover:bg-accent-bg backdrop-blur-sm',
    outline: 'border border-gray-700 text-gray-300 hover:border-accent hover:text-white',
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
