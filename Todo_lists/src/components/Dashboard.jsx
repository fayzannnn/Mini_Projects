import React from 'react'
import { useTodos } from '../context/Todocontext'

function Dashboard({onNavigate,onEdit}) {

 const {todos , totalCount ,completedCount,pendingCount,dispatch}= useTodos()

  return (
    <div>
        <h2>Dashboard</h2>
        <p>Total:{totalCount}</p>
        <p>Completed:{completedCount}</p>
        <p>Pending: {pendingCount}</p>

        <button onClick={()=> onNavigate("add")}>Add TODO</button>

        <h3>TODOs</h3>
        {todos.length === 0 ? (<p>No todos yet .</p>):(<ul>
            {todos.map((e)=>(<li key={e.id}>
                <input type='checkbox' checked={e.completed}
                onChange={()=>dispatch({type:"TOGGLE_TODO",payload:e.id})}/>
                {" "}
                {e.completed ? <s>{e.text}</s> : e.text}{" "}
                <button onClick={()=>onEdit(e.id)}>Edit</button>{" "}
                <button onClick={()=> dispatch({type:"DELETE_TODO",payload: e.id})}>Delete</button>
            </li>))}
        </ul>) }
      
    </div>
  )
}

export default Dashboard
