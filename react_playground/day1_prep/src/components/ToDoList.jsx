import { useState } from "react";
import "./base.css";

const ToDoList = () => {
  const [todo, setToDo] = useState("");
  const [todos, setToDos] = useState([]);
  const [count, setCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setToDos([...todos, { id: count, title: todo, done: false }]);
    setCount(count + 1);
    setToDo("");
    console.log(todo, todos);
  };

  const handleDelete = (id) => {
    setToDos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );

    setToDos(updatedTodos);
    console.log(todos);
  };

  return (
    <div className="container">
      <div className="todolist__container">
        <h1>To Do List</h1>

        <form onSubmit={handleSubmit} className="todo__form">
          <input
            value={todo}
            placeholder="add your to do..."
            onChange={(e) => setToDo(e.target.value)}
            className="todo__input"
          />
          <button type="submit">Add</button>
        </form>
        {todos.length > 0 && (
          <div className="todolist__tab">
            {todos.map((todo) => (
              <div key={todo.id} className="todo__item">
                <div className="todo__body">
                  <input type="checkbox" onChange={() => handleDone(todo.id)} />
                  <span className={todo.done ? "todo__done" : ""}>
                    {todo.title}
                  </span>
                </div>
                <div
                  className="todo__delete"
                  onClick={() => handleDelete(todo.id)}
                >
                  x
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
