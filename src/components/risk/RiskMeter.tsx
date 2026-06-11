import { motion } from 'framer-motion'

interface RiskMeterProps {
  level: 'Low' | 'Medium' | 'High' | 'Critical'
}

const levelValues = { Low: 25, Medium: 50, High: 75, Critical: 95 }
const levelColors = {
  Low: '#10B981',
  Medium: '#F59E0B',
  High: '#EF4444',
  Critical: '#EF4444',
}

export function RiskMeter({ level }: RiskMeterProps) {
  const value = levelValues[level]
  const color = levelColors[level]
  const radius = 80
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48">
        <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r={radius} fill="none" stroke="#1A1F35" strokeWidth="12" />
          <motion.circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold"
            style={{ color }}
          >
            {value}%
          </motion.span>
          <span className="text-xs text-gray-400">Risk Score</span>
        </div>
      </div>
      <div className="mt-4 text-center">
        <span className="text-sm font-semibold" style={{ color }}>
          {level.toUpperCase()} RISK
        </span>
      </div>
    </div>
  )
}
