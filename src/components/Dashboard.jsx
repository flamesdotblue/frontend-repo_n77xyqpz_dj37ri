import React from 'react'

export default function Dashboard({ user, onNavigate }) {
  return (
    <section className="container" style={{padding:'40px 0'}}>
      <div className="layout">
        <aside className="card padded sidebar">
          <h3 style={{marginTop:0}}>Menu</h3>
          <div className="grid">
            <button className="btn" onClick={()=>onNavigate('dashboard')}>Dashboard</button>
            <button className="btn ghost" onClick={()=>onNavigate('instructions')}>Take Test</button>
            <button className="btn ghost" onClick={()=>alert('Results history is a placeholder in this demo.')}>Results</button>
            <button className="btn ghost" onClick={()=>onNavigate('landing')}>Logout</button>
          </div>
        </aside>
        <main className="main">
          <div className="grid">
            <div className="card padded">
              <h2 style={{marginTop:0}}>Welcome, {user?.name || 'User'}</h2>
              <p className="label">Email: {user?.email || 'you@example.com'}</p>
              <div className="kpi" style={{marginTop:16}}>
                <div className="tile"><strong>3</strong><div className="label">Tests Completed</div></div>
                <div className="tile"><strong>87%</strong><div className="label">Average Score</div></div>
                <div className="tile"><strong>2</strong><div className="label">Active Quizzes</div></div>
              </div>
            </div>
            <div className="card padded">
              <div className="row">
                <h3 style={{margin:0}}>Recent Tests</h3>
                <button className="btn ghost" onClick={()=>onNavigate('instructions')}>Start New Test</button>
              </div>
              <ul className="list" style={{marginTop:12}}>
                <li>JavaScript Basics — 85%</li>
                <li>HTML & CSS — 92%</li>
                <li>General Aptitude — 81%</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
