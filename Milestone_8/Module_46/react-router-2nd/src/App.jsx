
import './App.css'

function App() {

  const handleForm =(e)=>{
    console.log('form Submitted')
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    console.log(name, email)    
  }
  return (
    <>
      <form onSubmit={handleForm}>
        <input type="text" name="name" placeholder='Your Name' id="" />
        <br />
        <input type="email" name="email" placeholder='Your Email' id="" /><br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App
