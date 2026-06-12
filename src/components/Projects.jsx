import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { t } from '../data/i18n'
import { projects } from '../data/portfolio'

const statusColor = {
  active: 'text-accent',
  wip: 'text-yellow-500',
  archived: 'text-text-secondary',
}

export default function Projects() {
  const { language } = useApp()
  const txt = t[language].projects
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="mb-16">

      <h2 className="font-mono text-text-secondary text-xs mb-4">
        <span className="text-accent">{'>'}</span> {txt.command}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-surface border border-border rounded-lg p-5 hover:border-accent transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-2">
                <span className="font-mono text-text-primary text-sm font-bold">
                  {project.name}
                </span>
                <span className={`font-mono text-xs ${statusColor[project.status]}`}>
                  ● {txt.status[project.status]}
                </span>
              </div>

              <p className="font-mono text-text-secondary text-xs mb-3">
                {project.date}
              </p>

              <p className="font-sans text-text-secondary text-sm mb-4">
                {language === 'es' && project.es ? project.es.description : project.description}
                </p>

              <div className="flex gap-2 flex-wrap mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-accent bg-base border border-border px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-2">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-text-secondary hover:text-accent transition-colors"
              >
                {txt.repo}
              </a>
              <button
                onClick={() => setSelected(project)}
                className="font-mono text-xs text-accent border border-accent px-3 py-1 rounded hover:bg-accent hover:text-base transition-colors"
              >
                {txt.viewDetails}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-base/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-surface border border-border rounded-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <span className="font-mono text-accent text-sm font-bold">{selected.name}</span>
              <button
                onClick={() => setSelected(null)}
                className="font-mono text-text-secondary text-xs hover:text-text-primary transition-colors"
              >
                {txt.close}
              </button>
            </div>

            {[
              { label: txt.sections.overview, content: language === 'es' && selected.es ? selected.es.longDescription : selected.longDescription },
              { label: txt.sections.problem, content: language === 'es' && selected.es ? selected.es.problem : selected.problem },
              { label: txt.sections.solution, content: language === 'es' && selected.es ? selected.es.solution : selected.solution },
              { label: txt.sections.challenges, content: language === 'es' && selected.es ? selected.es.challenges : selected.challenges },
              { label: txt.sections.lessons, content: language === 'es' && selected.es ? selected.es.lessons : selected.lessons },
            ].map(({ label, content }) => (
              <div key={label} className="mb-5">
                <p className="font-mono text-accent text-xs mb-1">{'>'} {label}</p>
                <p className="font-sans text-text-primary text-sm leading-relaxed pl-3">
                  {content}
                </p>
              </div>
            ))}

            <div className="mb-5">
              <p className="font-mono text-accent text-xs mb-1">{'>'} {txt.sections.features}</p>
              <ul className="pl-3 space-y-1">
                {(language === 'es' && selected.es ? selected.es.features : selected.features).map((f, i) => (
                  <li key={i} className="font-sans text-text-primary text-sm">
                    <span className="font-mono text-accent mr-2">-</span>{f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <p className="font-mono text-accent text-xs mb-2">{'>'} {txt.sections.stack}</p>
              <div className="flex gap-2 flex-wrap pl-3">
                {selected.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs text-accent bg-base border border-border px-2 py-0.5 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <a
                href={selected.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-accent hover:underline"
              >
                {txt.sections.repo}
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}