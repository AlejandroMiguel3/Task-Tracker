import React from "react";

const TodoList = ({ todo, setTodo, filterTodo }) => {
  const removeTodo = (id) => {
    const newTodoList = todo.filter((todoItem) => todoItem.id !== id);
    return setTodo(newTodoList);
  };
  const completeTodo = (id) => {
    const checkItem = todo.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      console.log(item.completed);
      return item;
    });
    return setTodo(checkItem);
  };

  return (
    <>
      <div>
        <ul>
          {filterTodo.map((todoItem) => {
            const { id, task } = todoItem;
            return (
              <li key={id}>
                <div>
                  <h5>{task}</h5>
                  <button onClick={() => completeTodo(id)}>done</button>
                  <button onClick={() => removeTodo(id)}>remove</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
