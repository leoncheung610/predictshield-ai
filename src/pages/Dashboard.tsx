import { motion } from 'framer-motion'
import { HedgePortfolio } from '../components/dashboard/HedgePortfolio'
import { ProbabilityChart } from '../components/dashboard/ProbabilityChart'
import { EffectivenessGauge } from '../components/dashboard/EffectivenessGauge'
import { ActiveHedgeList } from '../components/dashboard/ActiveHedgeList'
import { useApp } from '../context/AppContext'

export default function Dashboard() {
  const { hedgePositions } = useApp()

  return (
    <div className="min-h-[calc(100vh-4rem)] p-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Risk Management Dashboard</h1>
            <p className="text-gray-400 text-sm mt-1">Real-time monitoring of your hedge portfolio and risk exposure</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-light text-xs">
              <div className="w-2 h-2 rounded-full bg-neon-green animate-glow-pulse" />
              <span className="text-neon-green">Live</span>
            </div>
            <span className="text-xs text-gray-500">Last updated: just now</span>
          </div>
        </div>

        {/* Portfolio Stats */}
        <HedgePortfolio />

        {/* Charts Row */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ProbabilityChart />
          </div>
          <EffectivenessGauge value={83} />
        </div>

        {/* Active Hedges */}
        <ActiveHedgeList positions={hedgePositions} />

        {/* BOCHK Integration Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-boc-red to-boc-red-light rounded-xl flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-lg">BOC</span>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-bold mb-1">BOCHK Ecosystem Integration</h3>
            <p className="text-sm text-gray-400">
              Active hedgers qualify for discounted SME loan rates. PredictShield integrates with BOCHK Corporate Banking for seamless treasury management via e-HKD settlement.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neon-green/5 border border-neon-green/10 text-sm text-neon-green shrink-0">
            <span className="w-2 h-2 rounded-full bg-neon-green" />
            Eligible for rate discount
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
