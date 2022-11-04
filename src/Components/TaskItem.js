function TaskItem(props) {
  return (
    <div className="mt-3 shadow p-3 rounded rounded-5 d-flex justify-content-between border align-items-center">
      <h4 className="m-0">
        {props.taskObj.name} - {props.taskObj.time}
      </h4>
      <button className="btn btn-danger rounded-circle">X</button>
    </div>
  );
}

export default TaskItem;
