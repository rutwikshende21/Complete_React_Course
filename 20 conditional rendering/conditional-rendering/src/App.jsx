import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  // // we can write normal if-else statement here but not inside the JSX code below
  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry.</h3>;
  // }

  return (
    <>
      <h1>Healthy Food</h1>

      {/* inside JSX code, we need to write if-else statement using ternary operator as in below line */}
      {foodItems.length === 0 ? <h3>I am still hungry.</h3> : null}

      {/* same as ternary operator, we can use logical operator, it runs only when both statements are true, it removes/ignores falsy values like empty/null/undefined/0/NaN if any of the statement is false, in below line it will return its immediate next statement inside <h3></h3> if first condition is true*/}
      {/* {foodItems.length === 0 && <h3>I am still hungry.</h3>} */}

      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
