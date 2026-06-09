const navItems = [
  { id: 'about',    label: 'whoami' },
  { id: 'projects', label: 'projects' },
  { id: 'skills',   label: 'skills' },
  { id: 'contact',  label: 'contact' },
]

export default function Sidebar({ active, onNavigate }) {
  return (
    <aside style={{
      width: '220px',
      minHeight: '100vh',
      backgroundColor: 'var(--color-surface)',
      borderRight: '1px solid var(--color-border)',
      padding: '2rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      position: 'fixed',
      top: 0,
      left: 0,
    }}>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        color: 'var(--color-accent)',
        fontSize: '0.75rem',
        marginBottom: '1.5rem',
        letterSpacing: '0.05em',
      }}>
        ~/portfolio
      </div>

      {navItems.map(item => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          style={{
            background: active === item.id ? 'var(--color-border)' : 'transparent',
            border: 'none',
            borderLeft: active === item.id ? '2px solid var(--color-accent)' : '2px solid transparent',
            color: active === item.id ? 'var(--color-text)' : 'var(--color-muted)',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.85rem',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            textAlign: 'left',
            borderRadius: '0 4px 4px 0',
            transition: 'all 0.15s ease',
          }}
        >
          {active === item.id ? '> ' : '  '}{item.label}
        </button>
      ))}
    </aside>
  )
}