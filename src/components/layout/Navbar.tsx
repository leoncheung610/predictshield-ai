import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Menu, X, LogOut } from 'lucide-react'
import { useState } from 'react'
import { useApp } from '../../context/AppContext'

export function Navbar() {
  const { isAuthenticated, userName, logout } = useApp()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  if (!isAuthenticated || location.pathname === '/' || location.pathname === '/login') return null

  const navLinks = [
    { to: '/chat', label: 'AI Risk Chat' },
    { to: '/analysis', label: 'Risk Analysis' },
    { to: '/market', label: 'Market Match' },
    { to: '/dashboard', label: 'Dashboard' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/chat" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-boc-red to-boc-red-light rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">PredictShield<span className="text-boc-red">AI</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  location.pathname === link.to
                    ? 'text-white bg-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-gray-400">Welcome, <span className="text-white">{userName}</span></span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-neon-red hover:bg-neon-red/10 transition-colors cursor-pointer"
              onClick={logout}
            >
              <LogOut className="w-4 h-4" />
              Logout
            </motion.button>
          </div>

          <button className="md:hidden text-gray-400 cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-white/5"
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                  location.pathname === link.to ? 'text-white bg-white/10' : 'text-gray-400'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="w-full text-left px-4 py-2 rounded-lg text-sm text-neon-red"
              onClick={() => { logout(); setMobileOpen(false) }}
            >
              Logout
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
