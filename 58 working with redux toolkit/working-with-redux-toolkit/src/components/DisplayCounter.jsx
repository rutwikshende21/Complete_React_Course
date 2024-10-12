import { useSelector } from "react-redux";

const DisplayCounter = () => {
  // using the store
  // destructuring the counterVal from store directly using useSelector, 'counter' is the slice name
  const { counterVal } = useSelector((store) => store.counter);

  return <p className="lead mb-4">Counter current value: {counterVal}</p>;
};

export default DisplayCounter;
