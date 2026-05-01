// src/components/layout/Navbar.jsx

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  {
    label: 'Accueil',
    href: '#hero',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    color: '#00fff5',
  },
  {
    label: 'À propos',
    href: '#about',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    color: '#a78bfa',
  },
  {
    label: 'Dev',
    href: '#dev',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    color: '#00fff5',
  },
  {
    label: 'Sécurité',
    href: '#security',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: '#f43f5e',
  },
  {
    label: 'IA & Prompts',
    href: '#ai',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    color: '#bf00ff',
  },
 
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map((l) => l.href.replace('#', ''))
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(`#${id}`)
          }
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href) => {
    setActive(href)
    setMenuOpen(false)
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass border-b border-cyan-400/10 py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* === LOGO === */}
          <motion.button
            onClick={() => handleClick('#hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center group"
          >
            {/* Glow derrière le logo */}
            <img
              src="/images/logo.png"
              alt="Mon Logo"
              className="h-12 w-auto"
            />
          </motion.button>

          {/* === LINKS DESKTOP === */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href
              return (
                <li key={link.href}>
                  <motion.button
                    onClick={() => handleClick(link.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex items-center gap-2 px-3 py-2 rounded-sm font-mono text-xs tracking-wide transition-all duration-300 group"
                    style={{
                      color: isActive ? link.color : '#6b7280',
                      background: isActive ? `${link.color}12` : 'transparent',
                      border: isActive ? `1px solid ${link.color}30` : '1px solid transparent',
                      boxShadow: isActive ? `0 0 12px ${link.color}20` : 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = link.color
                        e.currentTarget.style.background = `${link.color}08`
                        e.currentTarget.style.border = `1px solid ${link.color}20`
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#6b7280'
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.border = '1px solid transparent'
                      }
                    }}
                  >
                    {/* Icône */}
                    <span
                      className="transition-all duration-300"
                      style={{ color: isActive ? link.color : '#4b5563' }}
                    >
                      {link.icon}
                    </span>
                    {link.label}

                    {/* Point actif */}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{
                          background: link.color,
                          boxShadow: `0 0 6px ${link.color}`,
                        }}
                      />
                    )}
                  </motion.button>
                </li>
              )
            })}
          </ul>

          {/* === CTA DESKTOP === */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleClick('#contact')}
            className="hidden md:flex items-center gap-2 font-mono text-xs px-5 py-2.5 rounded-sm transition-all duration-300 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(0,255,245,0.08), rgba(191,0,255,0.08))',
              border: '1px solid rgba(0,255,245,0.3)',
              color: '#00fff5',
              boxShadow: '0 0 15px rgba(0,255,245,0.15), inset 0 0 15px rgba(0,255,245,0.03)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,255,245,0.15), rgba(191,0,255,0.15))'
              e.currentTarget.style.boxShadow = '0 0 25px rgba(0,255,245,0.3), inset 0 0 15px rgba(0,255,245,0.05)'
              e.currentTarget.style.borderColor = 'rgba(0,255,245,0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,255,245,0.08), rgba(191,0,255,0.08))'
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0,255,245,0.15), inset 0 0 15px rgba(0,255,245,0.03)'
              e.currentTarget.style.borderColor = 'rgba(0,255,245,0.3)'
            }}
          >
            {/* Ligne animée */}
            <motion.span
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-y-0 w-8 opacity-20 pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent, #00fff5, transparent)' }}
            />
            {/* Icône enveloppe */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 relative z-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            <span className="relative z-10 tracking-widest">ME CONTACTER</span>
          </motion.button>

          {/* === HAMBURGER MOBILE === */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 rounded-full"
              style={{ background: '#00fff5', boxShadow: '0 0 6px #00fff5' }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="block w-4 h-0.5 rounded-full"
              style={{ background: '#bf00ff', boxShadow: '0 0 6px #bf00ff' }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 rounded-full"
              style={{ background: '#00fff5', boxShadow: '0 0 6px #00fff5' }}
            />
          </button>
        </div>
      </motion.nav>

      {/* === MENU MOBILE === */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-4 right-4 z-30 rounded-sm overflow-hidden"
            style={{
              background: 'rgba(1,6,38,0.97)',
              border: '1px solid rgba(0,255,245,0.15)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,255,245,0.05)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <ul className="py-3">
              {navLinks.map((link, i) => {
                const isActive = active === link.href
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => handleClick(link.href)}
                      className="w-full flex items-center gap-4 px-6 py-3.5 transition-all duration-200"
                      style={{
                        background: isActive ? `${link.color}10` : 'transparent',
                        borderLeft: isActive ? `2px solid ${link.color}` : '2px solid transparent',
                      }}
                    >
                      <span style={{ color: isActive ? link.color : '#4b5563' }}>
                        {link.icon}
                      </span>
                      <span
                        className="font-mono text-sm"
                        style={{ color: isActive ? link.color : '#9ca3af' }}
                      >
                        {link.label}
                      </span>
                      {isActive && (
                        <span
                          className="ml-auto w-1.5 h-1.5 rounded-full"
                          style={{ background: link.color, boxShadow: `0 0 6px ${link.color}` }}
                        />
                      )}
                    </button>
                  </motion.li>
                )
              })}

              {/* CTA mobile */}
              <li className="px-4 pt-3 pb-4 border-t border-gray-900 mt-2">
                <button
                  onClick={() => handleClick('#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-sm font-mono text-sm"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,255,245,0.1), rgba(191,0,255,0.1))',
                    border: '1px solid rgba(0,255,245,0.3)',
                    color: '#00fff5',
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  ME CONTACTER
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar