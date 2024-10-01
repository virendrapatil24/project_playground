import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { X } from "lucide-react";
import axios from "axios";
import { useForm } from "react-hook-form";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface FormData {
  text: string;
}

const ToDoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "sample", done: true },
  ]);
  const [token, setToken] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("authToken");
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
      fetchTodos(tokenFromStorage);
    }
  }, []);

  const fetchTodos = async (token: string) => {
    try {
      const response = await axios.get("http://localhost:3000/api/todos", {
        headers: { token },
      });
      console.log(response);
      setTodos(response.data);
    } catch (error) {
      console.error("error fetching todos:", error);
      alert("error fetching todos");
    }
  };

  const addTodo = async (data: FormData) => {
    if (data.text.trim() === "" || !token) return;
    try {
      const response = await axios.post(
        "http://localhost:3000/api/todos",
        { text: data.text },
        {
          headers: { token },
        }
      );
      setTodos([...todos, response.data]);
      reset();
    } catch (error) {
      console.error("error adding todo:", error);
      alert("error adding todo");
    }
  };

  const toggleTodo = async (id: number) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/todo/${id}`,
        {},
        {
          headers: { token },
        }
      );

      const updatedTodo = response.data;
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    } catch (error) {
      console.error("error toggle todo:", error);
      alert("error toggle todo");
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/api/todo/${id}`, {
        headers: { token },
      });

      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("error deleting todos:", error);
      alert("error deleting todos");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">To-Do List</CardTitle>
          <CardDescription>Manage your task efficiently</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col space-x-2 mb-4"
            onSubmit={handleSubmit(addTodo)}
          >
            <div className="flex flex space-x-2">
              <Input
                id="text"
                type="text"
                placeholder="Add a new task"
                {...register("text", { required: true })}
              />
              <Button type="submit">Add</Button>
            </div>
            {errors.text && (
              <span className="text-sm text-red-500">task is required</span>
            )}
          </form>

          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-white p-2 rounded shadow"
              >
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`todo-${todo.id}`}
                    checked={todo.done}
                    onCheckedChange={() => toggleTodo(todo.id)}
                  />
                  <Label
                    htmlFor={`todo-${todo.id}`}
                    className={`${
                      todo.done ? " line-through text-gray-500" : ""
                    }`}
                  >
                    {todo.text}
                  </Label>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500">
            {todos.filter((todo) => todo.done === false).length} task
            {todos.filter((todo) => todo.done === false).length === 1
              ? ""
              : "s"}{" "}
            remaining
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ToDoPage;
