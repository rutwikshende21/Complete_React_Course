// all the below three function can be used for accessing props, all three having different syntax

// // 1)
// // props is used to access the passed data by other components
// const Item = (props) => {
//   return (
//     <li className="list-group-item">
//       {/*props.foodItem to access the retrieved data, because foodItem was the name by which data was passed from FoodItems component*/}
//       {props.foodItem}
//     </li>
//   );
// };

// // 2)
// const Item = (props) => {
//   // destructing the props directly in below line, by the name foodItem, because foodItem was the name by which data was passed from FoodItems component
//   let { foodItem } = props;
//   return <li className="list-group-item">{foodItem}</li>;
// };

// // 3)
// destructing the props directly in below line, by the name foodItem, because foodItem was the name by which data was passed from FoodItems component
const Item = ({ foodItem }) => {
  return <li className="list-group-item">{foodItem}</li>;
};

export default Item;
