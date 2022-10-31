import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button className={styles.btn}>{props.name}</button>
    </div>
  );
};

export default Button;
