import { motion } from 'framer-motion'
import { TrendingUp, Droplets } from 'lucide-react'
import type { MarketMatch } from '../../context/AppContext'

interface MarketCardProps {
  market: MarketMatch
  index: number
  onSelect: (market: MarketMatch) => void
  selected?: boolean
}

export function MarketCard({ market, index, onSelect, selected = false }: MarketCardProps) {
  const corrColor = market.correlation >= 0.9 ? 'text-neon-green' : market.correlation >= 0.8 ? 'text-neon-amber' : 'text-gray-400'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={() => onSelect(market)}
      className={`glass rounded-2xl p-5 cursor-pointer transition-all duration-200 ${
        selected ? 'glow-red ring-1 ring-boc-red/40' : 'hover:bg-white/5'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-boc-red/10 text-boc-red border border-boc-red/20">
          Market #{market.id}
        </span>
        <span className={`text-xs font-bold ${corrColor}`}>
          {Math.round(market.correlation * 100)}% match
        </span>
      </div>

      <h4 className="text-sm font-medium mb-4 leading-relaxed">{market.title}</h4>

      <div className="grid grid-cols-3 gap-3">
        <div>
          <p className="text-xs text-gray-400">Probability</p>
          <p className="text-sm font-bold text-neon-blue">{Math.round(market.probability * 100)}%</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Liquidity</p>
          <p className="text-sm font-bold flex items-center gap-1">
            <Droplets className="w-3 h-3 text-neon-cyan" />
            {market.liquidity}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Direction</p>
          <p className="text-sm font-bold flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-neon-green" />
            Buy {market.direction}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400">Cost</p>
          <p className="text-sm font-bold">HKD {market.cost.toLocaleString()}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Potential Payout</p>
          <p className="text-sm font-bold text-neon-green">HKD {market.potentialPayout.toLocaleString()}</p>
        </div>
      </div>
    </motion.div>
  )
}
