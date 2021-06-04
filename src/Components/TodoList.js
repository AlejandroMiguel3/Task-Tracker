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
      <div className="full-width">
        <ul className="todos">
          {filterTodo.map((todoItem) => {
            const { id, task, completed } = todoItem;
            return (
              <li
                key={id}
                className={`${
                  completed ? "todos-item" : "todos-item__uncompleted"
                }`}
              >
                <div className="todos-item__container">
                  <h5 className="todos-item__text">{task}</h5>
                  <div className="todos-button">
                    <button
                      className="todos-item__button"
                      onClick={() => completeTodo(id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                      >
                        <path
                          className="todos-item__button__done"
                          d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"
                        />
                      </svg>
                    </button>
                    <button
                      className="todos-item__button"
                      onClick={() => removeTodo(id)}
                    >
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="delete 1">
                          <path
                            id="Vector"
                            className="todos-item__button__delete"
                            d="M5.25 16.625C5.25 17.5875 6.0375 18.375 7 18.375H14C14.9625 18.375 15.75 17.5875 15.75 16.625V7.875C15.75 6.9125 14.9625 6.125 14 6.125H7C6.0375 6.125 5.25 6.9125 5.25 7.875V16.625ZM15.75 3.5H13.5625L12.9412 2.87875C12.7837 2.72125 12.5563 2.625 12.3288 2.625H8.67125C8.44375 2.625 8.21625 2.72125 8.05875 2.87875L7.4375 3.5H5.25C4.76875 3.5 4.375 3.89375 4.375 4.375C4.375 4.85625 4.76875 5.25 5.25 5.25H15.75C16.2312 5.25 16.625 4.85625 16.625 4.375C16.625 3.89375 16.2312 3.5 15.75 3.5Z"
                          />
                        </g>
                      </svg>
                    </button>
                  </div>
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
