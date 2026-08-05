import SectionTitle from '../common/SectionTitle'
import Card from '../common/Card'
import { skillsData } from '../../data/portfolioData'
import { Code, Server, Database, Terminal, Cpu } from 'lucide-react'

export default function Skills() {
  // Mapping categories to lucide icons
  const getIcon = (category) => {
    switch (category) {
      case 'Programming Languages':
        return <Code className="w-5 h-5 text-accent" />
      case 'Technologies':
        return <Server className="w-5 h-5 text-accent" />
      case 'Databases':
        return <Database className="w-5 h-5 text-accent" />
      case 'Other Tools':
        return <Terminal className="w-5 h-5 text-accent" />
      case 'Core Concepts':
        return <Cpu className="w-5 h-5 text-accent" />
      default:
        return <Code className="w-5 h-5 text-accent" />
    }
  }

  return (
    <section id="skills" className="py-24 px-6 relative z-10 border-b border-[var(--color-accent-border)] bg-[#08060d]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="My coding toolbelt and foundational computer science expertise." 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillsData.map((skillGroup, idx) => (
            <Card key={idx} delay={idx * 0.1} className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 border-b border-[var(--color-accent-border)] pb-4">
                  {getIcon(skillGroup.category)}
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 border border-[var(--color-accent-border)] bg-[#0d0b14]/40 hover:border-accent/40 hover:text-white transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
