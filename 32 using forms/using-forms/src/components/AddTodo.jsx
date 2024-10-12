import styles from "./AddTodo.module.css";
import { useState } from "react";
import { MdAddToQueue } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault(); // by default, form submits details to server and refreshes the application, so to avoid this and see our changes on UI, we use this event.preventDefault() method

    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      {/* changed the div to form in below line*/}
      {/* onSubmit method allows to submit our form even when we click enter button instead of clicking button itself, for this we removed onClick method from our button element*/}
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            className={styles.inputField}
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.inputField}
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          {/* removed type="submit" as button is ofsubmit type by-default, when we use form */}
          <button className={`btn btn-success kg-button ${styles.addButton}`}>
            <MdAddToQueue></MdAddToQueue>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
