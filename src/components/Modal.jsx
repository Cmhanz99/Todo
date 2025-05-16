const Modal = ({ update, setUpdate, handleUpdate, index }) => {
  return (
    <div className="modal">
      <header className="modal_action">
        <h3>Update List</h3>
        <input 
          type="text" 
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
        />
        <button className="btn_update" onClick={() => handleUpdate(index)}>Update</button>
      </header>
    </div>
  );
}

export default Modal;
