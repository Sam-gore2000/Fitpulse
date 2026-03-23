import Badge               from './Badge.jsx'
import Spinner             from './Spinner.jsx'
import { useAnimatedCounter } from '../../hooks/index.js'
import { COLORS }          from '../../data/constants.js'

/**
 * Dashboard metric card with animated counter and optional delta badge.
 *
 * @param {string}  icon    - emoji
 * @param {string}  label   - metric label
 * @param {number}  value   - numeric value (will animate)
 * @param {string}  unit    - unit suffix
 * @param {string}  color   - accent hex
 * @param {number}  delta   - percentage change (optional)
 * @param {boolean} loading - show spinner instead of value
 */
export default function StatCard({
  icon,
  label,
  value,
  unit,
  color   = COLORS.green,
  delta,
  loading = false,
}) {
  const animated = useAnimatedCounter(typeof value === 'number' ? value : 0)

  return (
    <div className="card hover-lift" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ fontSize: 28 }}>{icon}</div>
        {delta != null && (
          <Badge color={delta > 0 ? COLORS.green : COLORS.red}>
            {delta > 0 ? '+' : ''}{delta}%
          </Badge>
        )}
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <div
            style={{
              fontSize:      32,
              fontWeight:    800,
              color:         'var(--text-primary)',
              fontFamily:    "'DM Mono', monospace",
              letterSpacing: '-0.03em',
            }}
          >
            {typeof value === 'number' ? animated.toLocaleString() : value}
            {unit && (
              <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-secondary)', marginLeft: 4 }}>
                {unit}
              </span>
            )}
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)', fontWeight: 500 }}>{label}</div>
          <div style={{ height: 3, borderRadius: 999, background: `linear-gradient(90deg, ${color}, ${color}40)` }} />
        </>
      )}
    </div>
  )
}
