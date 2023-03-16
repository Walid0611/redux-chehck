import React from 'react'
import AddTodo from './AddTodo'
import {addTask,deleteTask,toggel} from '../Redux/Todo'
import { useDispatch } from 'react-redux';
import './AddTodo.css'


const TodoElement = ({minitodo}) => {
  console.log(minitodo,"mini")

  const dispatch = useDispatch() 
  return (
    <div>
    <ul >
  
  
 {<li>{minitodo.text} </li>}
 <button onClick={()=>dispatch(deleteTask(minitodo.id)) } >delete</button> 
<button  onClick={()=>dispatch(toggel(minitodo.id) )} > {minitodo.isDone ?"Yep you did it " :"Done" }  </button>


</ul>
   
    
    
    </div>
  )
}

export default TodoElement

 