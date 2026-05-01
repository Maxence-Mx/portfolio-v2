// src/components/ui/SectionTitle.jsx

import { motion } from 'framer-motion'

const SectionTitle = ({ tag, title, subtitle, color = 'cyan' }) => {
  const colors = {
    cyan: 'text-cyan-400',
    violet: 'text-violet-400',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {tag && (
        <span className={`font-mono text-xs tracking-[0.3em] uppercase ${colors[color]} mb-4 block`}>
          // {tag}
        </span>
      )}
      <h2
        className="text-4xl md:text-5xl font-black tracking-tight mb-4"
        style={{ fontFamily: 'Orbitron, monospace' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      {/* Ligne décorative */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <div className={`h-px w-16 bg-gradient-to-r from-transparent ${color === 'cyan' ? 'to-cyan-400' : 'to-violet-400'}`} />
        <div className={`w-2 h-2 rounded-full ${color === 'cyan' ? 'bg-cyan-400' : 'bg-violet-400'}`}
          style={{ boxShadow: color === 'cyan' ? '0 0 8px #00fff5' : '0 0 8px #bf00ff' }}
        />
        <div className={`h-px w-16 bg-gradient-to-l from-transparent ${color === 'cyan' ? 'to-cyan-400' : 'to-violet-400'}`} />
      </div>
    </motion.div>
  )
}

export default SectionTitle