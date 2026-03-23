import { useState }                from 'react'
import { ThemeProvider }           from './store/themeContext.jsx'
import { GlobalStyles, Sidebar, PageWrapper } from './components/layout/index.js'
import {
  DashboardPage,
  AnalyticsPage,
  WorkoutsPage,
  GoalsPage,
  ProfilePage,
} from './pages/index.js'

// Map page id → component
const PAGE_MAP = {
  dashboard: DashboardPage,
  analytics: AnalyticsPage,
  workouts:  WorkoutsPage,
  goals:     GoalsPage,
  profile:   ProfilePage,
}

/**
 * Root application component.
 * Manages active page and sidebar collapsed state.
 * Wraps everything in ThemeProvider so CSS variables are available globally.
 */
export default function App() {
  const [page,      setPage]      = useState('dashboard')
  const [collapsed, setCollapsed] = useState(false)

  const ActivePage = PAGE_MAP[page] ?? DashboardPage

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Sidebar
        page={page}
        setPage={setPage}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <PageWrapper>
        <ActivePage key={page} />
      </PageWrapper>
    </ThemeProvider>
  )
}
