import SectionTitle from '../common/SectionTitle'
import Card from '../common/Card'
import { experienceData } from '../../data/portfolioData'
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative z-10 border-b border-[var(--color-accent-border)] bg-[#08060d]/50">
      <div className="max-w-4xl mx-auto">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional contributions and internship experiences." 
        />

        <div className="relative border-l border-gray-800 ml-4 md:ml-6 flex flex-col gap-12 mt-12">
          {experienceData.map((exp, idx) => (
            <div key={exp.id} className="relative pl-8 md:pl-10">
              {/* Timeline marker */}
              <div className="absolute -left-3 top-1.5 bg-[#08060d] p-1 border border-accent rounded-full z-10">
                <div className="h-4 w-4 bg-accent rounded-full animate-pulse"></div>
              </div>

              {/* Experience Card */}
              <Card delay={idx * 0.1}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4 border-b border-[var(--color-accent-border)] pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-accent" /> {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-accent mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400 bg-[#0d0b14]/50 border border-[var(--color-accent-border)] py-1.5 px-3 rounded-lg">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="flex flex-col gap-3 mt-4">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm md:text-base text-gray-400 font-light leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-accent/60 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
