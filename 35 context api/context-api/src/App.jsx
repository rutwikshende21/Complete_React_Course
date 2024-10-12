import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    // using functional update, to update state from previous state
    setTodoItems((currValue) => {
      const newTodoItems = [
        ...currValue, // instead of fetching whole todoItems value, we will use current(immediate old) value
        { name: itemName, dueDate: itemDueDate },
      ];
      return newTodoItems;
    });
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    // we have kept all our components inside TodoItemsContext.Provider, which provides access to the context API TodoItemsContext for all our components,
    // also giving todoItems list, addNewItem method, deleteItem method, as a default object value to our context
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
