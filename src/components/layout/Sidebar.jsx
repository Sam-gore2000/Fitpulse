import { useTheme } from '../../store/themeContext.jsx'

const NAV_ITEMS = [
  { id: 'dashboard', icon: '⚡', label: 'Dashboard'  },
  { id: 'analytics', icon: '📊', label: 'Analytics'  },
  { id: 'workouts',  icon: '🏃', label: 'Workouts'   },
  { id: 'goals',     icon: '🎯', label: 'Goals'       },
  { id: 'profile',   icon: '🧍', label: 'Profile'    },
]

const GREEN = '#10b981'

/**
 * Collapsible sidebar with navigation, branding, and theme toggle.
 *
 * @param {string}   page          - currently active page id
 * @param {function} setPage       - page setter
 * @param {boolean}  collapsed     - sidebar collapsed state
 * @param {function} setCollapsed  - collapsed setter
 */
export default function Sidebar({ page, setPage, collapsed, setCollapsed }) {
  const { dark, toggle } = useTheme()

  return (
    <aside
      style={{
        width:         collapsed ? 64 : 220,
        minHeight:     '100vh',
        flexShrink:    0,
        background:    'var(--bg-secondary)',
        borderRight:   '1px solid var(--border)',
        display:       'flex',
        flexDirection: 'column',
        transition:    'width 0.3s ease',
        overflow:      'hidden',
      }}
    >
      {/* ── Logo / brand ──────────────────────────────────── */}
      <div
        style={{
          padding:       collapsed ? '20px 16px' : '20px',
          borderBottom:  '1px solid var(--border)',
          display:       'flex',
          alignItems:    'center',
          gap:           10,
          justifyContent: collapsed ? 'center' : 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width:          32,
              height:         32,
              borderRadius:   8,
              background:     `linear-gradient(135deg, ${GREEN}, #3b82f6)`,
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              fontSize:       16,
              flexShrink:     0,
            }}
          >
            💪
          </div>
          {!collapsed && (
            <span
              style={{
                fontWeight:    800,
                fontSize:      15,
                color:         'var(--text-primary)',
                fontFamily:    "'DM Mono', monospace",
                letterSpacing: '-0.02em',
              }}
            >
              FitPulse
            </span>
          )}
        </div>
        {!collapsed && (
          <button
            onClick={() => setCollapsed(true)}
            style={{
              background: 'none',
              border:     'none',
              cursor:     'pointer',
              color:      'var(--text-secondary)',
              fontSize:   16,
              padding:    2,
            }}
          >
            ‹
          </button>
        )}
      </div>

      {/* ── Navigation ────────────────────────────────────── */}
      <nav
        style={{
          flex:          1,
          padding:       '12px 8px',
          display:       'flex',
          flexDirection: 'column',
          gap:           4,
        }}
      >
        {collapsed && (
          <button
            onClick={() => setCollapsed(false)}
            style={{
              background:   'none',
              border:       'none',
              cursor:       'pointer',
              color:        'var(--text-secondary)',
              fontSize:     18,
              padding:      '8px',
              borderRadius: 8,
              marginBottom: 4,
            }}
          >
            ›
          </button>
        )}

        {NAV_ITEMS.map((n) => {
          const active = page === n.id
          return (
            <button
              key={n.id}
              onClick={() => setPage(n.id)}
              style={{
                display:        'flex',
                alignItems:     'center',
                gap:            10,
                padding:        collapsed ? '10px' : '10px 12px',
                borderRadius:   10,
                border:         'none',
                cursor:         'pointer',
                width:          '100%',
                background:     active
                  ? `linear-gradient(135deg, ${GREEN}20, #3b82f610)`
                  : 'transparent',
                color:          active ? GREEN : 'var(--text-secondary)',
                fontWeight:     active ? 700 : 500,
                fontSize:       13,
                transition:     'all 0.15s',
                borderLeft:     active ? `3px solid ${GREEN}` : '3px solid transparent',
                justifyContent: collapsed ? 'center' : 'flex-start',
              }}
            >
              <span style={{ fontSize: 16 }}>{n.icon}</span>
              {!collapsed && <span>{n.label}</span>}
            </button>
          )
        })}
      </nav>

      {/* ── Theme toggle ──────────────────────────────────── */}
      <div style={{ padding: 12, borderTop: '1px solid var(--border)' }}>
        <button
          onClick={toggle}
          style={{
            width:          '100%',
            padding:        collapsed ? 10 : '8px 12px',
            borderRadius:   10,
            border:         '1px solid var(--border)',
            background:     'var(--bg-tertiary)',
            cursor:         'pointer',
            color:          'var(--text-secondary)',
            fontSize:       13,
            display:        'flex',
            alignItems:     'center',
            gap:            8,
            justifyContent: collapsed ? 'center' : 'flex-start',
          }}
        >
          <span>{dark ? '☀️' : '🌙'}</span>
          {!collapsed && <span>{dark ? 'Light Mode' : 'Dark Mode'}</span>}
        </button>
      </div>
    </aside>
  )
}
