import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import Button from '../components/common/Button'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#08060d] text-center px-6 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-9xl font-black tracking-widest text-white mb-4">
          404
        </h1>
        <div className="bg-accent text-[#08060d] px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-lg mb-8">
          Page Not Found
        </div>
        <p className="text-gray-400 text-base md:text-lg max-w-md mb-10 leading-relaxed font-light">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button variant="primary">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
          </Button>
        </Link>
      </div>
    </section>
  )
}
