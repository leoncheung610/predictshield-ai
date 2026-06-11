import { motion } from 'framer-motion'
import { Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react'

interface WalletStatusProps {
  balance: number
  tokens: number
  currency: string
}

export function WalletStatus({ balance, tokens, currency }: WalletStatusProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-6"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 bg-gradient-to-br from-neon-purple to-neon-blue rounded-xl flex items-center justify-center">
          <Wallet className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-bold">Non-Custodial Wallet</h3>
          <p className="text-xs text-gray-400">0x7a3b...f92d</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-dark-700/50">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">USDC Balance</span>
            <span className="text-lg font-bold">{currency} {balance.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <ArrowUpRight className="w-3 h-3 text-neon-green" />
            <span className="text-xs text-neon-green">Secured by smart contract</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-dark-700/50">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Outcome Tokens</span>
            <span className="text-lg font-bold text-neon-blue">{tokens} shares</span>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <ArrowDownRight className="w-3 h-3 text-neon-amber" />
            <span className="text-xs text-neon-amber">Held until settlement</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
