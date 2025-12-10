import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOption from './components/pricingOptions/PricingOption'
import MarksCharts from './components/marksCharts/MarksCharts'

const pricingPromise = fetch('pricingdata.json').then(res => res.json())

function App() {
  const marksdata = [
    {
      "name": "Alice",
      "roll": "101",
      "physics": 85,
      "chemistry": 78,
      "math": 92
    },
    {
      "name": "Bob",
      "roll": "102",
      "physics": 74,
      "chemistry": 81,
      "math": 88
    },
    {
      "name": "Charlie",
      "roll": "103",
      "physics": 90,
      "chemistry": 87,
      "math": 95
    }
  ]

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>

        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <MarksCharts marksdata={marksdata}></MarksCharts>
        </Suspense>
      </main>
      <footer></footer>
    </>
  )
}

export default App
