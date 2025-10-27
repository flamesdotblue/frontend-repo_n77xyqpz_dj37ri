import React, { useMemo, useState } from 'react'

const sampleQuestions = [
  { q: 'Which HTML tag is used to define an unordered list?', options: ['<ol>', '<ul>', '<li>', '<list>'], answer: 1 },
  { q: 'Which CSS property controls the text size?', options: ['font-style', 'text-size', 'font-size', 'text-style'], answer: 2 },
  { q: 'Inside which HTML element do we put JavaScript?', options: ['<js>', '<script>', '<javascript>', '<code>'], answer: 1 },
  { q: 'Which of the following is a JavaScript framework?', options: ['Django', 'Laravel', 'React', 'Rails'], answer: 2 },
  { q: 'Which attribute is used to provide an alternate text for an image?', options: ['title', 'alt', 'src', 'href'], answer: 1 },
]

export default function Quiz({ onFinish }) {
  const questions = useMemo(()=>sampleQuestions, [])
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState(Array(questions.length).fill(null))

  const current = questions[step]
  const progress = Math.round(((step) / questions.length) * 100)

  const choose = (idx) => {
    const next = [...answers]
    next[step] = idx
    setAnswers(next)
  }

  const next = () => {
    if (step < questions.length - 1) setStep(step + 1)
    else {
      const total = questions.length
      const correct = answers.filter((a, i) => a === questions[i].answer).length
      onFinish({ total, correct, wrong: total - correct, score: Math.round((correct/total)*100) })
    }
  }

  return (
    <section className="container" style={{padding:'32px 0'}}>
      <div className="card padded" style={{maxWidth: 760, margin:'0 auto'}}>
        <div className="row" style={{marginBottom:12}}>
          <div className="label">Progress</div>
          <div className="badge">{progress}%</div>
        </div>
        <div className="progress" aria-label="Quiz progress">
          <div className="progress-bar" style={{width: `${(step/questions.length)*100}%`}} />
        </div>

        <div style={{marginTop:18}}>
          <div className="q-title">Question {step + 1} of {questions.length}</div>
          <h3 style={{margin:'6px 0 14px'}}>{current.q}</h3>
          <div className="options">
            {current.options.map((opt, i) => (
              <label className="option" key={i}>
                <input type="radio" name={`q-${step}`} checked={answers[step]===i} onChange={()=>choose(i)} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="row" style={{marginTop:18}}>
          <button className="btn ghost" onClick={()=>setStep(Math.max(0, step-1))} disabled={step===0} aria-disabled={step===0}>Back</button>
          <button className="btn" onClick={next}>{step === questions.length - 1 ? 'Finish' : 'Next Question'}</button>
        </div>
      </div>
    </section>
  )
}
