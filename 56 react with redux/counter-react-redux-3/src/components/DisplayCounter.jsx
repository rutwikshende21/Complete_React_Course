import { useSelector } from "react-redux";

const DisplayCounter = () => {
  // using the store
  const counter = useSelector((store) => store.counter);

  return <p className="lead mb-4">Counter current value: {counter}</p>;
};

export default DisplayCounter;
