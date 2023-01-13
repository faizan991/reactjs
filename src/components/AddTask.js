import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text , setText ] = useState('')
    const [day , setDay ] = useState('')
    const [reminder , setReminder ] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert ('Task fields is requird');
            return
        }
        onAdd({text ,day ,reminder});

        setText('')
        setDay('')
        setReminder(false)
        
    }
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type= "text" placeholder="Add Task" value={text} onChange={ (val) => setText(val.target.value)} />
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type= "text" placeholder="Add Day & Time" value={day} onChange={ (val) => setDay(val.target.value)} />
        </div>
        <div className="form-control form-control-check">
            <label>Reminder</label>
            <input type= "checkbox" checked={reminder} value={reminder} onChange={ (val) => setReminder(val.currentTarget.checked)} />
        </div>
        <input type="submit" value="save" className="btn btn-block" />
    </form>
  )
}

export default AddTask
