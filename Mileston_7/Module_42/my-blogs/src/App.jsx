import { useState } from 'react'
import './App.css'
import Blogs from './component/blogs/Blogs'
import Navbar from './component/navbar/Navbar'

function App() {

  const [marked, setBookmarked] = useState([])

  const handleBookmarked = (blog) => {
    setBookmarked([...marked, blog])
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs handleBookmarked={handleBookmarked}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          Bookmarked: {marked.length}
          {
            marked.map(mark => <p>{mark.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
