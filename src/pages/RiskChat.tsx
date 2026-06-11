import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, FileText } from 'lucide-react'
import { ChatBubble } from '../components/chat/ChatBubble'
import { ChatInput } from '../components/chat/ChatInput'
import { DocumentUpload } from '../components/chat/DocumentUpload'
import { GlassCard } from '../components/ui/GlassCard'
import { AnimatedButton } from '../components/ui/AnimatedButton'
import { useApp } from '../context/AppContext'
import { quickScenarios, chatResponses, mockRiskProfile, mockMarketMatches } from '../data/mockData'

interface Message {
  id: string
  type: 'user' | 'ai'
  content: string
}

export default function RiskChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      type: 'ai',
      content:
        'Welcome to PredictShield AI! I\'m your risk analysis assistant. Describe your business operations and the risks you\'re concerned about, and I\'ll help you identify hedging opportunities through prediction markets.\n\nYou can type your risk description, choose a quick scenario, or upload trade documents to get started.',
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [showUpload, setShowUpload] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { setRiskProfile, setMarketMatches } = useApp()
  const navigate = useNavigate()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const addMessage = (type: 'user' | 'ai', content: string) => {
    setMessages((prev) => [...prev, { id: Date.now().toString(), type, content }])
  }

  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true)
    const isShipping = userMessage.toLowerCase().includes('ship') || userMessage.toLowerCase().includes('red sea') || userMessage.toLowerCase().includes('freight')
    const responseKey = isShipping ? 'shipping' : 'default'

    setTimeout(() => {
      setIsTyping(false)
      addMessage('ai', chatResponses[responseKey])

      // Set the risk profile in context
      setRiskProfile(mockRiskProfile)
      setMarketMatches(mockMarketMatches)
    }, 2000)
  }

  const handleSend = (message: string) => {
    addMessage('user', message)
    simulateAIResponse(message)
  }

  const handleScenario = (scenario: typeof quickScenarios[0]) => {
    addMessage('user', scenario.prompt)
    simulateAIResponse(scenario.prompt)
  }

  const handleDocumentUpload = (docName: string) => {
    addMessage('user', `I've uploaded a trade document: ${docName}`)
    addMessage('ai', `I've received your document "${docName}". Analyzing the contents...\n\n**Document Analysis Complete:**\n- **Type:** Bill of Lading\n- **Route:** Asia → Europe via Suez Canal\n- **Cargo Value:** HKD 200,000\n- **Transit Period:** June – July 2026\n\nI've identified significant geopolitical and transit delay risks. Let me generate a full risk profile and matching hedge proposals.`)
    setRiskProfile(mockRiskProfile)
    setMarketMatches(mockMarketMatches)
  }

  const hasAnalysis = messages.some((m) => m.content.includes('risk profile') || m.content.includes('Risk Type') || m.content.includes('Hazard'))

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-boc-red to-boc-red-light rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-bold">AI Risk Analyst</h2>
              <p className="text-xs text-gray-400">Powered by Gen AI — Natural Language Risk Profiling</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2 cursor-pointer"
              onClick={() => setShowUpload(!showUpload)}
            >
              <FileText className="w-4 h-4" />
              Upload Doc
            </button>
            {hasAnalysis && (
              <AnimatedButton size="sm" onClick={() => navigate('/analysis')}>
                View Analysis →
              </AnimatedButton>
            )}
          </div>
        </div>

        {/* Document Upload */}
        <AnimatePresence>
          {showUpload && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-6 overflow-hidden"
            >
              <div className="py-4 max-w-md">
                <DocumentUpload onUpload={handleDocumentUpload} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          {messages.map((msg) => (
            <ChatBubble key={msg.id} type={msg.type} content={msg.content} />
          ))}
          {isTyping && <ChatBubble type="ai" content="" isTyping />}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Scenarios */}
        {messages.length <= 2 && (
          <div className="px-6 pb-3">
            <p className="text-xs text-gray-500 mb-2">Quick scenarios:</p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {quickScenarios.map((s) => (
                <motion.button
                  key={s.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="shrink-0 glass-light rounded-xl px-4 py-3 text-left cursor-pointer hover:bg-white/10 transition-colors"
                  onClick={() => handleScenario(s)}
                >
                  <span className="text-lg">{s.icon}</span>
                  <p className="text-sm font-medium text-white mt-1">{s.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5 max-w-[200px]">{s.description}</p>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="px-6 pb-6">
          <ChatInput onSend={handleSend} disabled={isTyping} />
        </div>
      </div>

      {/* Right Sidebar - Live Risk Detection */}
      <div className="hidden lg:block w-80 border-l border-white/5 p-4 space-y-4">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Live Detection</h3>
        {hasAnalysis ? (
          <div className="space-y-3">
            <GlassCard className="p-4">
              <p className="text-xs text-gray-400 mb-1">Hazard Detected</p>
              <p className="text-sm font-medium text-neon-red">Geopolitical Disruption</p>
            </GlassCard>
            <GlassCard className="p-4">
              <p className="text-xs text-gray-400 mb-1">Exposure Window</p>
              <p className="text-sm font-medium">Jun 15 – Jul 31, 2026</p>
            </GlassCard>
            <GlassCard className="p-4">
              <p className="text-xs text-gray-400 mb-1">Financial Exposure</p>
              <p className="text-sm font-medium text-neon-amber">HKD 200,000</p>
            </GlassCard>
            <GlassCard className="p-4">
              <p className="text-xs text-gray-400 mb-1">Risk Level</p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-neon-red animate-glow-pulse" />
                <p className="text-sm font-bold text-neon-red">HIGH</p>
              </div>
            </GlassCard>
            <GlassCard className="p-4">
              <p className="text-xs text-gray-400 mb-1">Markets Found</p>
              <p className="text-sm font-medium text-neon-green">4 correlated markets</p>
            </GlassCard>
            <AnimatedButton className="w-full mt-2" size="sm" onClick={() => navigate('/analysis')}>
              View Full Analysis
            </AnimatedButton>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-gray-600" />
            </div>
            <p className="text-sm text-gray-500">Start a conversation to see live risk detection</p>
          </div>
        )}
      </div>
    </div>
  )
}
