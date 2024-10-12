import { createContext, useReducer } from "react";

// // initialized/created a context API named TodoItemsContext, with initial value of empty array
// export const TodoItemsContext = createContext([]);

// it is same as aboveline, not necessary to follow below implementation, it just gives auto-completion/suggestion in VsCode
export const TodoItemsContext = createContext({
  todoItems: [], // because it is an array
  addNewItem: () => {}, // beacuse it is a method
  deleteItem: () => {}, // because it is a method
});

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

// moving the code from App() component, so creating TodoItemscontextProvider method, getting children as props
const TodoItemsContextProvider = ({ children }) => {
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
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {/* wrapping the children inside TodoItemsContext */}
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
