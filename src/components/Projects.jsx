import { useState } from 'react'
import { projects } from '../data/portfolio'

const statusLabel = {
  active: 'active',
  wip: 'in progress',
  archived: 'archived',
}

const statusColor = {
  active: 'text-accent',
  wip: 'text-yellow-500',
  archived: 'text-text-secondary',
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="mb-16">

      <h2 className="font-mono text-text-secondary text-xs mb-4">
        <span className="text-accent">{'>'}</span> ls ./projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-surface border border-border rounded-lg p-5 hover:border-accent transition-colors flex flex-col justify-between"
          >
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <span className="font-mono text-text-primary text-sm font-bold">
                  {project.name}
                </span>
                <span className={`font-mono text-xs ${statusColor[project.status]}`}>
                  ● {statusLabel[project.status]}
                </span>
              </div>

              <p className="font-mono text-text-secondary text-xs mb-3">
                {project.date}
              </p>

              <p className="font-sans text-text-secondary text-sm mb-4">
                {project.description}
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

            {/* Footer */}
            <div className="flex items-center justify-between mt-2">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-text-secondary hover:text-accent transition-colors"
              >
                repo →
              </a>
              <button
                onClick={() => setSelected(project)}
                className="font-mono text-xs text-accent border border-accent px-3 py-1 rounded hover:bg-accent hover:text-base transition-colors"
              >
                view details
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
            {/* Modal header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <span className="font-mono text-accent text-sm font-bold">{selected.name}</span>
              <button
                onClick={() => setSelected(null)}
                className="font-mono text-text-secondary text-xs hover:text-text-primary transition-colors"
              >
                ✕ close
              </button>
            </div>

            {/* Sections */}
            {[
              { label: 'overview', content: selected.longDescription },
              { label: 'problem', content: selected.problem },
              { label: 'solution', content: selected.solution },
              { label: 'challenges', content: selected.challenges },
              { label: 'lessons learned', content: selected.lessons },
            ].map(({ label, content }) => (
              <div key={label} className="mb-5">
                <p className="font-mono text-accent text-xs mb-1">{'>'} {label}</p>
                <p className="font-sans text-text-primary text-sm leading-relaxed pl-3">
                  {content}
                </p>
              </div>
            ))}

            {/* Features */}
            <div className="mb-5">
              <p className="font-mono text-accent text-xs mb-1">{'>'} features</p>
              <ul className="pl-3 space-y-1">
                {selected.features.map((f, i) => (
                  <li key={i} className="font-sans text-text-primary text-sm">
                    <span className="font-mono text-accent mr-2">-</span>{f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div className="mb-6">
              <p className="font-mono text-accent text-xs mb-2">{'>'} stack</p>
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

            {/* Repo link */}
            <div className="pt-4 border-t border-border">
              <a
                href={selected.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-accent hover:underline"
              >
                → view repository on GitHub
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}