import { createContext ,useContext,useReducer } from "react";

const ExpenseContext = createContext(null)

const initialState ={
    budget:0,
    expenses:[],
}

function reducer (state ,action){
    switch(action.type){
        case "set_budget":
            return{...state,budget: action.payload}

         case "add_expense":
            return{...state,expenses: [...state.expenses,action.payload]}
            
         case "edit_expense":
            return{
                ...state,expenses: state.expenses.map((e)=> e.id === action.payload.id ? action.payload :e)
            }   

         case "delete_expense":
            return{...state , expenses:state.expenses.filter((e)=>e.id !== action.payload)
            } 
            default:
                return state
    }
}


export function ExpenseProvider({children}){

   const [state,dispatch] = useReducer(reducer,initialState)

   const totalSpent = state.expenses.reduce(
  (sum, expense) => sum + Number(expense.amount || 0),
  0
);
   const remaining = state.budget - totalSpent;


   const value = {
    budget:state.budget,
    expenses :state.expenses,
    totalSpent,
    remaining,
    dispatch,
   }

   return(
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
   )
}

export function useExpenses(){
    const ctx = useContext(ExpenseContext)
    if(!ctx) throw new Error("useExpense must be used inside ExpenseProvidr")
        return ctx
}