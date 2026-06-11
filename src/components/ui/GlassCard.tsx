import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: 'red' | 'blue' | 'green' | 'none'
  onClick?: () => void
}

export function GlassCard({ children, className = '', hover = false, glow = 'none', onClick }: GlassCardProps) {
  const glowClass = glow === 'red' ? 'glow-red' : glow === 'blue' ? 'glow-blue' : glow === 'green' ? 'glow-green' : ''

  return (
    <motion.div
      className={`glass rounded-2xl ${glowClass} ${hover ? 'cursor-pointer' : ''} ${className}`}
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}
