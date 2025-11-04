import './App.css'

// ✅ Main App Component
function App() {
  return (
    <>
      <div>
        <h1>Hello Developers</h1>

        <Person name="Maruf"></Person>

        {/* ✅ Passing props with and without default value */}
        <Salami event="Eid ul Fitar" taka="1000"></Salami>
        <Salami event="Nobin Boron"></Salami>
      </div>
    </>
  )
}

// -------------------------
// ✅ Child Component 1: Props (Not Destructured)
// -------------------------
function Person(props) {
  console.log(props)
  return (
    <div>
      <p>My name is {props.name}</p>
    </div>
  )
}

// -------------------------
// ✅ Child Component 2: Props Destructuring + Default Value
// -------------------------
function Salami({ event, taka = 100 }) {
  console.log(taka)
  return (
    <div className="style">
      <p>Salami for : {event}</p>
      <p>Amount : {taka}</p>
    </div>
  )
}

export default App
