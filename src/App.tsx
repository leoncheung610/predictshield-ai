import { Routes, Route, Navigate } from 'react-router-dom'
import { useApp } from './context/AppContext'
import { PageLayout } from './components/layout/PageLayout'
import DemoMode from './components/demo/DemoMode'
import Landing from './pages/Landing'
import Login from './pages/Login'
import RiskChat from './pages/RiskChat'
import RiskAnalysis from './pages/RiskAnalysis'
import MarketMatch from './pages/MarketMatch'
import HedgeExecute from './pages/HedgeExecute'
import Dashboard from './pages/Dashboard'
import DemoSelector from './components/demo/DemoSelector'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useApp()
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/demo" element={<ProtectedRoute><DemoSelector /></ProtectedRoute>} />
          <Route path="/chat" element={<ProtectedRoute><RiskChat /></ProtectedRoute>} />
          <Route path="/analysis" element={<ProtectedRoute><RiskAnalysis /></ProtectedRoute>} />
          <Route path="/market" element={<ProtectedRoute><MarketMatch /></ProtectedRoute>} />
          <Route path="/execute" element={<ProtectedRoute><HedgeExecute /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageLayout>
      <DemoMode />
    </>
  )
}
