// src/components/ui/SectionDivider.jsx

import { motion } from 'framer-motion'

const SectionDivider = ({ color = 'cyan' }) => {
  return (
    <div className="flex items-center justify-center py-4 px-6">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-4xl h-px"
        style={{
          background: color === 'cyan'
            ? 'linear-gradient(90deg, transparent, rgba(0,255,245,0.3), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(191,0,255,0.3), transparent)',
        }}
      />
    </div>
  )
}

export default SectionDivider