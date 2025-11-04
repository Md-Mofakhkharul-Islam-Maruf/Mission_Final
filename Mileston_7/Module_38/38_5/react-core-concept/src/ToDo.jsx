// export default function ToDo({ task, isDone, time = 0 }) {
//         if(isDone){
//             return(
//                 <li>Task: {task} Duration: {time}</li>
//             )
//         } return <li>To be done: {task}</li>
//     }


//38_7   
export default function ToDo({ task, isDone, time = 0 }) {
    // return isDone? <li>Task: {task} time: {time}</li> : <li>Not done: {task} time= {time}</li>
    // return isDone && <li>Task: {task} time: {time}</li>
    // return isDone || <li>Task: {task} time: {time}</li>

    let finalStatement;
    if (isDone) {
        finalStatement = <li>Task: {task} time: {time}</li>
    }else{

        finalStatement = <li>Not done: {task} time= {time}</li>
    }
    return finalStatement;
}