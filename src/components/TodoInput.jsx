const TodoInput = ({ task, setTask, handleClick, handleKey }) => {
  return (
    <header>
      <input
        type="text"
        placeholder="Enter a Task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKey}
      />
      <button onClick={handleClick}>Add</button>
    </header>
  );
};

export default TodoInput;
