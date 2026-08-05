import SectionTitle from '../common/SectionTitle'
import ProjectCard from './ProjectCard'
import { projectsData } from '../../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative z-10 border-b border-[var(--color-accent-border)] bg-[#08060d]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="A selection of recent applications, AI interfaces, and machine learning platforms." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectsData.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
