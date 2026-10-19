import React, { useState } from 'react'
import { useTodos } from '../context/Todocontext'

function Addtodo({onDone}) {
 
const {dispatch}= useTodos()
const [text , setText]= useState("")


const handleSubmit=(e)=>{
    e.preventDefault();
    if(!text.trim())return;


dispatch({
    type:"ADD_TODO",
    payload:{id:Date.now(), text:text.trim(), completed: false},
})
onDone();
}
  return (
    <div>
        <h2>Add Todo</h2>
        <form onSubmit={handleSubmit}>
            <input
            placeholder='what do you need to do'
            value={text}
            onChange={(e)=> setText(e.target.value)}/>
            <button type='submit'>Add todo</button>
            <button type='button' onClick={onDone}>Cancel</button>
        </form>
    </div>
  )
}

export default Addtodo
