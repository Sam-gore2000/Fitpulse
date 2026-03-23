/** Circular CSS animation used as a loading placeholder. */
export default function Spinner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <div
        style={{
          width:       32,
          height:      32,
          border:      '3px solid var(--border)',
          borderTopColor: 'var(--accent)',
          borderRadius:   '50%',
          animation:   'spin 0.8s linear infinite',
        }}
      />
    </div>
  )
}
