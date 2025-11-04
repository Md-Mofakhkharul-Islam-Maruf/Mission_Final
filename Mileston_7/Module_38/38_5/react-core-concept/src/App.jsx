
// // 38_6
// import './App.css'
// import ToDo from './ToDo';

// function App() {
//   const time = 50
//   return (
//     <>
//       <div>
//         <ToDo task='learn React' isDone={true} time={time} ></ToDo>
//         <ToDo task='Revise Js' isDone={false} ></ToDo>
//         <ToDo task='learn Php' isDone={true} time='100' ></ToDo>
//       </div>
//     </>
//   )
// }



// export default App

// 38_7
import './App.css'
import ToDo from './ToDo';

function App() {
  const time = 50
  return (
    <>
      <div>
        <ToDo task='learn React' isDone={true} time={time} ></ToDo>
        <ToDo task='Revise Js' isDone={false} ></ToDo>
        <ToDo task='learn Php' isDone={true} time='100' ></ToDo>
      </div>
    </>
  )
}

export default App
