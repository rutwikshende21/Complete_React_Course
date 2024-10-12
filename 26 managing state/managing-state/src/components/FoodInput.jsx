import styles from "./FoodInput.module.css";

// handleOnChange is function passed via props from App(parent) to child FoodInput(child)
const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onChange={handleOnChange}
    ></input>
  );
};

export default FoodInput;
