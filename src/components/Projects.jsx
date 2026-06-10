import { projects } from '../data/portfolio'

const statusColor = {
  active: 'text-accent',
  wip: 'text-yellow-500',
  archived: 'text-text-secondary',
}

export default function Projects() {
  return (
    <section id="projects" className="mb-16">

      <h2 className="font-mono text-text-secondary text-xs mb-4">
        <span className="text-accent">{'>'}</span> ls ./projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-surface border border-border rounded-lg p-5 hover:border-accent transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <span className="font-mono text-text-primary text-sm font-bold">
                {project.name}
              </span>
              <span className={`font-mono text-xs ${statusColor[project.status]}`}>
                ● {project.status}
              </span>
            </div>

            <p className="font-sans text-text-secondary text-sm mb-4">
              {project.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-accent bg-base border border-border px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-text-secondary hover:text-accent transition-colors"
              >
                repo →
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}