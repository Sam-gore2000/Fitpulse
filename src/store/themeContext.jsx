import { createContext, useContext, useState, useCallback } from 'react'
import { useLocalStorage } from '../hooks/index.js'
import { DARK_THEME, LIGHT_THEME } from '../data/constants.js'

const ThemeContext = createContext(null)

/**
 * Provides dark/light theme via CSS custom properties injected on the
 * root wrapper.  Any child can call useTheme() to read or toggle.
 */
export function ThemeProvider({ children }) {
  const [dark, setDark] = useLocalStorage('fitpulse_dark', true)

  const toggle = useCallback(() => setDark((d) => !d), [setDark])
  const theme  = dark ? DARK_THEME : LIGHT_THEME

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <div style={{ ...theme, background: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', fontFamily: "'DM Sans', sans-serif" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
