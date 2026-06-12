import { useApp } from '../context/AppContext'
import { t } from '../data/i18n'
import { timeline } from '../data/portfolio'

export default function Timeline() {
  const { language } = useApp()
  const txt = t[language].timeline

  return (
    <section id="timeline" className="mb-16">

      <h2 className="font-mono text-text-secondary text-xs mb-4">
        <span className="text-accent">{'>'}</span> {txt.command}
      </h2>

      <div className="bg-surface border border-border rounded-lg p-5 font-mono text-sm">
        <div className="relative">

          <div className="absolute left-[4.75rem] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {timeline.map((block) => (
              <div key={block.year} className="relative flex gap-6">

                <div className="w-16 shrink-0 text-right">
                  <span className="text-accent text-xs">{block.year}</span>
                </div>

                <div className="absolute left-[4.75rem] top-1 w-2 h-2 rounded-full bg-accent -translate-x-1/2" />

                <ul className="pl-4 space-y-2">
                  {block.events[language].map((event, i) => (
                    <li key={i} className="text-text-primary text-xs flex gap-2">
                      <span className="text-text-secondary">—</span>
                      {event}
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}