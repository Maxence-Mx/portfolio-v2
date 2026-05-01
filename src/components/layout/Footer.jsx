// src/components/layout/Footer.jsx

import { motion } from 'framer-motion'

const Footer = () => {
  const year = new Date().getFullYear()

  const socials = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/koffi-maxime-ganve-a07728355',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: '#0A66C2',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/gnanvemaxime',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
      color: '#f0f6fc',
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/22892907827',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      color: '#25D366',
    },
  ]

  const navLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#about' },
    { label: 'Développement', href: '#dev' },
    { label: 'Sécurité', href: '#security' },
    { label: 'IA & Prompts', href: '#ai' },
    { label: 'Contact', href: '#contact' },
  ]

  const contactItems = [
    {
      value: 'gnanvemaxime@gmail.com',
      href: 'mailto:gnanvemaxime@gmail.com',
      color: '#00fff5',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      value: '+228 92 90 78 27',
      href: 'https://wa.me/22892907827',
      color: '#25D366',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
    },
    {
      value: 'Lomé, Togo',
      href: null,
      color: '#a78bfa',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="relative border-t border-cyan-400/10 bg-dark-900 pt-16 pb-8 px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Colonne 1 — Logo + identité */}
          <div>
            {/* Logo */}
            <div className="mb-4">
              <img
                src="/images/logo.png"
                alt="Maxime Gnave Logo"
                className="h-10 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 0 8px rgba(0,255,245,0.3))' }}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML = `<span style="font-family:Orbitron,monospace;font-size:1.5rem;font-weight:900;color:#00fff5;text-shadow:0 0 10px #00fff5">MX.</span>`
                }}
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-mono mb-6">
              Développeur Web & Mobile<br />
              Sécurité Informatique<br />
              IA & Prompt Engineering
            </p>
            {/* Réseaux sociaux avec vrais logos */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  className="w-9 h-9 rounded-sm flex items-center justify-center transition-all duration-200"
                  style={{
                    background: `${s.color}12`,
                    border: `0.5px solid ${s.color}25`,
                    color: s.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${s.color}22`
                    e.currentTarget.style.border = `1px solid ${s.color}50`
                    e.currentTarget.style.boxShadow = `0 0 12px ${s.color}30`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${s.color}12`
                    e.currentTarget.style.border = `1px solid ${s.color}25`
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  title={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <svg viewBox="0 0 24 24" fill="none" stroke="#00fff5" strokeWidth="1.5" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
              </svg>
              <h4 className="font-mono text-xs text-cyan-400 tracking-[0.2em] uppercase">Navigation</h4>
            </div>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="flex items-center gap-2 font-mono text-sm text-gray-500 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3 text-gray-700 group-hover:text-cyan-400 transition-colors flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Contact */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <svg viewBox="0 0 24 24" fill="none" stroke="#00fff5" strokeWidth="1.5" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              <h4 className="font-mono text-xs text-cyan-400 tracking-[0.2em] uppercase">Contact</h4>
            </div>
            <ul className="space-y-3">
              {contactItems.map((item, i) => {
                const inner = (
                  <div className="flex items-center gap-2.5 group">
                    <span style={{ color: item.color }} className="transition-colors">{item.icon}</span>
                    <span className="font-mono text-sm text-gray-500 group-hover:text-white transition-colors truncate">{item.value}</span>
                  </div>
                )
                return item.href ? (
                  <li key={i}>
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{inner}</a>
                  </li>
                ) : (
                  <li key={i}>{inner}</li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Ligne séparatrice */}
        <div
          className="h-px w-full mb-10"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,245,0.2), rgba(191,0,255,0.2), transparent)' }}
        />

        {/* Bas de page */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-mono text-xs text-gray-600">
              © {year}{' '}
              <span className="text-cyan-400">Gnave Koffi Maxime</span>
              {'. '}Tous droits réservés.
            </p>
            <p className="font-mono text-xs mt-1 flex items-center gap-1.5">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full inline-block bg-cyan-400"
                style={{ boxShadow: '0 0 4px #00fff5' }}
              />
              <span className="text-gray-600">Portfolio en évolution</span>
              <span className="text-cyan-400">...</span>
            </p>
          </div>

          {/* Stack tech minimaliste */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {['React', 'Vite', 'Tailwind', 'Framer'].map((tech, i) => (
              <span
                key={i}
                className="font-mono text-xs px-2 py-0.5 rounded-sm"
                style={{ background: 'rgba(0,255,245,0.04)', color: '#4b5563', border: '2px solid rgba(255,255,255,0.05)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer