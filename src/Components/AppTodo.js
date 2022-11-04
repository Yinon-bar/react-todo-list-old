import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function AppTodo() {
  return (
    <div className="container">
      <h1>App todo</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default AppTodo;
