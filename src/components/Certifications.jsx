import { useApp } from "../context/AppContext"
import { certifications, learning } from "../data/portfolio"

const content = {
    en: {
        certCommand: 'ls /certifications',
        learnCommand: 'ls /learning',
        status: {active: 'Active', completed: 'Completed', inactive: 'Inactive'},
        empty: 'No certifications yet, work in progress.',
    },
    es: {
        certCommand: 'ls /certificaciones',
        learnCommand: 'ls /aprendizaje',
        status: {active: 'Activo', completed: 'Completado', inactive: 'Inactivo'},
        empty: 'Aún no hay certificaciones, en progreso.',
    }
}

export default function Certifications(){
    const { language } = useApp()
    const txt = content[language]
    return (
        <section id="certifications" className="mb-16">

      {/* Certifications */}
      <h2 className="font-mono text-text-secondary text-xs mb-4">
        <span className="text-accent">{'>'}</span> {txt.certCommand}
      </h2>

      <div className="bg-surface border border-border rounded-lg p-5 mb-6">
        {certifications.length === 0 ? (
          <p className="font-mono text-text-secondary text-xs">{txt.empty}</p>
        ) : (
          <div className="space-y-3">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex items-start justify-between gap-4">
                <div>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-text-primary text-sm hover:text-accent transition-colors"
                  >
                    {cert.name}
                  </a>
                  <p className="font-mono text-text-secondary text-xs mt-0.5">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
                <span className="font-mono text-accent text-xs shrink-0">● verified</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Learning platforms */}
      <h2 className="font-mono text-text-secondary text-xs mb-4">
        <span className="text-accent">{'>'}</span> {txt.learnCommand}
      </h2>

      <div className="bg-surface border border-border rounded-lg p-5">
        <div className="space-y-3">
          {learning.map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-4">
              <div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-text-primary text-sm hover:text-accent transition-colors"
                >
                  {item.name}
                </a>
                <p className="font-mono text-text-secondary text-xs mt-0.5">
                  {item.description}
                </p>
              </div>
              <span className={`font-mono text-xs shrink-0 ${
                item.status === 'active' ? 'text-accent' : 'text-text-secondary'
              }`}>
                - {txt.status[item.status]}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
    )
}