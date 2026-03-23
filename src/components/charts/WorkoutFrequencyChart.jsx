import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import CustomTooltip from './CustomTooltip.jsx'
import { COLORS }   from '../../data/constants.js'

/**
 * Grouped bar chart showing weekly workout frequency by category.
 * @param {Array} data - array of { week, cardio, strength, yoga }
 */
export default function WorkoutFrequencyChart({ data }) {
  return (
    <div className="card">
      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 16, color: 'var(--text-primary)' }}>
        Workout Frequency
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barSize={14}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="week" tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'var(--text-secondary)', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Legend iconSize={8} />
          <Bar dataKey="cardio"   fill={COLORS.orange} radius={[4,4,0,0]} name="Cardio"   />
          <Bar dataKey="strength" fill={COLORS.blue}   radius={[4,4,0,0]} name="Strength" />
          <Bar dataKey="yoga"     fill={COLORS.purple} radius={[4,4,0,0]} name="Yoga"     />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
