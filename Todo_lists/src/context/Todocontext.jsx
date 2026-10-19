import React,{createContext,useContext,useReducer} from 'react'

const TodoContext = createContext(null)

const initialState = {
    todos:[]
}

function reducer(state , action){
    switch(action.type){
        case "ADD_TODO":
        return{...state,todos:[...state.todos,action.payload]};

        case "EDIT_TODO":
         return{...state,todos:state.todos.map((e)=>e.id === action.payload.id ? action.payload : e)}   
    
        case "TOGGLE_TODO":
            return{...state,todos:state.todos.map((e)=>e.id === action.payload ? {...e,completed: !e.completed}:e)}  

        case "DELETE_TODO":
            return{...state ,todos:state.todos.filter((e)=>e.id !== action.payload),}   
            
            default:
                return state;
        }

}

export function TodoProvider({children}){
    const [ state ,dispatch]= useReducer(reducer,initialState)

    const totalCount = state.todos.length;
    const completedCount = state.todos.filter((e)=>e.completed).length;
    const pendingCount = totalCount - completedCount;

    const value={
        todos:state.todos,
        totalCount,
        completedCount,
        pendingCount,
        dispatch
    }
    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    )
}

export function useTodos(){
const ctx = useContext(TodoContext)
if(!ctx) throw new Error("useTodo must be inside TodoProvider")
    return ctx;
}