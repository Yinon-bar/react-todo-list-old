import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function AppTodo() {
  return (
    <div className="container">
      <h1 className="display-4 text-center">Todo List- Yinon - Bar</h1>
      <div className="col-lg-6 p-3 mx-auto">
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}

export default AppTodo;
