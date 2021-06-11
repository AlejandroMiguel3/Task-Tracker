import React, { useEffect } from "react";

const InputTask = ({
  inputTask,
  setInputTask,
  todo,
  setTodo,
  setFilterTodo,
}) => {
  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    sortUncomplete();
    sortComplete();
    sortAll();
    saveLocalTodos();
  }, [todo]);

  const saveLocalTodos = () => {
    localStorage.setItem("todo", JSON.stringify(todo));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todo") == null) {
      localStorage.setItem("todo", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todo"));
      setTodo(todoLocal);
    }
  };

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
  const progressMax = todo.length;
  const progressMin = todo.filter((item) => item.completed === true).length;
  const progressPercentage = ((progressMin / progressMax) * 100).toFixed(0);

  return (
    <section className="input-task">
      <div className="input-add d-flex-row align-items-center justify-content-between full-width">
        <input
          value={inputTask}
          type="text"
          onChange={readInput}
          placeholder="Add an item"
          className="input-add__todo"
        />
        <button
          className="button-add"
          style={{ padding: "7px" }}
          onClick={addTask}
        >
          <svg height="24px" viewBox="0 0 24 24" width="24px">
            <path
              className="button-add__color"
              d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
            />
          </svg>
        </button>
      </div>
      <progress value={progressMin} max={progressMax}></progress>
      <p>
        {progressPercentage != "NaN"
          ? `${progressPercentage}%`
          : "No task assigned yet"}
      </p>
      <div className="button-sort">
        <button className="button-sort__todo" onClick={() => sortAll()}>
          All
        </button>
        <button className="button-sort__todo" onClick={() => sortComplete()}>
          Done
        </button>
        <button className="button-sort__todo" onClick={() => sortUncomplete()}>
          Uncomplete{" "}
        </button>
      </div>
    </section>
  );
};
export default InputTask;
