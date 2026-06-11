import { useState, useContext, createContext, type ReactNode } from 'react'

export interface RiskProfile {
  hazard: string
  exposureWindow: string
  financialExposure: number
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical'
  description: string
}

export interface HedgePosition {
  id: string
  market: string
  direction: 'Yes' | 'No'
  cost: number
  potentialPayout: number
  probability: number
  status: 'Active' | 'Settled' | 'Expired'
  effectiveness: number
  createdAt: string
}

export interface MarketMatch {
  id: string
  title: string
  probability: number
  liquidity: string
  correlation: number
  direction: 'Yes' | 'No'
  cost: number
  potentialPayout: number
}

interface AppState {
  isAuthenticated: boolean
  userName: string
  riskProfile: RiskProfile | null
  hedgePositions: HedgePosition[]
  marketMatches: MarketMatch[]
  scenarioId: string
}

interface AppContextType extends AppState {
  login: (name: string) => void
  logout: () => void
  setRiskProfile: (profile: RiskProfile) => void
  addHedgePosition: (position: HedgePosition) => void
  setHedgePositions: (positions: HedgePosition[]) => void
  setMarketMatches: (matches: MarketMatch[]) => void
  setScenarioId: (id: string) => void
}

const AppContext = createContext<AppContextType | null>(null)

export function useApp(): AppContextType {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}

const defaultHedges: HedgePosition[] = [
  {
    id: 'H-001',
    market: 'Suez Canal transit volume drops below 40 ships/day',
    direction: 'Yes',
    cost: 5200,
    potentialPayout: 18000,
    probability: 0.72,
    status: 'Active',
    effectiveness: 0.85,
    createdAt: '2026-05-28',
  },
  {
    id: 'H-002',
    market: 'US imposes new tariff on EU goods before Aug 2026',
    direction: 'Yes',
    cost: 3400,
    potentialPayout: 12000,
    probability: 0.58,
    status: 'Active',
    effectiveness: 0.72,
    createdAt: '2026-06-01',
  },
  {
    id: 'H-003',
    market: 'Red Sea shipping insurance premium exceeds 2%',
    direction: 'Yes',
    cost: 8100,
    potentialPayout: 25000,
    probability: 0.65,
    status: 'Active',
    effectiveness: 0.91,
    createdAt: '2026-06-05',
  },
]

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>({
    isAuthenticated: false,
    userName: '',
    riskProfile: null,
    hedgePositions: defaultHedges,
    marketMatches: [],
    scenarioId: 'shipping',
  })

  const login = (name: string) => {
    setState((s) => ({ ...s, isAuthenticated: true, userName: name }))
  }

  const logout = () => {
    setState((s) => ({ ...s, isAuthenticated: false, userName: '' }))
  }

  const setRiskProfile = (profile: RiskProfile) => {
    setState((s) => ({ ...s, riskProfile: profile }))
  }

  const addHedgePosition = (position: HedgePosition) => {
    setState((s) => ({ ...s, hedgePositions: [...s.hedgePositions, position] }))
  }

  const setHedgePositions = (positions: HedgePosition[]) => {
    setState((s) => ({ ...s, hedgePositions: positions }))
  }

  const setMarketMatches = (matches: MarketMatch[]) => {
    setState((s) => ({ ...s, marketMatches: matches }))
  }

  const setScenarioId = (id: string) => {
    setState((s) => ({ ...s, scenarioId: id }))
  }

  return (
    <AppContext.Provider
      value={{ ...state, login, logout, setRiskProfile, addHedgePosition, setHedgePositions, setMarketMatches, setScenarioId }}
    >
      {children}
    </AppContext.Provider>
  )
}
