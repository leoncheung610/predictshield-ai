import type { RiskProfile, MarketMatch, HedgePosition } from '../context/AppContext'

// ============================================
// DEMO SCENARIO A: Red Sea Shipping (Default)
// Persona: Raymond — Cross-border Logistics SME Manager
// ============================================
export const scenarioShipping: {
  profile: RiskProfile
  markets: MarketMatch[]
  positions: HedgePosition[]
  chatFlow: { role: 'user' | 'ai'; content: string }[]
} = {
  profile: {
    hazard: 'Geopolitical disruption to Red Sea shipping route',
    exposureWindow: 'Jun 15 – Jul 31, 2026',
    financialExposure: 200000,
    riskLevel: 'High',
    description:
      'Shipping cargo through the Red Sea corridor. Risk of transit delays or route closures due to regional conflict escalation, which could result in indirect financial losses from delayed deliveries, increased freight costs, and supply chain disruption.',
  },
  markets: [
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
  ],
  positions: [
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
  ],
  chatFlow: [
    {
      role: 'user',
      content:
        'We are a Hong Kong-based freight forwarder shipping components through the Red Sea. Our vessels transit the Suez Canal weekly. We are concerned about potential disruptions due to regional conflict escalation. Our monthly cargo value is approximately HKD 2 million.',
    },
    {
      role: 'ai',
      content: `I've analyzed your Red Sea shipping risk. Here's your structured risk profile:

**Hazard:** Geopolitical disruption to Red Sea shipping route
**Exposure Window:** Jun 15 – Jul 31, 2026
**Financial Exposure:** HKD 200,000
**Risk Level:** 🔴 HIGH

Key risk vectors identified:
- Houthi attack escalation on commercial vessels
- Suez Canal transit volume decline
- Shipping insurance premium surge

I've found 4 prediction markets with strong correlation to your risk. Let me show you the best hedging options.`,
    },
  ],
}

// ============================================
// DEMO SCENARIO B: Trade Tariff Uncertainty
// Persona: SME exporting electronics to US/EU
// ============================================
export const scenarioTariff: {
  profile: RiskProfile
  markets: MarketMatch[]
  positions: HedgePosition[]
  chatFlow: { role: 'user' | 'ai'; content: string }[]
} = {
  profile: {
    hazard: 'US-China tariff escalation affecting cross-border electronics trade',
    exposureWindow: 'Jul 1 – Sep 30, 2026',
    financialExposure: 500000,
    riskLevel: 'Critical',
    description:
      'Exporting finished electronic goods from Shenzhen to the US market. Risk of sudden tariff increases on Chinese electronics could erode profit margins by 15-25%, affecting quarterly revenue of HKD 5 million.',
  },
  markets: [
    {
      id: 'M-101',
      title: 'Will the US impose new tariffs on Chinese electronics exceeding 25% before Oct 2026?',
      probability: 0.58,
      liquidity: '$3.1M',
      correlation: 0.96,
      direction: 'Yes',
      cost: 11600,
      potentialPayout: 20000,
    },
    {
      id: 'M-102',
      title: 'Will China announce retaliatory tariffs on US goods before Sept 2026?',
      probability: 0.62,
      liquidity: '$2.7M',
      correlation: 0.88,
      direction: 'Yes',
      cost: 6200,
      potentialPayout: 10000,
    },
    {
      id: 'M-103',
      title: 'Will US-China trade negotiations break down before Q3 2026?',
      probability: 0.45,
      liquidity: '$1.5M',
      correlation: 0.82,
      direction: 'Yes',
      cost: 4500,
      potentialPayout: 10000,
    },
    {
      id: 'M-104',
      title: 'Will the USD/CNY exchange rate exceed 7.5 before Sept 2026?',
      probability: 0.38,
      liquidity: '$4.2M',
      correlation: 0.74,
      direction: 'Yes',
      cost: 3800,
      potentialPayout: 10000,
    },
  ],
  positions: [
    {
      id: 'H-101',
      market: 'US imposes new tariffs on Chinese electronics > 25%',
      direction: 'Yes',
      cost: 11600,
      potentialPayout: 35000,
      probability: 0.58,
      status: 'Active',
      effectiveness: 0.88,
      createdAt: '2026-06-08',
    },
    {
      id: 'H-102',
      market: 'US-China trade negotiations break down',
      direction: 'Yes',
      cost: 4500,
      potentialPayout: 15000,
      probability: 0.45,
      status: 'Active',
      effectiveness: 0.76,
      createdAt: '2026-06-10',
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
  ],
  chatFlow: [
    {
      role: 'user',
      content:
        'Our company imports electronic components from Shenzhen and exports finished goods to the US and EU. We are worried about sudden tariff increases that could erode our profit margins. Our quarterly trade volume is approximately HKD 5 million.',
    },
    {
      role: 'ai',
      content: `I've analyzed your cross-border trade tariff risk. Here's your structured risk profile:

**Hazard:** US-China tariff escalation affecting cross-border electronics trade
**Exposure Window:** Jul 1 – Sep 30, 2026
**Financial Exposure:** HKD 500,000
**Risk Level:** 🔴 CRITICAL

Key risk vectors identified:
- New US tariffs on Chinese electronics exceeding 25%
- China retaliatory tariff measures
- US-China trade negotiation breakdown
- USD/CNY exchange rate volatility

I've found 4 prediction markets with strong correlation (74%–96%) to your risk. The top market has $3.1M liquidity — excellent for hedging your exposure.`,
    },
  ],
}

// ============================================
// DEMO SCENARIO C: ESG / Green Compliance Risk
// Persona: SME manufacturer with EU export
// ============================================
export const scenarioESG: {
  profile: RiskProfile
  markets: MarketMatch[]
  positions: HedgePosition[]
  chatFlow: { role: 'user' | 'ai'; content: string }[]
} = {
  profile: {
    hazard: 'EU CBAM carbon border tax increasing production costs for Hong Kong manufacturers',
    exposureWindow: 'Jul 1 – Dec 31, 2026',
    financialExposure: 350000,
    riskLevel: 'High',
    description:
      'Manufacturing goods in Guangdong for export to the EU. The Carbon Border Adjustment Mechanism (CBAM) transitional phase could impose significant carbon costs, making products less competitive. Risk of carbon price spike above €100/ton.',
  },
  markets: [
    {
      id: 'M-201',
      title: 'Will EU carbon permit price (EU ETS) exceed €100/ton before Oct 2026?',
      probability: 0.52,
      liquidity: '$5.8M',
      correlation: 0.93,
      direction: 'Yes',
      cost: 10400,
      potentialPayout: 20000,
    },
    {
      id: 'M-202',
      title: 'Will the EU fully implement CBAM collection phase before 2027?',
      probability: 0.41,
      liquidity: '$2.1M',
      correlation: 0.85,
      direction: 'Yes',
      cost: 4100,
      potentialPayout: 10000,
    },
    {
      id: 'M-203',
      title: 'Will China launch national ETS carbon price above ¥120/ton in 2026?',
      probability: 0.35,
      liquidity: '$1.3M',
      correlation: 0.78,
      direction: 'Yes',
      cost: 3500,
      potentialPayout: 10000,
    },
  ],
  positions: [
    {
      id: 'H-201',
      market: 'EU ETS carbon price exceeds €100/ton',
      direction: 'Yes',
      cost: 10400,
      potentialPayout: 30000,
      probability: 0.52,
      status: 'Active',
      effectiveness: 0.87,
      createdAt: '2026-06-02',
    },
  ],
  chatFlow: [
    {
      role: 'user',
      content:
        'We are a Hong Kong-owned manufacturer in Guangdong exporting to the EU. We are concerned about the EU CBAM carbon border tax increasing our production costs significantly. Our semi-annual export value at risk is approximately HKD 350,000.',
    },
    {
      role: 'ai',
      content: `I've analyzed your EU CBAM / carbon compliance risk. Here's your structured risk profile:

**Hazard:** EU CBAM carbon border tax increasing production costs for Hong Kong manufacturers
**Exposure Window:** Jul 1 – Dec 31, 2026
**Financial Exposure:** HKD 350,000
**Risk Level:** 🔴 HIGH

Key risk vectors identified:
- EU ETS carbon permit price exceeding €100/ton
- CBAM full implementation timeline acceleration
- China national ETS price correlation

I've found 3 prediction markets with strong correlation (78%–93%) to your ESG risk. The EU ETS market has $5.8M liquidity — one of the most liquid environmental prediction markets available.`,
    },
  ],
}

// ============================================
// ALL SCENARIOS for Demo Selector
// ============================================
export const allDemoScenarios = [
  {
    id: 'shipping',
    icon: '🚢',
    title: '紅海航運中斷',
    titleEn: 'Red Sea Shipping Disruption',
    persona: 'Raymond — 跨境物流經理',
    tag: 'Risk Mgmt + Cross-border',
    tagColor: 'text-neon-red',
    data: scenarioShipping,
  },
  {
    id: 'tariff',
    icon: '📊',
    title: '中美關稅不確定性',
    titleEn: 'US-China Tariff Uncertainty',
    persona: '陳經理 — 電子出口商',
    tag: 'Risk Mgmt + Cross-border',
    tagColor: 'text-neon-amber',
    data: scenarioTariff,
  },
  {
    id: 'esg',
    icon: '🌱',
    title: 'ESG 碳合規風險',
    titleEn: 'EU CBAM Carbon Compliance',
    persona: '李總 — 製造業出口商',
    tag: 'ESG + Inclusive Finance',
    tagColor: 'text-neon-green',
    data: scenarioESG,
  },
]

// Probability history for different scenarios
export const probabilityHistories = {
  shipping: [
    { date: 'May 15', risk1: 0.45, risk2: 0.32, risk3: 0.28 },
    { date: 'May 22', risk1: 0.48, risk2: 0.35, risk3: 0.30 },
    { date: 'May 29', risk1: 0.52, risk2: 0.38, risk3: 0.33 },
    { date: 'Jun 05', risk1: 0.58, risk2: 0.42, risk3: 0.35 },
    { date: 'Jun 12', risk1: 0.62, risk2: 0.48, risk3: 0.38 },
    { date: 'Jun 19', risk1: 0.68, risk2: 0.55, risk3: 0.42 },
  ],
  tariff: [
    { date: 'May 15', risk1: 0.35, risk2: 0.42, risk3: 0.30 },
    { date: 'May 22', risk1: 0.40, risk2: 0.45, risk3: 0.32 },
    { date: 'May 29', risk1: 0.45, risk2: 0.50, risk3: 0.35 },
    { date: 'Jun 05', risk1: 0.50, risk2: 0.55, risk3: 0.38 },
    { date: 'Jun 12', risk1: 0.55, risk2: 0.60, risk3: 0.40 },
    { date: 'Jun 19', risk1: 0.58, risk2: 0.62, risk3: 0.45 },
  ],
  esg: [
    { date: 'May 15', risk1: 0.38, risk2: 0.30, risk3: 0.25 },
    { date: 'May 22', risk1: 0.42, risk2: 0.33, risk3: 0.28 },
    { date: 'May 29', risk1: 0.45, risk2: 0.36, risk3: 0.30 },
    { date: 'Jun 05', risk1: 0.48, risk2: 0.38, risk3: 0.32 },
    { date: 'Jun 12', risk1: 0.50, risk2: 0.40, risk3: 0.33 },
    { date: 'Jun 19', risk1: 0.52, risk2: 0.41, risk3: 0.35 },
  ],
}
