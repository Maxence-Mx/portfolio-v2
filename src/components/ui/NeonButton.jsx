// src/components/ui/NeonButton.jsx

import { motion } from 'framer-motion'

const NeonButton = ({
  children,
  href,
  onClick,
  variant = 'cyan',
  size = 'md',
  className = '',
  target,
}) => {
  const variants = {
    cyan: {
      border: 'border-cyan-400',
      text: 'text-cyan-400',
      shadow: '0 0 15px rgba(0,255,245,0.4)',
      hoverShadow: '0 0 25px rgba(0,255,245,0.7)',
      bg: 'hover:bg-cyan-400',
    },
    violet: {
      border: 'border-violet-400',
      text: 'text-violet-400',
      shadow: '0 0 15px rgba(191,0,255,0.4)',
      hoverShadow: '0 0 25px rgba(191,0,255,0.7)',
      bg: 'hover:bg-violet-400',
    },
    solid: {
      border: 'border-cyan-400',
      text: 'text-dark-900',
      shadow: '0 0 15px rgba(0,255,245,0.4)',
      hoverShadow: '0 0 25px rgba(0,255,245,0.7)',
      bg: 'bg-cyan-400',
    },
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const v = variants[variant]
  const s = sizes[size]

  const classes = `
    inline-flex items-center gap-2 font-mono font-semibold
    border rounded-sm transition-all duration-300
    ${v.border} ${v.text} ${v.bg} hover:text-dark-900
    ${s} ${className}
  `

  const Tag = href ? 'a' : 'button'

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <Tag
        href={href}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        style={{ boxShadow: v.shadow }}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = v.hoverShadow)}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = v.shadow)}
      >
        {children}
      </Tag>
    </motion.div>
  )
}

export default NeonButton