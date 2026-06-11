import type { MarketMatch, RiskProfile } from '../context/AppContext'

export const mockRiskProfile: RiskProfile = {
  hazard: 'Geopolitical disruption to Red Sea shipping route',
  exposureWindow: 'Jun 15 – Jul 31, 2026',
  financialExposure: 200000,
  riskLevel: 'High',
  description:
    'Shipping cargo through the Red Sea corridor. Risk of transit delays or route closures due to regional conflict escalation, which could result in indirect financial losses from delayed deliveries, increased freight costs, and supply chain disruption.',
}

export const mockMarketMatches: MarketMatch[] = [
  {
    id: 'M-001',
    title: 'Will Houthi attacks on Red Sea shipping exceed 10 incidents in July 2026?',
    probability: 0.68,
    liquidity: '$2.4M',
    correlation: 0.94,
    direction: 'Yes',
    cost: 6800,
    potentialPayout: 10000,
  },
  {
    id: 'M-002',
    title: 'Will Suez Canal daily transit volume fall below 40 ships in June 2026?',
    probability: 0.55,
    liquidity: '$1.8M',
    correlation: 0.87,
    direction: 'Yes',
    cost: 5500,
    potentialPayout: 10000,
  },
  {
    id: 'M-003',
    title: 'Will global shipping insurance premiums increase by more than 15% in Q3 2026?',
    probability: 0.42,
    liquidity: '$960K',
    correlation: 0.79,
    direction: 'Yes',
    cost: 4200,
    potentialPayout: 10000,
  },
  {
    id: 'M-004',
    title: 'Will the Bab el-Mandeb Strait be closed to commercial shipping for 48+ hours before Sept 2026?',
    probability: 0.31,
    liquidity: '$1.2M',
    correlation: 0.91,
    direction: 'Yes',
    cost: 3100,
    potentialPayout: 10000,
  },
]

export const mockProbabilityHistory = [
  { date: 'May 15', risk1: 0.45, risk2: 0.32, risk3: 0.28 },
  { date: 'May 22', risk1: 0.48, risk2: 0.35, risk3: 0.30 },
  { date: 'May 29', risk1: 0.52, risk2: 0.38, risk3: 0.33 },
  { date: 'Jun 05', risk1: 0.58, risk2: 0.42, risk3: 0.35 },
  { date: 'Jun 12', risk1: 0.62, risk2: 0.48, risk3: 0.38 },
  { date: 'Jun 19', risk1: 0.68, risk2: 0.55, risk3: 0.42 },
]

export const quickScenarios = [
  {
    id: 's1',
    icon: '🚢',
    title: 'Red Sea Shipping Disruption',
    description: 'Cargo transit through high-risk zone with potential route closure',
    prompt:
      'We are a Hong Kong-based freight forwarder shipping components through the Red Sea. Our vessels transit the Suez Canal weekly. We are concerned about potential disruptions due to regional conflict escalation. Our monthly cargo value is approximately HKD 2 million.',
  },
  {
    id: 's2',
    icon: '📊',
    title: 'Trade Tariff Uncertainty',
    description: 'Sudden tariff changes impacting import/export margins',
    prompt:
      'Our company imports electronic components from Southeast Asia and exports finished goods to the US and EU. We are worried about sudden tariff increases that could erode our profit margins. Our quarterly trade volume is approximately HKD 5 million.',
  },
  {
    id: 's3',
    icon: '🔗',
    title: 'Supply Chain Bottleneck',
    description: 'Critical supplier disruption or logistics chain failure',
    prompt:
      'We rely on a single-source supplier in Taiwan for key semiconductor components. Any disruption to their production or shipping could halt our manufacturing. Our monthly revenue at risk is approximately HKD 3 million.',
  },
]

export const chatResponses: Record<string, string> = {
  default: `I've analyzed your business risk profile. Based on the information provided, here's what I've identified:

**Risk Type:** Geopolitical / Supply Chain Disruption
**Exposure Window:** Jun 15 – Jul 31, 2026
**Financial Exposure:** HKD 200,000

This risk is primarily driven by regional instability affecting maritime trade routes. I've found several prediction markets that correlate strongly with your exposure. Let me generate a detailed risk analysis and matching hedge proposals for you.`,

  shipping: `I've analyzed your Red Sea shipping risk. Here's your structured risk profile:

**Hazard:** Geopolitical disruption to Red Sea shipping route
**Exposure Window:** Jun 15 – Jul 31, 2026
**Financial Exposure:** HKD 200,000
**Risk Level:** 🔴 HIGH

Key risk vectors identified:
- Houthi attack escalation on commercial vessels
- Suez Canal transit volume decline
- Shipping insurance premium surge

I've found 4 prediction markets with strong correlation to your risk. Let me show you the best hedging options.`,
}
