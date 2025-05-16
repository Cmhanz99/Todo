const TodoCard = ({ todo, index, handleDelete, handleUpdate, done, setDone}) => {
  const handleDone = (index) => {
    if (done.includes(index)) {
      setDone(done.filter(i => i !== index));
    } else {
      setDone([...done, index])
    }
  };

  return (
    <li className="todoItem">
      <p 
      className={`todo_item ${done.includes(index) ? "active" : ""}`}
      onClick={() => handleDone(index)}>{todo}</p>
      <div className="actionsContainer">
        <button onClick={() => handleUpdate(index)}>
          <i className="fa fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDelete(index)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
