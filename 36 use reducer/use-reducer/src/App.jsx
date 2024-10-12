import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

// Reducer method takes two arguments current state and action object, keeping this reducer method/function outside the App component function, because reducer function is always a PURE function, means it will just perform action on the action object and returns the current state of the object, and it won't touch/change any function/variables from outside
const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

function App() {
  // when our useState() logic becomes too complex, we can use useReducer() function instead, useReducer function takes two values i.e a Reducer method and an initial value, and returns newTodoItems and how to dispatch it
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    // cretaing an action object, with a type(can give any value) and payload(details we actually will work on)
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction); // and then dispatching our action object, which will be handled by our Reducer method
  };

  const deleteItem = (todoItemName) => {
    // cretaing an action object, with a type(can give any value) and payload(details we actually will work on)
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction); // and then dispatching our action object, which will be handled by our Reducer method
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
