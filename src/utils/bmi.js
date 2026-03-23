/**
 * Calculate BMI from weight (kg) and height (cm).
 * @param {number} weight - kg
 * @param {number} height - cm
 * @returns {number} BMI rounded to 1 decimal
 */
export function calcBmi(weight, height) {
  return +(weight / ((height / 100) ** 2)).toFixed(1)
}

/**
 * Return label and hex color for a BMI value.
 * @param {number} bmi
 * @returns {{ label: string, color: string }}
 */
export function bmiCategory(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', color: '#3b82f6' }
  if (bmi < 25)   return { label: 'Normal',       color: '#10b981' }
  if (bmi < 30)   return { label: 'Overweight',   color: '#f97316' }
  return               { label: 'Obese',           color: '#ef4444' }
}
