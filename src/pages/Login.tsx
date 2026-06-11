import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Lock, User, Building2 } from 'lucide-react'
import { AnimatedButton } from '../components/ui/AnimatedButton'
import { useApp } from '../context/AppContext'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useApp()
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!username) return
    setLoading(true)
    setTimeout(() => {
      login(username || 'Raymond Chan')
      navigate('/chat')
    }, 1200)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-dark-900 bg-grid-pattern relative">
      {/* Background effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-boc-red/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-blue/5 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-boc-red to-boc-red-light rounded-xl flex items-center justify-center glow-red">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">PredictShield<span className="text-boc-red">AI</span></h1>
              <p className="text-sm text-gray-500">Powered by BOCHK</p>
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Decentralized Risk<br />
            <span className="text-gradient-red">Hedging Platform</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            AI-powered risk analysis meets blockchain settlement. Protect your business from unconventional operational risks with prediction market hedges.
          </p>
          <div className="space-y-3">
            {['AI Risk Profiling', 'Smart Contract Execution', 'Real-time Monitoring'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-boc-red" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass rounded-2xl p-8 glow-red">
            <div className="md:hidden flex items-center gap-2 mb-6">
              <Shield className="w-6 h-6 text-boc-red" />
              <span className="font-bold text-lg">PredictShield<span className="text-boc-red">AI</span></span>
            </div>

            <h3 className="text-xl font-bold mb-1">Corporate Banking Login</h3>
            <p className="text-gray-400 text-sm mb-6">Access your risk management dashboard</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Corporate Account ID</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="e.g. raymond.chan"
                    className="w-full pl-11 pr-4 py-3 bg-dark-700 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-boc-red/50 focus:ring-1 focus:ring-boc-red/30 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-11 pr-4 py-3 bg-dark-700 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-boc-red/50 focus:ring-1 focus:ring-boc-red/30 transition-colors"
                    onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-lg bg-neon-blue/5 border border-neon-blue/10">
                <Building2 className="w-4 h-4 text-neon-blue shrink-0" />
                <span className="text-xs text-neon-blue">Secured by BOCHK Enterprise Security Framework</span>
              </div>

              <AnimatedButton
                className="w-full"
                size="lg"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    Sign In to PredictShield
                  </>
                )}
              </AnimatedButton>

              <p className="text-center text-xs text-gray-500 mt-4">
                Demo Mode — Enter any username to access the platform
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
