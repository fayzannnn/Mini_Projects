import { useState } from "react";
import { useExpenses } from "../context/ExpenseContext";

function Editexpense({id,onDone}) {
    const{expenses,dispatch}= useExpenses()
    const expense = expenses.find((e)=>e.id===id)

    const[title,setTitle]= useState(expense?.title ?? "")
    const[amount,setAmount]= useState(expense?.amount ?? "")
    const[category,setCategory]= useState(expense?.category ?? "Food")

    if(!expense)return <p>Expense not Found </p>

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!title.trim()|| Number(amount) <= 0) return

        dispatch ({type : "edit_expense",payload:{id,title:title.trim(),amount: Number(amount), category}
    })
    onDone();
    }

    return(
        <div>
            <h2>Edit Expense</h2>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <input type="number" value={amount}
                onChange={(e)=>setAmount(e.target.value)}/>

                <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option>food</option>
                    <option>travel</option>
                    <option>shopping</option>
                    <option>bills</option>
                    <option>other</option>
                </select>
                <button type="submit">Update Expense</button>
                <button type="button" onClick={onDone}>Cancel</button>
            </form>
        </div>
    )
}
export default Editexpense