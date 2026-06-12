import { useApp } from '../context/AppContext'
import { t } from '../data/i18n'
import { profile } from '../data/portfolio'

export default function CurrentFocus() {
  const { language } = useApp()
  const txt = t[language].focus

  return (
    <section id="focus" className="mb-16">

      <h2 className="font-mono text-text-secondary text-xs mb-4">
        <span className="text-accent">{'>'}</span> {txt.command}
      </h2>

      <div className="bg-surface border border-border rounded-lg p-5 font-mono text-sm">
        <p className="text-text-secondary text-xs mb-4">
          {txt.comment}
        </p>

        <ul className="space-y-2">
          {profile.currentFocus.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="text-accent">→</span>
              <span className="text-text-primary">{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}