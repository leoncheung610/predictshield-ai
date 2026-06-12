# 🛡️ PredictShield AI

**AI-Powered Risk Hedging via Prediction Markets** — 为中小企业提供基于预测市场的智能风险对冲方案。

> 🏦 BOC (Bank of China) Innovation Competition Entry

---

## 🎯 项目简介

PredictShield AI 帮助跨境贸易企业识别业务风险，并通过预测市场提供低成本的对冲方案。用户只需描述业务场景，AI 即可自动分析风险、匹配预测市场、生成对冲策略。

### 核心价值主张

- ** democratize risk hedging** — 让中小企业也能获得专业级风险管理
- **AI-First** — 自然语言交互，无需金融专业知识
- **Prediction Markets** — 利用市场集体智慧，成本远低于传统保险

---

## ✨ 功能特色

| 功能 | 描述 |
|------|------|
| 🤖 **AI Risk Chat** | 自然语言对话，自动识别业务风险并生成风险画像 |
| 📊 **Risk Analysis** | 可视化风险分析报告：影响矩阵、严重度评估、AI 建议 |
| 🎯 **Market Match** | 智能匹配预测市场，展示概率、流动性、相关性 |
| ⚡ **Hedge Execute** | 一键执行对冲策略，模拟持仓和盈亏 |
| 📈 **Dashboard** | 实时监控仪表盘，追踪对冲效果和风险变化 |
| 🎭 **Demo Scenarios** | 三大预设场景一键演示，适合比赛展示 |

---

## 🎭 Demo 场景

| 场景 | 角色 | 风险金额 | 覆盖主题 |
|------|------|----------|----------|
| 🚢 红海航运中断 | Raymond — 跨境物流经理 | HKD 200,000 | Risk Mgmt + Cross-border |
| 📊 中美关税不确定性 | 陳經理 — 電子出口商 | HKD 500,000 | Risk Mgmt + Cross-border |
| 🌱 ESG 碳合规风险 | 李總 — 製造業出口商 | HKD 350,000 | ESG + Inclusive Finance |

---

## 🏗️ 技术架构

```
React 18 + TypeScript + Vite
├── Tailwind CSS        — 样式系统
├── Framer Motion       — 动画引擎
├── React Router v7     — 路由管理
├── Recharts            — 数据可视化
├── Lucide Icons        — 图标库
└── Context API         — 全局状态管理
```

### 项目结构

```
src/
├── pages/              # 页面组件
│   ├── Landing.tsx     # 着陆页
│   ├── Login.tsx       # 登录页
│   ├── RiskChat.tsx    # AI 风险对话
│   ├── RiskAnalysis.tsx# 风险分析报告
│   ├── MarketMatch.tsx # 市场匹配
│   ├── HedgeExecute.tsx# 对冲执行
│   └── Dashboard.tsx   # 风险仪表盘
├── components/
│   ├── layout/         # 布局组件 (Navbar, PageLayout)
│   ├── ui/             # 通用 UI 组件 (GlassCard, AnimatedButton)
│   ├── chat/           # 聊天组件 (ChatBubble, ChatInput, DocumentUpload)
│   ├── demo/           # 演示组件 (DemoMode, DemoSelector)
│   └── risk/           # 风险组件 (RiskGauge, RiskMatrix)
├── context/            # 全局状态 (AppContext)
├── data/               # Mock 数据 & Demo 场景
└── App.tsx             # 路由配置
```

---

## 🚀 快速开始

### 环境要求

- Node.js 18+
- npm 9+

### 安装与运行

```bash
# 克隆仓库
git clone https://github.com/leoncheung610/predictshield-ai.git
cd predictshield-ai

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 浏览器打开 http://localhost:5173
```

### 构建生产版本

```bash
npm run build
npm run preview  # 本地预览构建结果
```

---

## 📱 用户旅程

```
Landing → Login → AI Chat → Risk Analysis → Market Match → Execute → Dashboard
                        ↑                         ↑
                   描述风险场景              匹配对冲市场
                        ↓                         ↓
                   生成风险画像              执行对冲策略
```

1. **Landing** — 了解 PredictShield AI 价值
2. **Login** — 输入用户名进入系统
3. **AI Chat** — 描述业务风险或选择预设场景
4. **Risk Analysis** — 查看风险画像、影响矩阵、AI 建议
5. **Market Match** — 浏览匹配的预测市场和报价
6. **Execute** — 一键执行对冲，查看模拟持仓
7. **Dashboard** — 实时监控风险和对冲效果

---

## 🎬 演示模式

### 方式一：自动演示（推荐比赛使用）

1. 打开应用后，点击右下角 **👁 Demo Mode** 按钮
2. 系统自动走完完整用户旅程（~35秒）
3. 支持暂停、跳步、重播

### 方式二：手动演示

1. 登录后点击导航栏 **🎭 Scenarios**
2. 选择一个场景（红海航运/关税/ESG）
3. 系统自动加载场景数据，沿用户旅程逐步展示

---

## 🏆 竞赛对齐

| 评估维度 | 覆盖情况 |
|----------|----------|
| Risk Management | ✅ 风险识别 → 分析 → 对冲 全流程 |
| Cross-border Finance | ✅ 航运、关税等跨境风险场景 |
| ESG / Inclusive Finance | ✅ ESG 碳合规场景、中小企业普惠 |
| AI Innovation | ✅ NLP 风险对话 + 智能匹配 |
| Prediction Markets | ✅ 核心对冲机制 |

---

## 📄 License

Private — All rights reserved.

---

<p align="center">
  Built with ❤️ for BOC Innovation Competition
</p>
