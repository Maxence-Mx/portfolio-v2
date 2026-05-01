// src/sections/About.jsx

import { motion } from 'framer-motion'
import NeonButton from '../components/ui/NeonButton'

const traits = [
  {
    label: 'Autonomie',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    label: 'Créativité',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    label: 'Rigueur',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Adaptabilité',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    label: 'Travail en équipe',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    label: 'Sens commercial',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
]

const infos = [
  {
    label: 'Localisation',
    value: 'Lomé, Togo',
    href: null,
    color: 'cyan',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: 'Formation',
    value: 'Licence IRT — ESGIS (2024)',
    href: null,
    color: 'violet',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    label: 'Statut',
    value: 'Freelance & Étudiant',
    href: null,
    color: 'cyan',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'gnanvemaxime@gmail.com',
    href: 'mailto:gnanvemaxime@gmail.com',
    color: 'violet',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'Langues',
    value: 'Français • Anglais • Kabyè',
    href: null,
    color: 'cyan',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
  },
  {
    label: 'Disponibilité',
    value: 'Immédiate',
    href: null,
    color: 'violet',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

// Icône À propos (même que dans la navbar)
const AboutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
)

const About = () => {
  return (
    <section id="about" className="relative section-padding overflow-hidden">

      {/* Glow décoratif */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #bf00ff, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">

        {/* === SECTION TITLE CUSTOM === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Tag avec icône navbar */}
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.3em] uppercase text-violet-400 mb-4">
            <span style={{ color: '#a78bfa' }}>
              <AboutIcon />
            </span>
            <span>À propos</span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            QUI SUIS-JE ?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Développeur passionné, praticien en Sécurité Informatique et spécialiste IA & Prompts.
            Je construis des solutions qui ont du sens.
          </p>

          {/* Ligne décorative */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-violet-400" />
            <div
              className="w-2 h-2 rounded-full bg-violet-400"
              style={{ boxShadow: '0 0 8px #bf00ff' }}
            />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-400" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* === COLONNE GAUCHE : Photo + infos === */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Photo agrandie */}
            <div className="relative flex flex-col items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-full pointer-events-none"
                style={{
                  border: '1px dashed rgba(167,139,250,0.3)',
                  width: '320px',
                  height: '320px',
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-full pointer-events-none"
                style={{
                  border: '1px solid rgba(0,255,245,0.1)',
                  width: '350px',
                  height: '350px',
                }}
              />

              <div
                className="w-72 h-72 rounded-full overflow-hidden relative z-10"
                style={{
                  border: '2px solid transparent',
                  background: 'linear-gradient(#010626, #010626) padding-box, linear-gradient(135deg, #a78bfa, #00fff5) border-box',
                  boxShadow: '0 0 50px rgba(167,139,250,0.2), 0 0 100px rgba(0,255,245,0.05)',
                }}
              >
                <img
                  src="/images/profil2.jpg"
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

              {/* Citation centrée */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mt-6 w-full flex justify-center z-20"
              >
                <div
                  className="glass px-5 py-3 rounded-sm font-mono text-xs text-center"
                  style={{
                    boxShadow: '0 0 15px rgba(167,139,250,0.2)',
                    border: '1px solid rgba(167,139,250,0.2)',
                    color: '#a78bfa',
                    maxWidth: '280px',
                    width: '100%',
                  }}
                >
                  « Créer, c'est vivre deux fois. »
                </div>
              </motion.div>
            </div>

            {/* Grille infos */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              {infos.map((info, i) => {
                const content = (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-sm px-4 py-3 flex items-start gap-3 transition-all duration-200"
                    style={{
                      border: `1px solid ${info.color === 'cyan' ? 'rgba(0,255,245,0.1)' : 'rgba(167,139,250,0.1)'}`,
                      cursor: info.href ? 'pointer' : 'default',
                    }}
                  >
                    <span
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: info.color === 'cyan' ? '#00fff5' : '#a78bfa' }}
                    >
                      {info.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-xs text-gray-600">{info.label}</p>
                      <p
                        className="text-sm font-medium truncate"
                        style={{ color: info.color === 'cyan' ? '#e2e8ff' : '#e2e8ff' }}
                      >
                        {info.value}
                      </p>
                    </div>
                    {info.href && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                        className="w-3.5 h-3.5 ml-auto flex-shrink-0 mt-1 text-gray-700"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    )}
                  </motion.div>
                )

                return info.href ? (
                  <a key={i} href={info.href}>{content}</a>
                ) : (
                  <div key={i}>{content}</div>
                )
              })}
            </div>
          </motion.div>

          {/* === COLONNE DROITE : Texte === */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Texte principal */}
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Je m'appelle{' '}
                <span className="text-cyan-400 font-semibold">Gnave Koffi Maxime</span>,
                développeur passionné, architecte d'idées et bâtisseur de solutions digitales
                basé à <span className="text-white font-medium">Lomé, Togo</span>.
              </p>
              <p>
                Étudiant en{' '}
                <span className="text-violet-400 font-semibold">
                  Licence IRT (Informatique Réseau et Télécommunication)
                </span>{' '}
                à l'ESGIS, spécialisé en Sécurité Informatique, je combine le développement
                Full-Stack, la sécurité informatique et l'IA pour créer des solutions complètes
                et robustes.
              </p>
              <p>
                En freelance depuis 2023, j'ai développé plusieurs applications mobiles et web
                comme <span className="text-cyan-400">BaseMasterMx</span>,{' '}
                <span className="text-cyan-400">MxAurora AI</span>,{' '}
                <span className="text-cyan-400">CanjiX</span>..., de l'analyse des besoins
                jusqu'au déploiement final.
              </p>
              <p>
                Ma mission : construire des solutions{' '}
                <span className="text-white font-semibold">efficaces, sécurisées et innovantes</span>{' '}
                qui transforment des idées en expériences numériques mémorables.
              </p>
              <p>
                Praticien en{' '}
                <span className="text-red-400 font-semibold">sécurité informatique</span>,
                j'intègre une approche défensive et offensive dans chaque projet — du hardening
                système à l'audit de vulnérabilités. En parallèle, ma maîtrise de l'
                <span className="text-violet-400 font-semibold">IA & Prompt Engineering</span>{' '}
                me permet d'automatiser, d'optimiser et d'innover à chaque étape du développement.
              </p>
            </div>

            {/* Citation */}
            <div
              className="glass rounded-sm px-6 py-4 border-l-2 border-violet-400"
              style={{ boxShadow: '0 0 20px rgba(167,139,250,0.05)' }}
            >
              <p className="font-mono text-sm text-gray-400 italic">
                "Chaque projet est une rencontre entre une idée et une âme.
                Mon rôle est de les réunir avec précision et créativité."
              </p>
            </div>

            {/* Qualités */}
            <div>
              {/* Titre qualités avec icône */}
              <div className="flex items-center gap-2 mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <p className="font-mono text-xs text-violet-400 tracking-widest uppercase">
                  Qualités personnelles
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {traits.map((t, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="glass px-4 py-2 rounded-sm font-mono text-xs text-gray-300 flex items-center gap-2 cursor-default"
                    style={{
                      border: '1px solid rgba(167,139,250,0.15)',
                      boxShadow: '0 0 8px rgba(167,139,250,0.05)',
                    }}
                  >
                    <span style={{ color: '#a78bfa' }}>{t.icon}</span>
                    {t.label}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Boutons */}
            <div className="flex flex-wrap gap-4 pt-2">
              {/* Bouton Discutons */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 font-mono font-bold px-6 py-3 rounded-sm transition-all duration-300 relative overflow-hidden"
                style={{
                  background: 'rgba(0,255,245,0.9)',
                  color: '#010626',
                  boxShadow: '0 0 20px rgba(0,255,245,0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 35px rgba(0,255,245,0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,245,0.3)'
                }}
              >
                {/* Shimmer */}
                <motion.span
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-y-0 w-8 opacity-20 pointer-events-none"
                  style={{ background: 'linear-gradient(90deg, transparent, white, transparent)' }}
                />
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 relative z-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                <span className="relative z-10">Discutons de votre projet</span>
              </motion.button>

              {/* Bouton Télécharger CV */}
              <motion.a
                href="/CV GNAVE Koffi Maxime.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 font-mono font-semibold px-6 py-3 rounded-sm transition-all duration-300"
                style={{
                  background: 'rgba(167,139,250,0.1)',
                  border: '1px solid rgba(167,139,250,0.4)',
                  color: '#a78bfa',
                  boxShadow: '0 0 15px rgba(167,139,250,0.15)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(167,139,250,0.18)'
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(167,139,250,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(167,139,250,0.1)'
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(167,139,250,0.15)'
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Télécharger mon CV
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About