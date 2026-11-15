import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './components/Footer'

/**
 * App sólo define el orden general de la página.
 * Cada bloque mantiene su contenido y estructura en un componente independiente.
 */
function App() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
