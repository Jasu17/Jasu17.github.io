import Sidebar from "./components/Sidebar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

export default function App() {
  return(
    <div className="flex min-h-screen bg-base text-text-primary font-sans">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}