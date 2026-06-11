import { motion } from 'framer-motion'
import { Bot, User } from 'lucide-react'

interface ChatBubbleProps {
  type: 'user' | 'ai'
  content: string
  isTyping?: boolean
}

export function ChatBubble({ type, content, isTyping = false }: ChatBubbleProps) {
  const isAI = type === 'ai'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-3 ${isAI ? '' : 'flex-row-reverse'}`}
    >
      <div className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center ${
        isAI ? 'bg-gradient-to-br from-boc-red to-boc-red-light' : 'bg-gradient-to-br from-neon-blue to-neon-cyan'
      }`}>
        {isAI ? <Bot className="w-5 h-5 text-white" /> : <User className="w-5 h-5 text-white" />}
      </div>

      <div className={`max-w-[75%] rounded-2xl px-5 py-3 ${
        isAI
          ? 'glass-light text-gray-200'
          : 'bg-gradient-to-r from-boc-red/20 to-boc-red-light/20 border border-boc-red/20 text-white'
      }`}>
        {isAI && isTyping ? (
          <div className="flex items-center gap-1 py-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-boc-red"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
              />
            ))}
          </div>
        ) : (
          <div className="text-sm leading-relaxed whitespace-pre-wrap">
            {content.split('**').map((part, i) =>
              i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : <span key={i}>{part}</span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}
