// importing css module, we can any name instead of styles in below line
import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  return (
    // below 2 lines shows correct syntax for className for the css module file, in first line below we used backtick and $ because we also have one extra bootstrap class list-group-item
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
    </li>
  );
};

export default Item;
