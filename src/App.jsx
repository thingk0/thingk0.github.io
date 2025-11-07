import React, { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Career from './components/sections/Career'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Footer from './components/layout/Footer'

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
