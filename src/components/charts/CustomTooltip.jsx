/**
 * Shared tooltip component used by all Recharts charts.
 * Receives active, payload, label from Recharts automatically.
 */
export default function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null

  return (
    <div
      style={{
        background:   'var(--bg-secondary)',
        border:       '1px solid var(--border)',
        borderRadius: 10,
        padding:      '10px 14px',
        fontSize:     12,
        boxShadow:    'var(--shadow)',
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: 6, color: 'var(--text-primary)' }}>
        {label}
      </div>
      {payload.map((p, i) => (
        <div key={i} style={{ color: p.color, display: 'flex', gap: 8 }}>
          <span>{p.name}:</span>
          <strong>{p.value?.toLocaleString()}</strong>
        </div>
      ))}
    </div>
  )
}
