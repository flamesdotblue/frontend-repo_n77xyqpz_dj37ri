import React from 'react'

function Sidebar({ onNavigate }) {
  const link = (key, label) => (
    <button
      key={key}
      onClick={() => onNavigate(key)}
      className="w-full text-left px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors"
    >
      {label}
    </button>
  )

  return (
    <aside className="w-full sm:w-64 shrink-0 bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
      <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-3">Menu</h3>
      <div className="flex sm:block gap-2 sm:gap-0">
        {link('dashboard', 'Dashboard')}
        {link('instructions', 'Take Test')}
        {link('results', 'Results')}
        {link('logout', 'Logout')}
      </div>
    </aside>
  )
}

export default Sidebar
