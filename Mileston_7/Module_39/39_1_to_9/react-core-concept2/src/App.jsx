import { useState } from 'react'
import './App.css'
import Batsman from './Batsman'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'
import Posts from './Posts'

//39_5
// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())



// 39-6 Load dynamic data, API call using use
// const fetchFriends = async()=>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   return res.json()
// }





// 39-7 (Recap) Load dynamic data using async await
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}
function App() {

  //39-6 Load dynamic data, API call using use
  // const friendsPromise = fetchFriends()


// 39-7 (Recap) Load dynamic data using async await
  const postPromise = fetchPosts()



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




      {/*39-4 Understand the concept of useState and react hooks*/}
      {/* <Batsman></Batsman> */}




      {/* 39-5 */}
      {/* Uses of use */}
      {/* <Suspense fallback={'loadding'}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}





      {/* 39-6 */}
      {/* <Suspense fallback='Loading for data'>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}





      {/* 39-7 */}
      <Suspense fallback="Your data is loading">
          <Posts postPromise={postPromise}></Posts>
        </Suspense>

    </>
  )
}

export default App
