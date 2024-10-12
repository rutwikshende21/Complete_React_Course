import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {/* in above line, we gave key={item} instead of key={item.id} because we have not created our items array in id:name format, having separate id for eah item might helo us in conditions where we want to make changes on that particular id item only, instead of applying changes on all the items.
            
            in below line, we gave key={item} instead of key={item.name} because we have not created our items array in id:name format.
            */}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
