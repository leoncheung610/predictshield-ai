import { useState, useEffect } from 'react'

export function useCountUp(end: number, duration: number = 1500, enabled: boolean = true) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!enabled) {
      setValue(end)
      return
    }
    let startTime: number | null = null
    const startValue = 0
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(startValue + (end - startValue) * eased))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, enabled])

  return value
}
