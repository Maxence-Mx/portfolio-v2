// src/components/ui/SkillBar.jsx

import { motion } from 'framer-motion'

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex flex-col gap-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {skill.icon && (
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-5 h-5 object-contain"
              onError={(e) => e.target.style.display = 'none'}
            />
          )}
          <span className="font-mono text-sm text-gray-300">{skill.name}</span>
        </div>
        <span className="font-mono text-xs text-cyan-400">{skill.level}%</span>
      </div>

      {/* Barre */}
      <div className="w-full h-1 bg-gray-900 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{
            background: skill.color === 'violet'
              ? 'linear-gradient(90deg, #7c3aed, #bf00ff)'
              : 'linear-gradient(90deg, #0066ff, #00fff5)',
            boxShadow: skill.color === 'violet'
              ? '0 0 8px rgba(191,0,255,0.4)'
              : '0 0 8px rgba(0,255,245,0.4)',
          }}
        />
      </div>
    </motion.div>
  )
}

export default SkillBar