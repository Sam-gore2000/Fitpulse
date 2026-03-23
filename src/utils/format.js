/**
 * Format a number with locale-aware thousands separators.
 * @param {number} n
 * @returns {string}
 */
export const formatNumber = (n) => n.toLocaleString()

/**
 * Clamp a number between min and max.
 */
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max)

/**
 * Convert a value/max pair to a 0-100 percentage, capped at 100.
 */
export const toPct = (value, max) => clamp(Math.round((value / max) * 100), 0, 100)
