import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

const navItems = [
  { id: 'whoami', label: 'whoami' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'contact', label: 'contact' },
]

export default function Sidebar() {
  const [active, setActive] = useState('whoami')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observers = navItems.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach((o) => o && o.disconnect())
  }, [])

  return (
    <>
      {/* Botón hamburguesa — solo móvil */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="md:hidden fixed top-4 left-4 z-50 bg-surface border border-border p-2 rounded font-mono text-accent text-xs"
      >
        {open ? '✕' : '☰'}
      </button>

      {/* Overlay — solo móvil cuando está abierto */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-base/80 z-30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-screen w-64 bg-surface border-r border-border flex flex-col z-40
        transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>

        {/* Header */}
        <div className="p-6 border-b border-border">
          <p className="font-mono text-accent text-xs mb-1">~ $</p>
          <p className="font-mono text-text-primary text-sm font-bold">{profile.handle}</p>
          <p className="font-sans text-text-secondary text-xs mt-1">{profile.title}</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2 rounded font-mono text-sm transition-colors
                    ${active === item.id
                      ? 'text-text-primary bg-border'
                      : 'text-text-secondary hover:text-text-primary hover:bg-border'
                    }`}
                >
                  <span className={active === item.id ? 'text-accent' : 'text-border'}>›</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <p className="font-mono text-text-secondary text-xs">{profile.location}</p>
        </div>

      </aside>
    </>
  )
}