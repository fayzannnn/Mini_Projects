import { useState } from 'react'
import { ExpenseProvider } from './context/ExpenseContext'
import Dashboard from './components/Dashboard'
import Addbudget from './components/Addbudget'
import AddExpense from './components/Addexpense'
import Editexpense from './components/Editexpense'


function App() {
  const [view,setView]= useState("dashboard")
  const [editID,setEditID]= useState(null)

  const goHome = ()=> setView("dashboard")


  const handleEdit = (id)=>{
    setEditID(id);
    setView("edit");
  }


  return (
    <ExpenseProvider>
     <header>Expense Tracker</header>
     {view === "dashboard" && (
      <Dashboard onNavigate={setView} onEdit={handleEdit}/>
     )}
     {view === "budget" && <Addbudget onDone={goHome}/>}
     {view === "add" && <AddExpense onDone={goHome}/>}
     {view === "edit"&& <Editexpense id={editID} onDone={goHome}/>}
    </ExpenseProvider>
  )
}

export default App
