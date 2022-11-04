import { useRef } from "react";

function TaskInput(props) {
  const nameRef = useRef();
  const timeRef = useRef();

  const onAddTask = () => {
    console.log(nameRef.current.value);
    console.log(timeRef.current.value);

    const todoItem = {
      name: nameRef.current.value,
      time: timeRef.current.value,
      id: Date.now(),
    };
    props.addData(todoItem);
    console.log(todoItem);
  };

  return (
    <div>
      TaskInput
      <h2>Enter Task Name: </h2>
      <input ref={nameRef} type="text" className="form-control" />
      <h2>Enter Task Time: </h2>
      <input
        ref={timeRef}
        type="time"
        defaultValue="09:30"
        className="form-control"
      />
      <div className="btns text-center my-4">
        <button onClick={onAddTask} className="btn btn-success me-3">
          Add
        </button>
        <button className="btn btn-danger">Rests Tasks</button>
      </div>
    </div>
  );
}

export default TaskInput;
