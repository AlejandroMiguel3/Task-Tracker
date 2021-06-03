import React, { useEffect } from "react";

const InputTask = ({
  inputTask,
  setInputTask,
  todo,
  setTodo,
  setFilterTodo,
}) => {
  useEffect(() => {
    console.log("jey");
    sortUncomplete();
    sortComplete();
    sortAll();
  }, [todo]);

  const readInput = (e) => {
    setInputTask(e.target.value);
  };
  const addTask = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      {
        task: inputTask,
        id: new Date().getTime().toString(),
        completed: false,
      },
    ]);
    setInputTask("");
  };
  const sortUncomplete = () => {
    setFilterTodo(todo.filter((item) => item.completed === false));
  };
  const sortComplete = () => {
    setFilterTodo(todo.filter((item) => item.completed === true));
  };
  const sortAll = () => {
    setFilterTodo(todo);
  };
  return (
    <>
      <div>
        <input
          value={inputTask}
          type="text"
          onChange={readInput}
          placeholder="Add an item"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        <button onClick={() => sortAll()}>All</button>
        <button onClick={() => sortComplete()}>Done</button>
        <button onClick={() => sortUncomplete()}>Uncomplete </button>
      </div>
    </>
  );
};
export default InputTask;
