import { useState }        from 'react'
import { useLocalStorage } from '../hooks/index.js'
import { PageHeader }      from '../components/layout/index.js'
import Badge               from '../components/ui/Badge.jsx'
import { initialProfile, lifetimeStats } from '../data/mockData.js'
import { COLORS }          from '../data/constants.js'

const GENDERS       = ['Male', 'Female', 'Other']
const FITNESS_LEVELS = ['Beginner', 'Intermediate', 'Advanced']

function getBmiCategory(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', color: COLORS.blue   }
  if (bmi < 25)   return { label: 'Normal',       color: COLORS.green  }
  if (bmi < 30)   return { label: 'Overweight',   color: COLORS.orange }
  return               { label: 'Obese',           color: COLORS.red   }
}

export default function ProfilePage() {
  const [profile, setProfile] = useLocalStorage('fitpulse_profile', initialProfile)
  const [editing, setEditing] = useState(false)
  const [form,    setForm]    = useState(profile)

  const bmi        = +(profile.weight / ((profile.height / 100) ** 2)).toFixed(1)
  const bmiInfo    = getBmiCategory(bmi)
  const bmiPct     = Math.min(((bmi - 16) / 24) * 100, 100)

  const handleSave = () => { setProfile(form); setEditing(false) }
  const handleEdit = () => { setForm(profile);  setEditing(true)  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }} className="page-enter">

      <PageHeader
        title="Profile"
        subtitle="Your fitness identity"
        action={
          <button
            onClick={editing ? handleSave : handleEdit}
            style={{
              padding:      '9px 18px',
              borderRadius: 10,
              border:       '1px solid var(--border)',
              background:   editing ? COLORS.green : 'var(--bg-secondary)',
              color:        editing ? '#fff'        : 'var(--text-primary)',
              fontWeight:   700,
              fontSize:     13,
              cursor:       'pointer',
              transition:   'all 0.15s',
            }}
          >
            {editing ? '✅ Save' : '✏️ Edit'}
          </button>
        }
      />

      {/* ── Avatar + info ─────────────────────────────────── */}
      <div className="card" style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
        <div
          style={{
            width:          80,
            height:         80,
            borderRadius:   '50%',
            background:     `linear-gradient(135deg, ${COLORS.green}, ${COLORS.blue})`,
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            fontSize:       36,
            flexShrink:     0,
          }}
        >
          🧍
        </div>

        <div style={{ flex: 1 }}>
          {editing ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 10 }}>
              <input className="input" placeholder="Name"         value={form.name}         onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input className="input" type="number" placeholder="Age"  value={form.age}   onChange={(e) => setForm({ ...form, age: +e.target.value })} />
              <input className="input" type="number" placeholder="Height (cm)" value={form.height} onChange={(e) => setForm({ ...form, height: +e.target.value })} />
              <input className="input" type="number" placeholder="Weight (kg)" value={form.weight} onChange={(e) => setForm({ ...form, weight: +e.target.value })} />
              <input className="input" placeholder="Fitness Goal"  value={form.goal}         onChange={(e) => setForm({ ...form, goal: e.target.value })} />
              <select className="input" value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value })}>
                {GENDERS.map((g) => <option key={g}>{g}</option>)}
              </select>
              <select className="input" value={form.fitnessLevel} onChange={(e) => setForm({ ...form, fitnessLevel: e.target.value })}>
                {FITNESS_LEVELS.map((l) => <option key={l}>{l}</option>)}
              </select>
            </div>
          ) : (
            <>
              <div style={{ fontWeight: 800, fontSize: 22, color: 'var(--text-primary)' }}>{profile.name}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: 14, marginTop: 4 }}>
                {profile.age} years · {profile.gender} · {profile.fitnessLevel}
              </div>
              <div style={{ marginTop: 8, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <Badge color={COLORS.green}>{profile.goal}</Badge>
                <Badge color={COLORS.blue}>{profile.height} cm</Badge>
                <Badge color={COLORS.orange}>{profile.weight} kg</Badge>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── BMI card ──────────────────────────────────────── */}
      <div className="card">
        <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 16, color: 'var(--text-primary)' }}>
          Body Mass Index (BMI)
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ fontSize: 48, fontWeight: 900, color: bmiInfo.color, fontFamily: 'monospace' }}>{bmi}</div>
          <div>
            <Badge color={bmiInfo.color}>{bmiInfo.label}</Badge>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 6 }}>
              Based on {profile.height} cm height, {profile.weight} kg weight
            </div>
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--text-secondary)', marginBottom: 6 }}>
            <span>Underweight</span><span>Normal</span><span>Overweight</span><span>Obese</span>
          </div>
          <div style={{ height: 8, borderRadius: 999, background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.green}, ${COLORS.orange}, ${COLORS.red})`, position: 'relative' }}>
            <div
              style={{
                position:    'absolute',
                top:         '50%',
                transform:   'translate(-50%, -50%)',
                left:        `${bmiPct}%`,
                width:       14,
                height:      14,
                borderRadius:'50%',
                background:  '#fff',
                border:      `3px solid ${bmiInfo.color}`,
                boxShadow:   '0 2px 8px rgba(0,0,0,0.3)',
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Lifetime stats ────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 14 }}>
        {lifetimeStats.map((s) => (
          <div key={s.label} className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'monospace' }}>
              {s.value}
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
