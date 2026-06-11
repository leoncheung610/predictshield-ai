import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ArrowRight, Shield, Clock } from 'lucide-react'
import { TransactionFlow } from '../components/execution/TransactionFlow'
import { WalletStatus } from '../components/execution/WalletStatus'
import { GlassCard } from '../components/ui/GlassCard'
import { AnimatedButton } from '../components/ui/AnimatedButton'
import { Badge } from '../components/ui/Badge'

type ExecState = 'confirm' | 'executing' | 'success'

export default function HedgeExecute() {
  const [state, setState] = useState<ExecState>('confirm')
  const [step, setStep] = useState(0)
  const navigate = useNavigate()

  const handleExecute = () => {
    setState('executing')
    const timers = [
      setTimeout(() => setStep(1), 1500),
      setTimeout(() => setStep(2), 3000),
      setTimeout(() => setStep(3), 4500),
      setTimeout(() => setState('success'), 6000),
    ]
    return () => timers.forEach(clearTimeout)
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] p-6 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Execute Hedge</h1>
          <p className="text-gray-400 text-sm mt-1">Confirm and execute your prediction market hedge</p>
        </div>

        <AnimatePresence mode="wait">
          {/* Confirm State */}
          {state === 'confirm' && (
            <motion.div key="confirm" exit={{ opacity: 0, y: -20 }} className="grid lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3 space-y-6">
                <GlassCard className="p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-boc-red" />
                    Transaction Summary
                  </h3>
                  <div className="space-y-3">
                    {[
                      ['Market', 'Will Houthi attacks on Red Sea shipping exceed 10 incidents in July 2026?'],
                      ['Direction', 'Buy "Yes" Shares'],
                      ['Shares', '6,800 shares at HKD 1.00'],
                      ['Total Cost', 'HKD 6,800'],
                      ['Potential Payout', 'HKD 10,000'],
                      ['Settlement', 'Automatic via smart contract'],
                      ['Wallet', '0x7a3b...f92d'],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between items-start py-2 border-b border-white/5">
                        <span className="text-sm text-gray-400">{label}</span>
                        <span className={`text-sm font-medium text-right max-w-[55%] ${label === 'Potential Payout' ? 'text-neon-green' : label === 'Total Cost' ? 'text-white' : ''}`}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                <div className="p-4 rounded-xl bg-neon-amber/5 border border-neon-amber/10 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-neon-amber shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-neon-amber">Settlement Timeline</p>
                    <p className="text-xs text-gray-400 mt-1">
                      If the adverse event occurs, payout is automatically disbursed within 24 hours via smart contract — no claims adjuster required.
                    </p>
                  </div>
                </div>

                <AnimatedButton className="w-full" size="lg" onClick={handleExecute}>
                  Confirm & Execute <ArrowRight className="w-5 h-5" />
                </AnimatedButton>
              </div>

              <div className="lg:col-span-2">
                <WalletStatus balance={25000} tokens={0} currency="USDC" />
              </div>
            </motion.div>
          )}

          {/* Executing State */}
          {state === 'executing' && (
            <motion.div key="executing" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3">
                <GlassCard className="p-6">
                  <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                      className="w-6 h-6 border-2 border-boc-red border-t-transparent rounded-full"
                    />
                    Processing Transaction...
                  </h3>
                  <TransactionFlow step={step} />
                </GlassCard>
              </div>
              <div className="lg:col-span-2">
                <WalletStatus balance={step >= 1 ? 18200 : 25000} tokens={step >= 3 ? 6800 : 0} currency="USDC" />
              </div>
            </motion.div>
          )}

          {/* Success State */}
          {state === 'success' && (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto text-center space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', bounce: 0.5, duration: 0.6 }}
              >
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-neon-green/20 to-neon-green/5 rounded-full flex items-center justify-center glow-green">
                  <CheckCircle2 className="w-12 h-12 text-neon-green" />
                </div>
              </motion.div>

              <div>
                <h2 className="text-3xl font-bold mb-2">Hedge Executed!</h2>
                <p className="text-gray-400">Your prediction market hedge is now active and monitoring in real-time</p>
              </div>

              <GlassCard className="p-6 text-left">
                <div className="space-y-3">
                  {[
                    ['Transaction ID', '0x8f2a...b4c7'],
                    ['Market', 'Red Sea attacks > 10 incidents (July)'],
                    ['Direction', 'Buy "Yes"'],
                    ['Cost', 'HKD 6,800'],
                    ['Shares', '6,800 outcome tokens'],
                    ['Status', <Badge variant="success">Active</Badge>],
                  ].map(([label, value]) => (
                    <div key={label as string} className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-sm text-gray-400">{label as string}</span>
                      <span className="text-sm font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <div className="flex gap-4 justify-center">
                <AnimatedButton variant="secondary" onClick={() => navigate('/chat')}>
                  New Analysis
                </AnimatedButton>
                <AnimatedButton onClick={() => navigate('/dashboard')}>
                  View Dashboard <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
