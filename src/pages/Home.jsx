import Navbar from '../components/layout/Navbar'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Experience from '../components/experience/Experience'
import Projects from '../components/projects/Projects'
import Achievements from '../components/achievements/Achievements'
import Certificates from '../components/certificates/Certificates'
import Contact from '../components/contact/Contact'
import Footer from '../components/layout/Footer'
import CursorGlow from '../components/effects/CursorGlow'

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#08060d]">
      {/* Premium cursor spotlight tracker */}
      <CursorGlow />
      
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
