import { useState } from 'react'
import { Send, Paperclip } from 'lucide-react'
import { motion } from 'framer-motion'

interface ChatInputProps {
  onSend: (message: string) => void
  disabled?: boolean
}

export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (!message.trim() || disabled) return
    onSend(message.trim())
    setMessage('')
  }

  return (
    <div className="glass rounded-2xl p-3 flex items-center gap-2">
      <button className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer" title="Upload document">
        <Paperclip className="w-5 h-5" />
      </button>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        placeholder="Describe your business risk in natural language..."
        disabled={disabled}
        className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm disabled:opacity-50"
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSend}
        disabled={disabled || !message.trim()}
        className="p-2.5 rounded-xl bg-gradient-to-r from-boc-red to-boc-red-light text-white disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed transition-opacity"
      >
        <Send className="w-4 h-4" />
      </motion.button>
    </div>
  )
}
