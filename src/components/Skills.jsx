import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="mb-16">

      <h2 className="font-mono text-text-secondary text-xs mb-4">
        <span className="text-accent">{'>'}</span> cat skills.json
      </h2>

      <div className="bg-surface border border-border rounded-lg p-5 font-mono text-sm">
        <p className="text-border mb-4">{'{'}</p>

        {skills.map((group, i) => (
          <div key={group.category} className="mb-3 pl-4">
            <span className="text-accent">"{group.category}"</span>
            <span className="text-text-secondary">: [</span>
            <div className="pl-4 mt-1 flex flex-wrap gap-2">
              {group.items.map((item, j) => (
                <span key={item} className="text-text-primary">
                  "{item}"{j < group.items.length - 1 ? ',' : ''}
                </span>
              ))}
            </div>
            <span className="text-text-secondary">]{i < skills.length - 1 ? ',' : ''}</span>
          </div>
        ))}

        <p className="text-border mt-2">{'}'}</p>
      </div>

    </section>
  )
}