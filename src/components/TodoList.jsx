import TodoCard from "./TodoCard";

const TodoList = ({ todos, handleDelete, handleUpdate, done, setDone }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      {todos.length === 0 ? (
        <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p className="text-gray-500">No tasks available...</p>
        </div>
      ) : (
        <ul className="space-y-3">
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
      )}
    </div>
  );
};

export default TodoList;
