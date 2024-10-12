// importing css module, we can give any name instead of styles in below line
import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  // method to handle onClick()
  // in below line, event(we can name it anything) shows all the details about events happened, when we click the button to start the onClick() event. it is not necessary to write event details in our program, we can just write our normal method code, but event might help us understand background activity of our react app
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being bought`);
  };

  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButtonClicked}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
