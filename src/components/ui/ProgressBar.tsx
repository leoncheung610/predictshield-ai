interface ProgressBarProps {
  value: number
  max?: number
  color?: string
  className?: string
  showLabel?: boolean
}

export function ProgressBar({ value, max = 100, color = 'from-boc-red to-boc-red-light', className = '', showLabel = true }: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100)

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between mb-1">
          <span className="text-xs text-gray-400">Progress</span>
          <span className="text-xs text-gray-300">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
