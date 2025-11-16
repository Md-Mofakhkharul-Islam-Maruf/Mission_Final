import { Suspense } from 'react'
import './App.css'
import Bottles from './componentS/bottleS/Bottles'

function App() {

 const bottlesPromise = fetch('./bottles.json').then(res=>res.json())

  return (
    <>
      <h1>Awesome water bottles</h1>
      <Suspense fallback={<h3>Bottles are comming</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
