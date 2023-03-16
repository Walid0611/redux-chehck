import React from 'react'
import TodoElement from './TodoElement';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todoli = useSelector(state=>state.todo)
  console.log("todo",todoli)
  return (
    <div>
{
todoli.map((e)=> <TodoElement minitodo ={e}    />)
}
   
    
    
    
    
    </div>
  )
}

export default TodoList