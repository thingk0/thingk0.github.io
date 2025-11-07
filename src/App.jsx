import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Career from './components/Career'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Career />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
