import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

function App() {

  const countriesPromise = fetch('../public/countries.json').then(res => res.json())
  return (
    <>
      <Suspense fallback={<h2>Nadir on the go</h2>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
