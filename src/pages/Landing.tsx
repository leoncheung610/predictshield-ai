import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Shield, Brain, Link2, BarChart3, ArrowRight, ChevronRight } from 'lucide-react'
import { AnimatedButton } from '../components/ui/AnimatedButton'
import { GlassCard } from '../components/ui/GlassCard'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
}

const features = [
  {
    icon: Brain,
    title: 'Gen AI Risk Engine',
    desc: 'Natural language risk parsing — describe your business exposure in plain English and get structured risk profiles instantly.',
    color: 'from-neon-blue to-neon-cyan',
  },
  {
    icon: Link2,
    title: 'Blockchain Settlement',
    desc: 'Automated smart contract execution for instant, transparent hedging with non-custodial wallet integration.',
    color: 'from-neon-purple to-neon-blue',
  },
  {
    icon: BarChart3,
    title: 'Smart Market Matching',
    desc: 'AI correlates your real-world risk to decentralized prediction markets with mathematical precision.',
    color: 'from-boc-red to-boc-red-light',
  },
]

const steps = [
  { num: '01', title: 'Describe Risk', desc: 'Tell our AI about your business risk in natural language' },
  { num: '02', title: 'AI Analysis', desc: 'Gen AI parses your risk into a structured profile' },
  { num: '03', title: 'Market Match', desc: 'Find correlated prediction markets with high accuracy' },
  { num: '04', title: 'Execute Hedge', desc: 'One-click smart contract execution on blockchain' },
  { num: '05', title: 'Monitor', desc: 'Real-time dashboard tracking your hedge effectiveness' },
]

const integrations = [
  { title: 'SME Loan De-risking', desc: 'Discounted interest rates for hedged clients' },
  { title: 'Digital Treasury Service', desc: 'BOCHK Corporate Banking App plug-in' },
  { title: 'e-HKD Settlement', desc: 'Regulated fiat-to-Web3 seamless transactions' },
]

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-boc-red/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-boc-red/5 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1.5s' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" className="space-y-8">
            <motion.div custom={0} variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light text-sm text-gray-300">
              <Shield className="w-4 h-4 text-boc-red" />
              BOCHK Challenge 2026 — 10th Anniversary
            </motion.div>

            <motion.h1 custom={1} variants={fadeUp} className="text-5xl sm:text-7xl font-extrabold leading-tight">
              <span className="text-white">Predict</span>
              <span className="text-gradient-red">Shield</span>
              <span className="text-white"> AI</span>
            </motion.h1>

            <motion.p custom={2} variants={fadeUp} className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              AI-Powered Decentralized Hedging Platform — Helping SMEs mitigate unconventional operational risks through prediction markets
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AnimatedButton size="lg" onClick={() => navigate('/login')}>
                Start Demo <ArrowRight className="w-5 h-5" />
              </AnimatedButton>
              <AnimatedButton variant="secondary" size="lg" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </AnimatedButton>
            </motion.div>

            {/* Tech badges */}
            <motion.div custom={4} variants={fadeUp} className="flex items-center justify-center gap-3 pt-4">
              {['Gen AI', 'Blockchain', 'Big Data'].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 text-gray-300 bg-white/5">
                  {t}
                </span>
              ))}
              <span className="text-gray-600">|</span>
              {['Risk Mgmt', 'Inclusive Finance', 'Cross-border'].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-medium border border-boc-red/20 text-boc-red/80 bg-boc-red/5">
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Three Pillars of Innovation</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Blending cutting-edge technology to solve real financial pain points for SMEs and cross-border businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <GlassCard hover className="p-8 h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6`}>
                    <f.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{f.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Journey */}
      <section className="py-24 px-6 bg-dark-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Your Hedging Journey</h2>
            <p className="text-gray-400 text-lg">From risk description to real-time monitoring in 5 simple steps</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <GlassCard className="p-6 text-center h-full">
                  <div className="text-3xl font-extrabold text-gradient-red mb-3">{s.num}</div>
                  <h4 className="font-bold mb-2">{s.title}</h4>
                  <p className="text-sm text-gray-400">{s.desc}</p>
                </GlassCard>
                {i < steps.length - 1 && (
                  <div className="hidden sm:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOCHK Integration */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">BOCHK Ecosystem Integration</h2>
            <p className="text-gray-400 text-lg">Seamless synergy with Bank of China (Hong Kong) banking services</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {integrations.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <GlassCard hover glow="red" className="p-8 text-center h-full">
                  <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard glow="red" className="p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Shield Your Risk?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Experience how AI and blockchain transform risk management for the modern enterprise
            </p>
            <AnimatedButton size="lg" onClick={() => navigate('/login')}>
              Launch Demo <ArrowRight className="w-5 h-5" />
            </AnimatedButton>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-boc-red" />
            <span>PredictShield AI — BOCHK Challenge 2026</span>
          </div>
          <span>Gen AI + Blockchain + Big Data | Risk Management + Inclusive Finance + Cross-border</span>
        </div>
      </footer>
    </div>
  )
}
