import './App.css'
import DaisyNav from './components/DaisyNav'
import Navbar from './components/Navbar/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Navbar></Navbar>
        <DaisyNav></DaisyNav>
      </header>
      <main></main>
      <footer></footer>
    </>
  )
}

export default App
