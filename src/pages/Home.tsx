import { useEffect, useState } from "react";
import { fetchTodos } from "../api/todos";
import TodoCard from "../components/Card/TodoCard";

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  //   const [serverError, setServerError] = useState("");

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const fetchedTodos = await fetchTodos();
        setTodos(fetchedTodos);
      } catch (err) {
        // setServerError(err);
      }
    };
    loadTodos();
  }, [todos]);

  const handleSubmit = () => {
    console.log("Form Submitted");
  };

  return (
    <div>
      {todos.map((todo) => (
        // <TodoCard props={todo} />
        <TodoCard
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          onSubmit={handleSubmit}
        />
      ))}
    </div>
  );
};

export default Home;
