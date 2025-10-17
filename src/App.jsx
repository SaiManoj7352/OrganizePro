import TaskForm from "./Components/TaskForm"
import TaskList from "./Components/TaskList"
import ProgressBar from "./Components/ProgressBar"
import { useState, useEffect } from "react"
import "./Style.css";

function App() {
   const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem
    ("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }


  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index]= updatedTask;
    setTasks(newtask);
 }

const deleteTask = (index) => {
  setTasks(tasks.filter((_, i) => i != index));
}
  return (
    <div>
      <h1>OrganizePro</h1>
      <p>Organize, Prioritize, Achieve.</p>
      < TaskForm addTask={addTask} />
      <TaskList  tasks = {tasks}
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <ProgressBar tasks = {tasks} />
      <button >Clear All Tasks</button>
    </div>
  )
}
export default App