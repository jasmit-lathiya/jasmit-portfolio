import Navbar from './organisms/Navbar'
import Hero from './organisms/Hero'
import About from './organisms/About'
import Skills from './organisms/Skills'
import Projects from './organisms/Projects'
import Contact from './organisms/Contact'
import { ThemeProvider } from './context/ThemeContext'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <ThemeProvider>
      <Analytics />
      <div className="min-h-screen dark:bg-[#050505] text-black dark:text-white relative overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  )
}

export default App
