import React, { useState } from 'react'
import './portal.css'
import Header from './components/Header'
import AuthCard from './components/AuthCard'
import Dashboard from './components/Dashboard'
import Quiz from './components/Quiz'

function App() {
  const [view, setView] = useState('landing')
  const [user, setUser] = useState(null)
  const [result, setResult] = useState(null)

  const onNavigate = (v) => {
    setView(v)
    if (v !== 'result') setResult(null)
  }

  return (
    <div>
      <Header isAuthed={!!user} onNavigate={onNavigate} />

      {view === 'landing' && (
        <section className="hero">
          <div className="container hero-inner">
            <div>
              <span className="badge">Modern • Fast • Responsive</span>
              <h1>Online Test Portal</h1>
              <p>Practice, take quizzes, and track your progress — all in a clean, distraction‑free interface.</p>
              <div className="row" style={{gap:'10px'}}>
                <button className="btn" onClick={()=>onNavigate('instructions')}>Start Test</button>
                {!user && <button className="btn ghost" onClick={()=>onNavigate('login')}>Login</button>}
              </div>
            </div>
            <div className="card padded">
              <h3 style={{marginTop:0}}>Why choose us?</h3>
              <ul className="list" style={{marginTop:8}}>
                <li>Clean, focused experience</li>
                <li>Instant feedback and results</li>
                <li>Works beautifully on mobile and desktop</li>
              </ul>
              <div className="row" style={{marginTop:14}}>
                <button className="btn ghost" onClick={()=>onNavigate('register')}>Create Account</button>
              </div>
            </div>
          </div>
        </section>
      )}

      {view === 'login' && (
        <AuthCard mode="login" onNavigate={onNavigate} onAuth={setUser} />
      )}

      {view === 'register' && (
        <AuthCard mode="register" onNavigate={onNavigate} onAuth={setUser} />
      )}

      {view === 'dashboard' && (
        <Dashboard user={user} onNavigate={onNavigate} />
      )}

      {view === 'instructions' && (
        <section className="container" style={{padding:'40px 0'}}>
          <div className="card padded" style={{maxWidth:760, margin:'0 auto'}}>
            <h2 style={{marginTop:0}}>Test Instructions</h2>
            <div className="instructions">
              <p className="label">Please read carefully before starting:</p>
              <ul className="list">
                <li>You will see one question at a time.</li>
                <li>Select the best answer from the options.</li>
                <li>Use Next to proceed; Finish submits your test.</li>
                <li>Your score will be shown at the end.</li>
              </ul>
              <div>
                <button className="btn" onClick={()=>onNavigate('test')}>Start Test</button>
              </div>
            </div>
          </div>
        </section>
      )}

      {view === 'test' && (
        <Quiz onFinish={(res)=>{ setResult(res); onNavigate('result') }} />
      )}

      {view === 'result' && (
        <section className="container" style={{padding:'40px 0'}}>
          <div className="card padded" style={{maxWidth:760, margin:'0 auto'}}>
            <h2 style={{marginTop:0}}>Your Result</h2>
            <p className="label">Great job! Here's how you did.</p>
            <div className="result-grid" style={{margin:'16px 0'}}>
              <div className="card padded" style={{textAlign:'center'}}>
                <div className="label">Score</div>
                <div style={{fontSize:28,fontWeight:700,color:'var(--primary)'}}>{result?.score ?? 0}%</div>
              </div>
              <div className="card padded" style={{textAlign:'center'}}>
                <div className="label">Correct</div>
                <div style={{fontSize:24,fontWeight:700}}>{result?.correct ?? 0}</div>
              </div>
              <div className="card padded" style={{textAlign:'center'}}>
                <div className="label">Wrong</div>
                <div style={{fontSize:24,fontWeight:700}}>{result?.wrong ?? 0}</div>
              </div>
            </div>
            <div className="row">
              <div className="label">Total Questions: <strong>{result?.total ?? 0}</strong></div>
              <div>
                <button className="btn ghost" onClick={()=>onNavigate('dashboard')}>Back to Dashboard</button>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Online Test Portal</div>
      </footer>
    </div>
  )
}

export default App
