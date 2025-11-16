import { useState } from 'react'
import './App.css'
import { add, mult as goon } from './utils/math'

function App() {
  // const [count, setCount] = useState(0)
  const sum = add(5,9)
  console.log(sum)
  const goonfall = goon(5,8)
  console.log(goonfall)

  return (
    <>
      <div>

      </div>
    </>
  )
}

export default App
