const TodoInput = ({ task, setTask, handleClick, handleKey }) => {
  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKey}
          className="flex-grow px-4 py-3 focus:outline-none text-gray-700"
        />
        <button 
          onClick={handleClick}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 transition-colors duration-200"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TodoInput;