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

  const handleReadingTime = (time, id) => {
    setReadingTime(readingTime + time)
    handleRemoveId(id)
  }

  const handleRemoveId = (id) => {
    const remailningId = marked.filter(remove => remove.id !== id)
    setBookmarked(remailningId)

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
            marked.map(mark => <p className='bg-red-600 m-2 p-2 text-white font-semibold '>{mark.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
