import { useState, useEffect } from 'react'

/**
 * Animates a numeric value from 0 to `target` over `duration` ms.
 * Returns the current animated value (integer).
 *
 * @param {number} target   - final value to count up to
 * @param {number} duration - animation duration in ms (default 1200)
 */
export function useAnimatedCounter(target, duration = 1200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (typeof target !== 'number') return
    let current = 0
    const step    = target / (duration / 16)   // ~60 fps
    const timer   = setInterval(() => {
      current += step
      if (current >= target) {
        setValue(target)
        clearInterval(timer)
      } else {
        setValue(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration])

  return value
}
