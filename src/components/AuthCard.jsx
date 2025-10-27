import React, { useState } from 'react'

export default function AuthCard({ mode = 'login', onNavigate, onAuth }) {
  const [form, setForm] = useState({ name:'', email:'', password:'', confirm:'' })

  const submit = (e) => {
    e.preventDefault()
    if (mode === 'register' && form.password !== form.confirm) {
      alert('Passwords do not match')
      return
    }
    onAuth({ name: form.name || 'User', email: form.email })
    onNavigate('dashboard')
  }

  return (
    <section className="container" style={{padding:'56px 0'}}>
      <div className="card padded" style={{maxWidth: 460, margin: '0 auto'}}>
        <h2 style={{margin:'0 0 8px'}}>{mode === 'login' ? 'Welcome back' : 'Create your account'}</h2>
        <p className="label" style={{margin:'0 0 16px'}}>{mode === 'login' ? 'Login to continue' : 'Join to start taking tests'}</p>
        <form className="grid" onSubmit={submit}>
          {mode === 'register' && (
            <div className="grid">
              <label className="label">Name</label>
              <input className="input" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
            </div>
          )}
          <div className="grid">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="you@example.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
          </div>
          <div className="grid">
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="••••••••" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} required />
          </div>
          {mode === 'register' && (
            <div className="grid">
              <label className="label">Confirm Password</label>
              <input type="password" className="input" placeholder="••••••••" value={form.confirm} onChange={e=>setForm({...form,confirm:e.target.value})} required />
            </div>
          )}
          <button className="btn" type="submit">{mode === 'login' ? 'Login' : 'Register'}</button>
        </form>
        {mode === 'login' ? (
          <p className="label" style={{marginTop:12}}>No account? <a href="#" style={{color:'var(--primary)'}} onClick={(e)=>{e.preventDefault(); onNavigate('register')}}>Register</a></p>
        ) : (
          <p className="label" style={{marginTop:12}}>Already have an account? <a href="#" style={{color:'var(--primary)'}} onClick={(e)=>{e.preventDefault(); onNavigate('login')}}>Login</a></p>
        )}
      </div>
    </section>
  )
}
