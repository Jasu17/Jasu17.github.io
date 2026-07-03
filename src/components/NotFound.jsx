import { useApp } from '../context/AppContext'

const content = {
  en: {
    command: 'cd /page-not-found',
    error: 'bash: cd: /page-not-found: No such file or directory',
    suggestion: 'Try one of these instead:',
    home: '→ go home',
  },
  es: {
    command: 'cd /pagina-no-encontrada',
    error: 'bash: cd: /pagina-no-encontrada: No existe el archivo o directorio',
    suggestion: 'Intenta con uno de estos:',
    home: '→ ir al inicio',
  },
}

export default function NotFound() {
  const { language } = useApp()
  const txt = content[language]

  return (
    <div className="min-h-screen bg-base flex items-center justify-center p-8">
      <div className="bg-surface border border-border rounded-lg p-6 font-mono text-sm w-full max-w-lg">

        {/* Terminal bar */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-accent"></span>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-accent">
            <span className="text-text-secondary">{'>'} </span>
            {txt.command}
          </p>
          <p className="text-red-400">{txt.error}</p>
          <p className="text-text-secondary text-xs">exit code: 404</p>

          <div className="pt-4 border-t border-border">
            <p className="text-text-secondary text-xs mb-3">{txt.suggestion}</p>
            <a
              href="/"
              className="text-accent hover:underline"
            >
              {txt.home}
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}