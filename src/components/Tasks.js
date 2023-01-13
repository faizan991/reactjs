
/*
const oldTasks = [
    { id:1, text: 'Array ', dat: 'Monday', reminder:true },
    { id:2, text: 'forEach ', dat: 'Friday', reminder:true },
    { id:3, text: 'methods ', dat: 'Tuesday', reminder:true },
    { id:4, text: 'like ', dat: 'Sunday', reminder:true },
]
*/

import Task from "./Task"
const Tasks = ({tasks , onDelete ,onToggle}) => {
  return (
    <>       
      {
        tasks.map( (task , key) => (
            <Task key={key} task={task} onDelete={onDelete}  onToggle ={onToggle} />
        ))
      }
    </>
  )
}

export default Tasks
