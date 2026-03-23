import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

/**
 * Donut pie chart for macro nutrient split.
 * @param {Array} data - array of { name, value, color }
 */
export default function MacroPieChart({ data }) {
  return (
    <div className="card">
      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 16, color: 'var(--text-primary)' }}>
        Macro Split
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={4} dataKey="value">
            {data.map((entry, i) => <Cell key={i} fill={entry.color} />)}
          </Pie>
          <Tooltip formatter={(v, n) => [`${v}%`, n]} />
          <Legend iconType="circle" iconSize={8} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
