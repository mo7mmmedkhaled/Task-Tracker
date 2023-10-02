import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState } from "react";
import AddTask from "./Components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting At School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 8th at 1:00pm",
      reminder: false,
    },
  ]);

  //Add Task
  const addTask = (newTask) => {
    const id = Math.random() * 1000 + 1;
    const newNewTask = { id, ...newTask };
    setTasks([...tasks, newNewTask]);
  };

  //delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Reminder
  const Reminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const clearHandeller = () => {
    setTasks([])
  }

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} reminder={Reminder} />
      ) : (
        <p className="emtask">No Task To Show</p>
      )}
      <div className="div">
        <input type='submit' className="btn1" value='Clear All' onClick={clearHandeller}></input>
      </div>
    </div>
  );
};

export default App;
