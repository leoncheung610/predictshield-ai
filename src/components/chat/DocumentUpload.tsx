import { motion } from 'framer-motion'
import { FileText, Upload, X } from 'lucide-react'
import { useState } from 'react'

interface DocumentUploadProps {
  onUpload: (docName: string) => void
}

export function DocumentUpload({ onUpload }: DocumentUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)
    const fileName = e.dataTransfer.files?.[0]?.name || 'document.pdf'
    setUploadedFile(fileName)
    onUpload(fileName)
  }

  const handleClick = () => {
    const fileName = 'Bill_of_Lading_2026.pdf'
    setUploadedFile(fileName)
    onUpload(fileName)
  }

  const clearFile = () => {
    setUploadedFile(null)
  }

  if (uploadedFile) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 p-3 rounded-xl glass-light"
      >
        <FileText className="w-5 h-5 text-neon-blue" />
        <span className="text-sm text-gray-300 flex-1 truncate">{uploadedFile}</span>
        <button onClick={clearFile} className="text-gray-500 hover:text-neon-red cursor-pointer">
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    )
  }

  return (
    <div
      className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors cursor-pointer ${
        dragActive ? 'border-boc-red bg-boc-red/5' : 'border-white/10 hover:border-white/20'
      }`}
      onDragOver={(e) => { e.preventDefault(); setDragActive(true) }}
      onDragLeave={() => setDragActive(false)}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <Upload className="w-8 h-8 text-gray-500 mx-auto mb-2" />
      <p className="text-sm text-gray-400">Upload trade documents</p>
      <p className="text-xs text-gray-500 mt-1">Bill of Lading, Purchase Orders, Invoices</p>
    </div>
  )
}
