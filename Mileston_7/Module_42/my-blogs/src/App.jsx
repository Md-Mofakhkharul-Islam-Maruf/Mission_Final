import { useState } from 'react'
import './App.css'
import Blogs from './component/blogs/Blogs'
import Navbar from './component/navbar/Navbar'

function App() {

  const [marked, setBookmarked] = useState([])

  const handleBookmarked = (blog) => {
    setBookmarked([...marked, blog])
  }


  const [readingTime, setReadingTime] = useState(0)

  const handleReadingTime = (time) => {
    setReadingTime(readingTime + time)
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs handleBookmarked={handleBookmarked} handleReadingTime={handleReadingTime}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h2>Bookmarked: {marked.length}</h2>
          <h2>Reading Time: {readingTime}</h2>
          {
            marked.map(mark => <p>{mark.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
