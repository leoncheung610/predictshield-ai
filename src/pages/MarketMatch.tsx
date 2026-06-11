import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { MarketCard } from '../components/market/MarketCard'
import { HedgeProposal } from '../components/market/HedgeProposal'
import { GlassCard } from '../components/ui/GlassCard'
import { useApp } from '../context/AppContext'
import { mockRiskProfile, mockMarketMatches } from '../data/mockData'
import type { MarketMatch } from '../context/AppContext'

export default function MarketMatch() {
  const { marketMatches, riskProfile } = useApp()
  const matches = marketMatches.length > 0 ? marketMatches : mockMarketMatches
  const profile = riskProfile || mockRiskProfile
  const navigate = useNavigate()
  const [selectedMarket, setSelectedMarket] = useState<MarketMatch>(matches[0])

  const handleExecute = () => {
    navigate('/execute')
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] p-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Market Matchmaking</h1>
            <p className="text-gray-400 text-sm mt-1">AI-matched prediction markets for your risk profile</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg glass-light text-sm text-gray-300 hover:text-white cursor-pointer">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search markets..."
                className="pl-9 pr-4 py-2 rounded-lg glass-light text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-boc-red/30"
              />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Markets Found', value: matches.length.toString(), color: 'text-neon-blue' },
            { label: 'Top Correlation', value: `${Math.round(Math.max(...matches.map(m => m.correlation)) * 100)}%`, color: 'text-neon-green' },
            { label: 'Total Liquidity', value: '$6.4M', color: 'text-neon-cyan' },
            { label: 'Avg. Premium', value: `HKD ${Math.round(matches.reduce((s, m) => s + m.cost, 0) / matches.length).toLocaleString()}`, color: 'text-neon-amber' },
          ].map((stat) => (
            <GlassCard key={stat.label} className="p-4 text-center">
              <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
              <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
            </GlassCard>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left - Market Cards */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-semibold text-gray-300">
              Correlated Markets <span className="text-gray-500 text-sm">({matches.length} found)</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {matches.map((market, i) => (
                <MarketCard
                  key={market.id}
                  market={market}
                  index={i}
                  onSelect={setSelectedMarket}
                  selected={selectedMarket.id === market.id}
                />
              ))}
            </div>
          </div>

          {/* Right - Hedge Proposal */}
          <div className="space-y-4">
            <HedgeProposal
              market={selectedMarket}
              exposure={profile.financialExposure}
              onExecute={handleExecute}
            />

            {/* Comparison Table */}
            <GlassCard className="p-5">
              <h4 className="font-semibold text-sm mb-3">Quick Comparison</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-gray-400">Method</span>
                  <span className="text-gray-400">Cost / Coverage</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-neon-green font-medium">Prediction Market</span>
                  <span>HKD 6,800 / 85%</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-gray-300 font-medium">Traditional Insurance</span>
                  <span className="text-gray-500">HKD 15,000+ / 60%</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-gray-300 font-medium">Derivatives</span>
                  <span className="text-gray-500">HKD 12,000+ / 75%</span>
                </div>
              </div>
              <p className="text-xs text-neon-green mt-3">
                ✓ Prediction markets are 30–55% more cost-effective
              </p>
            </GlassCard>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
