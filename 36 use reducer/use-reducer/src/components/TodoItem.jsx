import { AiOutlineDelete } from "react-icons/ai";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext); // using only deleteItem from our context API object TodoItemsContext, as we need only that

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(todoName)} // deleting an item based on its name
          >
            <AiOutlineDelete></AiOutlineDelete>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
