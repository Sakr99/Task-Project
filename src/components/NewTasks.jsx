import React, { useState } from 'react'

function NewTasks({onAdd}) {
    const [enteredTask , setEnteredTask] =useState("")

   const handleChenge = (event)=>{
    setEnteredTask(event.target.value)
    }
    const handleClick =()=>{
      if (enteredTask.trim() === "") {
        return;
      }
      onAdd(enteredTask);
        setEnteredTask (""); 
    }
  return (<div className='flex items-center gap-4'>
        <input type="text" className='w-64 px-2 py-1 rounded-sm bg-stone-200'
        onChange={handleChenge} value={enteredTask} />
        <button onClick={handleClick} className='px-6 py-2 bg-stone-400 rounded-md text-stone-800 hover:bg-stone-500 '>Add Task</button>
    </div>
  )
}

export default NewTasks