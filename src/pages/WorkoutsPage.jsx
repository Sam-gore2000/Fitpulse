import { useState }     from 'react'
import { useLocalStorage } from '../hooks/index.js'
import { PageHeader }   from '../components/layout/index.js'
import Badge            from '../components/ui/Badge.jsx'
import {
  initialWorkouts,
  WORKOUT_CATEGORIES,
  FILTER_CATEGORIES,
} from '../data/mockData.js'
import {
  CATEGORY_COLORS,
  CATEGORY_ICONS,
} from '../data/constants.js'

const EMPTY_FORM = {
  name:     '',
  category: 'Cardio',
  duration: '',
  calories: '',
  date:     new Date().toISOString().slice(0, 10),
  notes:    '',
}

const GREEN = '#10b981'
const BLUE  = '#3b82f6'

export default function WorkoutsPage() {
  const [workouts, setWorkouts] = useLocalStorage('fitpulse_workouts', initialWorkouts)
  const [search,    setSearch]   = useState('')
  const [catFilter, setCatFilter]= useState('All')
  const [showForm,  setShowForm] = useState(false)
  const [editingId, setEditingId]= useState(null)
  const [form,      setForm]     = useState(EMPTY_FORM)

  /* ── derived list ─────────────────────────────────────────── */
  const filtered = workouts.filter((w) => {
    const matchesCat  = catFilter === 'All' || w.category === catFilter
    const matchSearch = w.name.toLowerCase().includes(search.toLowerCase())
                     || w.category.toLowerCase().includes(search.toLowerCase())
    return matchesCat && matchSearch
  })

  /* ── handlers ─────────────────────────────────────────────── */
  const openNew = () => {
    setForm(EMPTY_FORM)
    setEditingId(null)
    setShowForm(true)
  }

  const openEdit = (w) => {
    setForm({ ...w, duration: String(w.duration), calories: String(w.calories) })
    setEditingId(w.id)
    setShowForm(true)
  }

  const save = () => {
    if (!form.name || !form.duration || !form.calories) return
    const record = { ...form, duration: +form.duration, calories: +form.calories }
    if (editingId !== null) {
      setWorkouts((prev) => prev.map((w) => (w.id === editingId ? { ...record, id: editingId } : w)))
    } else {
      setWorkouts((prev) => [{ ...record, id: Date.now() }, ...prev])
    }
    setShowForm(false)
    setEditingId(null)
    setForm(EMPTY_FORM)
  }

  const remove = (id) => setWorkouts((prev) => prev.filter((w) => w.id !== id))

  const cancelForm = () => { setShowForm(false); setEditingId(null); setForm(EMPTY_FORM) }

  /* ── render ───────────────────────────────────────────────── */
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }} className="page-enter">

      <PageHeader
        title="Workouts"
        subtitle={`${workouts.length} sessions logged`}
        action={
          <button
            onClick={showForm ? cancelForm : openNew}
            style={{
              padding:      '9px 18px',
              borderRadius: 10,
              border:       'none',
              background:   showForm ? 'var(--bg-tertiary)' : `linear-gradient(135deg, ${GREEN}, ${BLUE})`,
              color:        showForm ? 'var(--text-secondary)' : '#fff',
              fontWeight:   700,
              fontSize:     13,
              cursor:       'pointer',
              border:       '1px solid var(--border)',
            }}
          >
            {showForm ? '✕ Cancel' : '+ Add Workout'}
          </button>
        }
      />

      {/* ── Add / Edit form ───────────────────────────────── */}
      {showForm && (
        <div className="card" style={{ borderLeft: `4px solid ${GREEN}` }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 16, color: 'var(--text-primary)' }}>
            {editingId ? 'Edit Workout' : 'Log New Workout'}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12 }}>
            <input
              className="input"
              placeholder="Workout name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <select
              className="input"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              {WORKOUT_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
            <input
              className="input"
              type="number"
              placeholder="Duration (min)"
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
            />
            <input
              className="input"
              type="number"
              placeholder="Calories burned"
              value={form.calories}
              onChange={(e) => setForm({ ...form, calories: e.target.value })}
            />
            <input
              className="input"
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
            <input
              className="input"
              placeholder="Notes (optional)"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </div>
          <button
            onClick={save}
            style={{
              marginTop:    14,
              padding:      '9px 20px',
              borderRadius: 10,
              border:       'none',
              background:   GREEN,
              color:        '#fff',
              fontWeight:   700,
              fontSize:     13,
              cursor:       'pointer',
            }}
          >
            {editingId ? 'Update Workout' : 'Save Workout'}
          </button>
        </div>
      )}

      {/* ── Filters ───────────────────────────────────────── */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        <input
          className="input"
          placeholder="🔍 Search workouts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: 220, flex: '0 0 auto' }}
        />
        {FILTER_CATEGORIES.map((c) => {
          const active = catFilter === c
          const col    = CATEGORY_COLORS[c] || GREEN
          return (
            <button
              key={c}
              onClick={() => setCatFilter(c)}
              style={{
                padding:      '6px 14px',
                borderRadius: 8,
                border:       `1px solid ${active ? col : 'var(--border)'}`,
                background:   active ? `${col}20` : 'transparent',
                color:        active ? col : 'var(--text-secondary)',
                fontSize:     12,
                fontWeight:   600,
                cursor:       'pointer',
                transition:   'all 0.15s',
              }}
            >
              {c}
            </button>
          )
        })}
      </div>

      {/* ── Workout list ──────────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '2rem' }}>
            No workouts found
          </div>
        )}
        {filtered.map((w) => (
          <WorkoutRow
            key={w.id}
            workout={w}
            onEdit={() => openEdit(w)}
            onDelete={() => remove(w.id)}
          />
        ))}
      </div>
    </div>
  )
}

/* ── WorkoutRow sub-component ─────────────────────────────────── */
function WorkoutRow({ workout: w, onEdit, onDelete }) {
  const col = CATEGORY_COLORS[w.category] || '#10b981'

  return (
    <div
      className="card hover-lift"
      style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 18px' }}
    >
      {/* Icon */}
      <div
        style={{
          width:          44,
          height:         44,
          borderRadius:   12,
          background:     `${col}20`,
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          fontSize:       22,
          flexShrink:     0,
        }}
      >
        {CATEGORY_ICONS[w.category] || '🏋️'}
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: 14 }}>{w.name}</div>
        {w.notes && (
          <div style={{ color: 'var(--text-secondary)', fontSize: 12, marginTop: 2 }}>{w.notes}</div>
        )}
      </div>

      {/* Badges */}
      <div style={{ display: 'flex', gap: 8, flexShrink: 0, flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Badge color={col}>{w.category}</Badge>
        <Badge color="#f97316">{w.calories} kcal</Badge>
        <Badge color="#3b82f6">{w.duration} min</Badge>
        <span style={{ color: 'var(--text-secondary)', fontSize: 11 }}>{w.date}</span>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
        <button
          onClick={onEdit}
          style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 6, padding: '4px 10px', cursor: 'pointer', fontSize: 12, color: 'var(--text-secondary)' }}
        >
          ✏️
        </button>
        <button
          onClick={onDelete}
          style={{ background: 'none', border: '1px solid #ef444440', borderRadius: 6, padding: '4px 10px', cursor: 'pointer', fontSize: 12, color: '#ef4444' }}
        >
          🗑️
        </button>
      </div>
    </div>
  )
}
