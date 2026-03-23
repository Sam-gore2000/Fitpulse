/**
 * Animated horizontal progress bar.
 *
 * @param {number}  value     - current value
 * @param {number}  max       - maximum value
 * @param {string}  color     - fill hex color
 * @param {number}  height    - bar height in px (default 8)
 * @param {boolean} animated  - CSS transition on width (default true)
 */
export default function ProgressBar({
  value,
  max,
  color    = '#10b981',
  height   = 8,
  animated = true,
}) {
  const pct = Math.min((value / max) * 100, 100)
  return (
    <div
      style={{
        background:   'var(--bg-tertiary)',
        borderRadius: 999,
        height,
        overflow:     'hidden',
      }}
    >
      <div
        style={{
          height:       '100%',
          borderRadius: 999,
          width:        `${pct}%`,
          background:   `linear-gradient(90deg, ${color}, ${color}cc)`,
          transition:   animated ? 'width 1s cubic-bezier(.4,0,.2,1)' : 'none',
          boxShadow:    `0 0 8px ${color}60`,
        }}
      />
    </div>
  )
}
