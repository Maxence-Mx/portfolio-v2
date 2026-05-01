// src/components/ui/ProjectCard.jsx

import { motion } from 'framer-motion'

const ProjectCard = ({ project, index }) => {
  const isViolet = project.color === 'violet'

  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -6, scale: 1.02 }}
    data-project-id={project.id}
    className="glass rounded-sm p-6 flex flex-col gap-4 group cursor-default relative overflow-hidden"
    style={{
      border: `1px solid ${isViolet ? 'rgba(191,0,255,0.2)' : 'rgba(0,255,245,0.2)'}`,
      boxShadow: `0 0 20px ${isViolet ? 'rgba(191,0,255,0.05)' : 'rgba(0,255,245,0.05)'}`,
      transition: 'outline 0.2s, box-shadow 0.2s',
    }}
    >
      {/* Glow hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${isViolet ? 'rgba(191,0,255,0.08)' : 'rgba(0,255,245,0.08)'}, transparent 70%)`,
        }}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span
            className="font-mono text-xs tracking-widest mb-2 block"
            style={{ color: isViolet ? '#bf00ff' : '#00fff5' }}
          >
            // {project.type || 'PROJECT'}
          </span>
          <h3 className="text-white font-bold text-lg font-mono">{project.title}</h3>
        </div>
        {project.status && (
          <span
            className="font-mono text-xs px-2 py-1 rounded-sm whitespace-nowrap"
            style={{
              color: project.status === 'live' ? '#00fff5' : '#bf00ff',
              border: `1px solid ${project.status === 'live' ? 'rgba(0,255,245,0.3)' : 'rgba(191,0,255,0.3)'}`,
            }}
          >
            {project.status === 'live' ? '● LIVE' : '● PROD'}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>

      {/* Stack / Tools */}
      <div className="flex flex-wrap gap-2">
        {(project.stack || project.tools).map((item, i) => (
          <span
            key={i}
            className="font-mono text-xs px-2 py-1 rounded-sm"
            style={{
              background: isViolet ? 'rgba(191,0,255,0.08)' : 'rgba(0,255,245,0.08)',
              color: isViolet ? '#bf00ff' : '#00fff5',
              border: `1px solid ${isViolet ? 'rgba(191,0,255,0.15)' : 'rgba(0,255,245,0.15)'}`,
            }}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Liens */}
      {(project.github || project.demo) && (
        <div className="flex gap-4 pt-2 border-t border-gray-900">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-600 hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              ↗ GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-600 hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              ↗ Démo live
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}

export default ProjectCard