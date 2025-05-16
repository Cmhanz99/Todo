  import React, { useEffect, useState } from "react";
  import TodoInput from "./components/TodoInput";
  import TodoList from "./components/TodoList";

  const App = () => {
    const [todos, setTodos] = useState(() => {
      const savedTodos = JSON.parse(localStorage.getItem("item"));
      return savedTodos ? savedTodos : [];
    });

    const [task, setTask] = useState("");
    const [done, setDone] = useState([]);

    useEffect(() => {
      localStorage.setItem("item", JSON.stringify(todos));
    }, [todos]);

    const handleClick = () => {
      if (task.trim() === "") return;
      setTodos([...todos, task]);
      setTask("");
    };

    const handleKey = (e) => {
      if (e.key === "Enter") {
        setTodos([...todos, task]);
        setTask("");
      }
    };

    const handleDelete = (index) => {
      const updatedTodos = todos.filter((_, i) => index !== i);
      setTodos(updatedTodos);
    };

    const handleUpdate = (index) => {
      const updateTodo = todos[index];
      setTask(updateTodo);
      handleDelete(index);
    };
    return (
      <>
        <TodoInput
          task={task}
          setTask={setTask}
          handleClick={handleClick}
          handleKey={handleKey}
        />
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          done={done}
          setDone={setDone}
        />
      </>
    );
  };

  export default App;
