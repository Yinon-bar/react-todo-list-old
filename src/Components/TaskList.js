import TaskItem from "./TaskItem";

function TaskList(props) {
  return (
    <div>
      <h2>Task List</h2>
      {/* <TaskItem /> */}
      {console.log(props.tasksArr)}
      {props.tasksArr.map((taskObj) => (
        <TaskItem key={taskObj.id} taskObj={taskObj} />
      ))}
    </div>
  );
}

export default TaskList;
