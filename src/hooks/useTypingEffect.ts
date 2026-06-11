import { useState, useEffect } from 'react'

export function useTypingEffect(text: string, speed: number = 30, enabled: boolean = true) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    if (!enabled) {
      setDisplayedText(text)
      return
    }
    setDisplayedText('')
    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed, enabled])

  return displayedText
}
