import React from 'react'

function StatCard({ label, value, accent = 'blue' }) {
  const color = accent === 'blue' ? 'text-blue-600 bg-blue-50' : accent === 'green' ? 'text-green-600 bg-green-50' : 'text-rose-600 bg-rose-50'
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className={`h-10 w-10 rounded-lg grid place-items-center font-semibold ${color}`}>
        {String(value).slice(0, 2)}
      </div>
      <div>
        <div className="text-sm text-slate-500">{label}</div>
        <div className="text-xl font-semibold text-slate-800">{value}</div>
      </div>
    </div>
  )
}

export default StatCard
