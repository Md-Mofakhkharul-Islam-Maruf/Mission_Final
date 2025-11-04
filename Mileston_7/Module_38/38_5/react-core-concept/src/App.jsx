
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

// // 38_7
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

// 38_8
import Actor from './Actor';
import './App.css'
import Singer from './Singer';

function App() {

  const actors = ['bapppa', 'sunny', 'hena']

  const singers = [
    { id: 1, name: 'Monir', age: 60 },
    { id: 2, name: 'naznin', age: 60 },
    { id: 3, name: 'sabina', age: 55 }
  ]

  return (
    <>
    <h2>Name of Actor: </h2>
      {
        actors.map(actor => <Actor actor={actor}></Actor>)
      }
      <h2>Name of singers: </h2>
      {
        singers.map(singer=><Singer id={singer.id} singer={singer} ></Singer>)
      }
    </>
  )
}

export default App
