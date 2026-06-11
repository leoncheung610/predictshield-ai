import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, FileWarning } from 'lucide-react'
import { RiskProfileCard } from '../components/risk/RiskProfileCard'
import { RiskMeter } from '../components/risk/RiskMeter'
import { GlassCard } from '../components/ui/GlassCard'
import { AnimatedButton } from '../components/ui/AnimatedButton'
import { Badge } from '../components/ui/Badge'
import { useApp } from '../context/AppContext'
import { mockRiskProfile, mockMarketMatches } from '../data/mockData'

export default function RiskAnalysis() {
  const { riskProfile, setMarketMatches } = useApp()
  const navigate = useNavigate()
  const profile = riskProfile || mockRiskProfile

  const handleProceed = () => {
    setMarketMatches(mockMarketMatches)
    navigate('/market')
  }

  const scenarios = [
    { label: 'Base Case', probability: '30%', loss: 'HKD 0', desc: 'No disruption occurs' },
    { label: 'Moderate Disruption', probability: '45%', loss: 'HKD 80,000', desc: 'Partial route closure, 2-week delay' },
    { label: 'Severe Disruption', probability: '20%', loss: 'HKD 200,000', desc: 'Full route closure, rerouting required' },
    { label: 'Catastrophic', probability: '5%', loss: 'HKD 350,000+', desc: 'Prolonged closure, contract penalties' },
  ]

  return (
    <div className="min-h-[calc(100vh-4rem)] p-6 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Risk Analysis Report</h1>
            <p className="text-gray-400 text-sm mt-1">AI-generated risk profile based on your input</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="danger">High Risk</Badge>
            <Badge variant="info">4 Markets Available</Badge>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left - Risk Profile */}
          <div className="lg:col-span-2 space-y-6">
            <RiskProfileCard profile={profile} />

            {/* Scenario Analysis */}
            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-5">
                <FileWarning className="w-5 h-5 text-neon-amber" />
                <h3 className="font-bold text-lg">Impact Scenario Analysis</h3>
              </div>
              <div className="space-y-3">
                {scenarios.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-dark-700/50 hover:bg-dark-700 transition-colors"
                  >
                    <div className="w-24 shrink-0">
                      <p className="text-sm font-medium">{s.label}</p>
                    </div>
                    <div className="w-20 shrink-0">
                      <Badge variant={i === 0 ? 'success' : i === 1 ? 'warning' : i === 2 ? 'danger' : 'danger'}>
                        {s.probability}
                      </Badge>
                    </div>
                    <div className="w-32 shrink-0">
                      <p className="text-sm font-bold text-white">{s.loss}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-400">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Right - Risk Meter & Action */}
          <div className="space-y-6">
            <GlassCard className="p-6 flex flex-col items-center">
              <h3 className="font-bold mb-4">Risk Severity</h3>
              <RiskMeter level={profile.riskLevel} />
            </GlassCard>

            <GlassCard className="p-6" glow="red">
              <h3 className="font-bold mb-3">AI Recommendation</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Your risk profile indicates a <span className="text-neon-red font-semibold">HIGH</span> exposure to geopolitical disruption. 
                We've identified 4 prediction markets with strong correlation (79%–94%) to your risk.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Hedging via prediction markets could be <span className="text-neon-green font-semibold">30–50% cheaper</span> than equivalent traditional niche insurance.
              </p>
              <AnimatedButton className="w-full" onClick={handleProceed}>
                Find Matching Markets <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </GlassCard>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
