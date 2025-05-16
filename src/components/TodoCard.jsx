const TodoCard = ({ todo, index, handleDelete, handleUpdate, done, setDone }) => {
  const handleDone = (index) => {
    if (done.includes(index)) {
      setDone(done.filter(i => i !== index));
    } else {
      setDone([...done, index]);
    }
  };

  return (
    <li className="mb-3 animate-fadeIn">
      <div className="flex items-center justify-between bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <div 
          className={`flex-grow p-4 cursor-pointer ${done.includes(index) ? "line-through text-gray-400" : "text-gray-800"}`}
          onClick={() => handleDone(index)}
        >
          {todo}
        </div>
        <div className="flex items-center space-x-1 pr-3">
          <button 
            onClick={() => handleUpdate(index)}
            className="text-indigo-500 hover:text-indigo-700 p-2 rounded-full hover:bg-indigo-50 transition-colors duration-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button 
            onClick={() => handleDelete(index)}
            className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors duration-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoCard;
