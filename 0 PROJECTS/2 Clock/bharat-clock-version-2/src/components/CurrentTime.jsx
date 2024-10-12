import { useEffect } from "react";
import { useState } from "react";

let CurrentTime = () => {
  // using useState to change clock time on our website UI on real-time
  const [time, setTime] = useState(new Date()); // with inital value of time as new Date()
  console.log("Current Time painted");

  // useEffect method will paint the UI in every few millisecond
  useEffect(() => {
    console.log("Interval has been setup");
    // using setInterval method
    const intervalId = setInterval(() => {
      setTime(new Date()); // to update value of time
    }, 1000); // after interval of every 1000 milliSeconds (i.e 1 second)

    return () => {
      clearInterval(intervalId); // cleaning up setInterval method using clearInterval method
      console.log("Cancelled the interval");
    };
  }, []); // because of [] empty array, UI will be painted only once using useEffect hook, useEffect won't run again in re-paint cycles

  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
