import styles from "./FoodInput.module.css";

// handleKeyDown is function passed via props from App(parent) to child FoodInput(child)
const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onKeyDown={handleKeyDown}
      // this onKeyDown() event handler, handles the event when any key is pressed, but it is always one step behind i.e if you type 'r' it doesn;t show directly 'r' in our UI or console, but when you click any other key eg. 'u', then it shows previous text 'r' on UI or console, so when our complete text 'rutwik' we gave in input, it shows 'rutwi' in our UI or console, but if we click any key like 'enter' key then, it will show 'rutwik' on our UI or console, so basically we can CONSIDER onKeyDown() event handler as an event which handles event after clicking 'enter' key, BECAUSE it works for all keys not only 'enter' key
    ></input>
  );
};

export default FoodInput;
