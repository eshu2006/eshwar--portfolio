import { motion, AnimatePresence } from 'framer-motion'
import { X, HelpCircle, User, Cpu, Briefcase, Award, FileText, Mail, BookOpen, Home, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function ShortcutModal({ isOpen, onClose }) {
  const sections = [
    { key: '1', name: 'About Section', icon: <User className="w-4 h-4 text-accent" /> },
    { key: '2', name: 'Skills Section', icon: <Cpu className="w-4 h-4 text-accent" /> },
    { key: '3', name: 'Experience Section', icon: <Briefcase className="w-4 h-4 text-accent" /> },
    { key: '4', name: 'Projects Section', icon: <Sparkles className="w-4 h-4 text-accent" /> },
    { key: '5', name: 'Certificates Section', icon: <Award className="w-4 h-4 text-accent" /> },
    { key: '6', name: 'Achievements Section', icon: <Award className="w-4 h-4 text-accent" /> },
    { key: '7', name: 'Resume Section / Page', icon: <FileText className="w-4 h-4 text-accent" /> },
    { key: '8', name: 'Contact Section', icon: <Mail className="w-4 h-4 text-accent" /> },
    { key: '9', name: 'Blog (Coming Soon)', icon: <BookOpen className="w-4 h-4 text-accent" /> },
    { key: '0', name: 'Back to Hero Top', icon: <Home className="w-4 h-4 text-accent" /> },
  ]

  const globals = [
    { key: 'H', name: 'Home/Hero', icon: <Home className="w-4 h-4 text-purple-400" /> },
    { key: 'P', name: 'Jump to Projects', icon: <Sparkles className="w-4 h-4 text-purple-400" /> },
    { key: 'C', name: 'Jump to Contact', icon: <Mail className="w-4 h-4 text-purple-400" /> },
    { key: 'R', name: 'View / Print Resume', icon: <FileText className="w-4 h-4 text-purple-400" /> },
    { key: 'G', name: 'Open GitHub Link', icon: <FaGithub className="w-4 h-4 text-purple-400" /> },
    { key: 'L', name: 'Open LinkedIn Link', icon: <FaLinkedin className="w-4 h-4 text-purple-400" /> },
    { key: '?', name: 'Toggle Shortcuts Modal', icon: <HelpCircle className="w-4 h-4 text-purple-400" /> },
    { key: 'Esc', name: 'Close Any Modal / Go Back', icon: <X className="w-4 h-4 text-purple-400" /> },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 w-screen h-screen flex items-center justify-center z-50 p-4">
          
          {/* Modal Backdrop overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#08060d]/80 backdrop-blur-md"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="w-full max-w-2xl bg-[#0c0a18]/95 border border-[var(--color-accent-border)] shadow-[0_0_50px_rgba(192,132,252,0.06)] rounded-2xl relative overflow-hidden z-10 flex flex-col p-6 md:p-8"
          >
            {/* Ambient accent lights */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full filter blur-[60px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-500/5 rounded-full filter blur-[60px] pointer-events-none" />

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[var(--color-accent-border)] pb-4 mb-6">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold text-white tracking-wide font-display">
                  Keyboard Workspace Shortcuts
                </h3>
              </div>
              <button 
                onClick={onClose}
                className="p-1 rounded-lg text-gray-500 hover:text-white hover:bg-neutral-900 border border-neutral-900 hover:border-[var(--color-accent-border)] transition-all duration-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: Sections vs Globals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm max-h-[60vh] overflow-y-auto pr-1">
              
              {/* Left Column: Number Navigations */}
              <div>
                <h4 className="text-xs font-mono font-bold tracking-widest text-accent uppercase mb-4">
                  Numeric Navigation
                </h4>
                
                <div className="flex flex-col gap-3">
                  {sections.map((item) => (
                    <div 
                      key={item.key}
                      className="flex items-center justify-between p-2.5 rounded-xl border border-neutral-900 bg-neutral-950/40 hover:border-accent/20 hover:bg-accent-bg transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span className="text-gray-300 group-hover:text-white font-medium">
                          {item.name}
                        </span>
                      </div>
                      <kbd className="px-2.5 py-1 rounded bg-[#161324] border border-accent/20 text-accent font-mono text-xs font-bold shadow-[0_2px_0_rgba(192,132,252,0.15)] group-hover:shadow-[0_2px_0_rgba(192,132,252,0.3)] transition-all">
                        {item.key}
                      </kbd>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Global Actions */}
              <div>
                <h4 className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase mb-4">
                  Global Bindings
                </h4>
                
                <div className="flex flex-col gap-3">
                  {globals.map((item) => (
                    <div 
                      key={item.key}
                      className="flex items-center justify-between p-2.5 rounded-xl border border-neutral-900 bg-neutral-950/40 hover:border-purple-500/20 hover:bg-purple-500/5 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span className="text-gray-300 group-hover:text-white font-medium">
                          {item.name}
                        </span>
                      </div>
                      <kbd className="px-2.5 py-1 rounded bg-[#161324] border border-purple-500/20 text-purple-400 font-mono text-xs font-bold shadow-[0_2px_0_rgba(192,132,252,0.15)] group-hover:shadow-[0_2px_0_rgba(192,132,252,0.3)] transition-all">
                        {item.key}
                      </kbd>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="border-t border-[var(--color-accent-border)] pt-4 mt-6 text-center text-xs text-gray-500 tracking-wider">
              Works globally. Ignored automatically inside input boxes.
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
