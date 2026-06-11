import { motion } from 'framer-motion'
import { Shield, TrendingUp, Activity, DollarSign } from 'lucide-react'
import { useCountUp } from '../../hooks/useCountUp'

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string
  suffix?: string
  color: string
  delay: number
}

function StatCard({ icon, label, value, color, delay }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="glass rounded-2xl p-5"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-gray-400">{label}</span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>
          {icon}
        </div>
      </div>
      <p className="text-2xl font-bold">{value}</p>
    </motion.div>
  )
}

export function HedgePortfolio() {
  const totalValue = useCountUp(16700, 1500)
  const activeHedges = useCountUp(3, 800)

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        icon={<Shield className="w-4 h-4 text-white" />}
        label="Total Hedge Value"
        value={`HKD ${totalValue.toLocaleString()}`}
        color="bg-gradient-to-br from-boc-red to-boc-red-light"
        delay={0}
      />
      <StatCard
        icon={<Activity className="w-4 h-4 text-white" />}
        label="Active Hedges"
        value={activeHedges.toString()}
        color="bg-gradient-to-br from-neon-blue to-neon-cyan"
        delay={0.1}
      />
      <StatCard
        icon={<TrendingUp className="w-4 h-4 text-white" />}
        label="Avg. Effectiveness"
        value="83%"
        color="bg-gradient-to-br from-neon-green to-neon-cyan"
        delay={0.2}
      />
      <StatCard
        icon={<DollarSign className="w-4 h-4 text-white" />}
        label="Potential Payout"
        value="HKD 55,000"
        color="bg-gradient-to-br from-neon-amber to-neon-red"
        delay={0.3}
      />
    </div>
  )
}
