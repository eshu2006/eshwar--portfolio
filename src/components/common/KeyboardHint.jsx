import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle } from 'lucide-react'

export default function KeyboardHint() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-45 glass border border-emerald-500/25 px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 backdrop-blur-md pointer-events-none select-none"
        >
          <div className="p-1 rounded bg-emerald-500/10 text-emerald-400">
            <HelpCircle className="w-4 h-4 animate-pulse" />
          </div>
          <p className="text-xs font-semibold text-gray-300">
            Press <kbd className="px-1.5 py-0.5 rounded bg-[#161324] border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold">?</kbd> to view keyboard shortcuts
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
