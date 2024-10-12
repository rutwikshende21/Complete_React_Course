import { createContext } from "react";

// initialized/created a context API named TodoItemsContext, with initial value of empty array
export const TodoItemsContext = createContext([]);

// // not necessary to follow below implementation, it just gives auto-completion/suggestion in VsCode
// export const TodoItemsContext = createContext({
//   todoItems: [], // because it is an array
//   addNewItem: () => {}, // beacuse it is a method
//   deleteItem: () => {}, // because it is a method
// });
