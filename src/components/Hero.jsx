import { profile } from '../data/portfolio'
import { useEffect, useState } from 'react'

const lines = [
  { prompt: 'whoami', output: profile.name },
  { prompt: 'cat title.txt', output: profile.title },
  { prompt: 'cat bio.txt', output: profile.bio },
  { prompt: 'echo $LOCATION', output: profile.location },
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= lines.length) return
    const timer = setTimeout(() => {
      setVisibleLines((v) => v + 1)
    }, 600)
    return () => clearTimeout(timer)
  }, [visibleLines])

  return (
    <section id="whoami" className="mb-16">
      <div className="bg-surface border border-border rounded-lg p-6 font-mono text-sm">

        {/* Terminal bar */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-accent"></span>
          <span className="ml-4 text-text-secondary text-xs">{profile.handle}@portfolio ~ $</span>
        </div>

        {/* Profile + terminal */}
        <div className="flex gap-6 items-start">

          {/* Avatar */}
          <div className="shrink-0">
            {profile.avatarPlaceholder ? (
              <div className="w-20 h-20 rounded-full border-2 border-accent flex items-center justify-center bg-base">
                <span className="text-accent text-2xl font-bold">
                  {profile.name.charAt(0)}
                </span>
              </div>
            ) : (
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-20 h-20 rounded-full border-2 border-accent object-cover"
              />
            )}
            <p className="text-text-secondary text-xs text-center mt-2">@{profile.handle}</p>
          </div>

          {/* Lines */}
          <div className="flex-1 space-y-4">
            {lines.slice(0, visibleLines).map((line, i) => (
              <div key={i}>
                <p className="text-accent">
                  <span className="text-text-secondary">{'>'} </span>
                  {line.prompt}
                </p>
                <p className="text-text-primary mt-1 pl-4">{line.output}</p>
              </div>
            ))}

            {visibleLines < lines.length && (
              <span className="inline-block w-2 h-4 bg-accent animate-pulse"></span>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}