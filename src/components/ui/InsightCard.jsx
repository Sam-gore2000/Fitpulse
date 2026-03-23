/**
 * AI insight banner displayed at the top of the Dashboard.
 * @param {string} text - insight message
 */
export default function InsightCard({ text }) {
  return (
    <div
      style={{
        background:   'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))',
        border:       '1px solid var(--border)',
        borderRadius: 12,
        padding:      '12px 16px',
        fontSize:     13,
        color:        'var(--text-secondary)',
        display:      'flex',
        alignItems:   'center',
        gap:          10,
      }}
    >
      <div style={{ flex: 1 }}>{text}</div>
    </div>
  )
}
