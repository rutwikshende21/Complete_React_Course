// importing css module, we can give any name instead of styles in below line
import styles from "./Item.module.css";

// foodItem is data, while handleBuybutton is a function which are passed via props from FoodItems(parent) to Item(child) component
const Item = ({ foodItem, handleBuyButton }) => {
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
