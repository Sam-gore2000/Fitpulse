import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from 'recharts'
import CustomTooltip from './CustomTooltip.jsx'
import { COLORS }   from '../../data/constants.js'

/**
 * Area chart for active minutes per day.
 * @param {Array} data - array of { day, active }
 */
export default function ActiveMinutesChart({ data }) {
  return (
    <div className="card">
      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 16, color: 'var(--text-primary)' }}>
        Active Minutes — Weekly Overview
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="actGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor={COLORS.green} stopOpacity={0.3} />
              <stop offset="95%" stopColor={COLORS.green} stopOpacity={0}   />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="day" tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'var(--text-secondary)', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="active" stroke={COLORS.green} fill="url(#actGrad)" strokeWidth={2} name="Active Min" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
