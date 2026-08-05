import SectionTitle from '../common/SectionTitle'
import Card from '../common/Card'
import { educationData } from '../../data/portfolioData'
import { BookOpen, Calendar, MapPin, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10 border-b border-[var(--color-accent-border)] bg-[#08060d]/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="About Me" 
          subtitle="A passionate IT student combining full-stack application development with AI system orchestration." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mt-12">
          {/* Summary / Introduction card */}
          <Card className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-400 leading-relaxed font-light mb-4">
                I am currently pursuing a Bachelor of Technology in Information Technology at <strong>VNR Vignana Jyothi Institute of Engineering and Technology</strong>. I focus on developing clean, responsive interfaces and backing them with scalable server logic.
              </p>
              <p className="text-gray-400 leading-relaxed font-light">
                Lately, I've been diving deep into integrating AI technologies (like Large Language Models and AI orchestration tools) into production-ready platforms, finding the sweet spot where backend security and AI features meet.
              </p>
            </div>
          </Card>

          {/* Education Card */}
          <Card className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-accent" /> Education
              </h3>
              
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-lg font-semibold text-gray-200">{edu.degree}</h4>
                    <p className="text-sm text-accent font-medium">{edu.institution}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-accent-bg border border-[var(--color-accent-border)] inline-flex items-center gap-2 w-fit">
                    <span className="text-xs text-gray-300 font-medium">CGPA:</span>
                    <span className="text-sm font-bold text-accent">{edu.cgpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
