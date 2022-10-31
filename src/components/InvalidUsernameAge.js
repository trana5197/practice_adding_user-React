import styles from "./InvalidUsernameAge.module.css";
import Button from "./UI/Button";

const InvalidUsernameAge = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button name="Okay" onClick={props.onConfirm}></Button>
        </footer>
      </div>
    </div>
  );
};

export default InvalidUsernameAge;
