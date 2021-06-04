import React, { useState, useEffect } from "react";
import "./App.scss";
import InputTask from "./Components/InputTask";
import TodoList from "./Components/TodoList";

function App() {
  const [inputTask, setInputTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [filterTodo, setFilterTodo] = useState([]);

  return (
    <>
      <div className="container">
        <section className="d-flex-col align-items-start">
          <InputTask
            inputTask={inputTask}
            setInputTask={setInputTask}
            todo={todo}
            setTodo={setTodo}
            filterTodo={filterTodo}
            setFilterTodo={setFilterTodo}
          />
          <TodoList todo={todo} setTodo={setTodo} filterTodo={filterTodo} />
        </section>
      </div>
      <div className="background"></div>
    </>
  );
}

export default App;
