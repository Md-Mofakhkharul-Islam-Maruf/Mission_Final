export default function ToDo({ task, isDone, time = 0 }) {
        if(isDone){
            return(
                <li>Task: {task} Duration: {time}</li>
            )
        } return <li>To be done: {task}</li>
    }