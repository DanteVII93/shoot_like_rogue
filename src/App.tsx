import React, { useState } from 'react'

export default function App() {
  const [score, setScore] = useState(0)

  return (
    <div style={{ padding: '40px', textAlign: 'center', color: '#0e6b2f', fontFamily: 'sans-serif' }}>
      <h1>Shoot Like Rogue Test</h1>
      <p>Score: {score}</p>
      <button onClick={() => setScore(score + 100)} style={{ fontSize: '16px', padding: '10px 20px' }}>
        +100 Punkte
      </button>
    </div>
  )
}