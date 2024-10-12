import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  // // using useContext() method to use our TodoItemsContext context API
  // // value was passed as an object to our TodoItemsContext context API, so first storing it in an object variable
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems; // using todoItems list from our contextObj, as we need only that

  // it is same as above two lines, using destructuring syntax
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
