import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      <h1>Healthy Food</h1>
      {/* in below two lines sending props to ErrorMessage and FoodItems components respectively, passing foodItems by new name items to the ErrorMessage and FoodItems components respectively, key is not necessory in this example, but it might be some other conditions */}
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;

// props works same as passing a parameter/argument in normal javascript, due to this we don't need to write same data (can be variable, string, array, etc.) in different components again and again, because we can directly pass them from one component to other components using props
