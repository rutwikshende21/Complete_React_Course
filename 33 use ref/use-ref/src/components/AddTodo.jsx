import styles from "./AddTodo.module.css";
import { useRef } from "react";
import { MdAddToQueue } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef(); // declared a useRef() variable/object todoNameElement with no initial value(empty)
  const dueDateElement = useRef(); // declared a useRef() variable/object dueDateElement with no initial value(empty)

  const handleAddButtonClicked = (event) => {
    event.preventDefault(); // by default, form element submits details to server and refreshes the application, so to avoid this and see our changes on UI, we use this event.preventDefault() method

    const todoName = todoNameElement.current.value; // storing the value we entered(curret value) in our todoNameElement Ref, into a variable todoName
    const dueDate = dueDateElement.current.value; // storing the value we entered(curret value) in our dueDateElement Ref, into a variable dueDate

    todoNameElement.current.value = ""; // again resetting value of our todoNameElement Ref to empty value
    dueDateElement.current.value = ""; // again resetting value of our dueDateElement Ref to empty value

    onNewItem(todoName, dueDate);
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
            ref={todoNameElement} // created ref for todoName Element, using useRef()
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input
            className={styles.inputField}
            type="date"
            ref={dueDateElement} // created ref for dueDate Element, using useRef()
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
