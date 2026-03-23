import { useState }          from 'react'
import { PageHeader }        from '../components/layout/index.js'
import { ProgressBar }       from '../components/ui/index.js'
import {
  HeartRateChart,
  WorkoutFrequencyChart,
  ActiveMinutesChart,
} from '../components/charts/index.js'
import {
  heartRateData,
  heartRateZones,
  workoutFrequencyData,
  generateWeeklyData,
} from '../data/mockData.js'

const weeklyData = generateWeeklyData()
const FILTERS = ['daily', 'weekly', 'monthly']
const GREEN = '#10b981'

export default function AnalyticsPage() {
  const [filter, setFilter] = useState('weekly')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }} className="page-enter">

      <PageHeader
        title="Analytics"
        subtitle="Deep insights into your fitness journey"
        action={
          <div style={{ display: 'flex', gap: 6 }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding:         '6px 14px',
                  borderRadius:    8,
                  border:          '1px solid var(--border)',
                  cursor:          'pointer',
                  background:      filter === f ? GREEN : 'var(--bg-secondary)',
                  color:           filter === f ? '#fff' : 'var(--text-secondary)',
                  fontSize:        12,
                  fontWeight:      600,
                  textTransform:   'capitalize',
                  transition:      'all 0.15s',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        }
      />

      {/* Heart Rate */}
      <HeartRateChart data={heartRateData} />

      {/* Two-col: HR zones + frequency */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>

        {/* Heart rate zones */}
        <div className="card">
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 16, color: 'var(--text-primary)' }}>
            Heart Rate Zones
          </div>
          {heartRateZones.map((z) => (
            <div key={z.zone} style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: 'var(--text-secondary)', fontWeight: 500 }}>{z.zone}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: z.color }}>{z.value}%</span>
              </div>
              <ProgressBar value={z.value} max={100} color={z.color} />
            </div>
          ))}
        </div>

        {/* Workout frequency */}
        <WorkoutFrequencyChart data={workoutFrequencyData} />
      </div>

      {/* Active minutes */}
      <ActiveMinutesChart data={weeklyData} />

      {/* Summary stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 14 }}>
        {[
          { label: 'Avg Daily Steps',    value: '8,234',  icon: '👣', color: '#3b82f6' },
          { label: 'Avg Calories/Day',   value: '447',    icon: '🔥', color: '#f97316' },
          { label: 'Best Day',           value: 'Wed',    icon: '📅', color: '#10b981' },
          { label: 'Workout Streak',     value: '5 days', icon: '🔥', color: '#eab308' },
        ].map((s) => (
          <div key={s.label} className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 26, marginBottom: 8 }}>{s.icon}</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'monospace' }}>
              {s.value}
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
