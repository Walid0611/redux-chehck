import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const todoSlice = createSlice ({

    name:"todo",
    initialState:[
  {id:1, text:' todo list 1' ,isDone:false},
  {id:2, text:' todo list 2' ,isDone:false},
  {id:3, text:' todo list 3' ,isDone:false},
  {id:4, text:'todo list 4'  ,isDone:false}

],
reducers:{
addTask:(state,action)=>{
const newTask={
id:uuidv4,
isDone:false,
text:action.payload
}
state.push(newTask)
},
deleteTask:(state,action)=>{
state = state.filter((e)=>e.id  !== action.payload  )
return state
},
toggel:(state,action)=>{
const task = state.map((el)=>{
  if(el.id === action.payload){
    return {... el , isDone  : !el.isDone}
  
  }else{return el}
}

)},
edittoggel : (state,action)=>{
  const index = state.findIndex((e)=> e.id === action.payload)
  state[index].description = prompt ('text');

}
}   
})

export const {addTask,deleteTask,toggel,edittoggel} = todoSlice.actions;
export default todoSlice.reducer;

