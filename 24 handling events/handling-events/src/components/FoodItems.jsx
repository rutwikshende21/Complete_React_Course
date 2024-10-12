import Item from "./Item";

// destructing the props directly in below line, by the name items, because items was the name by which data was passed from App Component
const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        // in below line sending props to Item component, passing all item in items by new name foodItem to the Item component, key is not necessory in this example, but it might be some other conditions
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
