import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function AppTodo() {
  let [tasksArr, setTaskArr] = useState([]);

  const addTask = (itemTask) => {
    setTaskArr([...tasksArr, itemTask]);
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center">Todo List- Yinon - Bar</h1>
      <div className="col-lg-6 p-3 mx-auto">
        <TaskInput addData={addTask} />
        <TaskList />
      </div>
    </div>
  );
}

export default AppTodo;
