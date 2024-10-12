import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  // using useContext() method to use our TodoItemsContext context API
  // value was passed as an object to our TodoItemsContext context API, so first storing it in an object variable
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems; // then using todoItems list from our contextObj, as we need only that

  // // it is same as above two lines, using destructuring syntax
  // const { todoItems } = useContext(TodoItemsContext);

  return (
    /* below line means, displaying WelcomeMessage only when our todoItems list is empty */
    todoItems.length === 0 && (
      <p className={styles.welcome}>
        Enjoy Your Day!!! You don't have any pending tasks to do today.
      </p>
    )
  );
};

export default WelcomeMessage;
