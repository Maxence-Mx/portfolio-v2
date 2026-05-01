// src/sections/dev/DevProjects.jsx

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SkillBar from '../../components/ui/SkillBar'
import { devSkills, experiences } from '../../data/devData'

const tabs = ['Compétences', 'Projets', 'Expériences']

const DevIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
  </svg>
)

const techColors = {
  'HTML': { bg: 'rgba(228,77,38,0.15)', color: '#e44d26', border: 'rgba(228,77,38,0.4)' },
  'HTML5': { bg: 'rgba(228,77,38,0.15)', color: '#e44d26', border: 'rgba(228,77,38,0.4)' },
  'CSS': { bg: 'rgba(38,77,228,0.15)', color: '#264de4', border: 'rgba(38,77,228,0.4)' },
  'CSS3': { bg: 'rgba(38,77,228,0.15)', color: '#264de4', border: 'rgba(38,77,228,0.4)' },
  'JavaScript': { bg: 'rgba(247,223,30,0.15)', color: '#f7df1e', border: 'rgba(247,223,30,0.4)' },
  'TypeScript': { bg: 'rgba(49,120,198,0.15)', color: '#3178c6', border: 'rgba(49,120,198,0.4)' },
  'PHP': { bg: 'rgba(119,123,180,0.15)', color: '#777bb4', border: 'rgba(119,123,180,0.4)' },
  'Python': { bg: 'rgba(55,118,171,0.15)', color: '#3776ab', border: 'rgba(55,118,171,0.4)' },
  'React': { bg: 'rgba(97,218,251,0.15)', color: '#61dafb', border: 'rgba(97,218,251,0.4)' },
  'React Native': { bg: 'rgba(97,218,251,0.15)', color: '#61dafb', border: 'rgba(97,218,251,0.4)' },
  'Node.js': { bg: 'rgba(104,160,99,0.15)', color: '#68a063', border: 'rgba(104,160,99,0.4)' },
  'Flutter': { bg: 'rgba(84,182,239,0.15)', color: '#54b6ef', border: 'rgba(84,182,239,0.4)' },
  'Dart': { bg: 'rgba(0,180,171,0.15)', color: '#00b4ab', border: 'rgba(0,180,171,0.4)' },
  'MySQL': { bg: 'rgba(0,117,143,0.15)', color: '#00758f', border: 'rgba(0,117,143,0.4)' },
  'Go': { bg: 'rgba(0,173,216,0.15)', color: '#00add8', border: 'rgba(0,173,216,0.4)' },
  'Solidity': { bg: 'rgba(170,170,170,0.15)', color: '#aaaaaa', border: 'rgba(170,170,170,0.4)' },
  'Tailwind CSS': { bg: 'rgba(56,189,248,0.15)', color: '#38bdf8', border: 'rgba(56,189,248,0.4)' },
  'Firebase': { bg: 'rgba(255,196,0,0.15)', color: '#ffc400', border: 'rgba(255,196,0,0.4)' },
  'OpenAI API': { bg: 'rgba(16,163,127,0.15)', color: '#10a37f', border: 'rgba(16,163,127,0.4)' },
  'Claude API': { bg: 'rgba(191,0,255,0.15)', color: '#bf00ff', border: 'rgba(191,0,255,0.4)' },
}

// ============================================================
// CARTE BASEMASTER MX — texte gauche + image droite
// ============================================================
const CardBaseMaster = ({ project, index }) => {
  const accentColor = '#00fff5'
  const accentBg = 'rgba(0,255,245,0.08)'
  const accentBorder = 'rgba(0,255,245,0.2)'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-project-id={project.id}
      className="relative overflow-hidden rounded-sm"
      style={{ background: 'transparent', transition: 'outline 0.2s, box-shadow 0.2s' }}
    >
      <div
        className="absolute inset-0 rounded-sm pointer-events-none z-20"
        style={{
          borderLeft: '1px solid transparent',
          borderRight: '1px solid transparent',
          borderBottom: `1px solid ${accentBorder}`,
          borderTop: 'none',
          maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 50%, black 75%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 50%, black 75%, black 100%)',
          boxShadow: `0 10px 40px ${accentBg}, 0 20px 60px ${accentBg}`,
        }}
      />

      <div className="relative flex items-stretch min-h-72">
        <div className="flex-1 flex flex-col justify-center px-4 pt-6 pb-4 z-10 relative">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: accentBg, border: `1px solid ${accentBorder}` }}>
              <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
            </div>
            <span className="font-mono font-black text-sm" style={{ color: accentColor, fontFamily: 'Orbitron, monospace' }}>{project.title}</span>
          </div>
          <div className="mb-3">
            <p className="font-mono text-sm font-bold leading-tight mb-1" style={{ background: `linear-gradient(135deg, ${accentColor}, #a78bfa)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{project.tagline}</p>
            <p className="font-mono text-xs text-gray-400">{project.taglineSub}</p>
          </div>
          <div className="flex flex-col gap-2.5">
            {[
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" className="w-4 h-4 flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>, title: 'Conversion instantanée', desc: "Entre toutes les bases en un clin d'œil" },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" className="w-4 h-4 flex-shrink-0"><circle cx="12" cy="12" r="3" stroke={accentColor} strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M18.66 5.34l-1.41 1.41" /></svg>, title: 'Précision maximale', desc: 'Résultats fiables à chaque conversion' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" className="w-4 h-4 flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Historique intelligent', desc: 'Gardez la trace de vos conversions' },
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="mt-0.5">{f.icon}</div>
                <div>
                  <p className="font-mono text-xs font-bold" style={{ color: accentColor }}>{f.title}</p>
                  <p className="font-mono text-xs text-gray-600 leading-tight">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center pt-4 pb-2 pr-11" style={{ width: '55%', marginLeft: '10px' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 40%, ${accentColor}12, transparent 70%)` }} />
          <motion.div animate={{ y: ['-100%', '400%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 3 }} className="absolute left-0 right-0 h-px pointer-events-none opacity-20 z-10" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }} />
          <img src={project.image} alt={project.title} className="relative z-10 object-contain" style={{ height: '300px', width: 'auto', maxWidth: '190%', filter: `drop-shadow(0 0 30px ${accentColor}40) drop-shadow(0 0 8px ${accentColor}25)`, animation: 'floatPhone 8s ease-in-out infinite' }} />
          <div className="absolute top-1 right-3 z-20">
            <span className="font-mono text-xs px-2 py-1 rounded-sm flex items-center gap-1" style={{ background: 'rgba(1,6,38,0.85)', border: `1px solid ${accentColor}`, color: accentColor, backdropFilter: 'blur(8px)' }}>
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: accentColor }} />
              LIVE
            </span>
          </div>
        </div>
      </div>

      <CardBottom project={project} accentColor={accentColor} accentBg={accentBg} accentBorder={accentBorder} />
    </motion.div>
  )
}

// ============================================================
// CARTE AURORA IA — image gauche + vidéo droite
// ============================================================
const CardAurora = ({ project, index }) => {
  const accentColor = '#bf00ff'
  const accentBg = 'rgba(191,0,255,0.08)'
  const accentBorder = 'rgba(191,0,255,0.2)'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-project-id={project.id}
      className="relative overflow-hidden rounded-sm"
      style={{ background: 'transparent', transition: 'outline 0.2s, box-shadow 0.2s' }}
    >
      <div
        className="absolute inset-0 rounded-sm pointer-events-none z-20"
        style={{
          borderLeft: '1px solid transparent',
          borderRight: '1px solid transparent',
          borderBottom: `1px solid ${accentBorder}`,
          borderTop: 'none',
          maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 50%, black 75%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 50%, black 75%, black 100%)',
          boxShadow: `0 10px 40px ${accentBg}, 0 20px 60px ${accentBg}`,
        }}
      />

      <div className="relative flex items-stretch min-h-72">
        <div className="relative flex items-center justify-center pt-9 pb-2 pl-11" style={{ width: '80%', zIndex: 10 }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 40% 50%, ${accentColor}10, transparent 70%)` }} />
          <motion.div animate={{ y: ['-100%', '400%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 3 }} className="absolute left-0 right-0 h-px pointer-events-none opacity-20 z-10" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }} />
          <img src={project.image} alt={project.title} className="relative z-10 object-contain" style={{ height: '300px', width: 'auto', maxWidth: '190%', filter: `drop-shadow(0 0 30px ${accentColor}40) drop-shadow(0 0 8px ${accentColor}25)`, animation: 'floatPhone 8s ease-in-out infinite', marginRight: '-30px', position: 'relative', zIndex: 20 }} />
          <div className="absolute top-1 left-1 z-30">
            <span className="font-mono text-xs px-2 py-1 rounded-sm flex items-center gap-1" style={{ background: 'rgba(1,6,38,0.85)', border: `1px solid ${accentColor}`, color: accentColor, backdropFilter: 'blur(8px)' }}>
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: accentColor }} />
              PROD
            </span>
          </div>
        </div>
        <div className="relative flex items-center justify-center pt- pb-7 pr-10" style={{ width: '90%' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 50%, ${accentColor}08, transparent 70%)` }} />
          <div className="relative" style={{ height: '230px', width: 'auto' }}>
            <video src={project.video} autoPlay loop muted playsInline preload="auto" className="relative z-10 object-contain rounded-sm h-full w-auto" style={{ height: '250px', width: 'auto', maxWidth: '185%', display: 'block' }} />
            <div className="absolute inset-0 pointer-events-none z-20" style={{ maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)', background: 'transparent' }} />
            <div className="absolute inset-0 pointer-events-none z-20" style={{ background: `linear-gradient(to right, #010626 0%, transparent 25%, transparent 75%, #010626 100%), linear-gradient(to bottom, #010626 0%, transparent 20%, transparent 80%, #010626 100%)` }} />
          </div>
        </div>
      </div>

      <div className="px-5 pt-3 pb-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: accentBg, border: `1px solid ${accentBorder}` }}>
            <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          </div>
          <div>
            <span className="font-mono font-black text-sm block" style={{ color: accentColor, fontFamily: 'Orbitron, monospace' }}>{project.title}</span>
            <span className="font-mono text-xs text-gray-500">{project.taglineSub}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
          {(project.features || []).map((f, i) => (
            <div key={i} className="flex items-start gap-1.5">
              <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: accentColor, boxShadow: `0 0 4px ${accentColor}` }} />
              <p className="font-mono text-xs text-gray-600 leading-tight">{f}</p>
            </div>
          ))}
        </div>
      </div>

      <CardBottom project={project} accentColor={accentColor} accentBg={accentBg} accentBorder={accentBorder} />
    </motion.div>
  )
}

// ============================================================
// CARTE CANJIX — logo haut gauche + 3 téléphones au centre
// ============================================================
const CardCanjiX = ({ project, index }) => {
  const [showStores, setShowStores] = useState(false)

  const accentColor = '#F5A623'
  const accentBg = 'rgba(245,166,35,0.08)'
  const accentBorder = 'rgba(245,166,35,0.25)'

  const canjixFeatures = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" className="w-4 h-4 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
        </svg>
      ),
      text: 'Grande variété de produits',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" className="w-4 h-4 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
      text: 'Recherche simple et rapide',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" className="w-4 h-4 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      ),
      text: 'Achat direct in-app',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" className="w-4 h-4 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      text: 'Livraison géolocalisée',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-project-id={project.id}
      className="relative overflow-hidden rounded-sm"
      style={{ background: 'transparent', transition: 'outline 0.2s, box-shadow 0.2s' }}
    >
      {/* Bordures progressives jaune CanjiX */}
      <div
        className="absolute inset-0 rounded-sm pointer-events-none z-20"
        style={{
          borderLeft: '1px solid transparent',
          borderRight: '1px solid transparent',
          borderBottom: `1px solid ${accentBorder}`,
          borderTop: 'none',
          maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 50%, black 75%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 50%, black 75%, black 100%)',
          boxShadow: `0 10px 40px ${accentBg}, 0 20px 60px ${accentBg}`,
        }}
      />

      {/* Glow jaune de fond */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, rgba(245,166,35,0.12), transparent 30%)` }}
      />

      {/* PARTIE HAUTE */}
      <div className="relative min-h-80">

        {/* Logo CanjiX haut gauche */}
        <div className="absolute top-4 left-4 z-30">
          <img
            src="/images/canjixlogo.png"
            alt="CanjiX Logo"
            className="h-8 w-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 8px rgba(245,166,35,0.4))', width:'70px', height:'auto' }}
          />
        </div>

        {/* Status badge haut droite */}
        <div className="absolute top-1 right-3 z-30">
          <span
            className="font-mono text-xs px-2 py-1 rounded-sm flex items-center gap-1"
            style={{ background: 'rgba(1,6,38,0.85)', border: `1px solid ${accentColor}`, color: accentColor, backdropFilter: 'blur(8px)' }}
          >
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: accentColor }}
            />
            PROD
          </span>
        </div>

        {/* Image 3 téléphones centrée */}
        <div className="relative flex items-center justify-center px-1 pt-12 pb-11">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 80%, rgba(245,166,35,0.1), transparent 60%)` }}
          />
          <motion.div
            animate={{ y: ['-100%', '400%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
            className="absolute left-0 right-0 h-px pointer-events-none opacity-15 z-10"
            style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
          />
          <motion.img
            src="/images/canjix.png"
            alt="CanjiX App"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 object-contain w-full"
            style={{
              maxHeight: '250px',
              filter: `drop-shadow(0 10px 30px rgba(245,166,35,0.25)) drop-shadow(0 0 8px rgba(245,166,35,0.1))`,
            }}
          />
          {/* Masque fondu bas */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to bottom, transparent, #010626)' }}
          />
        </div>

        {/* Tagline */}
        <div className="text-center px-5 pb-3 relative z-10">
          <p className="font-mono text-sm font-bold" style={{ color: accentColor }}>
            Vos Produits, Du quotidien
          </p>
          <p className="font-mono text-xs text-gray-500 mt-0.5">
            Simplifiés avec CanjiX — Achetez mieux, plus vite.
          </p>
        </div>
      </div>

      {/* PARTIE BAS */}
      <div
        className="relative z-10 px-5 pb-5 pt-2 flex flex-col gap-4"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(1,6,38,0.2) 40%, rgba(1,6,38,0.45) 100%)' }}
      >
        {/* Description */}
        <p className="text-gray-400 text-xs leading-relaxed font-mono">
          Plateforme d'achat centralisée permettant aux consommateurs de trouver et d'acheter facilement les produits essentiels. Large sélection, recherche rapide, achat direct, expérience fluide.
        </p>

        {/* Features avec icônes SVG */}
        <div className="grid grid-cols-2 gap-2">
          {canjixFeatures.map((f, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="mt-0.5 flex-shrink-0">{f.icon}</div>
              <p className="font-mono text-xs text-gray-500 leading-tight">{f.text}</p>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {['Flutter', 'Dart', 'Node.js', 'Firebase', 'MySQL'].map((item, i) => {
            const tc = techColors[item] || { bg: accentBg, color: accentColor, border: accentBorder }
            return (
              <span key={i} className="font-mono text-xs px-2 py-1 rounded-sm font-semibold" style={{ background: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}>
                {item}
              </span>
            )
          })}
        </div>

        {/* Meta */}
        <div className="grid grid-cols-3 gap-2">
          {[
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
              value: '6 mois app / 3 sem web', label: 'Durée',
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
              value: 'Maxime & Malik', label: 'Équipe',
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
              value: 'IA 50%', label: 'IA utilisée',
            },
          ].map((m, i) => (
            <div key={i} className="flex flex-col items-center gap-1 py-2 px-1 rounded-sm" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              {m.icon}
              <span className="font-mono text-xs text-gray-400 text-center leading-tight">{m.value}</span>
              <span className="font-mono text-xs text-gray-700 text-center">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Détail IA */}
        <div className="rounded-sm px-3 py-3" style={{ background: 'rgba(191,0,255,0.04)', border: '1px solid rgba(191,0,255,0.12)' }}>
          <div className="flex items-center gap-2 mb-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="#bf00ff" strokeWidth="1.5" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            <p className="font-mono text-xs text-violet-400">Intervention IA</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-gray-500 w-16 flex-shrink-0">Claude</span>
            <div className="flex-1 h-1 bg-gray-900 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '50%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #7c3aed, #bf00ff)', boxShadow: '0 0 6px rgba(191,0,255,0.5)' }}
              />
            </div>
            <span className="font-mono text-xs text-violet-400 w-8 text-right">50%</span>
          </div>
        </div>

        {/* Boutons */}
        <div className="flex flex-col gap-2">
          {/* Bouton site web */}
          <a
            href="https://www.canjix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 font-mono text-sm py-3 rounded-sm transition-all duration-300 relative overflow-hidden"
            style={{ background: accentBg, border: `1px solid ${accentBorder}`, color: accentColor }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(245,166,35,0.15)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(245,166,35,0.25)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = accentBg; e.currentTarget.style.boxShadow = 'none' }}
          >
            <motion.span animate={{ x: ['-100%', '200%'] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }} className="absolute inset-y-0 w-8 opacity-10 pointer-events-none" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }} />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 relative z-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
            </svg>
            <span className="relative z-10 font-bold">Visiter le site web</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 relative z-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>

          {/* Bouton voir l'application */}
          <div className="relative">
            <button
              onClick={() => setShowStores(!showStores)}
              className="w-full flex items-center justify-center gap-2 font-mono text-sm py-3 rounded-sm transition-all duration-300"
              style={{ background: 'rgba(26,35,126,0.2)', border: '1px solid rgba(26,35,126,0.5)', color: '#7986cb' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(26,35,126,0.3)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(26,35,126,0.3)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(26,35,126,0.2)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3" />
              </svg>
              <span className="font-bold">Voir l'application</span>
              <motion.svg animate={{ rotate: showStores ? 180 : 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </motion.svg>
            </button>

            {/* Mini onglet stores */}
            <AnimatePresence>
              {showStores && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-0 right-0 mb-2 rounded-sm overflow-hidden z-50"
                  style={{ background: 'rgba(1,6,38,0.98)', border: '1px solid rgba(245,166,35,0.2)', boxShadow: '0 -10px 40px rgba(0,0,0,0.5)', backdropFilter: 'blur(20px)' }}
                >
                  <p className="font-mono text-xs text-gray-600 text-center pt-3 pb-2 tracking-widest uppercase">
                    Choisir la plateforme
                  </p>
                  <div className="flex border-t border-gray-900">
                    {/* App Store */}
                    <a
                      href="https://apps.apple.com/app/canjix/id123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex flex-col items-center gap-2 py-4 px-3 transition-all duration-200 group"
                      style={{ borderRight: '1px solid rgba(255,255,255,0.05)' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1a73e8, #0d47a1)', boxShadow: '0 4px 15px rgba(26,115,232,0.3)' }}>
                        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                      </div>
                      <span className="font-mono text-xs text-gray-400 group-hover:text-white transition-colors">App Store</span>
                    </a>



                   {/* Play Store */}
<a
  href="https://play.google.com/store/apps/details?id=com.canjix.dev"
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 flex flex-col items-center gap-2 py-4 px-3 transition-all duration-200 group"
  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
>
  <div
    className="w-12 h-12 rounded-xl flex items-center justify-center"
    style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)', boxShadow: '0 4px 15px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)' }}
  >
    <svg viewBox="0 0 512 512" className="w-8 h-8">
      <defs>
        <linearGradient id="gp-grad-1" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00C853"/>
          <stop offset="100%" stopColor="#69F0AE"/>
        </linearGradient>
        <linearGradient id="gp-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#448AFF"/>
          <stop offset="100%" stopColor="#00B0FF"/>
        </linearGradient>
        <linearGradient id="gp-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6D00"/>
          <stop offset="100%" stopColor="#FFAB40"/>
        </linearGradient>
        <linearGradient id="gp-grad-4" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D50000"/>
          <stop offset="100%" stopColor="#FF5252"/>
        </linearGradient>
      </defs>
      {/* Triangle gauche bas — vert */}
      <path d="M64 64 L64 448 L288 256 Z" fill="url(#gp-grad-1)"/>
      {/* Triangle haut — bleu */}
      <path d="M64 64 L288 256 L368 176 L160 48 Z" fill="url(#gp-grad-2)"/>
      {/* Triangle bas — orange */}
      <path d="M64 448 L288 256 L368 336 L160 464 Z" fill="url(#gp-grad-3)"/>
      {/* Triangle droit — rouge */}
      <path d="M288 256 L368 176 L448 256 L368 336 Z" fill="url(#gp-grad-4)"/>
    </svg>
  </div>
  <span className="font-mono text-xs text-gray-400 group-hover:text-white transition-colors">Play Store</span>
</a>


                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


// ============================================================
// CARTE RESTOREX — logo haut gauche + 3 téléphones au centre
// ============================================================
const CardRestoreX = ({ project, index }) => {
  const accentColor = '#FF5722'
  const accentBg = 'rgba(255,87,34,0.08)'
  const accentBorder = 'rgba(255,87,34,0.25)'
  const accentSecondary = '#FF8A50'

  const restoreFeatures = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" className="w-4 h-4 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ),
      text: "Achat & vente d'objets d'occasion",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" className="w-4 h-4 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      text: 'Transactions sécurisées',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" className="w-4 h-4 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      text: 'Marché local togolais',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" className="w-4 h-4 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      text: 'Sans intermédiaire',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-project-id={project.id}
      className="relative overflow-hidden rounded-sm"
      style={{ background: 'transparent', transition: 'outline 0.2s, box-shadow 0.2s' }}
    >
      {/* Bordures progressives orange RestoreX */}
      <div
        className="absolute inset-0 rounded-sm pointer-events-none z-20"
        style={{
          borderLeft: '1px solid transparent',
          borderRight: '1px solid transparent',
          borderBottom: `1px solid ${accentBorder}`,
          borderTop: 'none',
          maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 50%, black 75%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 50%, black 75%, black 100%)',
          boxShadow: `0 10px 40px ${accentBg}, 0 20px 60px ${accentBg}`,
        }}
      />

      {/* Glow orange de fond */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, rgba(255,87,34,0.12), transparent 50%)` }}
      />

      {/* PARTIE HAUTE */}
      <div className="relative min-h-80">

        {/* Logo RestoreX haut gauche */}
        <div className="absolute top-1 left-2 z-30">
          <img
            src="/images/restorexlogo.png"
            alt="RestoreX Logo"
            className="h-8 w-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 8px rgba(255,87,34,0.5))', width:'100px', height:'auto' }}
          />
        </div>

        {/* Status badge haut droite */}
        <div className="absolute top-1 right-3 z-30">
          <span
            className="font-mono text-xs px-2 py-1 rounded-sm flex items-center gap-1"
            style={{
              background: 'rgba(1,6,38,0.85)',
              border: `1px solid rgba(255,87,34,0.5)`,
              color: accentColor,
              backdropFilter: 'blur(8px)',
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            EN DEV
          </span>
        </div>

        {/* Image 3 téléphones centrée */}
        <div className="relative flex items-center justify-center px-2 pt-14 pb-2">
          {/* Glow derrière les téléphones */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 60%, rgba(255,87,34,0.08), transparent 65%)` }}
          />

          {/* Scan line */}
          <motion.div
            animate={{ y: ['-100%', '400%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
            className="absolute left-0 right-0 h-px pointer-events-none opacity-15 z-10"
            style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
          />

          <motion.img
            src="/images/restorex.png"
            alt="RestoreX App"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 object-contain w-full"
            style={{
              maxHeight: '260px',
              filter: `drop-shadow(0 10px 30px rgba(255,87,34,0.2)) drop-shadow(0 0 8px rgba(255,87,34,0.1))`,
            }}
          />

          {/* Masque fondu bas */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to bottom, transparent, #010626)' }}
          />
        </div>

        {/* Tagline */}
        <div className="text-center px-5 pb-3 relative z-10">
          <p className="font-mono text-sm font-bold" style={{ color: accentColor }}>
            Le marketplace qui redonne vie
          </p>
          <p className="font-mono text-xs text-gray-500 mt-0.5">
            aux objets togolais — Achetez & vendez d'occasion
          </p>
        </div>
      </div>

      {/* PARTIE BAS */}
      <div
        className="relative z-10 px-5 pb-5 pt-2 flex flex-col gap-4"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(1,6,38,0.2) 40%, rgba(1,6,38,0.45) 100%)' }}
      >
        {/* Description */}
        <p className="text-gray-400 text-xs leading-relaxed font-mono">
          Marketplace togolais permettant à chaque particulier d'acheter et de vendre des objets d'occasion facilement, en toute confiance et sans intermédiaire. Né à Lomé, pour les Togolais.
        </p>

      

        {/* Features avec icônes SVG */}
        <div className="grid grid-cols-2 gap-2">
          {restoreFeatures.map((f, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="mt-0.5 flex-shrink-0">{f.icon}</div>
              <p className="font-mono text-xs text-gray-500 leading-tight">{f.text}</p>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {['React Native', 'TypeScript', 'Node.js', 'MySQL', 'Tailwind CSS', 'CSS'].map((item, i) => {
            const tc = techColors[item] || { bg: accentBg, color: accentColor, border: accentBorder }
            return (
              <span key={i} className="font-mono text-xs px-2 py-1 rounded-sm font-semibold" style={{ background: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}>
                {item}
              </span>
            )
          })}
        </div>

        {/* Meta */}
        <div className="grid grid-cols-3 gap-2">
          {[
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
              value: '3 semaines', label: 'Durée',
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
              value: 'Maxime & Sonia', label: 'Équipe',
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
              value: 'IA 60%', label: 'IA utilisée',
            },
          ].map((m, i) => (
            <div key={i} className="flex flex-col items-center gap-1 py-2 px-1 rounded-sm" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              {m.icon}
              <span className="font-mono text-xs text-gray-400 text-center leading-tight">{m.value}</span>
              <span className="font-mono text-xs text-gray-700 text-center">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Détail IA */}
        <div className="rounded-sm px-3 py-3" style={{ background: 'rgba(191,0,255,0.04)', border: '1px solid rgba(191,0,255,0.12)' }}>
          <div className="flex items-center gap-2 mb-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="#bf00ff" strokeWidth="1.5" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            <p className="font-mono text-xs text-violet-400">Intervention IA</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-gray-500 w-16 flex-shrink-0">Claude</span>
            <div className="flex-1 h-1 bg-gray-900 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #7c3aed, #bf00ff)', boxShadow: '0 0 6px rgba(191,0,255,0.5)' }}
              />
            </div>
            <span className="font-mono text-xs text-violet-400 w-8 text-right">60%</span>
          </div>
        </div>

        {/* Bouton Bientôt disponible */}
        <div
          className="w-full flex items-center justify-center gap-2 font-mono text-sm py-3 rounded-sm"
          style={{
            background: 'rgba(255,87,34,0.05)',
            border: '1px dashed rgba(255,87,34,0.3)',
            color: 'rgba(255,87,34,0.5)',
            cursor: 'default',
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-bold">Bientôt disponible</span>
        </div>
      </div>
    </motion.div>
  )
}

// ============================================================
// CARTE TIKIRIX — logo haut gauche + 3 téléphones au centre
// ============================================================
const CardTikiRix = ({ project, index }) => {
  const accentColor = '#A855F7'
  const accentSecondary = '#EC4899'
  const accentBg = 'rgba(168,85,247,0.08)'
  const accentBorder = 'rgba(168,85,247,0.25)'

  const tikiFeatures = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" className="w-4 h-4 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
      text: 'Découverte des meilleurs événements',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke={accentSecondary} strokeWidth="1.5" className="w-4 h-4 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      ),
      text: 'Paiement sécurisé 0% commission',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" className="w-4 h-4 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75z" />
        </svg>
      ),
      text: 'Scan de billets intégré',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke={accentSecondary} strokeWidth="1.5" className="w-4 h-4 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      text: 'Organisateurs & participants',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-project-id={project.id}
      className="relative overflow-hidden rounded-sm"
      style={{ background: 'transparent', transition: 'outline 0.2s, box-shadow 0.2s' }}
    >
      {/* Bordures progressives violet TikiRix */}
      <div
        className="absolute inset-0 rounded-sm pointer-events-none z-20"
        style={{
          borderLeft: '1px solid transparent',
          borderRight: '1px solid transparent',
          borderBottom: `1px solid ${accentBorder}`,
          borderTop: 'none',
          maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 50%, black 75%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 50%, black 75%, black 100%)',
          boxShadow: `0 10px 40px ${accentBg}, 0 20px 60px ${accentBg}`,
        }}
      />

      {/* Glow violet/pink de fond */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-36 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.15), rgba(236,72,153,0.08), transparent 70%)` }}
      />

      {/* PARTIE HAUTE */}
      <div className="relative min-h-80">

        {/* Logo TikiRix haut gauche */}
        <div className="absolute top-1 left-2 z-30">
          <img
            src="/images/tikirixlogo.png"
            alt="TikiRix Logo"
            className="h-8 w-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 8px rgba(168,85,247,0.5))' , width:'100px', height:'auto' }}
          />
        </div>

        {/* Status badge haut droite */}
        <div className="absolute top-1 right-3 z-30">
          <span
            className="font-mono text-xs px-2 py-1 rounded-sm flex items-center gap-1"
            style={{
              background: 'rgba(1,6,38,0.85)',
              border: `1px solid rgba(168,85,247,0.5)`,
              color: accentColor,
              backdropFilter: 'blur(8px)',
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            EN DEV
          </span>
        </div>

        {/* Image 3 téléphones centrée */}
        <div className="relative flex items-center justify-center px-2 pt-14 pb-2">
          {/* Glow violet/pink derrière */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 60%, rgba(168,85,247,0.1), rgba(236,72,153,0.05), transparent 65%)` }}
          />

          {/* Scan line */}
          <motion.div
            animate={{ y: ['-100%', '400%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
            className="absolute left-0 right-0 h-px pointer-events-none opacity-15 z-10"
            style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, ${accentSecondary}, transparent)` }}
          />

          <motion.img
            src="/images/tikirix.png"
            alt="TikiRix App"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 object-contain w-full"
            style={{
              maxHeight: '260px',
              filter: `drop-shadow(0 10px 30px rgba(168,85,247,0.25)) drop-shadow(0 0 8px rgba(236,72,153,0.15))`,
            }}
          />

          {/* Masque fondu bas */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to bottom, transparent, #010626)' }}
          />
        </div>

        {/* Tagline */}
        <div className="text-center px-5 pb-3 relative z-10">
          <p
            className="font-mono text-sm font-bold"
            style={{
              background: `linear-gradient(90deg, ${accentColor}, ${accentSecondary})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Les meilleurs événements au Togo
          </p>
          <p className="font-mono text-xs text-gray-500 mt-0.5">
            Achetez vos billets en toute sécurité — 0% de commission
          </p>
        </div>
      </div>

      {/* PARTIE BAS */}
      <div
        className="relative z-10 px-5 pb-5 pt-2 flex flex-col gap-4"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(1,6,38,0.2) 40%, rgba(1,6,38,0.45) 100%)' }}
      >
        {/* Description */}
        <p className="text-gray-400 text-xs leading-relaxed font-mono">
          Plateforme togolaise de billetterie événementielle. Découvrez, achetez et gérez vos billets en toute simplicité. Paiement direct à l'organisateur, zéro commission, sécurité maximale.
        </p>


        {/* Features avec icônes SVG */}
        <div className="grid grid-cols-2 gap-2">
          {tikiFeatures.map((f, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="mt-0.5 flex-shrink-0">{f.icon}</div>
              <p className="font-mono text-xs text-gray-500 leading-tight">{f.text}</p>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {['React Native', 'TypeScript', 'Node.js', 'MySQL', 'Tailwind CSS'].map((item, i) => {
            const tc = techColors[item] || { bg: accentBg, color: accentColor, border: accentBorder }
            return (
              <span key={i} className="font-mono text-xs px-2 py-1 rounded-sm font-semibold" style={{ background: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}>
                {item}
              </span>
            )
          })}
        </div>

        {/* Meta */}
        <div className="grid grid-cols-3 gap-2">
          {[
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
              value: '5 semaines', label: 'Durée',
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
              value: 'Maxime & Ramzia', label: 'Équipe',
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
              value: 'IA 60%', label: 'IA utilisée',
            },
          ].map((m, i) => (
            <div key={i} className="flex flex-col items-center gap-1 py-2 px-1 rounded-sm" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              {m.icon}
              <span className="font-mono text-xs text-gray-400 text-center leading-tight">{m.value}</span>
              <span className="font-mono text-xs text-gray-700 text-center">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Détail IA */}
        <div className="rounded-sm px-3 py-3" style={{ background: 'rgba(168,85,247,0.04)', border: '1px solid rgba(168,85,247,0.12)' }}>
          <div className="flex items-center gap-2 mb-2">
            <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            <p className="font-mono text-xs" style={{ color: accentColor }}>Intervention IA</p>
          </div>
          <div className="flex flex-col gap-2">
            {[
              { name: 'Claude', percent: 40, color: accentColor },
              { name: 'ChatGPT', percent: 20, color: accentSecondary },
            ].map((ai, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="font-mono text-xs text-gray-500 w-16 flex-shrink-0">{ai.name}</span>
                <div className="flex-1 h-1 bg-gray-900 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${ai.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                    className="h-full rounded-full"
                    style={{
                      background: i === 0
                        ? `linear-gradient(90deg, #7c3aed, ${accentColor})`
                        : `linear-gradient(90deg, ${accentColor}, ${accentSecondary})`,
                      boxShadow: `0 0 6px ${ai.color}50`,
                    }}
                  />
                </div>
                <span className="font-mono text-xs w-8 text-right" style={{ color: ai.color }}>{ai.percent}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton portfolio Ramzia */}
        <a
          href="https://ramzia-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 font-mono text-xs py-2.5 rounded-sm transition-all duration-300"
          style={{
            background: 'rgba(168,85,247,0.05)',
            border: '1px solid rgba(168,85,247,0.2)',
            color: '#9ca3af',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(168,85,247,0.1)'
            e.currentTarget.style.color = accentColor
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(168,85,247,0.05)'
            e.currentTarget.style.color = '#9ca3af'
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          Voir le portfolio de Ramzia ↗
        </a>

        {/* Bouton Bientôt disponible */}
        <div
          className="w-full flex items-center justify-center gap-2 font-mono text-sm py-3 rounded-sm"
          style={{
            background: 'rgba(168,85,247,0.05)',
            border: '1px dashed rgba(168,85,247,0.3)',
            color: 'rgba(168,85,247,0.5)',
            cursor: 'default',
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-bold">Bientôt disponible</span>
        </div>
      </div>
    </motion.div>
  )
}

// ============================================================
// CARTE PORTFOLIO V1
// ============================================================
const CardPortfolioV1 = ({ project, index }) => {
  const [showComparison, setShowComparison] = useState(false)

  const accentColor = '#8491D9'
  const accentSecondary = '#021373'
  const accentBg = 'rgba(132,145,217,0.08)'
  const accentBorder = 'rgba(132,145,217,0.25)'

  const comparisonPoints = [
    {
      category: 'Stack',
      v1: 'HTML / CSS / JavaScript vanilla',
      v2: 'React + Vite + Tailwind CSS + Framer Motion',
      winner: 'v2',
    },
    {
      category: 'Design',
      v1: 'Bleu marine classique, badges simples, animations CSS basiques',
      v2: 'Cyberpunk dark, néon cyan/violet, particules animées, glassmorphism',
      winner: 'v2',
    },
    {
      category: 'Animations',
      v1: 'Scroll reveal CSS, transitions simples',
      v2: 'Framer Motion avancé, GlitchText, loader futuriste, micro-interactions',
      winner: 'v2',
    },
    {
      category: 'Structure',
      v1: 'Page unique — Hero, À propos, Compétences, Projets, Contact',
      v2: '3 parties — Développement, Sécurité Informatique, IA & Prompts',
      winner: 'v2',
    },
    {
      category: 'Projets',
      v1: '3 projets simples avec cards basiques',
      v2: 'Cartes premium avec images, vidéos, stats IA, stores, comparaisons',
      winner: 'v2',
    },
    {
      category: 'Performance',
      v1: 'Chargement immédiat, pas de bundler',
      v2: 'Build Vite optimisé, lazy loading, code splitting',
      winner: 'v2',
    },
    {
      category: 'Mobile',
      v1: 'Responsive basique avec media queries',
      v2: 'Mobile-first, Tailwind responsive, menu hamburger animé',
      winner: 'v2',
    },
    {
      category: 'Temps de dev',
      v1: '72 heures',
      v2: 'En cours — évolutif',
      winner: 'v1',
    },
  ]

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        data-project-id={project.id}
        className="relative overflow-hidden rounded-sm"
        style={{ background: 'transparent', transition: 'outline 0.2s, box-shadow 0.2s' }}
      >
        {/* Bordures progressives */}
        <div
          className="absolute inset-0 rounded-sm pointer-events-none z-20"
          style={{
            borderLeft: '1px solid transparent',
            borderRight: '1px solid transparent',
            borderBottom: `1px solid ${accentBorder}`,
            borderTop: 'none',
            maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 50%, black 75%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 50%, black 75%, black 100%)',
            boxShadow: `0 10px 40px ${accentBg}, 0 20px 60px ${accentBg}`,
          }}
        />

        {/* Glow bleu de fond */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 0%, rgba(132,145,217,0.15), transparent 70%)` }}
        />

        {/* PARTIE HAUTE : Vidéo plein haut */}
        <div className="relative overflow-hidden" style={{ height: '220px' }}>
          {/* Status badge */}
          <div className="absolute top-0.1 left-1 z-20">
            <span
              className="font-mono text-xs px-2 py-1 rounded-sm flex items-center gap-1"
              style={{ background: 'rgba(1,6,38,0.85)', border: `1px solid ${accentColor}`, color: accentColor, backdropFilter: 'blur(8px)' }}
            >
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: accentColor }} />
              LIVE
            </span>
          </div>

          {/* Badge V1 */}
          <div className="absolute top-0.1 right-3 z-20">
            <span
              className="font-mono text-xs px-2 py-1 rounded-sm font-black"
              style={{ background: 'rgba(132,145,217,0.2)', border: `1px solid ${accentColor}`, color: accentColor, backdropFilter: 'blur(8px)', fontFamily: 'Orbitron, monospace' }}
            >
              V1
            </span>
          </div>

          {/* Vidéo */}
          <video
            src="/videos/portfoliov1.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />

          {/* Overlay gradient bas */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent 50%, #010626 100%)' }}
          />

          {/* Scan line */}
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
            className="absolute left-0 right-0 h-px pointer-events-none opacity-20 z-10"
            style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
          />
        </div>

        {/* PARTIE BAS */}
        <div
          className="relative z-10 px-5 pb-5 pt-3 flex flex-col gap-4"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(1,6,38,0.2) 40%, rgba(1,6,38,0.45) 100%)' }}
        >
          {/* Titre */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: accentBg, border: `1px solid ${accentBorder}` }}>
              <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
              </svg>
            </div>
            <div>
              <span className="font-mono font-black text-sm block" style={{ color: accentColor, fontFamily: 'Orbitron, monospace' }}>
                Portfolio V1-2024
              </span>
              <span className="font-mono text-xs text-gray-500">La première version — HTML/CSS/JS</span>
            </div>
          </div>

          {/* Description courte */}
          <p className="text-gray-400 text-xs leading-relaxed font-mono">
            Premier portfolio personnel conçu en 72h avec HTML/CSS/JS vanilla. Design bleu marine, animations CSS, menu hamburger et scroll reveal. La base qui a tout lancé.
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {['HTML5', 'CSS3', 'JavaScript'].map((item, i) => {
              const tc = techColors[item] || { bg: accentBg, color: accentColor, border: accentBorder }
              return (
                <span key={i} className="font-mono text-xs px-2 py-1 rounded-sm font-semibold" style={{ background: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}>
                  {item}
                </span>
              )
            })}
          </div>

          {/* Meta */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, value: '72 heures', label: 'Durée' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>, value: 'Solo', label: 'Équipe' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>, value: 'IA 15%', label: 'IA utilisée' },
            ].map((m, i) => (
              <div key={i} className="flex flex-col items-center gap-1 py-2 px-1 rounded-sm" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                {m.icon}
                <span className="font-mono text-xs text-gray-400 text-center leading-tight">{m.value}</span>
                <span className="font-mono text-xs text-gray-700 text-center">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Détail IA */}
          <div className="rounded-sm px-3 py-3" style={{ background: 'rgba(132,145,217,0.04)', border: '1px solid rgba(132,145,217,0.12)' }}>
            <div className="flex items-center gap-2 mb-2">
              <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              <p className="font-mono text-xs" style={{ color: accentColor }}>Intervention IA</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-gray-500 w-16 flex-shrink-0">ChatGPT</span>
              <div className="flex-1 h-1 bg-gray-900 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '15%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, #021373, ${accentColor})`, boxShadow: `0 0 6px ${accentColor}50` }}
                />
              </div>
              <span className="font-mono text-xs w-8 text-right" style={{ color: accentColor }}>15%</span>
            </div>
          </div>

          {/* Boutons */}
          <div className="flex flex-col gap-2">
            {/* Voir le site */}
            <a
              href="https://maximeportfiliov1.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 font-mono text-sm py-3 rounded-sm transition-all duration-300 relative overflow-hidden"
              style={{ background: accentBg, border: `1px solid ${accentBorder}`, color: accentColor }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(132,145,217,0.15)'; e.currentTarget.style.boxShadow = `0 0 20px rgba(132,145,217,0.25)` }}
              onMouseLeave={(e) => { e.currentTarget.style.background = accentBg; e.currentTarget.style.boxShadow = 'none' }}
            >
              <motion.span animate={{ x: ['-100%', '200%'] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }} className="absolute inset-y-0 w-8 opacity-10 pointer-events-none" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }} />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 relative z-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="relative z-10 font-bold">Voir le portfolio V1</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 relative z-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>

            {/* Bouton comparaison */}
            <button
              onClick={() => setShowComparison(true)}
              className="w-full flex items-center justify-center gap-2 font-mono text-sm py-3 rounded-sm transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(132,145,217,0.1), rgba(2,19,115,0.1))',
                border: '1px solid rgba(132,145,217,0.3)',
                color: accentColor,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, rgba(132,145,217,0.2), rgba(2,19,115,0.2))'; e.currentTarget.style.boxShadow = `0 0 20px rgba(132,145,217,0.2)` }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, rgba(132,145,217,0.1), rgba(2,19,115,0.1))'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
              <span className="font-bold">Comparaison V1 vs V2</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>

      {/* === MODAL COMPARAISON === */}
<AnimatePresence>
  {showComparison && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(1,6,38,0.97)', backdropFilter: 'blur(16px)' }}
      onClick={() => setShowComparison(false)}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 30 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-sm"
        style={{
          border: '1px solid transparent',
          background: 'linear-gradient(#010626, #010626) padding-box, linear-gradient(135deg, rgba(132,145,217,0.4), rgba(0,255,245,0.2), rgba(191,0,255,0.2)) border-box',
          boxShadow: '0 0 80px rgba(132,145,217,0.1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
       {/* Header */}
<div
  className="flex items-center justify-between px-4 py-12 sticky top-0 z-10"
  style={{
    background: 'rgba(1,6,38,0.98)',
    borderBottom: '2px solid rgba(132,145,217,0.15)',
    backdropFilter: 'blur(20px)',
    minHeight: '56px',
  }}
>
  
  {/* Bouton retour */}
  <motion.button
    whileHover={{ scale: 1.05, x: -3 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => setShowComparison(false)}
    className="flex items-center gap-2 font-mono text-xs transition-all duration-200 flex-shrink-0"
    style={{ color: '#6b7280' }}
    onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
    onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
    <span className="hidden sm:inline">Retour</span>
  </motion.button>

  {/* Titre centré */}
  <div className="flex items-center gap-2 mx-2">
    <span
      className="font-mono font-black text-xs px-2 py-1 rounded-sm"
      style={{ background: 'rgba(132,145,217,0.15)', color: accentColor, border: `2px solid ${accentBorder}`, fontFamily: 'Orbitron, monospace' }}
    >
      V1
    </span>
    <svg viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="1.5" className="w-3 h-3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
    <span
      className="font-mono font-black text-xs px-2 py-1 rounded-sm"
      style={{ background: 'rgba(0,255,245,0.08)', color: '#00fff5', border: '2px solid rgba(0,255,245,0.25)', fontFamily: 'Orbitron, monospace' }}
    >
      V2
    </span>
  </div>

  {/* Fermer */}
  <motion.button
    whileHover={{ scale: 1.1, rotate: 90 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => setShowComparison(false)}
    className="flex-shrink-0 p-1.5 rounded-sm transition-colors"
    style={{ color: '#6b7280', border: '0.5px solid rgba(255,255,255,0.08)' }}
    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
    onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </motion.button>
</div>

       {/* Colonnes labels */}
<div
  className="grid grid-cols-7 px-9 py-8 sticky z-10"
  style={{
    top: '56px',
    background: 'rgba(1,6,38,0.96)',
    borderBottom: '2px solid rgba(255,255,255,0.04)',
    backdropFilter: 'blur(20px)',
  }}
>
  <div className="col-span-1 font-mono text-xs text-gray-700 uppercase tracking-widest flex items-center text-center" style={{ fontSize: '10px' }}>
    <span className="hidden sm:inline">Critère</span>
  </div>
  <div className="col-span-3 flex items-center justify-center gap-1">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-3.5 h-3.5" alt="HTML" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-3.5 h-3.5" alt="CSS" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-3.5 h-3.5" alt="JS" />
    <span className="font-mono text-xs font-black ml-1" style={{ color: accentColor, fontFamily: 'Orbitron, monospace' }}>V1</span>
  </div>
  <div className="col-span-3 flex items-center justify-center gap-1">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-3.5 h-3.5" alt="React" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" className="w-3.5 h-3.5" alt="Tailwind" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" className="w-3.5 h-3.5" alt="Vite" />
    <span className="font-mono text-xs font-black ml-1" style={{ color: '#00fff5', fontFamily: 'Orbitron, monospace' }}>V2</span>
  </div>
</div>

        {/* Lignes de comparaison */}
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(80vh - 110px)', background: 'rgba(1,6,38,0.98)' }}>
          {[
            {
              category: 'Stack',
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>,
              v1: { text: 'HTML / CSS / JS vanilla', icons: ['html5', 'css3', 'javascript'] },
              v2: { text: 'React + Vite + Tailwind + Framer Motion', icons: ['react', 'vitejs', 'tailwindcss'] },
              winner: 'v2',
            },
            {
              category: 'Design',
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>,
              v1: { text: 'Bleu marine classique, animations CSS simples', icons: [] },
              v2: { text: 'Cyberpunk, néon cyan/violet, glassmorphism', icons: [] },
              winner: 'v2',
            },
            {
              category: 'Animations',
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
              v1: { text: 'Scroll reveal CSS, transitions basiques', icons: [] },
              v2: { text: 'Framer Motion, GlitchText, loader futuriste', icons: [] },
              winner: 'v2',
            },
            {
              category: 'Structure',
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>,
              v1: { text: '1 page — Hero, À propos, Skills, Projets, Contact', icons: [] },
              v2: { text: '3 parties — Dev, Sécurité, IA & Prompts', icons: [] },
              winner: 'v2',
            },
            {
              category: 'Projets',
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>,
              v1: { text: '3 projets avec cards simples', icons: [] },
              v2: { text: 'Cards premium — images, vidéos, stats IA, stores', icons: [] },
              winner: 'v2',
            },
            {
              category: 'Mobile',
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3" /></svg>,
              v1: { text: 'Responsive media queries basiques', icons: [] },
              v2: { text: 'Mobile-first Tailwind, hamburger animé', icons: [] },
              winner: 'v2',
            },
            {
              category: 'SEO',
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
              v1: { text: 'Meta basiques HTML', icons: [] },
              v2: { text: 'Meta complets, OG tags, description optimisée', icons: [] },
              winner: 'v2',
            },
            {
              category: 'Vitesse dev',
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
              v1: { text: '72 heures — ultra rapide', icons: [] },
              v2: { text: 'En cours — évolutif et scalable', icons: [] },
              winner: 'v1',
            },
          ].map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04 }}
              className="grid grid-cols-7 gap-3 px-6 py-4 group"
              style={{ borderBottom: '3px solid rgba(255,255,255,0.03)' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.01)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              {/* Critère */}
              <div className="col-span-1 flex items-center gap-2">
                {point.icon}
                <span className="font-mono text-xs text-gray-600">{point.category}</span>
              </div>

              {/* V1 */}
              <div
                className="col-span-3 rounded-sm p-3 relative flex flex-col gap-2"
                style={{
                  background: point.winner === 'v1' ? 'rgba(132,145,217,0.08)' : 'rgba(255,255,255,0.02)',
                  border: point.winner === 'v1' ? `1px solid rgba(132,145,217,0.3)` : '1px solid rgba(255,255,255,0.04)',
                }}
              >
                {/* Icônes techno */}
                {point.v1.icons.length > 0 && (
                  <div className="flex gap-1.5">
                    {point.v1.icons.map((ic, j) => (
                      <img
                        key={j}
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${ic}/${ic}-original.svg`}
                        alt={ic}
                        className="w-4 h-4 object-contain"
                        onError={(e) => e.target.style.display = 'none'}
                      />
                    ))}
                  </div>
                )}
                <p className="font-mono text-xs leading-relaxed" style={{ color: point.winner === 'v1' ? '#e2e8ff' : '#6b7280' }}>
                  {point.v1.text}
                </p>
                {point.winner === 'v1' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: accentColor, boxShadow: `0 0 8px ${accentColor}` }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#010626" strokeWidth="3" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </motion.div>
                )}
              </div>

              {/* V2 */}
              <div
                className="col-span-3 rounded-sm p-3 relative flex flex-col gap-2"
                style={{
                  background: point.winner === 'v2' ? 'rgba(0,255,245,0.05)' : 'rgba(255,255,255,0.02)',
                  border: point.winner === 'v2' ? '1px solid rgba(0,255,245,0.2)' : '1px solid rgba(255,255,255,0.04)',
                }}
              >
                {point.v2.icons.length > 0 && (
                  <div className="flex gap-1.5">
                    {point.v2.icons.map((ic, j) => (
                      <img
                        key={j}
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${ic}/${ic}-original.svg`}
                        alt={ic}
                        className="w-4 h-4 object-contain"
                        onError={(e) => e.target.style.display = 'none'}
                      />
                    ))}
                  </div>
                )}
                <p className="font-mono text-xs leading-relaxed" style={{ color: point.winner === 'v2' ? '#e2e8ff' : '#6b7280' }}>
                  {point.v2.text}
                </p>
                {point.winner === 'v2' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: '#00fff5', boxShadow: '0 0 8px #00fff5' }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#010626" strokeWidth="3" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Score final */}
          <div className="px-6 py-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="font-mono text-xs text-gray-700 text-center mb-4 tracking-widest uppercase">Score final</p>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="rounded-sm p-4 text-center relative overflow-hidden"
                style={{ background: 'rgba(132,145,217,0.06)', border: `1px solid ${accentBorder}` }}
              >
                <p className="font-mono text-xs text-gray-600 mb-2 tracking-widest">PORTFOLIO V1</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-5 h-5" alt="HTML" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-5 h-5" alt="CSS" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-5 h-5" alt="JS" />
                </div>
                <p className="font-mono font-black text-4xl" style={{ color: accentColor, fontFamily: 'Orbitron, monospace' }}>1</p>
                <p className="font-mono text-xs text-gray-700 mt-1">victoire</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="rounded-sm p-4 text-center relative overflow-hidden"
                style={{
                  background: 'rgba(0,255,245,0.04)',
                  border: '1px solid rgba(0,255,245,0.2)',
                  boxShadow: '0 0 30px rgba(0,255,245,0.05)',
                }}
              >
                {/* Glow */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,255,245,0.08), transparent 70%)' }} />
                <p className="font-mono text-xs text-gray-600 mb-2 tracking-widest relative z-10">PORTFOLIO V2</p>
                <div className="flex items-center justify-center gap-2 mb-2 relative z-10">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-5 h-5" alt="React" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" className="w-5 h-5" alt="Tailwind" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" className="w-5 h-5" alt="Vite" />
                </div>
                <p className="font-mono font-black text-4xl relative z-10" style={{ color: '#00fff5', fontFamily: 'Orbitron, monospace', textShadow: '0 0 20px #00fff5' }}>7</p>
                <p className="font-mono text-xs text-gray-700 mt-1 relative z-10">victoires</p>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-mono text-xs text-gray-700 text-center mt-4 italic"
            >
              "La V1 est la graine — la V2 est l'arbre."
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  )
}


// ============================================================
// PARTIE BAS COMMUNE
// ============================================================
const CardBottom = ({ project, accentColor, accentBg, accentBorder }) => (
  <div
    className="relative z-10 px-5 pb-5 pt-3 flex flex-col gap-4"
    style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(1,6,38,0.2) 40%, rgba(1,6,38,0.45) 100%)' }}
  >
    <p className="text-gray-400 text-xs leading-relaxed font-mono">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {(project.stack || project.tools || []).map((item, i) => {
        const tc = techColors[item] || { bg: accentBg, color: accentColor, border: accentBorder }
        return (
          <span key={i} className="font-mono text-xs px-2 py-1 rounded-sm font-semibold" style={{ background: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}>
            {item}
          </span>
        )
      })}
    </div>
    {project.meta && (
      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, value: project.meta.duration, label: 'Durée' },
          { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>, value: project.meta.team, label: 'Équipe' },
          { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>, value: project.meta.ai, label: 'IA utilisée' },
        ].map((m, i) => (
          <div key={i} className="flex flex-col items-center gap-1 py-2 px-1 rounded-sm" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
            {m.icon}
            <span className="font-mono text-xs text-gray-400 text-center leading-tight">{m.value}</span>
            <span className="font-mono text-xs text-gray-700 text-center">{m.label}</span>
          </div>
        ))}
      </div>
    )}
    {project.aiDetail && (
      <div className="rounded-sm px-3 py-3" style={{ background: 'rgba(191,0,255,0.04)', border: '1px solid rgba(191,0,255,0.12)' }}>
        <div className="flex items-center gap-2 mb-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="#bf00ff" strokeWidth="1.5" className="w-3.5 h-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
          <p className="font-mono text-xs text-violet-400">Intervention IA</p>
        </div>
        <div className="flex flex-col gap-2">
          {project.aiDetail.map((ai, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="font-mono text-xs text-gray-500 w-16 flex-shrink-0">{ai.name}</span>
              <div className="flex-1 h-1 bg-gray-900 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${ai.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #7c3aed, #bf00ff)', boxShadow: '0 0 6px rgba(191,0,255,0.5)' }}
                />
              </div>
              <span className="font-mono text-xs text-violet-400 w-8 text-right">{ai.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    )}
    {project.demo && (
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 font-mono text-sm py-3 rounded-sm transition-all duration-300 relative overflow-hidden"
        style={{ background: accentBg, border: `1px solid ${accentBorder}`, color: accentColor }}
        onMouseEnter={(e) => { e.currentTarget.style.background = `${accentColor}20`; e.currentTarget.style.boxShadow = `0 0 20px ${accentColor}30` }}
        onMouseLeave={(e) => { e.currentTarget.style.background = accentBg; e.currentTarget.style.boxShadow = 'none' }}
      >
        <motion.span animate={{ x: ['-100%', '200%'] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }} className="absolute inset-y-0 w-8 opacity-10 pointer-events-none" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }} />
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 relative z-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="relative z-10 font-bold">Testez l'application web</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 relative z-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </a>
    )}
  </div>
)

// ============================================================
// COMPOSANT PRINCIPAL
// ============================================================
const DevProjects = () => {
  const [activeTab, setActiveTab] = useState('Compétences')

  const enrichedProjects = [
    {
      id: 'dev-1',
      type: 'baseMaster',
      title: 'BaseMasterMx',
      description: 'Convertisseur numérique entre différentes bases numériques (décimale, octale, binaire, hexadécimale...). Disponible en app mobile et web app.',
      stack: ['React Native', 'Node.js', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'PHP'],
      image: '/images/basemastermx.png',
      demo: 'https://basemastermx.netlify.app/',
      status: 'live',
      color: 'cyan',
      meta: { duration: '20j mobile / 48h web', team: 'Solo', ai: 'IA 50%' },
      aiDetail: [
        { name: 'ChatGPT', percent: 10 },
        { name: 'Claude', percent: 40 },
      ],
      tagline: 'Le convertisseur de bases ultime',
      taglineSub: 'Simple. Rapide. Précis.',
    },
    {
      id: 'dev-2',
      type: 'aurora',
      title: 'MxAurora IA',
      description: "Transforme instantanément n'importe quel texte en audio naturel, dans plusieurs langues avec un large choix de voix réalistes. Pensée pour créateurs, formateurs et communicants.",
      stack: ['HTML', 'CSS', 'JavaScript', 'React Native', 'Python', 'Node.js'],
      image: '/images/auroraia.png',
      video: '/videos/auroraia.mp4',
      demo: 'https://mxaurora.netlify.app',
      status: 'production',
      color: 'violet',
      meta: { duration: '40j mobile / 7j web', team: 'Solo', ai: 'IA 60%' },
      aiDetail: [
        { name: 'Claude', percent: 45 },
        { name: 'Grok', percent: 10 },
        { name: 'ChatGPT', percent: 5 },
      ],
      features: [
        'Multilingue natif — des dizaines de langues',
        'Voix réalistes : masculines, féminines, neutres',
        'Conversion instantanée texte → audio',
        'Contrôle précis du ton, rythme et intonation',
      ],
      taglineSub: 'Vous écrivez… elle parle.',
    },
    {
      id: 'dev-3',
      type: 'canjix',
      title: 'CanjiX',
    },
    {
      id: 'dev-4',
      type: 'restorex',
      title: 'RestoreX',
    },
    {
      id: 'dev-5',
      type: 'tikirix',
      title: 'TikiRix',
    },
    {
      id: 'dev-6',
      type: 'portfoliov1',
      title: 'Portfolio V1',
    },
  ]

  return (
    <section id="dev" className="relative section-padding overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full opacity-5 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #00fff5, transparent)' }} />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.3em] uppercase text-cyan-400 mb-4">
            <span style={{ color: '#00fff5' }}><DevIcon /></span>
            <span>Développement</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
            DÉVELOPPEMENT
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Full-Stack Web & Mobile — des interfaces modernes aux APIs robustes, en passant par les applications mobiles.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" style={{ boxShadow: '0 0 8px #00fff5' }} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
        </motion.div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className="font-mono text-sm px-6 py-3 rounded-sm transition-all duration-300"
              style={
                activeTab === tab
                  ? { background: 'rgba(0,255,245,0.1)', border: '1px solid #00fff5', color: '#00fff5', boxShadow: '0 0 15px rgba(0,255,245,0.2)' }
                  : { background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#6b7280' }
              }
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {activeTab === 'Compétences' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 max-w-4xl mx-auto">
            {devSkills.map((skill, i) => (<SkillBar key={skill.name} skill={skill} index={i} />))}
          </motion.div>
        )}

        {activeTab === 'Projets' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrichedProjects.map((project, i) =>
              project.type === 'canjix'
               ? <CardCanjiX key={project.id} project={project} index={i} />
                 : project.type === 'aurora'
                    ? <CardAurora key={project.id} project={project} index={i} />
                      : project.type === 'restorex'
                        ? <CardRestoreX key={project.id} project={project} index={i} />
                          : project.type === 'tikirix'
                            ? <CardTikiRix key={project.id} project={project} index={i} />
                              : project.type === 'portfoliov1'
                                ? <CardPortfolioV1 key={project.id} project={project} index={i} />
                                  : <CardBaseMaster key={project.id} project={project} index={i} />
            )}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass rounded-sm p-6 flex flex-col items-center justify-center gap-4 min-h-64"
                style={{ border: '1px dashed rgba(0,255,245,0.15)' }}
              >
                <div className="w-12 h-12 rounded-sm flex items-center justify-center" style={{ background: 'rgba(0,255,245,0.05)', border: '1px solid rgba(0,255,245,0.1)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00fff5" strokeWidth="1.5" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-mono text-sm text-gray-600">Nouveaux projets</p>
                  <p className="font-mono text-xs text-gray-700 mt-1">en cours d'ajout...</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {activeTab === 'Expériences' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className="glass rounded-sm p-6 border-l-2 border-cyan-400 relative" style={{ boxShadow: '0 0 20px rgba(0,255,245,0.05)' }}>
                <div className="absolute -left-2 top-6 w-3 h-3 rounded-full bg-cyan-400" style={{ boxShadow: '0 0 8px #00fff5' }} />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-white font-bold font-mono">{exp.title}</h3>
                    <p className="text-cyan-400 font-mono text-sm">{exp.company}</p>
                  </div>
                  <span className="font-mono text-xs text-gray-600 whitespace-nowrap glass px-3 py-1 rounded-sm">{exp.period}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.techs.map((tech, j) => (
                    <span key={j} className="font-mono text-xs px-2 py-1 rounded-sm text-cyan-400" style={{ background: 'rgba(0,255,245,0.05)', border: '1px solid rgba(0,255,245,0.15)' }}>{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default DevProjects