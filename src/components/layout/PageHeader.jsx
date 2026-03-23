/**
 * Consistent page title + subtitle block.
 *
 * @param {string}    title     - main heading
 * @param {string}    subtitle  - muted sub-text
 * @param {ReactNode} action    - optional right-side element (button, badge…)
 */
export default function PageHeader({ title, subtitle, action }) {
  return (
    <div
      style={{
        display:        'flex',
        justifyContent: 'space-between',
        alignItems:     'center',
        flexWrap:       'wrap',
        gap:            12,
        marginBottom:   0,
      }}
    >
      <div>
        <h1
          style={{
            margin:     0,
            fontSize:   26,
            fontWeight: 800,
            color:      'var(--text-primary)',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p style={{ margin: '4px 0 0', color: 'var(--text-secondary)', fontSize: 14 }}>
            {subtitle}
          </p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  )
}
