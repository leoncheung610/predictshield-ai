import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Square, SkipForward, RotateCcw, Eye } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { allDemoScenarios } from '../../data/demoScenarios'

interface DemoStep {
  path: string
  label: string
  duration: number // ms to stay on this step
  action?: string // description of what happens
  requiresAuth?: boolean
  preAction?: () => void
}

const demoSteps: DemoStep[] = [
  { path: '/', label: 'Landing — 品牌首頁', duration: 4000, action: '展示產品定位與三大科技支柱' },
  { path: '/login', label: 'Login — 企業登入', duration: 2500, action: '模擬 BOCHK 企業客戶登入' },
  {
    path: '/demo',
    label: 'Demo 場景選擇',
    duration: 3000,
    action: '選擇紅海航運中斷場景',
    requiresAuth: true,
    preAction: (ctx: { login: (n: string) => void; setScenarioId: (id: string) => void; setRiskProfile: (p: any) => void; setMarketMatches: (m: any) => void; setHedgePositions: (h: any) => void }) => {
      ctx.login('Raymond Chan')
      const scenario = allDemoScenarios[0]
      ctx.setScenarioId(scenario.id)
      ctx.setRiskProfile(scenario.data.profile)
      ctx.setMarketMatches(scenario.data.markets)
      ctx.setHedgePositions(scenario.data.positions)
    },
  },
  { path: '/chat', label: 'AI 風險對話', duration: 6000, action: '用戶描述風險 → AI 即時解析', requiresAuth: true },
  { path: '/analysis', label: '風險分析報告', duration: 5000, action: '展示結構化風險畫像與情境分析', requiresAuth: true },
  { path: '/market', label: '市場匹配', duration: 5000, action: '4 個預測市場對沖方案對比', requiresAuth: true },
  { path: '/execute', label: '執行對沖', duration: 7000, action: 'HKD→USDC→智能合約→代幣，4 步動畫', requiresAuth: true },
  { path: '/dashboard', label: '風險儀表盤', duration: 5000, action: '實時監控組合、概率趨勢、對沖有效性', requiresAuth: true },
]

export default function DemoMode() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [autoAdvance, setAutoAdvance] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const appContext = useApp()

  const startDemo = useCallback(() => {
    setCurrentStep(0)
    setIsPlaying(true)
    setAutoAdvance(true)
    // Execute pre-action for first step if any
    if (demoSteps[0].preAction) {
      demoSteps[0].preAction(appContext)
    }
    navigate(demoSteps[0].path)
  }, [navigate, appContext])

  const stopDemo = useCallback(() => {
    setIsPlaying(false)
    setAutoAdvance(false)
  }, [])

  const goToStep = useCallback((stepIndex: number) => {
    const step = demoSteps[stepIndex]
    // Execute pre-action (like login) before navigating
    if (step.preAction) {
      step.preAction(appContext)
    } else if (step.requiresAuth && !appContext.isAuthenticated) {
      // Auto-login if step requires auth but user isn't logged in
      appContext.login('Raymond Chan')
      const scenario = allDemoScenarios[0]
      appContext.setScenarioId(scenario.id)
      appContext.setRiskProfile(scenario.data.profile)
      appContext.setMarketMatches(scenario.data.markets)
      appContext.setHedgePositions(scenario.data.positions)
    }
    setCurrentStep(stepIndex)
    navigate(step.path)
  }, [appContext, navigate])

  const nextStep = useCallback(() => {
    const next = currentStep + 1
    if (next < demoSteps.length) {
      goToStep(next)
    } else {
      setIsPlaying(false)
      setAutoAdvance(false)
    }
  }, [currentStep, goToStep])

  const restartDemo = useCallback(() => {
    setCurrentStep(0)
    setIsPlaying(true)
    setAutoAdvance(true)
    if (demoSteps[0].preAction) {
      demoSteps[0].preAction(appContext)
    }
    navigate(demoSteps[0].path)
  }, [navigate, appContext])

  // Auto advance
  useEffect(() => {
    if (!autoAdvance || !isPlaying) return
    const timer = setTimeout(nextStep, demoSteps[currentStep].duration)
    return () => clearTimeout(timer)
  }, [autoAdvance, isPlaying, currentStep, nextStep])

  // Sync step with current path
  useEffect(() => {
    if (!isPlaying) return
    const idx = demoSteps.findIndex(s => s.path === location.pathname)
    if (idx >= 0 && idx !== currentStep) {
      setCurrentStep(idx)
    }
  }, [location.pathname, isPlaying, currentStep])

  const progress = ((currentStep + 1) / demoSteps.length) * 100

  return (
    <>
      {/* Floating Demo Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-boc-red to-boc-red-light rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
        title="Demo Mode"
      >
        <Eye className="w-6 h-6 text-white" />
      </motion.button>

      {/* Demo Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-80 glass rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-boc-red/20 to-boc-red-light/10 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm">Demo Mode</h3>
                  <p className="text-xs text-gray-400">自動演示完整用戶旅程</p>
                </div>
                <div className="flex items-center gap-1">
                  {!isPlaying ? (
                    <button
                      onClick={startDemo}
                      className="w-8 h-8 rounded-lg bg-neon-green/20 text-neon-green flex items-center justify-center hover:bg-neon-green/30 transition-colors cursor-pointer"
                    >
                      <Play className="w-4 h-4" />
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={stopDemo}
                        className="w-8 h-8 rounded-lg bg-neon-amber/20 text-neon-amber flex items-center justify-center hover:bg-neon-amber/30 transition-colors cursor-pointer"
                      >
                        <Square className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={nextStep}
                        className="w-8 h-8 rounded-lg bg-neon-blue/20 text-neon-blue flex items-center justify-center hover:bg-neon-blue/30 transition-colors cursor-pointer"
                      >
                        <SkipForward className="w-4 h-4" />
                      </button>
                      <button
                        onClick={restartDemo}
                        className="w-8 h-8 rounded-lg bg-neon-purple/20 text-neon-purple flex items-center justify-center hover:bg-neon-purple/30 transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </>
                  )}
                </div>
              </div>
              {/* Progress Bar */}
              <div className="mt-3 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-boc-red to-neon-green rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Steps List */}
            <div className="px-3 py-3 max-h-72 overflow-y-auto space-y-1">
              {demoSteps.map((step, i) => (
                <button
                  key={step.path + i}
                  onClick={() => {
                    goToStep(i)
                    if (!isPlaying) {
                      setIsPlaying(true)
                      setAutoAdvance(true)
                    }
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors cursor-pointer ${
                    i === currentStep
                      ? 'bg-boc-red/15 border border-boc-red/20'
                      : i < currentStep
                      ? 'bg-neon-green/5 border border-neon-green/10'
                      : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      i === currentStep
                        ? 'bg-boc-red text-white'
                        : i < currentStep
                        ? 'bg-neon-green/20 text-neon-green'
                        : 'bg-white/10 text-gray-500'
                    }`}>
                      {i < currentStep ? '✓' : i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-medium truncate ${i === currentStep ? 'text-white' : 'text-gray-400'}`}>
                        {step.label}
                      </p>
                      {i === currentStep && step.action && (
                        <p className="text-[10px] text-neon-amber mt-0.5">{step.action}</p>
                      )}
                    </div>
                    {i === currentStep && isPlaying && (
                      <div className="w-2 h-2 rounded-full bg-boc-red animate-glow-pulse shrink-0" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 bg-dark-800/50 border-t border-white/5 flex items-center justify-between">
              <p className="text-[10px] text-gray-500">
                {isPlaying ? `Step ${currentStep + 1} / ${demoSteps.length}` : '點擊 ▶ 開始演示'}
              </p>
              <p className="text-[10px] text-gray-600">~40s total</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
