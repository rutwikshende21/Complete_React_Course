import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <p className={styles.welcome}>
      Enjoy Your Day!!! You don't have any pending tasks to do today.
    </p>
  );
};

export default WelcomeMessage;
