import type { ReactNode } from 'react'
import { Navbar } from './Navbar'

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-dark-900 bg-grid-pattern">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
}
