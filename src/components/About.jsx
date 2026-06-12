import { useApp } from '../context/AppContext'
import { t } from '../data/i18n'

export default function About() {
  const { language } = useApp()
  const txt = t[language].about

  return (
    <section id="about" className="mb-16">

      <h2 className="font-mono text-text-secondary text-xs mb-4">
        <span className="text-accent">{'>'}</span> {txt.command}
      </h2>

      <div className="bg-surface border border-border rounded-lg p-5">
        <div className="space-y-3">
          {txt.lines.map((line, i) => (
            <p key={i} className="font-sans text-text-primary text-sm leading-relaxed">
              <span className="font-mono text-accent mr-2">//</span>
              {line}
            </p>
          ))}
        </div>
      </div>

    </section>
  )
}