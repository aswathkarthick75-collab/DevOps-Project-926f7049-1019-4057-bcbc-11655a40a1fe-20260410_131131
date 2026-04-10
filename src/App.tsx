import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>DevOps-Project-926f7049-1019-4057-bcbc-11655a40a1fe</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}