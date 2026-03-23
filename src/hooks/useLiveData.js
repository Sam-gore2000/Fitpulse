import { useState, useEffect } from 'react'
import { insightsPool } from '../data/mockData.js'

/**
 * Simulates a live fitness tracker by incrementing calories & steps
 * every `interval` ms and rotating the AI insight string.
 *
 * @param {number} interval - polling interval in ms (default 4000)
 */
export function useLiveData(interval = 4000) {
  const [liveCalories, setLiveCalories] = useState(2130)
  const [liveSteps,    setLiveSteps]    = useState(8432)
  const [insight,      setInsight]      = useState(insightsPool[0])

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveCalories((c) => c + Math.floor(Math.random() * 8))
      setLiveSteps((s)    => s + Math.floor(Math.random() * 20))
      setInsight(insightsPool[Math.floor(Math.random() * insightsPool.length)])
    }, interval)
    return () => clearInterval(timer)
  }, [interval])

  return { liveCalories, liveSteps, insight }
}
