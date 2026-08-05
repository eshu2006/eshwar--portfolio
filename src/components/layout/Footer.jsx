import SocialIcons from '../common/SocialIcons'
import { personalData } from '../../data/portfolioData'

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-[var(--color-accent-border)] bg-[#09070f] z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Designed & Built with React, Tailwind v4, & Framer Motion
          </p>
        </div>
        <SocialIcons />
      </div>
    </footer>
  )
}
