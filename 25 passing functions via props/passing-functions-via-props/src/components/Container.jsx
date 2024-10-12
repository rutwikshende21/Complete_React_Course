import styles from "./Container.module.css";

const Container = (props) => {
  // using {props.children} weare allowing to write whatever content we want inside Container component, when we invoke/call this component in another component
  return <div className={styles.container}>{props.children}</div>;
};

// // below is same as above, we just directly destrutured the props inside function
// const Container = ({ children }) => {
//   return <div className={styles.container}>{children}</div>;
// };

export default Container;
