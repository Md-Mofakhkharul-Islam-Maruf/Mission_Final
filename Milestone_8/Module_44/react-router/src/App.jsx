import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOption from './components/pricingOptions/PricingOption'

const pricingPromise = fetch('pricingdata.json').then(res => res.json())

function App() {

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
      </main>
      <footer></footer>
    </>
  )
}

export default App
