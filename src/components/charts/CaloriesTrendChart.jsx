import {
  AreaChart, Area, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import CustomTooltip from './CustomTooltip.jsx'
import { COLORS }   from '../../data/constants.js'

/**
 * Area + dashed-line chart comparing daily calories vs goal.
 * @param {Array} data - array with { day, calories, goal }
 */
export default function CaloriesTrendChart({ data }) {
  return (
    <div className="card">
      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 16, color: 'var(--text-primary)' }}>
        Calories Trend vs Goal
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="calGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor={COLORS.orange} stopOpacity={0.3} />
              <stop offset="95%" stopColor={COLORS.orange} stopOpacity={0}   />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="day" tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'var(--text-secondary)', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="calories" stroke={COLORS.orange} fill="url(#calGrad)" strokeWidth={2} name="Calories" />
          <Line type="monotone" dataKey="goal"     stroke={COLORS.green}  strokeDasharray="5 5" strokeWidth={2} dot={false} name="Goal" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
