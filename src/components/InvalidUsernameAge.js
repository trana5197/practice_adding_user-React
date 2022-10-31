import styles from "./InvalidUsernameAge.module.css";
import Button from "./UI/Button";

const InvalidUsernameAge = () => {
  return (
    <div>
      <div className={styles["invalid-title"]}>
        <h2>Invalid input</h2>
      </div>
      <div className={styles["invalid-desc"]}>
        <h3>Please enter a valid name and age (non-empty values)</h3>
        <Button name="Okay" />
      </div>
    </div>
  );
};

export default InvalidUsernameAge;
