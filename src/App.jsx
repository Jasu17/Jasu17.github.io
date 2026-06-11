import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import CurrentFocus from './components/CurrentFocus'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="flex min-h-screen bg-base text-text-primary font-sans">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-8 pt-16 md:pt-8">
        <Hero />
        <About />
        <CurrentFocus />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}