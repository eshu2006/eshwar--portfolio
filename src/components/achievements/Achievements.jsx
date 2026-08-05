import SectionTitle from '../common/SectionTitle'
import Card from '../common/Card'
import { achievementsData } from '../../data/portfolioData'
import { Trophy, Compass, Star, ArrowUpRight } from 'lucide-react'

export default function Achievements() {
  const getIcon = (id) => {
    switch (id) {
      case 1:
        return <Trophy className="w-6 h-6 text-accent" />
      case 2:
        return <Compass className="w-6 h-6 text-accent" />
      case 3:
        return <Star className="w-6 h-6 text-accent" />
      default:
        return <Trophy className="w-6 h-6 text-accent" />
    }
  }

  return (
    <section id="achievements" className="py-24 px-6 relative z-10 border-b border-[var(--color-accent-border)] bg-[#08060d]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Honours & Awards" 
          subtitle="Recognition, coding challenges, and hackathon participation." 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {achievementsData.map((ach, idx) => (
            <Card key={ach.id} delay={idx * 0.1} className="flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-accent-bg border border-[var(--color-accent-border)] w-fit mb-6 text-accent">
                  {getIcon(ach.id)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {ach.title}
                </h3>
                <p className="text-sm font-semibold text-accent mb-4">
                  {ach.org}
                </p>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {ach.link && (
                <div className="pt-4 border-t border-[var(--color-accent-border)] mt-6">
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    View Certificate <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
