import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Users } from 'lucide-react'
import { GlassCard } from '../ui/GlassCard'
import { AnimatedButton } from '../ui/AnimatedButton'
import { allDemoScenarios } from '../../data/demoScenarios'
import { useApp } from '../../context/AppContext'

export default function DemoSelector() {
  const navigate = useNavigate()
  const { setRiskProfile, setMarketMatches, setHedgePositions, setScenarioId } = useApp()

  const handleSelectScenario = (scenarioId: string) => {
    const scenario = allDemoScenarios.find(s => s.id === scenarioId)
    if (!scenario) return

    setScenarioId(scenarioId)
    setRiskProfile(scenario.data.profile)
    setMarketMatches(scenario.data.markets)
    setHedgePositions(scenario.data.positions)
    navigate('/chat')
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] p-6 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light text-sm text-gray-300"
          >
            <Users className="w-4 h-4 text-boc-red" />
            Demo Scenarios — 選擇演示場景
          </motion.div>
          <h1 className="text-3xl font-bold">Choose Your Demo Story</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            每個場景代表一個真實的 SME 用戶旅程，從風險描述到對沖執行，完整展示 PredictShield AI 的價值
          </p>
        </div>

        {/* Scenario Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {allDemoScenarios.map((scenario, i) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <GlassCard
                hover
                glow={scenario.id === 'shipping' ? 'red' : scenario.id === 'esg' ? 'green' : undefined}
                className="p-6 h-full flex flex-col cursor-pointer"
                onClick={() => handleSelectScenario(scenario.id)}
              >
                <div className="text-4xl mb-4">{scenario.icon}</div>
                <h3 className="text-lg font-bold mb-1">{scenario.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{scenario.titleEn}</p>
                <div className="mb-4">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full bg-white/5 ${scenario.tagColor}`}>
                    {scenario.tag}
                  </span>
                </div>
                <div className="text-sm text-gray-300 mb-4 flex-1">
                  <p className="font-medium text-white mb-1">Persona</p>
                  <p>{scenario.persona}</p>
                </div>
                <div className="text-sm text-gray-400 mb-6">
                  <p>Exposure: HKD {scenario.data.profile.financialExposure.toLocaleString()}</p>
                  <p>Markets: {scenario.data.markets.length} correlated</p>
                  <p>Risk: <span className={scenario.data.profile.riskLevel === 'Critical' ? 'text-neon-red' : scenario.data.profile.riskLevel === 'High' ? 'text-neon-amber' : 'text-neon-green'}>{scenario.data.profile.riskLevel}</span></p>
                </div>
                <AnimatedButton className="w-full" size="sm" onClick={() => handleSelectScenario(scenario.id)}>
                  Start Demo <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Quick tip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-500"
        >
          💡 提示：選擇場景後將自動載入對應的 AI 對話、市場數據和對沖方案
        </motion.div>
      </motion.div>
    </div>
  )
}
