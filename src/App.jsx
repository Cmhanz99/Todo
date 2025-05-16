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
      if (task.trim() === "") return;
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-md mb-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-2">Todo App</h1>
        <p className="text-gray-500 text-center">Keep track of your daily tasks</p>
      </div>
      
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-6">
        <TodoInput
          task={task}
          setTask={setTask}
          handleClick={handleClick}
          handleKey={handleKey}
        />
      </div>
      
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        done={done}
        setDone={setDone}
      />
    </div>
  );
};

export default App;