import { useState } from "react";
import { useExpenses } from "../context/ExpenseContext";

function AddExpense({onDone}){
    const{dispatch} = useExpenses();
    const[title,setTitle]=useState("")
    const[amount,setAmount]= useState('')
    const[category,setCategory]= useState("Food")

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!title.trim()|| Number(amount)<=0)return
       
        dispatch({
            type:"add_expense",
            payload:{
                id:Date.now(),
                title:title.trim(),
                amount:Number(amount),
                category,
            }
        })
        onDone();
    }

    return(
        <div>
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <input  placeholder="Title" value={title}
                onChange={(e)=>setTitle(e.target.value)}/>
                <input type="number" placeholder="Amount" value={amount}
                onChange={(e)=>setAmount(e.target.value)}/>
                <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option>food</option>
                    <option>travel</option>
                    <option>shopping</option>
                    <option>bills</option>
                    <option>others</option>
                    </select>
                    <button type="submit">Add Expense</button>
                    <button type="button" onClick={onDone}>Cancel</button>
            </form>
        </div>
    )
}
export default AddExpense