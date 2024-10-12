import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function App() {
  return (
    /*or directly use <> </> as fragments, no need to import anything also*/
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ul class="list-group">
        <li class="list-group-item">Dal</li>
        <li class="list-group-item">Green Vegetable</li>
        <li class="list-group-item">Roti</li>
        <li class="list-group-item">Salad</li>
        <li class="list-group-item">Milk</li>
      </ul>
    </React.Fragment>
  );
}

export default App;
