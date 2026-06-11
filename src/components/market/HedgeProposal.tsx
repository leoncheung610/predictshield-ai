import { motion } from 'framer-motion'
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react'
import type { MarketMatch } from '../../context/AppContext'
import { AnimatedButton } from '../ui/AnimatedButton'

interface HedgeProposalProps {
  market: MarketMatch
  exposure: number
  onExecute: () => void
}

export function HedgeProposal({ market, exposure, onExecute }: HedgeProposalProps) {
  const coverageRatio = Math.min((market.potentialPayout / exposure) * 100, 100)
  const roi = ((market.potentialPayout - market.cost) / market.cost * 100).toFixed(0)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass rounded-2xl p-6 glow-red"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-boc-red to-boc-red-light rounded-xl flex items-center justify-center">
          <Shield className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-bold">Recommended Hedge</h3>
          <p className="text-xs text-gray-400">Best correlation match for your risk profile</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center py-2 border-b border-white/5">
          <span className="text-sm text-gray-400">Market</span>
          <span className="text-sm font-medium text-right max-w-[60%]">{market.title}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-white/5">
          <span className="text-sm text-gray-400">Action</span>
          <span className="text-sm font-bold text-neon-green">Buy "{market.direction}" Shares</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-white/5">
          <span className="text-sm text-gray-400">Hedge Cost (Premium)</span>
          <span className="text-sm font-bold">HKD {market.cost.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-white/5">
          <span className="text-sm text-gray-400">Potential Payout</span>
          <span className="text-sm font-bold text-neon-green">HKD {market.potentialPayout.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-white/5">
          <span className="text-sm text-gray-400">Implied Probability</span>
          <span className="text-sm font-bold text-neon-blue">{Math.round(market.probability * 100)}%</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-white/5">
          <span className="text-sm text-gray-400">Coverage Ratio</span>
          <span className="text-sm font-bold">{Math.round(coverageRatio)}%</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-sm text-gray-400">Potential ROI</span>
          <span className="text-sm font-bold text-neon-green">+{roi}%</span>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-neon-green/5 border border-neon-green/10 mb-6">
        <div className="flex items-start gap-2">
          <CheckCircle2 className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-neon-green">Hedge Effective</p>
            <p className="text-xs text-gray-400 mt-1">
              This hedge covers {Math.round(coverageRatio)}% of your financial exposure at {Math.round(market.probability * 100)}% market-implied probability.
              Cost is {((market.cost / exposure) * 100).toFixed(1)}% of total exposure.
            </p>
          </div>
        </div>
      </div>

      <AnimatedButton className="w-full" size="lg" onClick={onExecute}>
        Execute Hedge <ArrowRight className="w-5 h-5" />
      </AnimatedButton>
    </motion.div>
  )
}
