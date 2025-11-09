import './App.css'

function App() {

  function handleClick() {
    alert('I am clicked')
  }
  const handleClick2 = () => {
    alert('I am clicked 2')
  }
  const handleAddnum = (num) => {
    alert(num + 5)
  }
return (
    <>
      <div>
        <p>Let's Start</p>
        <button className='style' onClick={handleClick}>Click with normal function</button>
        <button className='style' onClick={handleClick2}>Click2 with arrow function</button>
        <button className='style' onClick={() => alert('I am clicked 3')}>Click3 function in event handler</button>
        <button className='style' onClick={() => handleAddnum(10)}>Click to add 5</button>
      </div>
    </>
  )
}

export default App
