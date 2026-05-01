import { motion } from 'framer-motion'

const colorMap = {
  cyan: {
    border: 'rgba(0,255,245,0.35)',
    glow: 'rgba(0,255,245,0.15)',
    badge: '#00fff5',
  },
  violet: {
    border: 'rgba(191,0,255,0.35)',
    glow: 'rgba(191,0,255,0.15)',
    badge: '#bf00ff',
  },
}

const SecurityProjectCard = ({ project, index }) => {
  const theme = colorMap[project.color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
      className="glass rounded-sm p-6 flex flex-col gap-6 relative overflow-hidden"
      style={{
        border: `1px solid ${theme.border}`,
        boxShadow: `0 0 35px ${theme.glow}`,
      }}
    >
      {/* ===== HEADER MISSION ===== */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span
            className="font-mono text-xs px-3 py-1 rounded-sm"
            style={{
              background: `${theme.glow}`,
              color: theme.badge,
              border: `1px solid ${theme.border}`,
            }}
          >
            // {project.type}
          </span>
        </div>

        <h3 className="font-mono text-lg text-white tracking-wide">
          {project.title}
        </h3>

        <p className="font-mono text-xs text-gray-400 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* ===== MÉTHODOLOGIE ===== */}
      <div>
        <p className="font-mono text-[10px] text-gray-600 tracking-widest uppercase mb-2">
          Méthodologie
        </p>
        <ul className="space-y-1 font-mono text-xs text-gray-500">
          <li>• Reconnaissance & collecte d’informations</li>
          <li>• Scan & énumération</li>
          <li>• Analyse et exploitation contrôlée</li>
          <li>• Reporting & recommandations</li>
        </ul>
      </div>

      {/* ===== IMPACT / OBJECTIF ===== */}
      <div
        className="p-4 rounded-sm"
        style={{
          background: theme.glow,
          border: `1px solid ${theme.border}`,
        }}
      >
        <p className="font-mono text-[10px] text-gray-700 tracking-widest uppercase mb-2">
          Objectif & Impact
        </p>
        <p className="font-mono text-xs text-gray-300 leading-relaxed">
          Identifier les failles critiques, évaluer les risques métier et proposer
          des mesures correctives adaptées pour renforcer la posture de sécurité.
        </p>
      </div>

      {/* ===== OUTILS ===== */}
      <div>
        <p className="font-mono text-[10px] text-gray-600 tracking-widest uppercase mb-3">
          Outils utilisés
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, i) => (
            <span
              key={i}
              className="font-mono text-[11px] px-3 py-1 rounded-sm"
              style={{
                border: `1px solid ${theme.border}`,
                color: theme.badge,
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default SecurityProjectCard