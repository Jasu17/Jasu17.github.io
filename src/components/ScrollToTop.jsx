import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return (
    <button
      onClick={scrollUp}
      className="fixed bottom-6 right-6 z-50 font-mono text-xs text-accent border border-accent px-3 py-2 rounded bg-surface hover:bg-accent hover:text-base transition-colors"
    >
      ↑ top
    </button>
  )
}