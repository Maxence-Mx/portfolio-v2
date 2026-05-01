// src/sections/Contact.jsx

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

// ⚠️ Remplace ces valeurs par tes vraies clés EmailJS
const EMAILJS_SERVICE_ID = 'service_mx_portrfolio'
const EMAILJS_TEMPLATE_ID = 'template_laa2rz8'
const EMAILJS_PUBLIC_KEY = 'sL7qMGKu9ZW3FBgEF'

const contactInfos = [
  {
    label: 'Email',
    value: 'gnanvemaxime@gmail.com',
    href: 'mailto:gnanvemaxime@gmail.com',
    color: '#00fff5',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+228 92 90 78 27',
    href: 'https://wa.me/22892907827',
    color: '#25D366',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'koffi-maxime-ganve',
    href: 'https://linkedin.com/in/koffi-maxime-ganve-a07728355',
    color: '#0A66C2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Localisation',
    value: 'Lomé, Togo',
    href: null,
    color: '#a78bfa',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
]

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(null), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus(null), 4000)
    }
  }

  return (
    <section id="contact" className="relative section-padding overflow-hidden">

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00fff5, #bf00ff)' }}
      />

      <div className="max-w-7xl mx-auto">

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.3em] uppercase text-cyan-400 mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="#00fff5" strokeWidth="1.5" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            <span>Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
            TRAVAILLONS ENSEMBLE
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Un projet, une mission, une collaboration ? Je suis disponible et prêt à construire quelque chose d'exceptionnel.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" style={{ boxShadow: '0 0 8px #00fff5' }} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* === GAUCHE : Infos contact === */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <p className="text-gray-400 leading-relaxed font-mono text-sm">
              Disponible pour des missions <span className="text-cyan-400 font-semibold">freelance</span>, des collaborations innovantes ou simplement pour échanger autour de la tech, la sécurité et l'IA. Je réponds généralement dans les <span className="text-white font-semibold">24 heures</span>.
            </p>

            {/* Cartes contact */}
            <div className="space-y-3">
              {contactInfos.map((info, i) => {
                const inner = (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 px-5 py-4 rounded-sm transition-all duration-200 group"
                    style={{
                      background: 'rgba(5,10,30,0.8)',
                      border: `1px solid ${info.color}20`,
                      boxShadow: `0 0 15px ${info.color}05`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.border = `1px solid ${info.color}40`
                      e.currentTarget.style.boxShadow = `0 0 20px ${info.color}15`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.border = `1px solid ${info.color}20`
                      e.currentTarget.style.boxShadow = `0 0 15px ${info.color}05`
                    }}
                  >
                    {/* Icône */}
                    <div
                      className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ background: `${info.color}12`, border: `1px solid ${info.color}25`, color: info.color }}
                    >
                      {info.icon}
                    </div>

                    {/* Texte */}
                    <div className="min-w-0">
                      <p className="font-mono text-xs text-gray-600 mb-0.5">{info.label}</p>
                      <p className="font-mono text-sm font-semibold truncate" style={{ color: info.color }}>
                        {info.value}
                      </p>
                    </div>

                    {/* Flèche si lien */}
                    {info.href && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 ml-auto flex-shrink-0 text-gray-700 group-hover:text-white transition-colors">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    )}
                  </motion.div>
                )

                return info.href ? (
                  <a key={i} href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div key={i}>{inner}</div>
                )
              })}
            </div>

            {/* Badge dispo */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between gap-4 px-5 py-4 rounded-sm"
              style={{ background: 'rgba(0,255,245,0.04)', border: '1px solid rgba(0,255,245,0.2)' }}
            >
              <div className="flex items-center gap-3">
                <motion.span
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 rounded-full"
                  style={{ background: '#00fff5', boxShadow: '0 0 8px #00fff5' }}
                />
                <span className="font-mono text-sm text-cyan-400 font-semibold">Disponible</span>
              </div>
              <span className="font-mono text-xs text-gray-600">Réponse sous 24h</span>
            </motion.div>
          </motion.div>

          {/* === DROITE : Formulaire === */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-sm p-6 flex flex-col gap-5"
              style={{ background: 'rgba(5,10,30,0.9)', border: '1px solid rgba(0,255,245,0.1)' }}
            >
              <p className="font-mono text-xs text-gray-600 tracking-widest uppercase"> Envoyer un message</p>

              {/* Nom + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'name', label: 'Votre nom', placeholder: 'John Doe', type: 'text' },
                  { name: 'email', label: 'Votre email', placeholder: 'john@example.com', type: 'email' },
                ].map((field) => (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs text-gray-600">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="bg-transparent font-mono text-sm text-gray-300 px-4 py-3 rounded-sm outline-none transition-all duration-300 placeholder-gray-700"
                      style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                      onFocus={(e) => { e.target.style.border = '1px solid rgba(0,255,245,0.4)'; e.target.style.boxShadow = '0 0 10px rgba(0,255,245,0.08)' }}
                      onBlur={(e) => { e.target.style.border = '1px solid rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                ))}
              </div>

              {/* Sujet */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-gray-600">Sujet</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Développement d'application / Mission freelance / Collaboration..."
                  required
                  className="bg-transparent font-mono text-sm text-gray-300 px-4 py-3 rounded-sm outline-none transition-all duration-300 placeholder-gray-700"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  onFocus={(e) => { e.target.style.border = '1px solid rgba(0,255,245,0.4)'; e.target.style.boxShadow = '0 0 10px rgba(0,255,245,0.08)' }}
                  onBlur={(e) => { e.target.style.border = '1px solid rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-gray-600">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet, vos besoins ou votre idée..."
                  required
                  rows={5}
                  className="bg-transparent font-mono text-sm text-gray-300 px-4 py-3 rounded-sm outline-none transition-all duration-300 placeholder-gray-700 resize-none"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  onFocus={(e) => { e.target.style.border = '1px solid rgba(0,255,245,0.4)'; e.target.style.boxShadow = '0 0 10px rgba(0,255,245,0.08)' }}
                  onBlur={(e) => { e.target.style.border = '1px solid rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                />
              </div>

              {/* Bouton submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
                className="w-full font-mono font-bold py-4 rounded-sm transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2"
                style={{
                  background: status === 'success' ? 'rgba(0,255,136,0.1)' : status === 'error' ? 'rgba(255,30,30,0.1)' : 'rgba(0,255,245,0.1)',
                  border: status === 'success' ? '1px solid #00FF88' : status === 'error' ? '1px solid #FF1E1E' : '1px solid #00fff5',
                  color: status === 'success' ? '#00FF88' : status === 'error' ? '#FF1E1E' : '#00fff5',
                  boxShadow: status === 'success' ? '0 0 20px rgba(0,255,136,0.2)' : '0 0 20px rgba(0,255,245,0.15)',
                }}
              >
                {/* Shimmer */}
                {!status && (
                  <motion.span
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-y-0 w-8 opacity-10 pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, transparent, #00fff5, transparent)' }}
                  />
                )}

                {status === 'sending' && (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="inline-block w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full"
                    />
                    Envoi en cours...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Message envoyé avec succès !
                  </>
                )}
                {status === 'error' && (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    Erreur — Réessayez
                  </>
                )}
                {!status && (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 relative z-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    <span className="relative z-10">Envoyer le message</span>
                  </>
                )}
              </motion.button>

              <p className="font-mono text-xs text-gray-700 text-center">
                Ou contactez-moi directement sur{' '} <br />
                <a href="https://wa.me/22892907827" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                  WhatsApp
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact