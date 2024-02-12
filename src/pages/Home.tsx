import { useEffect, useState } from "react";
import { fetchTodos } from "../api/todos";

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const fetchedTodos = await fetchTodos();
        setTodos(fetchedTodos);
      } catch (err) {
        console.log(err);
      }
    };
    loadTodos();
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <div>
          <div key={todo.id}></div>
          <h1 className="text-blue-500 p-2">{todo.title}</h1>
          <p>{todo.completed ? "Completed" : "Not Completed"}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
