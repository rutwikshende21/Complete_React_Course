import styles from "./FoodInput.module.css";

const FoodInput = () => {
  // method to handle onChange(),
  // logging event will tell us all the details of activity(typing/changing) done by user, and logging only the event.target.value will give us the exact value given by user
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

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
