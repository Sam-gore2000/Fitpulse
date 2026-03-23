import { useState }     from 'react'
import { PageHeader }   from '../components/layout/index.js'
import { ProgressBar }  from '../components/ui/index.js'
import Badge            from '../components/ui/Badge.jsx'
import { initialGoals, badges } from '../data/mockData.js'

const YELLOW = '#eab308'
const GREEN  = '#10b981'
const ORANGE = '#f97316'

export default function GoalsPage() {
  const [goals] = useState(initialGoals)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }} className="page-enter">
      <PageHeader title="Goals & Progress" subtitle="Track what matters most" />

      {/* ── Goal cards ──────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
        {goals.map((g) => {
          const pct = Math.round((g.current / g.target) * 100)
          return (
            <GoalCard key={g.id} goal={g} pct={pct} />
          )
        })}
      </div>

      {/* ── Achievement badges ──────────────────────────── */}
      <div>
        <div style={{ fontWeight: 700, fontSize: 18, color: 'var(--text-primary)', marginBottom: 16 }}>
          🏆 Achievement Badges
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 12 }}>
          {badges.map((b) => <BadgeCard key={b.id} badge={b} />)}
        </div>
      </div>
    </div>
  )
}

/* ── GoalCard ─────────────────────────────────────────────────── */
function GoalCard({ goal: g, pct }) {
  return (
    <div className="card hover-lift">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 24 }}>{g.icon}</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)' }}>{g.name}</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
              {g.current.toLocaleString()} / {g.target.toLocaleString()} {g.unit}
            </div>
          </div>
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, color: g.color, fontFamily: 'monospace' }}>
          {pct}%
        </div>
      </div>

      <ProgressBar value={g.current} max={g.target} color={g.color} height={10} />

      {pct >= 100 && (
        <div style={{ marginTop: 8, fontSize: 12, color: GREEN, fontWeight: 600 }}>
          ✅ Goal achieved!
        </div>
      )}
      {pct >= 80 && pct < 100 && (
        <div style={{ marginTop: 8, fontSize: 12, color: ORANGE, fontWeight: 600 }}>
          🔥 Almost there!
        </div>
      )}
    </div>
  )
}

/* ── BadgeCard ────────────────────────────────────────────────── */
function BadgeCard({ badge: b }) {
  return (
    <div
      className="card"
      style={{
        textAlign:  'center',
        padding:    '16px 12px',
        opacity:    b.earned ? 1 : 0.45,
        border:     b.earned ? `2px solid ${YELLOW}40` : '1px solid var(--border)',
        background: b.earned ? `linear-gradient(135deg, ${YELLOW}08, transparent)` : undefined,
        transition: 'all 0.2s',
      }}
    >
      <div style={{ fontSize: 32, marginBottom: 8, filter: b.earned ? 'none' : 'grayscale(1)' }}>
        {b.icon}
      </div>
      <div style={{ fontWeight: 700, fontSize: 12, color: 'var(--text-primary)', marginBottom: 4 }}>
        {b.name}
      </div>
      <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{b.desc}</div>
      {b.earned && (
        <div style={{ marginTop: 8 }}>
          <Badge color={YELLOW}>EARNED</Badge>
        </div>
      )}
    </div>
  )
}
