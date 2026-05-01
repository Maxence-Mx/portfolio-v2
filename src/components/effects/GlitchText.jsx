// src/components/effects/GlitchText.jsx

import { useState, useEffect } from 'react'

const chars = '!<>-_\\/[]{}—=+*^?#@$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

const GlitchText = ({ text, className = '', style = {} }) => {
  const [displayed, setDisplayed] = useState(text)

  const scramble = () => {
    let iteration = 0
    const maxIterations = text.length * 3

    const interval = setInterval(() => {
      setDisplayed(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < iteration / 3) return text[i]
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )
      iteration++
      if (iteration >= maxIterations) clearInterval(interval)
    }, 40)
  }

  return (
    <span
      className={className}
      style={{ ...style, cursor: 'default' }}
      onMouseEnter={scramble}
    >
      {displayed}
    </span>
  )
}

export default GlitchText