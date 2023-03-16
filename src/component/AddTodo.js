import React from 'react'
import './AddTodo.css'
import { useDispatch } from 'react-redux'
import { addTask } from '../Redux/Todo'
import { useState } from 'react'


const AddTodo = () => {
  const dispatch = useDispatch()

  const [input,setInput] =useState('')
const handleAdd=()=>{
dispatch(addTask(input))
}

  return (
    <div>
    <div id="myDIV" className="header">
  <h2 style={{margin:"5px"}}>My To Do List</h2>
  
  <input  placeholder="Title..." onChange={(e)=>setInput(e.target.value)}></input>
  <button  onClick={handleAdd}  >add</button>
  

  
        
        
    


</div>

    </div>
  )
}

export default AddTodo