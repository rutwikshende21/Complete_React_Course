import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  // method to add an item, AddTodo component has to provide itemName,itemDueDate values when users add something in todo list
  const handleNewItem = (itemName, itemDueDate) => {
    // updating new item list newTodoItems on UI on real-time, first getting old item list todoItem using '...' spread operator, then adding new items which is object of name and dueDate
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
    // console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
  };

  // method to delete an item, todoItemName is used as an event
  const handleDeleteItem = (todoItemName) => {
    // we will iterate through todoItems list and add the item to our newTodoItems list using filter() function,where we will add the item whose name is not equal to todoItemName(i.e the item we want to delete)
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    // console.log(`Item Deleted: ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {/* in below line displaying WelcomeMessage only when our todoItems list is empty */}
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
