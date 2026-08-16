import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import AnimatedBackground from './components/AnimatedBackground.jsx'

export default function App() {
  return (
    <div className="noise-overlay">
      {/* Third CSS blob */}
      <div id="blob3" aria-hidden="true" />

      {/* Rich animated background — starfield + rings + scanlines */}
      <AnimatedBackground />

      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
