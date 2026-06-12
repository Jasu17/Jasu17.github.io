import { useApp } from '../context/AppContext'
import { t } from '../data/i18n'
import { skills } from '../data/portfolio'

function SkillBar({ level }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          className={`inline-block w-3 h-2 rounded-sm ${
            i < level ? 'bg-accent' : 'bg-border'
          }`}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  const { language } = useApp()
  const txt = t[language].skills

  return (
    <section id="skills" className="mb-16">

      <h2 className="font-mono text-text-secondary text-xs mb-4">
        <span className="text-accent">{'>'}</span> {txt.command}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((group) => (
          <div
            key={group.category}
            className="bg-surface border border-border rounded-lg p-5"
          >
            <p className="font-mono text-accent text-xs mb-4">
              # {group.category}
            </p>

            <div className="space-y-3">
              {group.items.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between gap-4">
                  <span className="font-mono text-text-primary text-sm w-32 shrink-0">
                    {skill.name}
                  </span>
                  <SkillBar level={skill.level} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}