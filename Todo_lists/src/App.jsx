import { useState } from "react"
import { TodoProvider } from "./context/Todocontext"
import Dashboard from "./components/Dashboard"
import Addtodo from "./components/Addtodo"
import Editodo from "./components/Editodo"

function App() {

  const [view , setView]=useState("dashboard")
  const [editId , setEditId]= useState(null)

  const goHome = ()=> setView("dashboard")

  const handleEdit = (id)=>{
    setEditId(id);
    setView("edit");
  }

  return (
    <TodoProvider>
     <h1> fayzan Todo Lists</h1>
    {view === "dashboard" && (
      <Dashboard onNavigate = {setView} onEdit={handleEdit}/>
     )}
     {view === "add"&& <Addtodo onDone={goHome}/>}
     {view === "edit"&& <Editodo id={editId} onDone={goHome}/>}
    </TodoProvider>
  )
}

export default App
