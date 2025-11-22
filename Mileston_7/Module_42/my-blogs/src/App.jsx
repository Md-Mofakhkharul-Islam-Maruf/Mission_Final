import './App.css'
import Blogs from './component/blogs/Blogs'
import Navbar from './component/navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs></Blogs>
        </div>
        <div className="right-container w-[30%]">
          Reading blogs
        </div>
      </div>
    </>
  )
}

export default App
