import { useState } from 'react'
import './App.css'

function App() {

  // 39-2 Different ways to handle events in React
  // function handleClick() {
  //   alert('I am clicked')
  // }
  // const handleClick2 = () => {
  //   alert('I am clicked 2')
  // }
  // const handleAddnum = (num) => {
  //   alert(num + 5)
  // }




  //39-3 A simple Introduction to State change in React
  // const [count, setCount] = useState(0)
  // const handleAdd = () => {
  //   setCount(count + 5)
  // }


  return (
    <>
      {/* 39-2 Different ways to handle events in React */}
      {/* <div>
        <p>Let's Start</p>
        <button className='style' onClick={handleClick}>Click with normal function</button>
        <button className='style' onClick={handleClick2}>Click2 with arrow function</button>
        <button className='style' onClick={() => alert('I am clicked 3')}>Click3 function in event handler</button>
        <button className='style' onClick={() => handleAddnum(10)}>Click to add 5</button>
      </div> */}
      



     {/* 39-3 A simple Introduction to State change in React
      <div className='style'>
        <p>Count: {count}</p>
        <button onClick={handleAdd} >Add</button>
      </div> */}




    </>
  )
}

export default App
