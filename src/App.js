import { useState } from 'react'
import { BrowserRouter as Router, Route} from 
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import addTask from './components/AddTask'



function App() {
  const [showAddTask, setShowAddTask] = useState
  (false)
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Doctors Appointment',
    day:'Feb 5th at 2:30pm',
    reminder: true,
   },
  {
     id: 2,
    text:'Meeting at School',
    day:'Feb 6th at 1:30pm',
    reminder:true,
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5that 2:30pm',
    reminder: false,
   },
 ])

   //Add Task
   const addTask = (task) => {
     const id = Math.floor(Math.random() * 10000) + 1
     const newTask = { id, ...task }
     setTasks([...tasks, newTask])
   }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) =>
     task.id == id ? { ...task, reminder: !task.reminder } : task
     )
    )
  }

  return (
    <Router>
    <div className='container'>
       <Header 
         onAdd={() => setShowAddTask
          (!showAddTask)} 
          showAdd={showAddTask} 
       /> 
        {showAddTask && <addTask onadd={addTask} />}
        {tasks.length > 0 ? (
           <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
        ): (
          'No Tasks To Show'
        )}
       <Route path='/about' component={About} />
       <Footer />
       <About />
    </div>
    </Router>
  )
}

export default App;
