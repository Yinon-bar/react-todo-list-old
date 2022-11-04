function TaskInput() {
  return (
    <div>
      TaskInput
      <h2>Enter Task Name: </h2>
      <input type="text" className="form-control" />
      <h2>Enter Task Time: </h2>
      <input type="time" defaultValue="09:30" className="form-control" />
      <div className="btns text-center my-4">
        <button className="btn btn-success me-3">Add</button>
        <button className="btn btn-danger">Rests Tasks</button>
      </div>
    </div>
  );
}

export default TaskInput;
