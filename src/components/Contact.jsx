import { useApp } from '../context/AppContext'
import { t } from '../data/i18n'
import { profile, cvFiles } from '../data/portfolio'

const links = [
  { key: 'github', url: profile.github, value: profile.handle },
  { key: 'linkedin', url: profile.linkedin, value: `in/${profile.handle}` },
]

const content = {
  en: { cvTitle: 'download --cv' },
  es: { cvTitle: 'descargar --cv' },
}

export default function Contact() {
  const { language } = useApp()
  const txt = t[language].contact
  const ctx = content[language]

  return (
    <section id="contact" className="mb-16">

      <h2 className="font-mono text-text-secondary text-xs mb-4">
        <span className="text-accent">{'>'}</span> {txt.command}
      </h2>

      <div className="bg-surface border border-border rounded-lg p-5 mb-4">
        <div className="space-y-3">
          {links.map((link) => (
            <div key={link.key} className="flex items-center gap-4">
              <span className="font-mono text-text-secondary text-sm w-20">
                {txt.links[link.key]}
              </span>
              <span className="font-mono text-text-secondary text-sm">→</span>
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

      {/* CV Downloads */}
      <h2 className="font-mono text-text-secondary text-xs mb-4">
        <span className="text-accent">{'>'}</span> {ctx.cvTitle}
      </h2>

      <div className="bg-surface border border-border rounded-lg p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cvFiles.map((cv) => (
            <a
              key={cv.file}
              href={cv.file}
              download
              className="flex items-center gap-3 font-mono text-xs text-text-secondary border border-border px-3 py-2 rounded hover:text-accent hover:border-accent transition-colors"
            >
              <span className="text-accent">↓</span>
              {cv.label}
            </a>
          ))}
        </div>
      </div>

    </section>
  )
}