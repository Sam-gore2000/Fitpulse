import { useState, useCallback } from 'react'

/**
 * Drop-in replacement for useState that persists value to localStorage.
 * Automatically serialises/deserialises JSON.
 *
 * @param {string} key        - localStorage key
 * @param {*}      initial    - initial / fallback value
 * @returns {[*, function]}   - [storedValue, setter]
 */
export function useLocalStorage(key, initial) {
  const [val, setVal] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : initial
    } catch {
      return initial
    }
  })

  const set = useCallback(
    (valueOrUpdater) => {
      setVal((prev) => {
        const next =
          typeof valueOrUpdater === 'function'
            ? valueOrUpdater(prev)
            : valueOrUpdater
        try {
          localStorage.setItem(key, JSON.stringify(next))
        } catch {
          // quota exceeded – silently ignore
        }
        return next
      })
    },
    [key],
  )

  return [val, set]
}
