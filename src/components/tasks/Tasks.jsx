import { useState } from "react";
import NewTask from "./NewTask";
import Task from "./Task";


export default function Tasks() {
  const [addIsClicked, setAddIsClicked] = useState(false);
  const [tasks, setTasks] = useState([]);
  const handleAdd = () => {
    setAddIsClicked(true);
  };
  const handleCancel = () => {
    setAddIsClicked(false);
  };

  const handleSave = (newtask) => {
    setTasks((prevTasks) => [...prevTasks, newtask]);
    setAddIsClicked(false)
  };

  const handleDelete=(id)=>{
    setTasks((prevTasks)=>{
      const newTasks=prevTasks.filter(task=>task.id !== id)
      return newTasks
    })
  }
  let content = addIsClicked ? (
    <NewTask getTask={handleSave} />
  ) : (
    tasks.length === 0 &&
    <p>No tasks in this project</p>
  );
  console.log(tasks);
  const btnName = addIsClicked ? <h3>Cancel</h3> : <h3>+ New Task</h3>;

  return (
    <div>
      <header>
        <h2 className="font-bold mb-4">Tasks</h2>
      </header>
      <div>
        <button
          className="border-2 border-zinc-800 p-1 mb-4 hover:bg-zinc-800 hover:text-zinc-200"
          onClick={addIsClicked ? handleCancel : handleAdd}
        >
          {btnName}
        </button>
        {content}
        {tasks.length > 0 && (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <Task taskItem={task} handleDelete={handleDelete} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
