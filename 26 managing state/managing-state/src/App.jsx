import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  // using useState() Hook to solve our problem of changing value on our UI on realtime, initially we will give our initial current value to the useState() Hook, useState() return an array containing two elements, 1st element is current value of state, and 2nd element is method/function by which we update the current value
  let textStateArr = useState("Food Item Entered by user");
  let textToShow = textStateArr[0];
  let setTextToShow = textStateArr[1];

  // // below 1 line is same as above 3 line, below we just directly de-structured our useState() Hook, as we know there are only 2 elements in our useState() Hook, i.e 1st current initial value, & 2nd method to update that current initial value,
  // // but while de-structuring we use square bracket [] instead of curly bracket {} because we are de-structuring an array i.e useState, while we were using {} to de-structure objects
  // let [ textToShow, setTextToShow ] = useState("Food Item Entered by user");

  console.log(`Current value of textState: ${textToShow}`);

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextToShow(event.target.value); // setTextToShow() method of useState() Hook will change the value on our UI on realtime
  };

  return (
    <>
      {/* using Container component and adding whatever content {i.e children} we want inside it, all the properties of Container component will be applied on the content inside it */}
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        {/* passing handleOnChange function via props to FoodInput(child) component*/}
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
