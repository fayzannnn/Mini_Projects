import { useExpenses } from "../context/ExpenseContext";

function Dashboard ({onNavigate,onEdit}){
    const{budget,totalSpent,remaining,expenses,dispatch}=useExpenses()

    return(
        <div>
            <h2>Dashboard</h2>
            <p>Budget:{budget}</p>
            <p>Total Spent:{totalSpent}</p>
            <p>Reamining:{remaining}</p>
            {remaining < 0 && <p>warning you are over budget!</p>}

            <button onClick={()=>onNavigate("budget")}>Set Budget</button>
            <button onClick={()=>onNavigate("add")}>Add Expenses</button>

            <h3>Expenses</h3>
            {expenses.length === 0 ? (
             <p>No Expenses yet .</p>) :( 
                <ul>
                    {expenses.map((e)=>(
                        <li key={e.id}>
                            {e.title}({e.category})-{e.amount}{" "}
                            <button onClick={()=>onEdit(e.id)}>Edit</button>{" "}
                            <button onClick={()=>dispatch({type:"delete_expense",payload: e.id})}>Delete</button>
                        </li>
                    ))}
                </ul>
               )}
        </div>
    )
}

export default Dashboard