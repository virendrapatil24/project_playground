import { useState } from "react";
import useNotification from "../hooks/use-notification";

// { id: 1, description: code, done: false}
let curr_id = 0;

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const { ToastContainer, showToast } = useNotification();

  const handleToDoInputChange = (e) => setTodo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [
      ...prev,
      { id: curr_id++, description: todo, done: false },
    ]);
    setTodo("");
    showToast({ message: "todo item added", type: "success" });
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    showToast({ message: "todo item deleted", type: "error" });
  };

  const handleDone = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
    showToast({ message: "todo item updated", type: "info" });
  };

  return (
    <>
      <div className="todolist__container">
        <div className="todolist__title">
          <h2>To Do List</h2>
        </div>
        <div className="todolist__form">
          <form onSubmit={handleSubmit}>
            <input
              value={todo}
              onChange={handleToDoInputChange}
              placeholder="...add your todos"
            />
            <button type="submit">Add</button>
          </form>
        </div>
        {todos.length > 0 && (
          <div className="todolist__items">
            {todos.map((todo) => (
              <div key={todo.id} className="todo__item__container">
                <input type="checkbox" onChange={() => handleDone(todo.id)} />
                <p>{todo.description}</p>
                <p>{todo.done ? "Done" : "Pending"}</p>
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(todo.id)}
                >
                  x
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default ToDoList;
