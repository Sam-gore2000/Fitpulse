/**
 * Coloured pill label.
 * @param {string} color   - hex color
 * @param {ReactNode} children
 */
export default function Badge({ children, color = '#10b981' }) {
  return (
    <span
      style={{
        background:    `${color}20`,
        color,
        border:        `1px solid ${color}40`,
        borderRadius:  6,
        padding:       '2px 10px',
        fontSize:      11,
        fontWeight:    700,
        letterSpacing: '0.05em',
        fontFamily:    'monospace',
        whiteSpace:    'nowrap',
      }}
    >
      {children}
    </span>
  )
}
