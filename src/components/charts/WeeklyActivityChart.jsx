import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from 'recharts'
import CustomTooltip from './CustomTooltip.jsx'
import { COLORS }   from '../../data/constants.js'

/**
 * Bar chart showing calories burned per day of the week.
 * @param {Array} data - array of { day, calories, steps, active, goal }
 */
export default function WeeklyActivityChart({ data }) {
  return (
    <div className="card">
      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 16, color: 'var(--text-primary)' }}>
        Weekly Activity
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="day" tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'var(--text-secondary)', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="calories" fill={COLORS.orange} radius={[6,6,0,0]} name="Calories" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
