import { useState } from 'react'
import Sidebar from './components/Sidebar'

export default function App() {
  const [active, setActive] = useState('about')

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar active={active} onNavigate={setActive} />
      <main style={{
        marginLeft: '220px',
        padding: '2rem',
        minHeight: '100vh',
        width: '100%',
      }}>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--color-muted)' }}>
          sección: {active}
        </p>
      </main>
    </div>
  )
}