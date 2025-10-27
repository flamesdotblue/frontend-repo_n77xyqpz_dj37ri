import React from 'react'

export default function Header({ isAuthed, onNavigate }) {
  return (
    <header className="header">
      <div className="container nav">
        <div className="logo" onClick={() => onNavigate('landing')} style={{cursor:'pointer'}}>
          <div className="logo-badge">OT</div>
          <span>Online Test Portal</span>
        </div>
        <nav className="nav-links">
          <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate('landing')}}>Home</a>
          <a href="#" onClick={(e)=>{e.preventDefault(); alert('A simple, modern UI to take tests online.')}}>About</a>
          {!isAuthed ? (
            <>
              <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate('login')}}>Login</a>
              <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate('register')}}>Register</a>
            </>
          ) : (
            <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate('dashboard')}}>Dashboard</a>
          )}
        </nav>
      </div>
    </header>
  )
}
