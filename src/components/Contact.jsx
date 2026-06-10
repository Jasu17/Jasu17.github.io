import { profile } from '../data/portfolio'

const links = [
  { label: 'github', url: profile.github, value: profile.handle },
  { label: 'linkedin', url: profile.linkedin, value: `in/${profile.handle}` },
]

export default function Contact() {
  return (
    <section id="contact" className="mb-16">

      <h2 className="font-mono text-text-secondary text-xs mb-4">
        <span className="text-accent">{'>'}</span> contact --list
      </h2>

      <div className="bg-surface border border-border rounded-lg p-5">
        <div className="space-y-3">
          {links.map((link) => (
            <div key={link.label} className="flex items-center gap-4">
              <span className="font-mono text-text-secondary text-sm w-20">
                {link.label}
              </span>
              <span className="text-border font-mono text-sm">→</span>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-accent text-sm hover:underline"
              >
                {link.value}
              </a>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}