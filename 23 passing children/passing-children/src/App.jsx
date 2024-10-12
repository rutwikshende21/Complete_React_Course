import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      {/* using Container component and adding whatever content {i.e children} we want inside it, all the properties of Container component will be applied on the content inside it */}
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* we can use this Container as many times as we want, we can also this by nesting the Container component inside the Container component itself*/}
      <Container>
        <p>
          Above is the list of healthy foodsthat are good for your health and
          welll being
        </p>
      </Container>
    </>
  );
}

export default App;
