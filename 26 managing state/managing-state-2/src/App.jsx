import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // creating a useState() to add/show foodItems on our console and UI on real-time, ONLY when we click 'Enter' key
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    // only when 'Enter' key is clicked
    if (event.key === "Enter") {
      let newFoodItem = event.target.value; // assign value entered in input text box to newFoodItem
      event.target.value = ""; // after clicking enter, resetting input text box value to empty
      let newItems = [...foodItems, newFoodItem]; // to show newFoodItem on our UI on real-time, we will create new array newItems[], then first add all the old values(if any) from foodItems array using spread operator '...', and then add newFoodItem using simple comma ','
      setFoodItems(newItems); // using our setFoodItems() method, we will set updated newItems list on our UI
      console.log("Food value entered is " + newFoodItem); // its value will be shown on console
    }
  };

  return (
    <>
      {/* using Container component and adding whatever content {i.e children} we want inside it, all the properties of Container component will be applied on the content inside it */}
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        {/* passing onKeyDown function via props(handleKeyDown) to FoodInput(child) component*/}
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
