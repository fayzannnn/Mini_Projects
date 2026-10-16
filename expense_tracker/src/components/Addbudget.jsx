import { useState } from "react";
import { useExpenses } from "../context/ExpenseContext";

function Addbudget({onDone}){
    const{budget,dispatch}= useExpenses()
    const[value,setValue]= useState(budget || "")

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!value || Number(value)<=0) return 
        dispatch({type:"set_budget",payload:Number(value)})
        onDone()
        }

        return(
            <div>
                <h2>Add Budget</h2>
                <form onSubmit={handleSubmit}>
                    <input type="number" placeholder="enter budget" value={value} onChange={(e)=> setValue(e.target.value)}/>
                    <button type="submit">Save Budget</button>
                    <button type="button" onClick={onDone}>Cancel</button>
                </form>
            </div>
        )
}
export default Addbudget;