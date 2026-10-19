import React, { useState } from 'react'
import { useTodos } from '../context/Todocontext'

function Editodo({id,onDone}) {
  
    const{todos , dispatch}= useTodos()
    const todo = todos.find((e)=>e.id === id)

    const [text,setText]= useState(todo?.text ?? "")

    if(!todo) return <p> Todo not Found.</p>

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!text.trim()) return

        dispatch({
            type:"EDIT_TODO",
            payload:{...todo,text : text.trim()},
        })
        onDone()
    }

  return (
    <div>
      <h2>Edit Todo</h2>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e)=> setText(e.target.value)} />
        <button type="submit">Update Todo</button>
        <button type='button' onClick={onDone}>cancel</button>
      </form>
    </div>
  )
}

export default Editodo
