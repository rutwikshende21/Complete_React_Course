// importing css module, we can give any name instead of styles in below line
import styles from "./Item.module.css";

// foodItem is data, and bought is boolean data passed via props, while handleBuybutton is a function which are passed via props from FoodItems(parent) to Item(child) component
const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${bought && "active"}`} // if value bought is true,then add 'active' bootstrap class(blue color for active class) to the current className of <li> element
    >
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
