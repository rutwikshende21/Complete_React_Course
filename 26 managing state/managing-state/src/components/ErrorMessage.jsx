// destructing the props directly in below line, by the name items, because items was the name by which data was passed from App Component
const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>I am still hungry.</h3>}</>;
};

export default ErrorMessage;
