import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { mockProbabilityHistory } from '../../data/mockData'

export function ProbabilityChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass rounded-2xl p-6"
    >
      <h3 className="font-bold mb-1">Risk Probability Trends</h3>
      <p className="text-xs text-gray-400 mb-4">Market-implied probability of tracked risk events</p>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={mockProbabilityHistory}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1A1F35" />
          <XAxis dataKey="date" stroke="#6B7280" tick={{ fontSize: 12 }} />
          <YAxis stroke="#6B7280" tick={{ fontSize: 12 }} domain={[0, 1]} tickFormatter={(v: number) => `${Math.round(v * 100)}%`} />
          <Tooltip
            contentStyle={{ background: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '12px' }}
            labelStyle={{ color: '#9CA3AF' }}
            formatter={(value: number) => [`${Math.round(value * 100)}%`]}
          />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
          <Line type="monotone" dataKey="risk1" name="Red Sea Attacks" stroke="#EF4444" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
          <Line type="monotone" dataKey="risk2" name="Suez Transit Volume" stroke="#F59E0B" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
          <Line type="monotone" dataKey="risk3" name="Insurance Premiums" stroke="#3B82F6" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
