import { useState, useEffect, useRef } from 'react'
import { useApp } from '../context/AppContext'

const commands = {
    en: {
        help: {
            output: [
                ' Available commands: ',
                ' about - scroll to about ',
                ' projects - scroll to projects ',
                ' skills - scroll to skills ',
                ' timeline - scroll to timeline ',
                ' clear - clear the terminal ',
                ' contact - scroll to contact ',
                ' help - show this help message ',
            ]
        },
        about: { scroll: 'about', output: [ 'scrolling to about...' ] },
        projects: { scroll: 'projects', output: [ 'scrolling to projects...' ] },
        skills: { scroll: 'skills', output: [ 'scrolling to skills...' ] },
        timeline: { scroll: 'timeline', output: [ 'scrolling to timeline...' ] },
        contact: { scroll: 'contact', output: [ 'scrolling to contact...' ] },
    },
    es: {
        help: {
            output: [
                ' Comandos disponibles: ',
                ' about - ir a sobre mí ',
                ' projects - ir a proyectos ',
                ' skills - ir a habilidades ',
                ' timeline - ir a línea de tiempo ',
                ' clear - limpiar la terminal ',
                ' contact - ir a contacto ',
                ' help - mostrar este mensaje de ayuda ',
            ]
        },
        about: { scroll: 'about', output: [ 'Navegando a sobre mí...' ] },
        projects: { scroll: 'projects', output: [ 'Navegando a proyectos...' ] },
        skills: { scroll: 'skills', output: [ 'Navegando a habilidades...' ] },
        timeline: { scroll: 'timeline', output: [ 'Navegando a línea de tiempo...' ] },
        contact: { scroll: 'contact', output: [ 'Navegando a contacto...' ] },
    }
}

const notFound = {
    en: (cmd)=>['bash: ${cmd}: command not found', 'Type "help" to see available commands.'],
    es: (cmd)=>['bash: ${cmd}: comando no encontrado', 'Escribe "help" para ver los comandos disponibles.'],
}

export default function Terminal() {
  const { language } = useApp()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const inputRef = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const run = (cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    const cmds = commands[language]

    if (trimmed === 'clear') {
      setHistory([])
      return
    }

    const entry = { input: trimmed, output: [] }

    if (cmds[trimmed]) {
      entry.output = cmds[trimmed].output
      if (cmds[trimmed].scroll) {
        setTimeout(() => {
          document.getElementById(cmds[trimmed].scroll)?.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      }
    } else if (trimmed !== '') {
      entry.output = notFound[language](trimmed)
    }

    setHistory((h) => [...h, entry])
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      run(input)
      setInput('')
    }
  }

  return (
    <>
      {/* Botón para abrir */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full mt-4 font-mono text-xs text-text-secondary border border-border px-3 py-2 rounded hover:text-accent hover:border-accent transition-colors text-left"
      >
        <span className="text-accent mr-2">$</span>
        {language === 'en' ? 'open terminal' : 'abrir terminal'}
      </button>

      {/* Terminal modal */}
      {open && (
        <div className="fixed inset-0 bg-base/80 z-50 flex items-end md:items-center justify-center p-4">
          <div className="bg-surface border border-border rounded-lg w-full max-w-xl">

            {/* Bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-accent"></span>
              <span className="ml-4 font-mono text-text-secondary text-xs flex-1">
                guest@portfolio ~ $
              </span>
              <button
                onClick={() => setOpen(false)}
                className="font-mono text-text-secondary text-xs hover:text-text-primary transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Output */}
            <div className="p-4 font-mono text-xs h-48 overflow-y-auto space-y-3">
              {history.length === 0 && (
                <p className="text-text-secondary">
                  {language === 'en' ? 'Type "help" to get started.' : 'Escribe "help" para comenzar.'}
                </p>
              )}
              {history.map((entry, i) => (
                <div key={i}>
                  <p className="text-accent">
                    <span className="text-text-secondary">{'>'} </span>
                    {entry.input}
                  </p>
                  {entry.output.map((line, j) => (
                    <p key={j} className="text-text-primary pl-4 mt-0.5">{line}</p>
                  ))}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 px-4 py-3 border-t border-border">
              <span className="text-accent font-mono text-xs">{'>'}</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                className="flex-1 bg-transparent font-mono text-xs text-text-primary outline-none placeholder-text-secondary"
                placeholder={language === 'en' ? 'type a command...' : 'escribe un comando...'}
              />
            </div>

          </div>
        </div>
      )}
    </>
  )
}