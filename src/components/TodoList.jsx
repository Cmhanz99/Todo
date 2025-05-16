import TodoCard from "./TodoCard";

const TodoList = ({ todos, handleDelete, handleUpdate, done, setDone }) => {
  return (
    <ul className="main">
      <p>{todos.length === 0 ? "No task available..." : ""}</p>
      {todos.map((todo, index) => (
        <TodoCard
          key={index}
          todo={todo}
          index={index}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          done={done}
          setDone={setDone}
        />
      ))}
    </ul>
  );
};

export default TodoList;
