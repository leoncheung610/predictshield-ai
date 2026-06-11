import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { Badge } from '../ui/Badge'
import type { HedgePosition } from '../../context/AppContext'

interface ActiveHedgeListProps {
  positions: HedgePosition[]
}

export function ActiveHedgeList({ positions }: ActiveHedgeListProps) {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass rounded-2xl p-6"
    >
      <h3 className="font-bold mb-1">Active Hedge Positions</h3>
      <p className="text-xs text-gray-400 mb-4">Real-time monitoring of your prediction market hedges</p>

      <div className="space-y-3">
        {positions.map((pos, i) => (
          <motion.div
            key={pos.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 rounded-xl bg-dark-700/50 hover:bg-dark-700 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1 mr-4">
                <p className="text-sm font-medium leading-relaxed">{pos.market}</p>
              </div>
              <Badge variant={pos.status === 'Active' ? 'success' : 'neutral'}>
                {pos.status}
              </Badge>
            </div>

            <div className="grid grid-cols-4 gap-3 mt-3">
              <div>
                <p className="text-xs text-gray-400">Direction</p>
                <p className="text-sm font-medium text-neon-green">Buy {pos.direction}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Cost</p>
                <p className="text-sm font-medium">HKD {pos.cost.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Payout</p>
                <p className="text-sm font-medium text-neon-green">HKD {pos.potentialPayout.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Effectiveness</p>
                <div className="flex items-center gap-1">
                  <div className="w-16 h-1.5 bg-dark-600 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-neon-green to-neon-cyan rounded-full"
                      style={{ width: `${pos.effectiveness * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-neon-green">{Math.round(pos.effectiveness * 100)}%</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>Created: {pos.createdAt}</span>
                <span>•</span>
                <span>Probability: {Math.round(pos.probability * 100)}%</span>
              </div>
              <button
                className="text-xs text-neon-blue hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                onClick={() => navigate('/market')}
              >
                Details <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
