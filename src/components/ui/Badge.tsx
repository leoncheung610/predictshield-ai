interface BadgeProps {
  children: React.ReactNode
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral'
  className?: string
}

const variantStyles = {
  success: 'bg-neon-green/20 text-neon-green border-neon-green/30',
  warning: 'bg-neon-amber/20 text-neon-amber border-neon-amber/30',
  danger: 'bg-neon-red/20 text-neon-red border-neon-red/30',
  info: 'bg-neon-blue/20 text-neon-blue border-neon-blue/30',
  neutral: 'bg-white/10 text-gray-400 border-white/10',
}

export function Badge({ children, variant = 'info', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}
