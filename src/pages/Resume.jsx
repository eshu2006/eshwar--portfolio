import { Link } from 'react-router-dom'
import { ArrowLeft, Printer, Download, Mail, Phone, MapPin, Award, Briefcase, GraduationCap, Code } from 'lucide-react'
import { personalData, educationData, experienceData, skillsData, projectsData, certificatesData, achievementsData, volunteeringData } from '../data/portfolioData'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Button from '../components/common/Button'

export default function Resume() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-[#08060d] text-gray-300 py-12 px-4 sm:px-6 relative z-10 print:bg-white print:text-black print:p-0">
      
      {/* Top action bar - Hidden during print */}
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 print:hidden">
        <Link to="/">
          <Button variant="secondary" className="py-2 px-4 text-xs font-semibold">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Portfolio
          </Button>
        </Link>
        
        <div className="flex items-center gap-3">
          <Button onClick={handlePrint} variant="primary" className="py-2 px-4 text-xs font-semibold">
            <Printer className="w-4 h-4 mr-1" /> Print / Save PDF
          </Button>
        </div>
      </div>

      {/* Main Resume Container */}
      <div className="max-w-4xl mx-auto bg-[#0d0b20]/45 border border-[var(--color-accent-border)] rounded-2xl p-6 sm:p-12 shadow-2xl print:border-none print:shadow-none print:bg-white print:p-0">
        
        {/* Header Block */}
        <header className="text-center border-b border-gray-800 pb-8 mb-8 print:border-black print:pb-4 print:mb-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-wide print:text-black">
            {personalData.name}
          </h1>
          <p className="text-sm text-accent font-semibold tracking-wider uppercase mb-4 print:text-black">
            {personalData.title}
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-gray-400 print:text-black print:gap-x-3">
            <a href={`mailto:${personalData.email}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="w-4 h-4 text-accent print:text-black shrink-0" />
              <span>{personalData.email}</span>
            </a>
            <span className="hidden sm:inline text-gray-700">|</span>
            <a href={`tel:${personalData.phone}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="w-4 h-4 text-accent print:text-black shrink-0" />
              <span>{personalData.phone}</span>
            </a>
            <span className="hidden sm:inline text-gray-700">|</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-accent print:text-black shrink-0" />
              <span>{personalData.location}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400 mt-3 print:text-black">
            <a href={personalData.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-accent">
              <FaGithub className="w-4 h-4" /> Github
            </a>
            <span>•</span>
            <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-accent">
              <FaLinkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </header>

        {/* Resume Content Sections */}
        <div className="flex flex-col gap-8 print:gap-4">
          
          {/* Education */}
          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-2 mb-4 flex items-center gap-2 print:text-black print:border-black print:pb-1 print:mb-2">
              <GraduationCap className="w-5 h-5 text-accent print:text-black shrink-0" /> Education
            </h2>
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h3 className="text-base font-bold text-gray-200 print:text-black">{edu.institution}</h3>
                  <p className="text-sm text-gray-400 print:text-black">{edu.degree}</p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <p className="text-sm text-accent font-medium print:text-black">{edu.location}</p>
                  <p className="text-xs text-gray-400 print:text-black">{edu.period} • CGPA: {edu.cgpa}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-2 mb-4 flex items-center gap-2 print:text-black print:border-black print:pb-1 print:mb-2">
              <Briefcase className="w-5 h-5 text-accent print:text-black shrink-0" /> Experience
            </h2>
            {experienceData.map((exp) => (
              <div key={exp.id}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-3">
                  <div>
                    <h3 className="text-base font-bold text-gray-200 print:text-black">{exp.role}</h3>
                    <p className="text-xs text-accent font-semibold print:text-black">{exp.company}</p>
                  </div>
                  <p className="text-xs text-gray-400 print:text-black shrink-0">{exp.period}</p>
                </div>
                <ul className="list-disc pl-5 flex flex-col gap-1.5 text-sm text-gray-400 print:text-black leading-relaxed font-light">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-2 mb-4 flex items-center gap-2 print:text-black print:border-black print:pb-1 print:mb-2">
              <Code className="w-5 h-5 text-accent print:text-black shrink-0" /> Technical Skills
            </h2>
            <div className="flex flex-col gap-2">
              {skillsData.map((skillGroup, idx) => (
                <div key={idx} className="text-sm leading-relaxed">
                  <strong className="text-gray-300 print:text-black">{skillGroup.category}: </strong>
                  <span className="text-gray-400 print:text-black">{skillGroup.items.join(', ')}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-2 mb-4 flex items-center gap-2 print:text-black print:border-black print:pb-1 print:mb-2">
              <Briefcase className="w-5 h-5 text-accent print:text-black shrink-0" /> Projects
            </h2>
            <div className="flex flex-col gap-6 print:gap-3">
              {projectsData.map((project) => (
                <div key={project.id}>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-2">
                    <h3 className="text-base font-bold text-gray-200 print:text-black">{project.title}</h3>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-accent hover:underline flex items-center gap-1 print:text-black print:no-underline"
                      >
                        GitHub <FaGithub className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-accent font-medium mb-2 print:text-black">Tech Stack: {project.tech}</p>
                  <ul className="list-disc pl-5 flex flex-col gap-1.5 text-sm text-gray-400 print:text-black leading-relaxed font-light">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-2 mb-4 flex items-center gap-2 print:text-black print:border-black print:pb-1 print:mb-2">
              <Award className="w-5 h-5 text-accent print:text-black shrink-0" /> Certifications
            </h2>
            <ul className="list-disc pl-5 flex flex-col gap-1 text-sm text-gray-400 print:text-black">
              {certificatesData.map((cert) => (
                <li key={cert.id}>
                  <strong className="text-gray-300 print:text-black">{cert.title}</strong> – {cert.issuer}
                </li>
              ))}
            </ul>
          </section>

          {/* Honours & Awards */}
          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-2 mb-4 flex items-center gap-2 print:text-black print:border-black print:pb-1 print:mb-2">
              <Award className="w-5 h-5 text-accent print:text-black shrink-0" /> Honours & Awards
            </h2>
            <ul className="list-disc pl-5 flex flex-col gap-1 text-sm text-gray-400 print:text-black">
              {achievementsData.map((ach) => (
                <li key={ach.id}>
                  <strong className="text-gray-300 print:text-black">{ach.title}</strong> – {ach.org}
                </li>
              ))}
            </ul>
          </section>

          {/* Volunteering & Extracurriculars */}
          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-2 mb-4 flex items-center gap-2 print:text-black print:border-black print:pb-1 print:mb-2">
              <GraduationCap className="w-5 h-5 text-accent print:text-black shrink-0" /> Volunteering & Extracurriculars
            </h2>
            <ul className="list-disc pl-5 flex flex-col gap-1 text-sm text-gray-400 print:text-black">
              {volunteeringData.map((vol) => (
                <li key={vol.id}>
                  <strong className="text-gray-300 print:text-black">{vol.role}</strong> – {vol.org} {vol.description ? `(${vol.description})` : ''}
                </li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </div>
  )
}
