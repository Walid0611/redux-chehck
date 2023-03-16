import React from 'react'
import './AddTodo.css'


const TodoElement = ({minitodo}) => {
  console.log(minitodo,"mini")
  return (
    <div>
    <ul >
  
  
 {<li>{minitodo.text} </li>}
 <button>delete</button> 
<button>done?</button>
</ul>
    
    
    
    </div>
  )
}

export default TodoElement

