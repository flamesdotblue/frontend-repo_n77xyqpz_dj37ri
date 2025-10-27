import React from 'react'

function Navbar({ onNavigate, isAuthed }) {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-bold shadow-md">
            OT
          </div>
          <span className="text-lg font-semibold text-slate-800">Online Test Portal</span>
        </div>

        <nav className="hidden sm:flex items-center gap-6 text-slate-700">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors">Home</button>
          <button onClick={() => onNavigate('about')} className="hover:text-blue-600 transition-colors">About</button>
          {!isAuthed ? (
            <>
              <button onClick={() => onNavigate('login')} className="hover:text-blue-600 transition-colors">Login</button>
              <button onClick={() => onNavigate('register')} className="hover:text-blue-600 transition-colors">Register</button>
            </>
          ) : (
            <button onClick={() => onNavigate('dashboard')} className="hover:text-blue-600 transition-colors">Dashboard</button>
          )}
        </nav>

        <div className="sm:hidden">
          <select
            aria-label="Navigation"
            className="bg-white border border-slate-300 rounded-md px-3 py-2 text-sm"
            onChange={(e) => onNavigate(e.target.value)}
            defaultValue="home"
          >
            <option value="home">Home</option>
            <option value="about">About</option>
            {!isAuthed && <option value="login">Login</option>}
            {!isAuthed && <option value="register">Register</option>}
            {isAuthed && <option value="dashboard">Dashboard</option>}
          </select>
        </div>
      </div>
    </header>
  )
}

export default Navbar
