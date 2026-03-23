import { useState }          from 'react'
import { StatCard, InsightCard }  from '../components/ui/index.js'
import {
  WeeklyActivityChart,
  CaloriesTrendChart,
  MacroPieChart,
} from '../components/charts/index.js'
import { PageHeader }        from '../components/layout/index.js'
import { useLiveData }       from '../hooks/index.js'
import { generateWeeklyData, macroData } from '../data/mockData.js'
import { COLORS }            from '../data/constants.js'
import Badge                 from '../components/ui/Badge.jsx'

const weeklyData = generateWeeklyData()

export default function DashboardPage() {
  const { liveCalories, liveSteps, insight } = useLiveData()
  const [water, setWater] = useState(6)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }} className="page-enter">

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: 'var(--text-primary)' }}>
            Good morning, Alex 👋
          </h1>
          <p style={{ margin: '4px 0 0', color: 'var(--text-secondary)', fontSize: 14 }}>
            Sunday, March 22, 2026 · Live tracking active
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: COLORS.green, animation: 'pulse 2s infinite' }} />
          <span style={{ fontSize: 12, color: COLORS.green, fontWeight: 600 }}>LIVE</span>
        </div>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
        <StatCard icon="🔥" label="Calories Burned" value={liveCalories} unit="kcal"        color={COLORS.orange} delta={12} />
        <StatCard icon="👣" label="Steps Today"     value={liveSteps}    unit="steps"       color={COLORS.blue}   delta={8}  />
        <StatCard icon="⏱️" label="Active Minutes"  value={198}          unit="min"         color={COLORS.green}  delta={-3} />
        <StatCard icon="💧" label="Water Intake"    value={water}        unit="/ 8 glasses" color={COLORS.blue}   delta={5}  />
      </div>

      {/* AI Insight */}
      <div
        style={{
          background:   `linear-gradient(135deg, ${COLORS.green}15, ${COLORS.blue}10)`,
          border:       `1px solid ${COLORS.green}30`,
          borderRadius: 14,
          padding:      '14px 18px',
          display:      'flex',
          alignItems:   'center',
          gap:          12,
        }}
      >
        <div style={{ fontSize: 20 }}>🤖</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.green, letterSpacing: '0.08em', marginBottom: 2 }}>
            AI INSIGHT
          </div>
          <div style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 500 }}>{insight}</div>
        </div>
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
        <WeeklyActivityChart data={weeklyData} />
        <MacroPieChart data={macroData} />
      </div>

      {/* Calories trend */}
      <CaloriesTrendChart data={weeklyData} />

      {/* Water tracker */}
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>💧 Water Intake</div>
          <Badge color={COLORS.blue}>{water}/8 glasses</Badge>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          {Array.from({ length: 8 }, (_, i) => (
            <button
              key={i}
              onClick={() => setWater(i + 1)}
              style={{
                flex:       1,
                height:     40,
                borderRadius: 8,
                border:     `2px solid ${i < water ? COLORS.blue : 'var(--border)'}`,
                background: i < water ? `${COLORS.blue}20` : 'transparent',
                cursor:     'pointer',
                fontSize:   18,
                transition: 'all 0.2s',
              }}
            >
              💧
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
