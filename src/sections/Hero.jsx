// src/sections/Hero.jsx

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import NeonButton from '../components/ui/NeonButton'
import GlitchText from '../components/effects/GlitchText'

const roles = [
  'Développeur Web & Mobile',
  'Praticien Sécurité Informatique',
  'Spécialiste IA & Prompt Engineering',
  'Freelance Full-Stack',
]

const stats = [
  { value: '3+', label: "ans d'expérience" },
  { value: '10+', label: 'projets réalisés' },
  { value: '3', label: "domaines d'expertise" },
  { value: '85%', label: 'maîtrise IA' },
]

// Projets pour l'onglet
const allProjects = [

  // === DEV ===
  {
    id: 'dev-1', category: 'Dev', title: 'BaseMasterMx',
    desc: "Convertisseur numérique entre différentes bases numériques.", color: '#00fff5', href: '#dev',
  },
  {
    id: 'dev-2', category: 'Dev', title: 'AuroraAI Mx',
    desc: "Assistant IA qui transforme instantanément n'importe quel texte en audio naturel.", color: '#00fff5', href: '#dev',
  },
  {
    id: 'dev-3', category: 'Dev', title: 'CanjiX',
    desc: "Plateforme d'achat centralisée permettant aux consommateurs de trouver et d'acheter facilement les produits essentiels.", color: '#00fff5', href: '#dev',
  },
  {
    id: 'dev-4', category: 'Dev', title: 'ReStoreX',
    desc: "Marketplace togolais permettant à chaque particulier d'acheter et de vendre des objets d'occasion facilement, en toute confiance et sans intermédiaire.", color: '#00fff5', href: '#dev',
  },
  {
    id: 'dev-5', category: 'Dev', title: 'TikiRix',
    desc: "Plateforme togolaise de billetterie événementielle.", color: '#00fff5', href: '#dev',
  },
  {
    id: 'dev-6', category: 'Dev', title: 'PortfolioV1',
    desc: "Premier portfolio personnel conçu en 72h avec HTML/CSS/JS vanilla.", color: '#00fff5', href: '#dev',
  },

  
  
    // === SÉCURITÉ ===
    {
      id: 'sec-1', category: 'Sécurité', title: 'Audit Web',
      desc: 'Audit complet de vulnérabilités web — OWASP Top 10.', color: '#f43f5e', href: '#security',
    },
    {
      id: 'sec-2', category: 'Sécurité', title: 'Analyse Réseau',
      desc: 'Capture et analyse de trafic réseau avec Wireshark.', color: '#f43f5e', href: '#security',
    },
    {
      id: 'sec-3', category: 'Sécurité', title: 'OSINT Investigation',
      desc: 'Investigation en sources ouvertes — exposition numérique.', color: '#f43f5e', href: '#security',
    },
    {
      id: 'sec-4', category: 'Sécurité', title: 'CTF — Hack The Box',
      desc: 'Challenges Capture The Flag — exploitation & privilege escalation.', color: '#f43f5e', href: '#security',
    },
  
    
    // === IA & PROMPTS ===
    {
      id: 'ai-1', category: 'IA & Prompts', title: 'AuroraMx IA',
      desc: 'Système multi-LLMs avec routing intelligent.', color: '#bf00ff', href: '#ai',
    },
    {
      id: 'ai-2', category: 'IA & Prompts', title: 'XPrompt Engine',
      desc: 'Moteur de bibliothèque de prompts structurés avec scoring.', color: '#bf00ff', href: '#ai',
    },
    {
      id: 'ai-3', category: 'IA & Prompts', title: 'MxCode Review AI',
      desc: 'Pipeline automatisé d\'analyse de code par LLM.', color: '#bf00ff', href: '#ai',
    },
    {
      id: 'ai-4', category: 'IA & Prompts', title: 'XGen Pipeline',
      desc: 'Pipeline multimodal texte → image → audio → vidéo.', color: '#bf00ff', href: '#ai',
    },
    {
      id: 'ai-5', category: 'IA & Prompts', title: 'AuditX AI',
      desc: 'Outil d\'analyse de sécurité propulsé par LLM.', color: '#bf00ff', href: '#ai',
    },
    {
      id: 'ai-6', category: 'IA & Prompts', title: 'DocMx Intelligence',
      desc: 'Traitement intelligent de documents par LLM + RAG.', color: '#bf00ff', href: '#ai',
    },
  ]
 

const categoryColors = {
  'Dev': '#00fff5',
  'Sécurité': '#f43f5e',
  'IA & Prompts': '#bf00ff',
}

const categoryTabs = ['Tous', 'Dev', 'Sécurité', 'IA & Prompts']

// Icônes SVG modernes pour les badges flottants
const badges = [
  {
    label: 'Sécurité',
    color: '#f43f5e',
    position: 'left',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    label: 'IA & Prompts',
    color: '#bf00ff',
    position: 'right',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    label: 'Full-Stack',
    color: '#00fff5',
    position: 'left-bottom',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
]

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Tous')
  const [cvOpen, setCvOpen] = useState(false)

  // Effet machine à écrire
  useEffect(() => {
    const current = roles[roleIndex]
    let i = 0
    let timeout
    if (typing) {
      const interval = setInterval(() => {
        setDisplayed(current.slice(0, i + 1))
        i++
        if (i === current.length) {
          clearInterval(interval)
          timeout = setTimeout(() => setTyping(false), 1800)
        }
      }, 60)
      return () => { clearInterval(interval); clearTimeout(timeout) }
    } else {
      let j = current.length
      const interval = setInterval(() => {
        setDisplayed(current.slice(0, j - 1))
        j--
        if (j === 0) {
          clearInterval(interval)
          setRoleIndex((prev) => (prev + 1) % roles.length)
          setTyping(true)
        }
      }, 35)
      return () => clearInterval(interval)
    }
  }, [roleIndex, typing])

  const filteredProjects = activeTab === 'Tous'
    ? allProjects
    : allProjects.filter((p) => p.category === activeTab)

  // Remplace l'ancienne fonction handleProjectClick par celle-ci

const handleProjectClick = (href, projectId) => {
  setProjectsOpen(false)

  setTimeout(() => {
    // 1. Naviguer vers la section
    const sectionEl = document.getElementById(href.replace('#', ''))
    if (sectionEl) sectionEl.scrollIntoView({ behavior: 'smooth' })

    // 2. Attendre que le scroll soit fini puis clignoter le projet
    setTimeout(() => {
      // Chercher le bon tab "Projets" et le cliquer
      const tabButtons = document.querySelectorAll('button')
      tabButtons.forEach((btn) => {
        if (btn.textContent.trim() === 'Projets') {
          btn.click()
        }
      })

      // 3. Attendre le rendu du tab puis clignoter la carte
      setTimeout(() => {
        const cards = document.querySelectorAll('[data-project-id]')
        cards.forEach((card) => {
          if (card.getAttribute('data-project-id') === projectId) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' })

            // Clignoter 3 fois
            let count = 0
            const blink = setInterval(() => {
              card.style.outline = count % 2 === 0
                ? '2px solid #00fff5'
                : 'none'
              card.style.boxShadow = count % 2 === 0
                ? '0 0 30px rgba(0,255,245,0.6)'
                : ''
              count++
              if (count >= 6) {
                clearInterval(blink)
                card.style.outline = 'none'
                card.style.boxShadow = ''
              }
            }, 350)
          }
        })
      }, 600)
    }, 900)
  }, 300)
}

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#010626' }}
    >
      {/* === BACKGROUND DESIGN MODERNE === */}
      {/* Grille cyber */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,245,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,245,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Lignes diagonales décoratives */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: 0 }}
          className="absolute top-1/4 w-full h-px opacity-20"
          style={{ background: 'linear-gradient(90deg, transparent, #00fff5, transparent)' }}
        />
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: 3 }}
          className="absolute top-3/4 w-full h-px opacity-10"
          style={{ background: 'linear-gradient(90deg, transparent, #bf00ff, transparent)' }}
        />
      </div>

      {/* Glows de fond */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00fff5, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #bf00ff, transparent)' }}
      />

      {/* === CONTENU === */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* === COLONNE GAUCHE === */}
        <div>
          {/* Tag statut */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 border border-cyan-400/30 px-4 py-2 rounded-sm mb-8"
            style={{ boxShadow: '0 0 10px rgba(0,255,245,0.1)' }}
          >
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-cyan-400"
              style={{ boxShadow: '0 0 6px #00fff5' }}
            />
            Disponible pour missions freelance...
          </motion.div>

          {/* Nom */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-none"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            <span className="block text-white">
              <GlitchText text="GNAVE" />
            </span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(90deg, #00fff5, #bf00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <GlitchText text="KOFFI MAXIME" />
            </span>
          </motion.h1>

          {/* Rôle animé */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-mono text-lg text-gray-400 mb-8 h-8 flex items-center gap-2"
          >
            <span className="text-cyan-400">&gt;</span>
            <span>{displayed}</span>
            <span className="animate-pulse text-cyan-400">█</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-base leading-relaxed max-w-lg mb-10"
          >
            Étudiant en Licence Informatique spécialisé en{' '}
<span className="text-cyan-400 font-semibold">Sécurité Informatique</span>, expérimenté en{' '}
<span className="text-white font-semibold">développement Full-Stack freelance</span> et en{' '}
<span className="text-violet-400 font-semibold">IA & Prompt Engineering</span>.
Je construis des solutions numériques qui allient{' '}
<span className="text-white font-medium">performance, sécurité et innovation</span>.
          </motion.p>

          {/* === BOUTONS === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >

            {/* Bouton Voir mes projets */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setProjectsOpen(!projectsOpen)}
                className="flex items-center gap-2 font-mono font-bold px-6 py-3 rounded-sm transition-all duration-300 relative overflow-hidden"
                style={{
                  background: 'rgba(0,255,245,0.9)',
                  color: '#010626',
                  boxShadow: '0 0 20px rgba(0,255,245,0.4)',
                }}
              >
                {/* Shimmer */}
                <motion.span
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-y-0 w-8 opacity-30 pointer-events-none"
                  style={{ background: 'linear-gradient(90deg, transparent, white, transparent)' }}
                />
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 relative z-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
                <span className="relative z-10">Voir mes projets</span>
                <motion.svg
                  animate={{ rotate: projectsOpen ? 180 : 0 }}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className="w-4 h-4 relative z-10"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </motion.svg>
              </motion.button>

              {/* Dropdown projets */}
              <AnimatePresence>
                {projectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 z-50 rounded-sm overflow-hidden"
                    style={{
                      background: 'rgba(1,6,38,0.98)',
                      border: '1px solid rgba(0,255,245,0.2)',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(0,255,245,0.05)',
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    {/* Tabs catégories */}
                    <div className="flex border-b border-gray-900">
                      {categoryTabs.map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className="flex-1 font-mono text-xs py-3 px-2 transition-all duration-200"
                          style={{
                            color: activeTab === tab ? '#00fff5' : '#4b5563',
                            background: activeTab === tab ? 'rgba(0,255,245,0.05)' : 'transparent',
                            borderBottom: activeTab === tab ? '2px solid #00fff5' : '2px solid transparent',
                          }}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Liste projets */}
                    <div className="py-2 max-h-72 overflow-y-auto">
                      {filteredProjects.map((p, i) => (
                        <motion.button
                          key={p.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          onClick={() => handleProjectClick(p.href , p.id)}
                          className="w-full flex items-start gap-3 px-4 py-3 text-left group transition-all duration-200 hover:bg-white/5"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{
                              background: categoryColors[p.category],
                              boxShadow: `0 0 6px ${categoryColors[p.category]}`,
                            }}
                          />
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="font-mono text-sm text-white font-semibold">{p.title}</span>
                              <span
                                className="font-mono text-xs px-1.5 py-0.5 rounded-sm"
                                style={{
                                  color: categoryColors[p.category],
                                  background: `${categoryColors[p.category]}15`,
                                  border: `1px solid ${categoryColors[p.category]}30`,
                                }}
                              >
                                {p.category}
                              </span>
                            </div>
                            <p className="font-mono text-xs text-gray-600">{p.desc}</p>
                          </div>
                          <svg
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                            className="w-3.5 h-3.5 ml-auto text-gray-700 group-hover:text-cyan-400 transition-colors flex-shrink-0 mt-1"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                        </motion.button>
                      ))}
                    </div>

                    {/* Footer dropdown */}
                    <div className="px-4 py-3 border-t border-gray-900">
                      <p className="font-mono text-xs text-gray-700 text-center">
                        {allProjects.length} projets au total
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bouton Me contacter */}
            <NeonButton
              variant="cyan"
              size="md"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Me contacter
            </NeonButton>

            {/* Bouton Mon CV */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setCvOpen(true)}
              className="flex items-center gap-2 font-mono font-semibold px-6 py-3 rounded-sm transition-all duration-300"
              style={{
                background: 'rgba(191,0,255,0.1)',
                border: '1px solid rgba(191,0,255,0.4)',
                color: '#bf00ff',
                boxShadow: '0 0 15px rgba(191,0,255,0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(191,0,255,0.18)'
                e.currentTarget.style.boxShadow = '0 0 25px rgba(191,0,255,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(191,0,255,0.1)'
                e.currentTarget.style.boxShadow = '0 0 15px rgba(191,0,255,0.15)'
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              Mon CV
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-2xl font-black font-mono"
                  style={{
                    background: 'linear-gradient(90deg, #00fff5, #bf00ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-gray-600 font-mono mt-1">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* === COLONNE DROITE : Photo === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center relative"
        >
          {/* Cercles rotatifs */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute w-72 h-72 rounded-full"
            style={{ border: '1px solid rgba(0,255,245,0.2)' }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute w-80 h-80 rounded-full"
            style={{ border: '1px dashed rgba(191,0,255,0.1)' }}
          />

          {/* Photo */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10"
          >
            <div
              className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden"
              style={{
                border: '2px solid transparent',
                background: 'linear-gradient(#010626, #010626) padding-box, linear-gradient(135deg, #00fff5, #bf00ff) border-box',
                boxShadow: '0 0 40px rgba(0,255,245,0.2), 0 0 80px rgba(191,0,255,0.1)',
              }}
            >
              <img
                src="/images/pp1.jpg"
                alt="Gnave Koffi Maxime"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML = `
                    <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#021373,#010626);font-family:Orbitron,monospace;font-size:3rem;font-weight:900;color:#00fff5;">MX</div>
                  `
                }}
              />
            </div>

            {/* Badge expérience */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap glass px-4 py-2 rounded-sm font-mono text-xs text-cyan-400 z-20 flex items-center gap-2"
              style={{ boxShadow: '0 0 15px rgba(0,255,245,0.2)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              3+ ans d'expérience
            </motion.div>
          </motion.div>

          {/* Badges flottants — visibles sur tous écrans */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute glass px-3 py-2 rounded-sm font-mono text-xs flex items-center gap-2 z-20"
            style={{
              boxShadow: '0 0 10px rgba(244,63,94,0.2)',
              border: '1px solid rgba(244,63,94,0.2)',
              color: '#f43f5e',
              bottom: '30%',
              left: '-10px',
            }}
          >
            <span style={{ color: '#f43f5e' }}>{badges[0].icon}</span>
            <span className="text-gray-300">Sécurité</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            className="absolute glass px-3 py-2 rounded-sm font-mono text-xs flex items-center gap-2 z-20"
            style={{
              boxShadow: '0 0 10px rgba(191,0,255,0.2)',
              border: '1px solid rgba(191,0,255,0.2)',
              color: '#bf00ff',
              top: '10%',
              right: '-10px',
            }}
          >
            <span style={{ color: '#bf00ff' }}>{badges[1].icon}</span>
            <span className="text-gray-300">IA & Prompts</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0 }}
            className="absolute glass px-3 py-2 rounded-sm font-mono text-xs flex items-center gap-2 z-20"
            style={{
              boxShadow: '0 0 10px rgba(0,255,245,0.15)',
              border: '1px solid rgba(0,255,245,0.15)',
              color: '#00fff5',
              bottom: '10%',
              right: '-10px',
            }}
          >
            <span style={{ color: '#00fff5' }}>{badges[2].icon}</span>
            <span className="text-gray-300">Full-Stack</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-gray-600 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent"
        />
      </motion.div>

      {/* === MODAL CV === */}
      <AnimatePresence>
        {cvOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(1,6,38,0.95)', backdropFilter: 'blur(10px)' }}
            onClick={() => setCvOpen(false)}
          >
           <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl rounded-sm overflow-hidden flex flex-col"
            style={{
              border: '1px solid rgba(0,255,245,0.2)',
              boxShadow: '0 0 60px rgba(0,255,245,0.1)',
              maxHeight: '90vh',
              }}
                onClick={(e) => e.stopPropagation()}
           >
             {/* Header modal CV */}
            <div
              className="flex items-center justify-between px-4 py-9"
              style={{
                background: 'rgba(1,6,38,0.98)',
                borderBottom: '1px solid rgba(0,255,245,0.1)',
                minHeight: '52px',
                flexShrink: 0,
              
              }}
            > 
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="#00fff5" strokeWidth="1.5" className="w-4 h-4 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <span className="font-mono text-xs text-cyan-400 truncate">CV — Gnave Koffi Maxime</span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
<br /> <br /><br />
            {/* Bouton télécharger */}
            <a
              href="/CV GNAVE Koffi Maxime.pdf"
              download
              className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-sm transition-all duration-300"
              style={{ background: 'rgba(0,255,245,0.1)', border: '1px solid rgba(0,255,245,0.3)', color: '#00fff5' }}
            >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span className="hidden sm:inline">Télécharger</span>
            </a>

            {/* Bouton fermer */}
              <button
              onClick={() => setCvOpen(false)}
              className="p-1.5 rounded-sm transition-colors flex-shrink-0"
              style={{ color: '#6b7280', border: '1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
              >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              </button>
         </div>
        </div>

              {/* PDF viewer */}
              <iframe
                src="/CV GNAVE Koffi Maxime.pdf"
                className="w-full"
                style={{ height: '80vh', background: '#fff' }}
                title="CV Gnave Koffi Maxime"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hero