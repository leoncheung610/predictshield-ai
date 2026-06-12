# 🛡️ PredictShield AI

**AI-Powered Risk Hedging via Prediction Markets** — Providing intelligent risk hedging solutions for SMEs through prediction markets.

> 🏦 BOC (Bank of China) Innovation Competition Entry

---

## 🎯 Overview

PredictShield AI helps cross-border trade businesses identify operational risks and provides low-cost hedging solutions through prediction markets. Users simply describe their business scenario, and the AI automatically analyzes risks, matches prediction markets, and generates hedging strategies.

### Core Value Propositions

- **Democratize Risk Hedging** — Enabling SMEs to access professional-grade risk management
- **AI-First** — Natural language interaction, no financial expertise required
- **Prediction Markets** — Leveraging collective market intelligence at a fraction of traditional insurance costs

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🤖 **AI Risk Chat** | Natural language dialogue that automatically identifies business risks and generates risk profiles |
| 📊 **Risk Analysis** | Visual risk analysis report: impact matrix, severity assessment, AI recommendations |
| 🎯 **Market Match** | Intelligent prediction market matching with probability, liquidity, and correlation data |
| ⚡ **Hedge Execute** | One-click hedge execution with simulated positions and P&L tracking |
| 📈 **Dashboard** | Real-time monitoring dashboard for tracking hedge performance and risk changes |
| 🎭 **Demo Scenarios** | Three preset scenarios for one-click demo, ideal for competition showcases |

---

## 🎭 Demo Scenarios

| Scenario | Persona | Risk Exposure | Themes Covered |
|----------|---------|---------------|----------------|
| 🚢 Red Sea Shipping Disruption | Raymond — Cross-border Logistics Manager | HKD 200,000 | Risk Mgmt + Cross-border |
| 📊 US-China Tariff Uncertainty | Manager Chen — Electronics Exporter | HKD 500,000 | Risk Mgmt + Cross-border |
| 🌱 ESG Carbon Compliance Risk | Director Li — Manufacturing Exporter | HKD 350,000 | ESG + Inclusive Finance |

---

## 🏗️ Tech Stack

```
React 18 + TypeScript + Vite
├── Tailwind CSS        — Styling
├── Framer Motion       — Animations
├── React Router v7     — Routing
├── Recharts            — Data Visualization
├── Lucide Icons        — Icon Library
└── Context API         — State Management
```

### Project Structure

```
src/
├── pages/              # Page components
│   ├── Landing.tsx     # Landing page
│   ├── Login.tsx       # Login page
│   ├── RiskChat.tsx    # AI risk conversation
│   ├── RiskAnalysis.tsx# Risk analysis report
│   ├── MarketMatch.tsx # Market matching
│   ├── HedgeExecute.tsx# Hedge execution
│   └── Dashboard.tsx   # Risk dashboard
├── components/
│   ├── layout/         # Layout (Navbar, PageLayout)
│   ├── ui/             # Common UI (GlassCard, AnimatedButton)
│   ├── chat/           # Chat components (ChatBubble, ChatInput, DocumentUpload)
│   ├── demo/           # Demo components (DemoMode, DemoSelector)
│   └── risk/           # Risk components (RiskGauge, RiskMatrix)
├── context/            # Global state (AppContext)
├── data/               # Mock data & Demo scenarios
└── App.tsx             # Route configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/leoncheung610/predictshield-ai.git
cd predictshield-ai

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Production Build

```bash
npm run build
npm run preview  # Preview the build locally
```

---

## 📱 User Journey

```
Landing → Login → AI Chat → Risk Analysis → Market Match → Execute → Dashboard
                        ↑                         ↑
                 Describe risk              Match hedge markets
                        ↓                         ↓
               Generate risk profile       Execute hedge strategy
```

1. **Landing** — Understand PredictShield AI's value proposition
2. **Login** — Enter username to access the system
3. **AI Chat** — Describe business risks or select a preset scenario
4. **Risk Analysis** — View risk profile, impact matrix, AI recommendations
5. **Market Match** — Browse matched prediction markets and quotes
6. **Execute** — Execute hedge with one click, view simulated positions
7. **Dashboard** — Real-time monitoring of risk and hedge performance

---

## 🎬 Demo Mode

### Option 1: Auto Demo (Recommended for Competition)

1. Open the app and click the **👁 Demo Mode** button (bottom-right corner)
2. The system automatically walks through the full user journey (~35 seconds)
3. Supports pause, skip, and replay

### Option 2: Manual Demo

1. After login, click **🎭 Scenarios** in the navigation bar
2. Select a scenario (Red Sea / Tariff / ESG)
3. The system loads scenario data automatically; follow the user journey step by step

---

## 🏆 Competition Alignment

| Evaluation Dimension | Coverage |
|---------------------|----------|
| Risk Management | ✅ Full pipeline: Risk identification → Analysis → Hedging |
| Cross-border Finance | ✅ Shipping, tariff, and other cross-border risk scenarios |
| ESG / Inclusive Finance | ✅ ESG carbon compliance scenario, SME inclusion |
| AI Innovation | ✅ NLP risk dialogue + intelligent matching |
| Prediction Markets | ✅ Core hedging mechanism |

---

## 📄 License

Private — All rights reserved.

---

<p align="center">
  Built with ❤️ for BOC Innovation Competition
</p>
