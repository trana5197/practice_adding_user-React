import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button
        className={styles.btn}
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
