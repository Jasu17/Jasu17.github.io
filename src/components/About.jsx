import { profile } from '../data/portfolio'

const lines = [
  "Systems Engineering student with a focus on cybersecurity and backend development.",
  "Regular Linux user — most of my tools are built for and tested on Linux environments.",
  "I gravitate toward CLI tooling, security automation, and understanding how systems work at a low level.",
  "Currently building practical projects that solve real security and analysis problems.",
]

export default function About() {
  return (
    <section id="about" className="mb-16">

      <h2 className="font-mono text-text-secondary text-xs mb-4">
        <span className="text-accent">{'>'}</span> cat about.txt
      </h2>

      <div className="bg-surface border border-border rounded-lg p-5">
        <div className="space-y-3">
          {lines.map((line, i) => (
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