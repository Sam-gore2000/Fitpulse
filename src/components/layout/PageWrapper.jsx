/**
 * Scroll container that wraps every page's content.
 * Provides consistent padding and max-width constraints.
 */
export default function PageWrapper({ children }) {
  return (
    <main
      style={{
        flex:       1,
        padding:    '28px 28px 48px',
        overflowY:  'auto',
        maxWidth:   '100%',
      }}
    >
      {children}
    </main>
  )
}
