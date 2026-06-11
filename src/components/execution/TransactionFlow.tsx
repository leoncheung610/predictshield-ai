import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

interface TransactionFlowProps {
  step: number
}

const steps = [
  { label: 'HKD Deposit', desc: 'Deduct from corporate account', icon: '🏦' },
  { label: 'Convert to USDC', desc: 'Fiat to stablecoin via BOCHK', icon: '💱' },
  { label: 'Smart Contract', desc: 'Execute prediction market trade', icon: '📝' },
  { label: 'Outcome Tokens', desc: 'Hold in non-custodial wallet', icon: '🛡️' },
]

export function TransactionFlow({ step }: TransactionFlowProps) {
  return (
    <div className="space-y-3">
      {steps.map((s, i) => {
        const isActive = i === step
        const isDone = i < step

        return (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${
              isActive
                ? 'glass glow-red'
                : isDone
                ? 'bg-neon-green/5 border border-neon-green/20'
                : 'bg-dark-700/50 opacity-50'
            }`}
          >
            <div className="text-2xl">{s.icon}</div>
            <div className="flex-1">
              <p className={`text-sm font-semibold ${isActive ? 'text-white' : isDone ? 'text-neon-green' : 'text-gray-400'}`}>
                {s.label}
              </p>
              <p className="text-xs text-gray-400">{s.desc}</p>
            </div>
            {isDone && <CheckCircle2 className="w-5 h-5 text-neon-green" />}
            {isActive && (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-3 h-3 rounded-full bg-boc-red"
              />
            )}
            {i < steps.length - 1 && (
              <ArrowRight className="w-4 h-4 text-gray-600 absolute -bottom-3 left-8 hidden" />
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
