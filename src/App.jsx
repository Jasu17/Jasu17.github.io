import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import CurrentFocus from './components/CurrentFocus'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import ScrollToTop from './components/ScrollToTop'
import Certifications from './components/Certifications'

function Home() {
  return (
    <div className="flex min-h-screen bg-base text-text-primary font-sans">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-8 pt-16 md:pt-8">
        <Hero />
        <About />
        <CurrentFocus />
        <Projects />
        <Skills />
        <Timeline />
        <Certifications />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}