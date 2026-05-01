// src/components/layout/Loader.jsx

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Loader = ({ onComplete }) => {
  const [phase, setPhase] = useState(1)
  // phase 1 : intro nom
  // phase 2 : animation centrale
  // phase 3 : message bienvenue
  // phase 4 : exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(2), 1500)
    const t2 = setTimeout(() => setPhase(3), 4000)
    const t3 = setTimeout(() => setPhase(4), 8000)
    const t4 = setTimeout(() => onComplete(), 8300)
    return () => [t1, t2, t3, t4].forEach(clearTimeout)
  }, [])

  return (
    <AnimatePresence>
      {phase !== 4 && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center cyber-grid overflow-hidden"
          style={{ background: '#010626' }}
        >

          {/* Cercles rotatifs décoratifs */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute w-64 h-64 rounded-full"
              style={{ border: '1px solid rgba(0,255,245,0.15)' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute w-80 h-80 rounded-full"
              style={{ border: '1px dashed rgba(191,0,255,0.1)' }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-96 h-96 rounded-full"
              style={{ border: '1px solid rgba(0,255,245,0.05)' }}
            />
          </div>

          {/* Glow central */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-80 h-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, #00fff5, #bf00ff, transparent)' }}
          />

          {/* === PHASE 1 : Nom qui apparaît === */}
          <AnimatePresence mode="wait">
            {phase === 1 && (
              <motion.div
                key="phase1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-center"
              >
                <motion.h1
                  className="font-black tracking-[0.3em] text-5xl md:text-7xl"
                  style={{
                    fontFamily: 'Orbitron, monospace',
                    background: 'linear-gradient(135deg, #00fff5, #bf00ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  initial={{ letterSpacing: '0.1em' }}
                  animate={{ letterSpacing: '0.3em' }}
                  transition={{ duration: 1 }}
                >
                  MAXIME
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-mono text-xs text-gray-600 tracking-[0.5em] mt-2 uppercase"
                >
                  Koffi Gnave
                </motion.p>
              </motion.div>
            )}

            {/* === PHASE 2 : Animation hexagone / scan === */}
            {phase === 2 && (
              <motion.div
                key="phase2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 flex flex-col items-center gap-8"
              >
                {/* Hexagone animé */}
                <div className="relative w-32 h-32 flex items-center justify-center">
                  {/* SVG Hexagone */}
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                    <motion.polygon
                      points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                      fill="none"
                      stroke="#00fff5"
                      strokeWidth="1"
                      strokeDasharray="300"
                      initial={{ strokeDashoffset: 300 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 1.2, ease: 'easeInOut' }}
                      style={{ filter: 'drop-shadow(0 0 6px #00fff5)' }}
                    />
                    <motion.polygon
                      points="50,15 85,32.5 85,67.5 50,85 15,67.5 15,32.5"
                      fill="none"
                      stroke="#bf00ff"
                      strokeWidth="0.5"
                      strokeDasharray="280"
                      initial={{ strokeDashoffset: 280 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 1.2, delay: 0.2, ease: 'easeInOut' }}
                      style={{ filter: 'drop-shadow(0 0 4px #bf00ff)' }}
                    />
                  </svg>

                  {/* Logo ou initiales au centre */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: 'spring' }}
                  >
                    <img
                      src="/images/logo.png"
                      alt="Logo"
                      className="h-12 w-auto"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.innerHTML = `
                          <span style="font-family:Orbitron,monospace;font-size:1.5rem;font-weight:900;color:#00fff5;text-shadow:0 0 10px #00fff5">MX</span>
                        `
                      }}
                    />
                  </motion.div>
                </div>

                {/* Barres de scan */}
                <div className="flex flex-col items-center gap-2 w-48">
                  {['Développement', 'Sécurité', 'IA & Prompts'].map((label, i) => (
                    <div key={i} className="w-full">
                      <div className="flex justify-between font-mono text-xs mb-1">
                        <span className="text-gray-600">{label}</span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 + i * 0.2 }}
                          className="text-cyan-400"
                        >
                          OK
                        </motion.span>
                      </div>
                      <div className="w-full h-px bg-gray-900 overflow-hidden rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.8, delay: 0.2 + i * 0.2, ease: 'easeOut' }}
                          className="h-full rounded-full"
                          style={{
                            background: i === 1
                              ? 'linear-gradient(90deg, #7c3aed, #bf00ff)'
                              : 'linear-gradient(90deg, #0066ff, #00fff5)',
                            boxShadow: i === 1 ? '0 0 6px #bf00ff' : '0 0 6px #00fff5',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* === PHASE 3 : Message bienvenue === */}
            {phase === 3 && (
              <motion.div
                key="phase3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-center px-6"
              >
                {/* Tag */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 mb-6"
                  style={{
                    border: '1px solid rgba(0,255,245,0.3)',
                    padding: '6px 16px',
                    borderRadius: '2px',
                    boxShadow: '0 0 15px rgba(0,255,245,0.1)',
                  }}
                >
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                    style={{ boxShadow: '0 0 6px #00fff5' }}
                  />
                  Portfolio chargé avec succès
                </motion.div>

                {/* Message principal */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-5xl font-black mb-3"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  <span className="text-white">Bienvenue sur le </span>
                  <span
                    style={{
                      background: 'linear-gradient(90deg, #00fff5, #bf00ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Portfolio
                  </span>
                </motion.h2>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="text-xl md:text-3xl font-black mb-6"
                  style={{
                    fontFamily: 'Orbitron, monospace',
                    background: 'linear-gradient(90deg, #00fff5, #bf00ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  de Gnave Koffi Maxime
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="font-mono text-xs text-gray-600 tracking-[0.3em] uppercase"
                >
                  Dev • Sécurité • IA & Prompt Engineering
                </motion.p>

                {/* Ligne décorative animée */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="mt-8 h-px max-w-xs mx-auto"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #00fff5, #bf00ff, transparent)',
                    boxShadow: '0 0 10px rgba(0,255,245,0.3)',
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Points décoratifs coins */}
          {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
            <div key={i} className={`absolute ${pos} flex items-center gap-1`}>
              <div className="w-3 h-px" style={{ background: '#00fff5', boxShadow: '0 0 4px #00fff5' }} />
              <div className="w-px h-3" style={{ background: '#00fff5', boxShadow: '0 0 4px #00fff5' }} />
            </div>
          ))}

        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader