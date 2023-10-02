import Task from "./Task";
const Tasks = ({ tasks, deleteTask, reminder }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} reminder={reminder} />
      ))}
    </div>
  );
};

export default Tasks;
