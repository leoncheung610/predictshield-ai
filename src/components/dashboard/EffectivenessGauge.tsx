import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

interface EffectivenessGaugeProps {
  value: number
}

export function EffectivenessGauge({ value }: EffectivenessGaugeProps) {
  const data = [
    { name: 'Covered', value: value },
    { name: 'Uncovered', value: 100 - value },
  ]
  const colors = ['#10B981', '#1A1F35']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass rounded-2xl p-6"
    >
      <h3 className="font-bold mb-1">Hedge Effectiveness</h3>
      <p className="text-xs text-gray-400 mb-4">Coverage ratio across all active positions</p>

      <div className="relative">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              strokeWidth={0}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={colors[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-neon-green">{value}%</span>
          <span className="text-xs text-gray-400">Covered</span>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Total Exposure</span>
          <span className="font-medium">HKD 200,000</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Hedged Amount</span>
          <span className="font-medium text-neon-green">HKD {Math.round(200000 * value / 100).toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Uncovered</span>
          <span className="font-medium text-neon-amber">HKD {Math.round(200000 * (100 - value) / 100).toLocaleString()}</span>
        </div>
      </div>
    </motion.div>
  )
}
