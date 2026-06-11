import { motion } from 'framer-motion'
import { AlertTriangle, Clock, DollarSign } from 'lucide-react'
import type { RiskProfile } from '../../context/AppContext'

interface RiskProfileCardProps {
  profile: RiskProfile
}

export function RiskProfileCard({ profile }: RiskProfileCardProps) {
  const levelColors = {
    Low: 'text-neon-green',
    Medium: 'text-neon-amber',
    High: 'text-neon-red',
    Critical: 'text-neon-red',
  }

  const levelBg = {
    Low: 'bg-neon-green/10 border-neon-green/20',
    Medium: 'bg-neon-amber/10 border-neon-amber/20',
    High: 'bg-neon-red/10 border-neon-red/20',
    Critical: 'bg-neon-red/10 border-neon-red/20',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-6 space-y-5"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">Risk Profile</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${levelBg[profile.riskLevel]} ${levelColors[profile.riskLevel]}`}>
          {profile.riskLevel.toUpperCase()}
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-neon-red/10 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-neon-red" />
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Hazard</p>
            <p className="text-sm font-medium">{profile.hazard}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-neon-amber/10 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5 text-neon-amber" />
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Exposure Window</p>
            <p className="text-sm font-medium">{profile.exposureWindow}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-neon-blue/10 flex items-center justify-center shrink-0">
            <DollarSign className="w-5 h-5 text-neon-blue" />
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Financial Exposure</p>
            <p className="text-sm font-medium">HKD {profile.financialExposure.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-white/5">
        <p className="text-xs text-gray-400 mb-2">Description</p>
        <p className="text-sm text-gray-300 leading-relaxed">{profile.description}</p>
      </div>
    </motion.div>
  )
}
