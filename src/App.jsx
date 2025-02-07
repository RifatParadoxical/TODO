import React, { useState } from 'react'

const App = () => {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);
  function handleChange(e) {
    setTask(e.target.value)
  }
  function saveTask() {
    if (task.trim() !== "") {
      setTaskList([...taskList, task])
      setTask("")
    }
  }
  function keyPress(e) {
    if (e.key === "Enter") {
      saveTask()
    }
  }

  return (
      <div className='container'>
        <div className='inputField'>
      <input onKeyDown={keyPress} type="text" value={task} placeholder='Add Task' onChange={handleChange}/>
      <button onClick={saveTask}>Save</button>
      </div>
      <div className='task-container'>
      { taskList.map((itemTask) =>(
        <h1 className='taskName'>{itemTask}</h1>
      ))}
      </div>
      </div>
  )
}

export default App