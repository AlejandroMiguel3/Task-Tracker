import React, { useState, useEffect } from "react";
import "./App.css";
import InputTask from "./Components/InputTask";
import TodoList from "./Components/TodoList";

function App() {
  const [inputTask, setInputTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [filterTodo, setFilterTodo] = useState([]);

  return (
    <div className="App">
      <h1>First Project</h1>
      <InputTask
        inputTask={inputTask}
        setInputTask={setInputTask}
        todo={todo}
        setTodo={setTodo}
        filterTodo={filterTodo}
        setFilterTodo={setFilterTodo}
      />
      <TodoList todo={todo} setTodo={setTodo} filterTodo={filterTodo} />
    </div>
  );
}

export default App;
