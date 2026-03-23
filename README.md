# 💪 FitPulse — Fitness Analytics Dashboard

A modern, fully responsive fitness analytics dashboard built with **React 19 + Vite**.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

---

## 📁 Project Structure

```
fitpulse/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                  # React 19 entry point
    ├── App.jsx                   # Root: page routing + layout shell
    │
    ├── store/
    │   ├── themeContext.jsx       # Dark/light theme via React Context + CSS vars
    │   └── index.js
    │
    ├── hooks/
    │   ├── useLocalStorage.js    # Persistent state (wraps useState + localStorage)
    │   ├── useAnimatedCounter.js # Count-up animation hook
    │   ├── useLiveData.js        # Live data simulation (setInterval)
    │   └── index.js
    │
    ├── data/
    │   ├── constants.js          # COLORS, THEMES, CATEGORY_COLORS
    │   ├── mockData.js           # All static/initial data arrays
    │   └── index.js
    │
    ├── utils/
    │   ├── bmi.js                # BMI calculation helpers
    │   ├── format.js             # Number formatting helpers
    │   └── index.js
    │
    ├── components/
    │   ├── ui/                   # Pure presentational components
    │   │   ├── Badge.jsx         # Coloured pill label
    │   │   ├── Spinner.jsx       # CSS loading spinner
    │   │   ├── ProgressBar.jsx   # Animated horizontal bar
    │   │   ├── StatCard.jsx      # Metric card with animated counter
    │   │   ├── InsightCard.jsx   # AI insight banner
    │   │   └── index.js
    │   │
    │   ├── charts/               # Recharts wrappers (one chart per file)
    │   │   ├── CustomTooltip.jsx
    │   │   ├── WeeklyActivityChart.jsx
    │   │   ├── CaloriesTrendChart.jsx
    │   │   ├── MacroPieChart.jsx
    │   │   ├── HeartRateChart.jsx
    │   │   ├── WorkoutFrequencyChart.jsx
    │   │   ├── ActiveMinutesChart.jsx
    │   │   └── index.js
    │   │
    │   └── layout/               # Shell / structural components
    │       ├── GlobalStyles.jsx  # @keyframes, .card, .input CSS
    │       ├── Sidebar.jsx       # Collapsible nav + theme toggle
    │       ├── PageWrapper.jsx   # <main> scroll container
    │       ├── PageHeader.jsx    # Title + subtitle + optional action
    │       └── index.js
    │
    └── pages/                    # One file per route/page
        ├── DashboardPage.jsx     # Overview widgets + live counters
        ├── AnalyticsPage.jsx     # Deep charts + HR zones
        ├── WorkoutsPage.jsx      # CRUD workout log
        ├── GoalsPage.jsx         # Goal progress + badges
        ├── ProfilePage.jsx       # User info + BMI calculator
        └── index.js
```

---

## 🧱 Tech Stack

| Library          | Role                                      |
|------------------|-------------------------------------------|
| React 19         | UI components, hooks, state               |
| Vite             | Build tool, dev server, HMR               |
| Recharts         | Bar, Line, Area, Pie charts               |
| CSS Custom Props | Theme system (dark / light)               |
| localStorage     | Persistent workouts, profile, theme       |

---

## ✨ Features

- **Live data simulation** — calories & steps update every 4 s
- **AI insight rotator** — smart messages cycle automatically  
- **Dark / Light mode** — persisted to localStorage  
- **Animated counters** — all metric numbers count up on load  
- **Full CRUD workouts** — add, edit, delete, search, filter  
- **BMI calculator** — updates live when profile changes  
- **Achievement badges** — earned / locked states  
- **Collapsible sidebar** — responsive on all screen sizes  
- **Hover-lift cards** — subtle motion on every card  
- **Page transitions** — fade-in animation on each page switch  

---

## 🎨 Design System

| Token                 | Value (dark)   |
|-----------------------|----------------|
| `--bg-primary`        | `#0f1117`      |
| `--bg-secondary`      | `#161b27`      |
| `--bg-tertiary`       | `#1e2438`      |
| `--border`            | `#252d3d`      |
| `--text-primary`      | `#f1f5f9`      |
| `--text-secondary`    | `#7b8db7`      |
| Green (health)        | `#10b981`      |
| Blue  (activity)      | `#3b82f6`      |
| Orange (calories)     | `#f97316`      |

Fonts: **DM Sans** (UI) + **DM Mono** (numbers)
