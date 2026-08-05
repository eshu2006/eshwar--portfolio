import SectionTitle from '../common/SectionTitle'
import Card from '../common/Card'
import { certificatesData } from '../../data/portfolioData'
import { Award, CheckCircle, ArrowUpRight } from 'lucide-react'

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 relative z-10 border-b border-[var(--color-accent-border)] bg-[#08060d]/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Certifications" 
          subtitle="My professional credentials and certified skillsets." 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {certificatesData.map((cert, idx) => (
            <Card key={cert.id} delay={idx * 0.1} className="flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-accent-bg border border-[var(--color-accent-border)] text-accent">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-accent bg-accent-bg border border-accent/25 px-2.5 py-1 rounded-md">
                    Verified
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-accent mb-4">
                  {cert.issuer}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[var(--color-accent-border)] mt-6">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Certificate Active</span>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    View Certificate <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
