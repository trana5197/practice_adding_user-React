import styles from "./InvalidUsernameAge.module.css";
import Button from "../Button/Button";
import { Fragment } from "react";

const InvalidUsernameAge = (props) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default InvalidUsernameAge;
