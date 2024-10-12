import { useState } from "react";
import Item from "./Item";

// destructing the props directly in below line, by the name items, because items was the name by which data was passed from App Component
const FoodItems = ({ items }) => {
  // creating a useState() to give true boolean value for bought props, to only the items for which buy key is clicked
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item]; // create newItemsnarray of active items, i.e list of items on which Buy button is clicked, first add old activeItems(if any) from activeItems array using spread operator '...', and then add new item on which buy button is clicked using simple comma ','
    setActiveItems(newItems); // using our setActiveItems() method, we will set updated newItems list on our UI
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        // in below line sending props to Item component, passing all item(data) in items by new name foodItem to the Item component. also sending bought boolean data, also sending handleBuyButton function via props, key is not necessory in this example, but it might be some other conditions
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)} // assign true as boolean value, when buy key for that particular item is clicked
          handleBuyButton={(event) => onBuyButton(item, event)} // when Buy button is clicked on any item, sending item, event details to onBuyButton() method
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
