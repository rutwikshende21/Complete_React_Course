// we can write our function as an arrow function also
let CurrentTime = () => {
  let time = new Date();
  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
