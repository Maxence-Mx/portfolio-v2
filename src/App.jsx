// src/App.jsx

import { useState } from 'react'
import Loader from './components/layout/Loader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ParticleCanvas from './components/effects/ParticleCanvas'
import SectionDivider from './components/ui/SectionDivider'
import Hero from './sections/Hero'
import About from './sections/About'
import DevProjects from './sections/dev/DevProjects'
import SecuritySection from './sections/security/SecuritySection'
import AISection from './sections/ai/AISection'
import Contact from './sections/Contact'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <div className="relative bg-dark-900 min-h-screen">
          <ParticleCanvas />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <SectionDivider color="cyan" />
            <About />
            <SectionDivider color="violet" />
            <DevProjects />
            <SectionDivider color="cyan" />
            <SecuritySection />
            <SectionDivider color="violet" />
            <AISection />
            <SectionDivider color="cyan" />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App